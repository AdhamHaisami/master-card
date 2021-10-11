import React from 'react';
import Container from '@mui/material/Container';
import Card from '../Card';

import useStyles from './style';

function CardsContainer({ items, setSelectedItem, setItems }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {items.length
        ? items.map((item) => (
            <Card
              item={item}
              setSelectedItem={setSelectedItem}
              setItems={setItems}
              items={items}
            />
          ))
        : 'no result'}
    </Container>
  );
}

export default CardsContainer;
