import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Typography,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

function EventItem({
  gameNight,
  value,
  index,
  collection,
  collectionName,
  getGameNights,
}) {
  // Handle deletion of items
  const deleteItem = () => {
    // Grab the id from gamenight
    const { _id } = gameNight;
    // Remove the element in the correct collection form the gameNight object
    gameNight[collectionName].splice(index, 1);
    // Build config to send in the req
    const config = {
      newDocument: gameNight,
    };
    // Make a PATCH request to remove the element from the collection
    axios.patch(`/api/game-nights/${_id}`, config)
      .then(getGameNights)
      .catch((err) => {
        console.error('Error patching gameNight collection: ', err);
      });
  };
  return (
    <>
      <Stack direction="row">
        <IconButton>
          <EditNoteOutlinedIcon
            sx={{ pb: 0, fontSize: 18 }}
          />
        </IconButton>
        <IconButton
          onClick={deleteItem}
        >
          <DeleteForeverTwoToneIcon
            sx={{ pb: 0, fontSize: 18 }}
          />
        </IconButton>
        <Typography
          variant="body1"
          sx={{ fontSize: 18 }}
        >
          {value}
        </Typography>
      </Stack>
      <Divider />
    </>
  );
}

EventItem.propTypes = {
  gameNight: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  collection: PropTypes.instanceOf(Array).isRequired,
  collectionName: PropTypes.string.isRequired,
  getGameNights: PropTypes.func.isRequired,
};

export default EventItem;
