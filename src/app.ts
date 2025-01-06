import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFoundRoute from './app/middleware/auth';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();
//parser
app.use(express.json());
app.use(cors());

//application route
app.use('/api', router);

app.get('/', (_req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

// global error handlers
app.use(globalErrorHandler);
//not found route
app.use(notFoundRoute);

console.log(process.cwd());

export default app;
