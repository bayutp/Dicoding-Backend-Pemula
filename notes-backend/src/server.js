const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.Server({
    port: 3000,
    host: "localhost",
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
