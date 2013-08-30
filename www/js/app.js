
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {

 require('jquery-1.10.2.min');

 $(function() {
  $("#get-battery").click(function() {
    $("#battery-pct").text("Nivel de Carga: " + Math.round(navigator.battery.level * 100) + "%");
    $("#battery-state").text((navigator.battery.charging)? "Actualmente Cargando" : "Actualmente Descargandose");
    if(navigator.battery.charging){
      $("#battery-time").text("Tiempo para carga completa: " + parseInt(navigator.battery.chargingTime / 60, 10) + "mins.");  
    }else{
      $("#battery-time").text("Tiempo de carga restante: " + parseInt(navigator.battery.dischargingTime / 60, 10) + "mins.");
    }
    changeImage();
  });
});

 function changeImage()
 {
  x = Math.round(navigator.battery.level * 100);
  element=document.getElementById('image');
  if (x==0)
  {
    element.src="/img/8.png";
  }else if(0<x && x<10){
    element.src="/img/7.png";
  }else if(10<x && x<20){
    element.src="/img/6.png";
  }else if(20<=x && x<26){
    element.src="/img/5.png";
  }else if(26<=x && x<50){
    element.src="/img/4.png";
  }else if(50<=x && x<80){
    element.src="/img/3.png";
  }else if(80<=x && x<95){
    element.src="/img/2.png";
  }else if(90<=x){
    element.src="/img/1.png";
  }
}

$(function() {
  $("#get-date").click(function() {
  /*  if(navigator.battery.charging){
      var m_left = parseInt(navigator.battery.chargingTime / 60, 10);
      m_left = m_left*60000;
      var time = new Date(new Date(Date.now() + m_left)); 
      var message = "Desconecta el Movil, Carga completa";
      //
      var myDate  = new Date("May 15, 2012 16:20:00");
      var data    = {
        foo: "bar"
        }
      // La cadena "ignoreTimezone" es lo que hace a la alarma ignorar esto
      var request = navigator.mozAlarms.add(myDate, "ignoreTimezone", data);
      request.onsuccess = function () {
        console.log("La alarma ha sido programada");
      };
      request.onerror = function () { 
        console.log("Ha ocurrido un error: " + this.error.name);
      };
      $("#date").text("Debe desconectar el movil el: "+time);
    }else{
      $("#date").text("No se programo la alarma ya el telefono no se encuentra conectado");
    }
    
    */
    request = navigator.mozAlarms.add(
    new Date("Aug 31, 2013 6:19:00"), "honorTimezone", {mydata: "my event" });
    request.onsuccess = function () {
        $("#date").text("Exito");
        window.console.log("La alarma ha sido programada");

      };
      request.onerror = function () { 
        $("#date").text("Paila");
        window.console.log("Ha ocurrido un error: " + this.error.name);

      };
  });

});






});

