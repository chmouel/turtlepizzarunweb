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

    $scope.refreshInMobile = (function() {
        var items = ['img/inmobile/mangepizza-1.jpg',
                     'img/inmobile/cousine-benj.jpg',
                     'img/inmobile/deux-ninjas.jpg',
                     'img/inmobile/mangepizza-4.jpg', ]
        $scope.imgInMobile = items[Math.floor(Math.random()*items.length)];
    })
    //default
    $scope.imgInMobile = 'img/inmobile/silou-pizza.jpg'
    $interval(function(){ $scope.refreshInMobile(); }, 10000);

    //This will hide the DIV by default. TOREMOVE
    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }

});
