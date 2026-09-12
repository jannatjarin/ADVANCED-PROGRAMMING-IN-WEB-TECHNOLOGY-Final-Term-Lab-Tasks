import {
  useEffect,
  useState,
} from 'react'

import { useStudents } from '../context/StudentContext'

import type { Student } from '../App'

type FormData = {
  name: string
  id: string
  major: string
  gpa: string
  courses: string
}

type Errors = Partial<
  Record<keyof FormData, string>
>

function AddStudentForm() {
  const {
    students,
    addStudent,
  } = useStudents()

  const [form, setForm] =
    useState<FormData>({
      name: '',
      id: '',
      major: '',
      gpa: '',
      courses: '',
    })

  const [errors, setErrors] =
    useState<Errors>({})

  const [success, setSuccess] =
    useState(false)

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }))
  }

  const validate = () => {
    const nextErrors: Errors = {}

    if (!form.name.trim()) {
      nextErrors.name =
        'Name is required.'
    }

    if (!form.id.trim()) {
      nextErrors.id =
        'Student ID is required.'
    } else if (
      !/^\d+$/.test(form.id)
    ) {
      nextErrors.id =
        'Student ID must be numeric.'
    } else if (
      students.some(
        (student) =>
          student.id === form.id
      )
    ) {
      nextErrors.id =
        'Student ID must be unique.'
    }

    if (!form.major.trim()) {
      nextErrors.major =
        'Major is required.'
    }

    const gpa = Number(form.gpa)

    if (
      form.gpa === '' ||
      Number.isNaN(gpa) ||
      gpa < 0 ||
      gpa > 4
    ) {
      nextErrors.gpa =
        'GPA must be between 0 and 4.0.'
    }

    return nextErrors
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const nextErrors = validate()

    setErrors(nextErrors)

    if (
      Object.keys(nextErrors).length > 0
    ) {
      return
    }

    const newStudent: Student = {
      id: form.id,
      name: form.name.trim(),
      major: form.major.trim(),
      gpa: Number(form.gpa),

      avatar:
        `https://i.pravatar.cc/150?u=${form.id}`,

      courses: form.courses
        .split(',')
        .map(
          (course) =>
            course.trim()
        )
        .filter(Boolean),

      favorite: false,
    }

    addStudent(newStudent)

    setForm({
      name: '',
      id: '',
      major: '',
      gpa: '',
      courses: '',
    })

    setErrors({})

    setSuccess(true)
  }

  useEffect(() => {
    if (!success) {
      return
    }

    const timer = setTimeout(
      () => {
        setSuccess(false)
      },
      3000
    )

    return () =>
      clearTimeout(timer)
  }, [success])

  return (
    <section
      id="add-student"
      className="formSection"
    >
      <h2>Add Student</h2>

      {success && (
        <div className="success">
          Student added successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Full Name

          <input
            value={form.name}
            onChange={(event) =>
              updateField(
                'name',
                event.target.value
              )
            }
          />

          {errors.name && (
            <span className="error">
              {errors.name}
            </span>
          )}
        </label>

        <label>
          Student ID

          <input
            value={form.id}
            onChange={(event) =>
              updateField(
                'id',
                event.target.value
              )
            }
          />

          {errors.id && (
            <span className="error">
              {errors.id}
            </span>
          )}
        </label>

        <label>
          Major

          <input
            value={form.major}
            onChange={(event) =>
              updateField(
                'major',
                event.target.value
              )
            }
          />

          {errors.major && (
            <span className="error">
              {errors.major}
            </span>
          )}
        </label>

        <label>
          GPA

          <input
            type="number"
            step="0.01"
            value={form.gpa}
            onChange={(event) =>
              updateField(
                'gpa',
                event.target.value
              )
            }
          />

          {errors.gpa && (
            <span className="error">
              {errors.gpa}
            </span>
          )}
        </label>

        <label>
          Courses (comma-separated)

          <input
            value={form.courses}
            onChange={(event) =>
              updateField(
                'courses',
                event.target.value
              )
            }
          />
        </label>

        <button
          className="submitButton"
          type="submit"
        >
          Add Student
        </button>
      </form>
    </section>
  )
}

export default AddStudentForm