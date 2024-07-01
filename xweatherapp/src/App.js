import React from 'react';
import Weather from "./Component/Weather";

function App() {

  const api_key = '4cfcb4ff206d40e8a35141605240504';

  return (
    <div style={{ backgroundColor: '#B0E2FF' , minHeight: '100vh'  }}>
      <Weather api_key={api_key}/>
    </div>
  );
}

export default App;
