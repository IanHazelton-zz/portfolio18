//IMP HANDLER
(function () {

    var nowEventListners = false;
    var extLogged = [];
    var nowInPageListnerPost = false;
    var nowSimpleInPageListnerPost = false;
    var nowActivelog = false;
    var segment3first;
    var segment5first;
    var segment3last;
    var proactive_displayed = false;
    var clickedChat = false;


    var isInPropList = function (propList, currentProperty) {
        var propcheckrun = 0;
        if (propList) {
            var propListArray = propList.split(',');
            for (propIndex = 0; propIndex < propListArray.length; propIndex++) {
                propcheckrun++;
                if (propcheckrun > 50) {
                    break;
                }
                if (currentProperty == propListArray[propIndex]) {
                    return true;
                }
            }
        } else {

        }
        return false;
    };

    var hasNumber = function (myString) {
        return /\d/.test(myString);
    };

    var getSegmentProp = function (sourceProp, excludePropList, recognizePropList, includeNum, includeDot, isFocus) {
        var segmentProp = "";
        if (sourceProp) {
            var segments = sourceProp.split("/");
            if (segments.length > 1) {
                var segCount = 0;
                for (var i = segments.length; i > 1; i--) {
                    var curr = segments[i - 1].toString();
                    if (curr == "") {
                        continue;
                    }
                    if (!includeDot) {
                        if (curr.indexOf(".") > -1) {
                            continue;
                        }
                    }
                    if (!includeNum) {
                        if (hasNumber(curr)) {
                            continue;
                        }
                    }
                    if (excludePropList) {
                        if (isInPropList(excludePropList, curr)) {
                            continue;
                        }
                    }
                    segCount++;
                    if (segCount > 20) {
                        segmentProp = "other";
                        break;
                    }
                    segmentProp = curr;
                    break;
                }
            }
        }
        if (segmentProp == "") {
            segmentProp = "home";
        }
        if (isFocus) {
            segmentProp = segmentProp + "-focus";
        }
        return segmentProp;
    };

    var addSegmentProp = function (currentProp, targetProp, sepChar, sepCount, sepRolling, noRepeat) {
        var lastProp = IMP.getSitePropStatic(targetProp);
        var newProp = "";
        if ((lastProp) && (sepCount > 1)) {
            lastPropList = lastProp.split(sepChar);
            if (noRepeat) {
                var lastSegment = lastPropList[lastPropList.length - 1];
                if (currentProp.replace("-focus", "") == lastSegment.replace("-focus", "")) {
                    return lastProp;
                }
            }
            if (lastPropList.length < sepCount) {
                newProp = lastProp + sepChar + currentProp;
            } else {
                if (sepRolling) {
                    for (var i = 1; i < sepCount; i++) {
                        if (newProp == "") {
                            newProp = lastPropList[i];
                        } else {
                            newProp = newProp + sepChar + lastPropList[i];
                        }
                    }
                    newProp = newProp + sepChar + currentProp;
                } else {
                    newProp = lastProp;
                }
            }
        } else {
            newProp = currentProp;
        }
        return newProp;
    };

    return IMP_HL = {


        exist_handle_accepttel: function () { return true; },
        exist_handle_show: function () { return true; },
        exist_handle_acceptpuff: function () { return true; },
        exist_handle_customized: function () { return true },
        exist_handle_customized_number: function () { return true },
        exist_handle_customized_number_multi: function () { return true },
        exist_handle_receiveInfo: function () { return false; },
        exist_logUserGroup: function () { return false; },
        exist_logSessionGroup: function () { return false; },
        exist_handle_inithandler: function () { return false; },
        exist_handle_runhandler: function () { return false; },
        exist_handle_runhandlerresult: function () { return false; },
        exist_check_handlerpattern: function () { return false; },
        allow_nocookie: function () { return false; },
        allow_storage: function () { return false; },
        block_loginiframe: function () { return true; },
        block_showiniframe: function () { return true; },
        exist_handlecollectdata: function () { return true; },
        exist_handle_collectmeta: function () { return false },
        exist_handle_focus: function () { return true; },
        exist_handle_close: function() { return true; },
        exist_appendLocalSiteProp: function () { return true; },
        exist_appendLocalSitePropPostLog: function () { return true; },
        exist_appendLocalSitePropPostReply: function () { return true; },
        exist_handlelogdata: function () { return true; },
        allowed_propenc: function () { return 'webdatalog,pageproperty,event'; },
        expected_prop: function () { return ''; },

        readCookie: function(cname) {
    					var name = cname + "=";
    				    var ca = document.cookie.split(';');
    				    for(var i=0; i<ca.length; i++) {
    				        var c = ca[i];
    				        while (c.charAt(0)==' ') c = c.substring(1);
    				        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    				    }
    				    return "";
    			 },
        handle_logdata: function (logData) {

        },

        logUserGroup: function (code) {

        },

        handle_accepttel: function (number, caption, queuestatus) {

          if(typeof IMP_HL.readCookie === 'function') {

              if(IMP_HL.readCookie("imp_uk")) {


                if(typeof ga == 'undefined') {
                setTimeout(function(){


                    ga('set','dimension3','submit')
                    ga('send','event','NowInteract','Popup - Submit',IMP_HL.readCookie("imp_uk"))



                },1500)


                } else {

                    ga('set','dimension3','submit')
                    ga('send','event','NowInteract','Popup - Submit',IMP_HL.readCookie("imp_uk"))



                }






        }
        }
        },

        handle_acceptpuff: function (code) {

        },

        handle_show: function (caption, queuestatus) {

          if(typeof IMP_HL.readCookie === 'function') {

          if(IMP_HL.readCookie("imp_uk")) {


            if(typeof ga == 'undefined') {
            setTimeout(function(){

              ga('set','dimension3','open')
              ga('send','event','NowInteract','Popup - Show',IMP_HL.readCookie("imp_uk"),{nonInteraction: true});


            },1500)


            } else {

              ga('set','dimension3','open')
              ga('send','event','NowInteract','Popup - Show',IMP_HL.readCookie("imp_uk"),{nonInteraction: true});


            }

    }
}







        },

        handle_close: function (caption) {

                  if(typeof IMP_HL.readCookie === 'function') {

                        if(IMP_HL.readCookie("imp_uk")) {



                        if(typeof ga == 'undefined') {
                          setTimeout(function(){

                            ga('set','dimension3','close')
                            ga('send','event','NowInteract','Popup - Close',IMP_HL.readCookie("imp_uk"))

                          },1500)


                          } else {

                            ga('set','dimension3','close')
                            ga('send','event','NowInteract','Popup - Close',IMP_HL.readCookie("imp_uk"))

                          }


                      }
                      }



        },
        handle_focus: function (focustype) {

            if(typeof IMP_IP == "object" && nowActivelog)
            {

             if (!focustype) {
                        focustype='pagefocus';
                       }


              IMP_IP.inpage_init();

              data = focustype+"||||"+elapsedTime;
              IMP.appendSitePatt(data);
            }

          },
        handle_customized: function (code, interactionLogId, displayReason, displayReasonDetail, isReferenceMessage) {

        },

        handle_customized_number_multi: function (standardReplaceNo, numberCollection, a, b, c, d) {
        		try {
        				var numberPairCollection = JSON.parse(numberCollection);
        				for (cn = 0; cn < numberPairCollection.length; cn++) {
        						var numberPair = numberPairCollection[cn];

        						if (numberPair[0] == "StandardNumber") {
        								IMP_HL.handle_customized_number(standardReplaceNo, numberPair[1], a, b, c, d);
        						}
        						else {
        								IMP_HL.handle_customized_number(numberPair[0], numberPair[1], a, b, c, d);
        						}

        				}
        		}
        		catch (locex) { }
        },

    		handle_customized_number: function (noA,noB,interactionLogId, displayReason, displayReasonDetail) {


          var numbers = noA.split('|');

          for (var n = 0; n < numbers.length; n++) {

              noA = numbers[n];
              var noA_link = noA.replace(/ /g, '');
              var noB_link = noB.replace(/ /g, '');
              noB_link = noB_link.replace(/-/g, '');

              try {
                  var phoneLinks = document.querySelectorAll('[href^="tel:' + noA_link + '"]');
                  [].forEach.call(phoneLinks, function(phoneLink) {
                    phoneLink.setAttribute("href","tel:" + noB_link + "")
                  });

                  trackDisplayed = false;

                      nodes =  IMP_HL.findElements(document.body,noA);


                        for(var i = 0; i < nodes.length; i++){
                              if(nodes[i].tagName != "SCRIPT")
                              {
                                trackDisplayed = true;
                                nodes[i].innerText = nodes[i].innerText.replace(noA,noB)
                              }
                        }
                        if (trackDisplayed) {
                          IMP.trackDisplay(interactionLogId, displayReason, displayReasonDetail);

                        }
                    }
                    catch (e)
                    {
                    }
                  }
    		},

        appendLocalSiteProp: function (isFocus) {


			try {
				var currSegment=getSegmentProp(document.location.pathname,"gdn,su,s,cid","",false,true,isFocus);
				segment3first = addSegmentProp(currSegment,"segment3first","|",3,false,false);
				segment5first = addSegmentProp(currSegment,"segment5first","|",5,false,false);
				segment3last = addSegmentProp(currSegment,"segment3last","|",3,true,false);
				IMP.appendSiteProp("segment3first",segment3first);
				IMP.appendSiteProp("segment5first",segment5first);
				IMP.appendSiteProp("segment3last",segment3last);
				IMP.appendSiteProp("segment",currSegment);
			}
			catch (e) {
				IMP.appendSiteProp("imperror",e);
			}

            try {
                var title_arr = new Array();
                title_arr = document.getElementsByTagName('title');

                if (title_arr.length > 0) {
                    IMP.appendSiteProp('title', title_arr[0].innerHTML);
                }
            }
            catch (e) { }

            try {
                if (typeof localStorage === 'object') {
                    if (typeof localStorage.getItem === 'function') {

                        var keyValue = localStorage.getItem("nowInteract_data");
                        var keyValueJson = JSON.parse(keyValue);

                        if ("group" in keyValueJson) {
                            IMP.appendSiteProp('group', keyValueJson.group)
                        }

                        if ("targetted" in keyValueJson) {

                            if (keyValueJson.targetted) {
                                IMP.appendSiteProp('targetted', "1")
                            } else {
                                IMP.appendSiteProp('targetted', "0")
                            }
                        }

                        if ("received" in keyValueJson) {
                            if (keyValueJson.received) {
                                IMP.appendSiteProp('received', "1")
                            } else {
                                IMP.appendSiteProp('received', "0")
                            }
                        }
                    }
                }
            } catch (locex2) { }

            if (!nowEventListners) {

              try {
                      var clientId = ga.getAll()[0].get('clientId');
                      var _gid = ga.getAll()[0].get('_gid');

                      IMP.appendSiteProp("gaid",clientId);
                      IMP.appendSiteProp("gid",_gid);
                } catch(e){}



                IMP_HL.trackObj('click','a[href*="facebook."]', "EVENT_EXT_FACEBOOK_INPAGE", "Facebook");
                IMP_HL.trackObj('click','a[href*="instagram."]', "EVENT_EXT_INSTAGRAM_INPAGE", "Instagram");
                IMP_HL.trackObj('click','a[href*="twitter."]', "EVENT_EXT_TWITTER_INPAGE", "Twitter");
                IMP_HL.trackObj('click','a[href*="plus.google.com"]', "EVENT_EXT_GOOGLEPLUS_INPAGE", "GooglePlus");
                IMP_HL.trackObj('click','a[href*="pinterest."]', "EVENT_EXT_PINTEREST_INPAGE", "Pinterest");
                IMP_HL.trackObj('click','a[href*="youtube."]', "EVENT_EXT_YOUTUBE_INPAGE", "Youtube");
                IMP_HL.trackObj('click','a[href*="linkedin."]', "EVENT_EXT_LINKEDIN_INPAGE", "LinkedIn");
                IMP_HL.trackObj('click','a[href*="whatsapp."]', "EVENT_EXT_WHATSAPP_INPAGE", "WhatsApp");




                IMP_HL.trackObj('click','.t2-icon-chat a', "EVENT_EXTCHAT_STARTED", "Chat");
                IMP_HL.trackObj('click','#emailform [type="submit"]', "EVENT_EMAIL_SENT", "Email");

                IMP_HL.trackObj('click','[href="tel:0772252525"]', "EVENT_EXT_CALLIN", "Callin");
                IMP_HL.trackObj('click','[href="tel:+46772252525"]', "EVENT_EXT_CALLIN", "Callin");



                nowEventListners = true;
            }

        },

        appendLocalSitePropPostLog: function () {
            try {
                IMP.appendSitePropStatic("segment3first", segment3first);
                IMP.appendSitePropStatic("segment5first", segment5first);
                IMP.appendSitePropStatic("segment3last", segment3last);
            }
            catch (e) {
                IMP.appendSitePropStatic("imperror", e);
            }
        },

        appendLocalSitePropPostReply: function (logactive, eventlogactive, detaillogactive) {

            if (logactive) {
                nowActivelog = true;
                if (!nowInPageListnerPost) {
                    if (typeof IMP_IP == "object") {
                        IMP_IP.inpage_init();
                    }
                    nowInPageListnerPost = true;
                }
            }

            if (eventlogactive) {
                if (!nowSimpleInPageListnerPost) {


                    nowSimpleInPageListnerPost = true;
                }
            }

            if (detaillogactive) {

            }

        },
        triggerOrder:function(type,data)
				{
            if(typeof type !="string")
            {
              type = "";
            }

            if(typeof data !="string")
            {
              data = "";
            }

					IMP.appendSiteProp("order-type",type);
					IMP.appendSiteProp("order-data",data);
					IMP.appendSiteProp("impevent","Order");
					IMP.trackEventInteract();

				},
        getVariant:function (){

            var variant = "test";

          try {

              var uk = IMP.getUKey()

              if(uk.substring(0,1) == "F")
              {
                  variant = "control";
              }


          } catch (e) {

          }


            return variant;
        },
        findElements: function (context,text) {


                          var filter = {
                              acceptNode: function(node){
                                  if(node.nodeType === document.TEXT_NODE && node.nodeValue.includes(text)){
                                       return NodeFilter.FILTER_ACCEPT;
                                  }
                                  return NodeFilter.FILTER_REJECT;
                              }
                            };
                              var nodes = [];
                              var walker = document.createTreeWalker(context, NodeFilter.SHOW_TEXT, filter, false);
                              while(walker.nextNode()){
                              nodes.push(walker.currentNode.parentNode);
                              }

                            return nodes;
        },
        selectorMatches: function (el, selector) {

      	  var p = Element.prototype;
        	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
        		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        	};
        	return f.call(el, selector);
        },
        trackQuery: function (_sel_string) {

          var new_selc = new IMP_Q( _sel_string );
          return new_selc;

        },
        trackObj: function (eventtype,selector, rule, tool) {
            var extCounter = extLogged.length;
            extLogged[extCounter] = false;
            var eventtypeListner = "";

            if(eventtype == "click")
            {
                var hasTouchStartEvent = 'ontouchstart' in document.createElement('div');
                if(hasTouchStartEvent)
                  {
                    eventtypeListner = 'touchstart';
                  }
                  else {
                    eventtypeListner = 'mousedown';
                  }
            }
            else {
                eventtypeListner = eventtype;
            }



            IMP_HL.trackQuery(document).on(eventtypeListner,selector, function( _event, _element ){


              if (!extLogged[extCounter])
                {
                    IMP.trackLogToolAccept(rule, tool);
                    extLogged[extCounter] = true;
                }


            });

        }

      };
    } )();


//IMP Q
var IMP_Q=function(){this.context=[];var self=this;this.selector=function(_elem,_sel){return _elem.querySelectorAll(_sel);},this.on=function(_event,_element,_function){this.context=self.selector(document,_element),document.addEventListener(_event,function(e){var elem=e.target;while(elem!=null)('#'+elem.id==_element||self.isClass(elem,_element)||self.elemEqal(elem))&&_function(e,elem),elem=elem.parentElement;},!1);},this.isClass=function(_elem,_class){var names=_elem.className.trim().split(' ');for(this.it=0;this.it<names.length;this.it++)names[this.it]='.'+names[this.it];return names.indexOf(_class)!=-1?!0:!1;},this.elemEqal=function(_elem){var flg=!1;for(this.it=0;this.it<this.context.length;this.it++)this.context[this.it]===_elem&&!flg&&(flg=!0);return flg;};};


//IMP IP
var startTime='';var nowInPageListner=!1;var windowHeight='';var docHeight='';var scrollBlocks=0;var oldtarget=null;var titleObjects=[];IMP_IP={inpage_getObject:function(obj,ev){var _orgObj=obj;var _id=obj.getAttribute('id');var _class=obj.getAttribute('class');var _object=obj;var _tagName=obj.tagName;var _text=obj.textContent.trim();var textPage=_text;_text=_text.replace(/(\r\n|\n|\r)/gm,''),_text.length>25&&(_text=_text.substring(0,24)+'...'),_text=_text.replace('|',''),_text=_text.replace('/',''),_text=_text.replace(/'/g,''),_text=_text.replace(/"/g,'');var _event=ev;var _idName='';if(_id!==void 0&&_id!=null)_idName=_id;else if(_idName=_class,_class===void 0||_class==null)for(i=0;i<10;i++)if(_object=_object.parentElement,_class=_object.getAttribute('class'),_tagName=_object.tagName,_class!==void 0&&_class!=null){_idName=_class;break;}if(_idName!=''){nowTime=new Date().getTime(),elapsedTime=nowTime-startTime,data=_event+'|'+_tagName+'|'+_idName+'|'+_text+'|'+elapsedTime;var title='';ev=='click'?title=IMP_IP.inpage_getClosestTitleByObj(_orgObj):(currentScroll=document.documentElement.scrollTop,title=IMP_IP.inpage_getClosestTitle(currentScroll,null)),titleText='',headerType='',title!=null&&(titleText=title.text,headerType=title.tag),IMP.appendSitePatt(data,'',titleText,headerType);}},inpage_getClosestTitleByObj:function(obj){for(sx=document.documentElement.scrollTop,rect=obj.getBoundingClientRect(),ox=rect.top,x=sx+ox,found=!1,title=null,currentTitleX=0,x+=0,i=0;i<titleObjects.length;i++)titleObjects[i].top<x&&(titleObjects[i].top>currentTitleX||currentTitleX==0)&&(currentTitleX=titleObjects[i].top,title=titleObjects[i],found=!0);return title;},inpage_getClosestTitle:function(x,y){for(found=!1,title=null,currentTitleX=0,x+=0,i=0;i<titleObjects.length;i++)titleObjects[i].top>x&&(titleObjects[i].top<currentTitleX||currentTitleX==0)&&(currentTitleX=titleObjects[i].top,title=titleObjects[i],found=!0);if(!found)for(i=0;i<titleObjects.length;i++)titleObjects[i].top<x&&(titleObjects[i].top>currentTitleX||currentTitleX==0)&&(currentTitleX=titleObjects[i].top,title=titleObjects[i],found=!0);return title;},inpage_getPrices:function(){var prices=[];var textPage=document.body.innerText;prices=textPage.match(/\d+((,\d+)+)?(.\d+)?(.\d+)?(,\d+)?(\b kr|,-| ,-|:-|SEK| :-| SEK\b)+/g),prices==null&&(prices=textPage.match(/(\$|£)+\d?((,\d+)+)?(\d+)?(.\d+)?(\d+)/g));var _hp='';var _lp='';var _ap='';var _tp='';var _fp='';if(prices!=null){var _np=prices.length;_fp=prices[0],_fp=_fp.replace(/\s/g,''),_fp=_fp.replace(/\$|£/g,''),_fp=parseFloat(_fp);var result=prices.map(function(x){return x=x.replace(/\s/g,''),x=x.replace(/\$|£/g,''),parseFloat(x);});_hp=Math.max.apply(null,result),_lp=Math.min.apply(null,result),thisTotal=0,thisAverage=0;for(var i=0;i<result.length;i++)thisTotal+=result[i];thisAverage=Math.round(thisTotal/result.length),_ap=thisAverage,_tp=thisTotal,data='prices|'+_np+'|'+_fp+'|'+_lp+'|'+_hp+'|'+_ap+'|'+_tp,IMP.appendSitePatt(data);}},inpage_getClosest:function(el,selector){},inpage_addListners:function(){if(!nowInPageListner){var hasTouchStartEvent='ontouchstart'in document.createElement('div');hasTouchStartEvent?eventtypeListner='touchstart':eventtypeListner='mousedown';var titles=document.querySelectorAll('h1, h2, h3'),i;for(i=0;i<titles.length;++i){var rect=titles[i].getBoundingClientRect();titleObject={},titleObject.text=titles[i].innerText,titleObject.tag=titles[i].tagName,titleObject.top=rect.top,titleObject.left=rect.left,titleObjects.push(titleObject);}window.addEventListener('hashchange',function(event){oldtarget=null;});var hasTouchStartEvent='ontouchstart'in document.createElement('div');document.body.addEventListener(hasTouchStartEvent?'touchstart':'mousedown',function(e){var targetElem=e.target;if(IMP_HL.selectorMatches(targetElem,'div,span,a,section,img,h1,h2,h3,h4,h5,h6,li,article,p,table,tr,td,svg,iframe,label')){if(targetElem==oldtarget)return;IMP_IP.inpage_getObject(targetElem,'click'),oldtarget=targetElem;}}),document.body.addEventListener('focusin',function(e){var targetElem=e.target;IMP_HL.selectorMatches(targetElem,'input,textarea')&&IMP_IP.inpage_getObject(targetElem,'focus');}),document.body.addEventListener('focusout',function(e){var targetElem=e.target;IMP_HL.selectorMatches(targetElem,'input,textarea')&&IMP_IP.inpage_getObject(targetElem,'blur');}),document.body.addEventListener('change',function(e){var targetElem=e.target;IMP_HL.selectorMatches(targetElem,'input,textarea')&&IMP_IP.inpage_getObject(targetElem,'change');}),document.body.addEventListener('copy',function(e){var targetElem=e.target;IMP_IP.inpage_getObject(targetElem,'copy');}),document.body.addEventListener('paste',function(e){var targetElem=e.target;IMP_IP.inpage_getObject(targetElem,'paste');});var isScrolling;window.addEventListener('scroll',function(event){window.clearTimeout(isScrolling),isScrolling=setTimeout(function(){currentScroll=document.documentElement.scrollTop,windowHeight=window.innerHeight,scrollBlock=currentScroll/windowHeight,scrollBlock=Math.ceil(scrollBlock)+1,nowTime=new Date().getTime(),elapsedTime=nowTime-startTime,pos=scrollBlock+'-'+scrollBlocks,data='scroll|'+pos+'|||'+elapsedTime;var title=IMP_IP.inpage_getClosestTitle(currentScroll,null);var titleText='';var headerType='';title!=null&&(titleText=title.text,headerType=title.tag),IMP.appendSitePatt(data,titleText,'',headerType);},66);},!1);}},inpage_init:function(){windowHeight=window.innerHeight,docHeight=document.body.scrollHeight,scrollBlocks=docHeight/windowHeight,scrollBlocks=Math.ceil(scrollBlocks),isNaN(scrollBlocks)&&(scrollBlocks=0),startTime=new Date().getTime(),IMP.appendSitePatt('ver|20'),IMP_IP.inpage_getPrices(),currentScroll=document.documentElement.scrollTop,scrollBlock=currentScroll/windowHeight,scrollBlock=Math.ceil(scrollBlock)+1,pos=scrollBlock+'-'+scrollBlocks,data='scroll|'+pos+'|||0',IMP.appendSitePatt(data),IMP_IP.inpage_addListners(),nowInPageListner=!0;}};


//IMP Base
(function(){function A(){try{return window.self!==window.top}catch(a){return!0}}function Sb(){try{return document.hasFocus()}catch(a){return!0}}var L="https:"==document.location.protocol?"https:":"http:",U,ua,S=3E3,fa=[],Ca=[],ga=0,eb=0,Da=[],i=[,"imp_norm","imp_puff","imp_special"],fb=i[1],Ea=[];Ea.imp_norm=1;Ea.imp_puff=2;Ea.imp_special=3;var r=[];r[i[1]]=0;r[i[2]]=0;r[i[3]]=0;var ha=[];ha[i[1]]=!1;ha[i[2]]=!1;ha[i[3]]=!1;var ia=[,0,0,0],T=[];T[i[1]]="";T[i[2]]="";T[i[3]]="";var V=[];V[i[1]]=0;
V[i[2]]=0;V[i[3]]=0;var Z=[];Z[i[1]]="";Z[i[2]]="";Z[i[3]]="";var gb=[,0,0,0],hb=[,0,0,0],Fa=[,0,0,0],Ga=[,0,0,0],ib=[,0,0,0],ja=[,0,0,0],jb=[];ja[1]=!1;ja[2]=!1;ja[3]=!1;var $=[];$[i[1]]=!1;$[i[2]]=!1;$[i[3]]=!1;var Tb=[],l=[,[],[],[]];l[1][1]=[];l[1][2]=[];l[1][3]=[];l[1][4]=[];l[2][1]=[];l[2][2]=[];l[2][3]=[];l[2][4]=[];l[3][1]=[];l[3][2]=[];l[3][3]=[];l[3][4]=[];var kb=!1,aa=[],Ub=[],Uc=[],lb=[],Vb=[],Wb=[],N=[];N[i[1]]=[];N[i[2]]=[];N[i[3]]=[];var va,wa,mb,Ha,nb,Ia=0,Ja=!1,Xb=0,Yb="nowinteract.com",
Ka=0,ob=0,Zb="notset",$b=!1,pb=!1,qb=!1,ka=!1,La=0,Ma=0,ac=0,rb=0,O=0,Na=0,Oa=0,W=!1,sb=!1,Pa="scroll_0",tb,Qa=!1,bc=!1,cc=!1,Q,ub=!1,la=0,vb=0,Ra=0,Sa=0;Math.round((new Date).getTime()/1E3);var z="",K="",X="",Ta="",dc="",wb=!1,ec=0,ma=!1,xb=!1,yb=!1,Ua=!1,zb=0,Va=0,fc=0,na=!0,gc=!1,Wa=!1,Xa=!1,hc=!1,ic=(new Date).getTime(),Vc=(new Date).getTime(),Ab=(new Date).getTime();imprushdialogueany=!1;imprushdialogueparams=[,"","",""];var M=[,"",""],jc=!1,Bb=!1,ba=!1,ca,B=document,kc=window,u=kc.encodeURIComponent||
escape,Wc=kc.decodeURIComponent||unescape,t=B.location.href,xa=B.referrer,ya="",lc=function(a){a=a.split(".");return 4===a.length?a.every(function(a){return 0<=parseInt(a,10)&&255>=parseInt(a,10)}):!1},oa="",oa=function(){var a=document.location.hostname,b=a.toString().substr(a.toString().length-3),c=a.lastIndexOf("."),d=lc(a);-1<c&&!d&&(c=a.lastIndexOf(".",c-1),-1<c&&(".uk"==b||".in"==b||".id"==b||".il"==b||".za"==b||".cr"==b||".nz"==b||".jp"==b||".kr"==b||".pe"==b||".br"==b||".ck"==b?(b=a.lastIndexOf(".",
c-1),-1<b&&(a=a.substr(b+1))):a=a.substr(c+1)));return a}(),mc=function(a){var b={},c=a.indexOf("?");if(-1==c)return b;a=a.substring(c+1).split("&");for(c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]=d[1]}return b},o=function(a,b,c,d,e,j){var g;c&&(g=new Date,g.setTime(g.getTime()+864E5*c));oa&&(e=oa);B.cookie=a+"="+u(b)+(c?";expires="+g.toGMTString():"")+";path="+(d?d:"/")+(e?";domain="+e:"")+(j?";secure":"")},Cb=function(a,b,c,d,e,j){var g;c&&(g=new Date,g.setTime(g.getTime()+864E5*c));oa&&(e=
oa);B.cookie=a+"="+b+(c?";expires="+g.toGMTString():"")+";path="+(d?d:"/")+(e?";domain="+e:"")+(j?";secure":"")},n=function(a){return(a=RegExp("(^|;)[ ]*"+a+"=([^;]*)").exec(B.cookie))?Wc(a[2]):0},nc=function(){var a="",a=new Date,b=a.getDate().toString(),c;c=a.getMonth()+1;c=10>c?"0"+c.toString():c.toString();for(var d=a.getFullYear().toString(),e=navigator.userAgent.toString().replace(/[\/();:. ]/g,"").toUpperCase(),j=e.length,g=Math.floor(j/22),a="",f=0,k=0;k<j;k+=g)22>f&&(a+=e.charAt(k)),f++;
primitiveStartChar="A";15>g&&0<g&&(primitiveStartChar="0123456789ABCDEF".toString().charAt(g));return primitiveStartChar+a+"_"+d+c+b},E=function(){if(Ja)return nc();var a=n("imp_uk");a||(a=w("imp_uk"))||(a=Ya());o("imp_uk",a,365);C("imp_uk",a);return a},pa=function(a){if(Ja)return nc();var b=n("imp_sk"),c=n("imp_sb"),d;a:{try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.session_persist){d=IMP_HL.session_persist();break a}}catch(e){}d=!1}if(d)c?b=c:(c=b=Ya(),a&&(oc(b),pc(E())));else if(!b||
!c)c=b=Ya(),a&&(oc(b),pc(E()));o("imp_sk",b);o("imp_sb",c,qc()/24);return b},rc=function(){o("imp_int",Math.round((new Date).getTime()/1E3),30)},sc=function(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(a,c){return String.fromCharCode("0x"+c)}))},Xc=function(a){return decodeURIComponent(atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))},w=function(a,b){var c="";try{if("object"===typeof localStorage&&"function"===typeof localStorage.getItem&&
(c=localStorage.getItem(a),b))try{c=Xc(c)}catch(d){}}catch(e){}return c},C=function(a,b,c){try{if("object"===typeof localStorage&&"function"===typeof localStorage.setItem){if(c)try{b=sc(b.toString())}catch(d){}localStorage.setItem(a,b.toString())}}catch(e){}},v=function(a){try{"object"===typeof localStorage&&"function"===typeof localStorage.setItem&&localStorage.removeItem(a)}catch(b){}},tc=function(a){for(var b=a.split("/"),c=!1,d=a=0,e=1,j=0,g=1,f=1,k=1,f=0,Y=!0,i=0,h=!1,m=!1,p=0,l=0,D="",y=0,o=
0,s=0;s<b.length;s++){o++;if(100<o)break;currEventList=b[s].toString().split("|");if(0<currEventList.length){g=currEventList[0];if("scroll"==g)if(c)a++,d++,1<currEventList.length&&(g=currEventList[1].split("-"),1<g.length&&(f=g[0],g=g[1],f>e&&(e=f,j=Math.round(100*e/g),h=!0),f>k?(Y||i++,Y=!0):f<k&&(Y&&i++,Y=!1),1==f&&(m=!0),k=f,f=Math.round(100*k/g)));else{c=!0;continue}else if("click"==g||"change"==g||"copy"==g||"paste"==g)"click"==g&&p++,d++;4<currEventList.length&&(l=Math.round(currEventList[4]/
1E3));1<currEventList.length&&0==currEventList[1].toString().indexOf("IMG")&&y++;2<currEventList.length&&"INPUT"==currEventList[1]&&(D=currEventList[2])}}b={};if(!ka)b.scrollCount=a,b.activityCount=d,b.scrollLatest=k,b.scrollLatestPerc=f,b.scrollDirChangeCount=i,b.scrollHasScrolled=h,b.scrollBackToTop=m,b.scrollMax=e,b.scrollMaxPerc=j;b.lastActivitySec=l;b.imageClickCount=y;b.lastInputField=D;a=0;for(x in b)if(a++,20<a)break;return b},qa=function(a){try{a||(a=2);var b=w("imp_pt"),c=w("imp_lpt",!0),
d=w("imp_plpt",!0),e=w("imp_lov"),j=w("imp_clpt",!0),g=w("imp_cov");if(b||c||2!=a)if(IMP.appendSiteProp("webevent",a),b&&IMP.appendSiteProp("webdata",b),c)if(a={},uc()){a.webdatalog=c;a.activity={};a.activity=tc(c);a.path=d;if(e)a.pattoverflow="1";if(j)a.content=j;if(g)a.contoverflow="1";if(1500<JSON.stringify(a).toString().length)a.webdatalog="",a.sumoverflow="1";IMP.appendSiteProp("webdatalog",JSON.stringify(a))}else IMP.appendSiteProp("webdatalog",c),e&&IMP.appendSiteProp("implog","pattoverflow")}catch(f){}},
Za=function(){try{v("imp_pt"),v("imp_lpt"),v("imp_plpt"),v("imp_lov"),v("imp_clpt"),v(imp_longpattern_conenten_overflow_key),X=K=z=""}catch(a){}},vc=function(a,b){var c=n("imp_uk");c||(c="unknown");var d=n("imp_sk");d||(d="unknown");c!=a&&(IMP.appendSiteProp("imptransferuk",c),o("imp_uk",a,365));d!=b&&(IMP.appendSiteProp("imptransfersk",d),o("imp_sk",b),o("imp_sb",b,qc()/24))},wc=function(){var a=n("imp_curr_selection");return a?a:"1"},Ya=function(){for(var a=[],b=0;32>b;b++)a[b]="0123456789ABCDEF".substr(Math.floor(16*
Math.random()),1);a[12]="4";a[16]="0123456789ABCDEF".substr(a[16]&3|8,1);return a.join("")},Db=function(){var a="",b;a:{try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.allowed_propenc){b=IMP_HL.allowed_propenc();break a}}catch(c){}b=""}var d=!1;for(keyIndex=0;keyIndex<ga;keyIndex++){var e;a:{e=fa[keyIndex];if(b){var j=b.split(",");for(propIndex=0;propIndex<j.length;propIndex++)if(e==j[propIndex]){e=!0;break a}}e=!1}e?(a+="&KeyValue="+u(fa[keyIndex])+":"+u(sc(Ca[keyIndex])),d=!0):a+="&KeyValue="+
u(fa[keyIndex])+":"+u(Ca[keyIndex])}d&&(a+="&KeyValue="+u("impenc")+":"+u(b));return a},G=function(a,b){var c;c="siteid="+ya+"&url="+u(t)+"&urlref="+u(xa)+"&userkey="+u(E())+"&impsess="+u(pa(!1))+"&rand="+Math.random();b&&xc();c+=Db();ba&&(c+="&ispriority=1");return U+c},H=function(a,b){var c;c="siteid="+ya+"&url="+u(L+"//impevent")+"&urlref="+u(t)+"&userkey="+u(E())+"&impsess="+u(pa(!1))+"&rand="+Math.random();b&&xc();c+=Db();ba&&(c+="&ispriority=1");return U+c},Yc=function(a,b,c){b="InteractionLogId="+
u(b)+"&PhoneNumber="+u(c)+"&uk="+u(E())+"&rand="+Math.random();return a+"?"+b},q=function(a){return isNaN(a)?0:a},P=function(a){return a?a:!1},Zc=function(a,b){var c;c=a;var d=a.lastIndexOf("/");-1<d&&(c=a.slice(d+1));return c?"-"==c.toString().substr(0,1)?"":-1<c.toString().indexOf("--")?"":a:da(b)+"close.png"},da=function(a){var b="",b=a.lastIndexOf("/");-1<b?b=a.substr(0,b+1):(b=U.lastIndexOf("/"),b=-1<b?U.substr(0,b+1):"");return b},yc=function(a){var a=da(a).toString(),a=a.replace("https://",
""),a=a.replace("http://",""),b=a.indexOf("/");0<b&&(a=a.substr(0,b));return a},$c=function(a){if(jc)return!1;if(n("imp_sb")&&n("imp_rs"))return!0;if(a){if(0<=a.toString().indexOf("##n9724##"))return!0;if(0<=a.toString().indexOf("##n3824##"))return o("imp_rs","1"),!0}return!1},zc=function(a){try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_handle_inithandler&&IMP_HL.exist_handle_inithandler()&&"function"==typeof IMP_HL.handle_inithandler&&IMP_HL.handle_inithandler(a)}catch(b){}},Eb=function(a,
b,c,d,e,j){a||(a="1");b||(b="start");c||(c=E());d||(d="CoTV");e||(e="CS-5000-01-01");j||(j="sv");var g="0";try{g="object"===typeof IMP_HL?"function"==typeof IMP_HL.exist_handle_runhandler?IMP_HL.exist_handle_runhandler()?"function"==typeof IMP_HL.handle_runhandler?IMP_HL.handle_runhandler(a,b,c,d,e,j):"-1":"-2":"-3":"-4"}catch(f){g="-5"}return g},Ac=function(a){try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_appendLocalSiteProp&&IMP_HL.exist_appendLocalSiteProp()&&"function"==typeof IMP_HL.appendLocalSiteProp&&
(result=IMP_HL.appendLocalSiteProp(a))}catch(b){}},Bc=function(){try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_appendLocalSitePropPostLog&&IMP_HL.exist_appendLocalSitePropPostLog()&&"function"==typeof IMP_HL.appendLocalSitePropPostLog&&(result=IMP_HL.appendLocalSitePropPostLog())}catch(a){}},uc=function(){try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.allow_extended_datalog&&IMP_HL.allow_extended_datalog())return!0}catch(a){}return!1},Cc=function(){try{if("object"===typeof IMP_HL&&
"function"==typeof IMP_HL.allow_protect&&IMP_HL.allow_protect())return!0}catch(a){}return!1},qc=function(){try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.session_length)return Math.round(IMP_HL.session_length())}catch(a){}return 2},ea=function(){try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.block_loginiframe&&IMP_HL.block_loginiframe())return!0}catch(a){}return!1},Fb=function(){try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_handle_accepttel&&IMP_HL.exist_handle_accepttel()&&
"function"==typeof IMP_HL.handle_accepttel)return!0}catch(a){}return!1},Gb=function(a){var b;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_focus&&IMP_HL.exist_handle_focus()&&"function"===typeof IMP_HL.handle_focus){b=!0;break a}}catch(c){}b=!1}if(b)try{IMP_HL.handle_focus(a)}catch(d){}},ad=function(a,b){var c;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_show&&IMP_HL.exist_handle_show()&&"function"===typeof IMP_HL.handle_show){c=!0;break a}}catch(d){}c=
!1}if(c)try{IMP_HL.handle_show(a,b)}catch(e){}},bd=function(a){var b;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_close&&IMP_HL.exist_handle_close()&&"function"===typeof IMP_HL.handle_close){b=!0;break a}}catch(c){}b=!1}if(b)try{IMP_HL.handle_close(a)}catch(d){}},cd=function(a,b,c,d){var e;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_acceptpuff&&IMP_HL.exist_handle_acceptpuff()&&"function"===typeof IMP_HL.handle_acceptpuff){e=!0;break a}}catch(j){}e=
!1}if(e)try{IMP_HL.handle_acceptpuff(a,b,c,d)}catch(g){}},dd=function(a,b,c){if(Fb())try{rc(),IMP_HL.handle_accepttel(a,b,c)}catch(d){}},ed=function(a){a||(a="1");var b;a:{try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_handle_outcome&&IMP_HL.exist_handle_outcome()&&"function"==typeof IMP_HL.handle_outcome){b=!0;break a}}catch(c){}b=!1}if(b)try{var d=n("imp_oc");d?d.toString()!=a.toString()&&(IMP_HL.handle_outcome(a.toString()),o("imp_oc",a.toString())):(IMP_HL.handle_outcome(a.toString()),
o("imp_oc",a.toString()))}catch(e){}},fd=function(a,b){var c;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_showcontainer&&IMP_HL.exist_handle_showcontainer()&&"function"===typeof IMP_HL.handle_showcontainer){c=!0;break a}}catch(d){}c=!1}if(c)try{return IMP_HL.handle_showcontainer(a,b),!0}catch(e){}return!1},gd=function(a,b){var c;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_hidecontainer&&IMP_HL.exist_handle_hidecontainer()&&"function"===
typeof IMP_HL.handle_hidecontainer){c=!0;break a}}catch(d){}c=!1}if(c)try{return IMP_HL.handle_hidecontainer(a,b),!0}catch(e){}return!1},hd=function(a,b,c){var d;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_customized_close&&IMP_HL.exist_handle_customized_close()&&"function"===typeof IMP_HL.handle_customized_close){d=!0;break a}}catch(e){}d=!1}if(d)try{IMP_HL.handle_customized_close(a,b,c)}catch(j){}},id=function(a,b,c,d,e){var j;a:{try{if("object"===typeof IMP_HL&&
"function"===typeof IMP_HL.exist_handle_customized&&IMP_HL.exist_handle_customized()&&"function"===typeof IMP_HL.handle_customized){j=!0;break a}}catch(g){}j=!1}if(j)try{IMP_HL.handle_customized(a,b,c,d,e)}catch(f){}},jd=function(a,b,c,d,e,j){var g;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_customized_number&&IMP_HL.exist_handle_customized_number()&&"function"===typeof IMP_HL.handle_customized_number){g=!0;break a}}catch(f){}g=!1}if(g)try{IMP_HL.handle_customized_number(a,
b,c,d,e,j)}catch(k){}},kd=function(a,b,c,d,e,j){var g;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_customized_number_multi&&IMP_HL.exist_handle_customized_number_multi()&&"function"===typeof IMP_HL.handle_customized_number_multi){g=!0;break a}}catch(f){}g=!1}if(g)try{IMP_HL.handle_customized_number_multi(a,b,c,d,e,j)}catch(k){}},md=function(a){if(0<=a.origin.indexOf(yc(Yb)))try{if(Xb++,20>Xb){var b=JSON.parse(a.data);if("1"==b.hasmessage){if(b.message)if("accepttel"==
b.message){var c=b.number;c||(c="number");var d="message",e=0;b.accepttag&&("0"==b.accepttag?(d=T[i[1]],e=V[i[1]]):"1"==b.accepttag?(d=T[i[2]],e=V[i[2]]):"2"==b.accepttag&&(d=T[i[3]],e=V[i[3]]));dd(c,d,e)}else if("failedtel"==b.message){var j;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_failedtel&&IMP_HL.exist_handle_failedtel()&&"function"===typeof IMP_HL.handle_failedtel){j=!0;break a}}catch(g){}j=!1}if(j)try{IMP_HL.handle_failedtel()}catch(f){}}else IMP.appendSiteProp("impevent",
b.message),I(H())}else if("1"==b.haslogmessage)b.logkey&&b.logvalue&&(IMP.appendSiteProp(b.logkey,b.logvalue),IMP.trackEventInteract());else if("1"==b.hasclosemessage)b.closetag?"0"==b.closetag?IMP.hide_IMPiframe(1,r[i[1]],4):"1"==b.closetag?IMP.hide_IMPiframe(2,r[i[2]],4):("2"!=b.closetag&&(IMP.hide_IMPiframe(1,r[i[1]],4),IMP.hide_IMPiframe(2,r[i[2]],4)),IMP.hide_IMPiframe(3,r[i[3]],4)):(IMP.hide_IMPiframe(1,r[i[1]],4),IMP.hide_IMPiframe(2,r[i[2]],4),IMP.hide_IMPiframe(3,r[i[3]],4));else if("1"==
b.hasstartwinmessage)b.startwinurl&&b.startwindirective&&(b.startwinposition&&b.startwinruletype?ld(b.startwinurl,b.startwindirective,b.startwinruletype):Hb(b.startwinurl,b.startwindirective));else if("1"==b.hassizemessage){d=b.width;e=b.heigth;c="imp_norm";if(b.containerid)c=b.containerid;IMP.appendSiteProp("impsize",c+"_"+d+"_"+e);IMP.trackAppendLog();Dc(c,d,e);Dc(c+"_frame",d,e)}else if("1"==b.hasrunhandler){var k=a.source,c=0,Y=b.handlerid;Y||(Y="1");var l=b.startstop;l||(l="start");c=Eb(b.handlerid,
b.startstop,b.sessionid,b.mode,b.csid,b.language);try{k.postMessage({hasrunhandlerresult:"1",handlerresult:c.toString()},"*")}catch(h){}0==c&&("start"==l?o("imp_lh",Y):o("imp_lh",""))}else if("1"==b.haschangepage){var m=b.changepage;setTimeout(function(){try{window.location.href=m}catch(a){}},50)}else"1"==b.hascustomizedclose&&(Bb=!0)}}catch(p){}},Ib=function(){if(!$b)try{var a=window.addEventListener?"addEventListener":"attachEvent";(0,window[a])("attachEvent"==a?"onmessage":"message",md,!1);$b=
!0}catch(b){}return!0},Ec=function(a){var b=[],b=document.getElementsByTagName("title");if(0<b.length)return b[0].innerHTML;for(var b=document.getElementsByTagName("meta"),c=0;c<b.length;c++){if(b[c].getAttribute("property")==a||b[c].getAttribute("name")==a)return b[c].content;if(25<=c)break}return""},Hc=function(a,b,c){Wa||(Wa=!0,document.body.addEventListener("mouseenter",function(){na=!0;Xa||(Xa=!0,document.body.addEventListener("mouseleave",function(){na=!1}))}));if(!hc)hc=!0,window.onbeforeunload=
function(){if(!(!0==ma||na))if(ma=!0,document.getElementById(i[a]))return Fc(a,8,0),c&&Gc(),b||(b=" "),b}},Jb=function(a,b,c,d){if(document.addEventListener){var e=10,j=30;if(b)if(-1!=b.indexOf("{"))try{var g={},g=JSON.parse(b),e=q(g.minX),j=q(g.maxY)}catch(f){}else b=b.split(","),1<b.length&&(e=q(b[0]),j=q(b[1]));gc||(gc=!0,document.body.addEventListener("mousemove",function(a){Va=a.clientX;fc=a.clientY}));Wa||(Wa=!0,document.body.addEventListener("mouseenter",function(){na=!0;Xa||(Xa=!0,document.body.addEventListener("mouseleave",
function(){na=!1;if(!(!0==ma||Va<e||fc>j))if(ma=!0,c){var b=i[a];$[b]?r[b]&&IMP.trackDisplay(r[b],8,0):document.getElementById(b)&&(Fc(a,8,0),d&&Gc())}else IMP.appendSiteProp("impevent","zoneleave"),IMP.trackEventInteract()}))}))}},nd=function(a,b){b||(b="15");imprushdialogueany=!0;imprushdialogueparams[a]=b},Fc=function(a,b,c){var d=i[a];aa[d]&&(clearTimeout(aa[d]),ra(d,gb[a],hb[a],Fa[a],Ga[a],ib[a],r[d],ja[a],jb[a],b,c))},pd=function(a){if(!A()&&!ub){a=a.split(",");la=q(a[0]);Ra=q(a[1]);if(2>la||
60<la)la=15;49<Ra&&(Ra=49);od()}},od=function(){ub&&Q&&(clearInterval(Q),Q=0);vb=0;0<la&&(ub=!0,Q=setInterval(function(){vb++;vb>=Ra&&Q&&(clearInterval(Q),Q=0);Sa=Math.round(((new Date).getTime()-Math.round(Ab))/1E3);imprushdialogueany&&(imprushdialogueparams[1]&&Kb(1,imprushdialogueparams[1])&&(imprushdialogueparams[1]=""),imprushdialogueparams[2]&&Kb(2,imprushdialogueparams[2])&&(imprushdialogueparams[2]=""),imprushdialogueparams[3]&&Kb(3,imprushdialogueparams[3])&&(imprushdialogueparams[3]=""))},
1E3*la))},Kb=function(a,b){var c=q(b);if(0<c&&(15>c&&(c=15),Sa>=c)){var c=Sa,d=i[a];aa[d]&&(clearTimeout(aa[d]),clearInterval(Q),ra(d,gb[a],hb[a],Fa[a],Ga[a],ib[a],r[d],ja[a],jb[a],5,c));return!0}return!1},Mb=function(){Lb();X=K=z="";v("imp_pt");v("imp_lpt");v("imp_plpt");v("imp_lov");v("imp_clpt");v("imp_cov")},Nb=function(){Sa=0;Math.round((new Date).getTime()/1E3);Ab=(new Date).getTime();X=K=z="";xb=yb=wb=!1;Va=Va=0;na=!0;za()},qd=function(a){if(!A()&&(a=a.split(","),!(5>a.length))){La=q(a[3]);
Ma=q(a[4]);if(1==La&&!cc)cc=!0,window.onbeforeunload=function(){if(!1==yb&&1==La)try{z&&C("imp_pt",z);qa(1);IMP.appendSiteProp("impunload","1");if(ka){var a=G();if(F())if("object"===typeof navigator)if("function"===typeof navigator.sendBeacon){try{navigator.sendBeacon(a,"test")}catch(c){}IMP.clearSiteProp()}else I(a,void 0);else I(a,void 0)}else I(G());Lb();yb=!0}catch(d){}};if(1==Ma&&!bc)bc=!0,window.onfocus=function(){if(!0==Ua)IMP.appendSiteProp("implogtype",3),zb++,IMP.appendSiteProp("impfocus",
"1"),IMP.trackFocusInteract(),Ua=!1;else if(!0==wb&&!1==ma&&!1==xb&&1==Ma&&5>=zb){var a=Math.round(((new Date).getTime()-ec)/1E3),c=n("imp_st");if(c&&(c>Ka||120<=a))c>Ka?IMP.appendSiteProp("implogtype",4):IMP.appendSiteProp("implogtype",5),zb++,IMP.appendSiteProp("impfocus","1"),IMP.trackFocusInteract()}},window.onblur=function(){wb=!0;ec=(new Date).getTime();if(1==La&&!1==ma&&1==Ma){var a;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_blur&&IMP_HL.exist_handle_blur()&&
"function"===typeof IMP_HL.handle_blur){a=!0;break a}}catch(c){}a=!1}if(a)try{IMP_HL.handle_blur()}catch(d){}z&&C("imp_pt",z);qa(1);IMP.appendSiteProp("impblur","1");I(G());Lb()}}}},za=function(){Qa||1!=rb||(0<O&&(tb=setTimeout(function(){try{Sb()&&(Qa=!1,ac++,ac<=Oa?3==Na?(IMP.appendSiteProp("event",Pa),IMP.appendSiteProp("implogtype",9),IMP.trackTimeInteract()):2==Na?!0==W?(IMP.appendSiteProp("event",Pa),IMP.appendSiteProp("implogtype",10),IMP.trackTimeInteract()):za():1==Na?sb=!0:(IMP.appendSiteProp("imptimeappend",
"1"),IMP.trackAppendLog(!0),za()):O=0)}catch(a){}},1E3*O)),Qa=!0,W=sb=!1)},Lb=function(){tb&&clearTimeout(tb);Qa=!1},Ic=function(a,b,c,d,e,j,g,f,k,i,l,h,m,p,o,D,y,n,s,q,r,t,v,u,w,A,z,B,C,E,H,I,J,K,P,F,L,T,M,G,V,O){clearTimeout(aa[b]);clearTimeout(Ub[b]);clearTimeout(Uc[b]);clearTimeout(N[b].close);clearTimeout(N[b]["switch"]);clearTimeout(N[b].accept);clearTimeout(N[b].delaay);clearTimeout(N[b].decline);clearTimeout(lb[b]);clearTimeout(Vb[b]);clearTimeout(Wb[b]);(i=document.getElementById(b))&&i.parentNode.removeChild(i);
i="div";M&&-1==c.indexOf(".js")&&-1==G.indexOf("<div>")&&(i="span");i=document.createElement(i);i.id=b;p=rd(i,m,p,o,D,y,n,s);if(!p){if(m)return V||IMP.trackError(k,7,m),!0;m=document.getElementsByTagName("body")[0];s?m.insertBefore(i,m.firstChild):m.appendChild(i)}i=document.getElementById(b);sd(a,i,d,e,j,g,f,p,h);td(a,b,i,c,d,e,k,l,E,H,I,J,j,K,F,L,T,M,G,O);Tb[b]=i.style.display;i.style.display="none";0<q?aa[b]=setTimeout(function(){ra(b,r,t,v,u,w,k,P,F,0,q)},1E3*q):ra(b,r,t,v,u,w,k,P,F,0,0)},Dc=
function(a,b,c){if(a=document.getElementById(a)){if(b&&-1<b.indexOf("px"))a.style.width=b;if(c&&-1<c.indexOf("px"))a.style.height=c}},Aa=function(a,b,c,d){if(0<c){var e=document.getElementById(a+"_"+b);if(e&&0<=Math.round(d)){e.style.display="none";var j=Math.round(c)-Math.round(d);0>j&&(j=0);N[a][b]=setTimeout(function(){e.style.display="block";e.style.opacity=0;setTimeout(function(){e.style.transition="all "+j+"s";e.style.transitionTimingFunction="ease-in";setTimeout(function(){e.style.opacity=
1},17)},17)},1E3*d)}}},R=function(a,b){a.style.display=b;return!0},ra=function(a,b,c,d,e,j,g,f,k,l,o){var h=document.getElementById(a),m=document.getElementById(a+"_frame");document.getElementById(a+"_close");if(h&&"none"==h.style.display&&(a==i[1]?kb?"2"!=wc():1:a==i[2]?kb?"1"!=wc():1:1)){g?IMP.trackDisplay(g,l,o):r[a]&&IMP.trackDisplay(r[a],l,o);if($[a])return!0;Da[a]=!1;g="block";"inline"==Tb[a]&&(g="inline");k=!1;if(Jc()){var p,n,D,y,q,s="all "+c+"s";if(0==b)k=R(h,g);else if(1==b)p=h.style.width,
y=h.style.height,p&&y&&0>p.toString().indexOf("%")&&0>y.toString().indexOf("%")?(h.style.width="0px",m.style.width="0px",h.style.height="0px",m.style.height="0px",h.style.display=g,setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.width=p;m.style.width=p;h.style.height=y;m.style.height=y},17)},17)):k=R(h,g);else if(2==b)h.style.opacity=0,h.style.display=g,setTimeout(function(){h.style.transition=
s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1},17)},17);else if(3==b)(p=h.style.width)&&0>p.toString().indexOf("%")?(h.style.opacity=0,h.style.width="0px",m.style.width="0px",h.style.display=g,setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1;h.style.width=
p;m.style.width=p},17)},17)):k=R(h,g);else if(4==b)p=h.style.width,n=h.style.left,l=parseInt(n,10)+parseInt(p,10)/2+"px",D=h.style.right,o=parseInt(D,10)+parseInt(p,10)/2+"px",p&&0>p.toString().indexOf("%")?(h.style.opacity=0,h.style.width="0px",m.style.width="0px",h.style.display=g,n?(h.style.left=l,setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1;h.style.width=
p;m.style.width=p;h.style.left=n},17)},17)):D?(h.style.right=o,setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1;h.style.width=p;m.style.width=p;h.style.right=D},17)},17)):setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=
1;h.style.width=p;m.style.width=p},17)},17)):k=R(h,g);else if(5==b)if(p=h.style.width,y=h.style.height,q=h.style.top,originalBottom=h.style.bottom,n=h.style.left,D=h.style.right,p&&y&&0>p.toString().indexOf("%")&&0>y.toString().indexOf("%")){h.style.width="0px";m.style.width="0px";h.style.height="0px";m.style.height="0px";h.style.opacity=0;h.style.display=g;if(q)h.style.top="0px";else if(originalBottom)h.style.bottom="0px";if(n)h.style.left="0px";else if(D)h.style.right="0px";setTimeout(function(){h.style.transition=
s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1;h.style.width=p;m.style.width=p;h.style.height=y;m.style.height=y;if(q)h.style.top=q;else if(originalBottom)h.style.bottom=originalBottom;if(n)h.style.left=n;else if(D)h.style.right=D},17)},17)}else k=R(h,g);else if(6==b)if(p=h.style.width,n=h.style.left,D=h.style.right,p&&0>p.toString().indexOf("%")){h.style.opacity=0;h.style.width="0px";m.style.width=
"0px";h.style.display=g;if(n)h.style.left="0px";else if(D)h.style.right="0px";setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1;h.style.width=p;m.style.width=p;if(n)h.style.left=n;else if(D)h.style.right=D},17)},17)}else k=R(h,g);else if(7==b||8==b)if(y=h.style.height,q=h.style.top,originalBottom=h.style.bottom,y&&0>y.toString().indexOf("%")){h.style.height=
"0px";m.style.height="0px";h.style.opacity=0;h.style.display=g;if(q)h.style.top="0px";else if(originalBottom)h.style.bottom="0px";setTimeout(function(){h.style.transition=s;m.style.transition="inherit";h.style.transitionTimingFunction="ease";m.style.transitionTimingFunction="inherit";setTimeout(function(){h.style.opacity=1;h.style.height=y;m.style.height=y;if(q)h.style.top=q;else if(originalBottom)h.style.bottom=originalBottom},17)},17)}else k=R(h,g);else fd(a,b)||(k=R(h,g));if(0==b||!k)Aa(a,"close",
c,f),Aa(a,"switch",c,f),Aa(a,"accept",c,f),Aa(a,"delay",c,f),Aa(a,"decline",c,f);h.addEventListener("mouseenter",Kc);Ub[a]=setTimeout(function(){0<j&&(lb[a]=setTimeout(function(){Lc(a,d,e)},1E3*j))},1E3*c)}else h.style.display="block";$[a]||ad(T[a],V[a]);Fb()&&Ib()}},Kc=function(a){Da[a.target.id]=!0},Jc=function(){return"opacity"in document.body.style&&"transition"in document.body.style?!0:!1},Lc=function(a,b,c){var d=document.getElementById(a);d&&(d.removeEventListener("mouseenter",Kc),Da[a]?(Da[a]=
!1,lb[a]=setTimeout(function(){Lc(a,b,c)},12E5)):($a(a,b,c,!0),Vb[a]=setTimeout(function(){if(ha[a]){var b=Ea[a],c=-1;l[b][2].LogEvent&&(c=2);l[b][3].LogEvent&&(c=3);l[b][4].LogEvent&&(c=4);0<c&&l[b][c].LogEvent&&(IMP.appendSiteProp("impevent",l[b][c].LogEvent),IMP.appendSiteProp("impeventlogid",r[a]),IMP.appendSiteProp("impeventmessid",ia[b]),ba=!0,S=1E4,l[b][c].KeepUrl?IMP.trackSwitchEventInteract():IMP.trackEventInteract(),S=3E3);ha[a]=!1}(b=document.getElementById(a))&&b.parentNode.removeChild(b)},
1E3*Math.round(c))))},ud=function(){var a=document.getElementById("imp_over");a&&a.parentNode.removeChild(a)},Gc=function(){var a=document.createElement("div");a.id="imp_over";a.name="imp_over";a.style="position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; background-color: black; z-index:1001; -moz-opacity: 0.2; opacity:.20; filter: alpha(opacity=20);";var b=document.getElementsByTagName("body")[0];b&&b.appendChild(a)},$a=function(a,b,c){ud();xb=!1;var d,e,j,g,f=document.getElementById(a),
k=document.getElementById(a+"_frame"),i="all "+c+"s";if(Jc()){if(f)if(0==b)f.style.display="none";else if(1==b)a=f.style.width,originalHeight=f.style.height,a&&originalHeight?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction="inherit";setTimeout(function(){f.style.width="0px";f.style.height="0px";k.style.width="0px";k.style.height="0px"},17)},17):f.style.display="none";else if(2==b)setTimeout(function(){f.style.transition=
i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction="inherit";setTimeout(function(){f.style.opacity=0},17)},17);else if(3==b)(a=f.style.width)?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction="inherit";setTimeout(function(){f.style.opacity=0;f.style.width="0px";k.style.width="0px"},17)},17):f.style.display="none";else if(4==b)a=f.style.width,d=f.style.left,
e=parseInt(d,10)+parseInt(a,10)/2+"px",j=f.style.right,g=parseInt(j,10)+parseInt(a,10)/2+"px",a?d?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction="inherit";setTimeout(function(){f.style.opacity=0;f.style.width="0px";k.style.width="0px";f.style.left=e},17)},17):j?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction=
"inherit";setTimeout(function(){f.style.opacity=0;f.style.width="0px";k.style.width="0px";f.style.right=g},17)},17):f.style.display="none":f.style.display="none";else if(5==b)a=f.style.width,originalHeight=f.style.height,originalBottom=f.style.bottom,originalTop=f.style.top,d=f.style.left,j=f.style.right,a&&originalHeight?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction="inherit";setTimeout(function(){f.style.opacity=
0;f.style.width="0px";k.style.width="0px";f.style.height="0px";k.style.height="0px";if(originalTop)if(f.style.top="0px",d)f.style.left="0px";else{if(j)f.style.right="0px"}else if(originalBottom)if(f.style.bottom="0px",d)f.style.left="0px";else if(j)f.style.right="0px"},17)},17):f.style.display="none";else if(6==b)a=f.style.width,d=f.style.left,j=f.style.right,a?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction=
"inherit";setTimeout(function(){f.style.opacity=0;f.style.width="0px";k.style.width="0px";if(d)f.style.left="0px";else if(j)f.style.right="0px"},17)},17):f.style.display="none";else if(7==b||8==b)originalHeight=f.style.height,originalTop=f.style.top,originalBottom=f.style.bottom,originalHeight?setTimeout(function(){f.style.transition=i;k.style.transition="inherit";f.style.transitionTimingFunction="ease-in";k.style.transitionTimingFunction="inherit";setTimeout(function(){f.style.opacity=0;f.style.height=
"0px";k.style.height="0px";if(originalTop)f.style.top="0px";else if(originalBottom)f.style.bottom="0px"},17)},17):f.style.display="none";else if(!gd(a,b))f.style.display="none"}else f.style.display="none"},rd=function(a,b,c,d,e,j,g,f){var k,i=!1;if(b)if(-1<b.toString().indexOf(".")?(b=document.getElementsByClassName(b.replace(".","")))&&b[0]&&(k=b[0]):k=document.getElementById(b),k){if(c){if(d)k.style.height=e+"px";if(j)k.style.width=g+"px";k.innerHTML="";k.appendChild(a)}else{if(d)k.style.height=
e+"px";if(j)k.style.width=g+"px";f?k.insertBefore(a,k.firstChild):k.appendChild(a)}i=!0}else i=!1;else i=!1;return i},sd=function(a,b,c,d,e,j,g,f,k){var i="absolute";0<=e.indexOf("fixed")&&(i="fixed");f&&(i="relative");f="absolute";0<=e.indexOf("relative")&&(f="relative");var l="left";0<=e.indexOf("right")&&(l="right");var h="top";0<=e.indexOf("bottom")&&(h="bottom");var m=g+"px",p=j+"px",n="0px",o="0px",q=c+"px",r=d+"px";0<=e.indexOf("fullwidth")&&0<=e.indexOf("fullheight")?(o=n=p=m="0px",q=r="100%"):
0<=e.indexOf("fullwidth")?(m="0px",p=j+"px",o=n="0px",q="100%"):0<=e.indexOf("fullheight")?(m=g+"px",o=n=p="0px",r="100%"):0<=e.indexOf("center")?(p=m="50%",n="-"+c/2+"px",o="-"+d/2+"px"):0<=e.indexOf("centric")?(m="50%",p=j+"px",n="-"+c/2+"px",o="0px"):"relative"==f&&(m="50%",p=j+"px",n=0>c/2-g?g-c/2+"px":"-"+(c/2-g)+"px",o="0px");k||(k="top"==h&&"right"==l?"position:"+i+"; right: "+m+"; margin-right: "+n+"; width: "+q+"; top: "+p+"; margin-top: "+o+"; height: "+r+";":"bottom"==h&&"right"==l?"position:"+
i+"; right: "+m+"; margin-right: "+n+"; width: "+q+";bottom: "+p+"; margin-bottom: "+o+"; height: "+r+";":"bottom"==h&&"left"==l?"position:"+i+"; left: "+m+"; margin-left: "+n+"; width: "+q+"; bottom: "+p+"; margin-bottom: "+o+"; height: "+r+";":"position:"+i+"; left: "+m+"; margin-left: "+n+"; width: "+q+"; top: "+p+"; margin-top: "+o+"; height: "+r+";");0>k.toString().search(/background/i)&&(k+=" background: transparent;");0>k.toString().search(/z-index/i)&&(1==a?k+=" z-index:9999;":2==a&&(k+=" z-index:9998;"));
b.style.cssText=k},td=function(a,b,c,d,e,j,g,f,k,i,l,h,m,p,n,o,q,r,s,t){e="";if(r){e+=s;if(-1<d.indexOf(".js"))s=document.createElement("script"),s.type="text/javascript",s.src=d,document.getElementsByTagName("head")[0].appendChild(s),fb=b;if(t&&-1<t.indexOf(".css"))s=document.createElement("link"),s.rel="stylesheet",s.type="text/css",s.media="all",s.href=t,document.getElementsByTagName("head")[0].appendChild(s)}else j=c.style.width,t=c.style.height,s="",j&&(s="width: "+j+"; "),j="",t&&(j="height: "+
t+"; "),e+='<iframe id="'+(b+"_frame")+'"  src="'+d+'"  title="'+b+'"  scrolling="no"  frameborder="no"  style="background: transparent; '+j+s+'"  ALLOWTRANSPARENCY="true"></iframe>';if(!r||-1<d.indexOf(".js"))p?e+=Ba(a,b,c,p,f,"close",q,q,"IMP.hide_IMPiframe",g,4):Ib();k&&k.ImageUrl&&k.PlacementStyle&&(e+=Ba(a,b,c,k.ImageUrl,k.PlacementStyle,"switch",k.ButtonText,k.ButtonText,"IMP.trackButtonEvent",g,1));i&&i.ImageUrl&&i.PlacementStyle&&(e+=Ba(a,b,c,i.ImageUrl,i.PlacementStyle,"accept",i.ButtonText,
i.ButtonText,"IMP.trackButtonEvent",g,2));l&&l.ImageUrl&&l.PlacementStyle&&(e+=Ba(a,b,c,l.ImageUrl,l.PlacementStyle,"delay",l.ButtonText,l.ButtonText,"IMP.trackButtonEvent",g,3));h&&h.ImageUrl&&h.PlacementStyle&&(e+=Ba(a,b,c,h.ImageUrl,h.PlacementStyle,"decline",h.ButtonText,h.ButtonText,"IMP.trackButtonEvent",g,4));n&&!r&&(a="",o&&(a+='<div style="'+o+'"></div>'),e+=a);c.innerHTML+=e},Ba=function(a,b,c,d,e,j,g,f,i,l,o){c="";e&&(j=b+"_"+j,a=i+"("+a+","+l+","+o+")",b=g.split("|"),1<b.length?(d=b[0],
g=b[1],f=b[0],2<b.length&&(f=b[2]),c+='<div style="'+e+'" class="'+f+'" title="'+d+'" alt="" id="'+j+'" onclick="'+a+'">'+g+"</div>"):c+='<div style="'+e+'"><img id="'+j+'" class="'+f+'" title="'+g+'" src="'+d+'" alt="" id="'+j+'" onclick="'+a+'"></div>');return c},Nc=function(){var a;if("object"===typeof JSON&&"function"===typeof JSON.stringify){if(a=Mc(1))Ob(1,i[1],a),M[1]=a,ba=!0;if(a=Mc(2))Ob(2,i[2],a),M[2]=a,ba=!0}},Mc=function(a){var b="";try{"object"===typeof JSON&&"function"===typeof JSON.stringify&&
(b=w("imp_mess_"+i[a]))&&(b=JSON.parse(b))}catch(c){b=""}return b},sa=function(a,b){if((1==a||2==a)&&M[a]){if(w("imp_mess_"+b)){v("imp_mess_"+b);var c=document.getElementById(b);c&&c.parentNode.removeChild(c)}M[a]=""}},ab=function(a,b){(1==a||2==a)&&M[a]&&P(M[a].isRepeatState)&&sa(a,b)},Pb=function(a,b,c,d){if((3==d||4==d||5==d)&&0!=ia[a]&&ia[a]==c.InteractionMessageId)if((d=document.getElementById(b))&&"none"!=d.style.display){IMP.trackDisplay(c.InteractionLogId,13,0);r[b]=c.InteractionLogId;return}if((1==
a||2==a)&&M[a]){if(M[a].InteractionMessageId&&c.InteractionMessageId==M[a].InteractionMessageId)return!0;sa(a,b)}var d=P(c.IsRepeatMessage),e=P(c.IsRepeatState);if(1==a||2==a)(d||e)&&"object"===typeof JSON&&"function"===typeof JSON.stringify&&C("imp_mess_"+b,JSON.stringify(c));return Ob(a,b,c)},Ob=function(a,b,c){if(!c)return!0;try{var d;if(d=!0==A()){var e;a:{try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.block_showiniframe&&IMP_HL.block_showiniframe()){e=!0;break a}}catch(j){}e=!1}d=
!0==e}if(d)return IMP.trackError(c.InteractionLogId,6,"No show in iframe set in script"),!0;if(placeHolderToUse=c.PlaceHolderToUse)if(-1<placeHolderToUse.indexOf(",")){var g=placeHolderToUse.split(",");0<g.length&&J(a,b,c,g[0],!0);1<g.length&&J(a,b+"2",c,g[1],!0);2<g.length&&J(a,b+"3",c,g[2],!0);3<g.length&&J(a,b+"4",c,g[3],!0);4<g.length&&J(a,b+"5",c,g[4],!0);5<g.length&&J(a,b+"6",c,g[5],!0);6<g.length&&J(a,b+"7",c,g[6],!0);7<g.length&&J(a,b+"8",c,g[7],!0);8<g.length&&J(a,b+"9",c,g[8],!0);9<g.length&&
J(a,b+"10",c,g[9],!0)}else J(a,b,c,placeHolderToUse,!1);else J(a,b,c,"",!1)}catch(f){try{IMP.trackError(c.InteractionLogId,6,f.lineNumber+" "+f.message)}catch(i){}}return!0},J=function(a,b,c,d,e){if(!c)return!0;var j=P(c.OverrideClosedMessage);if(c.BlockMultipleOnSamePage&&document.getElementById(b)){try{IMP.trackError(c.InteractionLogId,6,"BlockMultipleOnSamePage")}catch(g){}return!1}var f,i,t,v,h,m,p;f=c.PositionStyle;if(d){i=P(c.PlaceholderReplaceContent);v=q(c.PlaceholderNewHeight);if((t=P(c.PlaceholderChangeHeight))&&
0===v)d="",t=!1;m=q(c.PlaceholderNewWidth);if((h=P(c.PlaceholderChangeWidth))&&0===m)d="",h=!1}p=c.PlaceholderBeforeExistingContent;var u=!0;if(d&&(h||t||i||p))u=!1;var D=q(c.StartEffect);0>D&&(D=0);var y=q(c.StartEffectTime);if(0>y||120<y)y=0;var w=q(c.CloseEffect);0>w&&(w=0);var s=q(c.CloseEffectTime);if(0>s||120<s)s=0;var F=q(c.HideAfterSek);if(0>F||1200<F)F=0;Fa[a]=w;Ga[a]=s;gb[a]=D;hb[a]=y;ib[a]=F;jb[a]=!1;var A=c.ButtonSwitchContext;if(A)1==a&&(kb=!0),l[a][1].LogEvent=A.LogEvent,l[a][1].LocalHandler=
A.LocalHandler,l[a][1].LocalHandlerDirective=A.LocalHandlerDirective,l[a][1].ChangePage=A.ChangePage,l[a][1].PageReference=A.PageReference,l[a][1].KeepUrl=A.KeepUrl,l[a][1].CloseEffect=w,l[a][1].CloseEffectTime=s;var z=c.ButtonYes;if(z)l[a][2].LogEvent=z.LogEvent,l[a][2].LocalHandler=z.LocalHandler,l[a][2].LocalHandlerDirective=z.LocalHandlerDirective,l[a][2].ChangePage=z.ChangePage,l[a][2].PageReference=z.PageReference,l[a][2].KeepUrl=z.KeepUrl,l[a][2].CloseEffect=w,l[a][2].CloseEffectTime=s;var B=
c.ButtonLater;if(B)l[a][3].LogEvent=B.LogEvent,l[a][3].LocalHandler=B.LocalHandler,l[a][3].LocalHandlerDirective=B.LocalHandlerDirective,l[a][3].ChangePage=B.ChangePage,l[a][3].PageReference=B.PageReference,l[a][3].KeepUrl=B.KeepUrl,l[a][3].CloseEffect=w,l[a][3].CloseEffectTime=s;var C=c.ButtonNo;if(C)l[a][4].LogEvent=C.LogEvent,l[a][4].LocalHandler=C.LocalHandler,l[a][4].LocalHandlerDirective=C.LocalHandlerDirective,l[a][4].ChangePage=C.ChangePage,l[a][4].PageReference=C.PageReference,l[a][4].KeepUrl=
C.KeepUrl,l[a][4].CloseEffect=w,l[a][4].CloseEffectTime=s;var E,H,I,J,K,L,M,G,O,N,Q;E=c.DisplayUrl;H=q(c.Width);I=q(c.Height);J=c.Position;K=q(c.DelaySek);L=q(c.TopPos);M=q(c.LeftPos);(O=c.BgStyle)||(O="position: absolute; right: 0px; padding:10px; top:0px; cursor: pointer");N=c.BGUrl;N=Zc(N,E);Q=q(c.BGDelay);ja[a]=Q;(closeButtonText=c.BGText)||(closeButtonText="Close");G=c.InteractionLogId;r[b]=G;ia[a]=c.InteractionMessageId;T[b]=c.Caption;V[b]=c.MessageOfflineType;var R=c.IsReferenceMessage;R&&
($[b]=!0,u=!1);var U=P(c.DisplayAsHTML),S=c.HtmlBody,W=c.CssFile;imprushdialogueparams[a]=rushparamstring="";if(0!=c.SyncWithPartnerDirective)if(5==c.SyncWithPartnerDirective)Ib();else{if(8==c.SyncWithPartnerDirective){if(Fb())try{n("imp_int")||(rc(),IMP_HL.handle_accepttel())}catch(X){}return!0}if(9==c.SyncWithPartnerDirective)return u=Eb(),(c=c.SyncWithPartnerUrl)||(c="1"),0==u&&o("imp_lh",c),!0;if(10==c.SyncWithPartnerDirective)return o("imp_lh",""),!0;if(11==c.SyncWithPartnerDirective)return ed(c.SyncWithPartnerUrl),
!0;if(12==c.SyncWithPartnerDirective)return id(c.SyncWithPartnerUrl,G,12,0,R),!0;if(13==c.SyncWithPartnerDirective)return jd(c.SyncWithPartnerUrl,S,G,11,0,R),!0;if(14==c.SyncWithPartnerDirective)return Hb(E,c.SyncWithPartnerUrl),!0;if(15==c.SyncWithPartnerDirective)nd(a,c.SyncWithPartnerUrl),pd("5,36");else if(16==c.SyncWithPartnerDirective)Hc(a,c.SyncWithPartnerUrl,!1);else if(17==c.SyncWithPartnerDirective)Hc(a,c.SyncWithPartnerUrl,!0);else{if(18==c.SyncWithPartnerDirective)return Jb(a,c.SyncWithPartnerUrl,
!1,!1),!0;if(19==c.SyncWithPartnerDirective)Jb(a,c.SyncWithPartnerUrl,!0,!1);else if(20==c.SyncWithPartnerDirective)Jb(a,c.SyncWithPartnerUrl,!0,!0);else if(21==c.SyncWithPartnerDirective)Bb=!0;else{if(22==c.SyncWithPartnerDirective)return kd(c.SyncWithPartnerUrl,S,G,11,0,R),!0;if(23==c.SyncWithPartnerDirective)ha[b]=!0;else return IMP.trackError(c.InteractionLogId,6,"SyncWithPartnerDirective not supported by script: "+c.SyncWithPartnerDirective),!0}}}Yb=E;Z[a]=E;u?Ic(a,b,E,H,I,J,L,M,G,j,O,f,d,i,
t,v,h,m,p,K,D,y,w,s,F,void 0,void 0,void 0,void 0,A,z,B,C,N,Q,!1,"",closeButtonText,U,S,e,W):aa[b]=setTimeout(function(){Ic(a,b,E,H,I,J,L,M,G,j,O,f,d,i,t,v,h,m,p,0,D,y,w,s,F,void 0,void 0,void 0,void 0,A,z,B,C,N,Q,!1,"",closeButtonText,U,S,e,W)},1E3*K);return!0},F=function(){var a=n("imp_no"),b=(new Date).getTime();return a?0<Math.round(a)-Math.round(b)?!1:!0:!0},Oc=function(){if(Cc()){var a=n("imp_to"),a=a?Math.round(a)+1:"1",b=60,c=300;1>=Math.round(a)?(b=60,c=300):2>=Math.round(a)?(b=120,c=900):
3>=Math.round(a)?(b=300,c=900):(Math.round(a),b=900,c=1800);var d=Math.round(b)/60/60/24,c=Math.round(c)/60/60/24,b=(new Date).getTime()+1E3*b;o("imp_no",b,d);o("imp_to",a,c)}},pc=function(a){try{"object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_logUserGroup&&IMP_HL.exist_logUserGroup()&&"function"===typeof IMP_HL.logUserGroup&&IMP_HL.logUserGroup(a.toString().substring(0,1))}catch(b){}},oc=function(a){try{"object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_logSessionGroup&&IMP_HL.exist_logSessionGroup()&&
"function"===typeof IMP_HL.logSessionGroup&&IMP_HL.logSessionGroup(a.toString().substring(0,1))}catch(b){}},ld=function(a,b,c){containerid="0"==c?i[1]:"1"==c?i[2]:"2"==c?i[3]:i[1];var c=document.getElementById(containerid),d="";c&&(c.style.position&&(d=d+"position: "+c.style.position+";"),d=c.style.top?d+"top: "+c.style.top+";":d+"top: auto;",d=c.style.marginTop?d+"margin-top: "+c.style.marginTop+";":d+"margin-top: auto;",d=c.style.bottom?d+"bottom: "+c.style.bottom+";":d+"bottom: auto;",d=c.style.marginBottom?
d+"margin-bottom: "+c.style.marginBottom+";":d+"margin-bottom: auto;",d=c.style.left?d+"left: "+c.style.left+";":d+"left: auto;",d=c.style.marginLeft?d+"margin-left: "+c.style.marginLeft+";":d+"margin-left: auto;",d=c.style.right?d+"right: "+c.style.right+";":d+"right: auto;",d=c.style.marginRight?d+"margin-right: "+c.style.marginRight+";":d+"margin-right: auto;");Hb(a,b,d)},Hb=function(a,b){var c=b.split("|"),d=c[0];if(a&&-1!=d.indexOf(".css")){"http://"!=d.substring(0,7)&&"https://"!=d.substring(0,
8)&&(d=da(a)+d);var e;1<c.length&&(e=c[1],-1!=e.indexOf(".js")&&"http://"!=e.substring(0,7)&&"https://"!=e.substring(0,8)&&da(a));2<c.length&&"CB"==c[2]&&o("imp_ih","1");c=d;-1==c.indexOf(".css")&&window.open(a,"Now_VideoWin",c)}},Pc=function(){var a={};if(navigator.language)a.language=navigator.language;if(navigator.platform)a.platform=navigator.platform;IMP.appendSiteProp("impbrowser",JSON.stringify(a));screen.width&&IMP.appendSiteProp("impscreenwidth",screen.width);screen.height&&IMP.appendSiteProp("impscreenheight",
screen.height);IMP.appendSiteProp("impnavigator",navigator.userAgent.replace(":"," "))},Rc=function(){n("imp_sb")||(o("imp_st",""),o("imp_sl",""),o("imp_nk",Math.floor(1E3*Math.random()+1).toString()),n("imp_oc")&&o("imp_oc",""),n("imp_lh")&&o("imp_lh",""),n("imp_rs")&&o("imp_rs",""));Ja=!1;var a=n("imp_st"),b=n("imp_nk");if(!a&&(sa(1,i[1]),sa(2,i[2]),v("imp_pt"),v("imp_lpt"),v("imp_plpt"),v("imp_lov"),v("imp_clpt"),v("imp_cov"),Qc(),o("imp_st","0"),!n("imp_st"))){var a=document.location.hostname,
c=a.toString().substr(a.toString().length-3),d=a.lastIndexOf("."),e=lc(a);-1<d&&!e&&(e=a.lastIndexOf(".",d-1),-1<e?".uk"==c||".in"==c||".id"==c||".il"==c||".za"==c||".cr"==c||".nz"==c||".jp"==c||".kr"==c||".pe"==c||".br"==c||".ck"==c?(c=a.lastIndexOf(".",e-1),-1<c?2<e-c-1&&(a=a.substr(c+1)):2>e-1&&0>a.indexOf("www")&&(a="www."+a)):2<d-e-1&&(a=a.substr(e+1)):2>d-1&&0>a.indexOf("www")&&(a="www."+a));oa=a;o("imp_st","0");if(!n("imp_st")){var j;a:{try{if("object"===typeof IMP_HL&&"function"==typeof IMP_HL.allow_nocookie&&
IMP_HL.allow_nocookie()){j=!0;break a}}catch(g){}j=!1}return j?Ja=!0:!1}}if(-1<t.toString().indexOf("imp_ilogid"))(j=mc(t).imp_ilogid)&&IMP.trackSystemEvent(8,j);if(-1<t.toString().indexOf("imp_uk")&&-1<t.toString().indexOf("imp_sk")&&(j=mc(t),a=j.imp_uk,c=j.imp_sk,a&&c))vc(a,c),(j=j.imp_lh)&&o("imp_lh",j);a=n("imp_st");a=Math.round(a)+1;o("imp_st",a);Ka=a;if(3>=Math.round(a)){if(1>Math.round(a))return!1;if(1==Math.round(a))try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_appendLocalSessionProp&&
IMP_HL.exist_appendLocalSessionProp()&&"function"==typeof IMP_HL.appendLocalSessionProp&&(result=IMP_HL.appendLocalSessionProp())}catch(f){}j="0";try{if("object"===typeof window&&("function"===typeof window.webkitRTCPeerConnection||"function"===typeof window.mozRTCPeerConnection))j="1"}catch(k){}IMP.appendSiteProp("imprtc",j);j="desktopstyle";if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/Phone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/)||
500>screen.width)j="phonestyle";IMP.appendSiteProp("impviewstyle",j);IMP.appendSiteProp("impversion","8.09.05_nojq");IMP.appendSiteProp("impsnum",b);IMP.appendSiteProp("impstart",a);IMP.appendSiteProp("impcheck",a)}Pc();IMP.appendSiteProp("impcnum",Math.floor(1E3*Math.random()+1).toString());n("imp_ve")&&(IMP.appendSiteProp("impvideoexit","1"),o("imp_ve",""));n("imp_lh")&&IMP.appendSiteProp("imphandler","1");(b=n("cos_mode"))&&IMP.appendSiteProp(b.toString().toLowerCase(),"1");(b=n("imp_to"))&&IMP.appendSiteProp("impprotect",
b);A()&&IMP.appendSiteProp("impiframe","1");return!0},ta=function(a,b){if(F())try{if(!window.XMLHttpRequest)return a+="&impajax=jquery",setTimeout(function(){IMP.appendSiteProp("impajax","jqeury");H();IMP.clearSiteProp()},1E3),!0;var c=new XMLHttpRequest;c.open("GET",a);c.timeout=S;c.onreadystatechange=function(){if(4===c.readyState&&200===c.status){var a=JSON.parse(c.responseText);if(a){if(1==b){if(a.HasControlMessage){var d=a.LogPause,g=q(a.LogPauseTime);0>=g&&(g=15);86400<g&&(g=86400);var f=Math.round(g)/
60/60/24,g=(new Date).getTime()+1E3*g;d&&o("imp_no",g,f)}if(a.HasClientScriptData){d=a.ClientScriptData;if(d.HandlerFile&&(f=d.HandlerFile,"http://"!=f.substring(0,7)&&"https://"!=f.substring(0,8)&&(f="//"!=f.substring(0,2)?L+"//"+f:L+f),g=yc(U),-1<f.indexOf(".js")&&-1<f.indexOf(g)))g=document.createElement("script"),g.type="text/javascript",g.src=f,document.getElementsByTagName("head")[0].appendChild(g);if(d.LogData){f=d.LogData;Cb("imp_ld",JSON.stringify(f));var k;a:{try{if("object"===typeof IMP_HL&&
"function"==typeof IMP_HL.exist_handlelogdata&&IMP_HL.exist_handlelogdata()&&"function"==typeof IMP_HL.handle_logdata){k=IMP_HL.handle_logdata(f);break a}}catch(l){}k=!1}if(!k)try{k=0;for(var r in f){k++;if(11<k)break;f.hasOwnProperty(r)&&Cb("imp_ld_"+r,f[r])}}catch(h){}}ka=qb=pb=!1;if(d.PageLogDirective&&!A()){k=r=!1;try{var m=RegExp(d.PageLogActiveRegExp);d.PageLogActiveRegExp&&m&&(r=m.test(t));var p=RegExp(d.PageLogDetailRegExp);d.PageLogDetailRegExp&&p&&(k=p.test(t))}catch(v){}try{qd(d.PageLogDirective)}catch(u){IMP.appendSitePropStatic("imperror",
u)}m=d.PageLogDirective.split(",");0<m.length&&1==q(m[0])&&(pb=!0);r&&1<m.length&&q(1==m[1])&&(qb=!0);if(k&&(2<m.length&&q(1==m[2])&&(ka=!0),m=d.PageLogDirective,!A()&&(m=m.split(","),!(10>m.length)&&(rb=q(m[6]),Na=q(m[7]),O=q(m[8]),Oa=q(m[9]),1==rb)))){0==Oa&&(Oa=1);if(0<O&&(15>O||60<O))O=30;za()}}}if(a.HasCollectMetaDataInstruction&&a.CollectMetaData)try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_handle_collectmeta&&IMP_HL.exist_handle_collectmeta()&&"function"==typeof IMP_HL.handle_collectmeta&&
IMP_HL.handle_collectmeta()}catch(w){}}a.HasSpecialMessage&&(i[3]="imp_special",Pb(3,i[3],a.SpecialMessage,b));a.HasNormalMessage?(i[1]="imp_norm",Pb(1,i[1],a,b)):ab(1,i[1]);a.HasTeaserMessage?(i[2]="imp_puff",Pb(2,i[2],a.TeaserMessage,b)):ab(2,i[2]);if(1==b){a=pb;m=qb;p=ka;try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_appendLocalSitePropPostReply&&IMP_HL.exist_appendLocalSitePropPostReply()&&"function"==typeof IMP_HL.appendLocalSitePropPostReply&&(result=IMP_HL.appendLocalSitePropPostReply(a,
m,p))}catch(z){}W=!1}}else ab(1,"imp_norm"),ab(2,"imp_puff");Cc()&&n("imp_to")&&o("imp_to","",(1/60/60/24).toString())}};c.ontimeout=function(){Oc()};c.send(null);IMP.clearSiteProp();ba=!1}catch(d){return a+="&impajax=errorjquery",setTimeout(function(){IMP.appendSiteProp("impajax","jqeury");H();IMP.clearSiteProp()},1E3),!0}},Qb=function(a){a||(a="logtool");IMP.appendSiteProp("impevent",a);IMP.appendSiteProp("implogtype",6);I(H());IMP.clearSiteProp()},Sc=function(a,b,c){if(F()){var d;try{a||(a="logtool");
IMP.appendSiteProp("impevent",a);IMP.appendSiteProp("implogtype",8);if(!window.XMLHttpRequest)return IMP.appendSiteProp("impajax","jquery"),d=H(),d+="&impajax=jquery",!0;d=H();var e=new XMLHttpRequest;e.open("GET",d);e.timeout=S;e.onreadystatechange=function(){4===e.readyState&&200===e.status&&vd(JSON.parse(e.responseText),b,c)};e.ontimeout=function(){Oc()};e.send(null);IMP.clearSiteProp()}catch(j){return d||(d=H()),d+="&impajax=errorjquery",!0}}},Tc=function(a,b,c){a=Yc(a,b,c);b=new XMLHttpRequest;
b.open("GET",a);b.timeout=1E4;b.onreadystatechange=function(){};b.ontimeout=function(){};b.send(null)},vd=function(a,b,c){var d;if(a){if(a.HasSpecialMessage&&a.SpecialMessage.InteractionLogId&&!P(a.SpecialMessage.IsRepeatState))d=a.SpecialMessage.InteractionLogId;if(a.HasTeaserMessage&&a.TeaserMessage.InteractionLogId&&!P(a.TeaserMessage.IsRepeatState))d=a.TeaserMessage.InteractionLogId;if(a.HasNormalMessage&&a.InteractionLogId&&!P(a.IsRepeatState))d=a.InteractionLogId}if(d==r[i[1]]||d==r[i[2]]||
d==r[i[3]])d=0;d&&(IMP.trackDisplay(d,0,0),ca=d,b&&c&&setTimeout(function(){Tc(ua,ca,c)},500))},I=function(a){if(F()){if(!window.XMLHttpRequest)return!0;try{var b=new XMLHttpRequest;b.open("GET",a);b.timeout=S;b.onreadystatechange=function(){};b.ontimeout=function(){};b.send(null);IMP.clearSiteProp()}catch(c){return!0}}},bb=function(a){a=a.toString().replace(/[\x8C]/g,"OE");a=a.toString().replace(/[\x9C]/g,"oe");a=a.toString().replace(/[\x9E]/g,"z");a=a.toString().replace(/[\x9F]/g,"Y");a=a.toString().replace(/[\xC0-\xC5]/g,
"A");a=a.toString().replace(/[\xC6]/g,"AE");a=a.toString().replace(/[\xC7]/g,"C");a=a.toString().replace(/[\xC8-\xCB]/g,"E");a=a.toString().replace(/[\xCC-\xCF]/g,"I");a=a.toString().replace(/[\xD0]/g,"D");a=a.toString().replace(/[\xD1]/g,"N");a=a.toString().replace(/[\xD2-\xD6]/g,"O");a=a.toString().replace(/[\xD7]/g," ");a=a.toString().replace(/[\xD8]/g,"O");a=a.toString().replace(/[\xD9-\xDC]/g,"U");a=a.toString().replace(/[\xDD]/g,"Y");a=a.toString().replace(/[\xDE-\xDF]/g," ");a=a.toString().replace(/[\xE0-\xE5]/g,
"a");a=a.toString().replace(/[\xE6]/g,"ae");a=a.toString().replace(/[\xE7]/g,"c");a=a.toString().replace(/[\xE8-\xEB]/g,"e");a=a.toString().replace(/[\xEC-\xEF]/g,"i");a=a.toString().replace(/[\xF0]/g,"o");a=a.toString().replace(/[\xF1]/g,"n");a=a.toString().replace(/[\xF2-\xF6]/g,"o");a=a.toString().replace(/[\xF7]/g," ");a=a.toString().replace(/[\xF8]/g,"o");a=a.toString().replace(/[\xF9-\xFC]/g,"u");a=a.toString().replace(/[\xFD]/g,"y");a=a.toString().replace(/[\xFE]/g," ");return a=a.toString().replace(/[\xFF]/g,
"y")},Rb=function(a){var b="";a&&(a=a.split("|"),1<a.length&&"scroll"==a[0]&&a[1]&&(b=a[1]));return b},cb=function(a,b){if(!b)return!1;var c=Rb(a);return!c||c==Ha||b==nb?!1:!0},wd=function(a,b){va&&cb(a,b)&&(clearTimeout(va),va=0);va=setTimeout(function(){var c;va=0;cb(a,b)?10>Ia&&(Ia++,nb=b,Ha=Rb(a),c=L+"//"+document.location.hostname+document.location.pathname,document.location.pathname.toString().endsWith("/")||(c+="/"),c+=b,IMP.appendSiteProp("impscroll",Ha),IMP.trackTabInteract("scroll",c,t)):
db(a,!1,!1)},3E3)},xd=function(a,b){setTimeout(function(){db(a,!1,!1)},3E3);var c=cb(a,b);c&&(wa&&(clearTimeout(wa),wa=0),mb&&(clearTimeout(mb),mb=0),c&&(wa=setTimeout(function(){wa=0;cb(a,b)&&10>Ia&&(Ia++,nb=b,Ha=Rb(a),db(b,!1,!0))},3E3)))},db=function(a,b,c){if(a){var d=a,e=(new Date).getTime(),j=(Math.round((e-ic)/1E3)+0).toString();ic=e;e=(Math.round((e-Vc)/1E3)+0).toString();IMP.appendSitePropStatic("lasteventtime",e);d=d.toString().replace(/[\x09-\x10]/g," ");d=bb(d);d=d.toString().replace(/[^\x20-\x7E]/g,
"");d=d.toString().replace(/[\/:]/g," ");d=d.toString().replace(/[<>]/g,"");c?500>(Ta+"/"+d).length&&!dc?(Ta=Ta+"/"+d,C("imp_clpt",Ta,!0)):(dc="1",C("imp_cov","1")):b?(c=IMP.getSitePropStatic("event"),b=IMP.getSitePropStatic("eventtime"),c?(d=c+"/"+d,newSimplePatternTime=b+"/"+j):newSimplePatternTime=j,150>d.length&&(IMP.appendSitePropStatic("event",d),IMP.appendSitePropStatic("eventtime",newSimplePatternTime))):500>(K+"/"+d).length&&!X?(K=K+"/"+d,C("imp_plpt",document.location.pathname),C("imp_lpt",
K,!0)):(X="1",C("imp_lov","1"));W=!0;-1<a.toString().indexOf("scroll")&&(j=a.split("|"),2<=j.length&&(a=j[0]+"_"+j[1]),Pa=a);sb&&(IMP.appendSiteProp("event",Pa),IMP.appendSiteProp("implogtype",11),IMP.trackTimeInteract(),za());Math.round((new Date).getTime()/1E3)}},xc=function(){var a=w("imp_lprp"),b,c;if(a)for(var d=a.split(","),a=0;a<d.length;a++)if(c=d[a],b=w("imp_prp_"+c,!0)){var e;a:{e=void 0;for(e=0;e<ga;e++)if(c==fa[e]){e=!0;break a}e=!1}e||IMP.appendSiteProp(c,b)}},Qc=function(){var a=w("imp_lprp"),
b;if(a){for(var c=a.split(","),a=0;a<c.length;a++)b=c[a],v("imp_prp_"+b);v("imp_lprp")}};return IMP={hide_IMPiframe:function(a,b,c){var d=i[a],e=Ga[a];$a(d,Fa[a],e,!1);Wb[d]=setTimeout(function(){var a=document.getElementById(d);a&&a.parentNode.removeChild(a);(a=document.getElementById(d+"2"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"3"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"4"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"5"))&&a.parentNode.removeChild(a);
(a=document.getElementById(d+"6"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"7"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"8"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"9"))&&a.parentNode.removeChild(a);(a=document.getElementById(d+"10"))&&a.parentNode.removeChild(a)},1E3*e);if(1==a||2==a)sa(1,i[1]),sa(2,i[2]);ia[a]=0;IMP.trackCloseBox(b);Bb&&hd(a,b,c);bd(T[d])},initsite:function(a,b){var c=b;ya=a;c?("1"==c?c="imp":"2"==c?c="imp2":"3"==c?c="imp3":
"4"==c?c="imp4":"5"==c&&(c="imp5"),U=L+"//"+c+".nowinteract.com/logserver/ResponseService.ashx?",metadataurl=L+"//"+c+".nowinteract.com/logserver/PageMetaData.ashx?",ua=L+"//"+c+".nowinteract.com/logserver/ActionResponse.aspx"):(U=L+"//imp.nowinteract.com/logserver/ResponseService.ashx?",metadataurl=L+"//imp.nowinteract.com/logserver/PageMetaData.ashx?",ua=L+"//imp.nowinteract.com/logserver/ActionResponse.aspx")},isInitsite:function(){return ya?!0:!1},appendSitePatt:function(a,b,c){Ab=(new Date).getTime();
var d="";b&&(d=bb(b),d=d.toLowerCase(),d=d.replace(/[ ]/g,"-"),d="scroll-"+d);b="";c&&(b=bb(c),b=b.toLowerCase(),b=b.replace(/[ ]/g,"-"),b="click-"+b);ka?wd(a,d,b):xd(a,d,b)},appendSiteEvent:function(a){db(a,!0)},clearSiteProp:function(){fa=[];Ca=[];ga=0},appendSiteProp:function(a,b){fa[ga]=a;var c;c=b.toString().replace(/[\x09-\x10]/g," ");c=bb(c);c=c.toString().replace(/[^\x20-\x7E]/g,"");c=c.toString().replace(/[<>]/g,"");Ca[ga]=c;ga++},appendSitePropStatic:function(a,b){if(b){if(!w("imp_prp_"+
a,!0)){var c=w("imp_lprp");C("imp_lprp",c?c+","+a:a)}C("imp_prp_"+a,b,!0)}},getSitePropStatic:function(a){return w("imp_prp_"+a,!0)},clearAllSitePropStatic:function(){Qc()},appendNamedMetaProp:function(a,b){var c=Ec(a),d=a.toString().replace(/:/g,"");b&&(d=b);c&&IMP.appendSiteProp(d,c)},appendMetaProp:function(a){a=Ec(a);eb++;var b="impmeta";1<eb&&(b+=eb.toString());a&&IMP.appendSiteProp(b,a)},appendEventProp:function(a){a&&IMP.appendSiteProp("impevent",a)},trackButtonEvent:function(a,b,c){b=r[i[a]];
IMP.trackFollowLink(b);if(1==c){var d;1==a?(d=2,o("imp_curr_selection",d),ra(i[d],0,0,0,0,0,0,0,!1,10,0)):2==a?(d=1,o("imp_curr_selection",d),ra(i[d],0,0,0,0,0,0,0,!1,10,0)):d=0}l[a][c].LogEvent&&(IMP.appendSiteProp("impevent",l[a][c].LogEvent),IMP.appendSiteProp("impeventlogid",b),IMP.appendSiteProp("impeventmessid",ia[a]),ba=!0,S=1E4,l[a][c].KeepUrl?IMP.trackSwitchEventInteract():IMP.trackEventInteract(),S=3E3);if(l[a][c].LocalHandler)d=l[a][c].LogEvent,l[a][c].LocalHandlerDirective&&(d=l[a][c].LocalHandlerDirective),
cd(d,b,E(),pa());d=!1;if(l[a][c].ChangePage){var e=l[a][c].PageReference;if(e){var j=e.split("|");if(1<j.length){var g=j[0],f=j[1];"http://"!=g.substring(0,7)&&"https://"!=g.substring(0,8)&&(g=da(Z[a])+g);-1!=f.indexOf(".css")&&"http://"!=f.substring(0,7)&&"https://"!=f.substring(0,8)&&(f=da(Z[a])+f);var k;2<j.length&&(k=j[2],-1!=k.indexOf(".js")&&"http://"!=k.substring(0,7)&&"https://"!=k.substring(0,8)&&(k=da(Z[a])+k));3<j.length&&"CB"==j[3]&&o("imp_ih","1");var n="?key="+b.toString()+"&uk="+E();
5<j.length&&"CT"==j[5]&&(n="/"+E());setTimeout(function(){var b=g+n,c="Now_ClickWin"+a,d=f;-1==d.indexOf(".css")&&window.open(b,c,d)},250)}else if("http://"==e.substring(0,7)||"https://"==e.substring(0,8))d=!0,setTimeout(function(){window.location.href=e},50)}}d||(2==c||3==c||4==c?$a(i[a],2,2,!1):1==c&&$a(i[a],0,0,!1))},trackLogToolFollow:function(a){Qb(a)},trackLogToolAccept:function(a){Qb(a)},trackLogToolAcceptServer:function(a){Qb(a)},trackLogToolDisplay:function(a){Sc(a)},trackLogToolDisplayClose:function(){var a=
ca;a&&IMP.trackCloseBox(a)},trackLogToolClose:function(){var a=ca;a&&IMP.trackCloseBox(a)},trackLogToolDisplayAccept:function(a,b,c){var d=ca;d&&IMP.trackAcceptTool(d,a,b,c)},trackLogToolDisplayAcceptContact:function(a){ca&&ua&&Tc(ua,ca,a)},trackLogToolAcceptContact:function(a,b){Sc(a,!0,b)},trackAppendLog:function(a){if(!0==A()&&!0==ea())return!0;t=B.location.href;if(F()){a?IMP.appendSiteProp("webevent",1):IMP.appendSiteProp("webevent",3);z&&IMP.appendSiteProp("webdata",z);if(K)if(a={},uc()){a.webdatalog=
K;a.activity={};a.activity=tc(K);a.path=document.location.pathname;if(X)a.pattoverflow="1";if(1E3<JSON.stringify(a).toString().length)a.webdatalog="",a.sumoverflow="1";IMP.appendSiteProp("webdatalog",JSON.stringify(a))}else IMP.appendSiteProp("webdatalog",K),X&&IMP.appendSiteProp("implog","pattoverflow");I(G())}},trackInteract:function(a,b){if(!0==A()&&!0==ea())return!0;t=B.location.href;xa=B.referrer;a&&(t=a);b&&(xa=b);if($c(t)){var c;a:{try{if("object"===typeof IMP_HL&&"function"===typeof IMP_HL.exist_handle_testscript&&
IMP_HL.exist_handle_testscript()&&"function"===typeof IMP_HL.handle_testscript){c=!0;break a}}catch(d){}c=!1}if(c)try{IMP_HL.handle_testscript()}catch(e){}return!0}if(Rc()&&F()){Nc();qa();pa(!0);c=n("imp_lh");var i=n("imp_ih"),g=!1,f;f=t;var k="";if(f)try{"object"===typeof IMP_HL&&"function"==typeof IMP_HL.exist_check_handlerpattern&&IMP_HL.exist_check_handlerpattern()&&"function"==typeof IMP_HL.check_handlerpattern&&(k=IMP_HL.check_handlerpattern(f))}catch(l){}if(f=k)o("imp_lh",f.toString()),g=!0;
c?zc(c.toString()):g?zc(f.toString()):i&&(runhandlerresult=Eb(),0==runhandlerresult&&o("imp_lh","1"));Ac();(c=n("imp_sl"))||(c="0");c=Math.round(c)+1;o("imp_sl",c);ob=c;IMP.appendSiteProp("impview",ob);Sb()?(IMP.appendSiteProp("implogtype",0),Ua=!1):(IMP.appendSiteProp("implogtype",1),Ua=!0);ta(G(!0,!0),1);Za();IMP.clearAllSitePropStatic();Zb=pa();Bc()}},trackEventInteract:function(a){if(!0==A()&&!0==ea())return!0;a&&IMP.appendSiteProp("impevent",a);F()&&(IMP.appendSiteProp("implogtype",7),ta(H(),
2))},trackSwitchEventInteract:function(){if(!0==A()&&!0==ea())return!0;F()&&(IMP.appendSiteProp("implogtype",7),ta(G(),2))},trackTabInteract:function(a,b,c){if(!0==A()&&!0==ea())return!0;t=B.location.href;xa=B.referrer;b&&(t=b);c&&(xa=c);a&&IMP.appendSiteProp("tabevent",a);F()&&(z&&C("imp_pt",z),qa(),Pc(),IMP.appendSiteProp("implogtype",2),ta(G(),4),Za(),Mb(),Nb(),Gb("pagetab"),W=!1)},trackFocusInteract:function(){if(!0==A()&&!0==ea())return!0;t=B.location.href;Rc()&&F()&&(Nc(),qa(),Ac(!0),ta(G(),
5),Za(),Mb(),Nb(),Gb(),W=!1,Bc())},trackTimeInteract:function(){if(!0==A()&&!0==ea())return!0;t=B.location.href;F()&&(z&&C("imp_pt",z),qa(),ta(G(),3),Za(),Mb(),Nb(),Gb("pagetimer"),W=!1)},trackMetaData:function(){t=B.location.href;var a=I,b;b="siteid="+ya+"&url="+u(t)+"&rand="+Math.random();b+=Db();a(metadataurl+b);IMP.clearSiteProp()},trackSystemEvent:function(a,b){IMP.clearSiteProp();IMP.appendSiteProp("sysevent",a);IMP.appendSiteProp("interactionlogid",b);I(H());IMP.clearSiteProp()},trackCloseBox:function(a){IMP.trackSystemEvent(2,
a)},trackHtmlCloseBox:function(a){var b=0;a?b=r[a]:fb?(a=fb,b=r[a]):b=0;b&&IMP.trackCloseBox(b)},trackDisplay:function(a,b,c){IMP.clearSiteProp();IMP.appendSiteProp("sysevent",5);IMP.appendSiteProp("interactionlogid",a);IMP.appendSiteProp("displayreason",b);IMP.appendSiteProp("displayreasondetail",c);I(H());IMP.clearSiteProp()},trackFollowLink:function(a){IMP.trackSystemEvent(1,a)},trackAccept:function(a){IMP.trackSystemEvent(9,a)},trackAcceptTool:function(a,b,c,d){IMP.clearSiteProp();IMP.appendSiteProp("sysevent",
9);IMP.appendSiteProp("interactionlogid",a);b&&IMP.appendSiteProp("accepttype",b);c&&IMP.appendSiteProp("acceptcode",c);d&&IMP.appendSiteProp("acceptexttype",d);I(H());IMP.clearSiteProp()},trackError:function(a,b,c){IMP.clearSiteProp();IMP.appendSiteProp("sysevent",b);IMP.appendSiteProp("interactionlogid",a);IMP.appendSiteProp("syserrorinfo",c);I(H());IMP.clearSiteProp()},trackKeep:function(){jc=!0},trackGetKey:function(){return E()},getUKey:function(){return E()},getSKey:function(){return pa()},
getPKey:function(){return E()+"_"+Zb+"_"+Ka+"_"+ob},getJKey:function(){return Ya()},getCookie:function(a){return n(a)},getKeyVal:function(a){return n(a)},setKeyVal:function(a,b){return Cb(a,b)},transferKeys:function(a,b){return vc(a,b)}}})();


try {
	if (
		document.readyState === "complete" ||
		(document.readyState !== "loading" && !document.documentElement.doScroll)
	) {
		if (!IMP.isInitsite()) {
			IMP.initsite("cid110503","2");
			IMP.trackInteract();
		}
	} else {
		if (!IMP.isInitsite()) {
			document.addEventListener("DOMContentLoaded", function(event) {
				IMP.initsite("cid110503","2");
				IMP.trackInteract();
			});
		}
	}
} catch (e)
{

}
