import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Add User
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Delete User
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Open Form for Update
  const editHandler = (user) => {
    setEditUser(user);
    setShowForm(true);
  };

  // Update User
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    setUsers(updatedUsers);
    setEditUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar setShowForm={setShowForm} />

      {showForm && (
        <UserForm
          addUser={addUser}
          editUser={editUser}
          updateUser={updateUser}
          setShowForm={setShowForm}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-10">
        {users.length === 0 ? (
          <h2 className="text-center text-gray-500 text-xl">
            No Users Found
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                editHandler={editHandler}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;