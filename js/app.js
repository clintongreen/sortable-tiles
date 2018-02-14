
const app = angular.module('app', ['html5.sortable']);

app.controller('tileController', ['$scope', function($scope) {

  // range function to populate number of tiles
  const range = (start, end) => (
    Array.from(Array(end - start + 1).keys()).map(i => i + start)
  );

 // make tiles array
 $scope.tiles = range(1,30);

 // HTML5 Sortable options
 $scope.sortable_option = {

   // Construct method before sortable code
   construct:function(model){
     for ( var i = 0; i < model.length; i++ ){
       model[i].tile +=" (constructed)";
     }
   },

   // Callback after item is dropped
   stop:function(list, dropped_index){
     list[ dropped_index].tile += " Dropped";
   }

 };

}]);
