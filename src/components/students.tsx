import React, { useState } from 'react';
import AddStudent from './AddStudent';

const initialStudents = [
  { NIK: '123456789', Nama: 'John Doe', Alamat: 'Street 123', TglLahir: '2000-01-01', JenisKelamin: 'Laki-laki', Agama: 'Islam', Pendidikan: 'SMA', AsalLPK: 'LPK Jepang 1' },
  // Add more dummy data here
];

const Students = () => {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student => student.NIK === updatedStudent.NIK ? updatedStudent : student));
  };

  const deleteStudent = (nik) => {
    setStudents(students.filter(student => student.NIK !== nik));
  };

  return (
    <div>
      <h1>Students Data</h1>
      <h2>Total Students: {students.length}</h2>
      <AddStudent onAdd={addStudent} />
      <table>
        <thead>
          <tr>
            <th>NIK</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Tgl Lahir</th>
            <th>Jenis Kelamin</th>
            <th>Agama</th>
            <th>Pendidikan</th>
            <th>Asal LPK</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.NIK}>
              <td>{student.NIK}</td>
              <td>{student.Nama}</td>
              <td>{student.Alamat}</td>
              <td>{student.TglLahir}</td>
              <td>{student.JenisKelamin}</td>
              <td>{student.Agama}</td>
              <td>{student.Pendidikan}</td>
              <td>{student.AsalLPK}</td>
              <td>
                <button onClick={() => updateStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.NIK)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;