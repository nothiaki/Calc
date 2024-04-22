import { Request, Response } from 'express';

//localhost:PORT/arithmetic/addition/?nums=12,15,20
export async function addition(req: Request, res: Response) {
  const numsQuery = req.query.nums as string | undefined;

  if (!numsQuery) {
    return res.status(400).json({
      'message': 'send a list of numbers in the params.'
    });
  };

  let i = 0;
  const nums = numsQuery.split(',').map(Number);
  nums.map(n => i += n);

  return res.status(200).json({ i });
}
