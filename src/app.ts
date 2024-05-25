import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { clear } from 'console';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

export default app;
