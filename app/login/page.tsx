"use client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[180px] -top-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] bottom-0 right-0" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">ThreatLens XDR</h1>

            <p className="text-cyan-400 mt-2">
              Security Monitoring & Threat Detection Platform
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-300">Username</label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-cyan-500 outline-none"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-cyan-500 outline-none"
                placeholder="Enter password"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-cyan-600 hover:bg-cyan-700 transition-all p-3 rounded-lg font-semibold"
            >
              Sign In
            </button>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            Cyber Threat Intelligence • Incident Response • SOC Dashboard
          </div>
        </div>
      </div>
    </main>
  );
}
