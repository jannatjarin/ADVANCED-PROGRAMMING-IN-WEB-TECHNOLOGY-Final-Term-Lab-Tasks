import { useStudents } from '../context/StudentContext'

function SortControls() {
  const {
    sort,
    setSort,
  } = useStudents()

  return (
    <div className="sortControls">
      <button
        className={
          sort === 'default'
            ? 'active'
            : ''
        }
        onClick={() =>
          setSort('default')
        }
      >
        Default
      </button>

      <button
        className={
          sort === 'name'
            ? 'active'
            : ''
        }
        onClick={() =>
          setSort('name')
        }
      >
        Name (A-Z)
      </button>

      <button
        className={
          sort === 'gpa'
            ? 'active'
            : ''
        }
        onClick={() =>
          setSort('gpa')
        }
      >
        GPA (High-Low)
      </button>
    </div>
  )
}

export default SortControls