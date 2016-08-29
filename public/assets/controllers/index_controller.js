
angular.module('app').controller('indexCtrl', ['$scope', 'getDataServices', 'postDataServices', '$location', function ($scope, getDataServices, postDataServices, $location) {
    // console.log(getDataServices)
    // console.log(postDataServices)
    getDataServices.getData()
        .then(function (res) {
            $scope.data = res.data
        })
        .catch(function (err) {
            console.log(err)
        })

        // 执行删除操作
    $scope.doDelete = function (id) {
        // 在实际开发中不管别人有没有提此要求
        // 自己在第一次实现的时候必要加上confirm提示
        if (confirm("确认删除?")) {
            postDataServices.deleteData(id)
                .then(function (res) {
                    if (res.status == 'y') {
                        window.location.href = '/'
                    }
                    else {
                        alert(res.msg)
                    }
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
}])