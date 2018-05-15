describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    plane2 = new Plane();
  });

  it("should return an empty array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should return default capacity of 10", function() {
    expect(airport.capacity).toEqual(10);
  });

  describe("landPlane", function() {

    it('should add a plane to the airport', function() {
      airport.landPlane(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });

  describe("takeOff", function() {
    it('should remove the plane from the airport', function() {
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.takeOff(plane);
      expect(airport.planes).toEqual([plane2]);
    });
  });
});
