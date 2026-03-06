import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { createUser, signInUser, signInWithGoogle, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warn("Email and password are required.");
      return;
    }

    try {
      if (isRegisterMode) {
        await createUser(email, password);
        toast.success("Account created and signed in.");
      } else {
        await signInUser(email, password);
        toast.success("Signed in successfully.");
      }
    } catch (error) {
      toast.error(error?.message || "Authentication failed.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google.");
    } catch (error) {
      toast.error(error?.message || "Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-base-300 bg-base-100 p-6 shadow-lg space-y-5">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">
            {isRegisterMode ? "Create account" : "Sign in"}
          </h1>
          <p className="text-sm opacity-70">
            Use Firebase Authentication to access MovieMango.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <span className="label-text mb-1">Email</span>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text mb-1">Password</span>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              autoComplete={isRegisterMode ? "new-password" : "current-password"}
              required
            />
          </label>

          <button className="btn btn-primary w-full" type="submit" disabled={loading}>
            {isRegisterMode ? "Create Account" : "Sign In"}
          </button>
        </form>

        <button
          className="btn btn-outline w-full"
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          Continue with Google
        </button>

        <button
          className="btn btn-ghost btn-sm w-full"
          type="button"
          onClick={() => setIsRegisterMode((prev) => !prev)}
          disabled={loading}
        >
          {isRegisterMode
            ? "Already have an account? Sign in"
            : "Need an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
