import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({

  scroll: {
    maxHeight: '500px',
  },

  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

  typing: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12pt'
  }

}));


export default function Feed(props) {

  const { messages, userID, typing } = props;
  // messages = null;

  const classes = useStyles();

  return (

    messages ? (
      <ScrollToBottom className={classes.scroll} mode='bottom'>
      {messages.map(message => {
        return(
          <Message {...message} userID={userID}/>
        )
      })}
      {typing ? 
        <div className={classes.typing}>
          Typing...
        </div> : null}
    </ScrollToBottom>
    ) : (<div className={classes.loading}>
      <CircularProgress size={`100px`} color={`black`}/>
    </div>)

  
  )
}