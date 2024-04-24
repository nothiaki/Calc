import { ResJsonSuccess } from '../../../types/ResJsonSuccess';
import { ResJsonError } from '../../../types/ResJsonError';

describe('addition controller', () => {
  it('should return sum of nums', async () => {
    const res = await fetch('http://localhost:3000/arithmetic/addition/?nums=0,1')
    const resJson: ResJsonSuccess = await res.json();

    expect(res.status).toBe(200);
    expect(resJson.i).toBe(1);
  });

  it('should return error in request without query params', async () => {
    const res = await fetch('http://localhost:3000/arithmetic/addition/')
    const resJson: ResJsonError = await res.json();

    expect(res.status).toBe(400);
    expect(resJson.message).toBe('send a list of numbers in the params.');
  });

  it('should return in request without num in query', async () => {
    const res = await fetch('http://localhost:3000/arithmetic/addition/?nums=x,1')
    const resJson: ResJsonError = await res.json();

    expect(res.status).toBe(400);
    expect(resJson.message).toBe('only numbers is allowed in params');
  });
});
