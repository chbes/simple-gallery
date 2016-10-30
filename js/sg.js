$(function() {

    $('#sg1 img').click( function() {
        console.log('modal show');
        var srcImg = $(this).attr('src');
        $('#modal1 img').attr('src', srcImg);
        $('html').addClass('flou');
        $('#modal1').show();
    });

    $('#modal1').click( function(event) {
        console.log('modal hide');
        $('html').removeClass('flou');
        $('#modal1').hide();
    });

});