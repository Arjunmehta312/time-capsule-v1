import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchCapsules = async () => {
      setLoading(true);
      setError('');
      try {
        // Replace this with your actual API endpoint
        const response = await axios.get('http://localhost:5000/get-capsules');
        setCapsules(response.data);
      } catch (error) {
        setError('Error fetching capsules');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCapsules();
  }, []);
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this capsule?')) {
      setLoading(true);
      try {
        // Replace this with your actual API endpoint to delete the capsule
        await axios.delete(`http://localhost:5000/delete-capsule/${id}`);
        setCapsules(capsules.filter(capsule => capsule.id !== id));
      } catch (error) {
        setError('Error deleting capsule');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Your Time Capsules</h2>
        <Link
          to="/create-capsule"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Create New Capsule
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creation Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unlock Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {capsules.map((capsule) => (
                <tr key={capsule.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{capsule.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{capsule.creationDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{capsule.unlockDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${capsule.status === 'Locked' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {capsule.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">View</button>
                    <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(capsule.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
