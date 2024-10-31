import React, {useState} from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import LoginBackgroundPage from "../../../assests/images/BackgroundForLogin.webp"

export default function LoginAndRegister({handleUser}) {
    const [loginOrRegister, setLoginOrRegister] = useState(false);

    function handleSwitch() {
        setLoginOrRegister((prev) => !prev)
    }

    return (
        <div>
            <div className="img-div">
                <img className="login-img" src={LoginBackgroundPage} alt=""/>
                {loginOrRegister ? <RegisterPage handleSwitch={handleSwitch} handleUser={handleUser}/> :
                    <LoginPage handleSwitch={handleSwitch} handleUser={handleUser}/>}
            </div>
        </div>
    )
}