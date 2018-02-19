function findNeedle(haystack) {
    haystack.filter(arr => arr === 'needle' )
    return haystack.indexOf('needle');
  }
  var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
  var haystack2 = ['glass', 'needle']
  var haystack3 = ['cat','dogs','needles']
  test('index of needle in this haystack1 is',function(){
      expect(findNeedle(haystack1)).toBe(3);
  });
  test('index of needle in this haystack2 is',function(){
    expect(findNeedle(haystack2)).toBe(1);
});
test('index of needle in this haystack3 is',function(){
    expect(findNeedle(haystack3)).toBe(-1);
});