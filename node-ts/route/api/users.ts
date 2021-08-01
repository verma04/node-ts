import express, { Request, Response } from 'express';

const router = express.Router();

router.get(
  '/d',

  async (req: Request, res: Response) => {
   

    return res.status(200).send("sdsdsd");
  }
);

export { router as users };