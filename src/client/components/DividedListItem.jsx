import React from 'react';
import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';

function DividedListItem({ element }) {
  return (
    <div>
      <ListItem>
        <ListItemText primary={element} />
      </ListItem>
      <Divider component="li" />
    </div>
  );
}

DividedListItem.propTypes = {
  element: PropTypes.string.isRequired,
};

export default DividedListItem;
