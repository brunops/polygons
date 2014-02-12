require(['model', 'view', 'Vertex'], function(model, view, Vertex) {

  var canvasPos  = $(canvas).position(),
      canvasTop  = canvasPos.top,
      canvasLeft = canvasPos.left,
      vertexBeingDragged;


  function findVertexUnderPoint(x, y) {
    return model.find(function(vertex) {
      return vertex.contains(x, y);
    });
  }

  canvas.addEventListener('mousedown', function(e) {
    var x = e.pageX - canvasLeft,
        y = e.pageY - canvasTop;

    vertexBeingDragged = findVertexUnderPoint(x, y);
    if (!vertexBeingDragged) {
      var vertex = new Vertex();
      vertex.set('x', x); 
      vertex.set('y', y); 
      model.add(vertex);
    }
  });

  canvas.addEventListener('mousemove', function(e) {
    var x = e.pageX - canvasLeft,
        y = e.pageY - canvasTop;

    if (vertexBeingDragged) {
      vertexBeingDragged.set({
        x: x,
        y: y
      });
    }
  });

  canvas.addEventListener('mouseup', function(e) {
    vertexBeingDragged = null;
  });

});
