import Pagination from "./components/Pagination";

export default function Home() {
  
  return (
    <div>
      <p>Dashboard</p>
      <Pagination itemsCount={100} pageSize={10} currentPage={2} />
    </div>
  );
}
