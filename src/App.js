// import logo from './logo.svg';
// import './App.css';

import { useDispatch } from "react-redux";
import { addUsers } from "./redux/slices/userSlice";

import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  // const user = useSelector((state) => state.adduser.value);
  const dispatch = useDispatch();
  // console.log("user", user);
  let User = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 9999 * 10000);
    let user = {
      _id: +id,
      f_name: e.target.f_name.value,
      l_name: e.target.l_name.value,
      age: e.target.age.value,
      contact: e.target.contact.value,
    };
    // console.log("data", user);
    dispatch(addUsers(user));
    let form = document.querySelector("form");
    form.reset();
  };

  return (
    <div className="w-[80%] mx-auto  h-[400px] bg-slate-100 p-[20px] shadow-lg my-[50px]">
      <h1 className="text-[25px] font-semibold text-center">Add User</h1>
      <form onSubmit={(e) => User(e)}>
        <input
          type="text"
          name="f_name"
          placeholder="First name"
          className="w-full p-2 focus:outline-none my-[10px]"
        />
        <input
          type="text"
          name="l_name"
          placeholder="Last name"
          className="w-full p-2 focus:outline-none my-[10px]"
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          className="w-full p-2 focus:outline-none my-[10px]"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          className="w-full p-2 focus:outline-none my-[10px]"
        />
        <div className="w-full flex items-center justify-around">
          <button className="w-[100px] h-[40px] bg-blue-500 text-white font-semibold rounded-md my-[20px]">
            Add User
          </button>
          <button
            className="w-[100px] h-[40px] bg-blue-500 text-white font-semibold rounded-md my-[20px]"
            onClick={() => navigate("/view-users")}
          >
            View User
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
