import dynamic from "next/dynamic";
import React from "react";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const NewIssuePage = () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
