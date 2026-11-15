const UserCard = ({ user, deleteUser, editHandler }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-slate-800">
        {user.name}
      </h2>

      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Email:</span> {user.email}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => editHandler(user)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
        >
          Update
        </button>

        <button
          onClick={() => deleteUser(user.id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;