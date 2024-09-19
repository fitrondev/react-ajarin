import { logoImg } from "../assets/images";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoImg} alt="" />
      <p className="text-neutral text-3xl font-bold">Ajarin</p>
    </div>
  );
};
export default Logo;
