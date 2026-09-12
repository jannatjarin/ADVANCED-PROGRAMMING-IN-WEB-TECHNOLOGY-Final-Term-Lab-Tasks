type SearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
}

function SearchBar({
  query,
  onQueryChange,
}: SearchBarProps) {
  return (
    <input
      className="searchBar"
      type="text"
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
      placeholder="Search by name or major"
    />
  )
}

export default SearchBar