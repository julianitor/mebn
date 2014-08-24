requirejs.config({
    baseUrl: 'javascripts',

    paths: {

        //libs
        'text': 'libs/requirejs-text/text',
        'jquery': 'libs/jquery/jquery',
        'underscore': 'libs/underscore/underscore',
        'backbone': 'libs/backbone/backbone',

        //app modules
        'main-view': 'app/main-view'
    },
    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        }
      }
});

// Start the main app logic.
require(['jquery', 
    'backbone',
    'main-view'
    ], function ($, Backbone, MainView) {
    console.log('requirejs config loaded');
    new MainView();
});