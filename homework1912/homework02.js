
let div = document.querySelector('.coor-demo');

div.addEventListener('mousemove', function(e) {   

  this.textContent = `
    relX: ${ e.offsetX }, absX: ${ e.pageX }
    relY: ${ e.offsetY }, absY: ${ e.pageY }
  `;
});
