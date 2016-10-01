'use strict';

describe('srApp.version module', function() {
  beforeEach(module('srApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
