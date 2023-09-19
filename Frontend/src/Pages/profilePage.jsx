import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function ProfilePage() {


    const {user, isAuthenticated} = useAuth();
    console.log(user);

    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/profile");
      }, [isAuthenticated]);


    return(
        <div>ProfilePage</div>
    );
};

export default ProfilePage;