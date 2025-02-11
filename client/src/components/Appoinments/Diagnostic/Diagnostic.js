import React, { useState } from "react";
import Tesseract from "tesseract.js";
import OpenAI from "openai";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
        logger: (m) => console.log(),
      });

      const extractedText = data.text.trim();
      // console.log("Extracted Text:", extractedText);

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
    console.log("ANALYZE WITH AI ", typeof(text))
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an AI that analyzes blood reports and provides detailed medical insights in JSON format." },
          {
            role: "user",
            content: `Analyze the following blood report and provide insights:
            
            """${text}"""

            Return the result in **valid JSON format** with the following fields:
            - "abnormal_levels": A list of objects with "test", "value", "normal_range", and "severity".
            - "possible_conditions": A list of possible health conditions with explanations.
            - "recommended_steps": A list of lifestyle changes, treatments, and next steps.

            **Example JSON format:** 
            \`\`\`json
            {
              "abnormal_levels": [
                { "test": "Hemoglobin", "value": 9.5, "normal_range": "13.5-17.5 g/dL", "severity": "Moderate" },
                { "test": "WBC Count", "value": 12000, "normal_range": "4500-11000 cells/mcL", "severity": "Mild" }
              ],
              "possible_conditions": [
                { "condition": "Anemia", "explanation": "Low hemoglobin levels can indicate anemia, leading to fatigue and weakness." },
                { "condition": "Infection", "explanation": "Elevated WBC count suggests a possible infection or inflammation." }
              ],
              "recommended_steps": ["Increase iron intake", "Consult a doctor for further testing", "Monitor WBC count in follow-up tests"]
            }
            \`\`\`

            Always return a JSON response.`,
          },
        ],
      });
      console.log("ofhwfnl")

      const jsonString = response.choices[0].message.content.trim();
      console.log("JSON DATA STRING ",jsonString)

      const cleanedJsonString = jsonString.replace(/^```json/, "").replace(/```$/, "").trim();

      try {
        return JSON.parse(cleanedJsonString);
      } catch (error) {
        console.error("AI analysis error:", error);
        return { error: "Failed to process the report. Please try again." };
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

          {analysis.abnormal_levels && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Blood Test Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analysis.abnormal_levels}>
                  <XAxis dataKey="test" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" name="Detected Value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Diagnostic;

