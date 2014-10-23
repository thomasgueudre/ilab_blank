$(document).ready(function(){ // start function when document ready

    var canvas = document.getElementById('canvas');
    window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                }
        resizeCanvas();



    $( ".button-show-tool" ).click(function() {

        $( ".main-menu .tool-nav li" ).toggleClass('slide-show-tool');

        $( ".main-menu .tool-nav li .shape-open" ).removeClass('clicked');
        $( ".main-menu .tool-nav li .mockup-open" ).removeClass('clicked');
        $( ".main-menu .tool-nav li .menu-open" ).removeClass('clicked');

        $( ".button-plus-shape" ).css('-webkit-transform','translate(-50%,50%)');
        $( ".button-plus-mockup" ).css('-webkit-transform','translate(-50%,50%)');
        $( ".button-plus-menu" ).css('-webkit-transform','translate(-50%,50%)');

    });


    // intit sketch
    $('#canvas').sketch();




    // prevent pointer event when drawing
    $('#canvas').on('mousedown',function(){
        $('.pointer').css('pointer-events','none');
    });

    $('#canvas').on('mouseup',function(){
        $('.pointer').css('pointer-events','auto');
    });


    $( ".circle-button" ).on('click',function(){
        $('<div class="item circle pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".square-button" ).on('click',function(){
        $('<div class="item square pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".triangle-button" ).on('click',function(){
        $('<div class="item-tri triangle pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".text-button" ).on('click',function(){
        $('<div class="item text pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent",
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".mobile-button" ).on('click',function(){
        $('<div class="item mobile pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".tablet-button" ).on('click',function(){
        $('<div class="item tablet pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".desktop-button" ).on('click',function(){
        $('<div class="item desktop pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".menu-x-button" ).on('click',function(){
        $('<div class="item menu-x pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".menu-y-button" ).on('click',function(){
        $('<div class="item menu-y pointer"> <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    $( ".list-button" ).on('click',function(){
        $('<div class="item list pointer">  <span class="select-corner tl"></span> <span class="select-corner tr"></span> <span class="select-corner bl"></span> <span class="select-corner br"></span> <div class="item-select-option"> <ul><li><a class="undo-select-button" href="#">Undo</a></li><li><a class="redo-select-button" href="#">Redo</a></li><li><a class="delete-select-button" href="#">Delete</a></li></ul> </div> </div>')
        .appendTo('.board')
        .animate({
            'opacity':'1'
        },300)
        .resizable({
            autoHide: true,
            containment: "parent"
        })
        .draggable({
            addClasses: false,
            containment: "parent"
        });

    });

    

    $( ".button-plus-shape" ).click(function() {
        $( ".main-menu .tool-nav li .shape-open" ).toggleClass('clicked');

        if ( $(".main-menu .tool-nav li .shape-open" ).hasClass("clicked") ) {
            $( ".button-plus-shape" ).css('-webkit-transform','translate(-50%,172px)');
        }
        else {
            $( ".button-plus-shape" ).css('-webkit-transform','translate(-50%,50%)');
            $( ".main-menu .tool-nav li ul li" ).removeClass('clicked');
        }

    });

    $( ".button-plus-mockup" ).click(function() {
        $( ".main-menu .tool-nav li .mockup-open" ).toggleClass('clicked');

        if ( $(".main-menu .tool-nav li .mockup-open" ).hasClass("clicked") ) {
            $( ".button-plus-mockup" ).css('-webkit-transform','translate(-50%,172px)');
        }
        else {
            $( ".button-plus-mockup" ).css('-webkit-transform','translate(-50%,50%)');
            $( ".main-menu .tool-nav li ul li" ).removeClass('clicked');
        }

    });

    $( ".button-plus-menu" ).click(function() {
        $( ".main-menu .tool-nav li .menu-open" ).toggleClass('clicked');

        if ( $(".main-menu .tool-nav li .menu-open" ).hasClass("clicked") ) {
            $( ".button-plus-menu" ).css('-webkit-transform','translate(-50%,91.5px)');
        }
        else {
            $( ".button-plus-menu" ).css('-webkit-transform','translate(-50%,50%)');
            $( ".main-menu .tool-nav li ul li" ).removeClass('clicked');
        }

    });

    $( ".grid-button" ).click(function() {

        $( '.background-canvas' ).toggleClass('opacity-background-canvas');

        if ( $(".background-canvas" ).hasClass("opacity-background-canvas") ) {
            $( ".grid-button svg" ).css('fill','#30394C');
            $( ".grid-button" ).css({"color":"#30394C", "border-color":"#30394C"});
        }
        else {
            $( ".grid-button svg" ).css('fill','#8A92A6');
            $( ".grid-button" ).css({"color":"#8A92A6", "border-color":"#8A92A6"});
        }

    });


});