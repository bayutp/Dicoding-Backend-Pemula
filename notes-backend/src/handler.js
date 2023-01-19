const { nanoid } = require("nanoid");
const { notes } = require("./notes");

const addNotesHandler = (request, h) => {
  // create note property
  const { title, tags, body } = request.payload; // put data from client
  const id = nanoid(16); // create unique id
  const createdAt = new Date();
  const updatedAt = createdAt;
  // create new note object
  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  // save new note to array notes
  notes.push(newNote);
  // save data success?
  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Note added successfully",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Note failed to add",
  });
  response.code(500);
  return response;
};
const getNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((note) => note.id === id)[0];
  if (note !== undefined) {
    return {
      status: "success",
      data: { note },
    };
  }

  const response = h.response({
    status: "fail",
    message: "Note not found",
  });
  response.code(404);
  return response;
};
const updateNotesHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date();
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: "success",
      message: "Note updated successfully",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Note failed to update",
  });
  response.code(404);
  return response;
};
const deleteNotesHandler = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Note deleted successfully",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Note failed to delete",
  });
  response.code(404);
  return response;
};

module.exports = {
  addNotesHandler,
  getNotesHandler,
  getNoteByIdHandler,
  updateNotesHandler,
  deleteNotesHandler,
};
