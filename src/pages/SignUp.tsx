import { useState } from "react";
import { Input } from "@/components/ui/input";
import supabase from "@/supabaseClient";
import SHA256 from "crypto-js/sha256";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [role, setRole] = useState("customer"); // Default role
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const hashedPassword = SHA256(password).toString();
      const { data, error } = await supabase.auth.signUp({
        email,
        password: hashedPassword,
      });
      if (error) throw error;
      const { error: insertError } = await supabase.from("users").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone_number: phoneNumber,
          profile_picture: "", // Optional
          date_of_birth: dateOfBirth,
          password_hash: hashedPassword,
          role,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
      if (insertError) throw insertError;
      console.log("User created successfully:", data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Error creating user: " + err.message);
      } else {
        setError("Unknown error occurred.");
      }
    }
  };
  return (
    <div className="p-24 w-1/2 mx-auto">
      <h1>Create New User</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="first-name">First Name</label>
          <Input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <Input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
          <label htmlFor="phone-number">Phone Number</label>
          <Input
            id="phone-number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <Input
            id="dob"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="delivery_person">Delivery Person</option>
          </select>
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
        <button type="submit" className="btn mt-4">
          Create Account
        </button>
      </form>
    </div>
  );
};
