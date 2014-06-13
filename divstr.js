var dataset = [],
tmpDataset = [],
i, j;

for (i = 0; i < 10; i++) {
    for (j = 0, tmpDataset = []; j < 20; j++) {
        tmpDataset.push("Row:"+i+",Col:"+j);
    }
    dataset.push(tmpDataset);
}
	
d3.select("#viz")
    //.append("table")
    //.style("border-collapse", "collapse")
    //.style("border", "2px black solid")
    
    .selectAll("svg")
    .data(dataset)
    .enter().append("svg")
    
    .selectAll("rect")
    .data(function(d){return d;})
    .enter().append("rect")
    .style("border", "1px black solid")
    .style("padding", "0px")
    .attr("width", 30)
    .attr("height", 30)
    .style("background-color", "white")
    .attr("display", "block")
    //.on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")}) 
    //.on("mouseout", function(){d3.select(this).style("background-color", "yellow")}) 
    //.text(function(d){return d;})
    //.style("font-size", "12px")
   /* .append("svg")
    .style("width", "30px")
    .style("height", "30px")
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 30)
    .attr("height", 30)
    .style("fill", "blue")*/
    .on("mouseover", animateFirstStep);

        function animateFirstStep() {
        d3.select(this)
            .transition()
            .delay(100)            
            .duration(600)
            //.attr("width", 20)
            //.attr("height", 20)
            .attr("cx", 5)
            .attr("yy", 5)
            .transition()
            .delay(100)
            .style("fill","green")
            .each("end", animateSecondStep);
    }

    function animateSecondStep() {
        d3.select(this)
            .transition()
	        .delay(100)
            .duration(300)
            //.attr("width", 30)
            //.attr("height", 30)
            .attr("cx", 0)
            .attr("cy", 0);
    }

    

//d3.select("table").select("tr:nth-child(2)").select("td:nth-child(3)").style("background-color", "green");