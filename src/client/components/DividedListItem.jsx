import React from 'react';
import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemText,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function DividedListItem({ element }) {
  return (
    <div>
      <ListItem>
        <ListItemText primary={element} />
        <IconButton>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItem>
      <Divider component="li" />
    </div>
  );
}

DividedListItem.propTypes = {
  element: PropTypes.string.isRequired,
};

export default DividedListItem;
