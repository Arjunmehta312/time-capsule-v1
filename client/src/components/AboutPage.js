import React from 'react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Arjun Mehta</h3>
        <p className="mb-4">
          <strong>Founder & CEO</strong>
        </p>
        <p className="text-lg mb-4">
          Arjun Mehta is the Founder and CEO of Time Capsule as a Service. With a passion for technology and
          innovation, he is dedicated to creating a secure and seamless platform for storing and unlocking digital
          memories in the future. His leadership and vision drive the company toward transforming how we preserve
          important moments in our lives.
        </p>
        <p className="text-lg mb-4">
          Arjun is currently pursuing a degree in Computer Science and Engineering (Cybersecurity) at Mukesh Patel
          School of Technology Management & Engineering, Mumbai, and brings a wealth of experience in cybersecurity,
          software development, and product innovation.
        </p>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Arjun Mehta"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
