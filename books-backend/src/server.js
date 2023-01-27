const Happi = require("@hapi/hapi");
const { routes } = require("./routes");

const init = async () => {
  const server = Happi.server({
    port: 9000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
