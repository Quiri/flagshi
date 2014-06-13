var data; // a global

d3.json("testdaten.cvs", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  visualizeit();
});

svg.append("circle")
    .attr("cx", 5)
    .attr("cy", 6)
    .attr("r", 2.5);