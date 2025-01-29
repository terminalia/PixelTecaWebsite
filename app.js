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

    let list1 = ["What we offer", "Digital signage", "Interactive & animated led wall", "3D rendering & animation", "Advanced & geolocalized augmented reality (AR)"];
    let list2 = ["Oh wow, Napoleon is walking next to me!"];
    let textAnimator = new TextAnimator('#digital-contents-offers', list1, true);
    textAnimator.run();
    let textAnimator2 = new TextAnimator('#digital-contents-suggestions', list2, false);
    setTimeout(()=> textAnimator2.run(), 0);
});