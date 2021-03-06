define(['model'], function(model) {
  var c = canvas.getContext('2d');

  function render() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    var prev = model.last();
    c.beginPath();
    c.moveTo(prev.get('x'), prev.get('y'));
    model.each(function(curr) {
      c.lineTo(curr.get('x'), curr.get('y'));
      prev = curr;
    });
    c.closePath();
    c.fillStyle = 'slateblue';
    c.fill();
    c.stroke();

    model.each(renderVertex);
  }

  function renderVertex(vertex) {
    c.beginPath();
    c.arc(vertex.get('x'), vertex.get('y'), vertex.get('radius'), 0, 2 * Math.PI);
    c.fillStyle = '#000';
    c.fill();
  }

  model.on('add', render);
  model.on('remove', render);
  model.on('change', render);
});

