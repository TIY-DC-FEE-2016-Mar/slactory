(function() {
  'use strict';

  angular
    .module("slactory")
    .controller("ChannelsController", ChannelsController);

  function ChannelsController() {
    this.list = [
      { name: "Ours", id: "C0LJ6NG5S" }
    ]
  }
})();
