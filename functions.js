//Elemente entfernen
function remove(id) {
    return (elem = document.getElementById(id)).parentNode.removeChild(elem);
}   
    
//RGB2HEX
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


//Matrix aus Vektor machen
function datenMatrix(vektor) {
    
    var dataset = [],
    tmpDataset = [],
    i, j;

    for (i = 0; i < c.height; i++) {
        for (j = 0, tmpDataset = []; j < c.width; j++) {
            tmpDataset.push(vektor[i * c.width + j]);
        }
        dataset.push(tmpDataset);
    };
    return dataset
}

//Animation
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
            .attr("width", 10)
            .attr("height", 10)
            .attr("x", 0)
            .attr("y", 0);
}

function punkteStand() {
    var q, punkte;
    for ( q = 0, punkte = 0; q < dataset1d.length; q++) {
        if ($('rect')[q].style.fill === dataset1d[q]) {
            punkte++; }
    }
        return punkte;
}

function permutation(vektor) { 
    var U, hilf;
    for (k = vektor.length; k>1; k--) {
        U = Math.floor(Math.random() * k);
        hilf = vektor[k-1];
        vektor[k-1] = vektor[U];
        vektor[U] = hilf; 
    }
    return vektor;
}

function noCountry (vektor, suchelement) {
    var nichtgefunden = true;
    for (i = 0; (i<vektor.length) && nichtgefunden; i++) {
        if (vektor[i][0] === suchelement) {
            nichtgefunden = false; 
        }
    }
    return nichtgefunden
}


function hinzufuegen (Kategorie) {
    vorauswahl=[];
    for (land = 1, l=0; land < imgDatabase.length; land++) {
        if (imgDatabase[land][Kategorie] === "1") {
            if (noCountry(auswahl, imgDatabase[land][0])) {
                vorauswahl[l] = imgDatabase[land];
                l++;
            };
        };
    };
}

function wahl(Kategorie) {
    auswahl.splice(zaehler+1);
    hinzufuegen(Kategorie);
    vorauswahl= permutation(vorauswahl);
    auswahl = auswahl.concat(vorauswahl);
}
