import { Request, Response } from 'express';
import express from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes';

dotenv.config();

const server = express();

server.engine('mustache', mustache() );
server.set('views', path.join(__dirname,"./views") );
server.set('view engine', 'mustache' );

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req:Request, res:Response) => {
    res.render('pages/404');
});

server.listen(process.env.PORT, function() {
    console.log("Server listening on port " + process.env.PORT);
});