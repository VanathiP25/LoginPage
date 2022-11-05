import { useState, useEffect } from "react";


function App() {
  const [initialValues,setInitialValues] = useState({ username: "", email: "", password: "" });

    
  const [formValues, setFormValues] = useState([initialValues]);
  const [formErrors, setFormErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  useEffect(() => {
  localStorage.setItem("formValues", JSON.stringify(formValues));
  
  }, );


  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
    
  };
  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <h1 style={{marginLeft:'658px',marginTop:'50px'}}>Login Form</h1>
       
        <div className="ui form">
          <div className="field">
            <label style={{marginLeft:'600px',fontSize:'15px'}}>Username</label>
            <input type="text" name="username" style={{marginLeft:'600px',width:'300px'}} value={formValues.username} onChange={handleChange}
 />
          </div>
          <p style={{marginLeft:'600px',color:'red'}}>{formErrors.username}</p>
          <div className="field">
            <label style={{marginLeft:'600px',fontSize:'15px'}}>Email</label>
            <input type="text" name="email" style={{marginLeft:'600px',width:'300px'}} value={formValues.email} onChange={handleChange}

/>
          </div>
          <p style={{marginLeft:'600px',color:'red'}}>{formErrors.email}</p>
          <div className="field">
            <label style={{marginLeft:'600px',fontSize:'15px'}}>Password</label>
            <input type="password" name="password"style={{marginLeft:'600px',width:'300px'}} value={formValues.password} onChange={handleChange}
/>
          </div>
          <p style={{marginLeft:'600px',color:'red'}}>{formErrors.password}</p>
          <button className="fluid ui button blue" style={{marginLeft:'600px',width:'300px'}} >Submit</button>
        </div>
      </form>
 

 <table id="show">
      <tr>   
          <td>Username</td>
          <td>Email</td>
          <td>Password</td>
          </tr>
        </table>
        </div>
  );
}

export default App;