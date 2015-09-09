var sketchsize = 600;
var rows = 16;
var cols = 16;
var pixelsize = sketchsize / rows;
var margin = parseInt(-rows / 7);

var bcolor = "gray";
var icolor = "black";



$(document).ready(function() {

    renderSketchArea();

    
    $(".bcolor").click(function () {
        $(".unmarked").css("background-color", $(this).css("background-color"))
    });
    
    $(".icolor").click(function() {
        icolor = $(this).css("background-color");
        $(".marked").css("background-color", icolor)

    });
        
    $(".pixel").hover(function() {
        $(this).removeClass("unmarked");
        $(this).addClass("marked");
        $(this).css("background-color", icolor);
    });

    
});


var renderSketchArea = function() {
    $("#sketch").empty();
    
    for (var i = 0; i < rows; i++) {
        $("#sketch").append("<div class=\"row\" id=\"row" + i + "\"></div>");
        
        for (var j = 0; j < cols; j++) {
            $("#row" + i).append("<div class=\"pixel unmarked\"></div>");
        }
    }
    
    $(".pixel").width(pixelsize);
    $(".pixel").height(pixelsize);
    $(".pixel").addClass(bcolor);
    $(".row").css("margin-top", margin + "px");
}