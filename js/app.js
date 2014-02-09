require(['model', 'view', 'Vertex'], function(model, view, Vertex) {

  var canvasPos  = $(canvas).position(),
      canvasTop  = canvasPos.top,
      canvasLeft = canvasPos.left;


  canvas.addEventListener('click', function(e) {
    var vertex = new Vertex();
    vertex.set('x', e.pageX - canvasLeft);
    vertex.set('y', e.pageY - canvasTop);
    model.add(vertex);
  });


});
