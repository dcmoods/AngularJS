/**
 * Created by moody on 10/27/2015.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet = '<span style="color:red">hi, there</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color: 'red'};
        $scope.myClass = "blue";
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '12:30 pm',
            price: 34,
            location:{
                address: '123 Main Street',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0,
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'In this session you will learn about scopes!',
                    upVoteCount: 0,
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Smith',
                    duration: '2 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will lean the ins and outs of controllers!',
                    upVoteCount: 0,
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
);