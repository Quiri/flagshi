//document.getElementById("scream").onload = function () {


  //Daten extrahieren
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//var img = document.getElementById("scream");
var img = new Image();
img.src = "sydney.gif";
img.addEventListener("load", Hauptteil); 
//img.src = "uk.jpg";
   // document.getElementById("scream");

function Hauptteil() {
ctx.drawImage(img, 0, 0); 

var imgData = ctx.getImageData(0, 0, c.width, c.height),
    datasetrgb = imgData.data,
    dataset1d = new Array(datasetrgb.length / 4),
    i, j;
    //alert(dataset.length);
   
    //Canvas entfernen
function remove(id) {
    return (elem = document.getElementById(id)).parentNode.removeChild(elem);
}

//remove("scream");
//Sremove("myCanvas");
   
    
   //RGB2HEX
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

for (i = 0; i < datasetrgb.length; i = i + 4) {
    dataset1d[i / 4] = rgbToHex(datasetrgb[i], datasetrgb[i + 1], datasetrgb[i + 2]);
}
    
    
//Mehrdimensionalen Vektor bauen
var dataset = [],
    tmpDataset = [],
    i, j;

for (i = 0; i < c.height; i++) {
    for (j = 0, tmpDataset = []; j < c.width; j++) {
        tmpDataset.push(dataset1d[i * c.width + j]);
    }
    dataset.push(tmpDataset);
}
   //    alert(imgData.data.subarray[0,1]);

	
var table = d3.select("body")
    .append("table")

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
    .style("fill", "black");

function animateFirstStep() {
    d3.select(this).select("svg").select("rect")
      .transition()
        .delay(100)            
        .duration(600)
        .attr("width", 8)
        .attr("height", 8)
        .attr("x", 1)
        .attr("y", 1)
      .transition()
        .delay(100)
        .style("fill", function (d) {return d; })
        .each("end", animateSecondStep);
}

function animateSecondStep() {
    d3.select(this)
        .transition()
         .delay(100)
            .duration(300)
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 0)
            .attr("y", 0);
}

   
};

var butt = document.getElementById("bu");
alert(butt);
butt.onclick = function() {
    img.src = "uk.jpg";
    img.addEventListener("load", Hauptteil);
}

//d3.select("table").select("tr:nth-child(2)").select("td:nth-child(3)").style("background-color", "green");