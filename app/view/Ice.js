var IceView = Backbone.View.extend({

  initialize: function() {
    myDispatcher.register(this.foo);
  },

  render: function() {
    this.$el.html("<hr/><h3>we excel on ice</h3>");
    return this;
  },

  foo: function(payload) {
    ice_view.render();
  }


});

