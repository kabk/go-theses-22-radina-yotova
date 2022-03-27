 $(document).ready(function () {
            $("body").scroll(function () {
                $("#icon").css({
                    "filter": "blur(0px)",
                    "pointer-events": "auto"
                })
                $(".chapter-title").css({
                    "filter": "blur(0px)"
                })
                $(".body-text").css({
                    "filter": "blur(0px)"
                })
            });
        });