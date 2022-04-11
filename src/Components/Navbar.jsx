import './CSS/Navbar.css'
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { setLogin } from '../Redux/Actions';
export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogin = useSelector((store) => store.isLogin)
    
    let navbarData;

    !isLogin ? navbarData = 
    [{
        title: 'login',
        link: '/login'
    },
    {
        title: 'Signup',
        link: '/signup',
    },
    {
        title: '',
        link: '',
    }
    ] : navbarData = 
    [{
        title: 'cart',
        link: '/cart'
    },
    {
        title: 'ordered',
        link: '/orderDetails',
    },
    {
        title: 'logout',
        link: '/',
    }]
    return (
        <div className="navbar-css">
            {navbarData.map((item) => {
            return <Navbarhead 
                        title={item.title}
                        link={item.link}
                        navigate={navigate}
                        dispatch={dispatch}
                        setLogin={setLogin}
                        />
            })}
        </div>
        )
}

function Navbarhead({title, link, navigate, dispatch, setLogin}){

    const handleNavigate = (title) => {
      if(title == "logout") {
          dispatch(setLogin(false))
        navigate(link)
      }
      if (title == "Home"){
        navigate(link)
      }else if (title == "About"){
        navigate(link)
      } else {
        navigate(link)
      }
    }
  
    return (
      <button onClick={handleNavigate}>{title}</button>
    )
  }