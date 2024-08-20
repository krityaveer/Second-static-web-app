import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
// import FileComponent from './fileSystem/FileComponent';
// import FileAppender from './fileSystem/FileAppender';
import FileAppendServer from './fileSystem/FileAppendServer';
import AzureAppender from './fileSystem/AzureAppender';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <FileAppender />
    <FileComponent /> */}
    <div><FileAppendServer/> </div>
    
    <div id="azure-appender"><AzureAppender/></div>
        <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
