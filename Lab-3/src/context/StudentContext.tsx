import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import type { Student } from '../App'

type SortType = 'default' | 'name' | 'gpa'

type StudentContextType = {
  students: Student[]
  query: string
  sort: SortType

  setQuery: (query: string) => void
  setSort: (sort: SortType) => void

  addStudent: (student: Student) => void
  removeStudent: (id: string) => void
  toggleFavorite: (id: string) => void

  displayedStudents: Student[]
  favoriteCount: number
}

const StudentContext =
  createContext<StudentContextType | undefined>(
    undefined
  )

const defaultStudents: Student[] = [
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

function StudentProvider({
  children,
}: {
  children: ReactNode
}) {
  const [students, setStudents] = useState<Student[]>(
    () => {
      const savedStudents =
        localStorage.getItem('students')

      if (savedStudents) {
        return JSON.parse(savedStudents)
      }

      return defaultStudents
    }
  )

  const [query, setQuery] = useState('')

  const [sort, setSort] =
    useState<SortType>('default')

  useEffect(() => {
    localStorage.setItem(
      'students',
      JSON.stringify(students)
    )
  }, [students])

  const addStudent = (student: Student) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      student,
    ])
  }

  const removeStudent = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.filter(
        (student) => student.id !== id
      )
    )
  }

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

  const filteredStudents = students.filter(
    (student) => {
      const searchText = query.toLowerCase()

      return (
        student.name
          .toLowerCase()
          .includes(searchText) ||
        student.major
          .toLowerCase()
          .includes(searchText)
      )
    }
  )

  const displayedStudents = [
    ...filteredStudents,
  ].sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name)
    }

    if (sort === 'gpa') {
      return b.gpa - a.gpa
    }

    return 0
  })

  const favoriteCount = students.filter(
    (student) => student.favorite
  ).length

  useEffect(() => {
    document.title =
      `Dashboard — ${displayedStudents.length} Students`
  }, [displayedStudents.length])

  return (
    <StudentContext.Provider
      value={{
        students,
        query,
        sort,

        setQuery,
        setSort,

        addStudent,
        removeStudent,
        toggleFavorite,

        displayedStudents,
        favoriteCount,
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export function useStudents() {
  const context = useContext(StudentContext)

  if (!context) {
    throw new Error(
      'useStudents must be used inside StudentProvider'
    )
  }

  return context
}

export default StudentProvider