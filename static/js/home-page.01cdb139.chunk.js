(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[3],{142:function(t,n,e){"use strict";n.a=e.p+"static/media/default-image.2e01288c.jpg"},143:function(t,n,e){"use strict";n.a=function(t){return"".concat("https://image.tmdb.org/t/p/w500/").concat(t)}},163:function(t,n,e){"use strict";e.d(n,"a",(function(){return w}));var r=e(8),a=(e(1),e(19)),c=e(37),o=e(27),i=e(28);function u(){var t=Object(o.a)(["\n  text-align: center;\n  font-size: 1.6rem;\n  color: #ffdf40;\n  font-weight: 800;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n"]);return u=function(){return t},t}function s(){var t=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return s=function(){return t},t}function f(){var t=Object(o.a)(["\n  text-align: center;\n  font-size: 1.6rem;\n  color: #fff;\n  font-weight: 800;\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  transform: translateX(-50%);\n  text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n"]);return f=function(){return t},t}function b(){var t=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return b=function(){return t},t}function l(){var t=Object(o.a)(["\n  position: relative;\n  max-width: 400px;\n  height: 500px;\n  margin-bottom: 20px;\n"]);return l=function(){return t},t}function p(){var t=Object(o.a)(["\n  max-width: 1000px;\n  margin: 0 auto 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);return p=function(){return t},t}var h=i.a.ul(p()),j=i.a.li(l()),g=i.a.img(b()),d=i.a.h2(f()),x=i.a.div(s()),m=i.a.p(u()),O=e(142),v=e(143);function w(t){var n=t.films,e=Object(a.h)().url;return Object(r.jsx)(h,{children:n.map((function(t){var n=t.id,a=t.original_title,o=t.poster_path,i=t.release_date;return Object(r.jsx)(c.b,{to:{pathname:"movies/".concat(n),state:{url:e,id:n}},children:Object(r.jsxs)(j,{"data-type":n,children:[Object(r.jsxs)(x,{children:[Object(r.jsx)(d,{children:a}),Object(r.jsx)(m,{children:i?i.slice(0,4):"no date"})]}),Object(r.jsx)(g,{src:o?Object(v.a)(o):O.a,alt:a})]})},n)}))})}},269:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var r=e(8),a=e(9),c=e(1),o=e(147),i=e.n(o);var u=e(163),s=e(27);function f(){var t=Object(s.a)(["\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: center;\n  color: #000;\n  margin-bottom: 30px;\n"]);return f=function(){return t},t}var b=e(28).a.h2(f());function l(){var t=Object(c.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],s=Object(c.useState)(1),f=Object(a.a)(s,2),l=f[0];f[1];Object(c.useEffect)((function(){p()}),[]);var p=function(){(function(t){return i.a.get("".concat("https://api.themoviedb.org/3/","movie/popular?api_key=").concat("81f248d3c9154788229a5419bb33091a","&language=en-US&page=").concat(t)).then((function(t){return t.data}))})(l).then((function(t){e.length<t.total_results&&o(t.results)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{children:"Top rates"}),e.length>0&&Object(r.jsx)(u.a,{films:e})]})}}}]);
//# sourceMappingURL=home-page.01cdb139.chunk.js.map