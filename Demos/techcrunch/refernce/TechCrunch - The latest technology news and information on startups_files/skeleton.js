



var adsafeVisParams = {
	birthdate : new Date().getTime(),
	mode : "jss",
	jsref : "null",
	videoId : 'null',
	adsafeSrc : "http://pixel.adsafeprotected.com/rfw/st/20441/1417286/skeleton.js",
	adsafeSep : "?",
	requrl : "",
	reqquery : "",
	debug : "false",
	allowViewability : "true",
	trackMouse : "true",
	
	jsFeatures : "mousetrack,cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie:0,exch,recordalternate:100,nextcocoa,usedtdomain:0",
	jsDoSplit : "false",
	viewabilityDelay : "1-5-15",
	useAdTalk : "true",
	adTalkDtCall : "true",
	killPhrases : "",
	asid : "3a116fc9-4996-11e3-bcb7-00259036d156",
	adWidth : "728",
	adHeight : "90",
	minimizeCalls : "false",
	thisScriptNode : (function() {
		var tempScript,
			scripts = document.getElementsByTagName('script'),
			result = scripts[scripts.length - 1],
			scriptIndex = scripts.length,
			useDocWrite = "jss,jsi,jspix".indexOf("jss") !== -1;
	
		try {
			while (--scriptIndex >= 0) {
				tempScript = scripts[scriptIndex]; 
				if (tempScript.src && tempScript.src.indexOf(URL().fullDom) === 0) {
					result = tempScript;
					break;
				}
			}
			if (scriptIndex === 0 && useDocWrite && !embedded) {
				document.write('<span id="s' + params.asid + '"/>');
				result = document.getElementById('s' + params.asid).parentNode;
			}
		} catch(e) { }
	
		return result;
	}())
};



	
			adsafeVisParams.initialize=function(a7){var L="5.3.1";var r=function(e){return typeof e!=="undefined";};var d=function(e){return !r(e);};var aE=function(Q){var e=r(Q);return e?Q:false;};var aM=function(){};var T=function(e){return Math.round(e);};var a3=function(){return new Date().getTime();};var aR=function(e){return typeof e==="function";};var ay=a7.mode==="jsvid";var i=function(bf){var bg=function(bo){return bf instanceof Object&&(bo||!(bf instanceof Array));};var bl=function(bp,bq){for(var bo in bf){if(bf.hasOwnProperty(bo)||bq){bp(bo,bf[bo]);}}};var e=function(bq,bp){var bo=[];bl(function(bs,bt){var br=bq(bs,bt);if(br!==undefined||bp){bo[bo.length]=br;}});return bo;};var bi=function(bp,bq){bq=bq||",";var bo=[];bl(function(br,bs){bo.push(bp(br,bs));});return bo.join(bq);};var bn=function(bo){return bi(function(bp,bq){return bp+":"+bq;},bo);};var bk=function(bp,bq,br){for(var bo in bq){if(br||bq.hasOwnProperty(bo)){bp[bo]=bq[bo];}}return bp;};var bh=function(bp){var bo={};bl(function(br,bs){var bq=bp(br,bs);if(bg(bq)){bk(bo,bq);}});return bo;};var Q=function(){return bh(function(bq,bo){var bp={};bp[bo]=bq;return bp;});};var bm=function(bp,bs,br){var bo,bq;if(bp!==true){br=bs;bs=bp;bo=bk(bf,bs,br);}else{bq=bk({},bf,br);bo=bk(bq,bs,br);}return bo;};var bj=function(bp){var bo;bl(function(bq,br){if(bp(bq,br)){bo=br;}});return bo;};return{each:bl,isObj:bg,invert:Q,mapToObj:bh,map:e,toParams:bn,stringify:bi,mixin:bm,find:bj,toArray:function(){return Array.prototype.slice.call(bf);}};};var bc={rot:function(e){return e.replace(/[a-zA-Z]/g,function(Q){return String.fromCharCode((Q<="Z"?90:122)>=(Q=Q.charCodeAt(0)+13)?Q:Q-26);});}};var n="a",c="c",al="d",ax="x",q="h",aj="k",x="l",au="p",k="w",A="D",h="E",aC="v",S="i",g="b";var aG={list:{},add:function(e){if(typeof this.list[e]!=N){this.list[e]++;}else{this.list[e]=1;}},toString:function(){var Q="";for(var e in this.list){if(this.list.hasOwnProperty(e)){Q+=e;}}return Q;},hasErrors:function(){for(var e in this.list){return true;}return false;}};var U=(function(){var bf={};var e=function(bi,bk){var bj=new RegExp(bi+"(?=$|,)|"+bi+":(?!,|$)(\\d*(?=,|$))").exec(a7.jsFeatures);if(bf[bi]===undefined||bk){bf[bi]=!!((bj&&!bj[1])||(bj&&bj[1]>Math.floor(Math.random()*100)));}return bf[bi];};var bh={fc:"forcecocoa",rt:"rattie",cb:"cachebust",np:"nextcocoa"};var Q=function(){return i(bh).mapToObj(function(bk,bj){var bi={};bi[bk]=bf[bj]?1:0;return bi;});};var bg=function(){return i(Q()).toParams();};i(bh).each(function(bj,bi){e(bi);});return{on:e,output:bg};})();var a=(function(){var Q=function(bi,bg){var bh,bj={script:['<script type="text/javascript" src="','"><\/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']};bg=bg||bi;bi=(arguments.length>1)?bi:"script";bh=bj[bi];document.write(bh[0]+bg+bh[1]);};var bf=function(bh,bi){var bg=new Image();if(bi){bg.onload=bi;}bg.src=bh;};var e=function(bh){var bg=document.createElement("script");bg.type="text/javascript";bg.src=bh;document.head.appendChild(bg);};return{write:Q,send:bf,exec:e};})();var aJ=(function(){var e=function(bh){if(!bh){bh=Q[a7.mode];}var bl=a7.adsafeSrc.indexOf("BEGIN__ADSAFE"),bk=bl!==-1,bg=bk?a7.adsafeSrc.slice(bl-1):"";var bf=(function(){if(bk){return a7.adsafeSrc.slice(0,bl);}return a7.adsafeSrc+a7.adsafeSep;})();var bi=a7.requrl+"?"+a7.reqquery+"&";var bj=function(bm){if(bh.writeType){a.write(bh.writeType,bm);}else{bh.impressionMethod(bm);}};return{isFW:!!bh.isFW,baseUrl:bh.isFW?bf:bi,macroUrl:bg,sendImpression:bj};};var Q={jsli:{isFW:true,impressionMethod:a.send},jspix:{writeType:"img"},jload:{impressionMethod:a.send},jsvid:{impressionMethod:function(bf){ah.on("adImpression",function(){a.send(bf);});}},bapi:{impressionMethod:a.exec},jsi:{isFW:true,writeType:"iframe"},jss:{isFW:true,writeType:"script"}};return new e();})();var aq=function(){var e=[];return{push:function(Q){e[e.length]=Q;},run:function(){var Q=arguments;i(e).each(function(bf,bg){bg.apply({},Q);});}};};var ao=function(){var e={};var Q=function(bg,bh){e[bg]=e[bg]||new aq();e[bg].push(bh);};var bf=function(){var bg=i(arguments).toArray();var bh=e[bg.shift()];if(bh){bh.run.apply({},bg);}};return{on:Q,trigger:bf};};var G=function(e){e=e||(a7.adsafeSrc||a7.requrl);var Q=/^(http|https):\/\/(([^\/\.]*)\.([^\/]*))/.exec(e);return{fullDom:Q[0],sub:Q[3],master:Q[4],toString:function(){var bf=this.sub;bf=bf?bf+".":"";return Q[1]+"://"+bf+this.master;}};};var aD="application/x-shockwave-flash";var w=(a7.debug==="true");var N="undefined";var X=2000;var a8;var ae=window!=top;var s=false;var a6="jss,jsi,jspix".indexOf(a7.mode)===-1;try{s=!!top.document;}catch(Z){s=false;}var aK;var y=false;var H=a7.birthdate;var aL={};var ah=new ao();var m=function(){var e;var bj=function(bl){top.postMessage(bl,"*");};var bi,bk,bh=false,bg="pm,inDoc,n,";var bf=bg+"log,info,warn,dir,exception,trace,group,groupEnd,groupCollapsed,profile,profileEnd,count,clear,time,timeEnd,timeStamp,table,error,memoryProfile,memoryProfileEnd";bf=bf.split(",");if(w&&typeof console!==N){aL=console;for(bi=0,e=bf.length;bi<e;bi++){bk=bf[bi];if(typeof aL[bk]===N){if(typeof aL.log===N){aL[bk]=aM;}else{aL[bk]=aL.log;}}}}else{for(bi=0,e=bf.length;bi<e;bi++){bk=bf[bi];aL[bk]=aM;}}if(w){aL.pm=window.postMessage?bj:aM;aL.inDoc=function(bn,bm){var bl=function(){var bo;try{if(!bh){bh=document.createElement("ul");document.body.appendChild(bh);}bo=document.createElement("li");bh.appendChild(bo);bo.textContent=bn;}catch(bp){}};if(!bm){bl();}else{setTimeout(bl,bm);}};var Q={};aL.n=function(bm,bn,bo,bl){bo=bo||1;bl=bl||"pm";if(!Q[bm]){Q[bm]=0;}if(Q[bm]<bo){aL[bl](bm+" "+Q[bm]+": "+bn);Q[bm]++;}};}};m();aL.info("v"+L+", mode: "+a7.mode);aL.groupCollapsed("Server Parameters");aL.dir(a7);aL.groupEnd();var u=function(){return new Date().getTime()-H;};var a5=function(e){setTimeout(e,0);};var aa=function(bf,bg,Q,e){if(typeof bf.addEventListener!=N){if(bg==="mouseenter"){bf.addEventListener("mouseover",aH(Q),e);}else{if(bg==="mouseleave"){bf.addEventListener("mouseout",aH(Q),e);}else{bf.addEventListener(bg,Q,e);}}}else{if(typeof bf.attachEvent!=N){bf.attachEvent("on"+bg,Q);}}};var ai=function(Q,bf,e){if(typeof Q.removeEventListener!=N){if(bf==="mouseenter"){bf="mouseover";e=aH;}else{if(bf==="mouseleave"){bf="mouseout";e=aH;}}Q.removeEventListener(bf,e);}else{if(typeof Q.detachEvent!=N){Q.detachEvent("on"+bf,e);}}};var aH=function(e){return function(Q){var bf=Q.relatedTarget;if(this===bf||ap(this,bf)){return;}e.call(this,Q);};};var ap=function(e,Q){if(e===Q){return false;}while(Q&&Q!==e){Q=Q.parentNode;}return Q===e;};var ak=function(bh,bg){var Q="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");var bf,e=[];do{bf=bh%bg;e.push(Q[bf]);bh=(bh-bf)/bg;}while(bh>0);return e.reverse().join("");};var a9=(function(){var bf=new Date();var Q=Date.parse("Jan 1 "+bf.getFullYear());var e=bf.getTime()-Q;return ak(e,62);}());var t=function(){var bh=0,bf={};var Q=function(bj,bk,bi){if(typeof bj.output==="undefined"){throw new Error("item with id "+bk+' must have "output" method');}this.item=bj;this.id=bk||++bh;this.props=bi||{};this.output=function(){return(typeof bj.output==="function")?bj.output():bj.output;};};var e=function(bk){var bl,bi,bj=[];for(bl in bf){if(bf.hasOwnProperty(bl)){bi=bk(bl,bf[bl]);if(bi){bj.push(bi);}}}return bj;};var bg=function(bk,bl,bj){var bi=new Q(bk,bl,bj||{});bf[bi.id]=bi;};return{addItem:bg,iterate:e,getItem:function(bi){return bf[bi];}};};t=new t();var aX=(function(){var e=function(){try{var bf,bh=16,Q=30,bg=Uint32Array&&window.crypto&&window.crypto.getRandomValues,bj="";while(bj.length<Q){if(bg){bf=new Uint32Array(1);window.crypto.getRandomValues(bf);bj+=bf[0].toString(bh);}else{bj+=(Math.random()*bh|0).toString(bh);}}return bj.slice(0,Q);}catch(bi){aG.add(S);}};return{unq:e()};}());var z=function(){var e=function(){var bf=document.createElement("span");i(bf.style).mixin({position:"absolute",top:"150"});return bf.style.top==="";};var Q=function(){var bf={};try{bf={rpx:e()?1:0};}catch(bg){aG.add(aC);}return bf;};return{getProps:Q};};var l=function(){var bn="Shockwave",bi="Flash",bo=bn+bi+"."+bn+bi,bj=bn+" "+bi;var bm=function(){var bs=function(bt){return bt.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",").join(".");};try{try{var bq=new ActiveXObject(bo+".6");try{bq.AllowScriptAccess="always";}catch(br){return"6";}}catch(br){}return bs(new ActiveXObject(bo).GetVariable("$version"));}catch(br){try{if(navigator.mimeTypes[aD].enabledPlugin){if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return bs((navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description);}return bs((navigator.plugins[bj+" 2.0"]||navigator.plugins[bj]).description);}}catch(bp){}}return"0";};var bl=function(bp){return e()===bp;};var bh=function(){var bp=false;if(document.compatMode!=="CSS1Compat"){bp=true;}return bp;};var bk=function(){var bp=5;if(bl("i")){if(window.msCrypto){bp=11;}else{if(window.atob){bp=10;}else{if(document.addEventListener){bp=9;}else{if(window.JSON&&document.querySelector){bp=8;}else{if(window.XMLHttpRequest){bp=7;}else{if(document.compatMode){bp=6;}}}}}}}else{bp="na";}return bp;};var Q=function(){var bs=document.createElement("div"),bt="",bp=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{bs.style.behavior="url(#default#clientcaps)";for(var bq=0;bq<bp.length;bq++){bt=bs.getComponentVersion(bp[bq],"componentid").replace(/,/g,".");if(bt){break;}}}catch(br){bt="na";}return bt;};var bg=function(){return document&&document.documentMode?document.documentMode:"na";};var e=function(){var bp="u";if(r(window.opera)&&r(window.opera.buildNumber)){bp="o";}else{if(r(window.mozInnerScreenY)){bp="g";}else{if(r(window.chrome)&&r(window.chrome.app)){bp="c";}else{if(r(window.WebKitPoint)){bp="w";}else{if(r(window.attachEvent)||r(window.msCrypto)){bp="i";}}}}}return bp;};var bf=function(){return{br:e(),fv:bm(),bv:bk(),dm:bg(),abv:Q()};};return{browserIs:bl,getDocumentMode:bg,getBrowser:e,params:bf};}();var P=0;var b={UNLOAD:"u",PING:"p",ADTALK:"a",VIEWABILITY_READY:"v",VIDEO_EVENTS:"m"};var am=function(br,by){aL.group("Send "+by+"-type DT Call");var bn=G();var bq="";if(y&&(by===b.ADTALK||O.currentLoc!=="na")){var bg=u();if(typeof by==N){by=b.UNLOAD;}if(by===b.UNLOAD&&aV){return;}try{if(U.on("usedtdomain")){bn.sub="dt";}var bo=10;O.fastForward();var bp=","+O.stringify(bo);var bk=Y.length&&Y[0]/ba;if(by===b.UNLOAD){bk=-1;}else{if(by===b.ADTALK){bk=-2;}else{if(by===b.VIEWABILITY_READY){bk=-3;}else{if(by===b.VIDEO_EVENTS){bk=-4;bq=",ve:"+VideoEvents.stringify();}}}}var bl=(f.time!==-1)?",hoverTime:"+f.time+",mouseBox:"+f.getBoundingBoxString():"";var bz=(aG.hasErrors())?",e:"+aG.toString():"";var bs=",tt:"+a7.mode;var Q=","+U.output();var bv=",em:"+ae+",fr:"+s;var bt=",uf:"+((F)?1:0);var e="";t.iterate(function(bB,bA){if(!bA.props.type||bA.props.type===by){e+=","+bB+":"+bA.output();aL.pm("DEBUG_phHome - "+bB+": "+bA.output());}});var bu="&br="+l.getBrowser();var bm="asId="+a7.asid;var bx=",pc:"+D;var bw="&adsafePrivacyPolicy=http://integr.al/privacy-policy";var bf="&tv={c:"+a9+",pingTime:"+bk+",time:"+bg+",type:"+by+Q+bv+bq+bp+bl+bt+bz+bs+e+",dtt:"+P+bx;bf+=((bn+"/dt?"+bm+bf+bu+bw+6).length>X)?",ov:1}":",ov:0}";var bi=bn+"/dt?"+bm+bf+bu+bw;var bh=a3();a.send(bi,function(){P=a3()-bh;});if(by===b.UNLOAD){aV=true;}}catch(bj){aG.add(q);throw bj;aL.error(bj);}}aL.groupEnd();};var aT;var j=function(bh){var bf;var Q=bh.length;var e=bh[Q-1];for(bf=0;bf<Q;bf++){var bg=bh[bf];if(bg.key.indexOf("g")!==-1){e=bg;}}return e;};var aB=function(){var bn;var bm=function(bq){var bp={a:"top.location.href",b:"parent.location.href",c:"parent.document.referrer",d:"window.location.href",e:"window.document.referrer",f:"jsref",g:"ffCheck -- firefox result",q:"ffCheck -- parent.parent.parent... result"};aL.groupCollapsed("Detection Results");var br="";for(var e in bq){bn=bq[e];br+=bn.key+": "+decodeURIComponent(bn.val)+"\n";}aL.log(br);aL.dir(bp);aL.groupEnd();};var bj=function(){var bp={g:"",q:""};try{bp.q=window.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href;}catch(br){var bq=br.message;var bs=bq.substring(bq.lastIndexOf("<")+1,bq.lastIndexOf(">"));if(typeof bs!=N&&bo()){bp.g=bs;}}return bp;};var bo=function(){var bq=3;var bp=6;var bt=13;var by=false;if(typeof window.navigator!==N&&typeof window.navigator.userAgent!==undefined){var br=window.navigator.userAgent;var e=window.navigator.userAgent.match(/Firefox\/([\.0-9]+)/);if(e!==null&&e.length==2){var bv=e[1];var bs=bv.split(".");var bw=bs[0];if(parseInt(bw,10)==bq){var bu=bs[1];if(parseInt(bu,10)<=bp){if(bs.length==3){var bx=bs[2];if(parseInt(bx,10)<=bt){by=true;}}else{by=true;}}}}}return by;};var bf=function(e){for(var bq in e){if(e.hasOwnProperty(bq)){var bp=e[bq];if(bp===""||bp==="null"||bp===N||bp===null||typeof bp===N){delete e[bq];}}}return e;};var bl=function(bq){var e={};var br,bs;for(bs in bq){if(bq.hasOwnProperty(bs)){br=bq[bs];if(typeof e[br]==N){e[br]=bs;}else{e[br]+=bs;}}}var bp={};for(bs in e){if(e.hasOwnProperty(bs)){br=e[bs];bp[br]=bs;}}return bp;};var bh={};try{bh.a=encodeURIComponent(top.location.href);}catch(bk){}try{bh.b=encodeURIComponent(parent.location.href);}catch(bk){}if(ae){try{bh.c=encodeURIComponent(parent.document.referrer);}catch(bk){}try{bh.e=encodeURIComponent(window.document.referrer);}catch(bk){}}try{bh.d=encodeURIComponent(window.location.href);}catch(bk){}try{bh.f=encodeURIComponent(a7.jsref);}catch(bk){}try{var bg=bj();bh.g=encodeURIComponent(bg.g);bh.q=encodeURIComponent(bg.q);}catch(bk){}bh=bf(bh);bh=bl(bh);var bi=[];for(var Q in bh){if(bh.hasOwnProperty(Q)){bi.push({key:Q,val:bh[Q]});}}bi.sort(function(bp,e){return(bp.val.length>e.val.length)?1:(bp.val.length<e.val.length)?-1:0;});bm(bi);return bi;};var aN=function(){var Q={},e=a3(),bj=true,bg=new aq();var bi=function(bk){if(bj!==bk){bj=bk;bg.run(bk);}};var bh=function(){var bk=function(){e=a3();window.webkitRequestAnimationFrame(bk);};window.webkitRequestAnimationFrame(bk);setInterval(function(){bi(a3()-e>100);},100);};var bf=function(){var bk=null;if(r(document.hidden)){bk=document.hidden;}else{if(r(document.mozHidden)){bk=document.mozHidden;}else{if(r(document.msHidden)){bk=document.msHidden;}else{if(r(document.webkitHidden)){bk=document.webkitHidden;}}}}if(bk!==null){bi(bk);}return bk;};Q.onHiddenChange=function(bk){bg.push(bk);};Q.isHidden=bf;if(bf()===null&&r(window.webkitRequestAnimationFrame)){bh();Q.isHidden=function(){return bj;};}return Q;}();var O=(function(){var e=[];var bi={sl:"n",gsl:"gn",fsl:"fn"},bf=0,bh,bo;var bm={i:0,o:0,n:0,pp:0,pm:0,gpp:0,gpm:0,gi:0,go:0,gn:0,fi:0,fo:0,fn:0};var bn=function(bs,br){var bq;if(bi.sl!=bk(bs.viewState)||!e.length){bq=new bl(bs,br);e.push(bq);bh=bs.viewState;}else{bq=new bl(bs,br);}return e[e.length-1];};var bk=function(bs,br){br=br||"";var bq={inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"};return br+bq[bs];};var bj=function(){i(bi).each(function(bs,br){var bq=!e.length?bo:bo-bf;bm[br]+=bq;});bf=bo;};var bg=function(br){var bq="";if(e.length){bq=i({slTimes:"{"+i(bm).toParams()+"}",slEvents:"["+e.slice(-br).join(",")+"]",slEventCount:e.length}).toParams();}else{aL.info("No events.");}return bq;};var Q=function(br,bq){if(bq!==br&&bq==="n"){bm[br]+=bm.n;}};var bp=function(bq){if(e.length){bj();}i(bq).each(function(bs,br){Q(br,bi[bs]);bi[bs]=br;});if(!e.length){bj();}};var bl=function(bs,br){var bq,bt={sl:bk(bs.viewState),fsl:bk(bs.fState||"na","f"),gsl:bk(bs.gState||"na","g")};bo=u();bp(bt);bt.t=bo;bq=i({toString:function(){return"{"+i(bt).toParams()+br+"}";},details:br,isInView:function(){return"inView|partialViewPlus".indexOf(bs.viewState)!==-1;}}).mixin(bt);i(bq).mixin(bs);return bq;};return{fastForward:function(){bo=u();bj();},registerLocation:bn,stringify:bg,currentLoc:bh};})();var ad=function(bf,bp,bo){var Q,e,bi;var bh=function(bq,br){return'<param name="'+bq+'" value="'+br+'"/>';};var bl=function(br,bq){return br+'="'+bq+'" ';};var bk=function(){var bv,bt=G(),bq=a7.cocaPuffsPath;bt.sub="static";bt.master=bt.master.split(":")[0];if(bq){bt.master=bq;bt.sub="";}var bu=bt+"/detector2.pix",bs=bh("allowscriptaccess","always"),br=bh("movie",bu)+bh("play","true")+bh("loop","true");if(l.browserIs("i")){bv=document.createElement("div");bv.innerHTML="<object "+bl("id","blag"+H)+bl("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000")+bl("type",aD)+bl("data",bu)+">"+br+bs+"</object>";Q=bv.firstChild;}else{Q=document.createElement("object");Q.data=bu;Q.type=aD;Q.innerHTML=bs;}Q.style.position="absolute";Q.style.width="1px";Q.style.opacity="0";Q.style.height="0px";return Q;};var bn=function(bq){bq.style.height=bi?"1px":"2px";bi=!bi;a5(function(){if(bm()){e=bq.isInView();}});};var bg=function(br,bq,bu){var bt=bk(),bs=bt.style;bs.left=bq+"px";bs.top=bu+"px";br.appendChild(bt);bs.height="1px";aN.onHiddenChange(function(bv){if(bv){bs.height="0px";}else{bn(bt);}});};var bj=function(){var bq;if(bm()){bq=Q.isInView();if(l.browserIs("w")&&bq!==e){bn(Q);}}return bm()&&bq;};var bm=function(){return Q&&typeof Q.isInView==="function";};bg(bf,bp,bo);return{isInView:bj,isNotReadyToReport:function(){return !bm();}};};var a4=function(bj,bh,bi){var bf=new bj(document.body,bh.width/2,bh.height/2);var bg,Q,bl=5,e=0;bi=bi||aM;bg=setInterval(function(){var bm=!bf.isNotReadyToReport();if(bm&&!Q){Q=true;bi();clearInterval(bg);}else{if(++e===bl||Q){clearInterval(bg);}}},50);var bk=function(){var bp=!bf.isNotReadyToReport();var bn=bf.isInView();var bm=bn?"inView":"outOfView";var bo=bn?100:0;if(bp&&!Q){Q=true;bi();}return{str:bp?bm:"na",pct:bp?bo:-1};};return{checkViewable:bk};};var bd=a7.thisScriptNode.parentNode;var K=null;var bb=false;var D=0;var az={SPAN:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v"};var o={LOCATION:"l",OBSTRUCTION:"o",FOCUS:"f"};var E=function(){var bm,bq,bn,bk="na";var bp=K;if(a7.mode=="jsli"){return{viewState:"na",embedded:ae};}try{bm=aI();bq=be();if(bm===-1||bq===-1){return{viewState:"na",embedded:ae,winDimensions:bm,adDimensions:bq};}else{var bi=an(bm.x,bm.x+bm.width,bq.x,bq.x+bq.width);var bg=an(bm.y,bm.y+bm.height,bq.y,bq.y+bq.height);var bj=(bi<=0||bq.width<=0)?0:T(bi/bq.width*100);var bh=(bg<=0||bq.width<=0)?0:T(bg/bq.height*100);bn=T(bj*bh/100);}}catch(bo){aG.add(al);aL.trace();aL.error(bo);}try{if(!aA){bk="na";}else{if(bn>=75){bk="inView";}else{if(bn<=25){bk="outOfView";}else{if(bn>=50){bk="partialViewPlus";}else{bk="partialViewMinus";}}}}}catch(bo){aG.add(au);aL.error(bo);}var bf=[];if(bk=="outOfView"){bf.push(o.LOCATION);}var Q=af(bq);if(Q===true){bk="outOfView";bf.push(o.OBSTRUCTION);Q=1;}else{if(Q===false){Q=0;}else{Q="na";}}var bl=aN.isHidden();if(bl===true){bk="outOfView";bf.push(o.FOCUS);bl=1;}else{if(bl===false){bl=0;}else{bl="na";}}if(K&&bp!==K){aL.log("New Engagement Node:",K);}return{winDimensions:bm,adDimensions:bq,viewState:bk,percentInView:bn,reason:bf.join("."),obstructed:Q,tabHidden:bl};};var aI=function(){var bk,bj,bm,bf;var bh,bl,Q,bg;try{if(s){bk=bj=0;bh=top;bl=bh.document;Q=bl.documentElement;bg=bl.getElementsByTagName("body")[0];if(r(bh.innerWidth)){bm=bh.innerWidth;bf=bh.innerHeight;}else{if(r(Q.clientWidth)){bm=Q.clientWidth;bf=Q.clientHeight;}else{if(r(bg.clientWidth)){bm=bg.clientWidth;bf=bg.clientHeight;}else{bm=0;bf=0;throw"cant find window size, set to 0";}}}}else{if(typeof window.screenX!=N){bk=window.screenX;}if(typeof window.screenY!=N){bj=window.screenY;}if(typeof window.outerWidth!=N){bm=window.outerWidth;}if(typeof window.outerHeight!=N){bf=window.outerHeight;}}}catch(bi){aG.add(k);aL.exception(bi);}var bn;if(isNaN(bk)||isNaN(bj)||isNaN(bm)||isNaN(bf)){bn=-1;}else{bn={x:T(bk),y:T(bj),width:T(bm),height:T(bf)};}return bn;};var be=function(){var bn,bm,bq,bh,Q,bo,bf;if(typeof bd.getBoundingClientRect!=N){bo=aW(bd);bo={x:T(bo.left),y:T(bo.top),width:T(bo.width),height:T(bo.height)};}if(ay&&!bb){bf=Video.findVideo();}if(ae){Q=az.IFRAME;try{if(s){var bp=aw(window);bn=bp.left;bm=bp.top;}else{if(l.browserIs("i")){var bg=function(e){bn=e.screenX-e.clientX;bm=e.screenY-e.clientY;};document.documentElement.attachEvent("onmousemove",bg);document.documentElement.fireEvent("onmousemove");document.documentElement.detachEvent("onmousemove",bg);}else{if(typeof window.mozInnerScreenX==N){bn=window.screenLeft;bm=window.screenTop;}else{bn=T(window.mozInnerScreenX);bm=T(window.mozInnerScreenY);}}}var bj=aK||I();if(typeof window.innerWidth!=N){bq=window.innerWidth;bh=window.innerHeight;}else{if(bj&&typeof bj.clientWidth!=N){bq=bj.clientWidth;bh=bj.clientHeight;if(bq===0&&bj.offsetWidth>0){bq=bj.offsetWidth;}if(bh===0&&bj.offsetHeight>0){bh=bj.offsetHeight;}}else{if(window.frameElement&&typeof window.frameElement.clientWidth!=N){bq=window.frameElement.clientWidth;bh=window.frameElement.clientHeight;}}}}catch(bk){aG.add(n);}}else{if(!bb){if(bf){Q=az.VIDEO;K=bf;bb=true;}else{Q=az.AD_HUNT;var br=M(bd);if(K&&K.parentNode!==bd){bd=K.parentNode;D=1;}if(aQ(br)>1){K=br;bb=true;}else{Q=az.SPAN;if(!K){K=document.createElement("span");i(K.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});K.innerHTML=".";bd.insertBefore(K,a7.thisScriptNode.nextSibling);}}}}var bi=aW(K);var bl=R(K);bn=bi.left;bm=bi.top;bq=bl.w<bi.width?bl.w:(bi.width||1);bh=bl.h<bi.height?bl.h:(bi.height||1);}var bs;if(isNaN(bn)||isNaN(bm)||isNaN(bq)||isNaN(bh)){bs=-1;}else{bs={x:T(bn),y:T(bm),width:T(bq),height:T(bh),method:Q,container:bo};}return bs;};var R=function(bf){var e=10000,Q=10000,bg;do{bf=bf.parentNode;if(bf.tagName.toUpperCase()!=="OBJECT"&&(bf.style&&bf.style.display!=="inline")){bg=aW(bf);e=bg.width<e?bg.width:e;Q=bg.height<Q?bg.height:Q;}}while(bf.parentNode!==document&&bf!==bd);return{w:T(e),h:T(Q)};};var M=function(bm){var bo="iframe,img,a,object,embed,div".split(",");var bj=[];var bk,Q=-1;var bi;for(bi=0,len=bo.length;bi<len;bi++){var bf=bo[bi];var bl=bm.getElementsByTagName(bf);if(bl.length){for(var bh=0,e=bl.length;bh<e;bh++){bj.push(bl[bh]);}}}if(bj.length){for(bi=0,len=bj.length;bi<len;bi++){var bn=bj[bi];var bg=aQ(bn);if(bg>Q){bk=bn;Q=bg;}}}if(typeof bk==N){return null;}else{if(typeof bk.nodeName!=N&&bk.nodeName=="DIV"){return M(bk);}else{return bk;}}};var aQ=function(bf){var Q=-1;if(bf){var e=aW(bf);Q=e.width*e.height;}return Q;};var aW=function(bf){var e={},Q=bf.getBoundingClientRect();if(typeof Q.width===N){e={width:Q.right-Q.left,height:Q.bottom-Q.top};}i(e).mixin(Q,true);return e;};var aw=function(bh,bk){if(typeof bk===N){bk={top:0,left:0};}var bj=bh.parent.document.getElementsByTagName("iframe");var bi;var bg=false;for(var Q=0,e=bj.length;Q<e;Q++){bi=bj[Q];if(bi.contentWindow==bh){bg=true;break;}}if(bg){var bf=aW(bi);bk.left+=bf.left;bk.top+=bf.top;if(bh!==top){aw(bh.parent,bk);}}return bk;};var af=function(bg){var e=null;if(bb&&!ae&&K&&bg&&typeof document.elementFromPoint!=N){var bf=Math.floor(bg.x+(bg.width/2));var Q=Math.floor(bg.y+(bg.height/2));var bh=document.elementFromPoint(bf,Q);if(bh!==null){e=bh!==K;}}return e;};var an=function(Q,e,bg,bf){return Math.min(e,bf)-Math.max(bg,Q);};var aV=false;var C=l.browserIs("w")?100:250;var ba=1000;var Y=function(){var Q=(a7.viewabilityDelay.indexOf("-")!==-1)?a7.viewabilityDelay.split("-"):[a7.viewabilityDelay],e=0;for(;e<Q.length;e++){Q[e]=Q[e]*ba;}return Q;}();aL.groupCollapsed("Engagement Settings");aL.log("pingTimes:",Y,"pingTime:",Y[0],"engagementCodes:",b);aL.groupEnd();var ar,a0=0,aP=0,V=U.on("consecutive")?ba:1,ac=u(),a2;var aU=U.on("forcecocoa"),aF=l.browserIs("g")||(l.browserIs("i")&&l.getDocumentMode()>=9&&U.on("rattie")),aS=ae&&s,B=ae&&!s;var aA=l.browserIs("g")||l.browserIs("i")||aS||!ae;var p=(aS&&aU)||(B&&aF&&aU)||(B&&!aF);var F=p&&U.on("cocoapuffs");var at=U.on("recordalternate");var aO=function(e){var bj,bg;var bf=function(){aO();if(U.on("viewabilityready")){am(null,b.VIEWABILITY_READY);}};var bi,bh,Q=u()-ac,bk=E();if(at){bk.gState=bk.viewState;}if(F){ar=ar||new a4(ad,bk.adDimensions,bf)||{};bi=ar.checkViewable();if(bk.tabHidden!==1||bi.str==="na"){bk.viewState=bi.str;bk.percentInView=bi.pct;}}else{if(p){bk.viewState="na";bk.percentInView=-1;}}if(at){if(!a2&&!e){a2=F?ar:new a4(ad,bk.adDimensions);}bk.fState=e?"na":a2.checkViewable().str;}if(ay){bg=Video.forceViewState();if(bg){bk.viewState=bg;}}bj=O.registerLocation(bk,a1(bk));if(bj.isInView()){aP+=Q;bh=aP-Q<V;if(aP>V){a0+=bh?aP:Q;}}else{aP=0;}if(Y.length&&a0>=Y[0]){am(null,b.PING);Y.shift();}ac=u();return bj;};var aZ=function(){var Q=false;var e;if((a7.allowViewability==="true")&&typeof document.addEventListener=="function"){a8=false;if(document.readyState=="complete"||document.readyState=="loaded"||document.readyState=="interactive"){a5(ab);}else{document.addEventListener("DOMContentLoaded",ab,false);}}else{e=setInterval(function(){if(document.body){aK=I();clearInterval(e);ab();}},50);}};var I=function(){return(document.documentElement&&(typeof document.documentElement.clientWidth!==N)&&document.documentElement)||document.body;};var ab=function(e){aL.info("Page ready.");a8=true;var bf=false;var Q=function(){if(!bf){bf=true;am(null,b.VIDEO_EVENTS);}};if(y){aO();setInterval(aO,C);ah.on("adStopped",Q);aa(window,"beforeunload",am,false);if(ay){aa(window,"beforeunload",Q,false);}}};var a1=function(bl){var bo="";try{var bg=function(e){if(typeof e!==N&&typeof e.x!==N&&typeof e.y!==N&&typeof e.width!==N&&typeof e.height!==N){return e.x+"."+e.y+"."+e.width+"."+e.height;}return"";};var bk=function(e,bp){return","+e+":"+bp;};var bi=bl.winDimensions;if(typeof bi!==N&&bi!==-1){try{bo=bk("wc",bg(bi));}catch(bj){throw"wc";}}var bn=bl.adDimensions;if(typeof bn!==N&&bn!==-1){try{bo+=bk("ac",bg(bn));if(typeof bn.method==="string"){bo+=bk("am",bn.method);}if(typeof bn.container==="object"){bo+=bk("cc",bg(bn.container));}}catch(bj){throw"ad";}}var bh={piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"};for(var bm in bh){try{if(bh.hasOwnProperty(bm)){var bf=bh[bm];if(typeof bl[bf]!==N){bo+=bk(bm,bl[bf]);}}}catch(bj){throw bm;}}}catch(bj){aG.add(x);var Q=(typeof bj==="string")?bj:(typeof bj.type!=="undefined")?bj.type:"unk";bo+=",detErr:"+Q;}return bo;};var av=(function(){var Q=function(bh){try{var bf,bg=e(bh),bj=bg&&bg.length&&bg.join("|"),bi=a7.exchList;if(bj){bf=i(bi).map(function(bl,bm){return(bj.indexOf(bc.rot(bm))>=0)?bl:undefined;});if(bf.length){t.addItem({output:bf.join(".")},"ex",{type:"UFO"});}}}catch(bk){aG.add(ax);}};var e=function(bg){var bf=[];if(bg&&bg instanceof Array){bf=i(bg).map(function(bi,bh){return bh.val;});bf.push(a7.adsafeSrc,a7.requrl,a7.reqquery);}else{throw new Error("Unexpected data type in ExchangeParser.getUrlList");}return bf;};return{parse:Q};})();var f={time:-1,enterTime:null,min:null,max:null,trackMaxMin:null,mouseLeave:function(Q){var e=new Date().getTime()-f.enterTime;f.time+=e;ai("mousemove",f.move);aL.log("mouseLeave - time:",e,f.time,"bounding box:",f.getBoundingBoxString(),Q);},mouseEnter:function(e){aL.log("mouseEnter",e);if(f.time===-1){f.time=0;}f.enterTime=new Date().getTime();aa(window,"mousemove",f.move);},getBoundingBoxString:function(){var e;if(f.min&&f.max){e=f.min.x+"-"+f.min.y+"-"+f.max.x+"-"+f.max.y;}else{e="-1";}return e;},move:function(e){if(f.trackMaxMin===null){f.trackMaxMin=f.min&&f.max&&typeof e.clientX!=N&&typeof e.clientY!=N;}if(f.trackMaxMin){if(e.clientX<f.min.x){f.min.x=e.clientX;}if(e.clientY<f.min.y){f.min.y=e.clientY;}if(e.clientX>f.max.x){f.max.x=e.clientX;}if(e.clientY>f.max.y){f.max.y=e.clientY;}}},init:function(){if(U.on("mousetrack")){if(ae){aa(window,"mouseenter",this.mouseEnter);aa(window,"mouseleave",this.mouseLeave);if(typeof(window.innerWidth)!=N&&typeof(window.innerHeight)!=N){this.min={x:window.innerWidth,y:window.innerHeight};this.max={x:0,y:0};}}}}};var aY=(function(){var bg=function(bi){var bh=bf(bi);aJ.sendImpression(bh);};var bf=function(bi){var bh=aJ.baseUrl;bh+=Q(bi,bh.length);bh+=e(bh.length);return bh+aJ.macroUrl;};var Q=function(bl,bh){if(bh>=X){return"";}var bm,bk,bj=[];var bi=function(bo,bp){var bq=bp.join("&").length;return bo.length+bq+bh<=X;};var bn=function(bo){return bo.key.indexOf("q")!==-1||bo.key.indexOf("g")!==-1;};bm=i(bl).map(function(bp,bo){if(bn(bo)){return bo;}});bk=i(bl).map(function(bp,bo){if(!bn(bo)){return bo;}});i(bm.concat(bk)).each(function(bq,bo){var bp="adsafe_url="+bo.val+"&adsafe_type="+bo.key;if(bi(bp,bj)){bj.push(bp);}});return bj.join("&");};var e=function(bl){var bk=0,bq="&adsafe_jsinfo=",bm=5,bp=p?{viewState:"na"}:aO(true),bh="c:"+a9+",sl:"+bp.viewState+",em:"+ae+",fr:"+s,bj=["pt:"+a7.viewabilityDelay+(bp.viewState!="na"?a1(bp):""),i(l.params()).toParams(),"id:"+a7.asid];t.iterate(function(bs,br){aL.pm("AdTalk initial call: "+br.output());bj.push(bs+":"+br.output());});if(aG.toString()){bj.push("e:"+aG.toString());}bj.push(U.output());bj.push("uf:"+((F)?1:0));bj.push("tt:"+a7.mode);bj.push("uid:"+aX.unq);bj.push("v:"+L);bj.push("sp:"+(a7.jsDoSplit==="true"?1:0));bj.push("et:"+(a3()-a7.birthdate));var bi=function(br){if(bq.length+bl+br.length+bm<=X){return true;}else{return false;}};var bn=function(br){if(br){return","+br;}};if(bi(bh)){bq+=bn(bh);i(bj).each(function(br,bs){if(bs.indexOf("id:")!==-1&&bi(bs)){bq+=bn(bs);y=true;}else{if(bi(bs)){bq+=bn(bs);}else{bk+=1;}}});var bo=(a7.jsDoSplit==="true")?1:0;bn("sp:"+bo);}return bq+=",ov:"+bk;};return{send:bg};}());var ag=(typeof JSON!==N&&typeof window.postMessage!==N);var W=function(){var Q={};var bm=[];if(!ag){return;}var bh=[];var bg=function(bp){var bn,bo,bq;bp=bp||a7;if(bp.reqquery){bn=bp.reqquery.split("anId=")[1].split("&")[0];}else{bo=bp.adsafeSrc.split("/");bn=bo[5]+"-"+bo[6];}bq={adId:bn,adSafeId:bp.asid};bh.push(bq);return bq;};var bf=function(){var bo=[];var bn={};var bq={noMe:true};var br=function(bs){bo.push(bs);bn[bs.pageId]=bs;if(bs.isMe){bq=bs;}};var bp=function(){var bt,bs,bw,bv,bu=[];for(bt=0;bt<bo.length;bt++){bw=bo[bt];if(bw.isLeaf||bw.isMe||bw.selfDescription!==undefined){bv="";for(bs=0;bs<bw.position.length;bs++){bv+=(Number(bw.position[bs])+1).toString(36);}bv+=(bw.isMe)?"*":"";bv+=(bw.adProxies.length!==0)?"."+bw.adProxies[0].adId:"";bu.push(bv);}}return ak(bq.unifiedId,62)+"+"+bu.join("|");};return{addFrame:br,list:bo,lookup:bn,me:function(){return bq;},output:bp};};bf=new bf();var bl=function(bq,bp){var bn=bq===window;var bo={position:bp.slice(0),pageId:bp.join("-"),domObj:function(){return bq;},isMe:bn,isLeaf:!bq.frames.length,adProxies:bn?bh:[],selfDescription:undefined,unifiedId:H};bo.toString=function(){return JSON.stringify(bo);};bo.addDescription=function(br){bo.selfDescription=br;bo.adProxies=br.adProxies;};bf.addFrame(bo);return bo;};var e=function(){var bn=function(bt,bo){var br=bo.length,bq=bt.frames,bs=new bl(bt,bo);if(!bs.isLeaf){for(var bp=0;bp<bq.length;bp++){bo[br]=bp;bn(bq[bp],bo);}bo.pop();}};return{start:function(){bn(top,[0]);}};};e=new e();var bi=function(bp){var bo=function(bq,br){br=br||"*";bp.getMessageTime=new Date().getTime();delete bn.updateMessage;delete bn.sendMessage;bq.postMessage(JSON.stringify(bn),br);};var bn={srcId:a7.asid,srcKey:a7.asid.split("-")[2],srcStart:H,getMessageTime:undefined,replyTo:document.location,sendMessage:bo,updateMessage:function(bq){bp=bq(bp);},messageContent:bp||{}};return bn;};var bj=function(){var bo=[];var bp=function(){aa(window,"message",function(bw){var bs,bv,bt,br,bu=bf.me();try{bs=JSON.parse(bw.data);bv=bs.messageContent;if(a7.asid.split("-")[2]!==bs.srcKey||!bs.hasOwnProperty("messageContent")){return;}if(bv.unifiedId<bu.unifiedId){bu.unifiedId=bv.unifiedId;}}catch(bx){return;}bo.push(bs);try{if(bv.expectedPageId!==bf.me().pageId){aG.add(A);}else{br=bf.lookup[bv.self.pageId];if(br===undefined||br.selfDescription===undefined){br=br||new bl(bw.source,bv.self.pageId.split("-"));bq(br);}br.addDescription(bv.self);}}catch(bx){aG.add(A);}});};var bq=function(br){var bt=bf.me();var bs=new bi({self:bt,expectedPageId:br.pageId,unifiedId:bt.unifiedId});bs.sendMessage(br.domObj());};var bn=function(){var bs,br;for(bs=0;bs<bf.list.length;bs++){br=bf.list[bs];if(!br.isMe){bq(br);}}};return{sendMessages:bn,listen:bp};};bj=new bj();var bk=function(){var bn=new bg();};return{sendMessages:bj.sendMessages,listen:bj.listen,findFrames:e.start,createAdProxy:function(bo){var bn=new bg(bo);return bn;},getFrameStore:function(){return bf;}};}();var J=function(){var Q=false;try{if(typeof a7!=N&&typeof a7.killPhrases!=N&&a7.killPhrases!==""){var bj=(a7.adsafeSrc)?a7.adsafeSrc:a7.requrl+a7.reqquery,bf=a7.killPhrases.split(","),bh="";i(bf).each(function(bk,e){e=decodeURIComponent(bf[bk]).replace(/^\s+|\s+$/g,"");if(bj.search(e)!==-1){bh=e;Q=true;}});var bg=(Q)?'found ("'+bh+'").':"not found.";aL.log('Kill phrases ("'+a7.killPhrases+'") '+bg);}else{aL.log("Kill phrase empty or not found.");}}catch(bi){aG.add(aj);}return Q;};var v=function(){var bg;var Q;if(!J()){if(a7.useAdTalk==="true"&&ag){try{W.createAdProxy(a7);W.findFrames();W.listen();W.sendMessages();t.addItem(W.getFrameStore(),"fm");}catch(bh){aG.add(c);}}if(a7.minimizeCalls!=="true"){aZ();}f.init();aT=aB();var bf=z().getProps();i(bf).each(function(bi,e){t.addItem({output:e},bi,{type:"UFO"});});aY.send(aT);if(a7.adTalkDtCall==="true"&&ag){bg=new Date().getTime();a5(function(){a5(function(){var e={output:new Date().getTime()-bg};t.addItem(e,"sinceFw",{type:b.ADTALK});if(typeof a8!=="undefined"){t.addItem({output:a8},"readyFired",{type:b.ADTALK});}if(w){aL.inDoc(W.getFrameStore().output(),2000);}if(a7.minimizeCalls!=="true"){am(null,b.ADTALK);}});});}}};v();a7.NS={Output:t};};adsafeVisParams.initialize(adsafeVisParams);
		

