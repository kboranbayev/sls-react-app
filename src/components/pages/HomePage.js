import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class HomePage extends React.Component {
    componentDidMount() {
    }
  
    render() {
      return (
        <div className="">
          <aside className="react-page-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="react-page-heading-lead">
                    React App <i className="icon-cross">&mdash;</i> Pusher Chatkit
                    <span className="react-border"></span>
                  </h1>
                  
                </div>
              </div>
            </div>
          </aside>
          <div className="container text-center">
            <div className="row">
              {this.props.isAuthenticated ? (
                <input className="btn btn-primary" onClick={() => this.props.logout()} value="Logout"></input>
              ) : (
                <div className="col-md-12">
                  <Link to="/login" className="btn btn-primary">Login</Link> or <Link to="/signup" className="btn btn-danger">Signup</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
  
  HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.user.token
    };
  }
  
  export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
  