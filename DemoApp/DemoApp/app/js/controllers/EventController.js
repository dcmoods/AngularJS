/**
 * Created by moody on 10/27/2015.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '12:30 pm',
            location:{
                address: '123 Main Street',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png'
        }


    }
);