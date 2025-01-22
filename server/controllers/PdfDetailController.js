import PdfDetail from '../models/PdfDetailsModel.js';
import path from 'path';
import fs from 'fs';

export const createPDF = async (req, res) => {
    try {
        const { patientId, hospitalName, doctorName, date } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: "PDF file is required" });
        }

        // const pdfPath = req.file.path;

        const newPdfDetail = new PdfDetail({
            patientId,
            hospitalName,
            doctorName,
            date,
            pdf: req.file,
        });

        await newPdfDetail.save();
        res.status(201).json({ message: "PDF uploaded successfully", data: newPdfDetail });
    } catch (error) {
        res.status(500).json({ message: "Error uploading PDF", error: error.message });
    }
};


export const getPDFsById = async (req, res) => {
    try {
        const id = req.params.id;
        const dbResponse = await PdfDetail.findById(id);

        if (!dbResponse) {
            return res.status(404).json({ message: "No PDFs found for this patient" });
        }
        console.log(dbResponse)
        const filePath = dbResponse.pdf.path;

        var data =fs.readFileSync(filePath);
        res.contentType("application/pdf");
        res.send(data);

        // res.status(200).json({ data: filePath });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving PDFs", error: error.message });
    }
};

export const getPDFsByPatientId = async (req, res) => {
    try {
        const patientId = req.params.id;
        const dbResponse = await PdfDetail.find( {patientId});

        if (!dbResponse) {
            return res.status(404).json({ message: "No PDFs found for this patient" });
        }
        console.log(dbResponse)

        res.status(200).json({ data: dbResponse });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving PDFs", error: error.message });
    }
};


export const deletePDF = async (req, res) => {
    try {
        const { id } = req.params;

        const pdf = await PdfDetail.findById(id);
        if (!pdf) {
            return res.status(404).json({ message: "PDF not found" });
        }

        const filePath = pdf.pdf;
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await PdfDetail.findByIdAndDelete(id);
        res.status(200).json({ message: "PDF deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting PDF", error: error.message });
    }
};
