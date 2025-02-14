import React, { useState } from "react";
import Tesseract from "tesseract.js";
import OpenAI from "openai";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Diagnostic.css";


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
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an AI that provides a highly detailed analysis of blood reports, including severity levels, causes, future disease predictions, remedies, exercises, and YouTube video recommendations. Always return a valid JSON response." },
          {
            role: "user",
            content: `Analyze the following blood report with deep insights:
            
            """${text}"""
  
            Return the result in **valid JSON format** with these fields:
            - "abnormal_levels": A list of objects with:
              - "test": Name of the blood test.
              - "value": The detected value.
              - "normal_range": Expected normal range.
              - "severity": Categorize into "Mild", "Moderate", "Severe", or "Critical".
              - "causes": Possible reasons for deviation.
            - "possible_conditions": A list of potential diseases with explanations.
            - "danger_graph": A list of objects with:
              - "condition": Name of the disease.
              - "intensity": A number (0-100) representing severity, where above 70 is a danger zone.
            - "future_risks": A list of diseases that may develop if not treated.
            - "recommended_remedies": A list of dietary and lifestyle changes.
            - "exercises": A list of specific exercises to improve health.
            - "youtube_links": A list of YouTube links for recommended health routines.
  
            **Example JSON format:** 
            \`\`\`json
            {
              "abnormal_levels": [
                { "test": "Hemoglobin", "value": 9.5, "normal_range": "13.5-17.5 g/dL", "severity": "Moderate", "causes": ["Iron deficiency", "Blood loss", "Chronic disease"] },
                { "test": "WBC Count", "value": 12000, "normal_range": "4500-11000 cells/mcL", "severity": "Mild", "causes": ["Infection", "Inflammation"] }
              ],
              "possible_conditions": [
                { "condition": "Anemia", "explanation": "Low hemoglobin levels may indicate iron-deficiency anemia, leading to fatigue and weakness." },
                { "condition": "Infection", "explanation": "Elevated WBC count suggests a possible infection." }
              ],
              "danger_graph": [
                { "condition": "Anemia", "intensity": 60 },
                { "condition": "Infection", "intensity": 75 }
              ],
              "future_risks": ["Heart disease", "Chronic kidney disease"],
              "recommended_remedies": ["Increase iron intake", "Consume vitamin C for better iron absorption"],
              "exercises": ["Light cardio", "Yoga", "Breathing exercises"],
              "youtube_links": [
                { "title": "Best Iron-Rich Foods", "url": "https://www.youtube.com/watch?v=XXXXXX" },
                { "title": "Yoga for Anemia", "url": "https://www.youtube.com/watch?v=XXXXXX" }
              ]
            }
            \`\`\`
  
            Always return a JSON response.`,
          },
        ],
      });
  
      const jsonString = response.choices[0].message.content.trim();
      const cleanedJsonString = jsonString.replace(/^```json/, "").replace(/```$/, "").trim();
  
      return JSON.parse(cleanedJsonString);
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
          <h3 className="text-lg font-semibold">Analysis Report</h3>
          
          {analysis.abnormal_levels && (
            <div>
              <h4 className="font-semibold">Abnormal Levels</h4>
              <ul>
                {analysis.abnormal_levels.map((item, index) => (
                  <li key={index}>{item.test}: {item.value} (Normal: {item.normal_range}) - {item.severity}</li>
                ))}
              </ul>
            </div>
          )}
          
          {analysis.possible_conditions && (
            <div>
              <h4 className="font-semibold">Possible Conditions</h4>
              <ul>
                {analysis.possible_conditions.map((cond, index) => (
                  <li key={index}>{cond.condition}: {cond.explanation}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.danger_graph && (
            <div>
              <h4 className="font-semibold">Danger Levels</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analysis.danger_graph}>
                  <XAxis dataKey="condition" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="intensity" fill="#FF0000" name="Danger Level" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {analysis.future_risks && (
            <div>
              <h4 className="font-semibold">Future Risks</h4>
              <ul>
                {analysis.future_risks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
          )}
          
          {analysis.recommended_remedies && (
            <div>
              <h4 className="font-semibold">Recommended Remedies</h4>
              <ul>
                {analysis.recommended_remedies.map((remedy, index) => (
                  <li key={index}>{remedy}</li>
                ))}
              </ul>
            </div>
          )}
          
          {analysis.exercises && (
            <div>
              <h4 className="font-semibold">Recommended Exercises</h4>
              <ul>
                {analysis.exercises.map((exercise, index) => (
                  <li key={index}>{exercise}</li>
                ))}
              </ul>
            </div>
          )}
          
          {analysis.youtube_links && (
            <div>
              <h4 className="font-semibold">YouTube Recommendations</h4>
              <ul>
                {analysis.youtube_links.map((link, index) => (
                  <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Diagnostic;
  