sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travelsbymari/test/integration/FirstJourney',
		'travelsbymari/test/integration/pages/TravelList',
		'travelsbymari/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travelsbymari') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);