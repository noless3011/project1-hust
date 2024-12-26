"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginDto } from "@/api";
import { AuthApi } from "@/app/utils/ApiClient";


export default function Page() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const router = useRouter();
    const register = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginData: LoginDto = {
            username: username,
            password: password
        }
        try {
            // First execute the function to get the AxiosPromise
            const apiFunction = await AuthApi.authControllerRegister(loginData);
            // Then await the actual API call
            const response = await apiFunction();
            console.log(response);
            if (response.status === 201) {
                router.push('/account/login');
            } else {
                setRegisterStatus("*Failed to create account");
            }
        } catch (error) {
            console.log("*Failed to create account", error);
        }

    };

    return (
        <div className="">
            <form onSubmit={register} method="post" className="flex flex-col h-fit">
                <label className="block text-gray-700 mb-2"
                    htmlFor="username">New Username:</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" value={username} onChange={(form) => setUsername(form.target.value)} required>
                </input>
                <label className="block text-gray-700 mb-2"
                    htmlFor="password">New Password:</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" value={password} onChange={(form) => setPassword(form.target.value)} required>
                </input>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-4"
                    type="submit">Register</button>
            </form>
            <p className="text-red-500">{registerStatus}</p>
            <button></button>

        </div>
    )
}