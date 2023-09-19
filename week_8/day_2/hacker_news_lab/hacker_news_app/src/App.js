import React, { useState, useEffect } from 'react';
import NewsContainer from './container/NewsContainer';
import './App.css';

function App() {

  return (
    <div>
      {/* <h1>I am the App</h1> */}
      <NewsContainer/>
    </div>
  );
}

export default App;

// Components: Form submission: Search Filter (top of page)
// Components: List of News
// Components: News Item List - iterated news article
// Components: News Item Detail - selected news article - key/value pair - step into list
