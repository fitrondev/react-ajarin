import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const OrderCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <Link to="/course-detail/1">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shoes"
          />
        </figure>
      </Link>

      <div className="card-body p-5">
        <h2 className="card-title flex flex-col items-start">
          <Link to="/course-detail/1">
            <span className="line-clamp-2 hover:underline cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              deserunt!
            </span>
          </Link>
          <div className="badge badge-secondary">Programming</div>
        </h2>
        <p className="line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et soluta
          maiores deleniti, sequi omnis beatae.
        </p>
        <div className="card-actions items-center justify-between">
          <div>
            <p className="font-semibold">Rp. 100.000</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/order-courses" className="btn btn-neutral">
              Order Now
            </Link>
            <button className="btn btn-secondary">
              <FaCartShopping className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
