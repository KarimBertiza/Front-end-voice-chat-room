import React from "react";
import PropTypes from "prop-types";

function Message({ username, message, incoming, ...props }) {
  const float = incoming ? "left" : "right";

  return (
    <div
      className={"w-100 alert " + (incoming ? "alert-primary incomming-message" : "alert-success outgoing-message")}
      style={{ float }}
      role="alert"
    >
      <strong style={{ float }}>{(incoming ? username : username + " (You)")}</strong>
      <br />
      {message}
    </div>
  );
}

Message.propTypes = {
  incoming: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.any.isRequired
};

Message.defaultProps = {
  incoming: false
};

export default Message;
