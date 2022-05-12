import React, { useState } from 'react';
const Button = React.lazy(
  () => import('MFE1/Button')
);

function App() {
  return (
    <>
      <h1>MFE2</h1>
      <React.Suspense fallback="loading button">
      <Button/>
      </React.Suspense>
    </>
  );
}

export default App;
