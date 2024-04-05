import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './userReducer';

function Edit() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  
  // Convert id to a number for comparison
  const existingUser = users.find((user) => user.id === Number(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : '');
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editUser({
      id: Number(id),
      name: uname,
      email: uemail
    }));
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Edit
        </button>
      </form>
    </div>
  );
}

export default Edit;