const Student = require('../models/Students');

const getAllStudent = async (req, res) => {
  const students = await Student.find({});
  res.status(200).json(students);
  return res;
};

const getStudentById = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findById(studentId);
  res.status(200).json(student);
  return res;
};

const createStudent = async (req, res) => {
  const students = {
    namaLengkap: req.body.namaLengkap,
    nim: req.body.nim,
    email: req.body.email,
    noHp: req.body.noHp,
    gender: req.body.gender,
    minatKonsentrasi: req.body.minatKonsentrasi,
    tglLahir: req.body.tglLahir,
    alamat: req.body.alamat,
    motoHidup: req.body.motoHidup,
    sosmed: req.body.sosmed,
    imageProfil: req.body.imageProfil,
  };
  const newStudents = new Student(students);
  await newStudents.save();
  res.status(201).json({
    status: 'success',
    message: 'Datas add successfully',
  });
  return res;
};

const updateStudentById = async (req, res) => {
  const { studentId } = req.params;
  const students = {
    namaLengkap: req.body.namaLengkap,
    nim: req.body.nim,
    email: req.body.email,
    noHp: req.body.noHp,
    gender: req.body.gender,
    minatKonsentrasi: req.body.minatKonsentrasi,
    tglLahir: req.body.tglLahir,
    alamat: req.body.alamat,
    motoHidup: req.body.motoHidup,
    sosmed: req.body.sosmed,
    imageProfil: req.body.imageProfil,
  };
  const newStudents = await Student.findByIdAndUpdate(studentId, students);
  await newStudents.save();
  res.status(201).json({
    status: 'success',
    message: 'Datas updated successfully',
  });
  return res;
};

module.exports = {
  getAllStudent, getStudentById, createStudent, updateStudentById,
};
