var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: '#main-region'
});

ContactManager.StaticView = Marionette.ItemView.extend({
	template: '#static-template'
});

ContactManager.on('initialize:after', function() {
	var staticView = new ContactManager.StaticView();
	ContactManager.mainRegion.show(staticView);
});

ContactManager.start();