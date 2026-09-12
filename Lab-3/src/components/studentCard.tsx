import CourseTag from './CourseTag'
import StatBadge from './StatBadge'

import { useStudents } from '../context/StudentContext'

function StudentCard({
  student,
}: {
  student: import('../App').Student
}) {
  const {
    toggleFavorite,
    removeStudent,
  } = useStudents()

  return (
    <article className="studentCard">
      <div className="studentTop">
        <img
          src={student.avatar}
          alt={student.name}
        />

        <div>
          <button
            className={`favoriteButton ${
              student.favorite
                ? 'favorite'
                : ''
            }`}
            onClick={() =>
              toggleFavorite(student.id)
            }
          >
            {student.favorite
              ? 'yes'
              : 'no'}
          </button>

          <button
            className="removeButton"
            onClick={() =>
              removeStudent(student.id)
            }
          >
            Remove
          </button>
        </div>
      </div>

      <h3>{student.name}</h3>

      <p>
        ID: {student.id}
      </p>

      <p>
        Major: {student.major}
      </p>

      <div className="stats">
        <StatBadge
          label="GPA"
          value={student.gpa}
        />

        <StatBadge
          label="Courses"
          value={student.courses.length}
        />
      </div>

      <div className="courses">
        {student.courses.map(
          (course) => (
            <CourseTag
              key={course}
              courseName={course}
            />
          )
        )}
      </div>
    </article>
  )
}

export default StudentCard