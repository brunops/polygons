define(['model'], function(model) {
  var c = canvas.getContext('2d'),
      radius = 15;

  function render() {
    model.each(renderVertex);
  }

  function renderVertex(vertex) {
    c.beginPath();
    c.arc(vertex.get('x'), vertex.get('y'), radius, 0, 2 * Math.PI);
    c.fill();
  }

  model.on('add', render);
});
