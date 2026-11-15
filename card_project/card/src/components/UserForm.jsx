import { useEffect, useState } from "react";

const UserForm = ({ addUser, editUser, updateUser, setShowForm }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      updateUser(user);
    } else {
      addUser({
        ...user,
        id: Date.now(),
      });
    }

    setUser({
      name: "",
      email: "",
      phone: "",
    });

    setShowForm(false);
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-slate-700">
          {editUser ? "Update User" : "Add User"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      
        

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={user.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          {editUser ? "Update User" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;