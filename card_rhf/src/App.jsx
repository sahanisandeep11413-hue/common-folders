import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";


function App() {

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editUser, setEditUser] = useState(null);


  // Get data from localStorage
  useEffect(() => {

    const savedUsers = JSON.parse(
      localStorage.getItem("users")
    ) || [];

    setUsers(savedUsers);

  }, []);



  // Save data to localStorage
  useEffect(() => {

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

  }, [users]);



  // Add User
  const addUser = (data) => {

    const newUser = {
      id: Date.now(),
      ...data
    };

    setUsers([
      ...users,
      newUser
    ]);

    setShowForm(false);
  };



  // Delete User
  const deleteUser = (id) => {

    const filteredUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(filteredUsers);

  };



  // Edit Button Click
  const editHandler = (user) => {

    setEditUser(user);

    setShowForm(true);

  };



  // Update User
  const updateUser = (data) => {

    const updatedUsers = users.map((user) =>
      user.id === data.id
        ? data
        : user
    );


    setUsers(updatedUsers);

    setEditUser(null);

    setShowForm(false);

  };



  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar
        setShowForm={setShowForm}
      />


      {
        showForm && (

          <UserForm

            addUser={addUser}

            editUser={editUser}

            updateUser={updateUser}

            setShowForm={setShowForm}

          />

        )
      }



      <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        py-10
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      ">

        {
          users.map((user)=>(

            <UserCard

              key={user.id}

              user={user}

              deleteUser={deleteUser}

              editHandler={editHandler}

            />

          ))
        }


      </div>


    </div>

  );
}


export default App;