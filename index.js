import express from 'express';
import rotaread from './Rotas/rotareadiness.js';
import rotaconsult from './Rotas/rotaconsulta.js';
import rotalive from './Rotas/rotaliveness.js';

const porta = 3000;
const serv = 'localhost';
const app = express();

app.use(express.json());

app.use('/readiness',rotaread);
app.use('/liveness',rotalive);
app.use('/consulta_dados',rotaconsult);



app.listen(porta,serv,()=>{
    console.log(`O servidor ${serv} está ativo na porta ${porta}`)
})