
import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            showError: false,
            redirect: false
    };
      }
    onClick = () => {
        console.log(this.state)
        $.ajax({  
            type: "POST",  
            url: "http://localhost:5000/login",  
            data: JSON.stringify({"email": this.state.username, "password": this.state.password}),  
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (dataString) => {  
                //$('#mentor_list').html(dataString);
                this.setState({errorMessage: '', showError: false, redirect: true});
               // <Redirect to='www.google.com'  />
            },
            error: ()=> {
                this.setState({errorMessage: 'User with the given username does not exit', showError: true});

              } 
        });
    }

    typeUsername = (event) => {
        console.log(event.target.value)
		this.setState({username: event.target.value})
	}

    typePwd = (event) => {
		this.setState({password: event.target.value})
	}


  render() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <span className="text-center login-title">Sign in to continue to Bootsnipp</span>
                    <div className="account-wall">
                        <input type="text" className="form-control" placeholder="Email" required onChange={this.typeUsername}/>
                        <input type="password" className="form-control" placeholder="Password" required onChange={this.typePwd} />
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onClick}>
                            Sign in</button>
                            { this.state.showError ? <p className='error-message'>{this.state.errorMessage}</p> : null }
                            
                        <label className="checkbox pull-left">
                            <input type="checkbox" value="remember-me" />
                            Remember me
                        </label>
                        <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                    </div>
                    <a href="#" className="text-center new-account">Create an account </a>
                </div>
            </div>
            
            {this.state.redirect && <Redirect to="/home" />}
        </div>

    );
  }
}

export default Login;
