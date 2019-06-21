import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="">
        <aside className="react-page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="react-page-heading-lead">
                  Login
                  <span className="react-border"></span>
                </h1>
              </div>
            </div>
          </div>
        </aside>
        <div className="container">
          <div className="col-md-12">
            <LoginForm submit={this.submit} />
            <Link to='/forgot_password'>Forgot Password?</Link>

            <div className="container jumbotron row">
              <h4>For Quick Demo</h4>
              <h5>Email: <b>doe@mail.com</b></h5>
              <h5>Password: <b>123</b></h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
