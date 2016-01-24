angular.module('app')
    .controller('FormController' ,['$scope','$http','$q','lodash','$compile',function($scope, $http, $q, _, $compile){

         var self =this;
         self.html = {
             inputHtml: '',
             selectHtml: '',
             select2Html: ''
         }

        $scope.formlist = {
            formInput : ''
        }
        $scope.$watch('formlist.formInput',function(nv){
            if(nv.indexOf('?')==-1){
                $scope.formlist.formInput =nv;
                return
            }
            var _items = nv.replace('?','').split(';');
            var _item = {};
            _item.pre1 = _items[0];
            _item.model2 = _items[1];
            _item.title3 = _items[2];

            var _content  = Handlebars.compile(self.html.inputHtml);
            var _html = _content(_item);
            $('#c1').append(_html);

        })


         $scope.$on('onAfterRender', function (){
             var _inputHtml = $http.get('views/form.template/form.input.1.html');
             var _selectHtml = $http.get('views/form.template/form.select.1.html');
             var _select2Html = $http.get('views/form.template/form.select.2.html');
             $q.all([_inputHtml,_selectHtml,_select2Html])
                 .then(function(resArray){
                     _.each(resArray,function(r){
                         r.data = r.data.replace(/</g,'&lt;')
                         r.data = r.data.replace(/>/g,'&gt;')
                     })
                     var __inputHtml = self.html.inputHtml = resArray[0].data;
                     var __selectHtml = self.html.selectHtml = resArray[1].data;
                     var __select2Html = self.html.select2Html = resArray[2].data;
                     $('#c1').append(__inputHtml);
                     $('#c2').append(__selectHtml);
                     $('#c3').append(__select2Html);
             });
         });
    }]);