'use strict';

describe("Grains", function () {
  describe("square()", function () {
    it("square 1", function () {
      expect(square(1)).toEqual(1);
    });

    it("square 2", function () {
      expect(square(2)).toEqual(2);
    });

    it("square 3", function () {
      expect(square(3)).toEqual(4);
    });

    it("square 4", function () {
      expect(square(4)).toEqual(8);
    });

    it("square 16", function () {
      expect(square(16)).toEqual(32768);
    });

    it("square 32", function () {
      expect(square(32)).toEqual(2147483648);
    });

    it("square 53", function () {
      expect(square(53)).toEqual(4503599627370496);
    });
  });
  describe("total()", function () {
    it("total 1", function () {
      expect(total(1)).toEqual(1);
    });
    it("total 2", function () {
      expect(total(2)).toEqual(3);
    });
    it("total 3", function () {
      expect(total(3)).toEqual(7);
    });
    it("total 4", function () {
      expect(total(4)).toEqual(15);
    });
    it("total 5", function () {
      expect(total(5)).toEqual(31);
    });
    it("total 53", function () {
      expect(total(53)).toEqual(9007199254740991);
    });
  });
});
