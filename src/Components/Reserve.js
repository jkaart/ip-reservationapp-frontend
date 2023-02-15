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
  
  /*if (!LoggedIn)
  {
    return (
      <p>Not logged in.</p>
    )
  }
  */
  return (
    <div>
      {data === null ? (
        <p>You have no active reservations.</p>
      ) : (
        <div>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleFetchData}>New IP-address</button>
    </div>
  );
}


export default Reserve;