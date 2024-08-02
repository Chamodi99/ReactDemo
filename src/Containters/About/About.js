import React, { useState } from "react";
import './About.css';

const About = ( {name,id}) => {

    const [ num,setNum] = useState(0);
    const [login,setLogin] = useState(false);

    const incrementId = () => {
        setNum(num + 1);
    }

    const Login = () => {
        setLogin(true);
    }

    const Logout = () => {
        setLogin(false);
    }

    return (
        <>
        <div className="about">
            <h1 className="aboutHeader">About</h1>
            <p>Hello I am Primalsha chamodi from Galle<br/>
            Let's take a visit about me</p>
            {/* <p>{name}</p>
            <p>{id}</p>
            <button className="increment" onClick={incrementId}> Click me</button>
            <br/>
            <p>{num}</p> */}

            {login ? ( 
            <button onClick={Logout}>Login</button>
            ) :(
            <button onClick={Login}>Logout</button>
            )}

            {login ? (
                <p>Come again</p>
            ): (
                <p>Welcome to the page</p>
            )}
            <div className="achiv">
                <h1>My Achievments</h1>
            </div>
                
        </div>
        </>
    )
}

export default About;