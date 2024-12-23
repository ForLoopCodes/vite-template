import { useState } from "react";
import { Input } from "@/components/ui/input";
import supabase from "@/supabaseClient";
import SHA256 from "crypto-js/sha256";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setLoading(true);
    try {
      const hashedPassword = SHA256(password).toString();

      // Find the user in the database
      const { data: user, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      if (userError) throw userError;

      // Check if the hashed password matches
      if (user.password_hash !== hashedPassword) {
        setError("Incorrect email or password.");
        setLoading(false);
        return;
      }

      // If successful, you can handle the login process, for example:
      console.log("User logged in:", user);

      // Optionally, you might want to store user session here:
      // await supabase.auth.setSession(...)

      setLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Error logging in: " + err.message);
      } else {
        setError("Unknown error occurred.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="p-24 w-1/2 mx-auto">
      <h1>Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn mt-4" disabled={loading}>
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
    </div>
  );
};
