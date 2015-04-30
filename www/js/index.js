var app = {
    // Application Constructor
    initialize: function() {		
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {		
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');		
		var data = {							
			"key": "test",
			"noticias": "true",
			"secciones": "true",
			"clima": "true",
		};
		data = $(this).serialize() + "&" + $.param(data);
		
		//var enlace = "http://www.todojujuy.com/webservice/index_android_v2015?noticias=true&secciones=true&callback=?";			
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: "http://www.wirenetserver.com.ar/app/index_052015.php?callback=?",
			data: data,
			success: function(response) {
				$('#fecha_actual').html(response.respData.fecha);
				//Cargamos las secciones
				$.each(response.respData.secciones, function( key, value ) {
					var contenido1 = '<li><a href="./';							
					var contenido2 = '';
					if (value.ns_especial == 1) contenido2 = 'especiales/';
					contenido3 = value.ns_permalink+'" style="border-left-color:'+value.ns_color+'">'+value.valor+'</a></li>';
					$('.secciones').append(contenido1+contenido2+contenido3);
					
					var valor1 = '<div id="seccion" style="background-color:'+value.ns_color+';"><a href="';
					var valor2 = '';
					if (value.ns_especial == 1) valor2 = 'especiales/';
					var valor3 = value.ns_permalink+'" class="link_seccion"><span class="icon-arrow-right2"></span> &nbsp;'+value.valor+'</a></div>';
					$('#secciones-items').append(valor1+valor2+valor3);
				});	
				//Cargamos el clima		
				$('.info_clima').html('<img src="http://www.todojujuy.com/img/encabezado/clima_80b_'+response.respData.clima.cw_icono+'.png" width="18" height="18" /> T: '+response.respData.clima.cw_temp+'&deg;C <span class="barrita">|</span> H: '+response.respData.clima.cw_humedad+' <a href="./ampliar-clima"><span class="ver_mas">VER CLIMA</span></a>');
				//Cargamos las noticias
				$('#content').html('');
				$.each(response.respData.noticias, function( key, value ) {
					var not1 = '<div id="lista"><div id="lista2"><p class="titulos_s"><a href="./'+value.seccion_permalink+'" style="background-color:'+value.seccion_color+';">'+value.seccion_nombre+'</a><span class="barrita">&raquo; </span><span class="titulos_f">'+value.fecha_hora+' hs</span></p><div class="titulos_m"><a href="'+value.permalink+'">'+value.titulo+'</a></div>';
					var not2 = '';
					if (value.mostrar_imagen) not2 = '<div align="center"><a href="'+value.permalink+'"><img src="http://www.todojujuy.com/imagenes/320x171/strict/img/'+value.ni_archivo+'" width="100%" alt="'+value.nxni_descripcion+'" /></a></div>';
					var not3 = '<div class="cuerpo" style="margin:5px 0; color:#3A3A3A">'+value.copete+'</div></div></div>';
					$('#content').append(not1+not2+not3);
				});
			},
			error: function (responseData, textStatus, errorThrown) {
				$('#content').html('Por favor intenta nuevamente en unos instantes. [#Error]');
				//alert('error'+textStatus+'ooo'+errorThrown);					
			} 
		});
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};
