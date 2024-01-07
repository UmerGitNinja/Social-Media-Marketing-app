import Navbar from "./components/navbar";
import Order from "./components/order";

export default function OrderPage({
  searchParams,
}: {
  searchParams: {
    Url: string;
    label: string;
    CreatorId: string;
    Private: string;
  };
}) {
  const imageUrl = `/api/image?url=${encodeURIComponent(searchParams.Url)}`;
  return (
    <main className="flex flex-col">
      <Navbar />
      <Order
        image={imageUrl}
        name={searchParams.label}
        CreaterId={searchParams.CreatorId}
        Private={searchParams.Private}
      />
    </main>
  );
}
