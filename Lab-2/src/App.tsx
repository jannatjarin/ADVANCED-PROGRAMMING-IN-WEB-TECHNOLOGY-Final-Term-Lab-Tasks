import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/header'
import SearchBar from './components/SearchBar'
import SortControls from './components/SortControls'
import StudentCard from './components/studentCard'

export type Student = {
  id: string
  name: string
  major: string
  gpa: number
  avatar: string
  courses: string[]
  favorite: boolean
}

type SortType = 'default' | 'name' | 'gpa'

const studentData: Student[] = [
  {
    id: '23-888990-2',
    name: 'Mr. Meow',
    major: 'Computer Science',
    gpa: 3.99,
    avatar: 'https://i.pravatar.cc/150?img=12',
    courses: ['React', 'Database', 'AI'],
    favorite: false,
  },

  {
    id: '21-989898-2',
    name: 'Mr. ToM',
    major: 'Software Engineering',
    gpa: 2.49,
    avatar: 'https://i.pravatar.cc/150?img=13',
    courses: ['React', 'Web Technology'],
    favorite: false,
  },

  {
    id: '22-777777-1',
    name: 'Sarah Khan',
    major: 'Electrical Engineering',
    gpa: 3.75,
    avatar: 'https://i.pravatar.cc/150?img=47',
    courses: ['Embedded Systems', 'Signals'],
    favorite: false,
  },

  {
    id: '24-666666-3',
    name: 'Nadia Rahman',
    major: 'Information Technology',
    gpa: 3.55,
    avatar: 'https://i.pravatar.cc/150?img=44',
    courses: ['Networking', 'React', 'Security'],
    favorite: false,
  },
]

function App() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  const [query, setQuery] = useState('')

  const [sort, setSort] = useState<SortType>('default')

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(studentData)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const toggleFavorite = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              favorite: !student.favorite,
            }
          : student
      )
    )
  }

  const filteredStudents = students.filter((student) => {
    const searchText = query.toLowerCase()

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.major.toLowerCase().includes(searchText)
    )
  })

  const displayedStudents = [...filteredStudents].sort(
    (a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name)
      }

      if (sort === 'gpa') {
        return b.gpa - a.gpa
      }

      return 0
    }
  )

  const favoriteCount = students.filter(
    (student) => student.favorite
  ).length

  useEffect(() => {
    document.title = `Dashboard — ${displayedStudents.length} Students`
  }, [displayedStudents.length])

  return (
    <div className="dashboard">
      <Header favoriteCount={favoriteCount} />

      <main className="dashboardContent">
        <h1>Student Dashboard</h1>

        <p className="tagline">
          Manage students, courses and academic performance.
        </p>

        <div className="controls">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
          />

          <SortControls
            sort={sort}
            onSortChange={setSort}
          />
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading students...</p>
          </div>
        ) : (
          <section id="students" className="studentGrid">
            {displayedStudents.length > 0 ? (
              displayedStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onToggleFavorite={toggleFavorite}
                />
              ))
            ) : (
              <p className="empty">
                No students found.
              </p>
            )}
          </section>
        )}
      </main>
    </div>
  )
}

export default App