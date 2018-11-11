app.controller('blogItems', function ($scope) {

    $scope.defaultPosts = defaultPosts;
    $scope.user = user;
    $scope.filtredItems = ['All'];
    $scope.propertyName = 'All';
    $scope.showAddForm = false;
    let addPostBtn = angular.element(document.querySelector('.add-post'));
    let formInputFields = angular.element(document.querySelectorAll('.new-post-info'));

    this.filterBy = function (propertyName) {
  
      $scope.propertyName = propertyName;
      let tempArr = defaultPosts;

      if (propertyName === 'All') {
        $scope.defaultPosts = defaultPosts;
      } else {
        $scope.defaultPosts = tempArr.filter(e => {
          let val = false;
          for (let i = 0; i < e.propertyName.length; i++) {
            if (e.propertyName[i] === propertyName) {
              val = true;
            }
          }
          return val;
        });
      }
    }
    
    this.getBlogItems = function () {
      return $scope.defaultPosts;
    }
    this.getFiltredItems = function () {
      return $scope.filtredItems;
    }
    this.addNewPostForm = function () {
      addPostBtn.addClass('active')
      $scope.showAddForm = !$scope.showAddForm;
    }  
    this.deleteBlogItem = function () {
      $scope.showAddForm = false;
      angular.element(addPostBtn).removeClass('active');
    }
    this.addBlogItem = function () {
      let filledFieldCounter = 0;
  
      angular.forEach(formInputFields, function (value, key) {
        let element = angular.element(value);   
        let emptyField = angular.element("<span class='empty-field'></span>");
        emptyField.text("Field can't be empty");
  
        if (!element.hasClass('ng-empty')) {
          filledFieldCounter++;
          element.removeClass('not-filled');
          element.parent().find('span').remove();
        } else if (element.hasClass('ng-empty')) {
          element.addClass('not-filled');
          element.parent().prepend(emptyField);
        }

        if (formInputFields.length === filledFieldCounter) {

          element.removeClass('not-filled');
          angular.element(addPostBtn).removeClass('active');
          $scope.showAddForm = !$scope.showAddForm;
  
          $scope.defaultPosts = defaultPosts;

          $scope.defaultPosts.push({
            title: $scope.title,
            author:user.name,
            image:user.image,
            description: $scope.description,
            likes: 0
          });
          $scope.title = '';
          $scope.author = defaultPosts.author;
          $scope.description = '';
          $scope.photo = '';
          $scope.likes = 0;
  
        }
      });
    };
  });