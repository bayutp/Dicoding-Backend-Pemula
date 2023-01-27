const Happi = require("@hapi/hapi");

const init = async () => {
  const server = Happi.server({
    port: 9000,
    host: "localhost",
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
