$(function() {

    $('#sg1 img').click( function() {
        console.log('modal show');
        var srcImg = $(this).attr('src');
        $('#modal1 .sg-modal-content img').attr('src', srcImg);
        //$('html').addClass('flou');
        $('html').css('overflow','hidden');
        //$('#sg1').addClass('flou');
        $('#modal1').show();
    });

    $('#modal1').click( function(event) {
        console.log('modal hide');
        //$('html').removeClass('flou');
        $('html').css('overflow','auto');
        //$('#sg1').removeClass('flou');
        $('#modal1').hide();
    });

});