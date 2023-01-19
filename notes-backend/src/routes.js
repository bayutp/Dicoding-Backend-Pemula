const {
  addNotesHandler,
  getNotesHandler,
  getNoteByIdHandler,
  updateNotesHandler,
  deleteNotesHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNotesHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateNotesHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNotesHandler,
  },
];

module.exports = { routes };
