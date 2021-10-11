import Axios from 'axios';
import Button from '@material-ui/core/Button';

import useStyles from './style';

function Card({ item, items, setItems, setSelectedItem }) {
  const { name, id } = item;
  const classes = useStyles();

  const deleteItem = async () => {
    try {
      await Axios.delete(`api/v1/item/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getItemById = async () => {
    const {
      data: { data },
    } = await Axios.get(`api/v1/item/${id}`);

    setSelectedItem(data);
  };

  return (
    <div className={classes.root}>
      <h4>{name}</h4>
      <Button onClick={getItemById}>Show Details</Button>
      <Button onClick={deleteItem}>Delete</Button>
    </div>
  );
}

export default Card;
