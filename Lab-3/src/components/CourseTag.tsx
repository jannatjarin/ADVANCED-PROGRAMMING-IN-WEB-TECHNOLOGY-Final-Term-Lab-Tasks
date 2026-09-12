type CourseTagProps = {
  courseName: string
  color?: string
}

function CourseTag({
  courseName,
  color = '#aa3bff',
}: CourseTagProps) {
  return (
    <span
      className="courseTag"
      style={{
        backgroundColor: color,
      }}
    >
      {courseName}
    </span>
  )
}

export default CourseTag