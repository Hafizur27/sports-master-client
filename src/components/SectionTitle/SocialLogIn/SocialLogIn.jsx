
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../UseAuth/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const {googleLogIn} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
            <button onClick={handleGoogleLogIn} className="btn btn-circle bg-orange-600 text-white hover:bg-orange-400">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogIn;