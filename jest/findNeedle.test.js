function findNeedle(haystack) {
    haystack.filter(arr => arr === 'needle' )
    return haystack.indexOf('needle');
  }
  var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
  test('index of needle in this haystack1 is',function(){
      expect(findNeedle(haystack1)).toBe(3);
  });