import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserCookie } from "../hooks/UserCookie";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import { check } from "../helpers/dataHelpers";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    margin: "1rem",
    padding: "0.5rem 1.5rem 1.5rem 1.5rem",
  },

  card: {
    textAlign: "left",
  },

  title: {
    marginBottom: "0.5rem",
  },

  infoContainer: {
    display: "flex",
    alignItems: "center",
  },

  infoItem: {
    margin: "0rem 1rem 0rem 0rem",
    color: "#9B9B9B",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
  },

  submitBtn: {
    backgroundColor: "#0EE290",
    color: "white",
    marginTop: "2rem",
  },
  bookBtn: {
    backgroundColor: "#ffa400a6",
    color: "white",
    marginTop: "2rem",
  },
}));

export default function ContactCard(props) {
  const classes = useStyles();

  // UserCookie needed to determine conversation/message data for current user
  const { cookie } = useContext(UserCookie);

  // Initializing state
  const [conversationID, setConversationID] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const { contractor_id } = props;

  // Responsible for determining if a conversation exists between two users and if not, posting to server
  const findConversation = () => {
    let conversation;

    axios.get("/api/conversations").then((response) => {
      // Checking if the conversation exists between this client and contractor
      conversation = check(cookie.user.id, contractor_id, response.data);

      // If the conversation exists, the application redirects to that conversation room
      if (conversation) {
        setConversationID(conversation.id);
        setRedirect(true);
      } else {
        // If the conversation does not exist, it is created
        axios
          .put("/api/conversations", {
            client_id: cookie.user.id,
            client_first: cookie.user.first_name,
            client_last: cookie.user.last_name,
            contractor_id,
            contractor_first: props.first_name,
            contractor_last: props.last_name,
          })
          .then((response) => {
            // After conversation has been put into db, the application redirects to new conversation room
            setConversationID(response.data.id);
            setRedirect(true);
          });
      }
    });
  };

  // Redirecting to the conversation room
  if (redirect) {
    return <Redirect to={`/chat/?conv_id=${conversationID}`} />;
  }

  return (
    <div className={classes.root}>
      <h1
        style={{
          margin: "0.5rem",
          borderBottom: "2px solid #0EE290",
          padding: "0.5rem",
        }}
      >
        Contact
      </h1>

      <div className={classes.card}>
        <h4 className={classes.title}>Location</h4>
        <div className={classes.infoContainer}>
          <LocationOnIcon className={classes.infoItem} />
          <p className={classes.infoItem}>{props.city}</p>
        </div>
      </div>
      <div className={classes.card}>
        <h4 className={classes.title}>Contact Info</h4>
        <div className={classes.contact}>
          <div className={classes.infoContainer}>
            <CallIcon className={classes.infoItem} />
            <p classeName={classes.infoItem}>{props.phone}</p>
          </div>
          <div className={classes.infoContainer}>
            <MailOutlineIcon className={classes.infoItem} />
            <p classeName={classes.infoItem}>{props.email}</p>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        className={classes.bookBtn}
        size="large"
        variant="contained"
        onClick={props.onBooking}
      >
        Book
      </Button>
      <Button
        type="submit"
        className={classes.submitBtn}
        size="large"
        variant="contained"
        onClick={() => findConversation()}
      >
        Message
      </Button>
    </div>
  );
}
