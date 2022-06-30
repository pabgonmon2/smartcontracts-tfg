import axios from "axios";
import { useState, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { TailSpin  } from "react-loader-spinner";

const LoginForm = ({onLoginRedirect}) => {

    const [loader, setLoader] = useState(true);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setAccessToken} = useUser();

    useEffect(() => {
        setLoader(false);
    }, []);

    const handleSubmit = async () => {
        setLoader(true)
        axios.post("http://localhost:8080/api/users/login", {username: username, password: password}).then((res) => {
            if(res.status === 200) {
                setAccessToken(res.data.accessToken);
                document.cookie = `accessToken=${res.data.accessToken}`
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoader(false);
        });
        
    };

    return (
        <div className="formDiv">
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}> 
                {
                    loader ?  <div className="loading"> <TailSpin color="grey" height={40}/>  </div> : null
                } 
                <div className="box">
                    <h2>Login</h2>
                    <label htmlFor="username">
                    Username
                    <input className="input" type="text" name="username" placeholder="username" onBlur={(e)=>{
                        setUsername(e.target.value);
                    }}/>
                    </label>
                        
                    <label htmlFor="password">
                    Password.
                    <input className="input" type="password" name="password" placeholder="password" onBlur={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                    </label>

                    Don`t have an account? <a onClick={onLoginRedirect}>Register</a>
                </div>
                <button>
                    Login
                </button>

            </form>
        </div>
    );
}

export default LoginForm;






