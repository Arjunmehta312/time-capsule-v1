import React, { useState } from 'react'
import axios from 'axios'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true) // Toggle between login and signup
  const [email, setEmail] = useState('') // Email state
  const [password, setPassword] = useState('') // Password state
  const [loading, setLoading] = useState(false) // Loading state to disable button during request
  const [errorMessage, setErrorMessage] = useState('') // To show error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission

    setLoading(true) // Set loading to true during API call
    setErrorMessage('') // Clear previous errors

    const apiUrl = isLogin
      ? 'http://localhost:5000/login'  // Login endpoint
      : 'http://localhost:5000/signup' // Signup endpoint

    const payload = {
      email,
      password
    }

    try {
      // Make the POST request to the backend API
      const response = await axios.post(apiUrl, payload)

      // Handle success response
      console.log('API response:', response.data)
      // You can redirect the user or show a success message here
      // Example: window.location.href = '/dashboard'; 

    } catch (error) {
      // Handle error response
      console.error('Error during API request:', error)
      setLoading(false) // Set loading to false after request
      setErrorMessage('An error occurred. Please try again.') // Display error message
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? 'Log In' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Processing...' : isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsLogin(!isLogin)} // Toggle between login and signup
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  )
}
