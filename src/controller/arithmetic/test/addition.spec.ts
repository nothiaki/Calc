describe('addition controller', () => {
  it('should return sum of nums', async () => {
    const res = await fetch('http://localhost:3000/arithmetic/addition/?nums=0,1')
    const resJson = await res.json();

    expect(res.status).toBe(200);
    expect(resJson.i).toBe(1);
  });
});
