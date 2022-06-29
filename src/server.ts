import "dotenv/config";
import cluster from "cluster";
import os from "os";

import { app } from "./app";

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  app.listen(process.env.APP_PORT, () =>
    console.log(`Server started with worker ${process.pid}! 🔥`)
  );
}
