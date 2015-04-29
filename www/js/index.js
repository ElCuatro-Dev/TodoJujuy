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
		/*
		var data = {							
			"key": "test",
			"noticias": true,
			"secciones": true,
			"fecha": true,			
		};
		data = $(this).serialize() + "&" + $.param(data);
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: "http://www.todojujuy.com/webservice/index_android_v2015?callback=?",
			data: data,
			success: function(response) {
				//console.log(response);
				//if (response.respData == 200) {
					$('#fecha_actual').html(response.respData.fecha);
					$.each(response.respData.secciones, function( key, value ) {
						//$('#secciones').append('<li>'+value.valor+'</li>');
						var contenido1 = '<li><a href="./';							
						var contenido2 = '';
						if (value.ns_especial == 1) contenido2 = 'especiales/';
						contenido3 = value.ns_permalink+'" style="border-left-color:'+value.ns_color+'">'+value.valor+'</a></li>';
						//alert(contenido);
						$('.secciones').append(contenido1+contenido2+contenido3);
						//console.log(response.respData.secciones);
					});
				//}
				//else {
				//	$('#info').html(response.respError);
				//}
			},
			error: function (responseData, textStatus, errorThrown) {
				//alert('POST failed.');
				console.log(responseData);
			} 
		});
		*/
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
