import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/itallosavieira'
}

export function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1> Repository List </h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
