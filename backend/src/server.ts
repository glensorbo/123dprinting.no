import express, { Express } from 'express';

import cors from 'cors';
import helmet from 'helmet';

//@ts-ignore
import volleyball from 'volleyball';

import { NotFoundException } from './exceptions/not-found';
import { HttpException } from './types/http-exception';

import { config } from './config';

import { AuthRoutes, UserRoutes } from './routes';
import { connectDB } from './repositories/database';
import { checkAuth } from './middleware/check-auth';

import type { Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = config.PORT;

app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);
app.use(volleyball);
app.use(helmet());
app.use(express.json());

app.use('/uploads', checkAuth, express.static('uploads'));

app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('OK');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundException();
});

app.use(
  (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
      return next(error);
    }
    res.status(error.statusCode || 500);
    res.json({
      message: error.message || 'Internal Server Error',
      statusCode: error.statusCode || 500,
    });
  }
);

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
