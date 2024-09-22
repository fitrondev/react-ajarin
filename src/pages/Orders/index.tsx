import OrderCard from "../../components/layouts/OrderCard";
import OrderSearch from "../../components/layouts/OrderCard/OrderSearch";

const Orders = () => {
  return (
    <section className="pt-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-semibold">All Courses</h3>
            <p className="text-lg">Choose the course you want to learn</p>
          </div>

          <OrderSearch />
        </div>

        <div className="pt-4 grid grid-cols-3 place-items-center gap-y-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <OrderCard key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Orders;
