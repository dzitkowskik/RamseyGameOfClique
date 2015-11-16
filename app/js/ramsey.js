function findClique(graph, minimalCliqueSize) {
      var cliques = allCliques(graph);
      return typeof(cliques.find(function(clique) {
        return clique.length >= minimalCliqueSize;
      })) != "undefined";
}


// http://stackoverflow.com/a/28559315/1387612
function allCliques(g){
    var cliques=[];
    var p=[];
    for (var node in g) {
      if (g.hasOwnProperty(node)) {
        p.push(node);
      }
    }

    var r =[];
    var x=[];

    bronKerbosch(g, r, p, x, cliques);
    return cliques;
}

function bronKerbosch(g, r, p, x, cliques) {
    if (p.length===0 && x.length===0){
        cliques.push(r);
    }

    p.forEach(function(v){
        var tempR= r.splice(0);
        tempR.push(v);
        bronKerbosch(g, tempR, p.filter(function(temp){
            return g[v].indexOf(temp)!=-1;
        }), x.filter(function(temp){
            return g[v].indexOf(temp)!=-1;
        }), cliques);

        p.splice(p.indexOf(v),1);
        x.push(v);
    });
}
