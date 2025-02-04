import React, { useState } from 'react';

const AddStudent = ({ onAdd }) => {
  const [student, setStudent] = useState({ NIK: '', Nama: '', Alamat: '', TglLahir: '', JenisKelamin: '', Agama: '', Pendidikan: '', AsalLPK: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(student);
    setStudent({ NIK: '', Nama: '', Alamat: '', TglLahir: '', JenisKelamin: '', Agama: '', Pendidikan: '', AsalLPK: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="NIK" value={student.NIK} onChange={handleChange} placeholder="NIK" required />
      <input type="text" name="Nama" value={student.Nama} onChange={handleChange} placeholder="Nama" required />
      <input type="text" name="Alamat" value={student.Alamat} onChange={handleChange} placeholder="Alamat" required />
      <input type="date" name="TglLahir" value={student.TglLahir} onChange={handleChange} required />
      <select name="JenisKelamin" value={student.JenisKelamin} onChange={handleChange} required>
        <option value="">Jenis Kelamin</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
      <input type="text" name="Agama" value={student.Agama} onChange={handleChange} placeholder="Agama" required />
      <input type="text" name="Pendidikan" value={student.Pendidikan} onChange={handleChange} placeholder="Pendidikan" required />
      <input type="text" name="AsalLPK" value={student.AsalLPK} onChange={handleChange} placeholder="Asal LPK Jepang" required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
