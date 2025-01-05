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
