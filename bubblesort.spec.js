describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('will sort an unsorted array', function(){
    expect( bubbleSort([5, 4, 7, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 7])
  })
  // it('sorts an array with the correct amount of swaps', function(){
  //   expect( bubbleSort([5, 4, 7, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 7])
  //   spyOn(window, 'swap').and.callThrough();
  //   bubbleSort([5, 4, 7, 3, describe2, 1])
  //   expect(swap.calls.count()).toEqual(13)
  // })
  });
