import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Banner from "../banner/Banner";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const auth = getAuth(app);

  const register = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if(user){
        toast('user created!');
        navigate('/');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast( errorCode, errorMessage );
    });
  };

  return (
    <div>
<div className="flex flex-col items-center justify-center ">
      <div className="w-4/6 md:w-3/6 lg:w-2/6">
        <h1 className="flex items-center justify-center m-8 text-4xl font-semibold ">
          CREATE ACCOUNT
        </h1>

        <form>
        <h5>Username</h5>
          <input
            type="text"
            className="w-full p-2 border border-gray-500 bg-gray-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            className="w-full p-2 border border-gray-500 bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            className="w-full p-2 border border-gray-500 bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-2/4 px-6 py-3 my-6 text-lg text-white bg-orange-600 rounded-md shadow "
              onClick={register}
            >
              SIGNUP
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm">
               By signing-up you agree to the You Shop Website Conditions of Use & Sale. 
         </p>
          <p className="m-6 text-sm">
            <span>Have an account? </span>
            <Link to='/accounts/login' className="hover:text-orange-600 ">login here</Link>
          </p>
        </div>
      </div>
    </div>
    <div className="mx-4 lg:mx-8 xl:mx-10 my-[7rem]">
    <Banner />
 
    </div>
    </div>
    
  );
}

export default Register;
