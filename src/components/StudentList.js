import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const StudentList = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
    .then((res) => {
      return res.json();
    }).then((data) => {
      // console.log(data);
      setStudents(data);
    });
  })

  return (
    <>
      <h1 className='main_title'>All Students</h1>
      <table className='main_container'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {students.map((single_student, index) => {
            return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{single_student.firstName} {single_student.lastName}</td>
                  <td>{single_student.email}</td>
                  <td>
                    <Link to={"/student/" + single_student._id}>More Info</Link>
                  </td>
                </tr>
            );
          })}
          
        </tbody>
      </table>
    </>
  )
}

export default StudentList