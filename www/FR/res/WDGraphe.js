/*! VersionVI: 30F180046j x */
function WDBarreBoutonOnOffGraphe(n,t,i){n&&WDBarreBoutonOnOff.prototype.constructor.apply(this,[n,t,"ExecuteCommande",[i]])}function WDGraphe(n,t,i,r,u,f){if(n){WDBarre.prototype.constructor.apply(this,[n,u,f,t,i,r]);var e=this;this.m_fRafBarreTrue=function(n){return e.RafBarre(n||event,!0)},this.m_fRafBarreFalse=function(n){return e.RafBarre(n||event)},this.m_fRafBarreTrueMMove=function(n){return e.RafBarreMMove(n||event)}}}WDBarreBoutonOnOffGraphe.prototype=new WDBarreBoutonOnOff,WDBarreBoutonOnOffGraphe.prototype.constructor=WDBarreBoutonOnOffGraphe,WDBarreBoutonOnOffGraphe.prototype.bActif=function(){return this.m_oObjetParent.bActif(this.m_oParamCommande)},WDGraphe.prototype=new WDBarre,WDGraphe.prototype.constructor=WDGraphe,WDGraphe.prototype.m_tabDescBarre=[{nType:0,sSuf:"GDH",sCom:"GDH"},{nType:0,sSuf:"GDV",sCom:"GDV"},{nType:0,sSuf:"SMO",sCom:"SMO"},{nType:0,sSuf:"GRA",sCom:"GRA"},{nType:0,sSuf:"RAI",sCom:"RAI"},{nType:0,sSuf:"ANT",sCom:"ANT"},{nType:0,sSuf:"TRA",sCom:"TRA"},{nType:2,sSuf:"SAV",sCom:"OnSave",tabP:[]},{nType:2,sSuf:"PRI",sCom:"OnPrint",tabP:[]},{nType:5,sSuf:"PIE",sCom:"OnOption",tabP:["P","H","D","E"]},{nType:5,sSuf:"COL",sCom:"OnOption",tabP:["C","S","HC","HS"]},{nType:5,sSuf:"CUR",sCom:"OnOption",tabP:["C","S","A","R","B"]},{nType:5,sSuf:"STO",sCom:"OnOption",tabP:["C","B","M"]},{nType:4,sSuf:"LEG",sCom:"OnOption",tabP:["S","D","G","H","B"]},],WDGraphe.prototype.m_tabConversionCom={PIE:"TYP",COL:"TYP",CUR:"TYP",STO:"TYP",LEG:"LEG"},WDGraphe.prototype.m_tabConversionVal={PIE:[0,26,23,33],COL:[1,9,27,28],CUR:[2,5,24,25,32],STO:[6,7,8],LEG:[0,1,2,3,4]},WDGraphe.prototype.Init=function(n,t,i){WDBarre.prototype.Init.apply(this,[i]),this.DeduitParam(n),this.m_sUrlBase=t,this.RafBarre(null)},WDGraphe.prototype._vLiaisonHTML=function(n,t){n="",t="",WDBarre.prototype._vLiaisonHTML.apply(this,[n,t])},WDGraphe.prototype._InitBarreAutomatique=function(){HookOnXXX(this.m_oHote,"onmouseover","mouseover",this.m_fRafBarreTrue),HookOnXXX(this.m_oHote,"onmouseout","mouseout",this.m_fRafBarreFalse),HookOnXXX(this.m_oBarre,"onmouseout","mouseout",this.m_fRafBarreFalse),HookOnXXX(this.m_oHote,"onmousemove","mousemove",this.m_fRafBarreTrueMMove)},WDGraphe.prototype._voNewBoutonOnOff=function(n,t){return new WDBarreBoutonOnOffGraphe(this,n,t.sCom,t.sSty,t.tabP)},WDGraphe.prototype._voNewBoutonAction=function(n,t){return new WDBarreBouton(this,n,t.sCom,t.tabP)},WDGraphe.prototype._voNewBoutonMenu=function(n,t){for(var r=new Array(t.tabP.length),u=t.tabP.length,i=0;i<u;i++)r[i]={oTD:this.oGetElementByIdBarre(document,t.sSuf+"_"+t.tabP[i]),oParamCommande:[this.m_tabConversionCom[t.sSuf],this.m_tabConversionVal[t.sSuf][i]],sTexte:CHART_TOOLBAR[t.sSuf][i]};return t.nType==this.ms_nBoutonPopupMenu?new WDBarreBoutonPopupMenu(this,n,t.sCom,this.oGetElementByIdBarre(document,t.sSuf+"P"),r):new WDBarreBoutonPopupMenuS(this,n,t.sCom,this.oGetElementByIdBarre(document,t.sSuf+"P"),r)},WDGraphe.prototype._voNewBoutonMenuS=function(n,t){return this._voNewBoutonMenu(n,t)},WDGraphe.prototype.RafBarre=function(n,t){if(this.m_eModeBarre==this.ms_nModeBarreAutomatique&&t===undefined&&(t=!1,n)){var i=null;bIE||(i=n.relatedTarget),i||(i=n.toElement),(bEstFils(i,this.m_oBarre,document)||bEstFils(i,this.m_oHote,document))&&(t=!0)}WDBarre.prototype.RafBarre.apply(this,[n,t])},WDGraphe.prototype.RafBarreMMove=function(n){UnhookOnXXX(this.m_oHote,"onmousemove","mousemove",this.m_fRafBarreTrueMMove),delete this.m_fRafBarreTrueMMove,this.RafBarre(n,!0)},WDGraphe.prototype.bActif=function(n){return this.m_tabEtat[n[0]]},WDGraphe.prototype.ExecuteCommande=function(n,t){this.m_tabEtat[t[0]]=this.m_tabEtat[t[0]]?0:1,this.m_oHote.src=this.sGetRequete(!1),this.RafBarre(n,!0)},WDGraphe.prototype.OnOption=function(n,t){this.m_tabEtat[t[0]]=t[1],this.m_oHote.src=this.sGetRequete(!1),this.RafBarre(n,!0)},WDGraphe.prototype.bActifOption=function(n,t){return this.m_tabEtat[t[0]]==t[1]},WDGraphe.prototype.OnSave=function(){document.location=this.sGetRequete(!0)},WDGraphe.prototype.OnPrint=function(){var n=this.m_oHote.offsetHeight+30,t=this.m_oHote.offsetWidth+30,i=window.open(this.sGetRequete(!1),"WDG_"+ +new Date,"resizable=yes,height="+n+",width="+t);i.print()},WDGraphe.prototype.sGetRequete=function(n){var t=this.m_sUrlBase;return t+=t.indexOf("?")==-1?"?":"&",t+"WD_ACTION_="+(n?"GRAPHESAUVE":"GRAPHEPARAM")+"&WD_BUTTON_CLICK_="+this.m_sAliasChamp+"&WD_PARAM_="+this._vsConstruitParam()+"&"+this.m_sAliasChamp+"="+ +new Date},WDGraphe.prototype._vsConstruitParam=function(){var n=[],t=WDChamp.prototype._vsConstruitParam.apply(this,arguments);return t.length>0&&n.push(t),n.push(this.m_tabEtat.TYP),n.push(this.m_tabEtat.GDH),n.push(this.m_tabEtat.GDV),n.push(this.m_tabEtat.SMO),n.push(this.m_tabEtat.GRA),n.push(this.m_tabEtat.RAI),n.push(this.m_tabEtat.ANT),n.push(this.m_tabEtat.TRA),n.push(this.m_tabEtat.LEG),n.join(",")},WDGraphe.prototype._vDeduitParam=function(n){WDChamp.prototype._vDeduitParam.apply(this,arguments),this.m_tabEtat=n},WDGraphe.prototype.sGetAltText=function(n){return CHART_TOOLBAR.ALTTEXT[n]}