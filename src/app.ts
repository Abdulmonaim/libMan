import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express, { Express } from 'express';
import { PrismaClient } from "@prisma/client";


import { verifySession } from "./middlewares/verifySession";
import routes from './routes/index.js';

export const prisma = new PrismaClient();

export const app: Express = express();
const domain = process.env.DOMAIN
const dashboardPort = process.env.DASHBOARDPORT
const allowedOrigins = [`https://dev.${domain}.com`, `https://app.${domain}.com`, `http://127.0.0.1:${dashboardPort}`];

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }),
);
app.use(express.urlencoded());

app.use('/userSpace', verifySession)

app.use('/v1', routes);
app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: 'Requested resource not found',
    });
  });

export default app;
