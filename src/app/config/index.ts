import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_password: process.env.DEFAULT_PASS,
  salt_round: process.env.SALT_ROUND,
  node_env: process.env.NODE_ENV,
  jwt_access_token: process.env.JWT_ACESS_TOKEN,
  jwt_Expires_in: process.env.JWT_EXPIRES_IN
};
