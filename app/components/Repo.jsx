import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const repo = await fetch(
    `https://api.github.com/repos/saadmosallam/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return await repo.json();
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <dev className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </dev>
        <dev className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </dev>
        <dev className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </dev>
      </div>
    </>
  );
};

export default Repo;
