import { Request, Response } from 'express';

//localhost:PORT/arithmetic/subtraction/?nums=12,15,20
export async function subtraction(req: Request, res: Response) {
  const numsQuery = req.query.nums as string | undefined;

  if (!numsQuery) {
    return res.status(400).json({
      'message': 'send a list of numbers in the params.'
    });
  };

  const nums = numsQuery.split(',').map(Number);
  var i = nums[0];

  for (let k: number = 1; k <= nums.length - 1; k++) {
    i = i - nums[k];
  };

  return res.status(200).json({ i });
}
