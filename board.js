var pieces = document.querySelectorAll("img");

for (var i = 0; i < pieces.length; ++i) {
    pieces[i].ondragstart = function() {
        return false;
    }
}

var temp = null;
for (let i = 0; i < pieces.length; ++i) {
    pieces[i].onmousedown = function(event) {
        this.style.position = 'absolute';
        this.style.zIndex = 1000;
        document.body.append(this);
        
        moveAt(event.pageX, event.pageY, pieces[i]);

        function moveAt(pageX, pageY, obj) {
            obj.style.left = pageX - obj.offsetWidth / 2 + 'px';
            obj.style.top = pageY - obj.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY, pieces[i]);
        }
        
        document.addEventListener('mousemove', onMouseMove);
        pieces[i].onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            this.onmouseup = null;
        };
    };
}


// var rook = document.getElementById("H1");
// var knight = document.getElementById("G1");

// rook.ondragstart = function() {
//     return false;
// }

// knight.ondragstart = function() {
//     return false;
// }

// rook.onmousedown = function(event) {
//     rook.style.position = 'absolute';
//     rook.style.zIndex = 1000;
//     document.body.append(rook);
//     moveAt(event.pageX, event.pageY);
//     function moveAt(pageX, pageY) {
//         rook.style.left = pageX - rook.offsetWidth / 2 + 'px';
//         rook.style.top = pageY - rook.offsetHeight / 2 + 'px';
//     }
//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }

//     document.addEventListener('mousemove', onMouseMove);
//     rook.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         rook.onmouseup = null;
//     };
// };

// knight.onmousedown = function(event) {
//     knight.style.position = 'absolute';
//     knight.style.zIndex = 1000;
//     document.body.append(knight);
//     moveAt(event.pageX, event.pageY);
//     function moveAt(pageX, pageY) {
//         knight.style.left = pageX - knight.offsetWidth / 2 + 'px';
//         knight.style.top = pageY - knight.offsetHeight / 2 + 'px';
//     }
//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }

//     document.addEventListener('mousemove', onMouseMove);
//     knight.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         knight.onmouseup = null;
//     };
// };