/*!CK:713509321!*//*1437372792,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MUDaJ"]); }

__d("SuggestionScraper",["ArbiterMixin","AsyncRequest","ComposerXSessionIDs","Event","HighConfidenceSuggestion","HighConfidenceSuggestionLogger","Keys","OGComposerTagger","SemiInlineSuggestion","SuggestionLoggingUserActions","SuggestionUIPresentation","TaggerBadgeSuggestion","XStructuredSuggestionController","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=50,v=t(g);for(var w in v)if(v.hasOwnProperty(w))y[w]=v[w];var x=v===null?null:v.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=v;function y(z,aa,ba,ca){"use strict";v.call(this);this.$SuggestionScraper0=z;this.$SuggestionScraper1=aa;this.$SuggestionScraper2=i.getSessionID(ca);this.$SuggestionScraper3=ba;for(var da=0;da<ba.length;da++){var ea=ba[da];switch(ea){case q.FLYOUT:this.$SuggestionScraper4=new k(aa,z,this.$SuggestionScraper2);break;case q.TAGGER_BADGE:this.$SuggestionScraper5=new r(aa,z,this.$SuggestionScraper2);break;case q.SEMI_INLINE:this.$SuggestionScraper6=new o(this.$SuggestionScraper2);}}}y.prototype.setInputTriggerConfig=function(z,aa){"use strict";this.$SuggestionScraper7=aa;this.$SuggestionScraper8=z;this.$SuggestionScraper9();};y.prototype.setBootloadTriggerConfig=function(z){"use strict";this.$SuggestionScrapera(z);};y.prototype.triggerNow=function(z,aa){"use strict";this.$SuggestionScrapera(z,aa);};y.prototype.$SuggestionScraper9=function(){"use strict";if(this.events)return;var z=function(ba){if(this.$SuggestionScraper7.value)setTimeout(this.$SuggestionScraperb.bind(this,ba),u);},aa=function(ba){var ca=false;if(this.$SuggestionScraper4&&this.$SuggestionScraper4.isShown()||this.$SuggestionScraper5&&this.$SuggestionScraper5.isShown()||this.$SuggestionScraper6&&this.$SuggestionScraper6.isShown()){if(ba.keyCode===m.DELETE||ba.keyCode===m.BACKSPACE)ca=true;}else if((ba.keyCode<m.A||ba.keyCode>m.Z)&&ba.keyCode!==m.DELETE&&ba.keyCode!==m.BACKSPACE)ca=true;if(ca)setTimeout(this.$SuggestionScraperb.bind(this,true),u);};this.events=j.listen(this.$SuggestionScraper7,{keydown:aa.bind(this),mousemove:z.bind(this)});};y.prototype.disableInput=function(){"use strict";if(!this.events)return;for(var event in this.events)this.events[event].remove();this.events=null;};y.prototype.$SuggestionScraperb=function(z){"use strict";var aa=this.$SuggestionScraper7.value;if(!aa){this.$SuggestionScraperc();}else if(this.$SuggestionScraperd(aa))this.$SuggestionScrapera(this.$SuggestionScraper8,aa);};y.prototype.$SuggestionScraperd=function(z){"use strict";if(!z.match(/([a-z].*){5}/i))return false;if(this.$SuggestionScrapere&&this.$SuggestionScrapere.length<=z.length){var aa=z.replace(this.$SuggestionScrapere,'').trim(),ba=aa.match(/([a-z]+){3}/i);if(!ba)return false;if(aa==='the'||aa==='this'||aa==='very')return false;}return true;};y.prototype.$SuggestionScrapera=function(z,aa,ba){"use strict";if(this.$SuggestionScraperf)return;if(this.$SuggestionScraper0.isOGTaggerSet())return;this.$SuggestionScraperg=z;ba=this.$SuggestionScraperh(q.FLYOUT,this.$SuggestionScraper4,ba,z);ba=this.$SuggestionScraperh(q.SEMI_INLINE,this.$SuggestionScraper6,ba,z);if(this.$SuggestionScraper3.length===0)return;var ca=s.getURIBuilder().setString('config_name',z).setString('csid',this.$SuggestionScraper2).setEnumVector('supported_presentation',this.$SuggestionScraper3).getURI();this.$SuggestionScraperf=new h(ca).setData({composer_state:{input:aa},extra_data:ba}).setHandler(function(da){this.$SuggestionScraperi(da.payload);}.bind(this));this.$SuggestionScraperf.send();this.$SuggestionScrapere=aa;};y.prototype.$SuggestionScraperh=function(z,aa,ba,ca){"use strict";if(!aa)return ba;ba=ba||{};var da=this.$SuggestionScraper3.indexOf(z);if(da>=0)if(!aa.isActive()){var ea=this.$SuggestionScraper3.slice(0,da),fa=this.$SuggestionScraper3.slice(da+1);this.$SuggestionScraper3=ea.concat(fa);}else{if(aa.getDisplayingSuggestion())ba.existingHighConfSuggestion=JSON.stringify(aa.getDisplayingSuggestion());aa.setConfigNameForLogging(ca);}return ba;};y.prototype.$SuggestionScraperi=function(z){"use strict";this.$SuggestionScraperf=null;if(z&&z.suggestion_finder_result){switch(z.suggestion_finder_result.presentation){case q.FLYOUT:this.$SuggestionScraper4.update(z.suggestion_finder_result.results);break;case q.TAGGER_BADGE:this.$SuggestionScraper0.saveSuggestion(z.suggestion_finder_result.results,this.$SuggestionScraperg);this.$SuggestionScraper5.update(z.suggestion_finder_result.results);break;case q.ADD_TAG:n.asyncSuggest(z.add_tag_payload,function(){l.log(p.ADD,this.$SuggestionScraperg,z.suggestion_finder_result.results&&z.suggestion_finder_result.results[0],this.$SuggestionScraper2);}.bind(this),function(){l.log(p.XOUT,this.$SuggestionScraperg,z.suggestion_finder_result.results&&z.suggestion_finder_result.results[0],this.$SuggestionScraper2);}.bind(this));break;case q.SEMI_INLINE:this.$SuggestionScraper6.update(z.token_text,z.suggestion_finder_result.results);break;case q.TOP_OF_VERBS:this.$SuggestionScraper0.saveSuggestion(z.suggestion_finder_result.results,this.$SuggestionScraperg);break;}}else this.$SuggestionScraperc();};y.prototype.$SuggestionScraperc=function(){"use strict";this.$SuggestionScraper4&&this.$SuggestionScraper4.update(null);this.$SuggestionScraper5&&this.$SuggestionScraper5.update(null);};e.exports=y;},null);