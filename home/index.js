const home = {
  register: (server, options) => {
    server.route({
      method: ["GET"],
      path: "/",
      handler: (req, res) => {
        return { status: "success" };
      },
    });
  },
  pkg: {
    name: "home",
  },
};

export default home;
