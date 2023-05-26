import './App.css';
import React, {useState} from 'react';

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleFirstName = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastName = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmail = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

const [submitted, setSubmitted] = useState(false)

  return (
    <div className="App">
      <div className='container' onSubmit={handleSubmit}>
        <h1>Form Validation</h1>
        <input value={values.firstName} 
        onChange={handleFirstName}
          className='form-field' type='text' 
          placeholder='First Name' required>

        </input>
        {submitted && !values.firstName ? <span>Fill this field!</span> : null}

        <input value={values.lastName} 
          onChange={handleLastName}
          className='form-field' type='text' 
          placeholder='Last Name' required>
        </input>
        {submitted && !values.lastName ? <span>Fill this field!</span> : null}

        <input value={values.email} 
          onChange={handleEmail}
          className='form-field' type='email' 
          placeholder='Email' required>

        </input>
        {submitted && !values.email ? <span>Fill this field!</span> : null}
        <button>Register</button>
      </div>
    </div>
  );
}

export default App;
