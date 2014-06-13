//document.getElementById("scream").onload = function () {


var dataset1d = new Array();
  //Daten extrahieren
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//var img = document.getElementById("scream");
var img = new Image();
img.src = "sydney.gif";
img.width = "30px";
img.height = "20px";
img.addEventListener("load", Aufbauen); 
//img.src = "uk.jpg";
   // document.getElementById("scream");

function Aufbauen() {
ctx.drawImage(img, 0, 0); 

var imgData = ctx.getImageData(0, 0, c.width, c.height),
    datasetrgb = imgData.data,
  //  dataset1d = new Array(datasetrgb.length / 4),
    i, j;

    //alert(dataset.length);
   
    //Canvas entfernen
    //$("#myCanvas").hide;
   // document.getElementById("myCanvas").style.display = 'none';

for (i = 0; i < datasetrgb.length; i = i + 4) {
    dataset1d[i / 4] = rgbToHex(datasetrgb[i], datasetrgb[i + 1], datasetrgb[i + 2]);
}
    
    
//Mehrdimensionalen Vektor bauen
var dataset = datenMatrix(dataset1d);
    
var table = d3.select("table")
    //.append("table")

    .selectAll("tr")
    .data(dataset)
    .enter().append("tr")
    //.style("height", "1px")

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

//document.getElementById("bu").onclick = function() {
 //   alert($('rect')[10].style.fill === dataset1d[10]);
  //        } 
};



function Hauptteil() {

ctx.drawImage(img, 0, 0); 

var imgData = ctx.getImageData(0, 0, c.width, c.height),
    datasetrgb = imgData.data,
    dataset1d = new Array(datasetrgb.length / 4),
    i, j;
    //alert(dataset.length);
   
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
   // .enter()
    //.style("height", "1px")

    .selectAll("td")
    .data(function(d) {return d; })
    //.enter()
    .on("mouseover", animateFirstStep);
   
};

var zaehler = 0;
var ind = [1,2, 3, 4, 5, 6];
var countries = ["sydney", "uk", "spain", "germany", "cola", "iceland", "south korea"];
var punkte = new Array;
document.onkeypress = function() {
    if (window.event.keyCode === 13) { 
        punkte[zaehler] = Math.ceil(punkteStand()/6);
        var toAdd = $('input[name = checkListItem]').val();
        $('input[name = checkListItem]').val("");
        //document.getElementById("inputbox").style.backgroundColor = "red";
        if (toAdd === countries[zaehler]) { // Richtige Antwort
            zaehler = zaehler + 1;
            $('#countries').append(toAdd + " " + punkte[zaehler-1] + "\% </br>");
   
            switch(zaehler) {
                case ind[0]:
                    img.src = "uk.jpg";
                    break;
                case ind[1]:
                    img.src = "spain.gif";
                    break;
                case ind[2]:
                    img.src = "germany.gif";
                    break;                
                case ind[3]:
                    img.src = "cola.jpg";
                    break;
                case ind[4]:
                    img.src = "iceland.jpg";
                    break;
                case ind[5]:
                    img.src = "southkorea.jpg";
                    break;
                default:
                    img.src = "esp_flag.png";
                    break;
            }
        
            
            img.addEventListener("load", Hauptteil);    
        }
       // else {
            
    }
}


var allText, imgData;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "database.txt",
        dataType: "text",
        success: function(data) {imgData = $.csv.toArrays(data);}
     });
});

//    var txtFile = new XMLHttpRequest();
//    txtFile.open("GET", "database.txt", true);
//    txtFile.onreadystatechange = function()
//    {
//        allText = txtFile.responseText;
//    };

alert(allText);
//var imgdata = $.csv.toArrays(allText);
//alert(imgdata);

document.getElementById('paperCanvas').onmousedown = function() { 
    var einmalig = true;
    document.body.onmouseup = function() {
       // alert("HallO");
        if (einmalig) {
            var myTotal = 0;  //Variable to hold your total
            for(var i=0, len=punkte.length; i<len; i++){
                myTotal += punkte[i];  //Iterate over your first array and then grab the second element add the values up
            }
            var myMean = Math.round(myTotal / punkte.length * 100)/100;
            $('#totalResult').append( "total " + myMean + "\% </br>");
            einmalig = false;
        }
    }
}
    

 
        

//d3.select("table").select("tr:nth-child(2)").select("td:nth-child(3)").style("background-color", "green");