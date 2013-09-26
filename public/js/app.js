require(['model', 'Vertex'], function(model, Vertex) {
  model.on('add', function() {
    console.log('aaaaadd!');
  });
  model.add(new Vertex());

  console.log(model);
});
