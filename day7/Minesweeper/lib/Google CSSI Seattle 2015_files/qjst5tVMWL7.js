/*!CK:1205499496!*//*1435549140,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CWXZo"]); }

__d("SemiInlineSuggestion",["$","Arbiter","csx","CSS","DOM","Event","HighConfidenceSuggestionLogger","SuggestionLoggingUserActions","ProductionPromptConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();function p(q){"use strict";this.$SemiInlineSuggestion0=q;this.$SemiInlineSuggestion1=null;this.$SemiInlineSuggestion2=null;this.$SemiInlineSuggestion3=true;this.$SemiInlineSuggestion4=false;this.$SemiInlineSuggestion5();}p.prototype.$SemiInlineSuggestion5=function(){"use strict";h.subscribe('semiinline/DOMReady',function(){return this.$SemiInlineSuggestion6();}.bind(this));h.subscribe('composer/linkScraped',function(){return this.$SemiInlineSuggestion7();}.bind(this));h.subscribe('showOGTagger',function(){return this.$SemiInlineSuggestion8();}.bind(this));};p.prototype.$SemiInlineSuggestion6=function(){"use strict";if(!this.$SemiInlineSuggestion1)return;this.$SemiInlineSuggestion9=g('bootloadSemiinlineRoot');j.show(this.$SemiInlineSuggestion9);if(o.gk&&this.$SemiInlineSuggestion1.mechanism==='gk_based_production_prompt_classifier'){this.$SemiInlineSuggestiona(this.$SemiInlineSuggestion9);}else this.$SemiInlineSuggestionb(this.$SemiInlineSuggestion9);m.log(n.IMPRESSION,this.$SemiInlineSuggestionc,this.$SemiInlineSuggestion1,this.$SemiInlineSuggestion0);this.$SemiInlineSuggestion4=true;};p.prototype.$SemiInlineSuggestion7=function(){"use strict";if(this.$SemiInlineSuggestion4){this.$SemiInlineSuggestiond();}else h.subscribe('semiinline/DOMReady',function(){return this.$SemiInlineSuggestiond();}.bind(this));};p.prototype.$SemiInlineSuggestiond=function(){"use strict";this.$SemiInlineSuggestione=g('linkscrapeSemiinlineRoot');var q=k.scry(this.$SemiInlineSuggestione,'#linkscrapeSuggestionPlaceholder'),r=k.scry(g('bootloadSemiinlineRoot'),'#semiinline_suggestion_placeholder');if(q&&q.length>0&&r&&r.length>0)k.replace(q[0],r[0].cloneNode(true));j.show(this.$SemiInlineSuggestione);this.$SemiInlineSuggestionb(this.$SemiInlineSuggestione);};p.prototype.$SemiInlineSuggestiona=function(q){"use strict";var r=k.scry(q,"._1_-h")[0],s=k.scry(q,"._1_-i")[0];if(r)this.$SemiInlineSuggestionf(r);if(s)this.$SemiInlineSuggestiong(s);};p.prototype.$SemiInlineSuggestionb=function(q){"use strict";var r=k.scry(q,"._1ljz")[0],s=k.scry(q,"._1lj-")[0];if(r)this.$SemiInlineSuggestionf(r);if(s)this.$SemiInlineSuggestiong(s);};p.prototype.$SemiInlineSuggestionf=function(q){"use strict";l.listen(q,'click',function(){m.log(n.XOUT,this.$SemiInlineSuggestionc,this.$SemiInlineSuggestion1,this.$SemiInlineSuggestion0);this.$SemiInlineSuggestion8();}.bind(this));};p.prototype.$SemiInlineSuggestiong=function(q){"use strict";l.listen(q,'click',function(){this.$SemiInlineSuggestionh();m.log(n.ADD,this.$SemiInlineSuggestionc,this.$SemiInlineSuggestion1,this.$SemiInlineSuggestion0);}.bind(this));};p.prototype.update=function(q,r){"use strict";if(r&&r[0]){this.$SemiInlineSuggestion1=r[0];this.$SemiInlineSuggestion2=q;}else{this.$SemiInlineSuggestion1=null;this.$SemiInlineSuggestion8();this.$SemiInlineSuggestion2=null;}};p.prototype.isShown=function(){"use strict";return !!this.$SemiInlineSuggestion1;};p.prototype.isActive=function(){"use strict";return this.$SemiInlineSuggestion3;};p.prototype.$SemiInlineSuggestion8=function(){"use strict";if(this.$SemiInlineSuggestion1){this.$SemiInlineSuggestion1=null;if(this.$SemiInlineSuggestione)j.hide(this.$SemiInlineSuggestione);if(this.$SemiInlineSuggestion9)j.hide(this.$SemiInlineSuggestion9);this.$SemiInlineSuggestion3=false;}};p.prototype.$SemiInlineSuggestionh=function(){"use strict";if(this.$SemiInlineSuggestion1){var q={};q.type='page';q.uid=this.$SemiInlineSuggestion1.blob.objectid;q.at_id=this.$SemiInlineSuggestion1.blob.actiontypeid;q.suggestion_mechanism=this.$SemiInlineSuggestion1.mechanism;q.text=this.$SemiInlineSuggestion2;var r={};r.config=this.$SemiInlineSuggestionc;r.suggestion=this.$SemiInlineSuggestion1;r.csid=this.$SemiInlineSuggestion0;q.suggestion_config=r;h.inform('structuredSuggestion/add',q);if(this.$SemiInlineSuggestione)j.hide(this.$SemiInlineSuggestione);if(this.$SemiInlineSuggestion9)j.hide(this.$SemiInlineSuggestion9);}};p.prototype.setConfigNameForLogging=function(q){"use strict";this.$SemiInlineSuggestionc=q;};p.prototype.getDisplayingSuggestion=function(){"use strict";return this.$SemiInlineSuggestion1;};e.exports=p;},null);