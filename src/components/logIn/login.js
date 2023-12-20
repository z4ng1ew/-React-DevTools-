import { useCallback, useEffect, useState } from 'react';
import Style from'./login.module.css';
import InputForm from './inputForm/inputForm';
function Login() {
        const [user, setUser] = useState('')
        const [email, setEmail] = useState('')
        const [userError, setUserError] = useState('')
        const [emailError, setEmailError] = useState('')
        const loginHandler = (e) => {
                e.preventDefault ();
        };

        useEffect(()=>{
                if(user.length < 8 && user.length > 0 ){
                        setUserError(true)
                }else{
                        setUserError(false)
                }
                
        },[user])
        useEffect(()=>{
                if(email.length < 8 && email.length > 0){
                        setEmailError(true)
                }else{
                        setEmailError(false)
                }
        },[email])

        
        const setUserTarget = useCallback((value)=>{
                setUser(value)
        },[])
        const setEmailTarget = useCallback((value)=>{
                 setEmail(value)

        },[])
  return (
    <div className={Style.log}>
        <form onSubmit={loginHandler} className={Style.log__form}>
                <h2>вход</h2>
                <InputForm name = {'name'} error={userError} value={user} Change={setUserTarget} placeholder={"login"} />
                <InputForm name = {'email'} error={emailError} value={email} Change={setEmailTarget} placeholder={"email"} />
                <button type='submit'>Войти</button>
        </form>
      
    </div>
  );
}

export default Login;
