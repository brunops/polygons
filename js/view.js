define(['model'], function(model) {
  var c = canvas.getContext('2d');

  function render() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    var prev = model.last();
    model.each(function(curr) {
      c.beginPath();
      c.moveTo(prev.get('x'), prev.get('y'));
      c.lineTo(curr.get('x'), curr.get('y'));
      c.closePath();
      c.stroke();
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

