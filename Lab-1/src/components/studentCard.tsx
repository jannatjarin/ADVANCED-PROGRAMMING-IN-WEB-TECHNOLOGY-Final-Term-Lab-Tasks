import "./../App.css"
import CourseTag from "./courseTag"
import StatBadge from "./statBadge"

export type Course = {
    name: string,
    color: string
}

export type Student = {
    id: string,
    name: string,
    avatar: string,
    gpa: number,
    major: string,
    credits: number,
    courses: Course[]
}

function StudentCard(props: { student: Student }) {
    return (
        <div className="studentCard">
            <div className="studentCard-top">
                <span className="avatar">{props.student.avatar}</span>
                <div>
                    <h2>{props.student.name}</h2>
                    <p className="major">{props.student.major}</p>
                </div>
            </div>

            <p className="studentId">Id: {props.student.id}</p>

            <div className="studentCard-stats">
                <StatBadge label="GPA" value={props.student.gpa} />
                <StatBadge label="Credits" value={props.student.credits} />
            </div>

            <div className="studentCard-courses">
                {
                    props.student.courses.map((course) => (
                        <CourseTag key={course.name} courseName={course.name} color={course.color} />
                    ))
                }
            </div>
        </div>
    )
}

export default StudentCard;