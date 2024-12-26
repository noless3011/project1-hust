"use client";
import { LoginDto } from "@/api";
import { AuthApi } from "@/app/utils/ApiClient";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Page() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const router = useRouter();
    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginData: LoginDto = {
            username: username,
            password: password
        }
        try {
            const callLoginApiFunc = await AuthApi.authControllerLogin(loginData);
            const res = await callLoginApiFunc();
            if (res.data.isSuccess === true) {
                router.push('/');
            } else {
                setLoginStatus("*Wrong username or password");
            }
        } catch (error) {
            console.log(error);
        }


    };

    return (
        <div className="">
            <form onSubmit={login} method="post" className="flex flex-col h-fit">
                <label className="block text-gray-700 mb-2" htmlFor="username">Username:</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" value={username} onChange={(form) => setUsername(form.target.value)} required>
                </input>
                <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" value={password} onChange={(form) => setPassword(form.target.value)} required>
                </input>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-4"
                    type="submit">Login</button>
            </form>
            <p className="text-red-500">{loginStatus}</p>
            <button></button>

        </div>
    )
}