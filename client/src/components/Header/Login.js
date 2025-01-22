import React, { useState } from 'react';
import { auth, provider } from './Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate('/profile');
    } catch (error) {
      console.error("Error during Google login:", error);
      setError("Failed to login with Google.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile');
    } catch (error) {
      console.error("Error during email login:", error);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <div className="alert alert-danger text-center">{error}</div>}
          <Form onSubmit={handleEmailLogin}>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              disabled={loading}
              className="w-100"
              style={{ marginBottom: '15px' }}
            >
              {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
            </Button>
          </Form>
          <div className="text-center">OR</div>
          <Button
            variant="primary"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-100 mt-3"
          >
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              <>
                <FaGoogle /> Login with Google
              </>
            )}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 text-center">
            <small>Don't have an account? <a href="/signup">Sign up</a></small>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
