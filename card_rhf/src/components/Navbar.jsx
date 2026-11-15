function Navbar({ setShowForm }) {

  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">

      <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        py-4 
        flex 
        justify-between 
        items-center
      ">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          User Manager
        </h1>


        {/* Add User Button */}
        <button
          onClick={() => setShowForm(true)}
          className="
            bg-blue-600 
            hover:bg-blue-700 
            px-5 
            py-2 
            rounded-lg 
            font-medium
            transition
          "
        >
          Add User
        </button>


      </div>

    </nav>
  );
}


export default Navbar;