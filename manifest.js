import inert from "@hapi/inert";
import home from "./home/index.js";
import signup from "./signup/index.js";
import Path from "path";

const __dirname = Path.resolve();

const manifest = {
  server: {
    port: "3000",
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "public"),
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: inert,
      },
      {
        plugin: home,
      },
      {
        plugin: signup,
      },
    ],
  },
};

export default manifest;
