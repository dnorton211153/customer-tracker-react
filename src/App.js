import React from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form'

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center mt-4">
      <Header />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
