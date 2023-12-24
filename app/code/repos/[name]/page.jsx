import Repo from "@/app/components/Repo";
import Link from "next/link";
import React from "react";

const RepoPage = ({ params }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back to Repositories
      </Link>
      <Repo name={params.name} />
    </div>
  );
};

export default RepoPage;
