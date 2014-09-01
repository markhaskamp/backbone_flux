var PlaqueView = Backbone.View.extend({

  initialize: function() {
    myDispatcher.register(this.bar);
  },

  render: function() {
    this.$el.html("<hr/><h3>always read the plaque</h3>");
    return this;
  },

  bar: function(payload) {
    plaque_view.render();
  }

});

