var IceView = Backbone.View.extend({

  initialize: function() {
    myDispatcher.register(this.handleEvents);
  },

  render: function() {
    this.$el.html(this.myHtml());
    return this;
  },

  handleEvents: function(payload) {
    if (payload.actionType === 'appLoad') {
      ice_view.render();
    }
  },

  myHtml: _.template("<hr/><h3>we excel on ice</h3>")


});

