(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsSAAALEgHS3X78AAAC6ElEQVR4nO3dP24TQRzF8bcmICSQSMN0oPQUdg1F1jcwHaVzAtJQ40h0acINTEeHb4BT4NqROEAQFVM5RSSEBYN+eB2tkTGCrGffat6ni2R5x/PV7J/sJs5CCNjEZ64DYHfji+RfTF3ws02vXxvFZy4H0AfQA3BPU165MwAnLvjhujdeieIzZytiAOB5Uz9tw1icvgt+Wh72VZQiyBhAO/WZiuwCwGF51ZSjWJD9NOaBjoXJlyumhUWQgYLUyo7bo+UAsi+4b7utcx3QKRzYbqylMywqhyh2X73UZ4JI2064LMpe6jNBptPSKTCfVuoTwEhRCCkKIUUhpCiEFIWQohBSFEKKQkhRCCkKIUUhpCiEFIWQohBSFEI7MYZ0Y+8BbvefNW1uVnwdvsX3889RthUpykPcefkixqa2Zj6eRIui3RchRSGkKIQUhZCiEFIUQopCKMp1ynz6EbPuU9pJuHvyCjvtRwQjWYgSJcwu8G38Icam/ouNj4l2X4QUhZCiEFIUQlEO9LfyJ9h9/672T395dIzLwXHt4/gbrRRCikJIUQgpCiFFIaQohBSFkKIQinLxaL8h9pnb6jZYLlCroJVCSFEIKQohRSGkKISinH2hePLeHvS+LnsIg+2eetWiRbE/hajiyXt7Kob5IYwqaPdFSFEIKQohRSGkKIQUhZCiEFIUQopCSFEIKQohRSGkKIQUhZCiEFIUQtFuctm/ZZqfTq79Pj+2cNfR7mbWsd0/sW+v2/zlwRJbV7svQopCSFEIKQohRSGkKIQUhZCiEFIUQopCSFEINSLKBHOCUcSjlUKoEVEe4ybBKOLRSiFkUU5TnwQ2FmWa+iQwccGPLcoo9Ykg8saG0rIy2oXRGKJ0oB+kPhsEXhcLZBGl+OEg8Ump01l5YVydErvghwpTCwuSu+Bny42vXKcUYbrFC2W77EGyIxd8pxzEZCGsf+zLZy4H0APQAbCvQJX4VFyC2Bnv6PcYvwD4CaoIqNvqDTPsAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(15)},,,,,,function(e,t,a){},function(e,t,a){},function(e){e.exports={response:{halls:[{id:1,name:"Exploretorium",place:"Chitkara Campus",capacity:"-NA-",available:!1},{id:2,name:"Einstein Hall",place:"Galelio Block",capacity:"-NA-",available:!0},{id:3,name:"Sun Hall",place:"Turing Block",capacity:"-NA-",available:!1},{id:4,name:"Pulitzer Hall",place:"Teresa Block",capacity:"-NA-",available:!0},{id:5,name:"Plato Hall",place:"SquareOne",capacity:"-NA-",available:!1},{id:6,name:"Moon Hall",place:"Hospitality Block",capacity:"-NA-",available:!0},{id:7,name:"Mooc Hall",place:"Edison Block",capacity:"-NA-",available:!0},{id:8,name:"Pierre Hall",place:"Architecture Block",capacity:"-NA-",available:!0}]}}},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(2),c=a.n(l),o=(a(10),a(11),function(e){return n.a.createElement("li",{key:e.id,className:"side-list list-element"},n.a.createElement("span",null,e.name,", ",e.place))}),s=function(){var e=a(12).response.halls;return n.a.createElement("div",null,n.a.createElement("ul",null,e.map(function(e){return n.a.createElement(o,{id:e.id,name:e.name,place:e.place})})))},r=(a(13),a(3)),h=a.n(r),m=function(){var e=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,i=300-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=600):(i=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},i)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),a=0;a<t.length;a++){var i=t[a].getAttribute("data-type"),n=t[a].getAttribute("data-period");i&&new e(t[a],JSON.parse(i),n)}var l=document.createElement("style");l.type="text/css",l.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(l)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,n.a.createElement("img",{className:"logo",src:h.a,alt:"chitkara logo"}),n.a.createElement("a",{href:"/",className:"typewrite header","data-period":"2000","data-type":'[ "Book My Hall...", "Chitkara University"]'},n.a.createElement("span",{className:"wrap"})),n.a.createElement("a",{className:"contact-us",href:"/"},"contact us...")))},u=function(){return n.a.createElement("div",null)},p=function(){return n.a.createElement("div",null)},d=function(){return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"Header"},n.a.createElement(m,null)),n.a.createElement("div",{className:"MainBody"},n.a.createElement("div",{className:"List"},n.a.createElement(s,null)),n.a.createElement("div",{className:"Content"},n.a.createElement(u,null)),n.a.createElement("div",{className:"Cart"},n.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.094d25d7.chunk.js.map