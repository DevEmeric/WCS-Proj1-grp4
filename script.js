        $(".changebg-phil").hover(function () {
            $('#homePortfolio').css("background-image", "url('images/bg2.jpg')");
            $('.hidden-div-phil').css("display", "block");
            $('.hidden-div-emer, .hidden-div-dave, .hidden-div-alex, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-emer").hover(function () {
            $('#homePortfolio').css("background-image", "url('images/bg2.jpg')");
            $('.hidden-div-emer').css("display", "block");
            $('.hidden-div-phil, .hidden-div-dave, .hidden-div-alex, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-dave").hover(function () {
            $('#homePortfolio').css("background-image", "url('images/bg2.jpg')");
            $('.hidden-div-dave').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-alex, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-alex").hover(function () {
            $('#homePortfolio').css("background-image", "url('images/bg2.jpg')");
            $('.hidden-div-alex').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-dave, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-jeff").hover(function () {
            $('#homePortfolio').css("background-image", "url('images/bg2.jpg')");
            $('.hidden-div-jeff').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-dave, .hidden-div-alex, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-kev").hover(function () {
            $('#homePortfolio').css("background-image", "url('images/bg2.jpg')");
            $('.hidden-div-kev').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-dave, .hidden-div-jeff, .hidden-div-alex').css("display", "none");
        });