import React, {Component} from "react";

class RegisterModal extends Component{
    render(){
        return(
            <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerlLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="registerlLabel">Register Now</h4>
                        </div>
                        <div className="modal-body">
                            <form className="rex-forms">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="fast-name" placeholder="Fast Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email-name" placeholder="E-mail" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="pass-word" placeholder="Password" / >
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="re-pass-word" placeholder="Re-Password" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterModal