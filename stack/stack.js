function Stack(){
  var nombres =[];
  this.push= function(elemento){
    nombres.push(elemento);
  };
  this.pop =function(){
    return nombres.pop();
  };
  this.mostrar = function(){
    document.write(nombres.toString());
  };
};
var nombre = new Stack()
nombre.push("Mireya");
nombre.push("Miguel");
nombre.push("Magaly");
nombre.push("Luna");
nombre.push("Danae");

var apellidos = new Stack()
apellidos.push("Martinez");
apellidos.push("Rodriguez");
apellidos.push("Cervantes");
apellidos.push("Granados");
apellidos.push("Reynoso");
var nombres= [];
for (var i =0; i<=5;i++){
nombres.push(nombre.pop()+" "+apellidos.pop());
}

document.write(nombres);
