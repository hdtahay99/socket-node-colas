// Comando para establecer la conexión



let socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(estado) {
    label.text(estado.actual);
});


$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });


});