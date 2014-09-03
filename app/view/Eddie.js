var EddieView = Backbone.View.extend({

  initialize: function() {
    myDispatcher.register(this.handleEvents);
  },

  render: function() {
    this.$el.html(this.myHtml({}));
    return this;
  },

  handleEvents: function(payload) {
    if (payload.actionType === 'appLoad') {
      eddie_view.render();
    }
  },

  myHtml: _.template('<hr/><h3>eddie would go</h3>')


});

