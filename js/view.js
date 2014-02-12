define(['model'], function(model) {
  var c = canvas.getContext('2d'),
      radius = 15;

  function render() {
    var prev;
    model.each(function(curr) {
      if (prev) {
        c.beginPath();
        c.moveTo(prev.get('x'), prev.get('y'));
        c.lineTo(curr.get('x'), curr.get('y'));
        c.closePath();
        c.stroke();
      }
      prev = curr;
    });

    model.each(renderVertex);
  }

  function renderVertex(vertex) {
    c.beginPath();
    c.arc(vertex.get('x'), vertex.get('y'), radius, 0, 2 * Math.PI);
    c.fill();
  }

  model.on('add', render);
});
