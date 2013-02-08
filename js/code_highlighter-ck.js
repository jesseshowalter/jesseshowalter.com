/* Unobtrustive Code Highlighter By Dan Webb 11/2005
   Version: 0.4
	
	Usage:
		Add a script tag for this script and any stylesets you need to use
		to the page in question, add correct class names to CODE elements, 
		define CSS styles for elements. That's it! 
	
	Known to work on:
		IE 5.5+ PC
		Firefox/Mozilla PC/Mac
		Opera 7.23 + PC
		Safari 2
		
	Known to degrade gracefully on:
		IE5.0 PC
	
	Note: IE5.0 fails due to the use of lookahead in some stylesets.  To avoid script errors
	in older browsers use expressions that use lookahead in string format when defining stylesets.
	
	This script is inspired by star-light by entirely cunning Dean Edwards
	http://dean.edwards.name/star-light/.  
*/// replace callback support for safari.
"a".replace(/a/,function(){return"b"})!="b"&&function(){var e=String.prototype.replace;String.prototype.replace=function(t,n){if(typeof n!="function")return e.apply(this,arguments);var r=""+this,i=n;if(t instanceof RegExp){var o=t,u=[],a=o.lastIndex,f;while((f=o.exec(r))!=null){var s=f.index,l=f.concat(s,r);u.push(r.slice(a,s),i.apply(null,l).toString());if(!o.global){a+=RegExp.lastMatch.length;break}a=o.lastIndex}u.push(r.slice(a));return u.join("")}var s=r.indexOf(t);return s==-1?r:e.apply(r,[t,i(t,s,r)])}}();var CodeHighlighter={styleSets:new Array};CodeHighlighter.addStyle=function(e,t){function n(){if(typeof Event!="undefined"&&typeof Event.onReady=="function")return Event.onReady(CodeHighlighter.init.bind(CodeHighlighter));var e=window.onload;typeof window.onload!="function"?window.onload=function(){CodeHighlighter.init()}:window.onload=function(){e();CodeHighlighter.init()}}[].push&&this.styleSets.push({name:e,rules:t,ignoreCase:arguments[2]||!1});this.styleSets.length==1&&n()};CodeHighlighter.init=function(){function n(e,n){var r=typeof n.exp!="string"?String(n.exp).substr(1,String(n.exp).length-2):n.exp;t.push({className:e,exp:"("+r+")",length:(r.match(/(^|[^\\])\([^?]/g)||"").length+1,replacement:n.replacement||null})}function r(e,n){return e.replace(new RegExp(t,n?"gi":"g"),function(){var e=0,n=1,r;while(r=t[e++]){if(arguments[n]){if(!r.replacement)return'<span class="'+r.className+'">'+arguments[0]+"</span>";var i=r.replacement.replace("$0",r.className);for(var s=1;s<=r.length-1;s++)i=i.replace("$"+s,arguments[n+s]);return i}n+=r.length}})}function i(i){var s,o=new RegExp("(\\s|^)"+i.name+"(\\s|$)");t.length=0;var u=e.filter(function(e){return o.test(e.className)});for(var a in i.rules)n(a,i.rules[a]);for(var f=0;f<u.length;f++){if(/MSIE/.test(navigator.appVersion)&&u[f].parentNode.nodeName=="PRE"){u[f]=u[f].parentNode;s=u[f].innerHTML.replace(/(<code[^>]*>)([^<]*)<\/code>/i,function(){return arguments[1]+r(arguments[2],i.ignoreCase)+"</code>"});s=s.replace(/\n( *)/g,function(){var e="";for(var t=0;t<arguments[1].length;t++)e+="&nbsp;";return"\n"+e});s=s.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");s=s.replace(/\n(<\/\w+>)?/g,"<br />$1").replace(/<br \/>[\n\r\s]*<br \/>/g,"<p><br></p>")}else s=r(u[f].innerHTML,i.ignoreCase);u[f].innerHTML=s}}if(!document.getElementsByTagName)return;if("a".replace(/a/,function(){return"b"})!="b")return;var e=document.getElementsByTagName("CODE");e.filter=function(e){var t=new Array;for(var n=0;n<this.length;n++)e(this[n])&&(t[t.length]=this[n]);return t};var t=new Array;t.toString=function(){var e=new Array;for(var t=0;t<this.length;t++)e.push(this[t].exp);return e.join("|")};for(var s=0;s<this.styleSets.length;s++)i(this.styleSets[s])};