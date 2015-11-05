// program interface

var numberOfVertices = 24;

function GenerateFullGraph(numberOfVertices) {
    var N = numberOfVertices;
    var i, j, g = { nodes: [], edges: [] };

    // GENERATE NODES
    for(i = 0; i < N; i++) {
        g.nodes.push({
            id: 'n' + i,
            label: 'Node' + i,
            x: 100 * Math.cos(2 * i * Math.PI / N),
            y: 100 * Math.sin(2 * i * Math.PI / N),
            size: 5,
            color: '#A3A3A3'
        });
    }

    // ADD EDGES FROM EVERY NODE TO EVERY OTHER
    for (i = 0; i < N; i++) {
        for(j = 0; j < N; j++) {
            if(i != j) {
                g.edges.push({
                    id: 'edge_' + i + '-' + j,
                    source: 'n' + i,
                    target: 'n' + j
                });
            }
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
        edgeColor: 'default',
        defaultEdgeColor: '#FAFAFA',
        drawEdges: true
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

function StartApplication() {
    var g = GenerateFullGraph(numberOfVertices);
    var s = DrawGraphInContainer('container', g);
}




