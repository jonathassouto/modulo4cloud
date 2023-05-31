import { Router } from "express";
import consultaCtrl from "../Controle/consulta.js";

const rotaconsult = new Router();
const maneger = new consultaCtrl();

rotaconsult.get('/',maneger.consulta)

export default rotaconsult;