import { Request, Response } from 'express'
import { studentService } from './student.service'

// Create Student
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body
    // Call Service
    const result = await studentService.createStudentIntoDB(student)
    // Send Response
    res.status(200).json({
      success: true,
      message: 'Student is created Successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

// Retrieve All Students

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudents()

    res.status(200).json({
      success: true,
      message: 'Students Data retrieve successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

// Retrieve Single Student

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await studentService.getSingleStudent(id)

    res.status(200).json({
      success: true,
      message: 'Student Data retrieve successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
