App = Ember.Application.create();

App.Router.map(function() {
	this.resource('markit')
});

App.MarkitRoute = Ember.Route.extend({
	model: function() {
		return [{
			title: "Live Markdown Editor",
			subtitle: "See markdown converted live",
			body: "## Enter some markdown like this!\n\n * Or these \n * Or these"
		}];
	}
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('markitup', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});