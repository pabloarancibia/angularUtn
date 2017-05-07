app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
	{
      name: 'Rockabilly',
      description: 'Served with presleys snacks.',
      price: 3.95
    }
  ];
    
    $scope.mains = [
        {
            name: 'Marguerita',
            description: 'Mozarella, marinara sauce',
            price: 6.95            
        },
        {
            name: 'Pepperoni',
            description: 'Pepperoni, marinara sauce, fresh oregano',
            price: 7.95
        },
        {
            name: 'Rustica',
            description: 'Mozarella, marinara sauce, roasted garlic, fresh oregano',
            price: 8.95
        }
    ];
    $scope.extras = [
        {
            name: 'Especial',
            description: 'Mozarella, marinara sauce',
            price: 9.55            
        },
        {
            name: 'Jamones',
            description: 'Pepperoni, marinara sauce, fresh oregano',
            price: 6.65
        },
        {
            name: 'Planet pizza',
            description: 'Mozarella, marinara sauce, roasted garlic, fresh oregano',
            price: 8.65
        }
    ];
    
    $scope.filtrar = function(){
        $scope.filtroBuscar = $scope.valFiltrar;
    }
}]);