import { Table } from "@radix-ui/themes";
import Link from "@/app/components/Link";
import NextLink from "next/link";
import React, { useState } from "react";
import { IssueStatusBadge } from "../../components";
import { Issue, Status } from "@prisma/client";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import prisma from "@/prisma/client";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}

const ShowIssues = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const columns: { label: string; value: keyof Issue; classname?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", classname: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", classname: "hidden md:table-cell" },
  ];

  const orderBy = columns.map((col) => col.value).includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
  });

  return (
    <Table.Root variant="surface" className="mt-5">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell key={column.value} className={column.classname}>
              <NextLink
                href={{
                  query: { ...searchParams, orderBy: column.value },
                }}
              >
                {column.label}
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline" />
                )}
              </NextLink>
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>

              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ShowIssues;
