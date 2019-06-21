import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import ChatApp from "../chat/ChatApp";

class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, username } = this.props;
    return (
      <Container>
        {
          (!isConfirmed && <ConfirmEmailMessage />)
          ? <ChatApp username={username}/>
          : <ChatApp username={username}/>
        }
      </Container>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: true,
    username: state.user.email
  };
}

export default connect(mapStateToProps)(DashboardPage);
