import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

function DeleteGameDialog({
  openRemoveDialog,
  deleteGame,
  handleRemoveClick,
  name,
}) {
  return (
    <Dialog
      open={openRemoveDialog}
    >
      <DialogTitle>
        Remove Board Game
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Are you sure you want to remove ${name} from your collection?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleRemoveClick}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleRemoveClick();
            deleteGame();
          }}
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteGameDialog.propTypes = {
  openRemoveDialog: PropTypes.bool.isRequired,
  deleteGame: PropTypes.func.isRequired,
  handleRemoveClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeleteGameDialog;
