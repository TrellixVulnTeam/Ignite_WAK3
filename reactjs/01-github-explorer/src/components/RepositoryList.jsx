import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/users/itallosavieira/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/itallosavieira/repos')
      .then(response => response.json()
      .then(data => setRepositories(data))
    )
  }, []);

  return (
    <section className='repository-list'>
      <h1> Repository List </h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} />
        )
        )}
      </ul>
    </section>
  );
}
