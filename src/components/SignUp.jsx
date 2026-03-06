import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body space-y-4">
          <h2 className="card-title text-2xl">Sign Up</h2>
          <p className="text-sm text-base-content/70">
            Firebase registration will be connected here later.
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
              placeholder="Create a password"
              className="input input-bordered w-full"
              disabled
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full"
              disabled
            />
          </label>

          <div className="card-actions flex-col sm:flex-row sm:justify-between">
            <button className="btn btn-secondary w-full sm:w-auto" disabled>
              Create Account
            </button>
            <Link to="/" className="btn btn-ghost w-full sm:w-auto">
              Back Home
            </Link>
          </div>

          <p className="text-sm text-base-content/70">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Go to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;