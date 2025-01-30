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
    let digitalContentsSuggestions = ["",
        "%Animate your advertising and make it unforgettable%", 
        "%Elevate any environment with LED walls that respond to your audience’s movements%",
        "%Showcase your products like never before with high-quality 3D renderings%",
        "%Create immersive experiences that blend digital and real world%" 
    ];

    let digitalContentsAnimator1 = new TextAnimator('#digital-contents-offers', digitalContentsOffers, 'textAnim1', .07, 6000, true);
    digitalContentsAnimator1.run();
    let digitalContentsAnimator2 = new TypewriterAnimation('#digital-contents-suggestions', digitalContentsSuggestions, 'textAnim2', .03, 6000, false);
    setTimeout(()=> digitalContentsAnimator2.run(), 0);


});