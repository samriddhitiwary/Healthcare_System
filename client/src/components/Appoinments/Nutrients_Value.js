import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  Table,
  Container,
} from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NutrientsData from "./Nutrients_Data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";
import Nutrienets_MiniNavbar from "./Nutrienets_MiniNavbar";


const Nutrients_Value = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mealType, setMealType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleIncrement = (name) => {
    const updatedItems = selectedItems.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    );
    setSelectedItems(updatedItems);
  };

  const handleDecrement = (name) => {
    const updatedItems = selectedItems.map((item) =>
      item.name === name && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setSelectedItems(updatedItems);
  };

  const handleCheckboxToggle = (item) => {
    const exists = selectedItems.find((i) => i.name === item.name);
    if (exists) {
      setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleClickCalories = () => {
    const total = selectedItems.reduce(
      (sum, item) => sum + item.calories * item.quantity,
      0
    );
    setTotalCalories(total);
  };

  const filteredItems = NutrientsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const saveMealData = async () => {
    const patientId = JSON.parse(sessionStorage.getItem("userdata"))?._id;
  
    if (!patientId) {
      toast.error("Patient ID not found. Please log in.");
      return;
    }
  
    if (!mealType) {
      toast.error("Please select a meal type.");
      return;
    }
  
    if (selectedItems.length === 0) {
      toast.error("Please select at least one food item.");
      return;
    }
  
    const payload = {
      patientId: patientId,
      date: selectedDate,
      mealtype: mealType,
      meals: selectedItems.map((item) => ({
        item: item.name,
        quantity: item.quantity,
      })),
      calorie: totalCalories, 
    };
  
    try {
      const response = await fetch(
        "http://localhost:8000/api/nutrients/meal-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
  
      const result = await response.json();
      if (response.ok) {
        toast.success("Meal data stored successfully!");
      } else {
        toast.error(`Error: ${result.message || "Failed to save meal data."}`);

      }
    } catch (error) {
      console.error("Error saving meal data:", error);
      toast.error("An error occurred while saving meal data.");
    }
  };
  

  return (
    <>
      <Header />
      <br/><br/>
      <Nutrienets_MiniNavbar/>
      <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}
        >
          Nutrients Value
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control rounded"
            style={{
              maxWidth: "200px",
              flex: "1 1 200px",
            }}
          />
          <Form.Select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            style={{
              maxWidth: "200px",
              flex: "1 1 200px",
            }}
            className="rounded"
          >
            <option value="">Select Meal Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snacks">Snacks</option>
            <option value="dinner">Dinner</option>
          </Form.Select>
          <Form.Control
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              maxWidth: "500px",
              borderRadius: "20px",
              flex: "1 1 500px", 
            }}
          />
        </div>

        {selectedItems.length > 0 && (
          <div style={{ marginBottom: "20px" }}>
            <h2 className="text-center text-info">
              Meal Type: {mealType || "Not Selected"}
            </h2>
            <Table
              striped
              bordered
              hover
              size="sm"
              style={{ maxWidth: "60%", margin: "auto" }}
            >
              <thead>
                <tr>
                  <th>Food Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {selectedItems.length > 0 && (
          <div className="text-center mb-4">
            <Button
              variant="success"
              onClick={handleClickCalories}
              className="rounded-pill px-4 py-2"
            >
              Calculate Calories
            </Button>
            <h3 className="mt-2">Total Calories: {totalCalories}</h3>
          </div>
        )}

        <div className="text-center mb-4">
          <Button
            variant="primary"
            onClick={saveMealData}
            className="rounded-pill px-4 py-2"
          >
            Save Meal Data
          </Button>
        </div>

        <Container>
          <Row>
            {filteredItems.map((item, index) => (
              <Col md={4} key={index} style={{marginBottom: "25px"}}>
                <Card
                  style={{
                    cursor: "pointer",
                    border: selectedItems.find((i) => i.name === item.name)
                      ? "2px solid green"
                      : "none",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    // margin: "10px"
                  }}
                  className="card shadow-lg rounded"
                >
                  <Card.Img style={{height : "250px"}} variant="top" src={item.image_url} />
                  <Card.Body style={{display: "flex", flexWrap: "wrap"}}>
                    <Form.Check
                    style={{height: "55px"}}
                      type="checkbox"
                      checked={
                        !!selectedItems.find((i) => i.name === item.name)
                      }
                      onChange={() => handleCheckboxToggle(item)}
                      label={item.name}
                      className="fs-5"
                    />
                    {selectedItems.find((i) => i.name === item.name) && (
                      <div style={{alignSelf: "flex-end"}}>
                        <Button
                          variant="outline-danger"
                          onClick={() => handleDecrement(item.name)}
                          style={{ margin: "5px", borderRadius: "50%" }}
                        >
                          <FaMinus />
                        </Button>
                        <span className="fs-5">
                          {selectedItems.find((i) => i.name === item.name)
                            ?.quantity || 0}
                        </span>
                        <Button
                          variant="outline-success"
                          onClick={() => handleIncrement(item.name)}
                          style={{ margin: "5px", borderRadius: "50%" }}
                        >
                          <FaPlus />
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <ToastContainer />
      </div>
    </>
  );
};

export default Nutrients_Value;