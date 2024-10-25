import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [varient , setVarient] = useState('login');

    const toggleVariant = useCallback(() => {
        setVarient((current) => current === 'login' ? 'register' : "login")
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black px-16 py-16 bg-opacity-70 self-center lg:w-2/5 lg:max-w-md rounded-md">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {varient==='login' ? 'Login' : 'Register'}
                            </h2>
                        <div className="flex flex-col gap-8">
                            {varient==='register' && 
                            <Input label="Email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />}
                            <Input label="Username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} />
                            <Input label="Password" type="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                        </div>
                        <button
                            className="bg-red-600 py-2 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                            disabled={!email || !password}
                        >
                            {varient==='login' ? 'Login' : 'Register'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {varient==='login' ? 'First Time?No Problem.' : 'Already have an account?'}
                            <span className="text-white ml-2 hover:underline cursor-pointer" onClick={toggleVariant}>
                                {varient==='login' ? 'Create an account' : 'Signin'}
                                </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;