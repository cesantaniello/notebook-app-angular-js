function AlumnosController($scope){
        $scope.alumnos=[
                {nombre:"Juan Blanco", telefono: "1234567890", curso:"Segundo ESO"},
                {nombre:"Rosa Luxemburgo", telefono: "0987654321", curso:"Primero ESO"},
                {nombre:"Alberto Herrera", telefono: "1122334455", curso:"Segundo ESO"},
                {nombre:"Ana Mariño", telefono: "6677889900", curso:"Tercero ESO"}
                ];

        $scope.Save = function(){
                $scope.alumnos.push({nombre: $scope.nuevoAlumno.nombre, telefono: $scope.nuevoAlumno.telefono, curso: $scope.nuevoAlumno.curso});
                $scope.formVisibility=false;
                console.log($scope.formVisibility)
        }

        $scope.formVisibility=false;

        $scope.ShowForm=function(){

	$scope.formVisibility=true;
	console.log($scope.formVisibility)
	
        }
}