'use strict';

angular.module('srApp.version', [
  'srApp.version.interpolate-filter',
  'srApp.version.version-directive'
])

.value('version', '0.1');
