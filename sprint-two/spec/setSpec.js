describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add strings to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add numbers to a set', function() {
    set.add(19);
    set.add(37);
    expect(set.contains(19)).to.equal(true);
    expect(set.contains(37)).to.equal(true);
    expect(set.contains(23)).to.equal(false);
  });

  it('should add objects to a set', function() {
    var objA = {
      firstName: "Antonio",
      age: 19
    };
    var objB = {
      firstName: "Justin",
      age: 37
    };
    var objC = {
      firstName: "Cookie",
      age: 52
    }
    set.add(objA);
    set.add(objB);
    expect(set.contains(objA)).to.equal(true);
    expect(set.contains(objB)).to.equal(true);
    expect(set.contains(objC)).to.equal(false);
  });
});
