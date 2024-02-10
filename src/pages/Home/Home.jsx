/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useState } from "react"
import UserCard from "./UserCard"
import Loader from "../../components/shared/Loader"

export default function Home() {
  const [users, setUsers] = useState(null)
  const [paginations, setPaginations] = useState({
    limit: 10,
    page: 0,
  })

  async function fetchData(limit = paginations.limit, page = paginations.page) {
    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${page * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="py-14">
      {users === null ? (
        <div className="min-h-[300px] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.users.length === 0 ? (
              <p>No users found</p>
            ) : (
              users.users.map((user) => <UserCard user={user} key={user.id} />)
            )}
          </div>
          <div className="py-10 flex justify-center items-center gap-4">
            <button
              className={`bg-blue-500 text-white px-5 py-1 rounded-sm ${
                paginations.page === 0
                  ? "disabled cursor-not-allowed bg-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (paginations.page > 0) {
                  setPaginations({ ...paginations, page: paginations.page - 1 })
                  fetchData(paginations.limit, paginations.page - 1)
                }
              }}
            >
              Previous
            </button>
            <button
              className={`bg-blue-500 text-white px-5 py-1 rounded-sm ${
                (paginations.page + 1) * paginations.limit >= users?.total
                  ? "cursor-not-allowed bg-gray-300"
                  : ""
              }`}
              onClick={() => {
                if ((paginations.page + 1) * paginations.limit < users?.total) {
                  setPaginations({ ...paginations, page: paginations.page + 1 })
                  fetchData(paginations.limit, paginations.page + 1)
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
