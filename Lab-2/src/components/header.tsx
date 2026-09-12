type HeaderProps = {
  favoriteCount: number
}

function Header({ favoriteCount }: HeaderProps) {
  return (
    <header className="dashboardHeader">
      <div>
        <h2>Student Portal</h2>
        <p>Academic Dashboard</p>
      </div>

      <nav>
        <a href="#students">Students</a>
        <a href="#students">Favorites: {favoriteCount}</a>
      </nav>
    </header>
  )
}

export default Header