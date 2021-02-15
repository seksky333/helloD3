const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'India' },
    { id: 'd3', value: 12, region: 'China' },
    { id: 'd4', value: 6, region: 'Germany' },
];
const xScale = d3.scaleBand().domain(DUMMY_DATA.map(item => item.region)).rangeRound([0, 250]).padding(0.1);
//domain(min, max) define min and max value of the item in the graph
//the range() scale from the top left instead of bottom, so the y max value comes first
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select('svg').classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    //the height of each item needs to subtract the max value of y
    //because the default coordinate system is opposite than what we use normally
    .attr('height', item => 200 - yScale(item.value))
    .attr('x', item => xScale(item.region))
    .attr('y', item => yScale(item.value));

