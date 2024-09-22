import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default RootLayout;
