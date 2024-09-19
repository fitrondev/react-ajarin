import { Link } from "react-router-dom";
import { loginImg } from "../../../assets/images";

const Login = () => {
  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-neutral flex flex-col items-center justify-center gap-4">
        <div className="text-white">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <p className="text-sm text-center mt-2">
            Welcome back, please login to your account
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="input your email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="input your password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-4">
              <button className="btn btn-neutral">Login</button>
            </div>

            <div>
              <p className="text-center mt-2">
                Don't have an account?{" "}
                <Link to="/auth/register" className="btn-link text-neutral">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center">
        <img src={loginImg} alt="" loading="lazy" className="size-[600px]" />
      </div>
    </section>
  );
};
export default Login;
