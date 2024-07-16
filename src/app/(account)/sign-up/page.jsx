"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const { setCurrentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/sign-up", {
        email,
        password,
        name,
      });
      if (response.status === 200) {
        const { token, user_email, user_nicename, user_display_name } = response.data;
        const user = {
          email: user_email,
          nicename: user_nicename,
          displayName: user_display_name,
        };
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Registration failed", error.response.data);
    }
  };

  return (
    <section className="sign-in">
      <div className="_container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
}
