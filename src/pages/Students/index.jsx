import React, { useState, useEffect } from 'react';
import { studentStorage } from '../../utils/studentStorage';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    const data = studentStorage.getAll();
    setStudents(data);
  };

  const stats = {
    total: students.length,
    pria: students.filter(s => s.JenisKelamin === 'Pria').length,
    wanita: students.filter(s => s.JenisKelamin === 'Wanita').length,
    agamaTerbanyak: 'Islam' // You can make this dynamic if needed
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Data Siswa</h1>
        <p className="text-gray-600">Kelola data siswa LPK UJC Semarang</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Siswa</h3>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Siswa Pria</h3>
          <p className="text-2xl font-bold">{stats.pria}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Siswi Wanita</h3>
          <p className="text-2xl font-bold">{stats.wanita}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Agama Terbanyak</h3>
          <p className="text-2xl font-bold">{stats.agamaTerbanyak}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setViewMode('table')}
          >
            Table
          </button>
          <button 
            className={`px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
        </div>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
          onClick={() => {/* Handle add new */}}
        >
          <span>Tambah Siswa</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari siswa..."
          className="w-full p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telepon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Lahir</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.NIK}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.NIK}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.Nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.Telepon}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.Email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.Alamat}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.JenisKelamin}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.TglLahir}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.Agama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {students.map((student) => (
            <div key={student.NIK} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">{student.Nama}</h3>
              <p className="text-gray-600">{student.NIK}</p>
              <p className="text-gray-600">{student.Alamat}</p>
              {/* Add more student details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Students; 