import './App.css'

import Header from './components/header'
import SearchBar from './components/SearchBar'
import SortControls from './components/SortControls'
import StudentCard from './components/studentCard'
import AddStudentForm from './components/AddStudentForm'

import {
  ThemeProvider,
} from './context/ThemeContext'

import StudentProvider, {
  useStudents,
} from './context/StudentContext'

export type Student = {
  id: string
  name: string
  major: string
  gpa: number
  avatar: string
  courses: string[]
  favorite: boolean
}

function Dashboard() {
  const {
    displayedStudents,
  } = useStudents()

  return (
    <main className="dashboard">
      <Header />

      <section className="dashboardContent">
        <h1>
          Student Dashboard
        </h1>

        <p className="tagline">
          Manage students, courses and
          academic performance.
        </p>

        <div className="controls">
          <SearchBar />

          <SortControls />
        </div>

        <section
          id="students"
          className="studentGrid"
        >
          {displayedStudents.length >
          0 ? (
            displayedStudents.map(
              (student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              )
            )
          ) : (
            <p className="empty">
              No students found.
            </p>
          )}
        </section>

        <AddStudentForm />
      </section>
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <Dashboard />
      </StudentProvider>
    </ThemeProvider>
  )
}

export default App