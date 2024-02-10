import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export default function AddUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          toast.success("User created successfully")
          reset()
        } else {
          toast.error("Something went wrong")
        }
      })
  }

  return (
    <div className="py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">First Name is required*</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Maiden Name
          </label>
          <input
            type="text"
            name="maidenName"
            {...register("maidenName", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.maidenName && (
            <p className="text-red-500 text-sm">Maiden Name is required*</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">Last Name is required*</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="age"
            {...register("age", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">Age is required*</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required*</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            {...register("address", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">Address is required*</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">City</label>
          <input
            type="text"
            name="city"
            {...register("city", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">City is required*</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            {...register("companyName", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">Company name is required*</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  )
}
