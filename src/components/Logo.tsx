import { logoImg } from "../assets/images";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoImg} alt="" className="size-8" />
      <p className="text-neutral text-2xl font-bold">Ajarin</p>
    </div>
  );
};
export default Logo;
