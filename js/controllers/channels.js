(function() {
  'use strict';

  angular
    .module("slactory")
    .controller("ChannelsController", ChannelsController);

  ChannelsController.$inject = ["$http"];

  function ChannelsController($http) {
    var token = window.slackToken; // TODO: get from a factory / localStorage

    $http({
      method: "POST",
      url: "https://slack.com/api/channels.list?token=" + token
    }).then(onSuccess, onFailure);

    this.list = [
      { name: "Ours", id: "C0LJ6NG5S" }
    ]
  }

  // Helper functions

  function onSuccess(response) {
    console.log('success', response);
  }

  function onFailure(response) {
    console.log('failure', response);
  }
})();
