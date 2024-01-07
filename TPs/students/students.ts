import { Student } from './model/student';

export const STUDENTS: Student[] = [
  {
    id: 'std101', name: 'Rakesh Rout',
    dateOfBirth: new Date(1988, 3, 15), gender: 'Male', courseFee: 1234.56,
    picture: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    id: 'std102', name: 'Anurag Mohanty',
    dateOfBirth: new Date(1989, 10, 14), gender: 'Male', courseFee: 6666.00,
    picture: 'https://www.w3schools.com/howto/img_avatar.png'

  },
  {
    id: 'std103', name: 'Priyanka Dewangan',
    dateOfBirth: new Date(1992, 1, 15), gender: 'Female', courseFee: 6543.15,
    picture: 'https://www.w3schools.com/howto/img_avatar2.png'

  },
  {
    id: 'std104', name: 'Hina Sharma',
    dateOfBirth: new Date(1990, 9, 12), gender: 'Female', courseFee: 9000.50,
    picture: 'https://www.w3schools.com/howto/img_avatar2.png'
  },
  {
    id: 'std105', name: 'Sambit Satapathy',
    dateOfBirth: new Date(1991, 8, 15), gender: 'Male', courseFee: 9876.54,
    picture: 'https://www.w3schools.com/howto/img_avatar.png'
  }
];
