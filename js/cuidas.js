var totalGood = 0;
var orden = [];
var draggies = [];
var actividad = 0;
var instructions = [
                    "Ordena el camino que se tiene que recorrer para que las frutas y verduras lleguen a tu plato.",
                    "Descubre lo que sucede cuando no se compran mascotas que no deben serlo.",
                    "Descubre lo que sucede si no liberamos a nuestras mascotas.",
                    "Descubre lo que sucede si no producimos m�s basura.",
                    "Descubre lo que pasa con nuestro planeta cuando tratamos de no contaminar tanto.",
                    "Ordena el camino que se tiene que recorrer para que la carne llegue a tu plato y descubre lo que le sucede a la selva.",
                    "Ordena el camino para ver lo que sucede cuando compras mascotas que no deben serlo.",
                    "Descubre como afectamos el ambiente cuando liberamos a nuestras mascotas.",
                    "Ordena el recorrido que hace la basura que producimos y que no separamos y observa lo que puede llegar de tu casa al oc�ano.",
                    "Descubre lo que le pasa al pastizal y a los dem�s ecosistemas cuando usas demasiado un autom�vil."
                   ];
var lastText = [
                "Menos destrucci�n de selvas y de otros ambientes",
                "Se mantiene el cosistema a salvo",
                "No hay especies invasoras en el ecosistema y se mantiene saludable.",
                "Se mantiene el ecosistema a salvo",
                "Se mantiene la temperatura estable en el ecosistema",
                "Eliminaci�n de selva",
                "Se acaban los animales en el bosque",
                "Introducci�n de especies invasoras y deterioro del ambiente",
                "Contaminaci�n de ambientes y muerte de plantas y animales",
                "Calentamiento global y cambio en las condiciones de los ecosistemas."
               ];
var grandText = [
                  "Se necesita menos espacio para obtener alimentos vegetales como las frutas, verduras, granos y cereales que para obtener alimentos animales como la carne, y por lo tanto se destruyen menos los ecosistemas.",
                  "Al no comprar animales silvestres contribuyes a que ya no se capturen m�s animales, logrando que sus poblaciones no se acaben y vivan en libertad.",
                  "Al mantener a mis  mascotas fuera de lugares donde no pertenecen ayudo a conservar a los ecosistemas y as� no se deterioran.",
                  "Al no comprar productos que generan basura tenemos m�s posibilidades de separarla y reciclarla, ayudando a conservar los ecosistemas limpios y as� nos mantenemos a salvo de la contaminaci�n.",
                  "Al sustituir el autom�vil andando en bicicleta, caminando, usando transporte p�blico, etc. Ayudas a disminuir la contaminaci�n y el cambio clim�tico.",
                  "Si seguimos consumiendo demasiada carne, las vacas necesitar�n m�s espacio, y los ranchos e instalaciones para la cr�a de animales se comer�n las tierras donde viven especies de la selva afectando tambi�n a otros ecosistemas.",
                  "Si compras animales que no son mascotas, contribuyes a que m�s animales silvestres sean atrapados y que sus poblaciones se acaben. D�jalos vivir en libertad.",
                  "Los peces de los acuarios son muy bonitos pero al ser liberados en lagos y r�os, se convierten en un gran problema. Arrastran con ellos el h�bitat, eliminando a las especies locales de peces y a otros animales y pl�ntas acu�ticas.",
                  "Si no controlamos la producci�n de basura, contaminamos. La basura es da�ina para muchas especies y para nosotros mismos. Los peces que nos comemos pueden estar contaminados con nuestra propia basura.",
                  "Los pastizales no se pueden proteger contra los efectos del calentamiento global. Si seguimos contaminando el aire, M�xico ser� un gran desierto."
                ];
var mensajes = [
                ["La selva antes de ser reemplazada", "La selva se reemplaza por cultivos", "Los cultivos no destruyen tanto como el ganado", "Si los alimentos vienen de muy lejos los camiones contaminan", "Los alimentos de los mercados vienen de lugares m�s cercanos que los de los supermercados", "Consumo muchos productos vegetales y menos productos animales"],
                ["Anmales que viven en el bosque", "Captura de polluelos en sus nidos", "Muchos polluelos mueren en el viaje a la ciudad", "Compra de animales como perros, gatos, etc. Que si son mascotas", "Como no hay quien los compre, ya no son capturados", "El bosque vuelve a la normalidad sin captura de aves"],
                ["Compra de animales en tiendas de mascotas", "Peces en peque�as peceras", "El pez creci� demasiado, ya no cabe en la pecera", "Compro una pecera m�s grande y conservo a mi mascota", "Vive conmigo en su pecera hasta que muere", "Se conserva el ecosistema y las especies locales est�n a salvo"],
                ["Productos que no generan basura", "Basura de casas, escuelas y edificios es separada", "Recolecta de basura en las ciudades", "Tiraderos de basura org�nica con centros de reciclaje", "R�os y arroyos limpios que llegan hasta el mar", "Se mantiene el mar limpio para que puedan vivir las especies"],
                ["Voy caminando a lugares cercanos", "Uso bicicleta para ir a la tienda", "Uso el transporte p�blico", "Disminuyen los gases de las ciudades gracias a uso de otros medios de transporte", "Se disminuye el calentamiento de la tierra", "La temperatura del ecosistema se mantiene estable"],
                ["En la selva vive una gran diversidad de plantas y animales", "La selva se destruye para criar vacas", "Las vacas no dejan alimento para otras especies", "La carne necesita ser transportada de muy lejos en camiones que contaminan", "La gente consume en supermercados y carnicer�as", "Compras hamburguesas y �Llegan a tu plato! �Qu� le pas� a la selva?"],
                ["Las aves son libres en los bosques", "Los polluelos son capturados en sus nidos", "Al ser transportados, muchos animales se mueren en el camino", "Cuando compras un ave provocas que se capturen m�s", "Las jaulas son c�rceles para las aves", "Sin aves un bosque no es saludable"],
                ["Compra de animales en tiendas de mascotas", "Peces en peque�as peceras", "El pez creci� demasiado, ya no cabe en la pecera", "Liberas a los peces en donde no pertenecen", "Los peces del acuario se comen el alimento y a otros peces y transmiten enfermedades", "Las especies locales desaparecen"],
                ["Compras todo tipo de productos con los empaques y envolturas incluidos los 'Chatarras'", "Tiras a la basura todo lo que sobra de tu consumo sin separarlo", "Los camiones que recolectan tu basura la juntan con la de miles de personas", "Toda la basura va a parar a tiraderos", "La basura que tiras en la calle termina en barrancas y r�os", "La basura llega a los oc�anos y las especies se mueren �Las ballenas no comen empaques! �O s�?"],
                ["Te transportas constantemente en coche �Incluso para ir a la esquina!", "Muchos coches causan tr�nsito en las grandes ciudades", "Muchos coches circulando y embotellamientos, emiten gases que contaminan el ambiente y el aire", "La contaminaci�n del aire es parte de las causas del calentamiento global", "Sin agua no se mantiene la vida", "Las plantas y animales de pastizales son afectadas por el calentamiento"]
               ];
var copy = "";
$(document).ready(function(){
  $(".backUp").click(function(){
    $('#titlecard').fadeIn(1000, function(){
      resetAct();
    });
  });
  $(".leftGood > div, .rightBad > div").click(function(){
    $("#titlecard").fadeOut();
    actividad = $(this).data("select");
    copy = $(this).find('p').html();
    $('#posActivity').html(copy);
    $('#resultActivity').html(lastText[(actividad-1)]);
    $('#grandText').html(grandText[(actividad-1)]);
    if(actividad<6)
    {
      $('#posNeg').html("Actividad positiva");
      $("#dragndrop").css("background-color", "#1F232F");
    }
    else
    {
      $('#posNeg').html("Actividad negativa");
      $("#dragndrop").css("background-color", "#32281A");
    }
    iniciarCuidas();
  });
});
function iniciarCuidas() {
  totalGood = 0;
  orden = [];
  draggies = [];
  $(".draggable").remove();
  for(i=0; i<6; i++)
  {
    orden[i] = (i+1);
  }
  $('#iniActividad').find('p').html(copy);
  $('#instActividad').find('p').html(instructions[(actividad-1)]);
  orden = mezclar(orden);
  for (var i = orden.length - 1; i >= 0; i--) {
    draggies[i] = $('<div class="draggable" data-order="' + orden[i] + '"><div class="expl">' + mensajes[actividad - 1][orden[i] - 1] + '</div></div>').css("background-image", "url(assets/img/conoce/cuidasvsdestruyes/desktop/" + actividad + "/" + orden[i] + ".jpg)");
  }
  $("#stepsDrag").html(draggies);
  $(".draggable").draggable({
    revert : function(event, ui) {
      $(this).data("uiDraggable").originalPosition = {
          top : 0,
          left : 0
      };
      if(event != false)
      {
        if($(event.get(0)).data("drop") != $(this).data("order"))
          event = false;
        else
        {
          totalGood++;
          if (totalGood == 6) {endActivity()};
        }
      }
      return !event;
    }
  });
  $(".draggable").on('mouseenter', function(){
    $(this).find(".expl").fadeIn();
  }).on('mouseleave', function(){
    $(this).find(".expl").fadeOut();
  });
  $(".droppable").droppable({
    drop: function(ev, ui) {
      if($(ui.draggable).data("order") == $(this).data("drop"))
        $(ui.draggable).off('mouseenter').detach().css({top: -4,left: -4}).appendTo(this);
    }
  });
}

function endActivity() {
  $("#iniActividad, #instActividad").fadeOut(1000, function(){
    $("#finActividad, #grandText, #resActividad").fadeIn();
  });
}

function resetAct() {
  $("#iniActividad, #instActividad").show();
  $("#finActividad, #grandText, #resActividad").hide();
}

function mezclar(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};