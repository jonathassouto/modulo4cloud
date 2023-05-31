import { Router } from "express";
import readinessCtrl from "../Controle/readiness.js";

const rotaread = new Router();
const maneger = new readinessCtrl();

rotaread.get('/',maneger.servRead)

export default rotaread;