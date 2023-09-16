import app from "./app.js";
import { sequelize } from "./database/database.js";
import "dotenv/config";
import logger from "./logs/logger.js";

async function main() {
  console.clear();

  await sequelize.sync({ force: false });

  const PORT = process.env.PORT;
  app.listen(PORT);
  console.log("Server is listening on http://localhost:", PORT);

  logger.info(`Server on port ${PORT}`);
  logger.error("Server on port ");
  logger.debug("Server on port ");
  logger.warn("Server on port ");
  logger.fatal("Server on port ");
}

main();
