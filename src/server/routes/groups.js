const { Router } = require('express');

const groupsRouter = Router();

// End point starts with '/api/groups'
// groupsRouter.get('/')
groupsRouter.get('/', (req, res) => {

});

module.exports = {
  groupsRouter,
};
