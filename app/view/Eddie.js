var EddieView = Backbone.View.extend({

  initialize: function() {
    myDispatcher.register(this.handleEvents);
  },

  render: function() {
    this.$el.html("<hr/><h3>eddie would go</h3>");
    return this;
  },

  handleEvents: function(payload) {
    if (payload.actionType === 'appLoad') {
      eddie_view.render();
    }
  }


});

