import React, {Component} from "react";

class LoginModal extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="loginLabel">Login</h4>
                        </div>
                        <div class="modal-body">
                            <form class="rex-forms">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="recipient-name" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="pass_word" placeholder="Password" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="rex-bottom-medium rex-btn-icon">
                                <span class="rex-btn-text">Login</span>
                                <span class="rex-btn-text-icon"><i class="fa fa-arrow-circle-o-right"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
export default LoginModal