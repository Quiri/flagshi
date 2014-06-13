document.getElementById("scream").onload = function () {
  
  //Daten extrahieren
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height),
        datasetrgb = imgData.data,
        dataset1d = new Array(datasetrgb.length / 4),
        i, j;
    //alert(dataset.length);
    
    //Canvas entfernen
    function remove (id) {
        return (elem = document.getElementById(id)).parentNode.removeChild(elem);
    }

    remove("scream");
    remove("myCanvas");
   
    
   //RGB2HEX
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    for (i = 0; i <= dataset1d.length; i = i + 4) {
        dataset1d[i / 4] = rgbToHex(datasetrgb[i], datasetrgb[i + 1], datasetrgb[i + 2]);
    }
    
    alert(dataset1d.length);
    
    //Mehrdimensionalen Vektor bauen
    var dataset = [],
        tmpDataset = [],
        i, j;

    for (i = 0; i < 20; i++) {
        for (j = 0, tmpDataset = []; j < 20; j++) {
            tmpDataset.push(dataset1d[i*10 + j]);
        }
        dataset.push(tmpDataset);
    }
	
d3.select("#viz")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")
    
    .selectAll("tr")
    .data(dataset)
    .enter().append("tr")
    
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "10px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")}) 
    .on("mouseout", function(){d3.select(this).style("background-color", function(d){return d;})}) 
    .text(function(d){return d;})
    .style("font-size", "12px");
    
}