import Input from "@/components/Input";

const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black px-16 py-16 bg-opacity-70 self-center lg:w-2/5 lg:max-w-md rounded-md">
                        <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
                        <div className="flex flex-col gap-4">
                            <Input></Input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;