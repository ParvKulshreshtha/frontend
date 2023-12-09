import React, { useState } from 'react';

const CreateGroupForm = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [memberCount, setMemberCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (you can perform any desired action here)
    console.log('Group Name:', groupName);
    console.log('Group Description:', groupDescription);
    console.log('Member Count:', memberCount);

    // Reset form fields after submission
    setGroupName('');
    setGroupDescription('');
    setMemberCount('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-sm font-medium text-gray-600">
            Group Name
          </label>
          <input
            type="text"
            id="groupName"
            name="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="groupDescription" className="block text-sm font-medium text-gray-600">
            Group Description
          </label>
          <textarea
            id="groupDescription"
            name="groupDescription"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="memberCount" className="block text-sm font-medium text-gray-600">
            Member Count
          </label>
          <input
            type="number"
            id="memberCount"
            name="memberCount"
            value={memberCount}
            onChange={(e) => setMemberCount(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupForm;
