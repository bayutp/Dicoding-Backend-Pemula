const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return h.response("Halaman Home").code(200);
    },
  },

  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return h
        .response("Halaman tidak dapat diakses dengan method tersebut.")
        .code(400);
    },
  },

  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return h.response("Halaman About").code(200);
    },
  },

  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return h
        .response("Halaman tidak dapat diakses dengan method tersebut.")
        .code(400);
    },
  },

  {
    method: "GET",
    //path param if optional used ? & create default value
    path: "/hello/{name?}",
    handler: (request, h) => {
      //create path parameters
      const { name = "strangers" } = request.params;

      //crate query
      const { lang } = request.query;
      if (lang === "id") {
        return h.response(`Hai ${name}`).code(200);
      }
      return h.response(`Hai ${name}`).code(200);
    },
  },

  {
    //* & {amy*} mean all methods & any paths
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return h
        .response("Halaman tidak ditemukan")
        .code(404)
        .type("text/plain")
        .header("X-Custom", "some-value");
    },
  },
];

module.exports = routes;
