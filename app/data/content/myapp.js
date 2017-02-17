var app = angular.module('form', ['ngMaterial', 'ngMessages']).config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider.icon('md-close', 'icons/ic_close_24px.svg', 24);
      }]).controller('Ctrl',PrimaryCtrl);

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
    var tabs = [
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
    $scope.addressTypes = [
        'Mailing', 'Physical', ' Mailing & Physical'
    ];
    $scope.tabs = tabs;
    $scope.$watch('selectedIndex', function (current, old) {
        previous = selected;
        selected = tabs[current];
        if (old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
        if (current + 1) $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function () {
        title = 'Address' + (tabs.length).toString();
        console.log(title);
        tabs[0].title = title;
        tabs[0].visible = false;
        tabs.unshift({
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
        var index = tabs.indexOf(tab);
        tabs.splice(index, 1);
    };
    $scope.selectOption = function (tab, option) {
        tab.type = option;
    };
    
    $scope.validateEmail = function() {
      var emailValue = angular.element(".md-input").val();
    var reg = "/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/";
    if (reg.test(emailValue)) {
    $scope.isEmailValid = true;
    } else {
        $scope.isEmailValid = false;
    }
 
  };
    
    $scope.validateTelephone = function() {
      var telephoneValue = angular.element(".md-input").val();
    var reg = "/^\d{10}$/";
    if (reg.test(telephoneValueValue)) {
    $scope.isTelephoneValid = true;
    } else {
        $scope.isTelephoneValid = false;
    }
 
  };
}
