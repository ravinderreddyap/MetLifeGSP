define(function(){var e="callback",b=0;function d(h){var g,f;g=document.createElement("script");g.type="text/javascript";g.async=true;g.src=h;f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(g,f)}function c(g,j){var h=/!(.+)/,f=g.replace(h,""),i=(h.test(g))?g.replace(/.+!/,""):e;f+=(f.indexOf("?")<0)?"?":"&";return f+i+"="+j}function a(){b+=1;return"__async_req_"+b+"__"}return{load:function(g,i,h,f){if(f.isBuild){h(null)}else{var j=a();window[j]=h;d(c(g,j))}}}});