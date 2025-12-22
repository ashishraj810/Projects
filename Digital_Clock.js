const div = document.querySelector('div');
setInterval(()=>{             //this is a call back function which calls itself after every 1000ms i.e. 1 sec.
  let time = new Date();
  div.textContent = time.toLocaleTimeString();
},1000)
