window.onload=function(){
    var list = document.getElementById("shuffleAndSort"),
    button = document.getElementById("shuffle");
    function shuffle(items)
    {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while(--i)
        {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes()
    {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while(i < nodes.length)
        {
            list.appendChild(nodes[i]);
            ++i;
        }
    } 
    function sortListNodes() {
        var container = document.getElementById("shuffleAndSort");
        var elements = container.children;
        var sortMe = [];
        for (var i=0; i<elements.length; i++) {
            if (!elements[i].id) {
                continue;
            }
            var sortPart = elements[i].id.split("-");
            if (sortPart.length >= 1) {
                sortMe.push([ 1 * sortPart[0] , elements[i] ]);
            }
        }
        sortMe.sort(function(x, y) {
            return x[0] - y[0];
        });
        for (var i=0; i<sortMe.length; i++) {
            container.appendChild(sortMe[i][1]);
        }    
    }
    document.getElementById("shuffle").onclick = shuffleNodes;
    document.getElementById("sortList").onclick = sortListNodes;
    
    } 