import express, { Request, Response, NextFunction } from 'express'
import fibonaci from '../Helpers'

const router = express.Router();



router.get('/:position', (req:Request, res:Response) => {

    const startTime = new Date().getTime() 
    const position:number = parseInt(req.params.position)
    const fibSequence = fibonaci(position);
    const endTime = new Date().getTime();
    const totalTime = endTime - startTime

    const data = {totalTime,sequence: fibSequence, };

    return res.status(200).json(data);
})





export default router;