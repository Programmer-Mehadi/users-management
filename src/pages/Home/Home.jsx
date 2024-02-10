/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useState } from "react"
import UserCard from "./UserCard"
import Loader from "../../components/shared/Loader"
import Filter from "./Filter"

export default function Home() {
  const [users, setUsers] = useState(null)
  const [paginations, setPaginations] = useState({
    limit: 10,
    page: 0,
  })
  const [searchValue, setSearchValue] = useState("")
  const [sortBy, setSortBy] = useState("")

  async function fetchData(limit = paginations.limit, page = paginations.page) {
    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${page * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }

  function sortUsersData(by) {
    setSortBy(by)
    const preUsers = users.users

    let sortedUsers = [...preUsers]

    switch (by) {
      case "name":
        sortedUsers.sort((a, b) =>
          `${a.firstName} ${a.maidenName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.maidenName} ${b.lastName}`
          )
        )
        break
      case "company":
        sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name))
        break
      case "email":
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email))
        break
      default:
        break
    }

    setUsers({
      ...users,
      users: sortedUsers,
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
          <Filter
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            sortBy={sortBy}
            sortUsersData={sortUsersData}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.users.length === 0 ? (
              <p>No users found</p>
            ) : (
              users.users
                .filter((user) => {
                  if (
                    `${user.firstName} ${user.maidenName} ${user.lastName} ${user.email}`
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return user
                  }
                })
                .map((user) => <UserCard user={user} key={user.id} />)
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
