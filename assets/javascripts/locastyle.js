function accessMenu(){$("#header .limit").prepend('<nav class="menuAccess" />'),$("[data-access]").each(function(){var e=$(this).attr("title"),t=$(this).attr("href"),r=$(this).text();$(".menuAccess").append('<a role="menuitem" tabindex="1" href="'+t+'" aria-label="'+e+'" title="'+e+'">'+r+"</a>")})}function subMenuAccess(){$("#menuPrincipal .parent a").focus(function(){$(this).parents(".parent").addClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!0,"aria-hidden":!1})}).blur(function(){$(this).parents(".parent").removeClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!1,"aria-hidden":!0})})}Locastyle=function(){Locastyle.prototype.base={init:function(e){this.toggleTextOnClick(e),this.toggleTextOnHover(e),this.datePickerSetup(e,this.datePickerOptions),this.numbersOnly(e),this.activateCollapseOnShown(e),this.deactivateCollapseOnHide(e),this.htmlForceClass(e),this.disableClass(e),this.classParentLiMenu(e),this.modalAutoFocus(e),this.preventDefaultOnDisabled(e),this.openCollapsesWithError(e),this.autoOpenModal(e),this.pathWayStepCounter(e),this.setListDetailSeparator(),this.advancedSearchValueHandler(e),this.toggleChild(e),this.toggleChildValue(e),this.inputDataValue(e),this.carouselCounter(e),this.initCustomSelect(e),this.collapseSetAnchor(),this.notificationInfoSet(e),this.notificationInfoHandler(e),this.minShortcutsCookieSetter(e),this.minShortcutsCookieHandler(),this.linkPreventDefault(),this.popover(e),this.labelSelectCustom(),this.collapsedRadiosChecked(e),this.collapsedRadios(e),this.closedAllCollapse(e),this.collapseWithTooltip(e),this.collapseNavButtons(e),this.elementChecked(e),this.clickElementChecked(e),this.togglePassword(e),this.classToggle(e),this.boxDinamicArrow(e),this.arrowDinamic(e,"[data-element]:checked")},popover:function(e){$("[rel=popover]",e).popover()},toggleTextOnClick:function(e){var t=this;$('[data-toggle_text="click"]',e).on("click",function(e){e.preventDefault(),t.toggleText(this)})},toggleTextOnHover:function(e){var t=this;$('[data-toggle_text="hover"]',e).on("mouseover",function(e){e.preventDefault(),t.toggleText(this)})},toggleText:function(e){var t,r;t=$(e).html(),r=$(e).data("text"),$(e).text(r).data("text",t).attr("title",r)},datePickerOptions:{showOn:"button",dateFormat:"dd/mm/yy",monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],monthNames:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},datePickerSetup:function(e,t){$(".datepicker",e).datepicker(t),$(".ui-datepicker-trigger",e).addClass("icon-calendar").html("")},numbersOnly:function(e){$(".numbersOnly",e).keyup(function(){this.value=this.value.replace(/[^0-9\.]/g,"")})},activateCollapseOnShown:function(e){$(".collapse",e).on("shown",function(){$(this).parents(".boxCollapse").addClass("active"),$(this).find('[tabindex="0"]').attr("tabindex","3")})},deactivateCollapseOnHide:function(e){$(".collapse",e).on("hide",function(){$(this).parents(".boxCollapse").removeClass("active"),$(this).find('[tabindex="3"]').attr("tabindex","0")})},htmlForceClass:function(e){$("html",e).addClass("forceClass")},disableClass:function(e){$("input[disabled], select[disabled], textarea[disabled], input[readonly], select[readonly], textarea[readonly]",e).addClass("disabled")},classParentLiMenu:function(e){$("#menuPrincipal li",e).has("ul").addClass("parent")},modalAutoFocus:function(e){$(".modal",e).on("shown",function(){$(".autoFocus",this).focus()})},preventDefaultOnDisabled:function(e){$(".btn.disabled",e).click(function(e){e.preventDefault()})},openCollapsesWithError:function(e){$(".collapse .error",e).parents(".collapse").collapse("show")},autoOpenModal:function(e){$(".modalAutoOpen",e).modal("show")},showElement:function(e){$(e).removeClass("dNone")},hideElement:function(e){$(e).addClass("dNone")},pathWayStepCounter:function(){$(".pathWay").each(function(){var e=$(this).find("li").size();$(this).addClass("steps"+e)})},setListDetailSeparator:function(){$(".listDetail dd").each(function(e,t){$(t).after("<hr class='sep'/>")})},advancedSearchValueHandler:function(e){$(".inputAdvancedSearchField",e).each(function(e,t){""!==$(t).val()&&$(this).parents().addClass("in")})},toggleChild:function(e){var t=this;$(".lnkToggle",e).on("click",function(r){r.preventDefault(),$(this).parents(".toggleChild").find(".itemToToggle").toggleClass("dNone"),$(this).parents(".toggleChild").toggleClass($(this).parents(".toggleChild").data("class")),t.toggleChildValue(e),$(this).trigger($.Event("lnkToggleFinish"))})},toggleChildValue:function(e){$(".btn.lnkToggle",e).on("click",function(){var e=$(this).parents(".toggleChild").find("[data-value]");e.each(function(){$(this).val($(this).data("value"))})})},inputDataValue:function(e){$.each($('textarea, input[type="url"], input[type="text"], input[type="password"], input[type="number"], input[type="tel"], input[type="email"]',e),function(){var e=$(this).attr("value");$(this).attr("data-value",e)})},collapseAutoOpen:function(e){$("[data-target="+e+"]").click(),$("[data-target="+e+"]").parent().addClass("active")},collapseSetAnchor:function(){var e=window.location.hash.replace("!/","");this.collapseAnchorHandler(e)},collapseAnchorHandler:function(e){""!=e&&this.collapseAutoOpen(e)},carouselCounter:function(e){$.each($(".carousel",e),function(){var e=$(".carousel-inner",this).children().size();$(".carouselNav i",this).html(e),$(this).on("slid",function(){$(this).find(".carouselNav b").html($(this).find(".active").index()+1)})})},labelSelectCustom:function(){$(".label-for-custom2").on("click",function(){var e=$(this).data("target");$(e).select2("open")})},initCustomSelect:function(e){$("select.customSelect",e).select2()},notificationInfoSet:function(e){$(".lnkNoShow",e).on("click",function(){$.cookie($(this).data("target"),!0),$($(this).data("target")).remove()})},notificationInfoHandler:function(e){$.each($(".lnkNoShow",e),function(){var e=$(this).data("target");"true"===$.cookie(e)&&$(e).remove()})},minShortcutsCookieSetter:function(e){var t=this;$(".minShortcuts",e).on("click",function(){"true"===$.cookie("minShortcuts")?($.cookie("minShortcuts",!1),t.toggleText($(this))):($.cookie("minShortcuts",!0),t.toggleText($(this))),$(this).siblings(".expandBox").toggleClass("microBox")})},minShortcutsCookieHandler:function(){var e=this;"true"===$.cookie("minShortcuts")&&(e.toggleText($(".minShortcuts")),$(".expandBox").addClass("microBox"))},collapsedRadiosChecked:function(){$(".collapsedRadios [data-toggle='collapse']:checked").each(function(){var e=$(this).data("target");$(this).parents(".collapsedRadios").find(".in").collapse("hide"),$(e).collapse("show")})},collapsedRadios:function(){$(".collapsedRadios [data-toggle='collapse']").on("click",function(){var e=$(this).data("target");return $(e).hasClass("in")?!1:void $(this).parents(".collapsedRadios").find(".in").collapse("hide")})},closedAllCollapse:function(){$(".closeAllCollapse").on("click",function(){$(this).parents(".collapsedRadios").find(".in").collapse("hide")})},collapseWithTooltip:function(e){$(".collapse",e).each(function(e,t){$(t).find('[rel="popover"]')[0]&&$(t).on("shown",function(){$(t).addClass("with-tooltip")}).on("hidden",function(){$(t).removeClass("with-tooltip")})})},collapseNavButtons:function(e){$(".collapseGroup",e).each(function(e,t){var r=!1;$(t).hasClass("step-validate")&&jQuery().validate&&(r=!0),$(t).find("[data-collapse-nav]").on("click",function(e){e.preventDefault();var t=$(this).parents(".collapse");if(r&&!$(":input:visible",t).valid())return!1;var n=$(this).data("collapse-nav");t.collapse("hide"),$(n).collapse("show")})})},collapsesWeirdBehavior:function(e){$("body").on("change.collapse.data-api","[data-toggle=hide]",function(e){e.preventDefault(),$($(this).data("target")).collapse("hide")}),$("body").on("change.collapse.data-api","[data-toggle=show]",function(e){e.preventDefault(),$($(this).data("target")).collapse("show")}),$("[data-toggle=show]",e).filter(":checked").change()},linkPreventDefault:function(){$("a").on("click",function(e){(""===$(this).attr("href")||"#"===$(this).attr("href"))&&e.preventDefault()})},clearForms:function(e){$(".clearFormBt",e).live("click",function(e){e.preventDefault(),$(this).closest(".boxFiltro").find(".clearForm").not(".in").find(":input").each(function(){switch(this.type){case"password":case"select-multiple":case"select-one":case"text":case"textarea":$(this).val("");break;case"checkbox":this.selected=!1;break;case"radio":this.checked=!1}})})},elementChecked:function(e){$("[data-element]",e).each(function(){"checked"==$(this).attr("checked")&&($(this).parents("[data-checked]").siblings().removeClass("active"),$(this).parents("[data-checked]").addClass("active"))})},clickElementChecked:function(e){$("[data-element]",e).on("change",function(){locastyle.base.elementChecked(),locastyle.base.arrowDinamic(e,$(this))})},togglePassword:function(e){$(".togglePass",e).on("click",function(e){e.preventDefault();var t=$(this).data("target");"password"==$(t).attr("type")?$(t).removeAttr("attr").prop("type","text"):$(t).removeAttr("attr").prop("type","password")})},classToggle:function(e){$("[data-classtoggle]",e).on("click",function(){var e=$(this).data("classtoggle").split(","),t=$(this).data("target")||$(this);$(t).toggleClass(e[0]).toggleClass(e[1])})},arrowDinamic:function(e,t){$(".collapsedRadios [data-element]:checked",e).each(function(){var e=$(t),r=e.offset().left-e.parents(".collapsedRadios").offset().left;$(e).parents(".collapsedRadios").find(".arrowTop").css("left",r)})},boxDinamicArrow:function(e){$(".boxDinamicArrow",e).prepend('<span class="arrowTop"/>')}}},$(window).load(function(){window.locastyle=new Locastyle,locastyle.base.init($(document)),locastyle.passwordStrength.init(),locastyle.sumValues.init()}),$(".serviceName a").attr("onclick","_gaq.push(['_trackEvent', 'Logo', 'Clique', 'Nome do Servico']);"),$(".logOut").attr("onclick","_gaq.push(['_trackEvent', 'BT_Sair', 'Clique', 'Sair do Servico']);"),$(".lnkSugestoes").attr("onclick","_gaq.push(['_trackEvent', 'BT_Sugestoes', 'Clique', 'Sugestoes Feedbackr']);"),$(".infoLogin .btn-group").attr("onclick","_gaq.push(['_trackEvent', 'Combo_Administrar', 'Clique', 'Troca de Ambiente']);"),$(".minShortcuts.shortcutExpanded").attr("onclick","_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Minimizar']);"),$(".minShortcuts").attr("onclick","_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Expandir']);"),$(".span12 .carousel-control.left").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"),$(".span12 .carousel-control.right").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"),$(".innerSideBox .carousel-control.left").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"),$(".innerSideBox .carousel-control.right").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"),$(".footerTop .ico-helpDesk").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Helpdesk']);"),$(".footerTop .ico-Chat").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Chat']);"),$(".footerTop .ico-Telefone").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Telefone']);"),$(".footerTop .lnkArrow.lnkArrowWhite").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'VerFormasAtendimento']);"),$.browser.msie?9==parseInt($.browser.version)?$("html").addClass("ie9"):8==parseInt($.browser.version)?$("html").addClass("ie8"):7==parseInt($.browser.version)?$("html").addClass("ie7"):6==parseInt($.browser.version)&&$("html").addClass("ie6"):$.browser.mozilla?$("html").addClass("gecko"):$.browser.webkit&&$("html").addClass("webkit"),/**
 *
 * Copyright 2013 LinkedIn Corp. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){var r,n,a,i,s,o,l,c,d,u,p=window.Sizzle||null,m=e[t],f="undefined",g=!1,h=typeof window.jQuery!==f,v=!1,b=window.document;try{v=typeof window.sessionStorage!==f}catch(y){}u={smoothScroll:!0,scrollDuration:1e3,scrollTopMargin:200,showCloseButton:!0,showPrevButton:!1,showNextButton:!0,bubbleWidth:280,bubblePadding:15,arrowWidth:20,skipIfNoElement:!0,cookieName:"hopscotch.tour.state"},m||(Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),d=function(){g&&m.startTour()},o={addClass:function(e,t){var r,n,a,i;if(e.className){for(n=t.split(/\s+/),r=" "+e.className+" ",a=0,i=n.length;i>a;++a)r.indexOf(" "+n[a]+" ")<0&&(r+=n[a]+" ");e.className=r.replace(/^\s+|\s+$/g,"")}else e.className=t},removeClass:function(e,t){var r,n,a,i;for(n=t.split(/\s+/),r=" "+e.className+" ",a=0,i=n.length;i>a;++a)r=r.replace(" "+n[a]+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")},getPixelValue:function(e){var t=typeof e;return"number"===t?e:"string"===t?parseInt(e,10):0},valOrDefault:function(e,t){return typeof e!==f?e:t},invokeCallbackArrayHelper:function(e){var t;return Array.isArray(e)&&(t=c[e[0]],"function"==typeof t)?t.apply(this,e.slice(1)):void 0},invokeCallbackArray:function(e){var t,r;if(Array.isArray(e)){if("string"==typeof e[0])return o.invokeCallbackArrayHelper(e);for(t=0,r=e.length;r>t;++t)o.invokeCallback(e[t])}},invokeCallback:function(e){return"function"==typeof e?e():"string"==typeof e&&c[e]?c[e]():o.invokeCallbackArray(e)},invokeEventCallbacks:function(e,t){var r,n,a=l[e];if(t)return this.invokeCallback(t);for(r=0,n=a.length;n>r;++r)this.invokeCallback(a[r].cb)},getScrollTop:function(){var e;return e=typeof window.pageYOffset!==f?window.pageYOffset:b.documentElement.scrollTop},getScrollLeft:function(){var e;return e=typeof window.pageXOffset!==f?window.pageXOffset:b.documentElement.scrollLeft},getWindowHeight:function(){return window.innerHeight||b.documentElement.clientHeight},getWindowWidth:function(){return window.innerWidth||b.documentElement.clientWidth},addEvtListener:function(e,t,r){return e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},removeEvtListener:function(e,t,r){return e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},documentIsReady:function(){return"complete"===b.readyState||"interactive"===b.readyState},evtPreventDefault:function(e){e.preventDefault?e.preventDefault():event&&(event.returnValue=!1)},extend:function(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},getStepTargetHelper:function(e){var t;return/^[#\.]/.test(e)?b.querySelector?b.querySelector(e):h?(t=jQuery(e),t.length?t[0]:null):p?(t=new p(e),t.length?t[0]:null):/^#[a-zA-Z][\w-_:.]*$/.test(e)?b.getElementById(e.substring(1)):null:b.getElementById(e)},getStepTarget:function(e){var t;if(!e||!e.target)return null;if("string"==typeof e.target)return e.target=o.getStepTargetHelper(e.target),e.target;if(Array.isArray(e.target)){var r,n;for(r=0,n=e.target.length;n>r;r++)if("string"==typeof e.target[r]&&(t=o.getStepTargetHelper(e.target[r])))return e.target=t,t;return null}return e.target},getI18NString:function(e){return s[e]||i[e]},setState:function(e,t,r){var n,a="";v?sessionStorage.setItem(e,t):(r&&(n=new Date,n.setTime(n.getTime()+24*r*60*60*1e3),a="; expires="+n.toGMTString()),b.cookie=e+"="+t+a+"; path=/")},getState:function(e){var t,r,n,a=e+"=",i=b.cookie.split(";");if(v)n=sessionStorage.getItem(e);else for(t=0;t<i.length;t++){for(r=i[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(a)){n=r.substring(a.length,r.length);break}}return n},clearState:function(e){v?sessionStorage.removeItem(e):this.setState(e,"",-1)}},o.addEvtListener(window,"load",d),l={next:[],prev:[],start:[],end:[],show:[],error:[],close:[]},c={},i={stepNums:null,nextBtn:"Next",prevBtn:"Back",doneBtn:"Done",skipBtn:"Skip",closeTooltip:"Close"},s={},n=function(e){this.init(e)},n.prototype={isShowing:!1,currStep:void 0,_createButton:function(e,t){var r=b.createElement("button"),n="hopscotch-nav-button";return r.id=e,t&&(r.innerHTML=t),n+=e.indexOf("prev")>=0?" prev":" next",o.addClass(r,n),r},setPosition:function(e){var t,r,n,a,i,s,l,c=6,d=o.getStepTarget(e),u=this.element,p=this.arrowEl;t=o.getPixelValue(e.width)||this.opt.bubbleWidth,n=o.valOrDefault(e.padding,this.opt.bubblePadding),o.removeClass(u,"fade-in-down fade-in-up fade-in-left fade-in-right"),!e.placement&&e.orientation&&(e.placement=e.orientation),a=d.getBoundingClientRect(),"top"===e.placement?(r=u.offsetHeight,i=a.top-r-this.opt.arrowWidth,s=a.left):"bottom"===e.placement?(i=a.bottom+this.opt.arrowWidth,s=a.left):"left"===e.placement?(i=a.top,s=a.left-t-2*n-2*c-this.opt.arrowWidth):"right"===e.placement&&(i=a.top,s=a.right+this.opt.arrowWidth),l="center"!==e.arrowOffset?o.getPixelValue(e.arrowOffset):e.arrowOffset,l?"top"===e.placement||"bottom"===e.placement?(p.style.top="",p.style.left="center"===l?t/2+n-p.offsetWidth/2+"px":l+"px"):("left"===e.placement||"right"===e.placement)&&(p.style.left="","center"===l?(r=r||u.offsetHeight,p.style.top=r/2+n-p.offsetHeight/2+"px"):p.style.top=l+"px"):(p.style.top="",p.style.left=""),"center"===e.xOffset?s=a.left+d.offsetWidth/2-t/2-n:s+=o.getPixelValue(e.xOffset),"center"===e.yOffset?(r=r||u.offsetHeight,i=a.top+d.offsetHeight/2-r/2-n):i+=o.getPixelValue(e.yOffset),e.fixedElement||(i+=o.getScrollTop(),s+=o.getScrollLeft()),u.style.position=e.fixedElement?"fixed":"absolute",u.style.top=i+"px",u.style.left=s+"px"},_initNavButtons:function(){var e=b.createElement("div");return this.prevBtnEl=this._createButton("hopscotch-prev",o.getI18NString("prevBtn")),this.nextBtnEl=this._createButton("hopscotch-next",o.getI18NString("nextBtn")),this.doneBtnEl=this._createButton("hopscotch-done",o.getI18NString("doneBtn")),this.ctaBtnEl=this._createButton("hopscotch-cta"),o.addClass(this.doneBtnEl,"hide"),e.appendChild(this.prevBtnEl),e.appendChild(this.ctaBtnEl),e.appendChild(this.nextBtnEl),e.appendChild(this.doneBtnEl),o.addEvtListener(this.prevBtnEl,"click",function(){m.prevStep(!0)}),o.addEvtListener(this.nextBtnEl,"click",function(){m.nextStep(!0)}),o.addEvtListener(this.doneBtnEl,"click",function(){m.endTour()}),e.className="hopscotch-actions",this.buttonsEl=e,this.containerEl.appendChild(e),this},_getCloseFn:function(){var e=this;return this.closeFn||(this.closeFn=function(t){e.opt.onClose&&o.invokeCallback(e.opt.onClose),e.opt.id&&!e.opt.isTourBubble?m.getCalloutManager().removeCallout(e.opt.id):e.destroy(),o.evtPreventDefault(t)}),this.closeFn},initCloseButton:function(){var e=b.createElement("a");return e.className="hopscotch-bubble-close",e.href="#",e.title=o.getI18NString("closeTooltip"),e.innerHTML=o.getI18NString("closeTooltip"),this.opt.isTourBubble?o.addEvtListener(e,"click",function(e){var t=m.getCurrStepNum(),r=m.getCurrTour(),n=t===r.steps.length-1;o.invokeEventCallbacks("close"),m.endTour(!0,n),e.preventDefault?e.preventDefault():event&&(event.returnValue=!1)}):o.addEvtListener(e,"click",this._getCloseFn()),o.valOrDefault(this.opt.showCloseButton,!0)||o.addClass(e,"hide"),this.closeBtnEl=e,this.containerEl.appendChild(e),this},_initArrow:function(){var e,t;return this.arrowEl=b.createElement("div"),this.arrowEl.className="hopscotch-bubble-arrow-container",t=b.createElement("div"),t.className="hopscotch-bubble-arrow-border",e=b.createElement("div"),e.className="hopscotch-bubble-arrow",this.arrowEl.appendChild(t),this.arrowEl.appendChild(e),this.element.appendChild(this.arrowEl),this},_setupCTAButton:function(e){var t=this;this._showButton(this.ctaBtnEl,!!e.showCTAButton),e.showCTAButton&&e.ctaLabel&&(this.ctaBtnEl.innerHTML=e.ctaLabel,this._ctaFn=function(){t.opt.isTourBubble||m.getCalloutManager().removeCallout(e.id),e.onCTA&&"function"==typeof e.onCTA&&e.onCTA()},o.addEvtListener(this.ctaBtnEl,"click",this._ctaFn))},_removeCTACallback:function(){this.ctaBtnEl&&this._ctaFn&&(o.removeEvtListener(this.ctaBtnEl,"click",this._ctaFn),this._ctaFn=null)},render:function(e,t,r,n){var a,i,s,l,c=this.element;return e?this.currStep=e:this.currStep&&(e=this.currStep),!e.placement&&e.orientation&&(e.placement=e.orientation),a=o.valOrDefault(e.showNextButton,this.opt.showNextButton),i=o.valOrDefault(e.showPrevButton,this.opt.showPrevButton),this.setTitle(e.title||""),this.setContent(e.content||""),this.opt.isTourBubble&&this.setNum(t),this.placement=e.placement,this.showPrevButton(this.prevBtnEl&&i&&t>0),this.showNextButton(this.nextBtnEl&&a&&!r),this.nextBtnEl.innerHTML=o.getI18NString(e.showSkip?"skipBtn":"nextBtn"),r?o.removeClass(this.doneBtnEl,"hide"):o.addClass(this.doneBtnEl,"hide"),this._setupCTAButton(e),this._setArrow(e.placement),s=o.getPixelValue(e.width)||this.opt.bubbleWidth,l=o.valOrDefault(e.padding,this.opt.bubblePadding),this.containerEl.style.width=s+"px",this.containerEl.style.padding=l+"px",c.style.zIndex=e.zindex||"","top"===e.placement?(c.style.top="-9999px",c.style.left="-9999px",o.removeClass(c,"hide"),this.setPosition(e),o.addClass(c,"hide")):this.setPosition(e),n&&n(!e.fixedElement),this},setTitle:function(e){return e?(this.titleEl.innerHTML=e,o.removeClass(this.titleEl,"hide")):o.addClass(this.titleEl,"hide"),this},setContent:function(e){return e?(this.contentEl.innerHTML=e,o.removeClass(this.contentEl,"hide")):o.addClass(this.contentEl,"hide"),this},setNum:function(e){var t=o.getI18NString("stepNums");t&&e<t.length?e=t[e]:e+=1,this.numberEl.innerHTML=e},_setArrow:function(e){o.removeClass(this.arrowEl,"down up right left"),"top"===e?o.addClass(this.arrowEl,"down"):"bottom"===e?o.addClass(this.arrowEl,"up"):"left"===e?o.addClass(this.arrowEl,"right"):"right"===e&&o.addClass(this.arrowEl,"left")},_getArrowDirection:function(){return"top"===this.placement?"down":"bottom"===this.placement?"up":"left"===this.placement?"right":"right"===this.placement?"left":void 0},show:function(){var e=this,t="fade-in-"+this._getArrowDirection(),r=1e3;return o.removeClass(this.element,"hide"),o.addClass(this.element,t),setTimeout(function(){o.removeClass(e.element,"invisible")},50),setTimeout(function(){o.removeClass(e.element,t)},r),this.isShowing=!0,this},hide:function(e){var t=this.element;return e=o.valOrDefault(e,!0),t.style.top="",t.style.left="",e?(o.addClass(t,"hide"),o.removeClass(t,"invisible")):(o.removeClass(t,"hide"),o.addClass(t,"invisible")),o.removeClass(t,"animate fade-in-up fade-in-down fade-in-right fade-in-left"),this.isShowing=!1,this},_showButton:function(e,t,r){var n="hide";r&&(n="hide-all"),typeof t===f&&(t=!0),t?o.removeClass(e,n):o.addClass(e,n)},showPrevButton:function(e){this._showButton(this.prevBtnEl,e)},showNextButton:function(e){this._showButton(this.nextBtnEl,e)},showCloseButton:function(e){this._showButton(this.closeBtnEl,e)},destroy:function(){var e=this.element;e&&e.parentNode.removeChild(e),this.closeBtnEl&&o.removeEvtListener(this.closeBtnEl,"click",this._getCloseFn()),this.ctaBtnEl&&this.onCTA&&this._removeCTACallback()},updateButtons:function(){this.showPrevButton(this.opt.showPrevButton),this.showNextButton(this.opt.showNextButton),this.showCloseButton(this.opt.showCloseButton),this.prevBtnEl.innerHTML=o.getI18NString("prevBtn"),this.nextBtnEl.innerHTML=o.getI18NString("nextBtn"),this.doneBtnEl.innerHTML=o.getI18NString("doneBtn")},init:function(e){var t,r,n,a=b.createElement("div"),i=b.createElement("div"),s=b.createElement("div"),l=this,c=!1;this.element=a,this.containerEl=i,this.titleEl=b.createElement("h3"),this.contentEl=b.createElement("div"),o.addClass(this.titleEl,"hopscotch-title"),o.addClass(this.contentEl,"hopscotch-content"),n={showPrevButton:u.showPrevButton,showNextButton:u.showNextButton,bubbleWidth:u.bubbleWidth,bubblePadding:u.bubblePadding,arrowWidth:u.arrowWidth,showNumber:!0,isTourBubble:!0},e=typeof e===f?{}:e,o.extend(n,e),this.opt=n,a.className="hopscotch-bubble animated",i.className="hopscotch-bubble-container",n.isTourBubble||(a.className+=" hopscotch-callout"),n.isTourBubble?(this.numberEl=b.createElement("span"),this.numberEl.className="hopscotch-bubble-number",i.appendChild(this.numberEl)):o.addClass(a,"no-number"),s.appendChild(this.titleEl),s.appendChild(this.contentEl),s.className="hopscotch-bubble-content",i.appendChild(s),a.appendChild(i),this._initNavButtons(),this.initCloseButton(),this._initArrow(),t=function(){!c&&l.isShowing&&(c=!0,setTimeout(function(){l.setPosition(l.currStep),c=!1},100))},o.addEvtListener(window,"resize",t),this.hide(),o.documentIsReady()?b.body.appendChild(a):(b.addEventListener?(r=function(){b.removeEventListener("DOMContentLoaded",r),window.removeEventListener("load",r),b.body.appendChild(a)},b.addEventListener("DOMContentLoaded",r,!1)):(r=function(){"complete"===b.readyState&&(b.detachEvent("onreadystatechange",r),window.detachEvent("onload",r),b.body.appendChild(a))},b.attachEvent("onreadystatechange",r)),o.addEvtListener(window,"load",r))}},a=function(){var e={};this.createCallout=function(t){var r;if(!t.id)throw"Must specify a callout id.";if(e[t.id])throw"Callout by that id already exists. Please choose a unique id.";return t.showNextButton=t.showPrevButton=!1,t.isTourBubble=!1,r=new n(t),e[t.id]=r,t.target&&r.render(t,null,null,function(){r.show()}),r},this.getCallout=function(t){return e[t]},this.removeAllCallouts=function(){var t;for(t in e)e.hasOwnProperty(t)&&this.removeCallout(t)},this.removeCallout=function(t){var r=e[t];e[t]=null,r&&r.destroy()}},r=function(e){var t,r,i,d,p,m,v,y,x=this,w=function(e){return t||(t=new n(i)),e&&(o.extend(t.opt,{bubblePadding:k("bubblePadding"),bubbleWidth:k("bubbleWidth"),showNextButton:k("showNextButton"),showPrevButton:k("showPrevButton"),showCloseButton:k("showCloseButton"),arrowWidth:k("arrowWidth")}),t.updateButtons()),t},k=function(e){return"undefined"==typeof i?u[e]:o.valOrDefault(i[e],u[e])},C=function(){var e;return e=0>p||p>=d.steps.length?null:d.steps[p]},S=function(){x.nextStep()},$=function(e){var t,r,n,a,i,s,l=w(),c=l.element,d=o.getPixelValue(c.style.top),u=d+o.getPixelValue(c.offsetHeight),p=o.getStepTarget(C()),m=p.getBoundingClientRect(),g=m.top+o.getScrollTop(),v=m.bottom+o.getScrollTop(),y=g>d?d:g,x=u>v?u:v,S=o.getScrollTop(),$=S+o.getWindowHeight(),q=y-k("scrollTopMargin");y>=S&&(y<=S+k("scrollTopMargin")||$>=x)?e&&e():k("smoothScroll")?typeof YAHOO!==f&&typeof YAHOO.env!==f&&typeof YAHOO.env.ua!==f&&typeof YAHOO.util!==f&&typeof YAHOO.util.Scroll!==f?(t=YAHOO.env.ua.webkit?b.body:b.documentElement,n=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:void 0,r=new YAHOO.util.Scroll(t,{scroll:{to:[0,q]}},k("scrollDuration")/1e3,n),r.onComplete.subscribe(e),r.animate()):h?jQuery("body, html").animate({scrollTop:q},k("scrollDuration"),e):(0>q&&(q=0),a=S>y?-1:1,i=Math.abs(S-q)/(k("scrollDuration")/10),(s=function(){var t=o.getScrollTop(),r=t+a*i;return a>0&&r>=q||0>a&&q>=r?(r=q,e&&e(),void window.scrollTo(0,r)):(window.scrollTo(0,r),o.getScrollTop()===t?void(e&&e()):void setTimeout(s,10))})()):(window.scrollTo(0,q),e&&e())},q=function(e,t){var r,n,a;p+e>=0&&p+e<d.steps.length?(p+=e,n=C(),a=function(){r=o.getStepTarget(n),r?t(p):(o.invokeEventCallbacks("error"),q(e,t))},n.delay?setTimeout(a,n.delay):a()):t(-1)},E=function(e,t){var r,n,a,i,s=w(),l=this;if(s.hide()._removeCTACallback(),e=o.valOrDefault(e,!0),r=C(),n=r,a=t>0?n.multipage:p>0&&d.steps[p-1].multipage,i=function(r){var i;return-1===r?this.endTour(!0):(e&&(i=t>0?o.invokeEventCallbacks("next",n.onNext):o.invokeEventCallbacks("prev",n.onPrev)),a?void o.setState(k("cookieName"),d.id+":"+p,1):(i=o.valOrDefault(i,!0),void(i?this.showStep(r):this.endTour(!1))))},!a&&k("skipIfNoElement"))q(t,function(e){i.call(l,e)});else if(p+t>=0&&p+t<d.steps.length){if(p+=t,r=C(),!o.getStepTarget(r)&&!a)return o.invokeEventCallbacks("error"),this.endTour(!0,!1);i.call(this,p)}return this},T=function(e){var t,r,n,a={};for(t in e)e.hasOwnProperty(t)&&"id"!==t&&"steps"!==t&&(a[t]=e[t]);return y.call(this,a,!0),r=o.getState(k("cookieName")),r&&(n=r.split(":"),m=n[0],v=n[1],v=parseInt(v,10)),this},N=function(e,t){var r,n;if(p=e||0,r=C(),n=o.getStepTarget(r))return void t(p);if(!n){if(o.invokeEventCallbacks("error"),k("skipIfNoElement"))return void q(1,t);p=-1,t(p)}},A=function(e){var t,r,n=d.steps[e],a=d.steps,i=a.length,s=d.id+":"+e,l=w(),c=o.getStepTarget(n);r=function(){l.show(),o.invokeEventCallbacks("show",n.onShow)},p=e,l.hide(!1),t=e===i-1,l.render(n,e,t,function(e){e?$(r):r(),n.nextOnTargetClick&&o.addEvtListener(c,"click",S)}),o.setState(k("cookieName"),s,1)},R=function(e){e&&this.configure(e)};this.getCalloutManager=function(){return typeof r===f&&(r=new a),r},this.startTour=function(e,t){var r,n=this;if(d||(d=e,T.call(this,e)),typeof t!==f){if(t>=d.steps.length)throw"Specified step number out of bounds.";p=t}return o.documentIsReady()?(p||d.id!==m||typeof v===f?p||(p=0):p=v,N(p,function(e){var t=-1!==e&&o.getStepTarget(d.steps[e]);return t?(o.invokeEventCallbacks("start"),r=w(),r.hide(!1),n.isActive=!0,void(o.getStepTarget(C())?n.showStep(e):(o.invokeEventCallbacks("error"),k("skipIfNoElement")&&n.nextStep(!1)))):void n.endTour(!1,!1)}),this):(g=!0,this)},this.showStep=function(e){var t=d.steps[e];return t.delay?setTimeout(function(){A(e)},t.delay):A(e),this},this.prevStep=function(e){return E.call(this,e,-1),this},this.nextStep=function(e){var t=C(),r=o.getStepTarget(t);return t.nextOnTargetClick&&o.removeEvtListener(r,"click",S),E.call(this,e,1),this},this.endTour=function(e,t){var r=w();return e=o.valOrDefault(e,!0),t=o.valOrDefault(t,!0),p=0,v=void 0,r.hide(),e&&o.clearState(k("cookieName")),this.isActive&&(this.isActive=!1,d&&t&&o.invokeEventCallbacks("end")),this.removeCallbacks(null,!0),this.resetDefaultOptions(),d=null,this},this.getCurrTour=function(){return d},this.getCurrTarget=function(){return o.getStepTarget(C())},this.getCurrStepNum=function(){return p},this.listen=function(e,t,r){return e&&l[e].push({cb:t,fromTour:r}),this},this.unlisten=function(e,t){var r,n,a=l[e];for(r=0,n=a.length;n>r;++r)a[r]===t&&a.splice(r,1);return this},this.removeCallbacks=function(e,t){var r,n,a,i;for(i in l)if(!e||e===i)if(t)for(r=l[i],n=0,a=r.length;a>n;++n)r[n].fromTour&&(r.splice(n--,1),--a);else l[i]=[];return this},this.registerHelper=function(e,t){"string"==typeof e&&"function"==typeof t&&(c[e]=t)},this.unregisterHelper=function(e){c[e]=null},this.invokeHelper=function(e){var t,r,n=[];for(t=1,r=arguments.length;r>t;++t)n.push(arguments[t]);c[e]&&c[e].call(null,n)},this.setCookieName=function(e){return i.cookieName=e,this},this.resetDefaultOptions=function(){return i={},this},this.resetDefaultI18N=function(){return s={},this},this.getState=function(){return o.getState(k("cookieName"))},y=function(e,t){var r,n,a,l,c=["next","prev","start","end","show","error","close"];for(i||this.resetDefaultOptions(),o.extend(i,e),e&&o.extend(s,e.i18n),a=0,l=c.length;l>a;++a)n="on"+c[a].charAt(0).toUpperCase()+c[a].substring(1),e[n]&&this.listen(c[a],e[n],t);return r=w(!0),this},this.configure=function(e){return y.call(this,e,!1)},R.call(this,e)},m=new r,e[t]=m)}(window,"hopscotch"),Locastyle.prototype.guidedTour=function(){"use strict";function e(e){t(e),s()}function t(e){o=e,$(l.selectors.open).on({click:r}),$(l.selectors.init).on({click:n}),$(l.selectors.close).on({click:a})}function r(){return $(l.selectors.tour).toggleClass("on"),$(l.selectors.init).focus().attr("tabindex","-1"),!1}function n(){hopscotch.endTour(),hopscotch.startTour(o,0),i(),a()}function a(){$(l.selectors.tour).removeClass("on")}function i(){var e=hopscotch.getCurrTour().steps.length;$("body").off("keyup").on("keyup",function(t){var r=t.keyCode;hopscotch.getCurrStepNum()<e&&hopscotch.getState()&&(39===r&&hopscotch.nextStep(),37===r&&hopscotch.prevStep()),27===r&&hopscotch.endTour()})}function s(){"true"!=$.cookie("cookie_tour")&&($(l.selectors.open).click(),$.cookie("cookie_tour","true",{path:window.location.pathname}))}var o,l={selectors:{open:".lnk-suggestions",init:".btn-tour",close:".btn-close",tour:".guided-tour"}};return{init:e,openWelcomeTour:r,closeWelcomeTour:a}}(),Locastyle.prototype.passwordStrength=function(){"use strict";function e(){t()}function t(){$("input[data-component=password-strength]").each(function(){var e=$(this).data("monitor-id"),t=$("#"+e);e&&r(this,t)})}function r(e,t){n(e,t,$(e).val()),$(e).on("keyup",function(){n(e,t,$(e).val())})}function n(e,t,r){a(t),$(t).addClass(i(r))}function a(e){var t=["empty","weak","medium","good","strong"];$.each(t,function(){$(e).removeClass(this)})}function i(e){return o(e)&&l(e)&&c(e)&&d(e)&&u(e)?"strong":o(e)&&l(e)&&c(e)&&d(e)?"good":o(e)&&l(e)&&c(e)&&u(e)?"good":o(e)&&l(e)&&c(e)?"medium":o(e)?"weak":s(e)?"weak":"empty"}function s(e){return e.length>0}function o(e){return e.length>7}function l(e){var t=new RegExp(/[0-9]/);return e.match(t)}function c(e){var t=new RegExp(/[a-z]/);return e.match(t)}function d(e){var t=new RegExp(/[A-Z]/);return e.match(t)}function u(e){var t=new RegExp(/\W/);return e.match(t)}function p(e){return i(e)}return{init:e,checkIt:p}}(),Locastyle.prototype.stepForm=function(){"use strict";function e(){t()}function t(){jQuery().validate&&$(".accordion").each(function(){$(this).find(".accordion-toggle").on("click",function(e){$(this).parents("form").valid()||e.preventDefault()})})}return{init:e}}(),Locastyle.prototype.sumValues=function(){"use strict";function e(){$(a.selector.container).each(function(e,n){var i=$(this);i=$(n),i.find(a.selector.item).each(function(e,n){var a=$(n);t(a),r(i,a)}),i.find(a.selector.elemTrigger).eq(0).trigger("change")})}function t(e){e.children("span").height(e.height()-20),e.children(".sumValue").css("line-height",e.height()-20+"px")}function r(e,t){t.find(a.selector.elemTrigger).on("change",function(){var t=$(this).parents(a.selector.item),r=$(this);$('[name="'+r.attr("name")+'"]',e).parents(a.selector.item).removeClass(a.itemActiveClass),t.toggleClass(a.itemActiveClass,r.prop("checked")),n(e)})}function n(e){var t=0,r="";e.find(":checked").each(function(e,n){t+=$(n).data("sumvalue"),r+=(e>0?a.textLabelSeparator:"")+$(n).data("sumlabel")});var n=$(a.selector.sumTotal,e),i=n.data("sumpattern");n.text(i.replace(/\{\{val\}\}/,t)),$(a.selector.sumText,e).text(""===r?a.defaultText:r)}var a={selector:{container:".ls-sum-values-container",item:".sumItem",elemTrigger:":radio, :checkbox",sumTotal:".sumResumeTotal",sumText:".sumResumeText"},itemActiveClass:"active",defaultText:"Nenhuma op\xe7\xe3o selecionada",textLabelSeparator:" + "};return{init:e}}(),$(function(){accessMenu(),subMenuAccess(),$("#menuPrincipal li > a").attr("tabindex","2"),$(".btn, .tabs a").attr("tabindex","3"),$("#menuPrincipal").attr("role","navigation"),$("#menuPrincipal li a").attr("role","menuitem"),$("#menuPrincipal li > a").attr("tabindex","2"),$(".pathWays").attr("role","navigation"),$("#footer").attr("role","contentinfo"),$(".alert").attr("role","alert"),$("a.btn, .modal-header .close").attr("role","button"),$(".boxGray").attr("role","region"),$(".boxGray h2").attr("role","presentation"),$("#header").attr("role","banner"),$(".content").attr("role","main"),$(".sidebar").attr("role","complementary"),$("input.required").attr("aria-required","true"),$(".lnkCoverAll").attr("tabindex","3"),$(".lnkCoverAll .btn").attr("tabindex","0"),$(".tabs").attr("role","tablist"),$(".tabs li a").attr({role:"tab","aria-selected":"false",tabindex:3}),$(".tabs li.active a").attr("aria-selected","true"),$(".tabs li.active a").attr("tabindex","3"),$(".boxCollapse header[data-target]").each(function(){var e=$(this).find("h4").text(),t=$(this).data("target");$(this).prepend('<a href="#" role="button" aria-haspopup="true" aria-controls="'+t+'" aria-label="'+e+'" title="'+e+'" class="lnkCollapse" tabindex="3"></a>')}),$(".collapse").find('[tabindex="3"]').attr("tabindex","0"),$(".collapse.in").find('[tabindex="0"]').attr("tabindex","3"),$(".onFocus, .modal").attr("tabindex","-1").focus(),$(".lnkContent").on("click",function(e){e.preventDefault(),$(".titleContent").attr("tabindex","-1").focus().css("outline","none"),$("html, body").animate({scrollTop:$(".titleContent").offset().top},500)}),$(".accessibility a").focus(function(){$(this).parent().addClass("show")}).blur(function(){$(this).parent().removeClass("show")}),$(".dropdown-menu li:last-child a").blur(function(){$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").click(),$(".serviceName a").focus()}),$(".shortcutBox a").focus(function(){$(this).parents("div:first").addClass("active")}).blur(function(){$(".shortcutBox > div").removeClass("active")})});