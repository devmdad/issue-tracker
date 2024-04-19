import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  in_progress: number;
  closed: number;
}

const IssueSummary = ({ open, in_progress, closed }: Props) => {
  const statuses: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress", value: in_progress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <div>
      <Flex gap="5">
        {statuses.map((container) => (
          <Card key={container.label}>
            <Flex direction="column" gap="1">
              <Link
                className="text-sm font-medium"
                href={`/issues/list?status=${container.status}`}
              >
                {container.label}
              </Link>
              <Text size="5" className="font-bold">
                {container.value}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default IssueSummary;
