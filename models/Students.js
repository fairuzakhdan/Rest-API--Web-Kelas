const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({
  namaLengkap: {
    type: String,
  },
  nim: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  noHp: {
    type: String,
    minLength: [10, 'no should have minimum 10 digits'],
    maxLength: [15, 'no should have maximum 15 digits'],
    match: [/\d{10}/, 'no should only have digits'],
  },
  gender: {
    type: String,
    enum: ['L', 'P'],
  },
  minatKonsentrasi: {
    type: String,
  },
  tglLahir: {
    type: Date,
  },
  alamat: {
    type: String,
  },
  imageProfil: {
    type: String,
  },
  motoHidup: {
    type: String,
  },
  sosmed: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
