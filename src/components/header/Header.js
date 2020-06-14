import React, {Component} from "react";
import RegisterModal from "./../register-modal/RegisterModal"
import LoginModal from "./../login-modal/LoginModal"

class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block">
                                <p><a href="#">My Account</a></p>
                                <div className="btn-group">
                                <button className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ENGLISH <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">France</a></li>
                                    <li><a href="#">Germany</a></li>
                                    <li><a href="#">Japanese</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="block align-right">
                                <a href="#">Help center</a>
                                <a href="#">online support</a>
                                <a href="#" data-toggle="modal" data-target="#registerModal" data-whatever="@mdo">register</a>
                                <RegisterModal />
                                <a href="#" data-toggle="modal" data-target="#loginModal" data-whatever="@mdo"><i class="fa fa-lock"></i>LOG in </a>
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