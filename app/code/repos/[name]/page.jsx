import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import LoadingPage from "@/app/loading";
import Link from "next/link";
import React, { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back to Repositories
      </Link>

      <Repo name={name} />
      <Suspense
        fallback={
          <div className="loader">
            <div className="spinner"></div>
          </div>
        }
      >
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
