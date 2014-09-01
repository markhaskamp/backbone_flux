var eddie_view;
var ice_view;
var plaque_view;

$('document').ready(function() {

  eddie_view = new EddieView({"el": $('#eddie')});
  ice_view = new IceView({"el": $('#ice')});
  plaque_view = new PlaqueView({"el": $('#plaque')});

  eddie_view.render();
  ice_view.render();
  plaque_view.render();
});

