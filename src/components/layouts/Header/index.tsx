import Logo from "../../Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-x-10">
          <Logo />

          <Nav className="hidden lg:flex gap-4 font-semibold" />
        </div>

        <div className="hidden lg:block space-x-4">
          <button className="btn btn-active">Pesan Sekarang</button>
          <button className="btn btn-neutral">Login</button>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
};
export default Header;
