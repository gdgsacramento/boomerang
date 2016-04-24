angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Sacramento',
        'id'            : '108577940252424736338',
        'googleApi'     : 'AIzaSyAuC-31jMTLHuDydPf95hr-7xONjku8wdQ',
        'pwaId'         : '', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdgsacramento.org',
        'twitter'       : '',
        'facebook'      : '',
        'youtube'       : '',
        'meetup'        : 'gdgsacramento',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Next Event: April 26 - Introduction to Angular 2 (beta)',
            subtitle: 'Learn what\'s new and improved in the new major version update',
            button: {
                text: 'RSVP',
                url: 'http://www.meetup.com/gdgsacramento/events/230401968/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: false,
            devFests: true,
            appClinics: false,
            panels: false,
            designSprints: false,
            roundTables: false
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
