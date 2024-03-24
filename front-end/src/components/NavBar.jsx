import React, { useState } from 'react';
import "../../src/index.css";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigateTo =useNavigate()
    const [hover, setHover] = useState(false);
    const navUser = [
        { id: 1, text: 'Home', link: '/userHome' },
        { id: 2, text: 'My materials', link: '/mymaterial' },
        { id: 3, text: 'Edit profile', link: '/updateprof' }
    ];
    const navAdmin = [
        { id: 1, text: 'Home', link: '/adminHome' },
        { id: 2, text: 'materials', link: '/materials' },
        { id: 3, text: 'Students', link: '/students' },
        { id: 4, text: 'Teachers', link: '/teachers' },
        { id: 5, text: 'Edit profile', link: '/updateprof' }
    ];



    // const logout = () => {
    //     localStorage.removeItem('x-token');
    //     navigateto('/login')
    // };

    return (
        <div className='navbar'>
            <h1>E-Academy</h1>
            <ul>
                {user.role==='student'?navUser.map(item => (
                    <li key={item.id} onClick={() => navigateTo(item.link)} className='navbar-item'>
                        {item.text}
                    </li>
                )):navAdmin.map(item => (
                    <li key={item.id} onClick={() => navigateTo(item.link)} className='navbar-item'>
                        {item.text}
                    </li>
                ))}
            </ul>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='profile-container'
            >
                
              
                
                
            </div>
        </div>
    );
};

export default Navbar;