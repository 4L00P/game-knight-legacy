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
  gameName,
}) {
  return (
    <Dialog
      open={openRemoveDialog}
    >
      <DialogTitle>
        Title
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Content - ${gameName}`}
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
  gameName: PropTypes.string.isRequired,
};

export default DeleteGameDialog;
