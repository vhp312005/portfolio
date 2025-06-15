import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', color: 'white', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <h1>This is a Test Page</h1>
      <p>If you see this, the routing is working!</p>
    </div>
  );
};

export default TestPage; 