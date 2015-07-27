/*!CK:802003941!*//*1425871574,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["U55fI"]); }

__d("EntstreamGroupFeedObjectOptionsMenu",["EntstreamFeedObjectFollow","EntstreamFeedObjectHide"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j,k,l){j.subscribe('itemclick',function(m,n){switch(n.item.getValue()){case 'markspam':h.hide(k);break;case 'follow_post':case 'unfollow_post':g.toggleFollow(n.item,k,l);break;}}.bind(this));}e.exports=i;},null);
__d("legacy:timeline-edit-checkdirty",["TimelineEditCheckDirty"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.TimelineEditCheckDirty=b('TimelineEditCheckDirty');},3);