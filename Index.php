<?php 
	if($_POST)
	{
		$json = json_encode($_POST);

		if(!file_exists("datos.json"))
		{
			touch("datos.json");
		}

		file_put_contents("datos.json", $json);			
	} 

	function construirTabla()
	{
		echo "</script>";
		$archivo = file_get_contents("datos.json");
		$datos = json_decode($archivo);

		for ($i=0; $i <count($datos->matricula); $i++) 
		{ 
			echo "<script>";
			echo "agregarPersona('{$datos->matricula[$i]}', '{$datos->nombre[$i]}', '{$datos->n1[$i]}', '{$datos->n2[$i]}', '{$datos->n3[$i]}', '{$datos->n4[$i]}', '{$datos->promedio[$i]}', '{$datos->eq[$i]}')";
			echo "</script>";
		}
	}
 ?>

<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>C&aacute;lculo de calificaci&oacute;n</title>
	<link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>	
	<div id="mainContainer"></div>
	<script src = "script.js"></script>
	<div id="franja"></div>
		<img id="logo"src="images/check.png">
		<h1 id="tituloSitio">C&aacute;lculo online de calificaciones</h1>
		<fieldset>
			<legend><strong>Calc&uacute;le aqu&iacute; su calificaci&oacute;n</strong></legend>	
			<button id="btnAgregar" onclick="agregarPersona('','','','','','','','');">Agregar</button>
			<form method="post" action = "<?php $_SERVER['PHP_SELF'];?>">	
				<input id="btnGuardar" type="submit" value="Guardar">
				<div id="divTabla">
					<table id="tbl">
						<thead>
							<tr>
								<th>Matricula</th>
								<th>Nombre</th>
								<th>Nota 1</th>
								<th>Nota 2</th>
								<th>Nota 3</th>
								<th>Nota 4</th>
								<th>Promedio</th>
								<th>EQ</th>
								<th id="thDel">Eliminar</th>
							</tr>
						</thead id="thead">
						<tbody id="tblBody"></tbody>
					</table>
				</div>		
			</form>
		</fieldset>	
		<script>
			<?php
				construirTabla();			
			?>		
	</body>
</html>