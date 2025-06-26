"use client";
import React, { useEffect, useState } from "react";

const GetUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const response = await fetch("/api/user");
        const result = await response.json();
        setData(result.users || result); // Adjust if your response structure varies
      } catch (err) {
        console.error("server side error", err);
      }
    };
    handleGetUser();
  }, []);
////////////////////////////// delete user
  const handledelete =async(id) =>{
    try{
      let deleteUser = await fetch("/api/user",{
        method:"DELETE",
        body:JSON.stringify({id})
      })
      deleteUser= await deleteUser.json()
      if(deleteUser){
        window.location.reload()
       return alert("user deleted succesfully")
      }
      if(!deleteUser){
        return alert("failed to delete!")
      }

     
    }catch(err){
      console.error("server side error occured",err)
    }
  }
////////////////////////////// delete user


     

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        User Table
      </h1>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-6 text-left">#ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Created At</th>
              <th className="py-3 px-6 text-left">Updated At</th>
              <th className="py-3 px-6 text-left">remove</th>
            </tr>
          </thead>
          <tbody>
            {[...data].reverse().map((user, index) => (
              <tr
                key={index}
                className="border-t border-gray-200"
              >
                <td className="py-3 px-6">{user.id}</td>
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="py-3 px-6">
                  {new Date(user.updatedAT).toLocaleString()}
                </td>
                <td className="py-3 px-6 ">
                  <button onClick={()=>handledelete(user.id)} className="text-red-700 hover:opacity-[0.7] cursor-pointer">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetUser;
