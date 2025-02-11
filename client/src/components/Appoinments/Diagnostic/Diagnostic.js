// // import React, { useState } from "react";
// // import { PDFDocument } from "pdf-lib";
// // import OpenAI from "openai";

// // const openai = new OpenAI({
// //   apiKey: process.env.REACT_APP_CHATBOT_KEY,
// //   dangerouslyAllowBrowser: true,
// // });

// // const Diagnostic = () => {
// //   const [file, setFile] = useState(null);
// //   const [analysis, setAnalysis] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleFileChange = (event) => {
// //     setFile(event.target.files[0]);
// //   };

// //   const extractTextFromPDF = async (file) => {
// //     const reader = new FileReader();
// //     console.log("EXTRACT PDF:"  )
// //     return new Promise((resolve, reject) => {
// //       reader.onload = async (event) => {
// //         try {
// //           const arrayBuffer = event.target.result;
// //           const pdfDoc = await PDFDocument.load(arrayBuffer);
// //           const pages = pdfDoc.getPages();
// //           let extractedText = "";

// //           for (const page of pages) {
// //             const { items } = await page.getTextContent();
// //             extractedText += items.map((item) => item.str).join(" ") + "\n";
// //           } 
// //           console.log("EXTRACTED TEXT: ", extractedText)

// //           resolve(extractedText);
// //         } catch (error) {
// //           reject("Error extracting text from PDF: " + error);
// //         }
// //       };

// //       reader.readAsArrayBuffer(file);
// //     });
// //   };

// //   const analyzeWithAI = async (text) => {
// //     try {
// //       const response = await openai.chat.completions.create({
// //         model: "gpt-4o",
// //         messages: [
// //           { role: "system", content: "You are an AI that analyzes medical reports and provides insights in JSON format." },
// //           {
// //             role: "user",
// //             content: `Analyze the following blood report and provide insights:
            
// //             """${text}"""

// //             Return the following:
// //             - Abnormal levels
// //             - Possible health conditions
// //             - Recommended next steps
            
// //             Format the response in structured JSON.`,
// //           },
// //         ],
// //       });

// //       return JSON.parse(response.choices[0].message.content);
// //     } catch (error) {
// //       console.error("AI analysis error:", error);
// //       return null;
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!file) return alert("Please upload a PDF file");

// //     setLoading(true);
// //     try {
// //       const extractedText = await extractTextFromPDF(file);
// //       const aiAnalysis = await analyzeWithAI(extractedText);
// //       setAnalysis(aiAnalysis);
// //     } catch (error) {
// //       console.error("Error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-xl font-bold">Upload Blood Report PDF</h2>
// //       <input type="file" accept="application/pdf" onChange={handleFileChange} className="mt-2" />
// //       <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2">
// //         {loading ? "Analyzing..." : "Upload & Analyze"}
// //       </button>

// //       {analysis && (
// //         <div className="mt-4 p-4 bg-gray-100">
// //           <h3 className="text-lg font-semibold">AI Analysis:</h3>
// //           <pre className="text-sm">{JSON.stringify(analysis, null, 2)}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Diagnostic;




// //  IMAGE EXTRACTOR




import React, { useState } from "react";
import Tesseract from "tesseract.js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_CHATBOT_KEY,
  dangerouslyAllowBrowser: true,
});

const Diagnostic = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const extractTextFromImage = async (file) => {
    try {
      const { data } = await Tesseract.recognize(file, "eng", {
        logger: (m) => console.log(m), // Logs progress
      });
  
      const extractedText = data.text.trim();
      console.log("Extracted Text:", extractedText);
  
      if (!extractedText || extractedText.length < 10) {
        throw new Error("Text extraction failed or too short.");
      }
  
      return extractedText;
    } catch (error) {
      console.error("Error extracting text:", error);
      return null;
    }
  };

  const analyzeWithAI = async (text) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an AI that analyzes medical reports and provides insights in JSON format. Always return a valid JSON response." },
          {
            role: "user",
            content: `Analyze the following blood report and provide insights:
            
            """${text}"""
  
            Return the result in **valid JSON format** with the following fields:
            - "abnormal_levels": A list of abnormal blood levels.
            - "possible_conditions": A list of possible health conditions.
            - "recommended_steps": A list of recommended actions.
  
            **Example JSON format:** 
            \`\`\`json
            {
              "abnormal_levels": ["Hemoglobin: Low", "WBC Count: High"],
              "possible_conditions": ["Anemia", "Infection"],
              "recommended_steps": ["Consult a doctor", "Get further tests"]
            }
            \`\`\`
  
            Always return a JSON response.`,
          },
        ],
      });
  
      const jsonString = response.choices[0].message.content.trim();
  
      if (jsonString.startsWith("{") && jsonString.endsWith("}")) {
        return JSON.parse(jsonString);
      } else {
        throw new Error("AI response is not in valid JSON format.");
      }
    } catch (error) {
      console.error("AI analysis error:", error);
      return { error: "Failed to process the report. Please try again." };
    }
  };
  

  const handleUpload = async () => {
    if (!file) return alert("Please upload an image of the report.");
  
    setLoading(true);
    try {
      const extractedText = await extractTextFromImage(file);
      
      if (!extractedText) {
        alert("Failed to extract text. Please upload a clearer image.");
        setLoading(false);
        return;
      }
  
      const aiAnalysis = await analyzeWithAI(extractedText);
      setAnalysis(aiAnalysis);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Upload Blood Report Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2">
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {analysis && (
        <div className="mt-4 p-4 bg-gray-100">
          <h3 className="text-lg font-semibold">AI Analysis:</h3>
          <pre className="text-sm">{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Diagnostic;







