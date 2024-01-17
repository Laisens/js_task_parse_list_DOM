var e,l=document.querySelector("ul");e=Array.prototype.slice.call(l.children).sort(function(e,l){var r=+e.dataset.salary.slice(1).replaceAll(",",""),a=+l.dataset.salary.slice(1).replaceAll(",","");return r>a?-1:r<a?1:0}),l.innerHTML="",e.forEach(function(e){l.appendChild(e)});//# sourceMappingURL=index.28fde42b.js.map

//# sourceMappingURL=index.28fde42b.js.map
