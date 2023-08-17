import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e: any) => {
        e.preventDefault();



    }

    const register = (e: any) => {
        e.preventDefault();



    }

    return (
        <div >

            <div className='flex flex-col items-center justify-center ' >
                <div className='w-4/6 md:w-3/6 lg:w-2/6'>
                    <h1 className='flex items-center justify-center m-8 text-4xl font-semibold '>LOGIN</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' className='w-full p-2 border border-gray-500 bg-gray-50' value={email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type='password' className='w-full p-2 border border-gray-500 bg-gray-50' value={password} onChange={e => setPassword(e.target.value)} />

                        <div className='flex items-center justify-center'>
                            <button type='submit' className='w-2/4 px-6 py-3 my-6 text-lg text-white bg-orange-600 rounded-md shadow ' onClick={signIn}>SIGNIN</button>

                        </div>
                    </form>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-sm'>
                            By signing-in you agree to the You Shop Website Conditions of Use & Sale.
                        </p>

                        <button className='text-sm hover:text-orange-600' onClick={register}>Create your You Shop Account</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login;