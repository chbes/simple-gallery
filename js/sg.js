$(function() {

    $('#sg1 img').click( function() {
        console.log('modal show');
        var srcImg = $(this).attr('src');
        $('#modal1 .sg-modal-content img').attr('src', srcImg);
        $('#main-container').addClass('blur');
        //$('#sg1').addClass('flou');
        $('#modal1').show();
    });

    $('#modal1').click( function(event) {
        console.log('modal hide');
        $('#main-container').removeClass('blur');
        //$('#sg1').removeClass('flou');
        $('#modal1').hide();
    });

});