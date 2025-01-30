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
    let digitalContentsOffers = [
        "Our services", 
        "Digital signage", 
        "Interactive & animated led wall", 
        "3D rendering & animation", "Augmented reality"
    ];

    let digitalContentsSuggestions = [
        "",
        "%Animate your advertising and make it unforgettable%", 
        "%Elevate any environment with LED walls that respond to your audience’s movements%",
        "%Showcase your products like never before with high-quality 3D renderings%",
        "%Create immersive experiences that blend digital and real world%" 
    ];

    let digitalContentsAnimator1 = new TypewriterAnimation('#digital-contents-offers', digitalContentsOffers, 'textAnim1', .07, 6000, true);
    digitalContentsAnimator1.run();
    let digitalContentsAnimator2 = new TypewriterAnimation('#digital-contents-suggestions', digitalContentsSuggestions, 'textAnim2', .03, 6000, false);
    setTimeout(()=> digitalContentsAnimator2.run(), 0);

    //MUSEUMS & FOUNDATIONS
    let museumsOffers = [
        "Our services",
        "Digitization of historical documents",
        "Interactive data visualization",
        "Augmented reality",
        "3D rendering & animation"
    ];

    let museumsSuggestions = [
        "",
        "%Digitize priceless archives and make them accessible to everyone with interactive visualization%",
        "%Turn complex historical data into captivating visuals that anyone can understand%",
        "%Tell the stories of your exhibit using digital augmented content%",
        "%Bring history to life through stunning animations that captivate and inform%"
    ];

    let museumsAnimator1 = new TypewriterAnimation('#museums-offers', museumsOffers, 'textAnim1', .07, 6000, true);
    museumsAnimator1.run();
    let museumsAnimator2 = new TypewriterAnimation('#museums-suggestions', museumsSuggestions, 'textAnim2', .03, 6000, false);
    setTimeout(()=> museumsAnimator2.run(), 0);

    //EXPO & FAIRS
    let expoOffers = [
        "Our services",
        "Industrial virtual reality",
        "Interactive data visualization",
        "Interactive & animated led wall",
        "Augmented reality"
    ];

    let expoSuggestions = [
        "",
        "%Immerse your clients in a VR experience that showcases your manufacturing process%",
        "%Turn your data into a captivating narrative with interactive visual tools%",
        "%Get your message across with dynamic LED visuals that engage and interact with attendees%",
        "%Use augmented reality to give visitors a guided experience of your products and services%"
    ];

    let expoAnimator1 = new TypewriterAnimation('#expo-offers', expoOffers, 'textAnim1', .07, 6000, true);
    expoAnimator1.run();
    let expoAnimator2 = new TypewriterAnimation('#expo-suggestions', expoSuggestions, 'textAnim2', .03, 6000, false);
    setTimeout(()=> expoAnimator2.run(), 0);

    //GAMES & GAMIFICATION
    let gamesOffers = [
        "Our services",
        "Game development for brand engagement",
        "Rewards and leaderboards for customer loyalty",
        "Customizable game-based learning solutions",
        "Interactive storytelling and simulations"
    ];

    let gamesSuggestions = [
        "",
        "%Create a game that brings your brand to life, engaging users through interactive challenges and rewards%",
        "%Turn customer loyalty into a game with points, badges, and rankings that keep users coming back%",
        "%Enhance learning through game-based platforms that make training fun and effective%",
        "%Give users the power to explore and influence the narrative%"
    ];

    let gamesAnimator1 = new TypewriterAnimation('#games-offers', gamesOffers, 'textAnim1', .07, 6000, true);
    gamesAnimator1.run();
    let gamesAnimator2 = new TypewriterAnimation('#games-suggestions', gamesSuggestions, 'textAnim2', .03, 6000, false);
    setTimeout(()=> gamesAnimator2.run(), 0);

    //CONTENT CREATORS
    let creatorsOffers = [
        "Our services",
        "3D rendering & animations for storytelling",
        "Game and interactive experience development"
    ];

    let creatorsSuggestions = [
        "",
        "%Bring your creative vision to life with stunning 3D animations and visuals%",
        "%Build an interactive world that allows your audience to participate in your story%"
    ];

    let creatorsAnimator1 = new TypewriterAnimation('#creators-offers', creatorsOffers, 'textAnim1', .07, 6000, true);
    creatorsAnimator1.run();
    let creatorsAnimator2 = new TypewriterAnimation('#creators-suggestions', creatorsSuggestions, 'textAnim2', .03, 6000, false);
    setTimeout(()=> creatorsAnimator2.run(), 0);
});