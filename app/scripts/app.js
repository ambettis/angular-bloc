
angular.module('blocJams', ['ui.router']);

(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             templateUrl: '/templates/landing.html'
         })
         .state('album', {
             url: '/album',
             templateUrl: '/templates/album.html'
         })

         .state('collection', {
             url: '/collection',
             controller: 'CollectionCtrl as collection',
             templateUrl: '/templates/collection.html'
         });
  }

  angular.module('blocJams', ['ui.router']);
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();

this.albumData = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/bloc_jams_music/blue' },
        { title: 'Green', duration: 103.96, audioUrl: 'assets/music/bloc_jams_music/green' },
        { title: 'Red', duration: 268.45, audioUrl: 'assets/music/bloc_jams_music/red' },
        { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/bloc_jams_music/pink' },
        { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/bloc_jams_music/magenta' }
    ]
};
