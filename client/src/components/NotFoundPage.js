import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-6xl font-bold mb-4">404</h2>
      <h3 className="text-3xl font-semibold mb-6">Page Not Found</h3>
      <p className="text-xl mb-8">Oops! It seems like you've traveled to a time that doesn't exist yet.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Go Back to Home
      </Link>
      <div className="mt-12">
        <svg className="mx-auto w-64 h-64 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  )
}