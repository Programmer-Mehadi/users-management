/* eslint-disable react/prop-types */
export default function Filter({
  searchValue,
  setSearchValue,
  sortBy,
  sortUsersData,
}) {
  return (
    <div className="pb-6 flex gap-4 flex-wrap">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Type here..."
        className="input input-bordered w-full max-w-xs rounded-[4px]"
      />
      <select
        className="select select-bordered w-full max-w-xs"
        value={sortBy}
        onChange={(e) => {
          sortUsersData(e.target.value)
        }}
      >
        <option selected value="">
          Sort By default
        </option>
        <option value="name">Sort by name</option>
        <option value="email">Sort by email</option>
        <option value="company">Sort by Company name</option>
      </select>
    </div>
  )
}
