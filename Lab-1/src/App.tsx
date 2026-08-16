import './App.css'
import DashboardHeader from './components/dashboardHeader'
import Footer from './components/footer'
import StudentCard from './components/studentCard'
import type { Student } from './components/studentCard'

function App() {

  const students: Student[] = [
    {
      id: "23-888990-2",
      name: "Student 1",
      avatar: "👤",
      gpa: 3.99,
      major: "Computer Science",
      credits: 96,
      courses: [
        { name: "React", color: "#c3b1e1" },
        { name: "Databases", color: "#a7d8f0" }
      ]
    },
    {
      id: "21-989898-2",
      name: "Student 2",
      avatar: "👤",
      gpa: 2.49,
      major: "Information Technology",
      credits: 78,
      courses: [
        { name: "Networking", color: "#ffc9a9" }
      ]
    },
    {
      id: "22-112233-5",
      name: "Student 3",
      avatar: "👤",
      gpa: 3.60,
      major: "Software Engineering",
      credits: 90,
      courses: [
        { name: "React", color: "#c3b1e1" },
        { name: "Operating Systems", color: "#b5e8c4" },
        { name: "Math", color: "#f7b8c4" }
      ]
    },
    {
      id: "20-556677-9",
      name: "Student 4",
      avatar: "👤",
      gpa: 3.20,
      major: "Data Science",
      credits: 84,
      courses: [
        { name: "Statistics", color: "#b5e8c4" },
        { name: "Databases", color: "#a7d8f0" }
      ]
    }
  ]

  return (
    <>
      <DashboardHeader title="Student Dashboard" tagline="Track students, courses and performance in one place" />

      <div className="dashboard-grid">
        {
          students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        }
      </div>

      <Footer></Footer>
    </>
  )
}

export default App