import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: 'center'
  },

  title: {
    margin: "2rem 0rem 2rem 0rem",
    borderBottom: '2px solid #0EE290',
    width: '20%',
  },
}));

export default function PopularHeading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Popular Categories</h1>
    </div>
  )
}
