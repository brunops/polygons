require(['model', 'view', 'Vertex'], function(model, view, Vertex) {

  var canvasPos  = $(canvas).position(),
      canvasTop  = canvasPos.top,
      canvasLeft = canvasPos.left;


  function findVertexUnderPoint(x, y) {
    return model.find(function(vertex) {
      return vertex.contains(x, y);
    });
  }

  canvas.addEventListener('click', function(e) {
    var x = e.pageX - canvasLeft,
        y = e.pageY - canvasTop;

    var vertexBeingDragged = findVertexUnderPoint(x, y);
    if (vertexBeingDragged) {
    }
    else {
      var vertex = new Vertex();
      vertex.set('x', x); 
      vertex.set('y', y); 
      model.add(vertex);
    }
  });


});
