/*!CK:3291614086!*//*1437666105,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8JlER"]); }

__d("UFIReactionsFacepile.react",["ActorURI","HovercardLink","Image.react","ProfileBrowserLink","ProfileBrowserTypes","React","UFIClassNames","UFIConstants","UFIReactionTypes","XUFIReactionTooltipController","cx","ix","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t=r('/images/ufi/reactions/mini/like.png'),u=12,v=32,w=false,x=l.Component;for(var y in x)if(x.hasOwnProperty(y))aa[y]=x[y];var z=x===null?null:x.prototype;aa.prototype=Object.create(z);aa.prototype.constructor=aa;aa.__superConstructor__=x;function aa(ba,ca){"use strict";x.call(this);this.state={};}aa.prototype.componentWillMount=function(){"use strict";if(!w){Object.keys(o.reactions).forEach(function(ba){(new Image()).src=o.reactions[ba].source_urls.mini;});w=true;}};aa.prototype.renderFacepile=function(){"use strict";var ba=this.props.feedback.reactorids;if(this.props.feedback.reactioncount>u)ba=ba.slice(0,u-1);return ba.map(function(ca){ca=this.props.authorProfiles[ca];var da=h.constructEndpointWithLocation(ca,'ufi'),ea=this.props.feedback.userreactions[ca.id],fa=ea===n.LikeReaction?t:o.reactions[ea].source_urls.mini;return (l.createElement("a",{"aria-label":ca.name,className:"_51km","data-hovercard":da,href:ca.uri,key:'reactor-'+ca.id,position:"above"},l.createElement(i,{className:"_1es0",height:32,src:ca.thumbSrc,width:32}),l.createElement("div",{className:"_1es1"},l.createElement(i,{src:fa}))));}.bind(this));};aa.prototype.renderMoreLink=function(){"use strict";if(this.props.feedback.reactioncount<=u)return null;var ba=this.props.feedback.reactorids,ca=this.props.authorProfiles[ba[u-1]],da=this.props.feedback.reactioncountreduced;if(!isNaN(da))da='+'+(this.props.feedback.reactioncount-u+1);var ea=p.getURIBuilder().setIntVector('seen_user_fbids',ba.slice(0,u-1)).setString('ft_ent_identifier',this.props.feedback.entidentifier).getURI();ea=g.create(ea,this.props.feedback.actorforpost);var fa=k.REACTIONS,ga={targetid:this.props.feedback.targetfbid},ha=j.constructDialogURI(fa,ga),ia=j.constructPageURI(fa,ga);return (l.createElement("a",{ajaxify:ha,className:"_51kn","data-hover":"tooltip","data-tooltip-uri":ea,href:ia,rel:"dialog"},l.createElement(i,{height:v,src:ca.thumbSrc,width:v}),l.createElement("span",null,da)));};aa.prototype.render=function(){"use strict";var ba=s(m.ROW,(("_51ko")+(this.props.feedback.reactioncount>=u?' '+"_1w2m":'')+(this.props.isFirstComponent?' '+"UFIFirstComponent":'')+(this.props.isLastComponent?' '+"UFILastComponent":'')));return (l.createElement("li",{className:ba},this.renderFacepile(),this.renderMoreLink()));};e.exports=aa;},null);