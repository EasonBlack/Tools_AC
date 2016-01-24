angular.module('app')
    .controller('FormController' ,['$scope','$http','$q','lodash','$compile',function($scope, $http, $q, _, $compile){

         var self =this;
         self.html = {
             inputHtml: '',
             input2Html: '',
             selectHtml: '',
             select2Html: '',
             imageHtml: ''
         }

        $scope.formlist = {
            formInput : '',
            formInput2 : '',
            formSelect: '',
            formSelect2: '',
            formImage: ''
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
            $('#c1').append('<br>');
            $('#c1').append(_html);
        });

        $scope.$watch('formlist.formInput2',function(nv){
            if(nv.indexOf('?')==-1){
                $scope.formlist.formInput2 =nv;
                return
            }
            var _items = nv.replace('?','').split(';');
            var _item = {};
            _item.pre1 = _items[0];
            _item.model2 = _items[1];
            _item.model3 = _items[2];
            _item.title4 = _items[3];
            _item.title5 = _items[4];

            var _content  = Handlebars.compile(self.html.input2Html);
            var _html = _content(_item);
            $('#c4').append('<br>');
            $('#c4').append(_html);
        });

        $scope.$watch('formlist.formSelect',function(nv){
            if(nv.indexOf('?')==-1){
                $scope.formlist.formSelect =nv;
                return
            }
            var _items = nv.replace('?','').split(';');
            var _item = {};
            _item.pre1 = _items[0];
            _item.model2 = _items[1];
            _item.title3 = _items[2];

            var _content  = Handlebars.compile(self.html.selectHtml);
            var _html = _content(_item);
            $('#c2').append('<br>');
            $('#c2').append(_html);
        })

        $scope.$watch('formlist.formSelect2',function(nv){
            if(nv.indexOf('?')==-1){
                $scope.formlist.formSelect2 =nv;
                return
            }
            var _items = nv.replace('?','').split(';');
            var _item = {};
            _item.pre1 = _items[0];
            _item.model2 = _items[1];
            _item.model3 = _items[2];
            _item.title4 = _items[3];
            _item.title5 = _items[4];

            var _content  = Handlebars.compile(self.html.select2Html);
            var _html = _content(_item);
            $('#c3').append('<br>');
            $('#c3').append(_html);
        });

        $scope.$watch('formlist.formImage',function(nv){
            if(nv.indexOf('?')==-1){
                $scope.formlist.formImage =nv;
                return
            }
            var _items = nv.replace('?','').split(';');
            var _item = {};
            _item.pre1 = _items[0];
            _item.title2 = _items[1];

            var _content  = Handlebars.compile(self.html.imageHtml);
            var _html = _content(_item);
            $('#c5').append('<br>');
            $('#c5').append('--------------------------');
            $('#c5').append('<br>');
            $('#c5').append(_html);
        });


         $scope.$on('onAfterRender', function (){
             var _inputHtml = $http.get('views/form.template/form.input.1.html');
             var _input2Html = $http.get('views/form.template/form.input.2.html');
             var _selectHtml = $http.get('views/form.template/form.select.1.html');
             var _select2Html = $http.get('views/form.template/form.select.2.html');
             var _imageHtml = $http.get('views/form.template/form.image.1.html');
             $q.all([_inputHtml,_selectHtml,_select2Html,_input2Html,_imageHtml])
                 .then(function(resArray){
                     _.each(resArray,function(r){
                         r.data = r.data.replace(/</g,'&lt;')
                         r.data = r.data.replace(/>/g,'&gt;')
                     })
                     var __inputHtml = self.html.inputHtml = resArray[0].data;
                     var __input2Html = self.html.input2Html = resArray[3].data;
                     var __selectHtml = self.html.selectHtml = resArray[1].data;
                     var __select2Html = self.html.select2Html = resArray[2].data;
                     var __imageHtml = self.html.imageHtml = resArray[4].data;
                     $('#c1').append(__inputHtml);
                     $('#c2').append(__selectHtml);
                     $('#c3').append(__select2Html);
                     $('#c4').append(__input2Html);
                     $('#c5').append(__imageHtml);
             });
         });
    }]);