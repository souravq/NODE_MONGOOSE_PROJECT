//import { Schema, model, connect } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type Username = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGuardian = {
  firstName: string
  middleName: string
  lastName: string
  address: string
}

export type Student = {
  name: Username
  gender: 'male' | 'female'
  dateOfBirth?: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'inactive'
}
