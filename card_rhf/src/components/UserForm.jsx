import { useEffect } from "react";
import { useForm } from "react-hook-form";


function UserForm({
  addUser,
  editUser,
  updateUser,
  setShowForm
}) {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();



  // Update ke time old data fill karna
  useEffect(() => {

    if (editUser) {
      reset(editUser);
    } 
    else {
      reset({
        name: "",
        email: "",
        phone: ""
      });
    }

  }, [editUser, reset]);



  const onSubmit = (data) => {


    if (editUser) {

      updateUser({
        ...data,
        id: editUser.id
      });

    } 
    else {

      addUser(data);

    }


    reset();

  };



  return (

    <div className="
      flex 
      justify-center 
      mt-10
      px-4
    ">


      <form

        onSubmit={handleSubmit(onSubmit)}

        className="
          bg-white
          shadow-lg
          rounded-xl
          p-6
          w-full
          max-w-md
          space-y-4
        "
      >


        <h2 className="
          text-2xl
          font-bold
          text-center
          text-slate-700
        ">

          {
            editUser 
            ? "Update User" 
            : "Add User"
          }

        </h2>



        {/* Name */}

        <div>

          <input

            type="text"

            placeholder="Enter Name"

            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "


            {...register("name", {

              required: "Name is required"

            })}

          />


          {
            errors.name && (

              <p className="text-red-500 text-sm mt-1">

                {errors.name.message}

              </p>

            )
          }


        </div>




        {/* Email */}

        <div>

          <input

            type="email"

            placeholder="Enter Email"


            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "


            {...register("email", {

              required: "Email is required",

              pattern: {

                value: /^\S+@\S+$/i,

                message: "Enter valid email"

              }

            })}


          />


          {
            errors.email && (

              <p className="text-red-500 text-sm mt-1">

                {errors.email.message}

              </p>

            )
          }


        </div>





        {/* Phone */}

        <div>

          <input

            type="text"

            placeholder="Enter Phone"


            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "


            {...register("phone", {

              required: "Phone is required",

              minLength: {

                value: 10,

                message: "Phone must be 10 digits"

              }

            })}


          />


          {
            errors.phone && (

              <p className="text-red-500 text-sm mt-1">

                {errors.phone.message}

              </p>

            )
          }


        </div>





        {/* Submit Button */}

        <button

          type="submit"

          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-lg
            font-medium
          "

        >

          {
            editUser
            ? "Update User"
            : "Submit"
          }


        </button>



        {/* Cancel Button */}

        <button

          type="button"

          onClick={() => {

            setShowForm(false);

            reset();

          }}

          className="
            w-full
            bg-gray-400
            hover:bg-gray-500
            text-white
            py-3
            rounded-lg
          "

        >

          Cancel

        </button>



      </form>


    </div>

  );

}


export default UserForm;