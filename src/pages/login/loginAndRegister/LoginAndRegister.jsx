import React, {useState} from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function LoginAndRegister({handleUser}) {
    const [loginOrRegister, setLoginOrRegister] = useState(false);

    function handleSwitch() {
        setLoginOrRegister((prev) => !prev)
    }

    return (
        <div>
            {loginOrRegister ? <RegisterPage handleSwitch={handleSwitch} handleUser={handleUser}/> :
                <LoginPage handleSwitch={handleSwitch} handleUser={handleUser}/>}
        </div>
    )
}