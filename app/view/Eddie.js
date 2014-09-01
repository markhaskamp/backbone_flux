var EddieView = Backbone.View.extend({

  initialize: function() {
    myDispatcher.register(this.foo);
  },

  render: function() {
    this.$el.html("<hr/><h3>eddie would go</h3>");
    return this;
  },

  foo: function(payload) {
    eddie_view.render();
  }


});

