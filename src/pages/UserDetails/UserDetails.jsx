/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loader from "../../components/shared/Loader"

export default function UserDetails() {
  const params = useParams()
  const { id } = params
  const [user, setUser] = useState(null)

  function fetchData() {
    fetch("https://dummyjson.com/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
      })
  }

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id])

  return (
    <div className="py-14">
      {user === null ? (
        <>
          <div className="min-h-[300px] flex justify-center items-center">
            <Loader />
          </div>
        </>
      ) : (
        <div className="max-w-[500px] mx-auto">
          <Link to="/" className="underline cursor-pointer text-blue-700">
            Back
          </Link>
          <div className="p-4 bg-white shadow-sm border rounded-lg mt-5">
            <div className="flex items-center justify-between mb-4">
              <img
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <div>
                <h2 className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-2">{`Address: ${user.address.address}, ${user.address.city}`}</p>
              <p className="text-gray-700 mb-2">{`Company: ${user.company.name}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
