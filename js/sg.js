$(function() {

    $('#sg1 img').click( function() {
        console.log('modal show');
        var srcImg = $(this).attr('src');
        $('#modal1 img').attr('src', srcImg);
        $('#modal1').show();
    });

    $('#modal1').click( function(event) {
        console.log('modal hide');
        $('#modal1').hide();
    });

});