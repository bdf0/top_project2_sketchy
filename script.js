var sketchsize = 600;
var rows = 48;
var cols = 48;

$(window).load(function() {

    renderSketchArea();

    $(".pixel").hover(function() {
        $(this).addClass("marked");
    });
});

var renderSketchArea = function() {
    for (var i = 0; i < rows; i++) {
        $("#sketch").append("<div class=\"row\" id=\"row" + i + "\"></div>");
        for (var j = 0; j < cols; j++) {
            $("#row" + i).append("<div class=\"pixel\"></div>");
        }
    }
    
    $(".pixel").width(sketchsize / rows);
    $(".pixel").height(sketchsize / cols);
    
}