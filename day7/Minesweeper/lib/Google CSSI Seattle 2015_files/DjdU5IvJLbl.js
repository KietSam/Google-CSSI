/*!CK:1333256817!*//*1432290520,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sTTYn"]); }

__d("HighConfidenceSuggestionLogger",["AsyncRequest","SuggestionLoggingParamNames"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={log:function(j,k,l,m){var n={};n[h.USER_ACTION]=j;n[h.CONFIG]=k;n[h.SUGGESTION]=JSON.stringify(l);n[h.COMPOSER_SESSION_ID]=m;if(n[h.SUGGESTION].length)new g().setURI('/suggestion/log').setData(n).send();}};e.exports=i;},null);