import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body space-y-4">
          <h2 className="card-title text-2xl">Login</h2>
          <p className="text-sm text-base-content/70">
            Firebase auth will be connected here later.
          </p>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              disabled
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              disabled
            />
          </label>

          <div className="card-actions flex-col sm:flex-row sm:justify-between">
            <button className="btn btn-primary w-full sm:w-auto" disabled>
              Log In
            </button>
            <Link to="/" className="btn btn-ghost w-full sm:w-auto">
              Back Home
            </Link>
          </div>

          <p className="text-sm text-base-content/70">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="link link-primary">
              Go to Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;