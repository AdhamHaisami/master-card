import { useState, useEffect } from 'react';
import Axios from 'axios';
import CardsContainer from './components/CardsContainer';
import BasicModal from './components/form';
import Details from './components/Details';

import useStyles from './style.js';

function App() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const getItems = async ({ limit, skip }) => {
    const {
      data: { data },
    } = await Axios.get(`api/v1/item?limit=${limit || 6}&skip=${skip || 0}`);
    setItems(data);
  };

  useEffect(() => {
    getItems({ limit: 6, skip: 0 });
  }, []);
  return (
    <>
      <div className={classes.container}>
        <CardsContainer
          items={items}
          setItems={setItems}
          setSelectedItem={setSelectedItem}
        />
        <Details item={selectedItem} />
      </div>
      <BasicModal addItems={setItems} />
    </>
  );
}

export default App;
