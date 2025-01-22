import express from 'express';
import { createPDF, getPDFsById, deletePDF, getPDFsByPatientId } from '../controllers/PdfDetailController.js';
import { upload } from '../middleware/uploadMiddleware.js';

const getPDFrouter = express.Router();

getPDFrouter.post('/create', upload.single('file'), createPDF);
// getPDFrouter.post('/create',  createPDF);
getPDFrouter.get('/getById/:id', getPDFsById);
getPDFrouter.get('/getPDFsByPatientId/:id', getPDFsByPatientId);
getPDFrouter.delete('/deletePdf/:id', deletePDF);

export default getPDFrouter;
