(function() {
  'use strict';

  angular
    .module("slactory")
    .controller("ChannelsController", ChannelsController);

  ChannelsController.$inject = ["$http"];

  function ChannelsController($http) {
    var token = window.slackToken; // TODO: get from a factory / localStorage

    this.list = [];

    var that = this;

    $http({
      method: "POST",
      url: "https://slack.com/api/channels.list?token=" + token
    }).then(function onSuccess(response) {
      response.data.channels.forEach(function(chan) {
        that.list.push(chan);
      })
    }, onFailure);
  }

  // Helper functions

  function onFailure(response) {
    console.log('failure', response);
  }
})();
