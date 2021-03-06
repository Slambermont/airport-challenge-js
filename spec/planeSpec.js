describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("has a flying status", function() {
    expect(plane.status).toEqual('flying');
  });

  it("has a landed status after landing", function() {
    plane.land();
    expect(plane.status).toEqual('landed');
  });

  it("has a flying status after take off", function() {
    plane.fly();
    expect(plane.status).toEqual('flying');
  });
});
