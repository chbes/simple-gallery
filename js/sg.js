$(function() {

    $('#sg1').click( function(event) {
        console.log('1');
        $('#modal1').show();
    });

    $('#modal1').click( function(event) {
        console.log('2');
        $('#modal1').hide();
    });

});