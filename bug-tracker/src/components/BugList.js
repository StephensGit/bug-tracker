import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const BugList = () => {
  const { bugs } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {bugs.length > 0 ? (
        <React.Fragment>
          {bugs.map((bug) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={bug.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  {bug.bug}
                </p>
                <p className="text-gray-600">
                  {bug.device}
                </p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {bug.type}
                </span>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
};