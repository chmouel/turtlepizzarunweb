var app=angular.module('Turtle',[]).controller('MyController',function($scope,$interval, $http){
    var c=0;
    $scope.refreshGif = (function(){
        q = "turtle+ninja+pizza"; // search query
        request = new XMLHttpRequest;
        result = $http.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q);
        result.success(function(data, status, headers, config) {
            $scope.image_url = data.data.image_url.replace("http:", "https:");
        })
    })
    $interval(function(){ $scope.refreshGif(); }, 10000);
    //This will hide the DIV by default.
    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }

});
