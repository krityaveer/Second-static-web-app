import React, { useState } from 'react';

const AzureAppender = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      //const id = 2;
      const data = {
        Name: name,
        Email: email
      };
      const endpoint = 'http://localhost:4280/data-api/rest/Person'
      const response = await fetch(`${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });



      // const response = await fetch('http://localhost:4280/data-api/rest/Person', {
      //   // method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   //body: JSON.stringify(name, email),
        
      
      // });
      const rvalue = await response.json();
      console.table(rvalue.value);
      if (response.ok) { 
       console.info('Data submitted successfully.');
       console.log(rvalue.value)
        // Clear local storage on successful submission
      } else {
        console.log('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      // setFeedback('Error submitting data.');
    }
  };

  return (
    <div>
      <h1>AzureAppender</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AzureAppender;
