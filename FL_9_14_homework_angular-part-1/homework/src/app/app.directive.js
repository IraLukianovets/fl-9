app.directive('blogPost', function () {
    return {
        restrict: 'E',
        templateUrl: 'blog.html',
        scope: {
            title: "=",
            description: "=",
            image: "=",
            author: "=",
            likes: "="
        },
        link: function (scope) {
            scope.isLiked = false;
            scope.editorEnabled = false;
            
            scope.editableTitle = scope.title;
            scope.editableDescription = scope.description;

            scope.enableEditor = function (event) {
                let editBtn = angular.element(event.target);

                scope.editorEnabled = !scope.editorEnabled;
                scope.editorEnabled ? editBtn.text('save') : editBtn.text('edit')

                scope.title = scope.editableTitle;
                scope.description = scope.editableDescription;
            };

            scope.like = function(event) {
                if(!scope.isLiked) {
                    scope.isLiked = true;
                    ++scope.likes;
                } else {
                    scope.isLiked = false;
                    --scope.likes;
                }
            }
        }
    }
});