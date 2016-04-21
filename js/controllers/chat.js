(function() {
  'use strict';

  angular
    .module("slactory")
    .controller("ChatController", ChatController);

  ChatController.$inject = ["$http"];

  function ChatController($http) {
    var token = window.slackToken;
    var channel = "C0LJ6NG5S";
    var text = "Interpolated";
    var url = `https://slack.com/api/chat.postMessage?token=${token}&channel=${channel}&text=${text}`;

    $http({
      method: "POST",
      url: url
    })
  }
})();
