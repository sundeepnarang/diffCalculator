/**
 * Created by sundeepnarang on 4/24/15.
 */

function compare(type) {
    $(".comparision").empty();
    var diff = [];
    var old = $("textarea#old").val();
    var newval = $("textarea#new").val();
    switch(type){
        case 1 : diff=JsDiff.diffChars(old, newval);
            break;
        /*case 2 : diff=JsDiff.diffWords(old, newval);
            break;
        case 3 : diff=JsDiff.diffLines(old, newval);
            break;*/
        case 4 : diff=JsDiff.diffSentences(old, newval);
            break;
    }

    diff.forEach(function (part,i) {
        // green for additions, red for deletions
        // grey for common parts
        var color = '';
        if (part.added) {
            color = 'green';
            $(".comparision")
                .append(
                    "<tr><td>"+ i +"</td>"+
                    "<td id='part"+i+"' style='color:"+ color+";'><strong>" +
                    "++++++++++++"+
                    "</strong></td>"+
                    "<td id='part"+i+"' style='color:"+ color+";'><strong>" +
                    part.value+
                    "</strong></td></tr>");
        } else if(part.removed) {
            color = 'red' ;
            $(".comparision")
                .append(
                    "<tr><td>"+ i +"</td>"+
                    "<td id='part"+i+"' style='color:"+ color+";'><strong>" +
                    part.value+
                    "</strong></td><br/>"+
                    "<td id='part"+i+"' style='color:"+ color+";'><strong>" +
                    "-------------"+
                    "</strong></td></tr>");
        }else{
            color = 'grey';
            $(".comparision")
                .append(
                    "<tr><td>"+ i +"</td>"+
                    "<td id='part"+i+"' style='color:"+ color+";'><strong>" +
                    part.value+
                    "</strong></td><br/>"+
                    "<td id='part"+i+"' style='color:"+ color+";'><strong>" +
                    part.value+
                    "</strong></td></tr>");
        }

    });
    $(".viewone").hide();
    $(".viewtwo").show();
    console.log(diff);
}

function back(){
    $(".viewone").show();
    $(".viewtwo").hide();
    $(".comparision").empty();
}

function clearText(){
    $("textarea#old").val("");
    $("textarea#new").val("");
}