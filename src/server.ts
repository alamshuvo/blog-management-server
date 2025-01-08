import { Server } from 'http';
import config from './app/config';
import app from './app'; // Import app from the appropriate module
import mongoose from 'mongoose';

let server: Server;
async function main() {
  try {
    console.log(config);
    await mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log(` surver running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

// process.on('unhandledRejection', () => {
//   console.log(`unhandle Regejection is detected shutting the the surver .....`);

//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });

// process.on('uncaughtException', () => {
//   console.log('uncaught Exception is rejected shutting down......');

//   process.exit(1);
// });
