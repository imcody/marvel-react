import React, {Component} from "react";

class LoginModal extends Component{

    render(){
        return (
            <div className="modal fade" id="loginModal" role="dialog" aria-labelledby="loginLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="loginLabel">Login</h4>
                        </div>
                        <div className="modal-body">
                            <form className="rex-forms">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="recipient-name" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="pass_word" placeholder="Password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="rex-bottom-medium rex-btn-icon">
                                <span className="rex-btn-text">Login</span>
                                <span className="rex-btn-text-icon"><i className="fa fa-arrow-circle-o-right"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
export default LoginModal