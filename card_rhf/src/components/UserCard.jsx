function UserCard({ user, deleteUser, editHandler }) {

  return (

    <div className="
      bg-white 
      rounded-xl 
      shadow-md 
      p-6
      hover:shadow-xl
      transition
    ">

      {/* User Details */}
      <h2 className="
        text-2xl 
        font-bold 
        text-slate-800
      ">
        {user.name}
      </h2>


      <div className="mt-4 space-y-2 text-gray-600">

        <p>
          <span className="font-semibold">
            Email:
          </span>{" "}
          {user.email}
        </p>


        <p>
          <span className="font-semibold">
            Phone:
          </span>{" "}
          {user.phone}
        </p>

      </div>



      {/* Buttons */}
      <div className="
        flex 
        gap-3 
        mt-6
      ">


        {/* Update Button */}
        <button

          onClick={() => editHandler(user)}

          className="
            flex-1
            bg-yellow-500
            hover:bg-yellow-600
            text-white
            py-2
            rounded-lg
            font-medium
            transition
          "
        >
          Update
        </button>



        {/* Delete Button */}
        <button

          onClick={() => deleteUser(user.id)}

          className="
            flex-1
            bg-red-500
            hover:bg-red-600
            text-white
            py-2
            rounded-lg
            font-medium
            transition
          "
        >
          Delete
        </button>


      </div>


    </div>

  );
}


export default UserCard;