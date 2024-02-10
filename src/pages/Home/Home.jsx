import { useEffect } from "react"
import { useState } from "react"
import UserCard from "./UserCard"

export default function Home() {
  const [users, setUsers] = useState(null)
  const [paginations, setPaginations] = useState({
    limit: 10,
    page: 0,
  })
  useEffect(() => {
    fetch(
      `https://dummyjson.com/users?limit=${paginations.limit}&skip=${
        paginations.page * paginations.limit
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data?.users)
      })
  }, [paginations])

  return (
    <div className="py-14">
      {users === null ? (
        <div className="min-h-[300px] flex justify-center items-center">
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-sm"></span>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              users.map((user) => <UserCard user={user} key={user.id} />)
            )}
          </div>
          <div className="py-10 flex justify-center items-center gap-4">
            <button
              className="bg-blue-500 text-white px-5 py-1 rounded-sm"
              onClick={() =>
                setPaginations({ ...paginations, page: paginations.page - 1 })
              }
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-5 py-1 rounded-sm"
              onClick={() =>
                setPaginations({ ...paginations, page: paginations.page + 1 })
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
