type NavProps = {
  className?: string;
};

const Nav = ({ className }: NavProps) => {
  return (
    <nav className={`${className}`}>
      <span className="cursor-pointer">Home</span>
      <span className="cursor-pointer">About</span>
      <span className="cursor-pointer">Services</span>
      <span className="cursor-pointer">Contact</span>
    </nav>
  );
};
export default Nav;
