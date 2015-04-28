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
        //app.receivedEvent('deviceready');		
		var data = {							
			"key": "test",
			"noticias": true,
			"secciones": true
		};
		data = $(this).serialize() + "&" + $.param(data);
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: "http://www.todojujuy.com/webservice/index_android_v2015?callback=?",
			data: data,
			success: function(response) {
				console.log(response);
				//if (response.respData == 200) {
					$.each(response.respData.secciones, function( key, value ) {
						$('#info').html(response.respData.secciones[0].id);	
						console.log(response.respData.secciones);
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
