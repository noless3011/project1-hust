import React from "react";

interface AuthenticationProps {
    login: () => void;
    register: () => void;
}


const AuthenticationButtons: React.FC<AuthenticationProps> = ({ login, register }) => {
    return (
        <div className="flex flex-row h-full items-center">
            <button onClick={login} className="w-32 h-full mx-1 px-2 rounded-lg bg-white">Login</button>
            <button onClick={register} className="w-32 h-full mx-1 px-2 rounded-lg bg-darkgreen text-white">Register</button>
        </div>
    )
}

export default AuthenticationButtons;