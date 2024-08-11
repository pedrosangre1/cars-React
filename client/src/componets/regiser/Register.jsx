import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {username: '', email: '', password: '', rePassword: ''};

export default function Register() {
    const [error, setError] = useState ('');
    const register = useRegister();
const navigate = useNavigate();

const registerHandler = async (values) =>{ 
    if (values.password !== values.rePassword) return setError ('Паролите не съвпадат');
    
    try{
        await register(values.username, values.email, values.password)
        navigate('/');
    }catch (err) {
        console.error(err.message)
        setError(err.message);
    }
};

const {
    values,
    changeHandler,
    submitHandler,
 } = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Регистрация</h1>
                    
                    <label htmlFor="username">Потебител:</label>
                    <input 
                        type="nickname"
                        id="username" 
                        name="username" 
                        value={values.username}
                        onChange={changeHandler}
                        placeholder="Потребителско име"
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com"
                    />

                    <label htmlFor="pass">Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="register-password"
                    value={values.password}
                    onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                    type="password" 
                    name="rePassword" 
                    id="rePassword"
                    value={values.rePassword}
                    onChange={changeHandler}
                    />

                    { error && (
                        <p>
                            <span>{error}</span>
                        </p>

                    )}
                    <input className="btn submit" type="submit" value="Register"/>

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}