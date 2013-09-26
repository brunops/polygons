require(['model', 'view', 'Vertex'], function(model, view, Vertex) {


  canvas.addEventListener('click', function(e) {
    var vertex = new Vertex();
    vertex.set('x', e.pageX);
    vertex.set('y', e.pageY);
    model.add(vertex);
  });


});
