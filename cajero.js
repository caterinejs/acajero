class Billete
{
  constructor(v, c)
  {

    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.nombre= "b" + v;
    this.imagen.src = imagenes[this.nombre];

  }
}
//un cambio
function entregarDinero()
{
  console.log("entre a entregar dinero")
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push ( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
      console.log("dinero ="+ dinero);
     }

    }
    if(dinero > 0)
    {

      resultado.innerHTML = "soy un cajero pobre y no tengo dinero";
    }
    else
    {
      for(var e of entregado)
      {
        if(e.cantidad > 0)
        {
          for( i=0; i < e.cantidad; i++){
            cantidadImagenes = cantidadImagenes + "<img src =" + e.imagen.src + ">"
          }
          resultado.innerHTML = resultado.innerHTML +
          cantidadImagenes+"<br />"
          + e.cantidad + " billetes de $ " +  e.valor +  "<br />";
          cantidadImagenes="";
        }

      }
    }
  }

function borrado()
{

  location.reload();
}

var caja = [];
var entregado = [];
var imagenes=[];
var cantidadImagenes="";
imagenes["b50"] = "vaca.png";
imagenes["b20"] = "pollo.png";
imagenes["b5"] = "cerdo.png";

caja.push (new Billete (50, 10) );
caja.push (new Billete (20, 20) );
caja.push (new Billete (5, 55) );
var totalDineroCajero = 500;
var dinero = 0;
var div = 0;
var papeles = 0;

var borrar = document.getElementById("Borrar")
borrar.addEventListener("click", borrado);
var resultado = document.getElementById("resultado");
var b = document.getElementById("Retirar");
b.addEventListener("click", entregarDinero);
