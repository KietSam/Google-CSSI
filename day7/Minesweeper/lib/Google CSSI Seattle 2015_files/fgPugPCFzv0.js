/*!CK:1498921674!*//*1434987790,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4LjXk"]); }

__d("GroupDescription",["Arbiter","Event","tidyEvent"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={onDescriptionActionButtonClick:function(k){i(h.listen(k,'click',function(){g.inform('GroupsRHC/expandDescContainer');}));}};e.exports=j;},null);
__d("GroupsDescTagContainer",["Arbiter","CSS","cx","Event","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o){"use strict";this.$GroupsDescTagContainer0=m;this.$GroupsDescTagContainer1=n;this.$GroupsDescTagContainer2=o;this.checkAndCollapseContent();g.subscribe('GroupsRHC/expandDescContainer',this.expandContainer.bind(this));}l.prototype.checkAndCollapseContent=function(){"use strict";if(this.$GroupsDescTagContainer0.getBoundingClientRect().height<=this.$GroupsDescTagContainer2)return;h.addClass(this.$GroupsDescTagContainer0,"__gz");h.show(this.$GroupsDescTagContainer1);k(j.listen(this.$GroupsDescTagContainer1,'click',this.expandContainer.bind(this)));};l.prototype.expandContainer=function(){"use strict";h.removeClass(this.$GroupsDescTagContainer0,"__gz");h.hide(this.$GroupsDescTagContainer1);};e.exports=l;},null);