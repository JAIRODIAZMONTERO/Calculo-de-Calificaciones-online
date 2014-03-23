function agregarPersona(matricula, nombre, n1, n2, n3, n4, promedio, eq)
{
	txtMat = crearElemento('input');
	txtMat.setAttribute('type', 'text');	
	txtMat.setAttribute('name', 'matricula[]')
	txtMat.setAttribute('value', matricula);
	txtMat.setAttribute('required', 'required');
	txtMat.setAttribute('class', 'txt');

	txtNom = crearElemento('input');
	txtNom.setAttribute('type', 'text');	
	txtNom.setAttribute('name', 'nombre[]');
	txtNom.setAttribute('value', nombre);
	txtNom.setAttribute('required', 'required');
	txtNom.setAttribute('class', 'txt');

	txtN1 = crearElemento('input');
	txtN1.setAttribute('type', 'number');
	txtN1.setAttribute('min', 0);
	txtN1.setAttribute('max', 100);
	txtN1.setAttribute('name', 'n1[]');
	txtN1.setAttribute('value', n1);
	txtN1.setAttribute('required', 'required');
	txtN1.setAttribute('class', 'txt');
	txtN1.setAttribute('onkeyup', 'getPromedio(this);');

	txtN2 = crearElemento('input');
	txtN2.setAttribute('type', 'number');
	txtN2.setAttribute('min', 0);
	txtN2.setAttribute('max', 100);
	txtN2.setAttribute('name', 'n2[]');
	txtN2.setAttribute('value', n2);
	txtN2.setAttribute('required', 'required');
	txtN2.setAttribute('class', 'txt');
	txtN2.setAttribute('onkeyup', 'getPromedio(this);');

	txtN3 = crearElemento('input');
	txtN3.setAttribute('type', 'number');
	txtN3.setAttribute('min', 0);
	txtN3.setAttribute('max', 100);
	txtN3.setAttribute('name', 'n3[]');
	txtN3.setAttribute('value', n3);
	txtN3.setAttribute('required', 'required');
	txtN3.setAttribute('class', 'txt');
	txtN3.setAttribute('onkeyup', 'getPromedio(this);');

	txtN4 = crearElemento('input');
	txtN4.setAttribute('type', 'number');
	txtN4.setAttribute('min', 0);
	txtN4.setAttribute('max', 100);
	txtN4.setAttribute('name', 'n4[]');
	txtN4.setAttribute('value', n4);
	txtN4.setAttribute('required', 'required');
	txtN4.setAttribute('class', 'txt');
	txtN4.setAttribute('onkeyup', 'getPromedio(this);');

	txtProm = crearElemento('input');
	txtProm.setAttribute('type', 'text');
	txtProm.setAttribute('name', 'promedio[]');
	txtProm.setAttribute('value', promedio);
	txtProm.setAttribute('readonly','readonly');
	txtProm.setAttribute('class', 'txtReadonly');
	
	txtEQ = crearElemento('input');
	txtEQ.setAttribute('type', 'text');
	txtEQ.setAttribute('name', 'eq[]');
	txtEQ.setAttribute('value', eq);
	txtEQ.setAttribute('readonly','readonly');
	txtEQ.setAttribute('class', 'txtReadonly');

	btnBorrar = crearElemento('img');
	btnBorrar.setAttribute('class', 'btnBorrar');
	btnBorrar.setAttribute('src', 'images/eliminar.png');
	btnBorrar.setAttribute('onclick', 'eliminarFila(this);');

	campos = [txtMat, txtNom, txtN1, txtN2, txtN3, txtN4, txtProm, txtEQ, btnBorrar];

	fila = crearElemento('tr');				

	for (var i = 0; i < campos.length; i++) 
	{
		col = crearElemento('td');
		col.appendChild(campos[i]);
		fila.appendChild(col);
	}

	destino = document.getElementById('tblBody');
	destino.appendChild(fila);
	aplicarInterlineado();
}

function getPromedio(obj)
{
	cols = obj.parentNode.parentNode.childNodes;
	valores = new Array();

	for (var i = 0; i < cols.length; i++) 
	{
		txt = cols[i].firstChild;

		if (txt.name == 'n1[]' || txt.name == 'n2[]' || txt.name == 'n3[]' || txt.name == 'n4[]') 
		{
			
			valor = txt.value;
			
			if (valor.length>0 && !isNaN(valor)) 
			{
				valores.push(valor);
			}
		}
	}

	var sumatoria = 0;

	for (var i = 0; i < valores.length; i++)
	{
		sumatoria = parseFloat(sumatoria)+parseFloat(valores[i]);
	}

	promedio = sumatoria/4;
	cols[6].firstChild.setAttribute('value', promedio);

	if(promedio>=90 && promedio<=100)
	{
		cols[7].firstChild.setAttribute('value', "A");
		cols[7].firstChild.setAttribute('style', 'background-color: YellowGreen;');
		cols[6].firstChild.setAttribute('style', 'background-color: YellowGreen;');
	}

	else if(promedio>=80 && promedio<=89)
	{
		cols[7].firstChild.setAttribute('value', "B");
		cols[7].firstChild.setAttribute('style', 'background-color: Yellow;');
		cols[6].firstChild.setAttribute('style', 'background-color: Yellow;');
	}

	else if(promedio>=70 && promedio<=79)
	{
		cols[7].firstChild.setAttribute('value', "C");
		cols[7].firstChild.setAttribute('style', 'background-color: Orange;');
		cols[6].firstChild.setAttribute('style', 'background-color: Orange;');
	}

	else if(promedio>=0 && promedio<=69)
	{
		cols[7].firstChild.setAttribute('value', "F");
		cols[7].firstChild.setAttribute('style', 'background-color: Tomato;');
		cols[6].firstChild.setAttribute('style', 'background-color: Tomato;');
	}
}

function eliminarFila(obj)
{
	obj.parentNode.parentNode.setAttribute('style', 'background-color: Salmon;');

	if(confirm("Realmente desea eliminar esta persona?"))
	{
		obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);
	}

	else
	{
		if(obj.parentNode.parentNode.getAttribute('class')=="clsGris")
		{
			obj.parentNode.parentNode.setAttribute('style', 'background-color: PowderBlue;')
		}

		else
		{
			obj.parentNode.parentNode.setAttribute('style', 'background-color: white;')
		}
	}

	aplicarInterlineado();
}

function aplicarInterlineado()
{
	isGris = false;
	
	for (i = 1; i < document.getElementsByTagName("tr").length; i++) 
	{
		clase = (isGris)? "clsGris":"";
		document.getElementsByTagName("tr")[i].setAttribute('class', clase);
		isGris = !isGris;
	}
}

function crearElemento(tipo)
{
	var elemento = document.createElement(tipo);
	return elemento;
}