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

    // DIGITAL CONTENTS
    let digitalContentsOffers = ["What we offer:", "Digital signage", "Interactive & animated led wall", "3D rendering & animation", "Advanced & geolocalized augmented reality (AR)"];
    let digitalContentsSuggestions = ["", "Animate your advertising and make it unforgettable", ""];
    

    let digitalContentsAnimator1 = new TextAnimator('#digital-contents-offers', digitalContentsOffers, true);
    digitalContentsAnimator1.run();
    let digitalContentsAnimator2 = new TextAnimator('#digital-contents-suggestions', digitalContentsSuggestions, false);
    setTimeout(()=> digitalContentsAnimator2.run(), 0);

    //MEUSUMS & FOUNDATIONS
    let museumOffers = ["What we offer:", "3D rendering & animations", "Advanced & geolocalized augmented reality (AR)", "Interactive data visualization", "Digitization and interactive display of historical documents"];
    let museumSuggestions = [""];
    let museumAnimator1 = new TextAnimator('#museums-offers', museumOffers, true);
    museumAnimator1.run();
});