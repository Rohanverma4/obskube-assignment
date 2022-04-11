import { useState } from "react";

import './CSS/LoginForm.css'
export const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });

    const checkLogin = (formData) => {
        console.log(formData)
    }
    
      const handleChange = (e) => {
        if (e.target.name === "email") {
          setFormData({ ...formData, email: e.target.value });
        }
        if (e.target.name === "password") {
          setFormData({ ...formData, password: e.target.value });
        }
      };
    return (
        <div className="formDiv">
        <h3>Login Details</h3>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                checkLogin(formData);
            }}
        >
            <input
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            />
            <input
            name="password"
            type="text"
            placeholder="Enter password"
            onChange={handleChange}
            />
            <input type="submit" value="submit" id="button" />
       </form>
    </div>
    )
}