/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en-gb',
	timeFormat: 24,
	units: 'metric',

	modules: [


	
		
		
		{
			module: 'clock',
			position: 'top_left'
		},
		
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Google News",
						url: "http://news.google.co.uk/news?cf=all&hl=en&pz=1&ned=uk&output=rss",
	
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: false
			}
		},

		{
			module: 'sonos',
			position: 'middle_center', // you may choose any location
			config: {
				showStoppedRoom: false,
				showAlbumArt: true,
				updateInterval: 0.1, // every 0.1 minutes
				showRoomName: false,
				exclude: ['Living Room','Bedroom','Bathroom'],
					}
		},
		{
		module: 'MMM-Remote-Control'
		// uncomment the following line to show the URL of the remote control on the mirror
		// , position: 'bottom_left'
		// you can hide this module afterwards from the remote control itself
		},
		{
		module: 'MMM-WatchDog',
		config: {
			// See 'Configuration options' for more information.
		}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
