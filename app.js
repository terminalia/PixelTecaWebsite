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
    let digitalContentsOffers = ["Our services", "Digital signage", "Interactive & animated led wall", "3D rendering & animation", "Augmented reality"];
    let digitalContentsSuggestions = ["%Turn your digital space into an interactive billboard with live content updates%", "%Animate your advertising and make it unforgettable%", "%Transform static posters into dynamic, engaging visuals that demand attention%"];
    

    let digitalContentsAnimator1 = new TextAnimator('#digital-contents-offers', digitalContentsOffers, true);
    digitalContentsAnimator1.run();
    let digitalContentsAnimator2 = new TypewriterAnimation('#digital-contents-suggestions', digitalContentsSuggestions, 'typewriterAnim', .03, 6000);
    setTimeout(()=> digitalContentsAnimator2.run(), 6000);


});