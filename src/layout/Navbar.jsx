import {Button} from "../Components/button.jsx";


export const Navbar = () => {

    return (
        <div className="bg-c1 columns-2">

            <div className="p-4">
                <div className="text-white">
                    QuentaAdmin
                </div>
            </div>
            <div className="bg-c2 p-4">
                <div>
                    <Button message="Home" to="/home" textcolor="text-white"/>
                    <Button message="Login" to="/auth/login" textcolor="text-white"/>
                    <Button message="Register" to="/auth/signup" textcolor="text-white"/>
                </div>
            </div>
        </div>
    )
};