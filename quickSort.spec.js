describe('Quick Sort function', function() {
  it('returns an array', function() {
    expect(quicksort([])).toEqual([])
  });

  it('is sorts an array', function() {
    expect(quicksort([2,3,4,1,5,9,7,8])).toEqual([1,2,3,4,5,7,8,9])
  });
});
