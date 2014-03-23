<?php 
	if($_POST){
		$json = json_encode($_POST);

		if(!file_exists("datos.json")){
			touch("datos.json");
		}		
			
		file_put_contents("datos.json", $json);		
	} 

	function construirTabla(){
		echo "</script>";
		$archivo = file_get_contents("datos.json");
		$datos = json_decode($archivo);

		for ($i=0; $i <count($datos->matricula); $i++) { 
			echo "agregarPersona('{$datos->matricula[$i]}', '{$datos->nombre[$i]}', 
			'{$datos->n1[$i]}', '{$datos->n2[$i]}', '{$datos->n3[$i]}', '{$datos->n4[$i]}', 
			'{$datos->promedio[$i]}', '{$datos->eq[$i]}')";
			echo "</script>";

			echo "$datos->eq[$i]" ;
		}
	}
 ?>