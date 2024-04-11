import { NavLink } from "react-router-dom";
import '../../../../styles/utilities.css';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container flex column space-between gap-20'>
            <img className="logo-img" src="./img/instagram-logo.png" alt="insta-logo" />
            <ul className='flex column gap-10 no-style'>
                <li>
                    <NavLink to="/feed" className="Feed" activeClassName="active">
                        feed
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="Profile" activeClassName="active">
                        profile
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
        
        
        
        
  
