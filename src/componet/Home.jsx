import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteUser } from "./userReduser";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container">
      <h2>Crud App with JSON server</h2>
      <Link to="/create">
        <button className="btn btn-success my-3">Create</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger ms-1"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
