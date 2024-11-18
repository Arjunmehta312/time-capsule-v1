import React, { useState } from 'react';
import axios from 'axios';

export default function CreateCapsulePage() {
  const [title, setTitle] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('unlockDate', unlockDate);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/create-capsule', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess(response.data.message);
      setTitle('');
      setUnlockDate('');
      setFile(null);
    } catch (error) {
      setError('Error creating capsule, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Create a Time Capsule</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="unlockDate" className="block mb-2 font-semibold">
            Unlock Date
          </label>
          <input
            type="date"
            id="unlockDate"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={unlockDate}
            onChange={(e) => setUnlockDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="file" className="block mb-2 font-semibold">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Capsule'}
        </button>
        {success && <p className="text-green-500 mt-4">{success}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
}
