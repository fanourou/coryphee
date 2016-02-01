/*! VersionVI: 30F180062h x */
function WDGeoPosition(n){n&&(WDTypeAvance.prototype.constructor.apply(this,[]),this.m_oPosition=n)}function bValDef(n,t){return n!==null&&n!==undefined&&n!==NaN&&(t||n>=0)}function sComplete0(n,t){for(n=""+n;n.length<t;)n="0"+n;return n}function GPSEtat(){return navigator!=null&&navigator.geolocation!=null?gpsActive:gpsDesactive}function GPSPCSAppelProcPosition(n,t){gpsPCSPosition!=null&&delete gpsPCSPosition,gpsPCSPosition=new WDGeoPosition(t),n(gpsPCSPosition,gpsErreurOK)}function GPSPCSAppelProcErreur(n,t){n(null,t.code)}function GPSRecuperePosition(n,t){GPSEtat()==gpsActive&&navigator.geolocation.getCurrentPosition(function(t){GPSPCSAppelProcPosition(n,t)},function(t){GPSPCSAppelProcErreur(n,t)},{timeout:(t==null?6e3:t)*10})}function GPSSuitDeplacement(n){GPSEtat()==gpsActive&&(gpsPCSSuivi!=null&&(navigator.geolocation.clearWatch(gpsPCSSuivi),gpsPCSSuivi=null),n!=null)&&(gpsPCSSuivi=navigator.geolocation.watchPosition(function(t){GPSPCSAppelProcPosition(n,t)},function(t){GPSPCSAppelProcErreur(n,t)}))}function GPSDernierePosition(){return gpsPCSPosition}var gpsActive=1,gpsDesactive=2,gpsErreurOK=0,gpsErreurDroit=1,gpsErreurPosition=2,gpsErreurTimeout=3,gpsPCSSuivi=null,gpsPCSPosition=null;WDGeoPosition.prototype=new WDTypeAvance(!0),WDGeoPosition.prototype.constructor=WDGeoPosition,WDGeoPosition.prototype.GetProp=function(n){switch(n){case 0:return this.m_oPosition.coords.latitude;case 1:return this.m_oPosition.coords.longitude;case 2:return bValDef(this.m_oPosition.coords.altitude,!0)?this.m_oPosition.coords.altitude:0;case 3:return bValDef(this.m_oPosition.coords.altitude,!0);case 4:return bValDef(this.m_oPosition.coords.heading)?this.m_oPosition.coords.heading:0;case 5:return bValDef(this.m_oPosition.coords.heading);case 6:return bValDef(this.m_oPosition.coords.accuracy)?this.m_oPosition.coords.accuracy:0;case 7:return bValDef(this.m_oPosition.coords.accuracy);case 8:return bValDef(this.m_oPosition.coords.speed)?this.m_oPosition.coords.speed:0;case 9:return bValDef(this.m_oPosition.coords.speed);case 10:var t=new Date(this.m_oPosition.timestamp);return sComplete0(t.getFullYear(),4)+sComplete0(t.getMonth()+1,2)+sComplete0(t.getDate(),2)+sComplete0(t.getHours(),2)+sComplete0(t.getMinutes(),2)+sComplete0(t.getSeconds(),2)+sComplete0(Math.floor(this.m_oPosition.timestamp%1e3/10),2);default:return WDTypeAvance.prototype.GetProp.apply(this,arguments)}}