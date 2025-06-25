"use client";
import React, { useRef } from "react";

const AddUser = () => {
  const nameref = useRef();
  const emailref = useRef();

  const clearInputs = () => {
    nameref.current.value = "";
    emailref.current.value = "";
  };

  const handleAddUser = async () => {
    const name = nameref.current.value;
    const email = emailref.current.value;
    try {
      let response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      response = await response.json();
      clearInputs();
      if (response.success || response.id) {
        alert("✅ User added successfully!");
      } else {
        alert("❌ Failed to add user.");
      }
    } catch (err) {
      console.error("Server side error occurred", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Add New User
        </h1>
        <div className="space-y-4">
          <input
            ref={nameref}
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            ref={emailref}
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddUser}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          ➕ Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
