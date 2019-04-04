import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <nav>
            <div className="nav-wrapper">
            <a className="left brand-logo">
                Leif
            </a>
            <ul className="right">
                <li>
                    <a>Login WIth Google</a>
                </li>
            </ul>
            </div>
            </nav>
        );
    }
}

export default Header;
