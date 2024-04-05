import React, { useState } from "react";
import { addUser } from "./userReduser";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const Navigator = useNavigate;
  const dispatch = useDispatch;
  const users = useSelector((state) => state.users);
  const handleSubimt = (event) => {
    event.preventDeafault();
    dispatch(addUser({ id: users[users.lenght - 1].id + 1, name, email }));
    Navigator("/");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubimt}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className=""
            placeholder="enter a name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            className=""
            placeholder="Enter a Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
