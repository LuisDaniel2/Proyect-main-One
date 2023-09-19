import { useAuth } from '../Context/AuthContext';
import { Link } from "react-router-dom";

function NavBar() {

    const { isAuthenticated, logout, user } = useAuth();

    return (
        <>
            <nav className="bg-Darkred my-3 flex 
            justify-between py-5 px-10 rounded-lg items-center">
                <Link to={
                    isAuthenticated ? "/tasks" : "/"
                }>
                    <h1 className="text-2xl sm:text-4xl font-bold text-Grayishblue"> ServiTecnicos </h1>
                </Link>

                <ul className="flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                            <li>
                                Welcome User {user.username}
                            </li>
                            <li>
                                <Link className='bg-Grayishblue hover:text-Grayishblue px-4 py-1 rounded-sm'
                                    to='/add-task'> Añade una tarea </Link>
                            </li>
                            <li>
                                <Link to='/' onClick={() => {
                                    logout();
                                }}> Logout </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link className='bg-Grayishblue hover:bg-Brown hover:text-Grayishblue px-4 py-1 rounded-sm font-bold'
                                    to='/login'> Login </Link>
                            </li>
                            <li>
                                <Link className='bg-Grayishblue hover:bg-Brown hover:text-Grayishblue px-4 py-1 rounded-sm font-bold'
                                    to='/register'> Register </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;