import { IssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import delay from "delay";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function PATCH(
  request: NextResponse,
  { params }: { params: { id: string } }
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  const body = await request.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json("Invalid Data", { status: 400 });
  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: body,
  });
  return NextResponse.json(updatedIssue, { status: 200 });
}

export async function DELETE(
  request: NextResponse,
  { params }: { params: { id: string } }
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return NextResponse.json("Record not found", { status: 404 });

  await delay(2000);
  await prisma.issue.delete({ where: { id: issue.id } });
  return NextResponse.json({});
}
