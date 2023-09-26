let currentFontSize = 14;
let fontWeightTrigger = false;
let fontStyleTrigger = false;
let textDecorationTrigger = false;
let textDecorationThroughTrigger = false;
let textColorTrigger = false;
let red = false;
let blue = false;
let green = false;
let black = false;
let orange = false;
let yellow = false;
let white = false;
let rosybrown = false;
let brown = false;
let gray = false;
let moccasin = false;
let blu = false;






$('.textContainer').css('fontSize', `${currentFontSize}px`);

$('#fontSize').change(function () {
    currentFontSize = $('#fontSize').val();
    $('.textContainer').css('fontSize', `${currentFontSize}px`);
})

/*Font-Weight*/

$('#fontWeight').mouseenter(function () {
    $('.textContainer').css('fontWeight', '700');
    $('#fontWeight').css('color', 'orange')
})
$('#fontWeight').mouseleave(function () {
    if (fontWeightTrigger == false) {
        $('.textContainer').css('fontWeight', 'normal');
        $('#fontWeight').css('color', '#000')
    }
})

$('#fontWeight').click(function () {
    if (fontWeightTrigger == false) {
        fontWeightTrigger = true;
        $('.textContainer').css('fontWeight', '700');
        $('#fontWeight').css('color', 'orange')
    } else {
        fontWeightTrigger = false;
        $('.textContainer').css('fontWeight', 'normal');
        $('#fontWeight').css('color', '#000')
    }
})

/*Font Style*/

$('#fontStyle').mouseenter(function () {
    $('.textContainer').css('fontStyle', 'italic');
    $('#fontStyle').css('color', 'orange')
})
$('#fontStyle').mouseleave(function () {
    if (fontStyleTrigger == false) {
        $('.textContainer').css('fontStyle', 'normal');
        $('#fontStyle').css('color', '#000')
    }
})

$('#fontStyle').click(function () {
    if (fontStyleTrigger == false) {
        fontStyleTrigger = true;
        $('.textContainer').css('fontStyle', 'italic');
        $('#fontStyle').css('color', 'orange')
    } else {
        fontStyleTrigger = false;
        $('.textContainer').css('fontStyle', 'normal');
        $('#fontStyle').css('color', '#000')
    }
})

/*Font Decoration Line*/

$('#textDecoration').mouseenter(function () {
    $('.textContainer').css('textDecoration', 'underline');
    $('#textDecoration').css('color', 'orange')
})
$('#textDecoration').mouseleave(function () {
    if (textDecorationTrigger == false) {
        $('.textContainer').css('textDecoration', 'none');
        $('#textDecoration').css('color', '#000')
    }
})

$('#textDecoration').click(function () {
    if (textDecorationTrigger == false) {
        textDecorationTrigger = true;
        $('.textContainer').css('textDecoration', 'underline');
        $('#textDecoration').css('color', 'orange')
    } else {
        textDecorationTrigger = false;
        $('.textContainer').css('textDecoration', 'none');
        $('#textDecoration').css('color', '#000')
    }
})


/*Font Decoration line-through*/

$('#textDecorationThrough').mouseenter(function () {
    $('.textContainer').css('textDecoration', 'line-through');
    $('#textDecorationThrough').css('color', 'orange')
})
$('#textDecorationThrough').mouseleave(function () {
    if (textDecorationThroughTrigger == false) {
        $('.textContainer').css('textDecoration', 'none');
        $('#textDecorationThrough').css('color', '#000')
    }
})

$('#textDecorationThrough').click(function () {
    if (textDecorationThroughTrigger == false) {
        textDecorationThroughTrigger = true;
        $('.textContainer').css('textDecoration', 'line-through');
        $('#textDecorationThrough').css('color', 'orange')
    } else {
        textDecorationThroughTrigger = false;
        $('.textContainer').css('textDecoration', 'none');
        $('#textDecorationThrough').css('color', '#000')
    }
})


/*Font Color*/
$('#textColor').click(function(){
    $('#palitra').fadeToggle(0);
})


$('#textColor').mouseenter(function () {
    $('#textColor').css('color', 'orange')
})
$('#textColor').mouseleave(function () {
    if (textColorTrigger == false) {
        $('.textContainer').css('color', 'black');
        $('#textColor').css('color', '#000')
    }
})

$('#textColor').click(function () {
    if (textColorTrigger == false) {
        textColorTrigger = true;
        $('#textColor').css('color', 'orange')
    } else {
        textColorTrigger = false;
        $('#textColor').css('color', '#000')
    }
})

/*Red*/

$('#red').mouseenter(function () {
    $('.textContainer').css('color', 'red');
    $('#red').css('border', '1px solid red')
})
$('#red').mouseleave(function () {
    if (red == false) {
        $('.textContainer').css('color', '#000');
        $('#red').css('border', '1px solid #000')
    }
})

$('#red').click(function () {
    if (red == false) {
        red = true;
        $('.textContainer').css('color', 'red');
        $('#red').css('border', '1px solid red')
    } else {
        red = false;
        $('.textContainer').css('color', '#000');
        $('#red').css('border', '1px solid #000')
    }
})

/*Blue*/

$('#blue').mouseenter(function () {
    $('.textContainer').css('color', 'blue');
    $('#blue').css('border', '1px solid blue')
})
$('#blue').mouseleave(function () {
    if (blue == false) {
        $('.textContainer').css('color', '#000');
        $('#blue').css('border', '1px solid #000')
    }
})

$('#blue').click(function () {
    if (blue == false) {
        blue = true;
        $('.textContainer').css('color', 'blue');
        $('#blue').css('border', '1px solid blue')
    } else {
        blue = false;
        $('.textContainer').css('color', '#000');
        $('#blue').css('border', '1px solid #000')
    }
})

/*Green*/

$('#green').mouseenter(function () {
    $('.textContainer').css('color', 'green');
    $('#green').css('border', '1px solid green')
})
$('#green').mouseleave(function () {
    if (green == false) {
        $('.textContainer').css('color', '#000');
        $('#green').css('border', '1px solid #000')
    }
})

$('#green').click(function () {
    if (green == false) {
        green = true;
        $('.textContainer').css('color', 'green');
        $('#green').css('border', '1px solid green')
    } else {
        green = false;
        $('.textContainer').css('color', '#000');
        $('#green').css('border', '1px solid #000')
    }
})

/*Black*/

$('#black').mouseenter(function () {
    $('.textContainer').css('color', 'black');
    $('#black').css('border', '1px solid white')
})
$('#black').mouseleave(function () {
    if (black == false) {
        $('.textContainer').css('color', '#000');
        $('#black').css('border', '1px solid #000')
    }
})

$('#black').click(function () {
    if (black == false) {
        black = true;
        $('.textContainer').css('color', 'black');
        $('#black').css('border', '1px solid white')
    } else {
        black = false;
        $('.textContainer').css('color', '#000');
        $('#black').css('border', '1px solid #000')
    }
})

/*Orange*/

$('#orange').mouseenter(function () {
    $('.textContainer').css('color', 'orange');
    $('#orange').css('border', '1px solid orange')
})
$('#orange').mouseleave(function () {
    if (orange == false) {
        $('.textContainer').css('color', '#000');
        $('#orange').css('border', '1px solid #000')
    }
})

$('#orange').click(function () {
    if (orange == false) {
        orange = true;
        $('.textContainer').css('color', 'orange');
        $('#orange').css('border', '1px solid orange')
    } else {
        orange = false;
        $('.textContainer').css('color', '#000');
        $('#orange').css('border', '1px solid #000')
    }
})

/*Yellow*/

$('#yellow').mouseenter(function () {
    $('.textContainer').css('color', 'yellow');
    $('#yellow').css('border', '1px solid yellow')
})
$('#yellow').mouseleave(function () {
    if (yellow == false) {
        $('.textContainer').css('color', '#000');
        $('#yellow').css('border', '1px solid #000')
    }
})

$('#yellow').click(function () {
    if (yellow == false) {
        yellow = true;
        $('.textContainer').css('color', 'yellow');
        $('#yellow').css('border', '1px solid yellow')
    } else {
        yellow = false;
        $('.textContainer').css('color', '#000');
        $('#yellow').css('border', '1px solid #000')
    }
})

/*White*/

$('#white').mouseenter(function () {
    $('.textContainer').css('color', 'white');
    $('#white').css('border', '1px solid white')
})
$('#white').mouseleave(function () {
    if (white == false) {
        $('.textContainer').css('color', '#000');
        $('#white').css('border', '1px solid #000')
    }
})

$('#white').click(function () {
    if (white == false) {
        white = true;
        $('.textContainer').css('color', 'white');
        $('#white').css('border', '1px solid white')
    } else {
        white = false;
        $('.textContainer').css('color', '#000');
        $('#white').css('border', '1px solid #000')
    }
})

/*Rose*/

$('#rose').mouseenter(function () {
    $('.textContainer').css('color', '#bc8f8f');
    $('#rose').css('border', '1px solid #bc8f8f')
})
$('#rose').mouseleave(function () {
    if (rose == false) {
        $('.textContainer').css('color', '#000');
        $('#rose').css('border', '1px solid #000')
    }
})

$('#rose').click(function () {
    if (rose == false) {
        rose = true;
        $('.textContainer').css('color', '#bc8f8f');
        $('#rose').css('border', '1px solid #bc8f8f')
    } else {
        rose = false;
        $('.textContainer').css('color', '#000');
        $('#rose').css('border', '1px solid #000')
    }
})

/*Brown*/

$('#brown').mouseenter(function () {
    $('.textContainer').css('color', '#a52a2a');
    $('#brown').css('border', '1px solid #a52a2a')
})
$('#brown').mouseleave(function () {
    if (brown == false) {
        $('.textContainer').css('color', '#000');
        $('#brown').css('border', '1px solid #000')
    }
})

$('#brown').click(function () {
    if (brown == false) {
        brown = true;
        $('.textContainer').css('color', '#a52a2a');
        $('#brown').css('border', '1px solid #a52a2a')
    } else {
        brown = false;
        $('.textContainer').css('color', '#000');
        $('#brown').css('border', '1px solid #000')
    }
})

/*Gray*/

$('#gray').mouseenter(function () {
    $('.textContainer').css('color', '#808080');
    $('#gray').css('border', '1px solid #808080')
})
$('#gray').mouseleave(function () {
    if (gray == false) {
        $('.textContainer').css('color', '#000');
        $('#gray').css('border', '1px solid #000')
    }
})

$('#gray').click(function () {
    if (gray == false) {
        gray = true;
        $('.textContainer').css('color', '#808080');
        $('#gray').css('border', '1px solid #808080')
    } else {
        gray = false;
        $('.textContainer').css('color', '#000');
        $('#gray').css('border', '1px solid #000')
    }
})

/*Moccasin*/

$('#moccasin').mouseenter(function () {
    $('.textContainer').css('color', '#ffe4b5');
    $('#moccasin').css('border', '1px solid #ffe4b5')
})
$('#moccasin').mouseleave(function () {
    if (moccasin == false) {
        $('.textContainer').css('color', '#000');
        $('#moccasin').css('border', '1px solid #000')
    }
})

$('#moccasin').click(function () {
    if (moccasin == false) {
        moccasin = true;
        $('.textContainer').css('color', '#ffe4b5');
        $('#moccasin').css('border', '1px solid #ffe4b5')
    } else {
        moccasin = false;
        $('.textContainer').css('color', '#000');
        $('#moccasin').css('border', '1px solid #000')
    }
})

/*Blu*/

$('#blu').mouseenter(function () {
    $('.textContainer').css('color', '#7b68ee');
    $('#blu').css('border', '1px solid #7b68ee')
})
$('#blu').mouseleave(function () {
    if (blu == false) {
        $('.textContainer').css('color', '#000');
        $('#blu').css('border', '1px solid #000')
    }
})

$('#blu').click(function () {
    if (blu == false) {
        blu = true;
        $('.textContainer').css('color', '#7b68ee');
        $('#blu').css('border', '1px solid #7b68ee')
    } else {
        blu = false;
        $('.textContainer').css('color', '#000');
        $('#blu').css('border', '1px solid #000')
    }
})