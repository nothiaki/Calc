import { Request, Response } from 'express';

//localhost:PORT/arithmetic/multiplication/?nums=12,15,20
export async function multiplication(req: Request, res: Response) {
  const numsQuery = req.query.nums as string | undefined;

  if (!numsQuery) {
    return res.status(400).json({
      'message': 'send a list of numbers in the params.'
    });
  };

  const nums: number[] = numsQuery.split(',').map(Number);

  if (nums.some(Number.isNaN)) {
    return res.status(400).json({
      message: 'only numbers is allowed in params'
    });
  };

  let i: number = 1;
  nums.map(n => i *= n);

  return res.status(200).json({ i });
}
