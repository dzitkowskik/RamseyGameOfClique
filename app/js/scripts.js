// program interface

// Stack Overflow Content BEGIN
// -- http://stackoverflow.com/a/979996/1387612 --
var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || false;
    }
}
// -----------------------
// Stack Overflow Content END

var firstPlayerColor = '#00FF00';
var secondPlayerColor = '#0000FF';
var defaultNodeColor = '#A3A3A3';
var defaultEdgeColor = '#FAFAFA';
var hooveredNodeColor = '#FFFF00';
var clickedNodeColor = '#FF0000';

var numberOfVertices = params.graph_size || 10;
var minimalCliqueSize = params.minimal_clique_size || 3;

$('#graph_size').val(numberOfVertices);
$('#minimal_clique_size').val(minimalCliqueSize);

function CleanScreen() {
  document.getElementById('first').style.display='none';
  document.getElementById('second').style.display='none';
  document.getElementById('fade').style.display='none';
}

function close_white_content() {
    $('.white_content').hide();
    $('#fade').hide();
}
/**
 * @return {string}
 */
function GetNodeName(id) {
    return 'node_' + id;
}

/**
 * @return {string}
 */
function GetEdgeName(from, to) {
    return 'edge_' + from + '-' + to;
}

function GenerateFullGraph(numberOfVertices) {
    var N = numberOfVertices;
    var i, j, g = { nodes: [], edges: [] };

    // GENERATE NODES
    for(i = 0; i < N; i++) {
        g.nodes.push({
            id: GetNodeName(i),
            label: 'Node' + i,
            x: 100 * Math.cos(2 * i * Math.PI / N),
            y: 100 * Math.sin(2 * i * Math.PI / N),
            size: 5,
            color: '#A3A3A3'
        });
    }

    var addEdge = function(from, to) {
        g.edges.push({
            id: GetEdgeName(GetNodeName(from), GetNodeName(to)),
            source: GetNodeName(from),
            target: GetNodeName(to),
            color: defaultEdgeColor,
            size: 5
        });
    };

    // ADD EDGES FROM EVERY NODE TO EVERY OTHER
    for (i = 0; i < N; i++) {
        for(j = i+1; j < N; j++) {
            addEdge(i, j);
            addEdge(j, i);
        }
    }

    return g;
}

function DrawGraphInContainer(c, g) {
    s = new sigma({
        graph: g,
        container: c
    });

    s.settings({
        drawEdges: true,
        scalingMode: 'inside',
        sideMargin: 5
    });

    s.refresh();
    s.startForceAtlas2({
        worker: false,
        barnesHutOptimize: true,
        slowDown: 250,
        iterationsPerRender: 4});
    setTimeout(function(){ s.stopForceAtlas2(); }, 4000);

    return s;
}

var from = '';
var to = '';
var turn = true;

var firstPlayerGraph = {};
var secondPlayerGraph = {};

function StartApplication() {
    CleanScreen();
    firstPlayerGraph = {};
    secondPlayerGraph = {};
    var g = GenerateFullGraph(numberOfVertices);
    var s = DrawGraphInContainer('graphContainer', g);


    var setEdgeColor = function(color, fromNode, toNode) {
        if(fromNode !== '' && toNode !== '') {
            var fromTo = s.graph.edges(GetEdgeName(fromNode, toNode));
            var toFrom = s.graph.edges(GetEdgeName(toNode, fromNode));

            if (fromTo.color === defaultEdgeColor) {
                fromTo.color = color;
                toFrom.color = color;
                turn = !turn;
                s.refresh();
            }
        }
    };

    var endTurn = function() {
      from = to = '';
    };

    var addEdgeToPlayerGraph = function(graph, fromNode, toNode) {
      if (!graph[fromNode]) {
        graph[fromNode] = [];
      }
      if (!graph[toNode]) {
        graph[toNode] = [];
      }
      graph[fromNode].push(toNode);
      graph[toNode].push(fromNode);
    };

    s.bind('overNode', function(e) {
        var nodeId = e.data.node.id;
        if(nodeId != from) {
            color = hooveredNodeColor;
            s.graph.nodes(nodeId).color = color;
            s.refresh();
        }
    });

    s.bind('outNode', function (e) {
        var nodeId = e.data.node.id;
        if(nodeId != from) {
            color = defaultNodeColor;
            s.graph.nodes(nodeId).color = color;
            s.refresh();
        }
    });

    s.bind('clickNode', function(e) {
        var nodeId = e.data.node.id;
        if(from === '') {
            from = nodeId;
            color = clickedNodeColor;
            s.graph.nodes(nodeId).color = color;
        } else {
            to = nodeId;
            color = defaultNodeColor;
            s.graph.nodes(from).color = color;
            if(turn) {
              setEdgeColor(firstPlayerColor, from, to);
              addEdgeToPlayerGraph(firstPlayerGraph, from, to);
              if (findClique(firstPlayerGraph, minimalCliqueSize) === true) {
                document.getElementById('first').style.display='block';
                document.getElementById('fade').style.display='block';
              }
            }
            else {
              setEdgeColor(secondPlayerColor, from, to);
              addEdgeToPlayerGraph(secondPlayerGraph, from, to);
              if (findClique(secondPlayerGraph, minimalCliqueSize) === true) {
                document.getElementById('second').style.display='block';
                document.getElementById('fade').style.display='block';
              }
            }
            endTurn();
        }
        s.refresh();
    });
}
