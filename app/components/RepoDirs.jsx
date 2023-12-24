import Link from "next/link";
import React from "react";
import { FaFolder } from "react-icons/fa";

const fetchRepoContents = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/saadmosallam/${name}/contents`
  );
  return await response.json();
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <div>
      <h3 style={{ marginBottom: 0 }}>Directories</h3>
      <ul style={{ padding: 8, margin: 0 }}>
        {dirs.map((dir) => (
          <li className="directory-item" key={dir.path}>
            <Link href={dir.html_url}>
              <FaFolder />
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
