/**
 * Created by Michael on 2016-04-02.
 */
$(document).ready(function() {
    var key = $("span");
    var display = $(".display > p");
    var clear = $(".clear");

    clear.click(function(){
        display.html("");
    })

    key.click(function(){
        if ($(this).html() === "="){
            display.html(eval(display.html()));
        } else {
            display.html(display.html() + $(this).html());
        }
    })
})


