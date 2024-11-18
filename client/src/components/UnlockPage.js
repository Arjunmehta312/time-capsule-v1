import React, { useState } from 'react';
import axios from 'axios';

export default function UnlockPage() {
  const [capsuleId, setCapsuleId] = useState('');
  const [unlockedContent, setUnlockedContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUnlock = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Replace with your API endpoint to unlock the capsule
      const response = await axios.post('http://localhost:5000/unlock-capsule', { capsuleId });
      setUnlockedContent(response.data); // Assuming your API returns the unlocked content
    } catch (error) {
      setError('Failed to unlock the capsule. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Unlock Your Time Capsule</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : !unlockedContent ? (
        <form onSubmit={handleUnlock} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="capsuleId" className="block mb-2 font-semibold">
              Capsule ID
            </label>
            <input
              type="text"
              id="capsuleId"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={capsuleId}
              onChange={(e) => setCapsuleId(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Unlock
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">{unlockedContent.title}</h3>
          <p className="mb-4">{unlockedContent.content}</p>
          {unlockedContent.media && (
            <img src={unlockedContent.media} alt="Capsule media" className="max-w-full h-auto rounded-md" />
          )}
        </div>
      )}
    </div>
  );
}
