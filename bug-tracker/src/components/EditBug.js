import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditBug = (route) => {
  let history = useHistory();

  const { bugs, editBug } = useContext(GlobalContext);

  const [selectedBug, setSelectedBug] = useState({
    id: null,
    bug: "",
    device: "",
    type: "",
  });

  const currentBugId = route.match.params.id;

  useEffect(() => {
    const bugId = currentBugId;
    const selectedBug = bugs.find(
      (currentBugTraversal) => currentBugTraversal.id === parseInt(bugId)
    );
    setSelectedBug(selectedBug);
  }, [currentBugId, bugs]);

  const onSubmit = (e) => {
    e.preventDefault();
    editBug(selectedBug);
    history.push("/");
  };

  const handleOnChange = (bugKey, newValue) =>
    setSelectedBug({ ...selectedBug, [bugKey]: newValue });

  if (!selectedBug || !selectedBug.id) {
    return <div>Invalid Employee ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="bug"
            >
              Issue
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedBug.bug}
              onChange={(e) => handleOnChange("bug", e.target.value)}
              type="text"
              placeholder="Enter bug"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="device"
            >
              Device
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedBug.device}
              onChange={(e) => handleOnChange("device", e.target.value)}
              type="text"
              placeholder="Enter device"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedBug.type}
              onChange={(e) => handleOnChange("type", e.target.value)}
              type="text"
              placeholder="Enter type"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Bug
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};