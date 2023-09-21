import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Dashboard from "../Stocks/Dashboard";
import StockContext from "../../context/StockContext";
import ThemeContext from "../../context/ThemeContext";
// import Signup from "./components/signUp/Signup";
import { Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext.js";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [showDashboard, setShowDashboard] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  const handleSignupButtonClick = () => {
    setShowDashboard(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="border-2 border-gray-600 rounded-lg left-100"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              className="w-100"
              type="Submit"
              // onClick={handleSignupButtonClick}
              disabled={loading}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>

      {showDashboard && (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
            <Dashboard />
          </StockContext.Provider>
        </ThemeContext.Provider>
      )}
    </>
  );
}
