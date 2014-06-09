describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(8);
  });

  it('should have methods named "store" and "contains"', function() {
    expect(bloomFilter.store).to.be.a("function");
    expect(bloomFilter.contains).to.be.a("function");
  });

  it('should return false when given bad values', function(){
    bloomFilter.store('hackreactor');
    expect(bloomFilter.contains('appacademy')).to.equal(false);
  });
});
