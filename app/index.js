var eddie_view;
var ice_view;
var plaque_view;

var myDispatcher;
var __DEV__ = null;

$('document').ready(function() {

  myDispatcher = new Dispatcher();

  eddie_view = new EddieView({
                              "el": $('#eddie')
                             });

  ice_view = new IceView({"el": $('#ice')});
  plaque_view = new PlaqueView({"el": $('#plaque')});

  ice_view.render();
  plaque_view.render();

  myDispatcher.dispatch({
    actionType: 'appLoad'
  });

});

