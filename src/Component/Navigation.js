import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';



const Navigation = ()=>{
    return(
    
            <nav className={'deep-purple darken-1'}>
                <div className={"nav-wrapper"}>
                    <ul className={'left'}>
                        <li>
                            <Link to={'/'}>
                                <a className={'white-text'}>Home</a>
                            </Link>    
                        </li>
                        <li>
                            <Link to={'/about'}>
                                <a className={'white-text'}>About</a>
                            </Link>
                       </li> 
                    </ul>
                </div>
               
                 
            </nav>
        
    );
}
export default Navigation;