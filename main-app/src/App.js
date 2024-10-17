import React, { useState } from 'react';

function App() {
  const [activeApp, setActiveApp] = useState('app1');

  return (
    <div>
      <h1>Micro-Frontend Demo</h1>
      <nav>
        <button onClick={() => setActiveApp('app1')}>App 1</button>
        <button onClick={() => setActiveApp('app2')}>App 2</button>
      </nav>
      {activeApp === 'app1' && (
        <micro-app name="app1" url="http://localhost:3001/" baseroute="/app1"></micro-app>
      )}
      {activeApp === 'app2' && (
        <micro-app name="app2" url="http://localhost:3002/" baseroute="/app2"></micro-app>
      )}
    </div>
  );
}

export default App;
