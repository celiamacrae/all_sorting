describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  });
});
describe('Merge function', function() {
  it('is merge two sorted arrays into one sorted array', function() {
    expect(merge([1,2],[3])).toEqual([1,2,3])
  });
});
describe('Merge Sort function', function() {
  it('is sorts an array', function() {
    expect(mergeSort([2,3,4,1])).toEqual([1,2,3,4])
  });
});
