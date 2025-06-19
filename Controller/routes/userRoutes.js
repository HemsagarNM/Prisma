import { Router, Router } from "express";
import { createUser } from "../UserController";

const Router =Router();

Router.post("/", createUser)

export default Router;