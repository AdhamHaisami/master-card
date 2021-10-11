import React, { useState } from 'react';
import Axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ addItems }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addItem = async () => {
    try {
      await Axios.post('api/v1/item', {
        name: name,
        description: desc,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Items</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add new Item
          </Typography>
          <form>
            <label>
              Name:
              <input
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type='text'
                name='name'
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <br />
            <input type='submit' value='Submit' onClick={addItem} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
