<html><body><script type="text/javascript">(function(){
function del(){while(document.body.firstChild){document.body.removeChild(document.body.firstChild);}};

if(window.location.hostname.search(/(?:^|\.|@)(savefrom\.net|sfrom\.net|146\.185\.29\.11|146\.185\.29\.12|146\.185\.29\.13|146\.185\.29\.14)$/i) == -1)
{
alert('Please go to http://savefrom.net/ to get direct links');
del();
return;
}
var success = false;
try
{
var d = window.parent.document;
if(d && d.getElementById)
{
var e = d.getElementById('sf_result');
if(e && e.innerHTML)
{
window.parent.sf.finishRequest(true);;
e.innerHTML = '<div class="file-result"><div class="result-box simple center"><span class="error">Invalid request.</span></div></div>';
;
window.parent.sf.enableElement('sf_submit', true);
success=true;
}
}
}
catch(err){}

del();
if(!success)
{
var alt = '';
if(alt) alert(alt);
}
})();</script></body></html>