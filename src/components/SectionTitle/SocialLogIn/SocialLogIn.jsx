
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
            const loggedInUser = result.user;
            const saveUser = {name: loggedInUser?.displayName, email: loggedInUser?.email, imgUrl: loggedInUser?.photoURL
            }
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
              
                navigate(from, {replace: true});
             
            })
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