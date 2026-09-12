type Student = {
  id: string
  name: string
  major: string
  gpa: number
  avatar: string
  courses: string[]
  favorite: boolean
}

type StudentCardProps = {
  student: Student
  onToggleFavorite: (id: string) => void
}

function StudentCard({ student, onToggleFavorite }: StudentCardProps) {
  return (
    <article className="studentCard">
      <div className="studentTop">
        <img src={student.avatar} alt={student.name} />

        <button
          className={`favoriteButton ${
            student.favorite ? 'favorite' : ''
          }`}
          onClick={() => onToggleFavorite(student.id)}
        >
          {student.favorite ? 'yes' : 'no'}
        </button>
      </div>

      <h3>{student.name}</h3>

      <p>ID: {student.id}</p>

      <p>Major: {student.major}</p>

      <p>GPA: {student.gpa}</p>

      <div className="courses">
        {student.courses.map((course) => (
          <span className="courseTag" key={course}>
            {course}
          </span>
        ))}
      </div>
    </article>
  )
}

export default StudentCard