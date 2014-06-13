//document.getElementById("scream").onload = function () {

//Variablen
var imgDatabase;
var zaehler = 0;
var dataset1d = new Array();
//Kanvas finden
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image();
var Kategorie;
var auswahl = [];
var vorauswahl = [];
//var l = 0;
var punkte = new Array;

//load Database
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "database.txt",
        dataType: "text",
        success: function(data) {imgDatabase = $.csv.toArrays(data);

//Mischen                                 
imgDatabase = permutation(imgDatabase);
wahl(3);                                

                                
//Anfangsbild
img.src = "images/"+auswahl[zaehler][2];
img.width = "30px";
img.height = "20px";
img.addEventListener("load", Aufbauen); 
document.getElementById("scream");

                                 
//Tabelle aufbauen                                 
function Aufbauen() {
    ctx.drawImage(img, 0, 0); 

    var imgData = ctx.getImageData(0, 0, c.width, c.height),
    datasetrgb = imgData.data,
    i, j;

    for (i = 0; i < datasetrgb.length; i = i + 4) {
        dataset1d[i / 4] = rgbToHex(datasetrgb[i], datasetrgb[i + 1], datasetrgb[i + 2]);
    }
    
    //Mehrdimensionalen Vektor bauen
    var dataset = datenMatrix(dataset1d);
    
    var table = d3.select("table")

        .selectAll("tr")
        .data(dataset)
        .enter().append("tr")
    
        .selectAll("td")
        .data(function(d) {return d; })
        .enter().append("td")
        .on("mouseover", animateFirstStep);

    var svgElem = table.append("svg")
        .attr("width", 10)
        .attr("height", 10)
        .attr("display", "block");
    
    var rect = svgElem.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", "#5F6B61");
       } //function Aufbauen





function Hauptteil() {
    ctx.drawImage(img, 0, 0); 

    var imgData = ctx.getImageData(0, 0, c.width, c.height),
        datasetrgb = imgData.data,
        dataset1d = new Array(datasetrgb.length / 4),
        i, j;
       
    //Canvas entfernen
    $("#myCanvas").hide;

    for (i = 0; i < datasetrgb.length; i = i + 4) {
        dataset1d[i / 4] = rgbToHex(datasetrgb[i], datasetrgb[i + 1], datasetrgb[i + 2]);
    }
    
    
    //Mehrdimensionalen Vektor bauen
    var dataset = datenMatrix(dataset1d);

    var table = d3.select("table")
        .selectAll("tr")
        .data(dataset)

        .selectAll("td")
        .data(function(d) {return d; })
        .on("mouseover", animateFirstStep);
   
}; //Hauptteil

// Punkte rechnen, Bild wechseln                  

document.onkeypress = function() {
    if (window.event.keyCode === 13) { 
        punkte[zaehler] = Math.ceil(punkteStand()/6);
        var toAdd = $('input[name = checkListItem]').val();
        $('input[name = checkListItem]').val("");
        if (toAdd.toLowerCase() === auswahl[zaehler][1].toLowerCase()) { // Richtige Antwort
//            if (punkte.length > 2) {
//                $('#countries:first').remove(); 
//            }
            $('#countries').prepend(toAdd + " " + punkte[zaehler] + "% </br>");
            zaehler = zaehler + 1;
            if (zaehler == auswahl.length && zaehler > 0) { //Alle Länder fertig, Begin von neu mit gemischtem Deck
                zaehler = 0;
                auswahl.splice(auswahl.length-1);
                auswahl = permutation(auswahl);
            }
            img.src = "images/" + auswahl[zaehler][2];         
            img.addEventListener("load", Hauptteil);    
        }
            
    }
}

//Schlussstrich
document.getElementById('paperCanvas').onmousedown = function() { 
    var einmalig = true;
    document.body.onmouseup = function() {
        if (einmalig) {
            var myTotal = 0;  //Variable to hold your total
            for(var i = 0, len = punkte.length; i < len; i++){
                myTotal += punkte[i];  //Iterate over your first array and then grab the second element add the values up
            }
            var myMean = Math.round(myTotal / (punkte.length) * 100)/100;
            $('#totalResult').append( "total " + myMean + "\% </br>");
            einmalig = false;
        }
    }
}

  //$(function() {
    $( "#slider" ).slider({
       // range: "max",
        min: 1,
        max: 3,
        orientation: "vertical", 
        value: 1,
        change: function(event, ui) { 
            wahl(ui.value+2);
            
        }
        //slide: function( event, ui ) {
         //   $( "#amount" ).val( ui.value );
       // }
    });
 // });



                              
                                 
                
} // success:load data
}); //ajax
}); //ready.document

 
        

//d3.select("table").select("tr:nth-child(2)").select("td:nth-child(3)").style("background-color", "green");