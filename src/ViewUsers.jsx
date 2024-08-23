import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "./redux/slices/userSlice";

const ViewUsers = () => {
  const users = useSelector((state) => state.adduser.value);
  const dispatch = useDispatch();
  let [user, setUser] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    setUser(users);
  },[users]);
  //   console.log(user);
  return (
    <div className="w-[80%] mx-auto bg-slate-100 p-[20px] my-[50px] ">
      <div className="w-full relative">
        <h1 className="text-[20px] text-center my-[25px] font-[500]">Users</h1>
        <button
          className="bg-blue-400 rounded-md p-1 text-white absolute right-[10px] top-0"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
      <table className="border w-full">
        <thead>
          <tr className="bg-slate-400">
            <th className="p-2 font-[400] text-white">S.no</th>
            <th className="p-2 font-[400] text-white">id</th>
            <th className="p-2 font-[400] text-white">First Name</th>
            <th className="p-2 font-[400] text-white">Last Name</th>
            <th className="p-2 font-[400] text-white">Age</th>
            <th className="p-2 font-[400] text-white">Contact</th>
            <th className="p-2 font-[400] text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((v, i) => {
              return (
                <tr>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    {i + 1}
                  </td>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    {v._id}
                  </td>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    {v.f_name}
                  </td>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    {v.l_name}
                  </td>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    {v.age}
                  </td>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    {v.contact}
                  </td>
                  <td className="text-semibold p-2 text-[13px] border box-border">
                    <button
                      className="bg-red-600 text-white p-[10px] rounded-md"
                      onClick={() => dispatch(deleteUser(v._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="h-[100px] bg-white">
              <td colSpan={7} className="text-center text-[20px] ">
                No user Added
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
