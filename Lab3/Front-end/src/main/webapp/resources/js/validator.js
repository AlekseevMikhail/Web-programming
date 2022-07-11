$(function () {


    const CONFIG = {childList: true}


    let observer_x = new MutationObserver(()=> {
        validate()
    });
    let observer_r = new MutationObserver(()=> {
        validate()
        draw()
        drawPoints($("[id='newResultForm:messageR']").text())
    });



    observer_x.observe($("#commandButton")[0],  CONFIG)
    observer_r.observe($("#commandLink")[0],  CONFIG)
    validate()


})


function validate() {
    $("[id='newResultForm:submit']")[0].disabled = !(
        ($("[id='newResultForm:messageX']").text() !=  "") &&
        ($("[id='newResultForm:messageR']").text() != "")&&
        (typeof $("[id='newResultForm:y_hinput']").attr("value") != "undefined")
    )
}

function isANumber( n ) {
    var numStr = /^[\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$|\.$/;
    return numStr.test(n);
}