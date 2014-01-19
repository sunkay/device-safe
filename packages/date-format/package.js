Package.describe({
	summary: "javascript library to formate dates"
});

Package.on_use(function (api, where) {
	api.use(['minimongo', 'mongo-livedata', 'templating'], 'client'); 
	api.add_files(['dateFormat.js'], 'client');

	if(api.export)
		api.export('dateFormat');
});