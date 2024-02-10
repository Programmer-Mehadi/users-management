/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export default function UserCard({ user }) {
  return (
    <div className="p-4 bg-white shadow-sm border rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <div>
          <Link
            to={`/user/${user.id}`}
            className="text-lg font-semibold"
          >{`${user.firstName} ${user.lastName}`}</Link>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-700 mb-2">{`Address: ${user.address.address}, ${user.address.city}`}</p>
        <p className="text-gray-700 mb-2">{`Company: ${user.company.name}`}</p>
      </div>
    </div>
  )
}
