var app = angular.module('form', ['ngMaterial', 'ngMessages']).config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider.icon('md-close', 'icons/ic_close_24px.svg', 24);
      }]).controller('Ctrl', PrimaryCtrl);

function PrimaryCtrl($scope) {
    $scope.user = {
        name: ''
        , organization: ''
        , position: ''
    };
    $scope.voiceTelephone = [];
    $scope.tDDTelephone = [];
    $scope.facsimileTelephone = [];
    $scope.email = [];
    $scope.readonly = false;
    var addressTabs = [
            {
                title: 'Enter Address'
                , type: ''
                , street: ''
                , city: ''
                , state: ''
                , country: ''
                , pincode: ''
                , visible: true
            }
        ]
        , selected = null
        , previous = null;
    $scope.addressTabs = addressTabs;
    $scope.$watch('selectedIndex', function (current, old) {
        previous = selected;
        selected = addressTabs[current];
    });
    $scope.addTab = function () {
        title = 'Address' + (addressTabs.length).toString();
        addressTabs[0].title = title;
        addressTabs[0].visible = false;
        addressTabs.unshift({
            title: 'Enter Address'
            , type: ''
            , street: ''
            , city: ''
            , state: ''
            , country: ''
            , pincode: ''
            , visible: true
        });
    };
    $scope.removeTab = function (tab) {
        var index = addressTabs.indexOf(tab);
        addressTabs.splice(index, 1);
    };
    $scope.validateEmail = function () {
        var i = $scope.email.length;
            var emailValue = $scope.email[i-1];
        var reg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (reg.test(emailValue)) {
            $scope.isEmailValid = true;
        }
        else {
            $scope.isEmailValid = false;
            $scope.email.pop();
        }
    };
    $scope.validateTelephone = function () {
            var i = $scope.voiceTelephone.length;
            var telephoneValue = $scope.voiceTelephone[i-1];
            var reg = /^\d{10}$/;
            if (reg.test(telephoneValue)) {
                $scope.isTelephoneValid = true;
            }
            else {
                $scope.isTelephoneValid = false;
                $scope.voiceTelephone.pop();
            }
//        }
    };
    $scope.submitForm = function () {
        if ($scope.voiceTelephone.length != 0) {
            
        }
    };
}