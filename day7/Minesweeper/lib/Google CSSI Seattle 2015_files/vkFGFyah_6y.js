/*!CK:4107433306!*//*1435680085,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ArbyC"]); }

__d("AsyncDOM",["CSS","DOM"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={invoke:function(j,k){for(var l=0;l<j.length;++l){var m=j[l],n=m[0],o=m[1],p=m[2],q=m[3],r=(p&&k)||null;if(o)r=h.scry(r||document.documentElement,o)[0];switch(n){case 'eval':(new Function(q)).apply(r);break;case 'hide':g.hide(r);break;case 'show':g.show(r);break;case 'setContent':h.setContent(r,q);break;case 'appendContent':h.appendContent(r,q);break;case 'prependContent':h.prependContent(r,q);break;case 'insertAfter':h.insertAfter(r,q);break;case 'insertBefore':h.insertBefore(r,q);break;case 'remove':h.remove(r);break;case 'replace':h.replace(r,q);break;default:}}}};e.exports=i;},null);
__d("PluginLikebox",["AsyncDOM","AsyncRequest","CSS","DOMEvent","DOMEventListener","DOMQuery","EmbedLikeButton","Event","MorePagerFetchOnScroll","PlatformWidgetEndpoint","Popup"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r=3;function s(t,u,v){this.stream_id=t;this.force_wall=u;this.width=v;this.retries=0;this.load();k.add(l.find(document.body,'.pluginLikeboxStream'),'click',function(w){var x=new j(w),y=x.target.parentNode;if(i.hasClass(y,'text_exposed_link')){x.kill();i.addClass(l.find(y,'^.text_exposed_root'),'text_exposed');}var z=x.target.href?x.target:x.target.parentNode.href?x.target.parentNode:null;if(z&&z.pathname==='/sharer/sharer.php'){x.kill();q.open(z.href,670,340);}});}Object.assign(s.prototype,{load:function(t){new h().setMethod('GET').setURI(p.plugins('likebox','stream')).setData({id:this.stream_id,dom:t?'pluginLikeboxMoreStories':'pluginLikeboxStream',force_wall:this.force_wall,nobootload:1,inlinecss:1,max_timestamp:t,width:this.width}).setReadOnly(true).setErrorHandler(function(){}).setHandler(this.handleResponse.bind(this)).setRequestHeader('X-ALT-REFERER',document.referrer).send();},handleResponse:function(t){if(t.inlinecss){var u=document.createElement('style');u.setAttribute("type","text/css");document.getElementsByTagName('head')[0].appendChild(u);if(u.styleSheet){u.styleSheet.cssText=t.inlinecss;}else u.appendChild(document.createTextNode(t.inlinecss));}g.invoke(t.domops);(function(){var y=l.scry(document.body,'.embeddedForm'),z='embeddedProcessed';y.map(function(aa){if(!i.hasClass(aa,z)){var ba=l.find(aa,'.embeddedLikeButton'),ca=l.find(aa,'.embeddedUnlikeButton');l.scry(ba,'a').concat(l.scry(ca,'a')).forEach(function(da){n.listen(da,'click',function(ea){ea.preventDefault();});});m.addClientId(l.find(aa,'input[name="client_id"]'));m.init(ba,ca,l.find(aa,'input[name="like_action"]'),aa);i.addClass(aa,z);}});})();var v=l.scry(document.body,"#pluginLikeboxMoreStories a");if(!v.length)return;v=v[0];var w=function(){this.load(parseInt(v.getAttribute('data-timestamp'),10));var y=l.find(v.parentNode,'.uiMorePagerLoader');i.addClass(y,'uiMorePagerPrimary');i.removeClass(y,'uiMorePagerLoader');i.hide(v);}.bind(this);k.add(v,'click',function(y){new j(y).kill();w();});new o(v,0).setPagerInViewHandler(w);var x=parseInt(v.getAttribute('data-storycount'),10);if(x===0){if(this.retries<=r){this.retries++;w();}else i.hide(v);}else this.retries=0;return h.suppressOnloadToken;}});e.exports=s;},null);