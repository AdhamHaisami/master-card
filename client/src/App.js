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
  const [itemId, setItemId] = useState();

  const getItems = async () => {
    const {
      data: { data },
    } = await Axios.get('api/v1/item');
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, [selectedItem]);
  return (
    <>
      <div className={classes.container}>
        <CardsContainer
          items={items}
          setItemId={setItemId}
          setSelectedItem={setSelectedItem}
        />
        <Details item={selectedItem} />
      </div>
      <BasicModal addItems={setItems} />
    </>
  );
}

export default App;
