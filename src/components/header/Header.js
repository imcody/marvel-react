import React, {Component} from "react";
import RegisterModal from "./../register-modal/RegisterModal"
import LoginModal from "./../login-modal/LoginModal"

class Header extends Component{

    render(){
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block">
                                <p><a href="#my-account">My Account</a></p>
                                <div className="btn-group">
                                <button className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ENGLISH <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#English">English</a></li>
                                    <li><a href="#France">France</a></li>
                                    <li><a href="#Germany">Germany</a></li>
                                    <li><a href="#Japanese">Japanese</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="block align-right">
                                <a href="#help-center">Help center</a>
                                <a href="#online-support">online support</a>
                                <a href="#register" data-toggle="modal" data-target="#registerModal" data-whatever="@mdo">register</a>
                                <RegisterModal />
                                <a href="#LOG-in" data-toggle="modal" data-target="#loginModal" data-whatever="@mdo"><i className="fa fa-lock"></i>LOG in </a>
                                <LoginModal />
                            </div>
                        </div>
                    </div>
                </div>
            </header>        
        );
    }
}

export default Header