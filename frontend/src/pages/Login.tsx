import Logo from "../components/Logo";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";
import SmallIcon from "../components/SmallIcon";

const Login = () => {
    return (
        <div className="w-full h-screen flex-col items-center">
            <article className="bg-blue-500 w-full h-4/12 flex justify-center items-center">
                <Logo/>
            </article>
            <form className="flex w-full pt-6 pb-9 h-full flex-col items-center px-8 bg-white" action="">
                <DefaultInput className="w-full py-4 px-4 mb-4" type="text" placeholder="Email"/>
                <DefaultInput className="w-full py-4 px-4" type="password" placeholder="Password"/>
                <DefaultButton className="bg-blue-500 w-full py-4 mt-5 text-white hover:bg-blue-600">
                    login
                </DefaultButton>
                <p className="text-gray-400 mt-6 text-sm font-light">forgot password?</p>
                <div className="w-5/6 justify-center items-center mt-12 border-t border-solid border-gray-300 pt-12 flex gap-10 h-8">
                    <SmallIcon className="w-9" src="https://cdn-icons-png.flaticon.com/128/3128/3128304.png" alt=""/>
                    <SmallIcon className="w-9" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt=""/>
                    <SmallIcon className="w-9" src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt=""/>
                </div>
            </form>
        </div>
    )
}

export default Login;