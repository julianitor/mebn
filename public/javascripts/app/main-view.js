define(['backbone', 'text!templates/main-view.html'], function(Backbone, MainViewTemplate){
	
	return Backbone.View.extend({

		template: _.template(MainViewTemplate),

		initialize: function() {
			this.$el = $('[role="main"]');
			this.render();
		},
		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
});