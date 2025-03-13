let menuVisible = false;
$(document).ready(function () {

    $('#logo-container').click(function () {
        // window.location = 'https://terminalia.github.io/PixelTecaWebsite/';
        window.location = 'index.html';
    });


    if (!menuVisible)
        $('#menu-container').hide();

    $('#menu-button').click(function () {
        $('#menu-button').toggleClass('change');


        menuVisible = !menuVisible;

        if (menuVisible) {
            $('#menu-container').show();
            $('.area-content').hide();
            $('#claim-video').hide();
        }
        else {
            $('#menu-container').hide();
            $('.area-content').show();
            $('#claim-video').show();
        }
        $('#menu-container').toggleClass('menu-visible');
    });
});