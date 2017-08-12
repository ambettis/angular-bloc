(function() {
    function LandingCtrl() {
      this.heroTitle = "Turn the music up!";
    }

    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();

// (function() {
//      function LandingCtrl() {
//        this.headingText = 'BOOM!'
//        this.alertMe = function(){
//          alert('you rang?!?')
//        }
//        this.age = 400
//        this.alertMeWithValue = function(val){
//          alert(val)
//        }
//      }
//
//      angular
//          .module('blocJams')
//          .controller('LandingCtrl', LandingCtrl);
//  })();
