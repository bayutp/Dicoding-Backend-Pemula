// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require("@hapi/hapi");
const { routes } = require("./routes");

const init = async () => {
  const server = Hapi.Server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
