import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <p>Dashboard</p>
      <Pagination
        itemsCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page) || 1}
      />
    </div>
  );
}
