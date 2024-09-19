import { IoMenu } from "react-icons/io5";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <div className="lg:hidden max-w-max drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4">
          <IoMenu className="size-6 font-bold" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <Nav className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex items-center justify-center text-2xl font-semibold gap-y-4" />
      </div>
    </div>
  );
};
export default MobileNav;
