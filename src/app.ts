import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/NotFoundRoute';
const app: Application = express();
//parser
app.use(express.json());
app.use(cors());

//application route
app.use('/api', router);

app.get('/', (_req: Request, res: Response) => {
  
  res.send("blog server is running");
});

// global error handlers
app.use(globalErrorHandler);
//not found route
app.use(notFoundRoute);

console.log(process.cwd());

export default app;
