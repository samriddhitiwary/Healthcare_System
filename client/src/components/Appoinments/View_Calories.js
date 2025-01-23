import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import nutrientsData from "./Nutrients_Data.json";
import Header from "../Header/Header";
import Nutrienets_MiniNavbar from "./Nutrienets_MiniNavbar";
import "./View_Calories.css";

const View_Calories = () => {
  const [meals, setMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [chartData, setChartData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const API_URL = (date) =>
    `http://localhost:8000/api/Nutrients/get-all-meals/6768ea92a6fd51794462a009/${date}T00:00:00.000+00:00`;

  const fetchMeals = async (date) => {
    try {
      const response = await axios.get(API_URL(date));
      const data = response.data;

      if (data.length === 0) {
        setMeals([]);
        setTotalCalories(0);
        setChartData(null);
        return;
      }

      const mealsTypeVsCalories = new Map();

      const getCalories = (mealType) => {
        let total = 0;
        mealType.meals.map((meal) => {
          let calories = 0;
          nutrientsData.map((nutrientData) => {
            if (nutrientData.name === meal.item) {
              calories = nutrientData.calories;
            }
          });
          total += calories * meal.quantity;
        });
        return total;
      };

      data.map((mealsType) => {
        mealsTypeVsCalories.set(mealsType.mealtype, getCalories(mealsType));
      });
      let total = 0;
      let labels = [];
      let chartYAxisData = [];
      mealsTypeVsCalories.forEach((value, key) => {
        total += value;
        labels.push(key);
        chartYAxisData.push(value);
      });

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Calories",
            data: chartYAxisData,
            backgroundColor: chartYAxisData.map((value) => {
              if (value < 400) return "green";
              if (value > 400 && value < 600) return "yellow";
              return "red";
            }),
          },
        ],
      };

      setMeals(data);
      setTotalCalories(total);
      setChartData(chartData);
    } catch (error) {
      console.error("Error fetching meals:", error.message);
    }
  };

  useEffect(() => {
    if (selectedDate) fetchMeals(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <Header />
      <Nutrienets_MiniNavbar />
      <div className="calorie-tracker-container">
        <h2 className="calorie-tracker-title">Calorie Tracker</h2>

        <div className="date-picker-container">
          <label htmlFor="date">Select Date:</label>
          <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-picker"
          />
        </div>

        {meals.length === 0 ? (
          <p className="no-meals-message">
            {selectedDate
              ? "No meals found for the selected date."
              : "Please select a date to view calorie details."}
          </p>
        ) : (
          <>
            <div className="meals-summary">
              <h3>Total Calories: {totalCalories}</h3>
            </div>

            <div className="calorie-chart">
              <h3>Calorie Chart</h3>
              <Bar
                data={chartData}
                options={{
                  plugins: { legend: { display: true } },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 1000,
                      ticks: { stepSize: 100 },
                      grid: {
                        drawBorder: false,
                        color: (context) => {
                          if (context.tick.value < 400)
                            return "rgba(0, 128, 0, 0.2)";
                          if (context.tick.value < 600)
                            return "rgba(255, 255, 0, 0.2)";
                          return "rgba(255, 0, 0, 0.2)";
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default View_Calories;
