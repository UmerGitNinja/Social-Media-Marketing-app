import Navbar from "./components/navbar";
import Order from "./components/order";

export default async function OrderPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Order />
    </main>
  );
}
