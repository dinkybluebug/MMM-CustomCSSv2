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
			    module: 'MMM-WunderGround',
				position: 'top_right',
					config: {
						fade: false,
						apikey: 'xxxxxxxxxxxxxxxxxxxxxx', // private; don't share!
						pws: 'xxxxxxxxxxxxxx', //culemborg
						hourly: '1',
						fctext: '1',
						fcdaycount: "5",
						fcdaystart: "1",
						hourlyinterval: "3",
						hourlycount: "2",
						alerttime: 10000,
						alerttruncatestring: "english:",
						fadepoint: 1,
					}
		},
		{
			module: 'sonos',
			position: 'top_center', // you may choose any location
			config: {
				showStoppedRoom: false,
				showAlbumArt: true,
				showRoomName: false,
				exclude: ['Living Room','Bedroom','Bathroom'],
					}
		},
		{
			module: 'calendar',
			header: 'Family Calendar',
			position: 'top_left',
			config: {
			fadePoint: 1, // Start on 1/4th of the list.
			maxTitleLength: 35,
			urgency: 1,
			timeFormat: "absolute",
				calendars: [
					{
						symbol: 'check-square-o',
						url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
					}
				]
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
