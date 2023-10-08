import { Router } from "express";

import blogsRoute from "./blogsRoute.js";
import NotFoundError from "../shared/errors/notFoundError.js";

const router = Router();


router.use("/api/blogs", blogsRoute);

router.all("*", (req, res, next) => {
  throw new NotFoundError(`Can't find ${req.originalUrl}`);
});

export default router;