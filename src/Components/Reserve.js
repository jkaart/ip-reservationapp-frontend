/*import React from "react";

const Reserve = () => {
    return (
        <div>
            <h1>Welcome to the Reserve Page!</h1>
            <p>You are now logged in and able to make a reservation.</p>
        </div>
    );
};

export default Reserve; */

import React, { useState, useEffect } from 'react';

const Reserve = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFetchData = () => {
    fetchData();
  };

  return (
    <div>
      {data === null ? (
        <p>Sinulla ei ole aktiivisia varauksia.</p>
      ) : (
        <div>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleFetchData}>Varaa uusi IP-osoite</button>
    </div>
  );
}


export default Reserve;