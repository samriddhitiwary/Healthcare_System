import React, { useState } from "react";
import Tesseract from "tesseract.js";
import OpenAI from "openai";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { AlertTriangle, HeartPulse, Activity, Dumbbell } from "lucide-react";
import { Tilt } from "react-tilt";

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
          { role: "system", content: "You are an AI that provides a highly detailed analysis of blood reports, including severity levels, causes, future disease predictions, remedies, exercises, and YouTube video recommendations. Always return a valid JSON response.Give atleast 5 points for every report" },
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
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Upload Blood Report</h2>

      <div className="flex flex-col items-center">
        <input type="file" accept="image/*" onChange={handleFileChange} className="border border-gray-300 p-2 rounded-md w-full" />
        <button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 mt-3 rounded-lg transition duration-200">
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>
      </div>

      {analysis && (
        <div className="mt-6 space-y-6">
          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Abnormal Levels */}
            <Tilt options={{ max: 25, scale: 1.05, speed: 1000 }}>
              <div className="p-6 bg-gradient-to-r from-red-100 to-red-300 border-l-4 border-red-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="text-red-600 w-6 h-6" />
                  <h4 className="text-lg font-semibold text-red-700">Abnormal Levels</h4>
                </div>
                <ul className="mt-3 text-gray-800">
                  {analysis.abnormal_levels.map((item, index) => (
                    <li key={index} className="mb-2">
                      <span className="font-medium">{item.test}:</span> {item.value} <span className="text-gray-600"> (Normal: {item.normal_range})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>

            {/* Future Risks */}
            <Tilt options={{ max: 25, scale: 1.05, speed: 1000 }}>
              <div className="p-6 bg-gradient-to-r from-yellow-100 to-yellow-300 border-l-4 border-yellow-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <HeartPulse className="text-yellow-600 w-6 h-6" />
                  <h4 className="text-lg font-semibold text-yellow-700">Future Risks</h4>
                </div>
                <ul className="mt-3 text-gray-800">
                  {analysis.future_risks.map((risk, index) => (
                    <li key={index} className="mb-2">{risk}</li>
                  ))}
                </ul>
              </div>
            </Tilt>

            {/* Recommended Remedies */}
            <Tilt options={{ max: 25, scale: 1.05, speed: 1000 }}>
              <div className="p-6 bg-gradient-to-r from-green-100 to-green-300 border-l-4 border-green-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <Activity className="text-green-600 w-6 h-6" />
                  <h4 className="text-lg font-semibold text-green-700">Recommended Remedies</h4>
                </div>
                <ul className="mt-3 text-gray-800">
                  {analysis.recommended_remedies.map((remedy, index) => (
                    <li key={index} className="mb-2">{remedy}</li>
                  ))}
                </ul>
              </div>
            </Tilt>

            {/* Exercises */}
            <Tilt options={{ max: 25, scale: 1.05, speed: 1000 }}>
              <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-300 border-l-4 border-purple-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <Dumbbell className="text-purple-600 w-6 h-6" />
                  <h4 className="text-lg font-semibold text-purple-700">Recommended Exercises</h4>
                </div>
                <ul className="mt-3 text-gray-800">
                  {analysis.exercises.map((exercise, index) => (
                    <li key={index} className="mb-2">{exercise}</li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </div>

          {/* Graphs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-red-500 mb-3">Risk Analysis</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={analysis.danger_graph}>
                  <XAxis dataKey="condition" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="intensity" fill="#FF4C4C" name="Danger Level" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-blue-500 mb-3">Condition Severity</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={analysis.danger_graph} dataKey="intensity" nameKey="condition" cx="50%" cy="50%" outerRadius={50} fill="#FFAA00">
                    <Cell fill="#FF4C4C" />
                    <Cell fill="#FFA500" />
                    <Cell fill="#FFD700" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Biggest Graph at Bottom */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-green-500 mb-3">Health Trends</h4>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={analysis.danger_graph}>
                <XAxis dataKey="condition" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="intensity" stroke="#32CD32" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diagnostic;