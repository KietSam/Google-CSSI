/*!CK:2452458618!*//*1437379192,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["5tR2T"]); }

__d("InputAutoCapitalize",["CurrentLocale","Event","Input"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={enable:function(k,l){var m=h.listen(k,'keyup',function(){if(!i.isEmpty(k)){var n=i.getValue(k);l=l||g.get();if(l=='tr_TR'&&n.substr(0,1)=='i'){i.setValue(k,"\u0130"+n.substr(1));}else i.setValue(k,n.substr(0,1).toLocaleUpperCase()+n.substr(1));m.remove();}});}};e.exports=j;},null);
__d("ComposerXInstanceResetter",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){h.instance.reset();}e.exports=g;},null);
__d("ComposerXPlaceTaggerReset",["CSS"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){i.instance.getCore().reset();g.hide(i.element);}e.exports=h;},null);
__d("FileFormDisableInFlight",["Form"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this._form=i;}h.prototype.enable=function(){"use strict";this._subscription=this._form.subscribe(['submit','initial'],this._handle.bind(this));};h.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};h.prototype._handle=function(i){"use strict";if(i==='submit'){setTimeout(g.setDisabled.bind(null,this._form.getRoot(),true),0);}else g.setDisabled(this._form.getRoot(),false);};e.exports=h;},null);
__d("ComposerXComponents",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){"use strict";this.$ComposerXComponents0=h;}g.prototype.getComponents=function(){"use strict";return this.$ComposerXComponents0;};e.exports=g;},null);
__d("HubsTypeaheadView",["Arbiter","AsyncRequest","ContextualTypeaheadView","CSS","DOM","Event","$","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();for(var o in i)if(i.hasOwnProperty(o))q[o]=i[o];var p=i===null?null:i.prototype;q.prototype=Object.create(p);q.prototype.constructor=q;q.__superConstructor__=i;function q(r,s){"use strict";i.call(this,r,s);if(s.allowDedupe)this.subscribe('select',this.selectDuplicates.bind(this));}q.prototype.hide=function(){"use strict";return this.canHide?p.hide.call(this):null;};q.prototype.reset=function(){"use strict";return this.canHide?p.reset.call(this):null;};q.prototype._createFreeFormNode=function(r){"use strict";var s=r;if(this.showCreatePrompt){s=n._("Add \"{partial_name}\"",[n.param("partial_name",r)]);}else if(this.showAltCreatePrompt)s=n._("Create \"{partial_name}\"",[n.param("partial_name",r)]);return {text:s,orig_text:r,type:'addnew calltoaction',uid:'0'};};q.prototype.render=function(r,s,t){"use strict";var u=[],v=Math.max(1,Math.floor(s.length/10));for(var w=v;w<s.length;w++)if(!!s[w].already_added){u.push(s[w]);s.splice(w,1);w--;}s=s.concat(u);if(this.alwaysRender&&r!=='')if(this.allowFreeformEntry){s.push(this._createFreeFormNode(r));}else{var x=r.toLowerCase().trim(),y=false;for(var z=0;z<s.length;z++)if(x==s[z].text.toLowerCase().trim()){y=true;break;}if(!y)s.push(this._createFreeFormNode(r));}var aa=s.length;for(var ba=0;ba<s.length;ba++)if(s[ba].uid==false)aa--;if(this.allowDedupe&&aa>1&&r.length>=3)s.push({text:n._("Mark Duplicate Results"),type:'dupelink calltoaction'});return p.render.call(this,r,s,t);};q.prototype.selectDuplicates=function(r,s){"use strict";if(!s.selected.type.match('dupelink'))return;var t=[];for(var u=0;u<this.results.length;u++){if(this.results[u].uid==false)continue;t.push(this.results[u].uid);}var v=g.subscribe('typeahead/'+this.collectionID+'/confirmDupes',function(w,x){var y=this.results.map(function(ba){return ba.uid;});for(var z=0;z<x.dupe_ids.length;z++){var aa=y.indexOf(x.dupe_ids[z]);j.hide(this.items[aa]);}this.hasHiddenDupes=x.dupe_ids.length>0;}.bind(this));g.subscribe('typeahead/'+this.collectionID+'/finishDupes',function(w,x){g.unsubscribe(v);this.canHide=true;this.hasHiddenDupes&&j.hide(k.find(this.content,'.dupelink'));this.hasHiddenDupes=false;}.bind(this));this.canHide=false;new h('/ajax/typeahead/quality/duplicates').setData({ids:t,surface:m('collections_surface').value,collection_id:this.collectionID}).send();};q.initFreeformBoxes=function(){"use strict";var r=k.scry(document,'div.fbAddFormDialog')[0];if(!r)return;var s=k.find(r,'form');l.listen(s,'submit',function(){k.scry(s,'div.fbFreeformInput').forEach(function(t){if(k.find(t,'input.inputtext').value)j.addClass(t.firstChild,'selected');});});};Object.assign(q.prototype,{canHide:true,hasHiddenDupes:false});e.exports=q;},null);
__d("MultiInferenceNetego",["Button","DOM","Event","Form","Parent","$","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();function n(o,p,q){"use strict";this._netego=l(o);var r=h.find(this._netego,"._5q_4");i.listen(this._netego,'click',function(event){var s=k.byClass(event.getTarget(),'uiInputLabel');if(!s)return;this._updateButton(q);}.bind(this));p.subscribe('select',function(){this._updateButton(q);}.bind(this));p.subscribe('unselect',function(){this._updateButton(q);}.bind(this));p.subscribe('focus',function(){r.checked=true;}.bind(this));this._updateButton(q);}n.prototype._updateButton=function(o){"use strict";var p=false,q=j.getInputsByName(this._netego),r=q.option;r.forEach(function(s){if(!s.checked)return;if(s.value==="typeahead"){var t=q.choice_id.value;if(t&&t!=="")p=true;}else p=true;}.bind(this));g.setEnabled(o,p);};e.exports=n;},null);
__d("ProfileInfoExperienceTypeaheadCore",["Arbiter","DOM","Event","TypeaheadCore","csx"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();for(var l in j)if(j.hasOwnProperty(l))n[l]=j[l];var m=j===null?null:j.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=j;function n(){"use strict";if(j!==null)j.apply(this,arguments);}n.prototype.init=function(o,p,q){"use strict";m.init.call(this,o,p,q);var r=h.find(q,"._50zy");i.listen(r,'click',function(){return g.inform('ProfileInfoExperienceTypeahead/cleared');});};n.prototype.select=function(o){"use strict";m.select.call(this,o);if(o&&this.setValueOnSelect)g.inform('ProfileInfoExperienceTypeahead/selected',o);};n.prototype.keyup=function(){"use strict";m.keyup.call(this);if(this.getValue().length===0)g.inform('ProfileInfoExperienceTypeahead/cleared');};e.exports=n;},null);
__d("TypeaheadSetPhotoOnSelect",["CSS","DOM","Event"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k){"use strict";this._typeahead=k;}j.prototype.enable=function(){"use strict";var k=h.scry(this._typeahead.getElement(),'.photo')[0];if(k){if(!h.isNodeOfType(k,'img')){var l=h.create('img',{className:k.className});h.replace(k,l);k=l;}var m=g.hide.bind(null,k),n=g.show.bind(null,k);this._eventListener=i.listen(k,{load:n,error:m,abort:m});this._subscription=this._typeahead.subscribe('select',function(o,p){var q=p.selected.photo||this._typeahead.view.fallbackPhoto;q?k.setAttribute('src',q):m();}.bind(this));}};j.prototype.disable=function(){"use strict";this._eventListener.remove();this._eventListener=null;this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(j.prototype,{_eventListener:null,_subscription:null});e.exports=j;},null);
__d("legacy:SetPhotoOnSelectTypeaheadBehavior",["TypeaheadSetPhotoOnSelect"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.setPhotoOnSelect=function(h){h.enableBehavior(g);};},3);
__d("TypeaheadRequireSelection",["Event"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this._typeahead=i;}h.prototype.enable=function(){"use strict";var i=this._typeahead.getCore(),j=i.getElement().form;function k(){!i.getHiddenValue()&&i.reset();}k();this._subscription=i.subscribe('blur',k);if(j)this._eventListener=g.listen(j,'submit',k);};h.prototype.disable=function(){"use strict";this._typeahead.getCore().unsubscribe(this._subscription);this._subscription=null;if(this._eventListener){this._eventListener.remove();this._eventListener=null;}};Object.assign(h.prototype,{_subscription:null,_eventListener:null});e.exports=h;},null);
__d("TypeaheadShowBootstrapOnFocus",["TypeaheadShowResultsOnFocus"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k){"use strict";g.call(this,k);this._uids=[];}j.prototype.getMaxBootstrapEntries=function(){"use strict";return 3;};j.prototype.cacheUids=function(){"use strict";return true;};j.prototype.firstFetch=function(k,l,m){"use strict";if(!k.bootstrapping){if(this.cacheUids())this._uids=this.getUidsFromData(m);this.respond(l,m);}};j.prototype.respond=function(k,l){"use strict";if(!k.getValue()){k.setValue('');var m=this.cacheUids()?this._uids:this.getUidsFromData(l),n=l.buildUids(' ',m);l.respond('',n);}};j.prototype.getUidsFromData=function(k){"use strict";var l=k.getAllEntries(),m=[];for(var n in l)if(l[n].bootstrapped)m.push({uid:l[n].uid,index:l[n].index});m.sort(function(o,p){return o.index-p.index;});if(this.getMaxBootstrapEntries())m=m.slice(0,this.getMaxBootstrapEntries());return m.map(function(o){return o.uid;});};e.exports=j;},null);