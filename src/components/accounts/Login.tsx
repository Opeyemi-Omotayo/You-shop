import React, { useState } from 'react';
import { Link } from "react-router-dom";
 
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e:any) => {
        e.preventDefault();

       

    }

    const register = (e:any) => {
        e.preventDefault();

        

    }

    return (
        <div > 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div >
                    <h2 >You Shop</h2>
                </div>
            </Link>

            <div >
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit'  onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button  onClick={register}>Create your You Shop Account</button>
            </div>
        </div>
    )
}

export default Login;