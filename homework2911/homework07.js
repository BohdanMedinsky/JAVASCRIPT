// функція забирає тире.
function camelize(str){
    var d = str.split('-');
    var h = [];
    for(var i = 0; i < d.length; i++){
      var s = d[i];
      var f = s.charAt(0).toUpperCase();
      var r = s.slice(1);
      var t = f + r;
      h.push(t)
       console.log(h);
    }
   var v = h.join('')
   console.log(v);
  }
  
  console.log(camelize("background-color"))
  console.log(camelize("text-alight"))
  console.log(camelize("font-size"))