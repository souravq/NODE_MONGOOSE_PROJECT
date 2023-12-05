import StudentModel from '../student.module'
import { Student } from './student.interface'

// Create Student
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

// Retrieve Student

const getAllStudents = async () => {
  const result = await StudentModel.find({})
  return result
}

// Retrieve Single Student

const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findById(id)
  return result
}

export const studentService = {
  createStudentIntoDB,
  getAllStudents,
  getSingleStudent,
}
