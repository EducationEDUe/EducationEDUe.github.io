function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}((function(t){var e=/\+/g;function i(t){return o.raw?t:encodeURIComponent(t)}function n(t){return i(o.json?JSON.stringify(t):String(t))}function s(i,n){var s=o.raw?i:function(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(e," "))}catch(t){return}try{return o.json?JSON.parse(t):t}catch(t){}}(i);return t.isFunction(n)?n(s):s}var o=t.cookie=function(e,a,r){if(void 0!==a&&!t.isFunction(a)){if("number"==typeof(r=t.extend({},o.defaults,r)).expires){var l=r.expires,h=r.expires=new Date;h.setDate(h.getDate()+l)}return document.cookie=[i(e),"=",n(a),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}for(var u,c=e?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,f=d.length;p<f;p++){var m=d[p].split("="),g=(u=m.shift(),o.raw?u:decodeURIComponent(u)),v=m.join("=");if(e&&e===g){c=s(v,a);break}e||void 0===(v=s(v))||(c[g]=v)}return c};o.defaults={},t.removeCookie=function(e,i){return void 0!==t.cookie(e)&&(t.cookie(e,"",t.extend({},i,{expires:-1})),!0)}})),function(t,e){function i(i,n){function s(t){return ht.preferFlash&&it&&!ht.ignoreFlash&&ht.flash[t]!==e&&ht.flash[t]}function o(t){return function(e){var i=this._s;return i&&i._a?t.call(this,e):null}}this.setupOptions={url:i||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1e3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"},this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100},this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null},this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null},this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}},this.movieID="sm2-container",this.id=n||"sm2movie",this.debugID="soundmanager-debug",this.debugURLParam=/([#?&])debug=1/i,this.versionNumber="V2.97a.20150601",this.altURL=this.movieURL=this.version=null,this.enabled=this.swfLoaded=!1,this.oMC=null,this.sounds={},this.soundIDs=[],this.didFlashBlock=this.muted=!1,this.filePattern=null,this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i},this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1},this.sandbox={},this.html5={usingFlash:null},this.flash={},this.ignoreFlash=this.html5Only=!1;var a,r,l,h,u,c,d,p,f,m,g,v,y,b,_,w,x,C,k,T,D,A,S,M,I,P,O,E,N,H,L,F,z,R,W,j,q,B,Y,U,Q,V,K,$,X,G,J,Z,tt,et,it,nt,st,ot,at,rt,lt,ht=this,ut=null,ct=null,dt=navigator.userAgent,pt=t.location.href.toString(),ft=document,mt=[],gt=!1,vt=!1,yt=!1,bt=!1,_t=!1,wt=null,xt=null,Ct=!1,kt=!1,Tt=0,Dt=null,At=[],St=null,Mt=Array.prototype.slice,It=!1,Pt=0,Ot=dt.match(/(ipad|iphone|ipod)/i),Et=dt.match(/android/i),Nt=dt.match(/msie/i),Ht=dt.match(/webkit/i),Lt=dt.match(/safari/i)&&!dt.match(/chrome/i),Ft=dt.match(/opera/i),zt=dt.match(/(mobile|pre\/|xoom)/i)||Ot||Et,Rt=!pt.match(/usehtml5audio/i)&&!pt.match(/sm2\-ignorebadua/i)&&Lt&&!dt.match(/silk/i)&&dt.match(/OS X 10_6_([3-7])/i),Wt=ft.hasFocus!==e?ft.hasFocus():null,jt=Lt&&(ft.hasFocus===e||!ft.hasFocus()),qt=!jt,Bt=/(mp3|mp4|mpa|m4a|m4b)/i,Yt=ft.location?ft.location.protocol.match(/http/i):null,Ut=Yt?"":"http://",Qt=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,Vt="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),Kt=new RegExp("\\.("+Vt.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.useAltURL=!Yt;try{lt=Audio!==e&&(Ft&&opera!==e&&10>opera.version()?new Audio(null):new Audio).canPlayType!==e}catch(t){lt=!1}this.hasHTML5=lt,this.setup=function(t){var i=!ht.url;return t!==e&&yt&&St&&ht.ok(),f(t),It||(zt?ht.setupOptions.ignoreMobileRestrictions&&!ht.setupOptions.forceUseGlobalHTML5Audio||(At.push(k.globalHTML5),It=!0):ht.setupOptions.forceUseGlobalHTML5Audio&&(At.push(k.globalHTML5),It=!0)),!rt&&zt&&(ht.setupOptions.ignoreMobileRestrictions?At.push(k.ignoreMobile):(ht.setupOptions.useHTML5Audio=!0,ht.setupOptions.preferFlash=!1,Ot?ht.ignoreFlash=!0:(Et&&!dt.match(/android\s2\.3/i)||!Et)&&(It=!0))),t&&(i&&S&&t.url!==e&&ht.beginDelayedInit(),S||t.url===e||"complete"!==ft.readyState||setTimeout(D,1)),rt=!0,ht},this.supported=this.ok=function(){return St?yt&&!bt:ht.useHTML5Audio&&ht.hasHTML5},this.getMovie=function(e){return r(e)||ft[e]||t[e]},this.createSound=function(t,i){function n(){return s=R(s),ht.sounds[s.id]=new a(s),ht.soundIDs.push(s.id),ht.sounds[s.id]}var s,o=null;if(!yt||!ht.ok())return!1;if(i!==e&&(t={id:t,url:i}),(s=p(t)).url=U(s.url),s.id===e&&(s.id=ht.setupOptions.idPrefix+Pt++),j(s.id,!0))return ht.sounds[s.id];if(K(s))(o=n())._setup_html5(s);else{if(ht.html5Only||ht.html5.usingFlash&&s.url&&s.url.match(/data\:/i))return n();8<c&&null===s.isMovieStar&&(s.isMovieStar=!!(s.serverURL||s.type&&s.type.match(Qt)||s.url&&s.url.match(Kt))),s=W(s,void 0),o=n(),8===c?ct._createSound(s.id,s.loops||1,s.usePolicyFile):(ct._createSound(s.id,s.url,s.usePeakData,s.useWaveformData,s.useEQData,s.isMovieStar,!!s.isMovieStar&&s.bufferTime,s.loops||1,s.serverURL,s.duration||null,s.autoPlay,!0,s.autoLoad,s.usePolicyFile),s.serverURL||(o.connected=!0,s.onconnect&&s.onconnect.apply(o))),s.serverURL||!s.autoLoad&&!s.autoPlay||o.load(s)}return!s.serverURL&&s.autoPlay&&o.play(),o},this.destroySound=function(t,e){if(!j(t))return!1;var i,n=ht.sounds[t];for(n.stop(),n._iO={},n.unload(),i=0;i<ht.soundIDs.length;i++)if(ht.soundIDs[i]===t){ht.soundIDs.splice(i,1);break}return e||n.destruct(!0),delete ht.sounds[t],!0},this.load=function(t,e){return!!j(t)&&ht.sounds[t].load(e)},this.unload=function(t){return!!j(t)&&ht.sounds[t].unload()},this.onposition=this.onPosition=function(t,e,i,n){return!!j(t)&&ht.sounds[t].onposition(e,i,n)},this.clearOnPosition=function(t,e,i){return!!j(t)&&ht.sounds[t].clearOnPosition(e,i)},this.start=this.play=function(t,e){var i=null,n=e&&!(e instanceof Object);if(!yt||!ht.ok())return!1;if(j(t,n))n&&(e={url:e});else{if(!n)return!1;n&&(e={url:e}),e&&e.url&&(e.id=t,i=ht.createSound(e).play())}return null===i&&(i=ht.sounds[t].play(e)),i},this.setPosition=function(t,e){return!!j(t)&&ht.sounds[t].setPosition(e)},this.stop=function(t){return!!j(t)&&ht.sounds[t].stop()},this.stopAll=function(){for(var t in ht.sounds)ht.sounds.hasOwnProperty(t)&&ht.sounds[t].stop()},this.pause=function(t){return!!j(t)&&ht.sounds[t].pause()},this.pauseAll=function(){var t;for(t=ht.soundIDs.length-1;0<=t;t--)ht.sounds[ht.soundIDs[t]].pause()},this.resume=function(t){return!!j(t)&&ht.sounds[t].resume()},this.resumeAll=function(){var t;for(t=ht.soundIDs.length-1;0<=t;t--)ht.sounds[ht.soundIDs[t]].resume()},this.togglePause=function(t){return!!j(t)&&ht.sounds[t].togglePause()},this.setPan=function(t,e){return!!j(t)&&ht.sounds[t].setPan(e)},this.setVolume=function(t,i){var n,s;if(t===e||isNaN(t)||i!==e)return!!j(t)&&ht.sounds[t].setVolume(i);for(n=0,s=ht.soundIDs.length;n<s;n++)ht.sounds[ht.soundIDs[n]].setVolume(t)},this.mute=function(t){var e=0;if(t instanceof String&&(t=null),t)return!!j(t)&&ht.sounds[t].mute();for(e=ht.soundIDs.length-1;0<=e;e--)ht.sounds[ht.soundIDs[e]].mute();return ht.muted=!0},this.muteAll=function(){ht.mute()},this.unmute=function(t){if(t instanceof String&&(t=null),t)return!!j(t)&&ht.sounds[t].unmute();for(t=ht.soundIDs.length-1;0<=t;t--)ht.sounds[ht.soundIDs[t]].unmute();return ht.muted=!1,!0},this.unmuteAll=function(){ht.unmute()},this.toggleMute=function(t){return!!j(t)&&ht.sounds[t].toggleMute()},this.getMemoryUse=function(){var t=0;return ct&&8!==c&&(t=parseInt(ct._getMemoryUse(),10)),t},this.disable=function(i){var n;if(i===e&&(i=!1),bt)return!1;for(bt=!0,n=ht.soundIDs.length-1;0<=n;n--)E(ht.sounds[ht.soundIDs[n]]);return d(i),tt.remove(t,"load",y),!0},this.canPlayMIME=function(t){var e;return ht.hasHTML5&&(e=$({type:t})),!e&&St&&(e=t&&ht.ok()?!!(8<c&&t.match(Qt)||t.match(ht.mimePattern)):null),e},this.canPlayURL=function(t){var e;return ht.hasHTML5&&(e=$({url:t})),!e&&St&&(e=t&&ht.ok()?!!t.match(ht.filePattern):null),e},this.canPlayLink=function(t){return!(t.type===e||!t.type||!ht.canPlayMIME(t.type))||ht.canPlayURL(t.href)},this.getSoundById=function(t,e){return t?ht.sounds[t]:null},this.onready=function(e,i){if("function"!=typeof e)throw L("needFunction","onready");return i||(i=t),g("onready",e,i),v(),!0},this.ontimeout=function(e,i){if("function"!=typeof e)throw L("needFunction","ontimeout");return i||(i=t),g("ontimeout",e,i),v({type:"ontimeout"}),!0},this._wD=this._writeDebug=function(t,e){return!0},this._debug=function(){},this.reboot=function(e,i){var n,s,o;for(n=ht.soundIDs.length-1;0<=n;n--)ht.sounds[ht.soundIDs[n]].destruct();if(ct)try{Nt&&(xt=ct.innerHTML),wt=ct.parentNode.removeChild(ct)}catch(t){}if(xt=wt=St=ct=null,ht.enabled=S=yt=Ct=kt=gt=vt=bt=It=ht.swfLoaded=!1,ht.soundIDs=[],ht.sounds={},Pt=0,rt=!1,e)mt=[];else for(n in mt)if(mt.hasOwnProperty(n))for(s=0,o=mt[n].length;s<o;s++)mt[n][s].fired=!1;return ht.html5={usingFlash:null},ht.flash={},ht.html5Only=!1,ht.ignoreFlash=!1,t.setTimeout((function(){i||ht.beginDelayedInit()}),20),ht},this.reset=function(){return ht.reboot(!0,!0)},this.getMoviePercent=function(){return ct&&"PercentLoaded"in ct?ct.PercentLoaded():null},this.beginDelayedInit=function(){_t=!0,D(),setTimeout((function(){return!kt&&(I(),T(),kt=!0)}),20),b()},this.destruct=function(){ht.disable(!0)},a=function(t){var i,n,s,o,a,r,l,h,u,d,f,m=this,g=!1,v=[],y=0,b=null;n=i=null,this.sID=this.id=t.id,this.url=t.url,this._iO=this.instanceOptions=this.options=p(t),this.pan=this.options.pan,this.volume=this.options.volume,this.isHTML5=!1,this._a=null,f=!this.url,this.id3={},this._debug=function(){},this.load=function(t){var i;if(t!==e?m._iO=p(t,m.options):(t=m.options,m._iO=t,b&&b!==m.url&&(m._iO.url=m.url,m.url=null)),m._iO.url||(m._iO.url=m.url),m._iO.url=U(m._iO.url),!(i=m.instanceOptions=m._iO).url&&!m.url)return m;if(i.url===m.url&&0!==m.readyState&&2!==m.readyState)return 3===m.readyState&&i.onload&&at(m,(function(){i.onload.apply(m,[!!m.duration])})),m;if(m.loaded=!1,m.readyState=1,m.playState=0,m.id3={},K(i))m._setup_html5(i)._called_load||(m._html5_canplay=!1,m.url!==i.url&&(m._a.src=i.url,m.setPosition(0)),m._a.autobuffer="auto",m._a.preload="auto",m._a._called_load=!0);else{if(ht.html5Only||m._iO.url&&m._iO.url.match(/data\:/i))return m;try{m.isHTML5=!1,m._iO=W(R(i)),m._iO.autoPlay&&(m._iO.position||m._iO.from)&&(m._iO.autoPlay=!1),i=m._iO,8===c?ct._load(m.id,i.url,i.stream,i.autoPlay,i.usePolicyFile):ct._load(m.id,i.url,!!i.stream,!!i.autoPlay,i.loops||1,!!i.autoLoad,i.usePolicyFile)}catch(t){P({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}return m.url=i.url,m},this.unload=function(){return 0!==m.readyState&&(m.isHTML5?(r(),m._a&&(m._a.pause(),b=G(m._a))):8===c?ct._unload(m.id,"about:blank"):ct._unload(m.id),s()),m},this.destruct=function(t){m.isHTML5?(r(),m._a&&(m._a.pause(),G(m._a),It||a(),m._a._s=null,m._a=null)):(m._iO.onfailure=null,ct._destroySound(m.id)),t||ht.destroySound(m.id,!0)},this.start=this.play=function(t,i){var n,s,o,a,r;if(s=!0,s=null,i=i===e||i,t||(t={}),m.url&&(m._iO.url=m.url),m._iO=p(m._iO,m.options),m._iO=p(t,m._iO),m._iO.url=U(m._iO.url),m.instanceOptions=m._iO,!m.isHTML5&&m._iO.serverURL&&!m.connected)return m.getAutoPlay()||m.setAutoPlay(!0),m;if(K(m._iO)&&(m._setup_html5(m._iO),l()),1!==m.playState||m.paused||((n=m._iO.multiShot)||(m.isHTML5&&m.setPosition(m._iO.position),s=m)),null!==s)return s;if(t.url&&t.url!==m.url&&(m.readyState||m.isHTML5||8!==c||!f?m.load(m._iO):f=!1),m.loaded||(0===m.readyState?(m.isHTML5||ht.html5Only?m.isHTML5?m.load(m._iO):s=m:(m._iO.autoPlay=!0,m.load(m._iO)),m.instanceOptions=m._iO):2===m.readyState&&(s=m)),null!==s)return s;if(!m.isHTML5&&9===c&&0<m.position&&m.position===m.duration&&(t.position=0),m.paused&&0<=m.position&&(!m._iO.serverURL||0<m.position))m.resume();else{if(m._iO=p(t,m._iO),(!m.isHTML5&&null!==m._iO.position&&0<m._iO.position||null!==m._iO.from&&0<m._iO.from||null!==m._iO.to)&&0===m.instanceCount&&0===m.playState&&!m._iO.serverURL){if(n=function(){m._iO=p(t,m._iO),m.play(m._iO)},m.isHTML5&&!m._html5_canplay?(m.load({_oncanplay:n}),s=!1):m.isHTML5||m.loaded||m.readyState&&2===m.readyState||(m.load({onload:n}),s=!1),null!==s)return s;m._iO=d()}(!m.instanceCount||m._iO.multiShotEvents||m.isHTML5&&m._iO.multiShot&&!It||!m.isHTML5&&8<c&&!m.getAutoPlay())&&m.instanceCount++,m._iO.onposition&&0===m.playState&&h(m),m.playState=1,m.paused=!1,m.position=m._iO.position===e||isNaN(m._iO.position)?0:m._iO.position,m.isHTML5||(m._iO=W(R(m._iO))),m._iO.onplay&&i&&(m._iO.onplay.apply(m),g=!0),m.setVolume(m._iO.volume,!0),m.setPan(m._iO.pan,!0),m.isHTML5?2>m.instanceCount?(l(),s=m._setup_html5(),m.setPosition(m._iO.position),s.play()):(o=new Audio(m._iO.url),a=function(){tt.remove(o,"ended",a),m._onfinish(m),G(o),o=null},r=function(){tt.remove(o,"canplay",r);try{o.currentTime=m._iO.position/1e3}catch(t){}o.play()},tt.add(o,"ended",a),m._iO.volume!==e&&(o.volume=Math.max(0,Math.min(1,m._iO.volume/100))),m.muted&&(o.muted=!0),m._iO.position?tt.add(o,"canplay",r):o.play()):(s=ct._start(m.id,m._iO.loops||1,9===c?m.position:m.position/1e3,m._iO.multiShot||!1),9!==c||s||m._iO.onplayerror&&m._iO.onplayerror.apply(m))}return m},this.stop=function(t){var e=m._iO;return 1===m.playState&&(m._onbufferchange(0),m._resetOnPosition(0),m.paused=!1,m.isHTML5||(m.playState=0),u(),e.to&&m.clearOnPosition(e.to),m.isHTML5?m._a&&(t=m.position,m.setPosition(0),m.position=t,m._a.pause(),m.playState=0,m._onTimer(),r()):(ct._stop(m.id,t),e.serverURL&&m.unload()),m.instanceCount=0,m._iO={},e.onstop&&e.onstop.apply(m)),m},this.setAutoPlay=function(t){m._iO.autoPlay=t,m.isHTML5||(ct._setAutoPlay(m.id,t),t&&(m.instanceCount||1!==m.readyState||m.instanceCount++))},this.getAutoPlay=function(){return m._iO.autoPlay},this.setPosition=function(t){t===e&&(t=0);var i=m.isHTML5?Math.max(t,0):Math.min(m.duration||m._iO.duration,Math.max(t,0));if(m.position=i,t=m.position/1e3,m._resetOnPosition(m.position),m._iO.position=i,m.isHTML5){if(m._a){if(m._html5_canplay){if(m._a.currentTime!==t)try{m._a.currentTime=t,(0===m.playState||m.paused)&&m._a.pause()}catch(t){}}else if(t)return m;m.paused&&m._onTimer(!0)}}else t=9===c?m.position:t,m.readyState&&2!==m.readyState&&ct._setPosition(m.id,t,m.paused||!m.playState,m._iO.multiShot);return m},this.pause=function(t){return m.paused||0===m.playState&&1!==m.readyState||(m.paused=!0,m.isHTML5?(m._setup_html5().pause(),r()):(t||t===e)&&ct._pause(m.id,m._iO.multiShot),m._iO.onpause&&m._iO.onpause.apply(m)),m},this.resume=function(){var t=m._iO;return m.paused?(m.paused=!1,m.playState=1,m.isHTML5?(m._setup_html5().play(),l()):(t.isMovieStar&&!t.serverURL&&m.setPosition(m.position),ct._pause(m.id,t.multiShot)),!g&&t.onplay?(t.onplay.apply(m),g=!0):t.onresume&&t.onresume.apply(m),m):m},this.togglePause=function(){return 0===m.playState?(m.play({position:9!==c||m.isHTML5?m.position/1e3:m.position}),m):(m.paused?m.resume():m.pause(),m)},this.setPan=function(t,i){return t===e&&(t=0),i===e&&(i=!1),m.isHTML5||ct._setPan(m.id,t),m._iO.pan=t,i||(m.pan=t,m.options.pan=t),m},this.setVolume=function(t,i){return t===e&&(t=100),i===e&&(i=!1),m.isHTML5?m._a&&(ht.muted&&!m.muted&&(m.muted=!0,m._a.muted=!0),m._a.volume=Math.max(0,Math.min(1,t/100))):ct._setVolume(m.id,ht.muted&&!m.muted||m.muted?0:t),m._iO.volume=t,i||(m.volume=t,m.options.volume=t),m},this.mute=function(){return m.muted=!0,m.isHTML5?m._a&&(m._a.muted=!0):ct._setVolume(m.id,0),m},this.unmute=function(){m.muted=!1;var t=m._iO.volume!==e;return m.isHTML5?m._a&&(m._a.muted=!1):ct._setVolume(m.id,t?m._iO.volume:m.options.volume),m},this.toggleMute=function(){return m.muted?m.unmute():m.mute()},this.onposition=this.onPosition=function(t,i,n){return v.push({position:parseInt(t,10),method:i,scope:n!==e?n:m,fired:!1}),m},this.clearOnPosition=function(t,e){var i;if(t=parseInt(t,10),isNaN(t))return!1;for(i=0;i<v.length;i++)t!==v[i].position||e&&e!==v[i].method||(v[i].fired&&y--,v.splice(i,1))},this._processOnPosition=function(){var t,e;if(!(t=v.length)||!m.playState||y>=t)return!1;for(--t;0<=t;t--)!(e=v[t]).fired&&m.position>=e.position&&(e.fired=!0,y++,e.method.apply(e.scope,[e.position]));return!0},this._resetOnPosition=function(t){var e,i;if(!(e=v.length))return!1;for(--e;0<=e;e--)(i=v[e]).fired&&t<=i.position&&(i.fired=!1,y--);return!0},d=function(){var t,e,i=m._iO,n=i.from,s=i.to;return e=function(){m.clearOnPosition(s,e),m.stop()},t=function(){null===s||isNaN(s)||m.onPosition(s,e)},null===n||isNaN(n)||(i.position=n,i.multiShot=!1,t()),i},h=function(){var t,e=m._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&m.onPosition(parseInt(t,10),e[t])},u=function(){var t,e=m._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&m.clearOnPosition(parseInt(t,10))},l=function(){m.isHTML5&&q(m)},r=function(){m.isHTML5&&B(m)},s=function(t){t||(v=[],y=0),g=!1,m._hasTimer=null,m._a=null,m._html5_canplay=!1,m.bytesLoaded=null,m.bytesTotal=null,m.duration=m._iO&&m._iO.duration?m._iO.duration:null,m.durationEstimate=null,m.buffered=[],m.eqData=[],m.eqData.left=[],m.eqData.right=[],m.failures=0,m.isBuffering=!1,m.instanceOptions={},m.instanceCount=0,m.loaded=!1,m.metadata={},m.readyState=0,m.muted=!1,m.paused=!1,m.peakData={left:0,right:0},m.waveformData={left:[],right:[]},m.playState=0,m.position=null,m.id3={}},s(),this._onTimer=function(t){var e,s=!1,o={};if(m._hasTimer||t)return m._a&&(t||(0<m.playState||1===m.readyState)&&!m.paused)&&((e=m._get_html5_duration())!==i&&(i=e,m.duration=e,s=!0),m.durationEstimate=m.duration,(e=1e3*m._a.currentTime||0)!==n&&(n=e,s=!0),(s||t)&&m._whileplaying(e,o,o,o,o)),s},this._get_html5_duration=function(){var t=m._iO;return(t=m._a&&m._a.duration?1e3*m._a.duration:t&&t.duration?t.duration:null)&&!isNaN(t)&&1/0!==t?t:null},this._apply_loop=function(t,e){t.loop=1<e?"loop":""},this._setup_html5=function(t){t=p(m._iO,t);var e,i=It?ut:m._a,n=decodeURI(t.url);if(It?n===decodeURI(et)&&(e=!0):n===decodeURI(b)&&(e=!0),i){if(i._s)if(It)i._s&&i._s.playState&&!e&&i._s.stop();else if(!It&&n===decodeURI(b))return m._apply_loop(i,t.loops),i;e||(b&&s(!1),i.src=t.url,et=b=m.url=t.url,i._called_load=!1)}else t.autoLoad||t.autoPlay?(m._a=new Audio(t.url),m._a.load()):m._a=Ft&&10>opera.version()?new Audio(null):new Audio,(i=m._a)._called_load=!1,It&&(ut=i);return m.isHTML5=!0,m._a=i,i._s=m,o(),m._apply_loop(i,t.loops),t.autoLoad||t.autoPlay?m.load():(i.autobuffer=!1,i.preload="auto"),i},o=function(){if(m._a._added_events)return!1;var t;for(t in m._a._added_events=!0,ot)ot.hasOwnProperty(t)&&m._a&&m._a.addEventListener(t,ot[t],!1);return!0},a=function(){var t;for(t in m._a._added_events=!1,ot)ot.hasOwnProperty(t)&&m._a&&m._a.removeEventListener(t,ot[t],!1)},this._onload=function(t){var e=!!t||!m.isHTML5&&8===c&&m.duration;return m.loaded=e,m.readyState=e?3:2,m._onbufferchange(0),m._iO.onload&&at(m,(function(){m._iO.onload.apply(m,[e])})),!0},this._onbufferchange=function(t){return!(0===m.playState||t&&m.isBuffering||!t&&!m.isBuffering)&&(m.isBuffering=1===t,m._iO.onbufferchange&&m._iO.onbufferchange.apply(m,[t]),!0)},this._onsuspend=function(){return m._iO.onsuspend&&m._iO.onsuspend.apply(m),!0},this._onfailure=function(t,e,i){m.failures++,m._iO.onfailure&&1===m.failures&&m._iO.onfailure(t,e,i)},this._onwarning=function(t,e,i){m._iO.onwarning&&m._iO.onwarning(t,e,i)},this._onfinish=function(){var t=m._iO.onfinish;m._onbufferchange(0),m._resetOnPosition(0),m.instanceCount&&(m.instanceCount--,m.instanceCount||(u(),m.playState=0,m.paused=!1,m.instanceCount=0,m.instanceOptions={},m._iO={},r(),m.isHTML5&&(m.position=0)),(!m.instanceCount||m._iO.multiShotEvents)&&t&&at(m,(function(){t.apply(m)})))},this._whileloading=function(t,e,i,n){var s=m._iO;m.bytesLoaded=t,m.bytesTotal=e,m.duration=Math.floor(i),m.bufferLength=n,m.durationEstimate=m.isHTML5||s.isMovieStar?m.duration:s.duration?m.duration>s.duration?m.duration:s.duration:parseInt(m.bytesTotal/m.bytesLoaded*m.duration,10),m.isHTML5||(m.buffered=[{start:0,end:m.duration}]),(3!==m.readyState||m.isHTML5)&&s.whileloading&&s.whileloading.apply(m)},this._whileplaying=function(t,i,n,s,o){var a=m._iO;return!isNaN(t)&&null!==t&&(m.position=Math.max(0,t),m._processOnPosition(),!m.isHTML5&&8<c&&(a.usePeakData&&i!==e&&i&&(m.peakData={left:i.leftPeak,right:i.rightPeak}),a.useWaveformData&&n!==e&&n&&(m.waveformData={left:n.split(","),right:s.split(",")}),a.useEQData&&o!==e&&o&&o.leftEQ&&(t=o.leftEQ.split(","),m.eqData=t,m.eqData.left=t,o.rightEQ!==e&&o.rightEQ&&(m.eqData.right=o.rightEQ.split(",")))),1===m.playState&&(m.isHTML5||8!==c||m.position||!m.isBuffering||m._onbufferchange(0),a.whileplaying&&a.whileplaying.apply(m)),!0)},this._oncaptiondata=function(t){m.captiondata=t,m._iO.oncaptiondata&&m._iO.oncaptiondata.apply(m,[t])},this._onmetadata=function(t,e){var i,n,s={};for(i=0,n=t.length;i<n;i++)s[t[i]]=e[i];m.metadata=s,m._iO.onmetadata&&m._iO.onmetadata.call(m,m.metadata)},this._onid3=function(t,e){var i,n,s=[];for(i=0,n=t.length;i<n;i++)s[t[i]]=e[i];m.id3=p(m.id3,s),m._iO.onid3&&m._iO.onid3.apply(m)},this._onconnect=function(t){t=1===t,(m.connected=t)&&(m.failures=0,j(m.id)&&(m.getAutoPlay()?m.play(e,m.getAutoPlay()):m._iO.autoLoad&&m.load()),m._iO.onconnect&&m._iO.onconnect.apply(m,[t]))},this._ondataerror=function(t){0<m.playState&&m._iO.ondataerror&&m._iO.ondataerror.apply(m)}},M=function(){return ft.body||ft.getElementsByTagName("div")[0]},r=function(t){return ft.getElementById(t)},p=function(t,i){var n,s,o=t||{};for(s in n=i===e?ht.defaultOptions:i)n.hasOwnProperty(s)&&o[s]===e&&(o[s]="object"!=typeof n[s]||null===n[s]?n[s]:p(o[s],n[s]));return o},at=function(e,i){e.isHTML5||8!==c?i():t.setTimeout(i,0)},m={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1},f=function(t,i){var n,s=!0,o=i!==e,a=ht.setupOptions;for(n in t)if(t.hasOwnProperty(n))if("object"!=typeof t[n]||null===t[n]||t[n]instanceof Array||t[n]instanceof RegExp)o&&m[i]!==e?ht[i][n]=t[n]:a[n]!==e?(ht.setupOptions[n]=t[n],ht[n]=t[n]):m[n]===e?s=!1:ht[n]instanceof Function?ht[n].apply(ht,t[n]instanceof Array?t[n]:[t[n]]):ht[n]=t[n];else{if(m[n]!==e)return f(t[n],n);s=!1}return s},tt=function(){function e(t){var e=(t=Mt.call(t)).length;return n?(t[1]="on"+t[1],3<e&&t.pop()):3===e&&t.push(!1),t}function i(t,e){var i=t.shift(),o=[s[e]];n?i[o](t[0],t[1]):i[o].apply(i,t)}var n=t.attachEvent,s={add:n?"attachEvent":"addEventListener",remove:n?"detachEvent":"removeEventListener"};return{add:function(){i(e(arguments),"add")},remove:function(){i(e(arguments),"remove")}}}(),ot={abort:o((function(){})),canplay:o((function(){var t,i=this._s;if(i._html5_canplay)return!0;if(i._html5_canplay=!0,i._onbufferchange(0),t=i._iO.position===e||isNaN(i._iO.position)?null:i._iO.position/1e3,this.currentTime!==t)try{this.currentTime=t}catch(t){}i._iO._oncanplay&&i._iO._oncanplay()})),canplaythrough:o((function(){var t=this._s;t.loaded||(t._onbufferchange(0),t._whileloading(t.bytesLoaded,t.bytesTotal,t._get_html5_duration()),t._onload(!0))})),durationchange:o((function(){var t,e=this._s;t=e._get_html5_duration(),isNaN(t)||t===e.duration||(e.durationEstimate=e.duration=t)})),ended:o((function(){this._s._onfinish()})),error:o((function(){this._s._onload(!1)})),loadeddata:o((function(){var t=this._s;t._loaded||Lt||(t.duration=t._get_html5_duration())})),loadedmetadata:o((function(){})),loadstart:o((function(){this._s._onbufferchange(1)})),play:o((function(){this._s._onbufferchange(0)})),playing:o((function(){this._s._onbufferchange(0)})),progress:o((function(t){var e,i,n=this._s,s=0;s=t.target.buffered;e=t.loaded||0;var o=t.total||1;if(n.buffered=[],s&&s.length){for(e=0,i=s.length;e<i;e++)n.buffered.push({start:1e3*s.start(e),end:1e3*s.end(e)});s=1e3*(s.end(0)-s.start(0)),e=Math.min(1,s/(1e3*t.target.duration))}isNaN(e)||(n._whileloading(e,o,n._get_html5_duration()),e&&o&&e===o&&ot.canplaythrough.call(this,t))})),ratechange:o((function(){})),suspend:o((function(t){var e=this._s;ot.progress.call(this,t),e._onsuspend()})),stalled:o((function(){})),timeupdate:o((function(){this._s._onTimer()})),waiting:o((function(){this._s._onbufferchange(1)}))},K=function(t){return!(!t||!(t.type||t.url||t.serverURL))&&(!(t.serverURL||t.type&&s(t.type))&&(t.type?$({type:t.type}):$({url:t.url})||ht.html5Only||t.url.match(/data\:/i)))},G=function(t){var i;return t&&(i=Lt?"about:blank":ht.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==":"about:blank",t.src=i,t._called_unload!==e&&(t._called_load=!1)),It&&(et=null),i},$=function(t){if(!ht.useHTML5Audio||!ht.hasHTML5)return!1;var i=t.url||null;t=t.type||null;var n,o=ht.audioFormats;if(t&&ht.html5[t]!==e)return ht.html5[t]&&!s(t);if(!X){for(n in X=[],o)o.hasOwnProperty(n)&&(X.push(n),o[n].related&&(X=X.concat(o[n].related)));X=new RegExp("\\.("+X.join("|")+")(\\?.*)?$","i")}return(n=i?i.toLowerCase().match(X):null)&&n.length?n=n[1]:t&&(n=(-1!==(i=t.indexOf(";"))?t.substr(0,i):t).substr(6)),n&&ht.html5[n]!==e?i=ht.html5[n]&&!s(n):(t="audio/"+n,i=ht.html5.canPlayType({type:t}),i=(ht.html5[n]=i)&&ht.html5[t]&&!s(t)),i},Z=function(){function t(t){var e,i=e=!1;if(!a||"function"!=typeof a.canPlayType)return e;if(t instanceof Array){for(o=0,e=t.length;o<e;o++)(ht.html5[t[o]]||a.canPlayType(t[o]).match(ht.html5Test))&&(i=!0,ht.html5[t[o]]=!0,ht.flash[t[o]]=!!t[o].match(Bt));e=i}else e=!(!(t=!(!a||"function"!=typeof a.canPlayType)&&a.canPlayType(t))||!t.match(ht.html5Test));return e}if(!ht.useHTML5Audio||!ht.hasHTML5)return St=ht.html5.usingFlash=!0,!1;var i,n,s,o,a=Audio!==e?Ft&&10>opera.version()?new Audio(null):new Audio:null,r={};for(i in s=ht.audioFormats)if(s.hasOwnProperty(i)&&(n="audio/"+i,r[i]=t(s[i].type),r[n]=r[i],i.match(Bt)?(ht.flash[i]=!0,ht.flash[n]=!0):(ht.flash[i]=!1,ht.flash[n]=!1),s[i]&&s[i].related))for(o=s[i].related.length-1;0<=o;o--)r["audio/"+s[i].related[o]]=r[i],ht.html5[s[i].related[o]]=r[i],ht.flash[s[i].related[o]]=r[i];return r.canPlayType=a?t:null,ht.html5=p(ht.html5,r),ht.html5.usingFlash=V(),St=ht.html5.usingFlash,!0},k={},L=function(){},R=function(t){return 8===c&&1<t.loops&&t.stream&&(t.stream=!1),t},W=function(t,e){return t&&!t.usePolicyFile&&(t.onid3||t.usePeakData||t.useWaveformData||t.useEQData)&&(t.usePolicyFile=!0),t},l=function(){return!1},E=function(t){for(var e in t)t.hasOwnProperty(e)&&"function"==typeof t[e]&&(t[e]=l)},N=function(t){t===e&&(t=!1),(bt||t)&&ht.disable(t)},H=function(t){if(t)if(t.match(/\.swf(\?.*)?$/i)){if(t.substr(t.toLowerCase().lastIndexOf(".swf?")+4))return t}else t.lastIndexOf("/")!==t.length-1&&(t+="/");return t=(t&&-1!==t.lastIndexOf("/")?t.substr(0,t.lastIndexOf("/")+1):"./")+ht.movieURL,ht.noSWFCache&&(t+="?ts="+(new Date).getTime()),t},x=function(){8!==(c=parseInt(ht.flashVersion,10))&&9!==c&&(ht.flashVersion=c=8);var t=ht.debugMode||ht.debugFlash?"_debug.swf":".swf";ht.useHTML5Audio&&!ht.html5Only&&ht.audioFormats.mp4.required&&9>c&&(ht.flashVersion=c=9),ht.version=ht.versionNumber+(ht.html5Only?" (HTML5-only mode)":9===c?" (AS3/Flash 9)":" (AS2/Flash 8)"),8<c?(ht.defaultOptions=p(ht.defaultOptions,ht.flash9Options),ht.features.buffering=!0,ht.defaultOptions=p(ht.defaultOptions,ht.movieStarOptions),ht.filePatterns.flash9=new RegExp("\\.(mp3|"+Vt.join("|")+")(\\?.*)?$","i"),ht.features.movieStar=!0):ht.features.movieStar=!1,ht.filePattern=ht.filePatterns[8!==c?"flash9":"flash8"],ht.movieURL=(8===c?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",t),ht.features.peakData=ht.features.waveformData=ht.features.eqData=8<c},O=function(t,e){if(!ct)return!1;ct._setPolling(t,e)},j=this.getSoundById,z=function(){var t=[];return ht.debugMode&&t.push("sm2_debug"),ht.debugFlash&&t.push("flash_debug"),ht.useHighPerformance&&t.push("high_performance"),t.join(" ")},F=function(){L("fbHandler");var t=ht.getMoviePercent(),e={type:"FLASHBLOCK"};if(ht.html5Only)return!1;ht.ok()?ht.oMC&&(ht.oMC.className=[z(),"movieContainer","swf_loaded"+(ht.didFlashBlock?" swf_unblocked":"")].join(" ")):(St&&(ht.oMC.className=z()+" movieContainer "+(null===t?"swf_timedout":"swf_error")),ht.didFlashBlock=!0,v({type:"ontimeout",ignoreInit:!0,error:e}),P(e))},g=function(t,i,n){mt[t]===e&&(mt[t]=[]),mt[t].push({method:i,scope:n||null,fired:!1})},v=function(t){if(t||(t={type:ht.ok()?"onready":"ontimeout"}),!yt&&t&&!t.ignoreInit||"ontimeout"===t.type&&(ht.ok()||bt&&!t.ignoreInit))return!1;var e,i={success:t&&t.ignoreInit?ht.ok():!bt},n=t&&t.type&&mt[t.type]||[],s=[],o=(i=[i],St&&!ht.ok());for(t.error&&(i[0].error=t.error),t=0,e=n.length;t<e;t++)!0!==n[t].fired&&s.push(n[t]);if(s.length)for(t=0,e=s.length;t<e;t++)s[t].scope?s[t].method.apply(s[t].scope,i):s[t].method.apply(this,i),o||(s[t].fired=!0);return!0},y=function(){t.setTimeout((function(){ht.useFlashBlock&&F(),v(),"function"==typeof ht.onload&&ht.onload.apply(t),ht.waitForWindowLoad&&tt.add(t,"load",y)}),1)},nt=function(){if(it!==e)return it;var i,n=!1,s=navigator,o=s.plugins,a=t.ActiveXObject;if(o&&o.length)(s=s.mimeTypes)&&s["application/x-shockwave-flash"]&&s["application/x-shockwave-flash"].enabledPlugin&&s["application/x-shockwave-flash"].enabledPlugin.description&&(n=!0);else if(a!==e&&!dt.match(/MSAppHost/i)){try{i=new a("ShockwaveFlash.ShockwaveFlash")}catch(t){i=null}n=!!i}return it=n},V=function(){var t,e,i=ht.audioFormats;if(Ot&&dt.match(/os (1|2|3_0|3_1)\s/i)?(ht.hasHTML5=!1,ht.html5Only=!0,ht.oMC&&(ht.oMC.style.display="none")):!ht.useHTML5Audio||ht.html5&&ht.html5.canPlayType||(ht.hasHTML5=!1),ht.useHTML5Audio&&ht.hasHTML5)for(e in Q=!0,i)i.hasOwnProperty(e)&&i[e].required&&(ht.html5.canPlayType(i[e].type)?ht.preferFlash&&(ht.flash[e]||ht.flash[i[e].type])&&(t=!0):(Q=!1,t=!0));return ht.ignoreFlash&&(t=!1,Q=!0),ht.html5Only=ht.hasHTML5&&ht.useHTML5Audio&&!t,!ht.html5Only},U=function(t){var e,i,n=0;if(t instanceof Array){for(e=0,i=t.length;e<i;e++)if(t[e]instanceof Object){if(ht.canPlayMIME(t[e].type)){n=e;break}}else if(ht.canPlayURL(t[e])){n=e;break}t[n].url&&(t[n]=t[n].url),t=t[n]}return t},q=function(t){t._hasTimer||(t._hasTimer=!0,!zt&&ht.html5PollingInterval&&(null===Dt&&0===Tt&&(Dt=setInterval(Y,ht.html5PollingInterval)),Tt++))},B=function(t){t._hasTimer&&(t._hasTimer=!1,!zt&&ht.html5PollingInterval&&Tt--)},Y=function(){var t;if(null!==Dt&&!Tt)return clearInterval(Dt),Dt=null,!1;for(t=ht.soundIDs.length-1;0<=t;t--)ht.sounds[ht.soundIDs[t]].isHTML5&&ht.sounds[ht.soundIDs[t]]._hasTimer&&ht.sounds[ht.soundIDs[t]]._onTimer()},P=function(i){i=i!==e?i:{},"function"==typeof ht.onerror&&ht.onerror.apply(t,[{type:i.type!==e?i.type:null}]),i.fatal!==e&&i.fatal&&ht.disable()},st=function(){if(!Rt||!nt())return!1;var t,e,i=ht.audioFormats;for(e in i)if(i.hasOwnProperty(e)&&("mp3"===e||"mp4"===e)&&(ht.html5[e]=!1,i[e]&&i[e].related))for(t=i[e].related.length-1;0<=t;t--)ht.html5[i[e].related[t]]=!1},this._setSandboxType=function(t){},this._externalInterfaceOK=function(t){if(ht.swfLoaded)return!1;ht.swfLoaded=!0,jt=!1,Rt&&st(),setTimeout(u,Nt?100:1)},I=function(t,i){function n(t,e){return'<param name="'+t+'" value="'+e+'" />'}if(gt&&vt)return!1;if(ht.html5Only)return x(),ht.oMC=r(ht.movieID),u(),vt=gt=!0,!1;var s,o,a,l=i||ht.url,h=ht.altURL||l,c=M(),d=z(),p=null;p=(p=ft.getElementsByTagName("html")[0])&&p.dir&&p.dir.match(/rtl/i);if(t=t===e?ht.id:t,x(),ht.url=H(Yt?l:h),i=ht.url,ht.wmode=!ht.wmode&&ht.useHighPerformance?"transparent":ht.wmode,null!==ht.wmode&&(dt.match(/msie 8/i)||!Nt&&!ht.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(At.push(k.spcWmode),ht.wmode=null),c={name:t,id:t,src:i,quality:"high",allowScriptAccess:ht.allowScriptAccess,bgcolor:ht.bgColor,pluginspage:Ut+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:ht.wmode,hasPriority:"true"},ht.debugFlash&&(c.FlashVars="debug=1"),ht.wmode||delete c.wmode,Nt)l=ft.createElement("div"),o=['<object id="'+t+'" data="'+i+'" type="'+c.type+'" title="'+c.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',n("movie",i),n("AllowScriptAccess",ht.allowScriptAccess),n("quality",c.quality),ht.wmode?n("wmode",ht.wmode):"",n("bgcolor",ht.bgColor),n("hasPriority","true"),ht.debugFlash?n("FlashVars",c.FlashVars):"","</object>"].join("");else for(s in l=ft.createElement("embed"),c)c.hasOwnProperty(s)&&l.setAttribute(s,c[s]);if(d=z(),c=M())if(ht.oMC=r(ht.movieID)||ft.createElement("div"),ht.oMC.id)a=ht.oMC.className,ht.oMC.className=(a?a+" ":"movieContainer")+(d?" "+d:""),ht.oMC.appendChild(l),Nt&&((s=ht.oMC.appendChild(ft.createElement("div"))).className="sm2-object-box",s.innerHTML=o),vt=!0;else{if(ht.oMC.id=ht.movieID,ht.oMC.className="movieContainer "+d,s=d=null,ht.useFlashBlock||(ht.useHighPerformance?d={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(d={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},p&&(d.left=Math.abs(parseInt(d.left,10))+"px"))),Ht&&(ht.oMC.style.zIndex=1e4),!ht.debugFlash)for(a in d)d.hasOwnProperty(a)&&(ht.oMC.style[a]=d[a]);try{Nt||ht.oMC.appendChild(l),c.appendChild(ht.oMC),Nt&&((s=ht.oMC.appendChild(ft.createElement("div"))).className="sm2-object-box",s.innerHTML=o),vt=!0}catch(t){throw Error(L("domError")+" \n"+t.toString())}}return gt=!0},T=function(){return ht.html5Only?(I(),!1):!(ct||!ht.url)&&((ct=ht.getMovie(ht.id))||(wt?(Nt?ht.oMC.innerHTML=xt:ht.oMC.appendChild(wt),wt=null,gt=!0):I(ht.id,ht.url),ct=ht.getMovie(ht.id)),"function"==typeof ht.oninitmovie&&setTimeout(ht.oninitmovie,1),!0)},b=function(){setTimeout(_,1e3)},w=function(){t.setTimeout((function(){ht.setup({preferFlash:!1}).reboot(),ht.didFlashBlock=!0,ht.beginDelayedInit()}),1)},_=function(){var e,i=!1;return!(!ht.url||Ct)&&(Ct=!0,tt.remove(t,"load",b),!(it&&jt&&!Wt)&&(yt||0<(e=ht.getMoviePercent())&&100>e&&(i=!0),void setTimeout((function(){if(e=ht.getMoviePercent(),i)return Ct=!1,t.setTimeout(b,1),!1;!yt&&qt&&(null===e?ht.useFlashBlock||0===ht.flashLoadTimeout?ht.useFlashBlock&&F():!ht.useFlashBlock&&Q?w():v({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==ht.flashLoadTimeout&&(!ht.useFlashBlock&&Q?w():N(!0)))}),ht.flashLoadTimeout)))},C=function(){return Wt||!jt?(tt.remove(t,"focus",C),!0):(Wt=qt=!0,Ct=!1,b(),tt.remove(t,"focus",C),!0)},d=function(e){if(yt)return!1;if(ht.html5Only)return yt=!0,y(),!0;var i,n=!0;return ht.useFlashBlock&&ht.flashLoadTimeout&&!ht.getMoviePercent()||(yt=!0),i={type:!it&&St?"NO_FLASH":"INIT_TIMEOUT"},(bt||e)&&(ht.useFlashBlock&&ht.oMC&&(ht.oMC.className=z()+" "+(null===ht.getMoviePercent()?"swf_timedout":"swf_error")),v({type:"ontimeout",error:i,ignoreInit:!0}),P(i),n=!1),bt||(ht.waitForWindowLoad&&!_t?tt.add(t,"load",y):y()),n},h=function(){var t,i=ht.setupOptions;for(t in i)i.hasOwnProperty(t)&&(ht[t]===e?ht[t]=i[t]:ht[t]!==i[t]&&(ht.setupOptions[t]=ht[t]))},u=function(){if(yt)return!1;if(ht.html5Only)return yt||(tt.remove(t,"load",ht.beginDelayedInit),ht.enabled=!0,d()),!0;T();try{ct._externalInterfaceTest(!1),O(!0,ht.flashPollingInterval||(ht.useHighPerformance?10:50)),ht.debugMode||ct._disableDebug(),ht.enabled=!0,ht.html5Only||tt.add(t,"unload",l)}catch(t){return P({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),N(!0),d(),!1}return d(),tt.remove(t,"load",ht.beginDelayedInit),!0},D=function(){return!S&&(S=!0,h(),!it&&ht.hasHTML5&&ht.setup({useHTML5Audio:!0,preferFlash:!1}),Z(),!it&&St&&(At.push(k.needFlash),ht.setup({flashLoadTimeout:1})),ft.removeEventListener&&ft.removeEventListener("DOMContentLoaded",D,!1),T(),!0)},J=function(){return"complete"===ft.readyState&&(D(),ft.detachEvent("onreadystatechange",J)),!0},A=function(){_t=!0,D(),tt.remove(t,"load",A)},nt(),tt.add(t,"focus",C),tt.add(t,"load",b),tt.add(t,"load",A),ft.addEventListener?ft.addEventListener("DOMContentLoaded",D,!1):ft.attachEvent?ft.attachEvent("onreadystatechange",J):P({type:"NO_DOM2_EVENTS",fatal:!0})}if(!t||!t.document)throw Error("SoundManager requires a browser with window and document objects.");var n=null;t.SM2_DEFER!==e&&SM2_DEFER||(n=new i),"object"==typeof module&&module&&"object"==typeof module.exports?(module.exports.SoundManager=i,module.exports.soundManager=n):"function"==typeof define&&define.amd&&define((function(){return{constructor:i,getInstance:function(e){return!t.soundManager&&e instanceof Function&&((e=e(i))instanceof i&&(t.soundManager=e)),t.soundManager}}})),t.SoundManager=i,t.soundManager=n}(window);
