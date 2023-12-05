import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, Username } from './student.interface'

const userNameSchema = new Schema<Username>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inactive'],
})

// Create a Model

const StudentModel = model<Student>('Student', studentSchema)

export default StudentModel
