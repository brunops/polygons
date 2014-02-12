define([], function() {
  return Backbone.Model.extend({
    defaults: {
      radius: 15,
      x: 0,
      y: 0
    },

    contains: function(x, y) {
      var dx = x - this.get('x'),
          dy = y - this.get('y'),
          distance = Math.sqrt(dx * dx + dy * dy);

      return distance <= this.get('radius');
    }
  });
});
