import { FaSearch } from "react-icons/fa";

const OrderSearch = () => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />

      <button className="btn btn-primary">
        <FaSearch className="size-5 text-white" />
      </button>
    </div>
  );
};
export default OrderSearch;
