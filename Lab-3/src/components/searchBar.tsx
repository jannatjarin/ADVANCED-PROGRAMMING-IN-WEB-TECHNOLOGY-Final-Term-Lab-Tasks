import { useStudents } from '../context/StudentContext'

function SearchBar() {
  const {
    query,
    setQuery,
  } = useStudents()

  return (
    <input
      className="searchBar"
      type="text"
      value={query}
      onChange={(event) =>
        setQuery(event.target.value)
      }
      placeholder="Search by name or major..."
    />
  )
}

export default SearchBar