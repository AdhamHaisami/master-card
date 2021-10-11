import React from 'react';

import useStyles from './style.js';

function Details({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>{item.name}</h3>
      <div>{item.description}</div>
    </div>
  );
}

export default Details;
