function getStudentIdSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0)
}

export default getStudentIdSum;
