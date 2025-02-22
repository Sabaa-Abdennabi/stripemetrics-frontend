import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    //const response = await login(email, password);
    
  
      toast.success('Welcome back!');
      //appLogin(response.user, response.token);
      setTimeout(()=>{navigate("/dashboard")});
  
  }

  return(
    <>
      <div className="flex flex-col items-center justify-center px-4 py-28">
        <h2 className="text-center text-gray-900 text-3xl md:text-4xl">Welcome back.</h2>

        <div className="py-8 w-[280px]">
          <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full my-3 px-2 py-2 block bg-white border shadow-sm border-indigo-500 placehoder-slate-400 focus:border-indigo-500 focus:ring-offset-1 focus:rign-offset-slate-100 focus:ring-4 focus:ring-slate-200 rounded-md sm:text-sm" />
          
          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={(e) => (e.key === "Enter" ? handleLogin() : null)} placeholder="Password" className="w-full my-3 px-2 py-2 block bg-white border shadow-sm border-indigo-500 placehoder-slate-400 focus:border-indigo-500 focus:ring-offset-1 focus:rign-offset-slate-100 focus:ring-4 focus:ring-slate-200 rounded-md sm:text-sm" />
          
          <button className="bg-indigo-500 hover:bg-indigo-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white w-full" onClick={handleLogin}>Log in</button>

          <p className="w-full mt-4 px-1 text-end">
            <Link to="/signup">🔐 Sign up</Link>
          </p>
        </div>
      </div>
      <Toaster />
    </>
  )
}