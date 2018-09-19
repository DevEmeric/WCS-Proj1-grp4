        $(".changebg-phil").hover(function () {
            $('#img-switch').css("background-image", "url('images/Phil.png')");
            $('.hidden-div-phil').css("display", "block");
            $('.hidden-div-emer, .hidden-div-dave, .hidden-div-alex, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-emer").hover(function () {
            $('#img-switch').css("background-image", "url('images/Emer.png')");
            $('.hidden-div-emer').css("display", "block");
            $('.hidden-div-phil, .hidden-div-dave, .hidden-div-alex, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-dave").hover(function () {
            $('#img-switch').css("background-image", "url('images/Dave.png')");
            $('.hidden-div-dave').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-alex, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-alex").hover(function () {
            $('#img-switch').css("background-image", "url('images/Alex.png')");
            $('.hidden-div-alex').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-dave, .hidden-div-jeff, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-jeff").hover(function () {
            $('#img-switch').css("background-image", "url('images/Jeff.png')");
            $('.hidden-div-jeff').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-dave, .hidden-div-alex, .hidden-div-kev').css("display", "none");
        });

        $(".changebg-kev").hover(function () {
            $('#img-switch').css("background-image", "url('images/')");
            $('.hidden-div-kev').css("display", "block");
            $('.hidden-div-phil, .hidden-div-emer, .hidden-div-dave, .hidden-div-jeff, .hidden-div-alex').css("display", "none");
        });