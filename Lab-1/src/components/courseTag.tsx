type CourseTagProps = {
    courseName: string,
    color: string
}

function CourseTag(props: CourseTagProps) {
    return (
        <span className="courseTag" style={{ backgroundColor: props.color }}>
            {props.courseName}
        </span>
    )
}

export default CourseTag;