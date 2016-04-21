(function() {
  'use strict';

  angular
    .module("slactory")
    .controller("ChatController", ChatController);

  ChatController.$inject = ["$http"];

  function ChatController($http) {
    this.message = {};

    this.postMessage = function postMessage() {
      console.log("running chat");
      var token = window.slackToken;
      var channel = this.message.channel;
      var text = this.message.text;
      var url = `https://slack.com/api/chat.postMessage?token=${token}&channel=${channel}&text=${text}`;

      $http({
        method: "POST",
        url: url
      });
    }
  }
})();
