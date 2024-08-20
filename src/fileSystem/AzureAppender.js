import React, { useState } from 'react';








const AzureAppender = () => {
  
  console.log('@env(UPDATE_DATABASE_PASSWORD)');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const Baseendpoint = 'http://localhost:4280/data-api/rest/Person'

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleFetch = async (event) => {
    event.preventDefault();

  
  

    try { 
      const fetchUrl = `${Baseendpoint}?$filter=Name eq '${name}'`;
      const response = await fetch(`${fetchUrl}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      
        // body: JSON.stringify(data)
      });
      const rvalue = await response.json();
      console.table(rvalue.value);
      if (rvalue.value.length === 0) { 
       console.info('Record Not found .');
       console.log(rvalue.value)
        // Clear local storage on successful submission
      } else {
        console.log('Record found');
        console.log(rvalue.value)
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      // setFeedback('Error submitting data.');
    }

  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  

    
    

    try {
   
      
    
      // const id = 1;
      const data = {
        Name: name,
        Email: email
      };
          
      //update list
      // const response = await fetch(`${Baseendpoint}/Id/${id}`, {
      //   method: "PATCH",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data)
      // });
      //get list
        
      


      const response = await fetch('http://localhost:4280/data-api/rest/Person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      
      });
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
     
        <button type="button" onClick={handleFetch}>Searchlist</button>
      </form>
    </div>
  );


};

export default AzureAppender;
