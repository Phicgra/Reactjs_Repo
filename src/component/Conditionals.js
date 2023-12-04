import React, { useState } from 'react';

export const Conditionals = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      {loggedIn === false ? (
        <div>
          Welcome Emmanuel
        </div>
      ) : (
        <div>
          Welcome Guest
        </div>
      )}
    </div>
  );
};

export default Conditionals