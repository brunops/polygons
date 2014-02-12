define(['model'], function(model) {
  var c = canvas.getContext('2d');

  function render() {
    var prev;

    c.clearRect(0, 0, canvas.width, canvas.height);
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
    c.arc(vertex.get('x'), vertex.get('y'), vertex.get('radius'), 0, 2 * Math.PI);
    c.fill();
  }

  model.on('add', render);
  model.on('change', render);
});

