var svg = d3.select('.overlap')
  .append('svg')
  .attrs({
    width: 500,
    height: 100
  });
var buy = svg.append('rect')
  .attrs({
    x: 0,
    y: 5,
    width: 200,
    height: 80
  })
  .style("opacity", 0.7)
  .style("fill", "04E762");
var sell = svg.append('rect')
  .attrs({
    x: 250,
    y: 5,
    width: 500,
    height: 80
  })
  .style("opacity", 0.7)
  .style("fill", "008BF8");
var text = svg.append('text').text('This is some information about whatever')
  .attr('x', 50)
  .attr('y', 150)
  .attr('fill', 'black')

$(function() {
  setInterval(oneSecondUpdate, 1000);
});

// x1 = barOne endpoint, x2 = barTwo startpoint, with width wide enough to cover
function oneSecondUpdate() {
  $(".random1").empty();
  $(".random2").empty();
  var x1 = (11.2 + Math.random() - 0.5).toPrecision(8);
  var x2 = (11.2 + Math.random() - 0.5).toPrecision(8);
  $(".random1").append(x1);
  $(".random2").append(x2);
  var newWidth = 26 * x1
  var newX = 25 * x2
  buy.append('text').text(newWidth);
  buy.transition().duration(1000).attrs({
    width: newWidth
  });
  sell.transition().duration(1000).attrs({
    x: newX
  });
}
