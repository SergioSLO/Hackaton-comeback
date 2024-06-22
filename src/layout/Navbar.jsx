import {Button} from "../Components/button.jsx";


export const Navbar = () => {

    return (
        <div className="bg-gray-500 columns-2">

            <div className="p-4">
                <div className="text-white">
                    Amazon
                </div>
            </div>
            <div className="bg-gray-800 p-4">
                <div>
                    <Button message="Home" to="/home" textcolor="text-white"/>
                    <Button message="Login" to="/auth/login" textcolor="text-white"/>
                    <Button message="Register" to="/auth/signup" textcolor="text-white"/>
                </div>
            </div>
        </div>
    )
};