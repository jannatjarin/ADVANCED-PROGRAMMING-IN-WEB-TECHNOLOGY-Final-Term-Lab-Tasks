import { useTheme } from '../context/ThemeContext'
import { useStudents } from '../context/StudentContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  const { favoriteCount } = useStudents()

  return (
    <header className="dashboardHeader">
      <div>
        <h2>Student Portal</h2>

        <p>Academic Dashboard</p>
      </div>

      <nav>
        <a href="#students">
          Students
        </a>

        <a href="#add-student">
          Add Student
        </a>

        <span>
          Favorites: {favoriteCount}
        </span>

        <button onClick={toggleTheme}>
          {theme === 'light'
            ? 'Dark Mode'
            : 'Light Mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header