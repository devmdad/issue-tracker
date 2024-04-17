import authOptions from "@/app/auth/authOptions";
import { IssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function PATCH(
  request: NextResponse,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

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
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return NextResponse.json("Record not found", { status: 404 });

  await prisma.issue.delete({ where: { id: issue.id } });
  return NextResponse.json({});
}

// export async function AssigneeSelection(
//   request: NextResponse,
//   { params }: { params: { id: string } }
// ) {

//   const issue = await prisma.issue.findUnique({
//     where: { id: parseInt(params.id) },
//   });
//   if (!issue) return NextResponse.json("No record found", { status: 404 });

//   const body = await request.json();
//   if(body.assignee)


//   await prisma.issue.update({where: {id: issue.id}, data{}})
// }
