import { Router } from "express";
import livenessCtrl from "../Controle/liveness.js";

const rotalive = new Router();
const maneger = new livenessCtrl();

rotalive.get('/',maneger.servLife)

export default rotalive;