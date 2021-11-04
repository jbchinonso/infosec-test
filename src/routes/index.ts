import express, { Request, Response, NextFunction } from "express";
import fibonaci from "../Helpers";

const router = express.Router();

router.get("/api/:position", (req: Request, res: Response) => {
  const startTime = new Date().getTime();
  const position: number = parseInt(req.params.position);

  if (isNaN(position))
    return res.status(400).json("Only number inputs are allowed");

  if (position < 5 || position >= 100)
    return res
      .status(400)
      .json("input must be greater than 4 and less than 100");

  const fibSequence = fibonaci(position);
  const endTime = new Date().getTime();
  const totalTime = endTime - startTime;

  const data = { totalTime, sequence: fibSequence };
    
  return res.status(200).json(data);
});

export default router;
