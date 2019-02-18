
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"109",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){list=[];uv=window.universal_variable.transaction.line_items;for(i=0;i\u003Cuv.length;i++)\"MOBILE_POSTPAID\"!=uv[i].product.category\u0026\u0026\"MOBILE_BROADBAND_POSTPAID\"!=uv[i].product.category||list.push(uv[i].activation_type);return list})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(!1).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.universal_variable})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(",["escape",["macro",4],8,16],"){case \"checkout step 1\":var a=\"1\";break;case \"checkout step 2\":a=\"2\";break;default:a=\"Unknown\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{Mobiltelefoner:\"MOBILE_PHONE\",Abonnemang:\"MOBILE_POSTPAID\",\"Mobila bredband\":\"MOBILE_BROADBAND_POSTPAID\",Surfplattor:\"LAPTOP\",\"Fast telefoni\":\"FIXED_IN_MOBILE\",\"Tillbeh\\u00f6r\":\"ACCESSORY\",\"Subscription variant\":\"MOBILE_POSTPAID\",Installment:\"INSTALLMENT\",Samsung:\"MOBILE_PHONE\",\"Apple iPhone\":\"MOBILE_PHONE\",Surfplattor:\"LAPTOP\",Abonnemang:\"MOBILE_POSTPAID\",Apple:\"MOBILE_PHONE\",Sony:\"MOBILE_PHONE\",Huawei:\"MOBILE_PHONE\",\"Mobila bredband\":\"USB_MODEM\",Mobilskal:\"ACCESSORY\",\"Tillbeh\\u00f6r\":\"ACCESSORY\",\n\"Mobilt bredband\":\"MOBILE_BROADBAND_POSTPAID\",Mobilfodral:\"ACCESSORY\",\"Sk\\u00e4rmskydd\":\"ACCESSORY\",\"H\\u00f6rlurar\":\"ACCESSORY\",\"H\\u00f6gtalare\":\"ACCESSORY\",Laddare:\"ACCESSORY\",\"Biltillbeh\\u00f6r\":\"ACCESSORY\",Smartklockor:\"ACCESSORY\",Tillagg:\"ACCESSORY\",\"Portabla batterier\":\"ACCESSORY\",Lenovo:\"LAPTOP\",LG:\"MOBILE_PHONE\",\"Mobiltelefoner\/Apple\":\"MOBILE_PHONE\",\"Mobiltelefoner\/Samsung\":\"MOBILE_PHONE\",\"Router och modem\":\"USB_MODEM\",Accessory:\"ACCESSORY\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/MOBILE_BROADBAND_POSTPAID|MOBILE_POSTPAID\/})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.userAgent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"_ga\",b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");return 2==a.length?a.pop().split(\";\").shift().replace(\/GA[0-9]\\.[0-9]\\.\/i,\"\"):void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent.match(\/iPad|iPhone|iOS|Android|Windows|Macintosh\/);return a?a[0]:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var d=0;if(1!==arguments.length)return!1;var c=Object.prototype.toString.call(b).substring(8,Object.prototype.toString.call(b).length-1).toLowerCase();switch(c){case \"undefined\":return!1;case \"number\":b=b.toString();case \"string\":break;default:return!1}b=b.replace(\/(\\-| |\\+)\/g,\"\");10\u003Cb.length\u0026\u0026(b=b.replace(\/^(19|20)\/g,\"\"));c=b.slice(0,9);var a=parseInt(c.slice(2,4),10);if(!(1\u003C=a\u0026\u002612\u003E=a))return!1;a=parseInt(c.slice(4,6),10);if(!(1\u003C=a\u0026\u002631\u003E=a||61\u003C=a\u0026\u002691\u003E=a))return!1;for(i=\n0;i\u003Cc.length;++i)a=parseInt(c[i],10),a*=i%2===parseInt(c.length,10)%2?1:2,10\u003C=a\u0026\u0026(a=1+a-10),d+=9\u003Ca?parseInt(a.toString()[0],10)+parseInt(a.toString()[2],10):a;d=(10-d%10)%10;return parseInt(d,10)===parseInt(b.substring(b.length-1),10)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[{name:\"email\",regex:\/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+)\/g},{name:\"pid\",regex:\/(19|20)?[0-9]{6}(\\-| |\\+)?[0-9]{4}\/g},{name:\"mobile_phone\",regex:\/(\\+?46|0)7\\d{8}\/g}]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.universal_variable.product.name})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.universal_variable.product.category})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.universal_variable.product.manufacturer})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){list=[];uv=window.universal_variable.transaction.line_items;for(i=0;i\u003Cuv.length;)return uv[i].product.name\u0026\u0026list.push(uv[i].product.name),list})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){list=[];uv=window.universal_variable.transaction.line_items;for(i=0;i\u003Cuv.length;)return uv[i].product.category\u0026\u0026list.push(uv[i].product.category),list})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){list=[];uv=window.universal_variable.transaction.line_items;for(i=0;i\u003Cuv.length;)return uv[i].product.manufacturer\u0026\u0026list.push(uv[i].product.manufacturer),list})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){list=[];uv=window.universal_variable.transaction.line_items;for(i=0;i\u003Cuv.length;)return uv[i].product.unit_price\u0026\u0026list.push(uv[i].product.unit_price),list})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=[\"tele2.se\",\"tele2online.se\"],b=window[window.GoogleAnalyticsObject];a=a.get(\"name\");b(a+\".require\",\"linker\");b(a+\".linker:autoLink\",c)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"customEventData"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",22],8,16],"||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(i=0;i\u003CCorporatesList.length;i++)1==CorporatesList[i].selected\u0026\u0026(orgNr=CorporatesList[i].organizationNumber);return orgNr})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=universal_variable.transaction.line_items,b=\"\";for(i=0;i\u003Ca.length;i++)if(null==a[i].product.name.match(\/datakort\/gi)){var c=\"f1%3D\"+(a[i].product.id||\"0\")+\"%26f2%3D\"+(a[i].product.name||\"\")+\"%26f3%3D\"+(a[i].product.unit_price||\"0\")+\"%26f4%3D\"+(a[i].product.quantity||\"0\");b+=0==i?c:\"%7C\"+c}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.location.hash})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorInfo"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?",["escape",["macro",27],8,16],".form||void 0:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?",["escape",["macro",27],8,16],".field||void 0:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?",["escape",["macro",27],8,16],".message||void 0:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".cart-empty\");return a?!(0===a.offsetWidth\u0026\u00260===a.offsetHeight):void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#checkout-success-page-top-container\");return a?a.textContent:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".error-state\");return a?a.textContent:void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",34],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",35],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.error"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.status"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",37],8,16],"?",["escape",["macro",38],8,16],"+\" \"+",["escape",["macro",37],8,16],":",["escape",["macro",38],8,16],"})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",3],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".userdata.id?",["escape",["macro",42],8,16],".userdata.id:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(g){var l=",["escape",["macro",12],8,16],",m=[\"uid\",\"cid\"],h=\"[$pii redacted]\",n=g.get(\"sendHitTask\"),b,d,e,a,k;g.set(\"sendHitTask\",function(f){d=f.get(\"hitPayload\").split(\"\\x26\");for(b=0;b\u003Cd.length;b++)if(e=d[b].split(\"\\x3d\"),-1===m.indexOf(e[0].toLowerCase())){a=decodeURIComponent(e[1]);try{a=decodeURIComponent(a)}catch(c){}l.forEach(function(c){switch(c.name){case \"pid\":(k=a.match(c.regex))\u0026\u0026k.forEach(function(b){",["escape",["macro",11],8,16],"(b)\u0026\u0026(a=a.replace(b,h.replace(\"$pii\",c.name)))});\nbreak;default:a=a.replace(c.regex,h.replace(\"$pii\",c.name))}});e[1]=encodeURIComponent(a);d[b]=e.join(\"\\x3d\")}f.set(\"hitPayload\",d.join(\"\\x26\"),!0);n(f)})}})();"]
    },{
      "function":"__c",
      "vtp_value":"tele2.se, tele2online.se"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".flowName||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".flowStepName||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".eventName||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".formResponse||void 0})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","customTask","value",["macro",44]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",45],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","49","dimension",["macro",46]],["map","index","50","dimension",["macro",47]],["map","index","51","dimension",["macro",48]],["map","index","52","dimension",["macro",49]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12442609-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".page})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],".type})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"imp_uk"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",44]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12442609-9",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".product})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",57],8,16],";return{ecommerce:{add:{products:[{id:a.id||a.name,name:a.name,category:a.category,brand:a.manufacturer,quantity:1}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".basket})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",59],8,16],".line_items})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",60],8,16],",d={ecommerce:{checkout:{actionField:{},products:[]}}},g=\/MOBILE_BROADBAND_POSTPAID|MOBILE_POSTPAID\/;if(a){a=a.filter(function(a){return\"Datakort\"!==a.product.name});d.ecommerce.checkout.actionField.step=",["escape",["macro",5],8,16],";var c=a.filter(function(a){return a.product.category.match(g)});switch(!0){case 0\u003Cc.length:d.ecommerce.checkout.actionField.list=0\u003Cc.filter(function(a){return\"MOBILE_POSTPAID\"===a.product.category}).length?\"Mobiltelefoner\":\"Mobila bredband\";\nbreak;default:d.ecommerce.checkout.actionField.list=\"\"}for(c=0;c\u003Ca.length;++c){var b=a[c].product,e=a[c].quantity,f=a[c].subtotal;d.ecommerce.checkout.products.push({id:b.id?b.id:\"Unknown\",name:b.name?b.name:\"Unknown\",category:b.category?b.category:\"Unknown\",brand:b.manufacturer?b.manufacturer:\"Unknown\",dimension8:b.binding_period?b.binding_period:\"0\",quantity:e?e:\"1\",price:f?f:\"0\"})}a=d.ecommerce;return a.checkout.actionField.list?d:void 0}})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".transaction})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],".line_items})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],".order_id})();"]
    },{
      "function":"__c",
      "vtp_value":"www"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".transaction.total})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],".shipping_cost})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",63],8,16],",c=",["escape",["macro",64],8,16],",d={ecommerce:{purchase:{actionField:{},products:[]}}};if(b){d.ecommerce.purchase.actionField={id:",["escape",["macro",65],8,16],",affiliation:",["escape",["macro",66],8,16],",revenue:",["escape",["macro",67],8,16],",shipping:",["escape",["macro",68],8,16],"};for(b=0;b\u003Cc.length;++b){var a=c[b].product,e=c[b].subtotal,f=c[b].quantity;\"Datakort\"!==a.name\u0026\u0026d.ecommerce.purchase.products.push({id:a.id?a.id:a.name,name:a.name?a.name:\"Unknown\",category:a.category?a.category:\"Unknown\",\nbrand:a.manufacturer?a.manufacturer:\"Unknown\",price:e?e:\"0\",dimension7:c[b].activation_type?c[b].activation_type:\"Unknown\",dimension8:a.binding_period?a.binding_period:\"Unknown\",quantity:f?f:\"0\"})}c=d.ecommerce.purchase;return 0\u003Cc.products.length?d:void 0}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".listing})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",75],8,16],".items})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".query})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",76],8,16],",d={ecommerce:{impressions:[]}},e=",["escape",["macro",77],8,16],",f=",["escape",["macro",6],8,16],"[e]||\"\";Array.from(document.querySelectorAll(\".hero-box .product-block .row.product-block__row \\x3e div .product-block__content\")).forEach(function(a,b,c){d.ecommerce.impressions.push({id:a.querySelector(\"h4.product-block__title\").dataset.atProductName,name:a.querySelector(\"h4.product-block__title\").dataset.atProductName,category:f,brand:a.querySelector(\"p.product-block__brand\").textContent,\nprice:a.querySelector(\"p.product-block__price\").dataset.atPrice,position:b+1,list:e||\"\"})});for(var b=0;b\u003Cc.length;++b){var a=c[b];\"Datakort\"!==a.name\u0026\u0026d.ecommerce.impressions.push({id:a.id?a.id:\"Unknown\",name:a.name?a.name:\"Unknown\",category:f,brand:a.manufacturer?a.manufacturer:\"Unknown\",price:a.subtotal?a.subtotal:\"0\",position:b+5,list:e||\"\"})}return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a){var b=",["escape",["macro",6],8,16],";a.category\u0026\u0026(a.category=b[a.category]?b[a.category]:a.category);a.list\u0026\u0026(a.list=b[a.list]?b[a.list]:a.list);a.quantity=a.quantity||1;return a}var a=",["escape",["macro",79],8,16],";try{switch(",["escape",["macro",4],8,16],"){case \"productImpression\":a.impressions=a.impressions.map(b);break;case \"productClick\":a.click.products=a.click.products.map(b);break;case \"productDetail\":a.detail.products||(a.detail={products:[a.detail]});a.detail.products=a.detail.products.map(b);\nbreak;case \"addToCart\":a.add.products=a.add.products.map(b);break;case \"removeFromCart\":a.remove.products=a.remove.products.map(b);break;case \"checkout\":a.checkout.products=a.checkout.products.map(b);break;case \"transaction\":a.purchase.products?a.purchase.products=a.purchase.products.map(b):(a.purchase.products=a.products.map(b),delete a.products)}}catch(c){console.log(\"GTM EEC Error - Custom JS variable broken\")}return a?{ecommerce:a}:{ecommerce:{}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",80],8,16],".ecommerce.purchase.products;b=b.filter(function(a){return\"MOBILE_POSTPAID\"==a.category||\"MOBILE_BROADBAND_POSTPAID\"==a.category});return b.map(function(a){return a.dimension7})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){ec=",["escape",["macro",80],8,16],".ecommerce.purchase.products;return ec.map(function(a){return a.name})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){ec=",["escape",["macro",80],8,16],".ecommerce.purchase.products;return ec.map(function(a){return a.category})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",80],8,16],".ecommerce.purchase.actionField.id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",57],8,16],",b={ecommerce:{detail:{products:[]}}};b.ecommerce.detail.products.push({id:a.id?a.id:\"Unknown\",name:a.name?a.name:\"Unknown\",category:a.category?a.category:\"Unknown\",brand:a.manufacturer?a.manufacturer:\"Unknown\",price:a.unit_price?a.unit_price:\"0\"});return b||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".eventType||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".httpMethod||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".responseStatus||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".endpoint||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/global_accounts\\\\\/self\":\"settings - change name\",\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/login_accounts\\\\\/self\\\\\/password\":\"settings - change password\",\"\\\\\/api\\\\\/proxy\\\\\/v3\\\\\/business\\\\\/bgis\\\\\/global_accounts\":\"create account\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/balances\\\\\/msisdns\\\\\/[0-9]{11}\\\\\/balances\\\\\/storedCreditCard\":\"buy data - credit card\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/balances\\\\\/msisdns\\\\\/[0-9]{11}\\\\\/balances\\\\\/invoice\":\"buy data - invoice\",\n\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/balances\\\\\/msisdns\\\\\/[0-9]{11}\\\\\/balances\\\\\/newCreditCard\":\"buy data - new credit card\",\".+\\\\\/[0-9]{11}\\\\\/barring\":\"spending limit - set spending limit\",\".+\\\\\/[0-9]{11}\\\\\/barring\\\\\/SpendingLimit\":\"spending limit - remove spending limit\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_accounts\\\\\/[0-9a-z-]{36}\\\\\/global_products\":\"manage number - add and move number\",\"\\\\\/api\\\\\/proxy\\\\\/v3\\\\\/business\\\\\/bgis\\\\\/global_accounts\\\\\/[0-9a-z-]{36}\\\\\/global_products\":\"manage number and fullservice mobile - add number and fullservice mobile\",\n\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_accounts\\\\\/[0-9a-z-]{36}\\\\\/global_products\\\\\/[0-9a-z-]{36}\":\"manage number and fullservice mobile - remove number and fullservice mobile\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_accounts\\\\\/self\\\\\/global_products\\\\\/[0-9a-z-]{36}\":\"my account manage number - remove number\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_accounts\\\\\/[0-9a-z-]{36}\\\\\/global_products\\\\\/[0-9a-z-]{36}?keepProductInGroup\\x3dfalse\":\"my account manage number - remove number\",\n\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/relations\\\\\/global_groups\":\"manage employees and groups - create group\",\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/relations\\\\\/global_groups\\\\\/[0-9a-z-]{36}\\\\\/parent_groups\":\"manage employees and groups - move group\",\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/relations\\\\\/global_groups\\\\\/[0-9a-z-]{36}\":\"manage employees and groups - remove group\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_groups\\\\\/[0-9a-z-]{36}\":\"manage employees and groups - move employee\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_accounts\\\\\/[0-9a-z-]{36}\\\\\/globalCorporates\\\\\/[0-9a-z-]{36}\":\"manage employees and groups - remove employee\",\n\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/global_products\\\\\/[0-9a-z-]{36}\":\"manage invoice name - changed invoice name\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/authorization\\\\\/global_accounts\\\\\/[0-9a-z-]{36}\\\\\/global_corporates\\\\\/[0-9a-z-]{36}\\\\\/rules\":\"manage authorization - change user authorities\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/relations\\\\\/authorization\\\\\/global_corporates\\\\\/[0-9a-z-]{36}\\\\\/rule_templates\\\\\/[0-9a-z-]{36}\":\"manage authorization - remove template\",\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/support\\\\\/tickets\":\"create support matter - created support matter\",\n\"api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/events\\\\\/notifications\\\\\/settings\":\"notifications - changed notification settings\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/simcards\\\\\/[0-9]{20}\":\"manage sim - activate sim\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/simcards\\\\\/replace\\\\\/msisdns\\\\\/[0-9]{11}\":\"manage sim - order and block sim\",\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/purchase_flow\\\\\/global_corporates\\\\\/[0-9a-z-]{36}\\\\\/purchase\":\"manage subscription - new subscription\",\"\\\\\/api\\\\\/proxy\\\\\/v1\\\\\/business\\\\\/purchase_flow\\\\\/global_corporates\\\\\/[0-9a-z-]{36}\\\\\/prolongorder\":\"manage subscription - change subscription\",\n\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/invoices\\\\\/global_costcenters\\\\\/[0-9a-z-]{36}\\\\\/products\":\"manage invoices - create move subtract summarized invoice\",\"\\\\\/api\\\\\/proxy\\\\\/v2\\\\\/business\\\\\/invoices\\\\\/[0-9a-z-]{36}\":\"manage invoices - change invoice details\"};for(r in a)if(",["escape",["macro",89],8,16],".match(r))return a[r]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",90],8,16],".toString().split(\" -\")[0]||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".currentPath||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".isCorporateAdmin||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"error \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",89],8,16],"||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".errorData.cId||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".eventName||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".path||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.origin+",["escape",["macro",97],8,16],"||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".pageFunnel||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",99],8,16],".split(\"?\")[0]||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.origin+",["escape",["macro",100],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={\"Ans\\u00f6k om att bli f\\u00f6retagsadmin\":\"\/behorigheter\/\",\"\\u00c4ndra r\\u00e4ttigheter\":\"\/oppnabehorigheter\/\",\"Numret finns redan i en grupp\":\"\/numretfinnsredanigrupp\/\",\"Produkten \\u00e4r nu tillagd p\\u00e5 kontot\":\"\/produkttillagd\/\",\"Fullservicemobilen finns redan i grupp\":\"\/fullservicemobilenfinnsredanigrupp\/\",\"Ta bort nummer\":\"\/tabortnummer\/\",\"Modal f\\u00f6r att spara inst\\u00e4llningar\":\"\/sparainst\\u00e4llningar\/\",\"Modal f\\u00f6r att l\\u00e4gga till h\\u00e5rdvara\":\"\/laggtillhardvara\/\",\n\"H\\u00e5rdvara finns redan i en grupp\":\"\/hardvarafinnsredanigrupp\/\",\"Modal f\\u00f6r att l\\u00e4gga till nummer\":\"\/laggtillnummer\/\",\"Visa villkor\":\"\/visavillkor\/\",\"Modal f\\u00f6r att \\u00e4ndra adress\":\"\/andraadress\/\",\"Modal f\\u00f6r att v\\u00e4lja grupp\":\"\/valjgrupp\/\",\"Allokera licens\":\"\/allokeralicens\/\",\"Ta bort licens\":\"\/tabortlicens\/\",\"K\\u00f6p office produkt\":\"\/kopofficeprodukt\/\",\"Byt office licens\":\"\/bytofficelicens\/\",\"Ta office licens fr\\u00e5n anv\\u00e4ndare\":\"\/tabortofficelicens\/\",\"Ta bort office anv\\u00e4ndare\":\"\/tabortofficeanvandare\/\",\n\"L\\u00e4gg till office licens till anv\\u00e4ndare\":\"\/laggtillofficelicensanvandare\/\",\"Ta bort beh\\u00f6righetsmall\":\"\/tabortbehorighetsmall\/\",\"Modal f\\u00f6r att spara\/redigera beh\\u00f6righeter\":\"\/sparaandringarbehorigheter\/\",\"Modal f\\u00f6r att bekr\\u00e4fta till\\u00e4ggning av nummer\":\"\/bekraftatillaggningavnummer\/\",\"\\u00d6ppna faktura detaljer\":\"\/fakturadetaljer\/\",\"\\u00d6ppna betala faktura\":\"\/betalafaktura\/\",\"Bekr\\u00e4fta attesteringar\":\"\/bekraftaattestering\/\",\"Bulk attesteringar\":\"\/bulkattesteringar\/\",\n\"Bekr\\u00e4ftelse f\\u00f6r skapa grupp\":\"\/bekraftelseskapagrupp\/\",\"Skapa grupp\":\"\/oppnaskapagrupp\/\",\"\\u00c4ndra anv\\u00e4ndare\":\"\/oppnaandraanvandare\/\",\"Aktivera administrator\":\"\/aktiveraadmin\/\",\"\\u00d6ppna produkt\":\"\/oppnaprodukt\/\",\"L\\u00e4gg till nummer\":\"\/laggtillnummer\/\",\"L\\u00e4gg till produkt\":\"\/laggtillprodukt\/\",\"Info om r\\u00e4ttigheten faktura\":\"\/rattighetsinfofaktura\/\",\"Skapa beh\\u00f6righetsmall\":\"\/skapabehorighetsmall\/\",\"Uppdatera beh\\u00f6righetsmall\":\"\/uppdaterabehorighetsmall\/\",\"Numret g\\u00e5r ej att f\\u00f6r\\u00e4ndra\":\"\/numretgarejforandra\/\",\n\"Signera CFA\":\"\/signeracfa\/\",\"\\u00d6ppna bankID modal\":\"\/bankid\/\",\"K\\u00f6p extra data\":\"\/kopextradata\/\",\"Best\\u00e4ll SIM-kort\":\"\/bestallsim\/\",\"Aktivera sim\":\"\/aktiverasim\/\",\"Sp\\u00e4rra SIM-kort\":\"\/sparrasim\/\",\"\\u00c4ndra saldotak\":\"\/oppnaandrasaldotak\/\",\"Bekr\\u00e4ftelse ta bort konto\":\"\/bekraftelsetabortkonto\/\",\"Flytta grupp\":\"\/oppnaflyttagrupp\/\",\"Bekfr\\u00e4ftelse flytta grupp\":\"\/bekraftelseflyttagrupp\/\",\"Ta bort grupp\":\"\/oppnatabortgrupp\/\",\"Bekfr\\u00e4ftelse ta bort grupp\":\"\/bekraftelsetabortgrupp\/\",\n\"Bekr\\u00e4ftelse ta bort grupp\":\"\/bekraftelsetabortgrupp\/\",\"Flytta konto\":\"\/oppnaflyttakonto\/\",\"Bekr\\u00e4ftelse du kan endast ta bort tomma grupper\":\"\/ejtomtabortgrupp\/\",\"Bekfr\\u00e4ftelse flytta konto\":\"\/bekraftelseflyttakonto\/\",\"Ta bort konto\":\"\/oppnatabortkonto\/\",\"Bekfr\\u00e4ftelse ta bort konto\":\"\/bekraftelsetabortkonto\/\"};return ",["escape",["macro",96],8,16],"?a[",["escape",["macro",96],8,16],"]:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.origin+",["escape",["macro",102],8,16],"||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".old_price_plan||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".new_price_plan||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",104],8,16],"+\" - \"+",["escape",["macro",105],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".upgrade||void 0})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".status||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".action||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".groupId||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".errorCode||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",109],8,16],"+\" - \"+",["escape",["macro",112],8,16],"||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],".t2MagentoError||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",114],8,16],".errorCode||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",114],8,16],".errorMessage||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",115],8,16],"+\" - \"+",["escape",["macro",116],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dwellTimeValue"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shippingMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutFlow"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",45],
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",80],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","customTask","value",["macro",44]],["map","fieldName","userId","value",["macro",121]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","10","dimension",["macro",122]],["map","index","38","dimension",["macro",123]],["map","index","42","dimension",["macro",124]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-12442609-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ctaTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",80],8,16],".ecommerce.promoClick.promotions[0].name||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".category||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".action||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".label||void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"verificationMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formResponse"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.service"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],".ecommerce.detail.products;return a.map(function(a){return a.price})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],".ecommerce.detail.products;return a.map(function(a){return a.name})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",80],8,16],".ecommerce.purchase.actionField.revenue})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",80],8,16],".ecommerce.purchase.products;b=b.filter(function(a){return\"MOBILE_POSTPAID\"==a.category||\"MOBILE_BROADBAND_POSTPAID\"==a.category});return b.map(function(a){return a.name})})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"T2HIDECOOKIEBAR"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"BLOCKED",
      "vtp_map":["list",["map","key","true","value","true"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],".payment_type})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],".shipping_method})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":["macro",70]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".accountId||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".responseStatusText||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".postData||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",155],8,16],".totalPrice.split(\".\")[0]||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",155],8,16],"[0].amount.value||void 0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"TRADEDOUBLER"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageLanguage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseCode"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","customTask","value",["macro",44]],["map","fieldName","userId","value",["macro",121]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",45],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12442609-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotionName"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","userId","value",["macro",43]],["map","fieldName","customTask","value",["macro",44]],["map","fieldName","allowLinker","value","true"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",45],
      "vtp_gaSettings":["macro",50],
      "vtp_dimension":["list",["map","index","6","dimension",["macro",43]],["map","index","12","dimension",["macro",52]],["map","index","11","dimension",["macro",53]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"tele2online.se",
      "vtp_decorateFormsAutoLink":false,
      "vtp_gaSettings":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",58],
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Add to cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",61],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_eventCategory":"Cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Visit Step",
      "vtp_eventLabel":["macro",5],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",69],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_eventCategory":"Transaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Success",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Order new",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Choose a product",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Click Edit -button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Home page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Go directly to your subsriptions -button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1066540940",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"OBGACLTlmAIQjL_I_AM",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",72],
      "tag_id":38
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1066540940",
      "vtp_conversionLabel":"OBGACLTlmAIQjL_I_AM",
      "vtp_url":["macro",72],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5563447",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":42
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5563447",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":43
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u5","value",["macro",9]],["map","key","u7","value",["macro",10]],["map","key","u8","value",["macro",56]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"homep0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"tele20",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5234681",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",73],
      "vtp_url":["macro",72],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"SetSpendingLimit",
      "vtp_eventLabel":"submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"AddSubscriptions",
      "vtp_eventLabel":"submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"ActivateSIM",
      "vtp_eventLabel":"submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"ReplaceMainSIM",
      "vtp_eventLabel":"submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"ChangeAlias",
      "vtp_eventLabel":"submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"TSO -start page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Click IP-VPN -button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",78],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"product impression",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",13]],["map","key","u3","value",["macro",14]],["map","key","u7","value",["macro",10]],["map","key","u8","value",["macro",56]],["map","key","u10","value",["macro",15]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"remar0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"tele20",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5234681",
      "vtp_ordinalStandard":["macro",73],
      "vtp_url":["macro",72],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":59
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",81]],["map","key","u2","value",["macro",82]],["map","key","u3","value",["macro",83]],["map","key","u7","value",["macro",10]],["map","key","u8","value",["macro",56]],["map","key","u9","value","shipping_method"],["map","key","u10","value","brands"]],
      "vtp_revenue":"1",
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",84],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sales0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"tele20",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5234681",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",72],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":60
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u7","value",["macro",10]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"mittt0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"tele20",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5234681",
      "vtp_ordinalStandard":["macro",73],
      "vtp_url":["macro",72],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":61
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"remar0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"tele200",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5234681",
      "vtp_ordinalStandard":["macro",73],
      "vtp_url":["macro",72],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Transaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Type",
      "vtp_eventLabel":"New Sales Order",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",85],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"product detail",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_gaSettings":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":["macro",91],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","19","dimension",["macro",93]],["map","index","32","dimension",["macro",24]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"mitt konto - error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",95],
      "vtp_dimension":["list",["map","index","19","dimension",["macro",93]],["map","index","32","dimension",["macro",24]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",98]],["map","fieldName","page","value",["macro",97]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",50],
      "vtp_dimension":["list",["map","index","19","dimension",["macro",93]],["map","index","32","dimension",["macro",24]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":75
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",101]],["map","fieldName","page","value",["macro",100]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",50],
      "vtp_dimension":["list",["map","index","19","dimension",["macro",93]],["map","index","32","dimension",["macro",24]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",103]],["map","fieldName","page","value",["macro",102]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",50],
      "vtp_dimension":["list",["map","index","19","dimension",["macro",93]],["map","index","32","dimension",["macro",24]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"PricePlanChange",
      "vtp_eventLabel":["macro",106],
      "vtp_dimension":["list",["map","index","20","dimension",["macro",107]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",50],
      "vtp_dimension":["list",["map","index","6","dimension",["macro",43]],["map","index","12","dimension",["macro",52]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"leadform open",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Multi User Discount",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",110],
      "vtp_eventLabel":["macro",109],
      "vtp_dimension":["list",["map","index","31","dimension",["macro",111]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Multi User Discount",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",110],
      "vtp_eventLabel":["macro",113],
      "vtp_dimension":["list",["map","index","31","dimension",["macro",111]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Error",
      "vtp_eventLabel":["macro",117],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Recourse download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Download of PDF",
      "vtp_eventLabel":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingCategory":"dwelltime",
      "vtp_gaSettings":["macro",50],
      "vtp_timingVar":["macro",56],
      "vtp_timingValue":["macro",119],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"product click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"remove from cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"checkout option",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"checkout error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"form error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",28],
      "vtp_eventLabel":["template",["macro",29],":",["macro",30]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"GDPR",
      "vtp_eventLabel":["macro",55],
      "vtp_dimension":["list",["map","index","46","dimension",["macro",55]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Apple iPhone rumor page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Submit rumor",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":112
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Apple iPhone rumor page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Choose customer type",
      "vtp_eventLabel":["macro",55],
      "vtp_dimension":["list",["map","index","47","dimension",["macro",55]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"iPhone Cloudshop 2018",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Submit details",
      "vtp_eventLabel":"Lobby page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"iPhone Cloudshop 2018",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Gå till startsidan",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"iPhone Cloudshop 2018",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Gå till studentbutiken",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":119
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"iPhone Cloudshop 2018",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Gå till företagsbutiken",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":120
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"iPhone Cloudshop 2018",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Gå till privatbutiken",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"iPhone Cloudshop 2018",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Gå till vanliga företagssidan",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":125
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"checkout",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":126
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"product detail",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":128
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"product impression",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":129
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"remove from cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":130
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"transaction",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":131
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"add to cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"VAS",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"SMS validation",
      "vtp_eventLabel":"HBO",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":134
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"VAS",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Submit verifying code",
      "vtp_eventLabel":"HBO",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":135
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"VAS",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Go to sign up",
      "vtp_eventLabel":"HBO",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":136
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"VAS",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Go to sign up",
      "vtp_eventLabel":"Readly",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":138
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mer-data",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Error",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":141
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"empty cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":144
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Proceed to checkout",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Continue with insurance",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Continue without insurance",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":147
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Transaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Error",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":148
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Confirm personal information",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":149
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Confirm delivery method",
      "vtp_eventLabel":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":150
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Confirm purchase",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":151
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Confirm number choice",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":152
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":153
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Startpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Call to Action",
      "vtp_eventLabel":["macro",126],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":"Promotion Click",
      "vtp_eventLabel":["macro",127],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",128],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",129],
      "vtp_eventLabel":["macro",130],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Unlimited freedom företag",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Unlimited för företag",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":157
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Unlimited freedom residential",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Unlimited freedom",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",36],
      "vtp_eventLabel":["template",["macro",131]," - ",["macro",132]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":159
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Unlimited freedom",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Unlimited freedom offer click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Unlimited people",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Click Läs mer -button",
      "vtp_eventLabel":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Unlimited freedom",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Click Läs mer -button",
      "vtp_eventLabel":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cloudshop Presale",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["template","Buy – ",["macro",133]],
      "vtp_eventLabel":["macro",134],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":164
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cloudshop Presale",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Text verification",
      "vtp_eventLabel":["macro",134],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":165
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"HeroBannerClicks",
      "vtp_eventLabel":["template","click url ",["macro",71]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":166
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Add to cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":175
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Continue to cart - subscription page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":176
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Show cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":177
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request invoice access",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Begär access",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":178
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"My carts",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":180
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Admin",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"New user",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":182
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":183
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":184
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Send order",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":185
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Order ok",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":186
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Continue to my carts",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":187
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Next 1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":189
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Next 2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":190
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Importera",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":193
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Exportera",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":194
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Form control",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":195
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Continue shopping",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"StartpageInteractions",
      "vtp_eventLabel":["template",["macro",108],["macro",70]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":197
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"BenefitsInteraction",
      "vtp_eventLabel":"Click on FAQ button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"BenefitsInteraction",
      "vtp_eventLabel":["template","Click on ",["macro",55]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":199
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Order flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Order now 2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":200
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Onboarding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",46],
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":209
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Onboarding flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Go to privat",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":210
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Onboarding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Go to TSO",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":211
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My carts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Send order",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":212
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My carts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Continue to cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":213
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My carts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Empty cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":214
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"My carts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Order ok",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":215
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"leadform submit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":219
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",135]," flow"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":["macro",136],
      "vtp_eventLabel":["macro",39],
      "vtp_dimension":["list",["map","index","57","dimension",["macro",137]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":221
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Submit",
      "vtp_eventLabel":["macro",138],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":222
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"Click - Samsung Beyond",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":229
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"mainMenu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"demandAnalysisBanner",
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":225
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mitt Tele2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",50],
      "vtp_eventAction":"ViewInvoice",
      "vtp_eventLabel":"Click on PDF link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":223
    },{
      "function":"__cl",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__cl",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__cl",
      "tag_id":244
    },{
      "function":"__cl",
      "tag_id":245
    },{
      "function":"__cl",
      "tag_id":246
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7793249_157",
      "tag_id":247
    },{
      "function":"__hl",
      "tag_id":248
    },{
      "function":"__cl",
      "tag_id":249
    },{
      "function":"__cl",
      "tag_id":250
    },{
      "function":"__cl",
      "tag_id":251
    },{
      "function":"__cl",
      "tag_id":252
    },{
      "function":"__cl",
      "tag_id":253
    },{
      "function":"__cl",
      "tag_id":254
    },{
      "function":"__cl",
      "tag_id":255
    },{
      "function":"__cl",
      "tag_id":256
    },{
      "function":"__cl",
      "tag_id":257
    },{
      "function":"__cl",
      "tag_id":258
    },{
      "function":"__cl",
      "tag_id":259
    },{
      "function":"__cl",
      "tag_id":260
    },{
      "function":"__cl",
      "tag_id":261
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7793249_243",
      "tag_id":262
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7793249_245",
      "tag_id":263
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".error-state",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"7793249_263",
      "tag_id":264
    },{
      "function":"__cl",
      "tag_id":265
    },{
      "function":"__cl",
      "tag_id":266
    },{
      "function":"__cl",
      "tag_id":267
    },{
      "function":"__cl",
      "tag_id":268
    },{
      "function":"__cl",
      "tag_id":269
    },{
      "function":"__cl",
      "tag_id":270
    },{
      "function":"__cl",
      "tag_id":271
    },{
      "function":"__cl",
      "tag_id":272
    },{
      "function":"__cl",
      "tag_id":273
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"7793249_292",
      "vtp_enableTriggerStartOption":false,
      "tag_id":274
    },{
      "function":"__cl",
      "tag_id":275
    },{
      "function":"__cl",
      "tag_id":276
    },{
      "function":"__cl",
      "tag_id":277
    },{
      "function":"__cl",
      "tag_id":278
    },{
      "function":"__cl",
      "tag_id":279
    },{
      "function":"__cl",
      "tag_id":280
    },{
      "function":"__cl",
      "tag_id":281
    },{
      "function":"__cl",
      "tag_id":282
    },{
      "function":"__cl",
      "tag_id":283
    },{
      "function":"__cl",
      "tag_id":284
    },{
      "function":"__cl",
      "tag_id":285
    },{
      "function":"__cl",
      "tag_id":286
    },{
      "function":"__cl",
      "tag_id":287
    },{
      "function":"__cl",
      "tag_id":288
    },{
      "function":"__cl",
      "tag_id":289
    },{
      "function":"__cl",
      "tag_id":290
    },{
      "function":"__cl",
      "tag_id":291
    },{
      "function":"__cl",
      "tag_id":292
    },{
      "function":"__cl",
      "tag_id":293
    },{
      "function":"__cl",
      "tag_id":294
    },{
      "function":"__cl",
      "tag_id":295
    },{
      "function":"__cl",
      "tag_id":296
    },{
      "function":"__cl",
      "tag_id":297
    },{
      "function":"__cl",
      "tag_id":298
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7793249_400",
      "tag_id":299
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7793249_401",
      "tag_id":300
    },{
      "function":"__cl",
      "tag_id":301
    },{
      "function":"__cl",
      "tag_id":302
    },{
      "function":"__cl",
      "tag_id":303
    },{
      "function":"__cl",
      "tag_id":304
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7793249_471",
      "tag_id":305
    },{
      "function":"__cl",
      "tag_id":306
    },{
      "function":"__cl",
      "tag_id":307
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(d){function f(b,c){c\u0026\u0026(c+=(\/\\?\/.test(c)?\"\\x26\":\"?\")+\"lv\\x3d1\");d[b]||function(){var h=window,k=document,m=b,f=k.location.protocol,e=\"load\",q=0;(function(){function b(){a.P(e);a.w=1;d[m](\"_load\")}d[m]=function(){function b(){b.id=l;return d[m].apply(b,arguments)}var l=++q;var c=this\u0026\u0026this!=h?this.id||0:0;(a.s=a.s||[]).push([l,c,arguments]);b.then=function(c,d,e){var f=a.fh[l]=a.fh[l]||[],k=a.eh[l]=a.eh[l]||[],g=a.ph[l]=a.ph[l]||[];c\u0026\u0026f.push(c);d\u0026\u0026k.push(d);e\u0026\u0026g.push(e);\nreturn b};return b};var a=d[m]._={};a.fh={};a.eh={};a.ph={};a.l=c?c.replace(\/^\\\/\\\/\/,(\"https:\"==f?f:\"http:\")+\"\/\/\"):c;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();h.addEventListener?h.addEventListener(e,b,!1):h.attachEvent(\"on\"+e,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",c,' onload\\x3d\"var d\\x3d',p,\";d.getElementsByTagName('head')[0].\",e,\"(d.\",f,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",c,\"\\x3e\"].join(\"\")}var c=\"body\",d=k[c];if(!d)return setTimeout(t,\n100);a.P(1);var e=\"appendChild\",f=\"createElement\",h=\"src\",r=k[f](\"div\"),q=r[e](k[f](\"div\")),g=k[f](\"iframe\"),p=\"document\";r.style.display=\"none\";d.insertBefore(r,d.firstChild).id=n+\"-\"+m;g.frameBorder=\"0\";g.id=n+\"-frame-\"+m;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(g[h]=\"javascript:false\");g.allowTransparency=\"true\";q[e](g);try{g.contentWindow[p].open()}catch(w){a.domain=k.domain;var u=\"javascript:var d\\x3d\"+p+\".open();d.domain\\x3d'\"+k.domain+\"';\";g[h]=u+\"void(0);\"}try{var v=g.contentWindow[p];v.write(b());\nv.close()}catch(w){g[h]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();d[b].lv=\"1\";return d[b]}var n=\"lightningjs\",e=window[n]=f(n);e.require=f;e.modules=d}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/8f2a91d98a29.js\");window.usabilla_live(\"setEventCallback\",function(d,f,n,e){ga(function(){for(var b=ga.getAll(),c=0;c\u003Cb.length;c++){var d=b[c].get(\"name\");ga(d+\".send\",\"event\",\"Usabilla Live\",f,n,e,{nonInteraction:!0})}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/f8593749565e.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":6
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];(function(){window.dataLayer.push({event:\"checkout step 1\"})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];(function(){window.dataLayer.push({event:\"checkout step 2\"})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/8929ae80c4be.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/8389aa03a7b3.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"59a7b766fb3fee12811b3f9f\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"background-color:#e7e7e7\");container=document.querySelectorAll(\"body \\x3e div.t2-no-overflow \\x3e div.t2-content-area.wide \\x3e section.t2-article-page.wide \\x3e div \\x3e div.large-14.columns \\x3e div.t2-content\")[0];container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/aec96d09b52c.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/ff62a2174bb1.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"59a7b766fb3fee12811b3f9f\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"background-color:#e7e7e7\");container=document.querySelector(\".t2-content-area\");container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"59a7b7e5fb3fee124441120f\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"background-color:#F5F5F5\");container=document.querySelector(\".col-md-6.col-right\");container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/a7048cae1925.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});navigator.userAgent.match(\/Android|BlackBerry|BB10|iPhone|iPad|iPod|Opera Mini|IEMobile\/i)?window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/e9f166ea13dd.js\"):window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/f8d46d0f0d96.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"5a26a0dd4538074085125611\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"background-color:#e7e7e7;margin-bottom: 100px\");container=document.querySelectorAll(\"body \\x3e div.t2-no-overflow \\x3e div.t2-content-area.wide \\x3e section.t2-article-page.wide \\x3e div \\x3e div.large-14.columns \\x3e div.t2-content\")[0];container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"5a26a0dd4538074085125611\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"background-color:#e7e7e7\");container=document.querySelectorAll(\".t2-content-area.wide\")[0];container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"5a0dc69203d07f729b407817\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"margin: auto; background-color:#F6F6F6\");container=document.querySelectorAll(\"body \\x3e form \\x3e div \\x3e div.large-10.columns \\x3e div\")[0];container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"305498082991677\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=305498082991677\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdn.nowinteract.com\/imp2\/tele2se\/imp_tele2se.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdn.nowinteract.com\/imp2\/tele2b2bse\/imp_tele2b2bse.min.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{IMP.initsite(\"sete170412leb2b\",\"2\"),IMP.trackInteract()}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "setup_tags":["list",["tag",220,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:",["escape",["macro",57],8,16],".unit_price,currency:\"SEK\",content_ids:",["escape",["macro",57],8,16],".name,content_type:",["escape",["macro",52],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.__lc={};window.__lc.license=1831772;(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.livechatinc.com\/tracking.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();window.LC_API=window.LC_API||{};window.LC_API.on_before_load=function(){!1===window.LC_API.visitor_engaged()\u0026\u0026window.LC_API.hide_chat_window()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(a,e,f,g,b,c,d){a._da_=a._da_||[];_da_.oldErr=a.onerror;_da_.err=[];a.onerror=function(){_da_.err.push(arguments);_da_.oldErr\u0026\u0026_da_.oldErr.apply(a,Array.prototype.slice.call(arguments))};a.DecibelInsight=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/cdn.decibelinsight.net\/i\/13767\/112861\/di.js\",\"decibelInsight\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "setup_tags":["list",["tag",220,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",139],8,16],",currency:\"SEK\",content_ids:",["escape",["macro",140],8,16],",content_type:\"Product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "setup_tags":["list",["tag",220,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",82],8,16],",content_type:\"Product\",value:",["escape",["macro",141],8,16],",currency:\"SEK\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar product=",["escape",["macro",142],8,16],"?",["escape",["macro",142],8,16],":\"unknown\",adsrc=document.createElement(\"script\");adsrc.setAttribute(\"id\",\"adservice_src\");adsrc.setAttribute(\"src\",encodeURI(\"\/\/online.adservicemedia.dk\/cgi-bin\/Services\/RoutedContainer\/js?cid\\x3d7663\\x26order_id\\x3d",["escape",["macro",84],7],"\\x26pricevariable\\x3d\"+product));document.body.appendChild(adsrc);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/e982e40e1a1c.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(d){function f(b,c){c\u0026\u0026(c+=(\/\\?\/.test(c)?\"\\x26\":\"?\")+\"lv\\x3d1\");d[b]||function(){var h=window,k=document,m=b,f=k.location.protocol,e=\"load\",q=0;(function(){function b(){a.P(e);a.w=1;d[m](\"_load\")}d[m]=function(){function b(){b.id=l;return d[m].apply(b,arguments)}var l=++q;var c=this\u0026\u0026this!=h?this.id||0:0;(a.s=a.s||[]).push([l,c,arguments]);b.then=function(c,d,e){var f=a.fh[l]=a.fh[l]||[],k=a.eh[l]=a.eh[l]||[],g=a.ph[l]=a.ph[l]||[];c\u0026\u0026f.push(c);d\u0026\u0026k.push(d);e\u0026\u0026g.push(e);\nreturn b};return b};var a=d[m]._={};a.fh={};a.eh={};a.ph={};a.l=c?c.replace(\/^\\\/\\\/\/,(\"https:\"==f?f:\"http:\")+\"\/\/\"):c;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();h.addEventListener?h.addEventListener(e,b,!1):h.attachEvent(\"on\"+e,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",c,' onload\\x3d\"var d\\x3d',p,\";d.getElementsByTagName('head')[0].\",e,\"(d.\",f,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",c,\"\\x3e\"].join(\"\")}var c=\"body\",d=k[c];if(!d)return setTimeout(t,\n100);a.P(1);var e=\"appendChild\",f=\"createElement\",h=\"src\",r=k[f](\"div\"),q=r[e](k[f](\"div\")),g=k[f](\"iframe\"),p=\"document\";r.style.display=\"none\";d.insertBefore(r,d.firstChild).id=n+\"-\"+m;g.frameBorder=\"0\";g.id=n+\"-frame-\"+m;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(g[h]=\"javascript:false\");g.allowTransparency=\"true\";q[e](g);try{g.contentWindow[p].open()}catch(w){a.domain=k.domain;var u=\"javascript:var d\\x3d\"+p+\".open();d.domain\\x3d'\"+k.domain+\"';\";g[h]=u+\"void(0);\"}try{var v=g.contentWindow[p];v.write(b());\nv.close()}catch(w){g[h]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();d[b].lv=\"1\";return d[b]}var n=\"lightningjs\",e=window[n]=f(n);e.require=f;e.modules=d}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/07429b3bee8a.js\");window.usabilla_live(\"setEventCallback\",function(d,f,n,e){ga(function(){for(var b=ga.getAll(),c=0;c\u003Cb.length;c++){var d=b[c].get(\"name\");ga(d+\".send\",\"event\",\"Usabilla Live\",f,n,e,{nonInteraction:!0})}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cstyle\u003E\n  #cookie-pop{ \n    position: fixed;\n    bottom: 0;\n    min-height: 30px;\n    opacity: 0.8;\n    width: 100%;\n    background: #000;\n    padding: 10px 10px 5px 10px;\n    color: #fff;\n    z-index: 9999;\n    text-align: left;\n    font-size:  10px;\n    line-height: 16px;\n    font-family: sans-serif;  \n  }\n  #cookie-text {\n  \twidth: 80%;\n    display: inline-block;    \n  }\n  #cookie-icon {\n  \twidth: 5%;\n    display: inline-block;\n    font-size: 16px;\n\tfont-weight: bold;\n    float: right;\n    color: #c0c0c0;\n    padding-top: 5px;\n    cursor: pointer;    \n  }\n  #cookie-link {\n  \tcolor: orange;\n  }\n\u003C\/style\u003E\n\n\u003Cdiv id=\"cookie-pop\" class=\"cookie-visibility\"\u003E\n  \u003Cdiv id=\"cookie-text\"\u003EGenom att fortsätta använda denna webbplats samtycker du till användningen av cookies, läs gärna mer i \n    \u003Ca id=\"cookie-link\" href=\"https:\/\/www.tele2.se\/support\/integritet\/cookies\"\u003ETele2s cookiepolicy\u003C\/a\u003E\n  \u003C\/div\u003E \n  \u003Cdiv id=\"cookie-icon\" onclick=\"hideCookie();\"\u003E \n    \u003Cspan\u003E×\u003C\/span\u003E \n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003EhideCookie=function(){var a=document.querySelector(\".cookie-visibility\");a.style.display=\"none\"};var expirationTime=31104E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=\"T2HIDECOOKIEBAR\\x3dtrue; expires\\x3d\"+expirationTime+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cstyle\u003E\n  #cookie-pop{ \n    position: fixed;\n    bottom: 0;\n    min-height: 40px;\n    opacity: 0.8;\n    width: 100%;\n    background: #000;\n    padding: 10px;\n    color: #fff;\n    z-index: 9999;\n    text-align: center;\n    font-size:  12px;\n    line-height: 16px;\n    font-family: sans-serif;  \n  }\n  #cookie-text {\n    padding-top: 3px;\n  \twidth: 70%;\n    display: inline-block; \n\tline-height: 14px;\n  }\n  #cookie-icon {\n  \twidth: 5%;\n    display: inline;\n    font-size: 18px;\n\tfont-weight: bold;\n    float: right;\n    color: #c0c0c0;\n    cursor: pointer;    \n  }\n  #cookie-link {\n  \tcolor: orange;\n  }\n\u003C\/style\u003E\n\n\u003Cdiv id=\"cookie-pop\" class=\"cookie-visibility\"\u003E\n  \u003Cdiv id=\"cookie-text\"\u003EGenom att fortsätta använda denna webbplats samtycker du till användningen av cookies, läs gärna mer i \n    \u003Ca id=\"cookie-link\" href=\"https:\/\/www.tele2.se\/support\/integritet\/cookies\"\u003ETele2s cookiepolicy\u003C\/a\u003E\n  \u003C\/div\u003E \n  \u003Cdiv id=\"cookie-icon\" onclick=\"hideCookie();\"\u003E \n    \u003Cspan class=\"\"\u003E×\u003C\/span\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003EhideCookie=function(){var a=document.querySelector(\".cookie-visibility\");a.style.display=\"none\"};var expirationTime=31104E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=\"T2HIDECOOKIEBAR\\x3dtrue; expires\\x3d\"+expirationTime+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.google_tag_manager[",["escape",["macro",144],8,16],"].logic=window.google_tag_manager[",["escape",["macro",144],8,16],"].logic||{};window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.timers=window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.timers||{};\nwindow.google_tag_manager[",["escape",["macro",144],8,16],"].logic.eventRouterListener=window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.eventRouterListener||function(a){window.dataLayer.push({event:a.type||null,customEventData:a.detail||null});\"QUICK_PREVIEW\"===",["escape",["macro",145],8,16],"\u0026\u0026console.log({\"Custom Event\":a.detail,Event:a.type,Type:a.detail.eventType})};window.addEventListener(\"t2workCustomEvent\",window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.eventRouterListener);\nwindow.addEventListener(\"mt2PricePlanChange\",window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.eventRouterListener);document.addEventListener(\"mt2MultiUserDiscount\",window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.eventRouterListener);window.addEventListener(\"GAEvent\",window.google_tag_manager[",["escape",["macro",144],8,16],"].logic.eventRouterListener);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"TRADEDOUBLER\",urlParameter=window.location.search,cookieValue=urlParameter.substring(urlParameter.indexOf(\"tduid\")+6),expirationTime=31104E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+expirationTime+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "setup_tags":["list",["tag",209,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"setEventCallback\",function(d,a,b,c){\"undefined\"!==typeof decibelInsight\u0026\u0026null!==decibelInsight\u0026\u0026(window.usabilla_live(\"data\",{custom:{\"Decibel Insight Session ID\":decibelInsight.getSessionId()?decibelInsight.getSessionId():\"\"}}),\"Feedback:Open\"===a\u0026\u0026decibelInsight(\"sendIntegrationData\",\"Usabilla\",{f:\"Open\"}),\"Feedback:Success\"===a\u0026\u0026(decibelInsight(\"sendIntegrationData\",\"Usabilla\",{f:\"Success\",s:c}),decibelInsight(\"setRetention\",!0)),\"Campaign:Open\"===a\u0026\u0026decibelInsight(\"sendIntegrationData\",\n\"Usabilla\",{c:\"Open\",i:b}),\"Campaign:Success\"===a\u0026\u0026(decibelInsight(\"sendIntegrationData\",\"Usabilla\",{c:\"Success\",i:b}),decibelInsight(\"setRetention\",!0)))});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "setup_tags":["list",["tag",211,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"setEventCallback\",function(d,a,b,c){\"undefined\"!==typeof decibelInsight\u0026\u0026null!==decibelInsight\u0026\u0026(window.usabilla_live(\"data\",{custom:{\"Decibel Insight Session ID\":decibelInsight.getSessionId()?decibelInsight.getSessionId():\"\"}}),\"Feedback:Open\"===a\u0026\u0026decibelInsight(\"sendIntegrationData\",\"Usabilla\",{f:\"Open\"}),\"Feedback:Success\"===a\u0026\u0026(decibelInsight(\"sendIntegrationData\",\"Usabilla\",{f:\"Success\",s:c}),decibelInsight(\"setRetention\",!0)),\"Campaign:Open\"===a\u0026\u0026decibelInsight(\"sendIntegrationData\",\n\"Usabilla\",{c:\"Open\",i:b}),\"Campaign:Success\"===a\u0026\u0026(decibelInsight(\"sendIntegrationData\",\"Usabilla\",{c:\"Success\",i:b}),decibelInsight(\"setRetention\",!0)))});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.location.search,c=document.location.hash,b=",["escape",["macro",4],8,16],";window.history\u0026\u0026(\"gtm.js\"===b\u0026\u0026-1===a.indexOf(\"gclid\")\u0026\u0026-1===a.indexOf(\"utm_\")\u0026\u0026\"#!\"!==c?(window.oldFragment=!1,window.history.pushState(null,null,\"#!\")):\"gtm.js\"===b\u0026\u0026(window.oldFragment=!0))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var e=",["escape",["macro",4],8,16],";var n=",["escape",["macro",147],8,16],";var o=",["escape",["macro",146],8,16],";console.log(\"NEW: \"+n);console.log(\"OLD: \"+o);var time=(new Date).getTime()-",["escape",["macro",148],8,16],";dataLayer.push({\"event\":\"dwellTime\",\"dwellTimeValue\":time});var waitToGo=setTimeout(function(){window.history.go(-1)},50)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar ub_div=document.createElement(\"div\");ub_div.setAttribute(\"ub-in-page\",\"59a7b766fb3fee12811b3f9f\");ub_div.setAttribute(\"id\",\"ub\");ub_div.setAttribute(\"style\",\"background-color:#e7e7e7;margin-bottom: 100px\");container=document.querySelector(\".t2-content-area\");container.appendChild(ub_div);\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"233d8db23078\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":101
    },{
      "function":"__html",
      "setup_tags":["list",["tag",227,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar fbContentIds=[];for(i=0;i\u003C",["escape",["macro",64],8,16],".length;i++)fbContentIds.push(",["escape",["macro",64],8,16],"[i].product.name);fbq(\"track\",\"Purchase\",{content_ids:fbContentIds,content_type:\"Product\",value:",["escape",["macro",67],8,16],",currency:\"SEK\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",57],8,16],".unit_price,currency:\"SEK\",content_ids:",["escape",["macro",51],8,16],".breadcrumb[2],content_type:\"Product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var formTracking=document.querySelectorAll(\"[id^\\x3d'leadsform']\"),i=0;i\u003CformTracking.length;i++)formTracking[i].setAttribute(\"data-di-form-track\",\"\"),formTracking[i].setAttribute(\"data-di-form-id\",\"Lead_Form\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/online.adservicemedia.dk\/cgi-bin\/Services\/RoutedLastClick\/js?cid=7663\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":122
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"==!typeof decibelInsight\u0026\u0026decibelInsight(\"setRetention\",!0);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a._da_=a._da_||[];_da_.oldErr=a.onerror;_da_.err=[];a.onerror=function(){_da_.err.push(arguments);_da_.oldErr\u0026\u0026_da_.oldErr.apply(a,Array.prototype.slice.call(arguments))};a.DecibelInsight=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/cdn.decibelinsight.net\/i\/13767\/223867\/di.js\",\"decibelInsight\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EIMP_HL\u0026\u0026IMP_HL.triggerOrder();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"\/foretag\/upptack\/behovsanalys\"===window.location.pathname){var decibelFormTagging=document.getElementsByName(\"customForm\");decibelFormTagging[0].setAttribute(\"data-di-form-track\",\"\");decibelFormTagging[0].setAttribute(\"data-di-form-id\",\"behovsanalys\");decibelInsight.setRetention(!0)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"stage.tso.tele2.net"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"tso.tele2.se"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"my-tso.tele2.se"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"work"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"cart-button"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"\/foretag"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"go-to-checkout"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"checkout step ([0-9])+$"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/checkout\/tele2se\/success\/"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"btn btn-primary sa-add-to-cart-btn float-right accounts-order-btn-tracking"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/subscription"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"add-to-cart opportunity btn btn-info btn-block"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"\/self-service\/edit-components.html"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"btn btn-success btn-responsive"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/foretag"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"tso"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"tele2online"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"testshop"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"merdata.tele2.se",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"ciklum|espresso|cuse"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"transaction"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"work"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"tele2\\.se\/?(#!)?$"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":".t2-btn.t2-btn--primary-inverted"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":"#MsisdnFormArea_mob \u003E div \u003E input.t2-button.t2-button-type-solid.t2-button-color-151.t2-button-type-custom.addSpinner"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":"#MsisdnFormArea_mmb \u003E div \u003E input.t2-button.t2-button-type-solid.t2-button-color-151.t2-button-type-custom.addSpinner"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":"#activate-sim-card-form \u003E div.row \u003E div.t2-row-dialog \u003E div.t2-button-wrapper \u003E input"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":"#orderNewSim"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":"body \u003E div.t2-no-overflow \u003E div.t2-content-area.wide \u003E section \u003E div.t2-subscription-misc \u003E div \u003E div \u003E div \u003E div:nth-child(4) \u003E div:nth-child(2) \u003E div \u003E a"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"ip-vpn"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/home\/home.html"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"listing"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"Product"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/mitt-tele2"
    },{
      "function":"_re",
      "arg0":["macro",81],
      "arg1":"NEW|PORT|CONVERT"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/OrderConfirmed"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"Event"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"GET"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"2[0-9][0-9]"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"undefined|Unknown"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"t2workCustomEvent"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"[4-5][0-9][0-9]"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"Page"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":"buyExtraData.html|balanceLimitStepOne.html|\/Content\/templates\/adminAddProductModal\/adminAddProductModal_start.html"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"mt2PricePlanChange"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"Fyll i kontaktinfo"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"t2b-form-button"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"Success"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"mt2MultiUserDiscount"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"\/checkout\/cart\/step2\/"
    },{
      "function":"_eq",
      "arg0":["macro",114],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":".pdf"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"www.tele2.se\/foretag"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_157($|,)))"
    },{
      "function":"_lt",
      "arg0":["macro",119],
      "arg1":"1800000000"
    },{
      "function":"_cn",
      "arg0":["macro",120],
      "arg1":"www.google"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"dwellTime"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"checkoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"checkoutError"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"formError"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"accepted-gdpr"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Skicka in"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"\/apple-nyheter"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"t2-button t2-button-type-solid t2-button-color-cyan t2-background t2-background-color-bus-blue"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"resbus"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Spara uppgifter"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"\/lobbyn"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Ta mig till startsidan"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"privatbutik|studentbutik"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"studentbutik"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"foretagsbutik"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"privatbutik"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Vidare till vanliga tele2.se\/foretag"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"\/valj-din-mobil\/business"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"productDetail"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"productImpression"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Skicka kod"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"\/hbo$"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Gå vidare"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"https:\/\/se.hbonordic.com\/sign-up"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_243($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"https:\/\/www.tele2.se\/ReadlyBlock\/GoToReadly"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"\/readly$"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_245($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"mer-data"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_263($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"cart"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"Gå till kassan"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Försäkra och forsätt till kassan"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"Fortsätt utan försäkring"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"Något gick fel"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"\/checkout\/onepage\/processing\/"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Bekräfta uppgifter"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"checkout"
    },{
      "function":"_re",
      "arg0":["macro",108],
      "arg1":"Bekräfta (ombud|leveransadress)"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Slutför köp"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Bekräfta"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"promoView"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"ctaStartpageClick"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"GAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"t2-button t2-button-large t2-button t2-button-type-solid t2-button-color-cyan"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"https:\/\/www.tele2.se\/foretag\/handla\/nyheter-kampanjer\/unlimited"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"https:\/\/www.tele2.se\/abonnemang\/abonnemang-utan-telefon?subscription_variant=17"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_292($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"t2-button t2-button-type-outline t2-button-color-dark"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"https:\/\/www.tele2.se\/foretag\/handla\/nyheter-kampanjer\/unlimited"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"https:\/\/www.tele2.se\/handla\/aktuella-kampanjer\/unlimited"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"readMoreCloudshopClick"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"textVerificationCloudshopClick"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":".t2-block-discover a"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"\/mitt-tele2"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"send-order-btn"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/edit-components.html"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":":\/\/tso.tele2.se\/subscription\/"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-primary btn-responsive btn-go-to-cart accounts-go-to-cart-tracking"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"icon-shopping_cart icon-large2 text-center"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"invoices__access__button btn btn-success btn-large"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/work.tele2.se"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"dropdown-item"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/carts.html"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-lg btn-outline-primary save-all-forms"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/admin\/user.html"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"LiveChat_.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-success sp-place-order summary-send-order-btn-tracking"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/summary.html"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-primary"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-secondary"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/confirmation.html"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-primary cart-next-btn-tracking"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/additional-information.html"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/summary.html"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-secondary import-from-excel"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/export"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"form-control"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"Fortsätt handla"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/cart.html"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":".t2-page-account-overview a"
    },{
      "function":"_css",
      "arg0":["macro",74],
      "arg1":".t2-button"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"formaner"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"#formaner"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"gtm_benefit"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"action-shopping-cart btn btn-secondary btn-sm btn-block"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/subscription\/overview.html"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"onboardingFlow"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"https:\/\/www.tele2.se\/mitt-tele2"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_400($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"https:\/\/tso.tele2.se"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_401($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-responsive btn-success"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"https:\/\/tso.tele2.se\/self-service\/carts.html"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-responsive btn-primary"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"btn btn-responsive btn-warning"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Lead form submitted"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"Lead form submitted"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"vasTracking"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"formSubmission"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"\/handla\/varumarken\/samsung"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":".*(techradar.com\/news\/samsung-galaxy-s10-nyheter-pris-utgivningsdatum-och-rykten)$|.*(twitter.com\/evleaks\/status).*|.*(businessinsider.com\/samsung-galaxy-x-foldable-smartphone-release).*|.*(techradar.com\/news\/samsung).*"
    },{
      "function":"_re",
      "arg0":["macro",118],
      "arg1":"(^$|((^|,)7793249_471($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"3633|3671|3658|1337"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"Pdf"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/betala-fakturor"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"my-tso.tele2.se"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"stage.tso.tele2.net"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/my\/"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/checkout\/cart\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/checkout\/cart\/step2\/?$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/admin\/users.html"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/handla.*|utlandspriser|tackning-nat|^\/$"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"foretag|personal|\\?felanm%C3%A4lan|data|driftstorning"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/support\/"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/foretag\/"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/support\/(kontakt\/telefon|kontakt\/chatt|kontakt\/e-post|kontakt\/studentkort|hemtelefoni\/?#?!?$|mobiltelefoni\/?#?!?$|mobilt-bredband\/?#?!?$|mobiltelefoni\/anvandande\/priser|fast-bredband\/?#?!?$|mobiltelefoni\/problem\/registrera-service|las-upp-iphone|mobiltelefoni\/kom-igang\/mitt-tele2|din-sakerhet)|\/support\/?#?!?$"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"support.*(problem\/hjalpartiklar\/las-upp-modem|\/las-upp-ditt-modem\/|hemtelefoni\/?#?!?$|mobiltelefoni\/?#?!?$|mobilt-bredband\/?#?!?$|mobiltelefoni\/anvandande\/priser|fast-bredband\/?#?!?$|mobiltelefoni\/problem\/registrera-service|las-upp-iphone|mobiltelefoni\/kom-igang\/mitt-tele2|din-sakerhet)"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/support\/(kontakt|kontakt\/telefon|kontakt\/chatt|kontakt\/e-post|kontakt\/studentkort)(\/?#?!?$)?"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"identity"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/checkout\/onepage\/processing\/"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/checkout\/tele2se\/success\/|\/end-up"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/support"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"www.tele2.se\/foretag\/upptack\/behovsanalys?id=1337"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/foretag\/support\/"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/foretag\/support\/(kontakta-kundservice|sjalvservice\/?#?!?$|utland\/priser-rabattpaket\/priser-utomlands|faktura\/?#?!?$|tele2-vaxel\/?#?!?$|utland\/?#?!?$|dokument\/?#?!?$|uppkoppling\/?#?!?$|telefoni\/?#?!?$|telefoni\/mobiltelefoni\/service-reklamation\/registrering)|\/foretag\/support\/?#?!?$"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/foretag\/support\/(kontakta-kundservice|sjalvservice\/?#?!?$|utland\/priser-rabattpaket\/priser-utomlands|faktura\/?#?!?$|tele2-vaxel\/?#?!?$|utland\/?#?!?$|dokument\/?#?!?$|uppkoppling\/?#?!?$|telefoni\/?#?!?$|telefoni\/mobiltelefoni\/service-reklamation\/registrering)|\/foretag\/support\/?#?!?$|\/foretag\/.*\/las-upp-ditt-modem"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/checkout\/tele2se\/success"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"studentkortet|mecenat|smart-senior"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"end-up|konsulttjanster$|motestjanster$|videokonferens$|it-arbetsplats$|kst$|unified-communication$|contact-center$|telefoniplattformar$|integration-services$|datacenter$"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"\/support\/kontakt\/chatt"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"cart-button"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"tele2online.se|testshop.nordiclan.net"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"iPhone|iOS|Android"
    },{
      "function":"_eq",
      "arg0":["macro",143],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"?tduid"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"\/mitt-tele2\/formaner"
    },{
      "function":"_cn",
      "arg0":["macro",120],
      "arg1":"www.google."
    },{
      "function":"_eq",
      "arg0":["macro",146],
      "arg1":"!"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",120],
      "arg1":"tele2.se"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"mer-data.tele2.se"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"tele2.se\/foretag\/upptack\/behovsanalys?id=1337"
    }],
  "rules":[
    [["if",0],["add",0,56,232,233,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203]],
    [["if",0,1],["add",1],["block",0]],
    [["if",0,2],["add",2,98],["block",0,231,232]],
    [["if",5,6,7],["add",3,241]],
    [["if",6,7,8],["add",3]],
    [["if",9],["add",4]],
    [["if",10,11],["add",5]],
    [["if",7,12,13],["add",6]],
    [["if",7,14],["add",7]],
    [["if",2,7,15],["add",8]],
    [["if",7,16],["add",9]],
    [["if",0],["unless",4,17,18,19,20,21],["add",10,12,220,221,225]],
    [["if",24],["unless",17],["add",11,23,227,228]],
    [["if",0,17],["unless",25],["add",13,25,222,225],["block",22]],
    [["if",0,26],["add",14]],
    [["if",7,27],["add",15]],
    [["if",7,28],["add",16]],
    [["if",7,29],["add",16]],
    [["if",7,30],["add",17]],
    [["if",7,31],["add",18]],
    [["if",7,32],["add",19]],
    [["if",7,33,34],["add",20]],
    [["if",0,35],["add",21]],
    [["if",0,36],["add",22,223,27]],
    [["if",0,37],["add",24]],
    [["if",24,38],["unless",17],["add",26]],
    [["if",0,39],["add",28]],
    [["if",40,42,44],["unless",41,43],["add",29]],
    [["if",40,44,45],["unless",46],["add",30]],
    [["if",44,47,48],["unless",49],["add",31]],
    [["if",44],["unless",50,51],["add",32]],
    [["if",44],["unless",48],["add",33]],
    [["if",52],["add",34]],
    [["if",0,4],["add",35,216,245],["block",0,14,215]],
    [["if",7,17,53],["add",36]],
    [["if",7,54],["add",37]],
    [["if",55,56],["add",38]],
    [["if",56],["unless",57],["add",39]],
    [["if",0,58],["unless",59],["add",40]],
    [["if",60,61,62,63],["add",41]],
    [["if",64,65,66],["add",42]],
    [["if",67],["add",43]],
    [["if",68],["add",44,62]],
    [["if",69],["add",45]],
    [["if",70],["add",46]],
    [["if",71],["add",47]],
    [["if",7,72],["add",48]],
    [["if",7,73,74],["add",49]],
    [["if",7,75],["add",50]],
    [["if",7,74,76],["add",51]],
    [["if",7,77,78],["add",52]],
    [["if",7,79,80],["add",53]],
    [["if",7,81],["add",54]],
    [["if",7,82],["add",55]],
    [["if",7,83],["add",57]],
    [["if",7,84,85],["add",58]],
    [["if",86],["add",59]],
    [["if",87],["add",60]],
    [["if",88],["add",61]],
    [["if",24],["add",63,246]],
    [["if",89],["add",64,244]],
    [["if",7,90,91],["add",65]],
    [["if",7,91,92],["add",66]],
    [["if",62,91,93,94],["add",67]],
    [["if",62,95,96,97],["add",68]],
    [["if",98,99,100],["add",69]],
    [["if",11,101,102],["add",70]],
    [["if",7,103],["add",71]],
    [["if",7,104],["add",72]],
    [["if",7,105],["add",73]],
    [["if",11,106,107],["add",74]],
    [["if",7,108,109],["add",75]],
    [["if",7,109,110],["add",76]],
    [["if",7,109,111],["add",77]],
    [["if",7,109,112],["add",78]],
    [["if",113],["add",79]],
    [["if",114],["add",80]],
    [["if",115],["add",81]],
    [["if",116],["add",82]],
    [["if",7,117,118],["add",83]],
    [["if",7,119],["add",84]],
    [["if",120,121],["add",85]],
    [["if",7,118,122],["add",86]],
    [["if",7,123],["add",87]],
    [["if",7,124],["add",88]],
    [["if",125],["add",89]],
    [["if",126],["add",90]],
    [["if",7,127,128],["add",91]],
    [["if",7,129,130],["add",92]],
    [["if",7,131,132],["add",93]],
    [["if",7,133],["add",94]],
    [["if",7,134,135],["add",95]],
    [["if",7,136,137],["add",96]],
    [["if",7,138,139],["add",97]],
    [["if",7,140],["add",99]],
    [["if",7,141,142],["add",100]],
    [["if",7,142,143],["add",101]],
    [["if",7,144,145],["add",102]],
    [["if",7,146,147],["add",103]],
    [["if",7,143,148],["add",104]],
    [["if",7,149],["add",105]],
    [["if",7,150],["add",106]],
    [["if",7,151],["add",107]],
    [["if",7,152,153],["add",108]],
    [["if",7,128,154],["add",109]],
    [["if",7,155,156,157],["add",110]],
    [["if",7,156,158],["add",111]],
    [["if",7,159,160],["add",112]],
    [["if",44,161],["add",113]],
    [["if",62,162,163],["add",114]],
    [["if",62,164,165],["add",115]],
    [["if",7,166,167],["add",116]],
    [["if",7,167,168],["add",117]],
    [["if",7,167,169],["add",118]],
    [["if",7,143,167],["add",119]],
    [["if",170,171],["add",120]],
    [["if",172],["add",121]],
    [["if",173],["add",122]],
    [["if",62,174,175,176],["add",123]],
    [["if",7,177],["add",124]],
    [["if",7,178,179],["add",125]],
    [["if",2,11],["unless",180],["add",204]],
    [["if",11,180],["add",205]],
    [["if",11,181,182],["add",205]],
    [["if",0,183],["unless",17,184],["add",206]],
    [["if",0,17,183],["unless",184],["add",206]],
    [["if",0,185],["unless",17,184],["add",207]],
    [["if",0,17,185],["unless",184],["add",207]],
    [["if",2,11,186],["unless",180],["add",208]],
    [["if",11,187],["unless",21,188],["add",209,235]],
    [["if",11,189],["unless",190,191],["add",210]],
    [["if",11,37],["add",211,236]],
    [["if",11,194],["add",212]],
    [["if",11,192],["unless",190],["add",213],["block",210]],
    [["if",11,195],["unless",17],["add",214]],
    [["if",11,17],["unless",196,197,198],["add",215,242]],
    [["if",11,199],["unless",200],["add",217]],
    [["if",11,201],["add",218],["block",217]],
    [["if",11,17,202],["add",219]],
    [["if",11,205],["add",224]],
    [["if",7,206],["unless",17],["add",226]],
    [["if",11,207],["add",229]],
    [["if",11,181],["unless",182],["add",230]],
    [["if",0,208],["add",231],["block",232]],
    [["if",0,210],["add",234]],
    [["if",0,189],["add",237]],
    [["if",213,214],["add",238]],
    [["if",11,193],["unless",190],["add",239],["block",210]],
    [["if",0,17,202],["add",240]],
    [["if",0],["unless",215],["add",243]],
    [["if",11,216],["add",244]],
    [["if",11,80],["add",244]],
    [["if",11,217],["add",247]],
    [["if",0,3],["block",0]],
    [["if",22,23],["block",10,12,14,22,24,221,225,226,227,235,236,243,244,246]],
    [["if",0,203],["block",221]],
    [["if",0,204],["block",222]],
    [["if",0,209],["block",231,232]],
    [["if",11,211],["block",236]],
    [["if",0],["unless",212],["block",237]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,fa=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.Rg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ag=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var la=function(){},ma=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},na=function(a){return"number"==typeof a&&!isNaN(a)},oa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},pa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},qa=function(a,b){if(a&&oa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ra=function(a,b){if(!na(a)||
!na(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(oa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},za=function(){this.prefix="gtm.";this.values=
{}};za.prototype.set=function(a,b){this.values[this.prefix+a]=b};za.prototype.get=function(a){return this.values[this.prefix+a]};za.prototype.contains=function(a){return void 0!==this.get(a)};
var Aa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ba=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Da=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ea=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Fa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ga=function(a){if(null==a)return String(a);var b=Fa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ha=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ia=function(a){if(!a||"object"!=Ga(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ha(a,"constructor")&&!Ha(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ha(a,b)},p=function(a,b){var c=b||("array"==Ga(a)?[]:{}),d;for(d in a)if(Ha(a,d)){var e=a[d];"array"==Ga(e)?("array"!=Ga(c[d])&&(c[d]=[]),c[d]=p(e,c[d])):Ia(e)?(Ia(c[d])||(c[d]={}),c[d]=p(e,c[d])):c[d]=e}return c};var t=window,x=document,Ja=navigator,Ka=x.currentScript&&x.currentScript.src,La=function(a,b){var c=t[a];t[a]=void 0===c?b:c;return t[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pa=function(a,b,c){var d=x.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);var e;if(null===fa)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){fa=k;break b}}fa=""}e=fa;e&&d.setAttribute("nonce",e);var l=x.getElementsByTagName("script")[0]||x.body||x.head;l.parentNode.insertBefore(d,l);return d},Qa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ra=function(a,b){var c=x.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=x.body&&x.body.lastChild||
x.body||x.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Sa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){t.setTimeout(a,0)},Va=function(a){var b=
x.getElementById(a);if(b&&Ua(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c];return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=x.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,ab=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},C=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=bb(a.protocol)||bb(t.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:t.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||t.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=bb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=cb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
pa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=ab(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},bb=function(a){return a?a.replace(":","").toLowerCase():""},cb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},D=function(a){var b=x.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var db=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},gb=function(a,b,c,d){var e=eb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=fb(e,function(a){return a.xb},b);if(1===e.length)return e[0].id;e=fb(e,function(a){return a.Ta},c);return e[0]?e[0].id:void 0}};
function hb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=db(b,e).indexOf(c)}
var kb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,r=void 0,u;for(u in h)if(h.hasOwnProperty(u)){var v=h[u];if(null!=v)switch(u){case "secure":v&&(m+="; secure");break;case "domain":q=v;break;default:"path"==u&&(r=v),"expires"==u&&v instanceof Date&&(v=
v.toUTCString()),m+="; "+u+"="+v}}if("auto"===q){for(var w=ib(),y=0;y<w.length;++y){var E="none"!=w[y]?w[y]:void 0;if(!jb(E,r)&&hb(m+(E?"; domain="+E:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!jb(q,r)&&hb(m,a,l)}return k};function fb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function eb(a,b){for(var c=[],d=db(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),xb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mb=/(^|\.)doubleclick\.net$/i,jb=function(a,b){return mb.test(document.location.hostname)||"/"===b&&lb.test(a)},ib=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var nb=[],ob={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pb=function(a){return ob[a]},qb=/[\x00\x22\x26\x27\x3c\x3e]/g;var vb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};nb[7]=function(a){return String(a).replace(vb,xb)};
nb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(vb,xb)+"'"}};var Fb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Hb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ib=function(a){return Hb[a]};nb[16]=function(a){return a};var Kb=[],Lb=[],Mb=[],Nb=[],Ob=[],Pb={},Qb,Rb,Sb,Tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ub=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Pb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Pb[c](e):(void 0)(c,e,b)},Wb=function(a,b,c,d){c=c||[];d=d||la;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Vb(a[g],b,
c,d));return e},Xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pb[b];return c?c.b||0:0},Vb=function(a,b,c,d){if(oa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Vb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Kb[h];if(!k||b(k))return;c[h]=!0;try{var l=Wb(k,b,c,d);e=Ub(l,d);Sb&&(e=Sb.df(e,l))}catch(E){d(E,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Vb(a[m],b,c,d)]=Vb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,q=1;q<a.length;q++){var r=Vb(a[q],b,c,d);Rb&&(n=n||r===Rb.nb);e.push(r)}return Rb&&n?Rb.ff(e):e.join("");case "escape":e=Vb(a[1],b,c,d);if(Rb&&oa(a[1])&&"macro"===a[1][0]&&Rb.Jf(a))return Rb.Uf(e);e=String(e);for(var u=2;u<a.length;u++)nb[a[u]]&&(e=nb[a[u]](e));return e;case "tag":var v=a[1];if(!Nb[v])throw Error("Unable to resolve tag reference "+v+".");return e={ud:a[2],index:v};case "zb":var w={arg0:a[2],arg1:a[3],
ignore_case:a[5]};w["function"]=a[1];var y=Yb(w,b,c,d);a[4]&&(y=!y);return y;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yb=function(a,b,c,d){try{return Qb(Wb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Zb=null,bc=function(a,b){function c(a){for(var b=0;b<a.length;b++)e[a[b]]=!0}var d=[],e=[];Zb=$b(a,b||function(){});for(var g=0;g<Lb.length;g++){var h=Lb[g],k=ac(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],q=0;q<Nb.length;q++)d[q]&&!e[q]&&(n[q]=!0);return n},ac=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Zb(e[g]);if(null===
h)return null;if(h)return!1}return!0},$b=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Yb(Mb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var cc,dc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Pe&&(h["fix_"+k]=!0),h.vd=h.vd||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,B:b.B,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],B:d,Ya:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.vd&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.Hd=function(){return this[this.length-1]};d.uc=function(a){var b=this.Hd();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.cf=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ya=b.test(a.tagName)||a.Ya);return a},g=r,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.uc("TABLE")?(a="<TBODY>"+a,m()):h.Fg&&c.test(e)&&d.cf(e)?d.uc(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ya||d.push(b)},endTag:function(a){d.Hd()?h.rf&&!d.uc(a.tagName)?k():d.pop():h.rf&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};r=function(){m();return e(g())}}();return{append:function(b){a+=b},$f:r,Lg:function(a){for(var b;(b=r())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Mg:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Sg="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Og=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Tg=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.B){var d=a.B[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ya?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Eg=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Ue=a.Ue||!b[h]&&h;cc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(u){var b=[];c(a,function(a){b.push(a)});return b}}var k={Ee:a,Fe:a,Ge:a,He:a,Qe:a,Re:function(a){return a},done:a,error:function(a){throw a;},dg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Za:d.defaultView||d.parentWindow,va:d,Cb:cc("",{Pe:!0}),$b:[b],Bc:"",Cc:d.createElement(b.nodeName),Xa:[],fa:[]});a(this.Cc,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.fa,arguments);for(var a;!this.wb&&this.fa.length;)a=this.fa.shift(),"function"===typeof a?this.Ye(a):this.Pc(a)};g.prototype.Ye=function(a){var b={type:"function",value:a.name||a.toString()};this.yc(b);a.call(this.Za,this.va);this.Kd(b)};
g.prototype.Pc=function(a){this.Cb.append(a);for(var b,c=[],d,e;(b=this.Cb.$f())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ug(c);d&&this.xf(b);e&&this.yf(b)};g.prototype.ug=function(a){var b=this.Ve(a);b.od&&(b.kc=this.Bc+b.od,this.Bc+=b.Yf,this.Cc.innerHTML=b.kc,this.qg())};g.prototype.Ve=function(a){var b=this.$b.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.B){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.B.id&&"ps-style"!==a.B.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ya?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{Ug:a,raw:d.join(""),od:e.join(""),Yf:g.join("")}};g.prototype.qg=function(){for(var c,d=[this.Cc];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.$b[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.$b[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.xf=function(a){var b=this.Cb.clear();b&&this.fa.unshift(b);a.src=a.B.src||a.B.xg;a.src&&this.Xa.length?this.wb=a:this.yc(a);var c=this;this.sg(a,function(){c.Kd(a)})};g.prototype.yf=function(a){var b=this.Cb.clear();b&&this.fa.unshift(b);a.type=a.B.type||a.B.yg||"text/css";this.vg(a);b&&this.write()};g.prototype.vg=function(a){var b=this.Xe(a);this.Hf(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.va.createTextNode(a.content)))};g.prototype.Xe=function(a){var b=this.va.createElement(a.tagName);b.setAttribute("type",a.type);d(a.B,function(a,c){b.setAttribute(a,c)});return b};g.prototype.Hf=function(a){this.Pc('<span id="ps-style"/>');var b=this.va.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.yc=function(a){a.Qf=this.fa;this.fa=[];this.Xa.unshift(a)};g.prototype.Kd=function(a){a!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,a.Qf),!this.Xa.length&&this.wb&&(this.yc(this.wb),this.wb=null))};g.prototype.sg=function(a,b){var c=this.We(a),d=this.kg(c),e=this.options.Ee;a.src&&(c.src=a.src,this.hg(c,d?e:function(){b();e()}));try{this.Gf(c),a.src&&!d||b()}catch(B){this.options.error(B),b()}};g.prototype.We=function(a){var b=this.va.createElement(a.tagName);d(a.B,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Gf=function(a){this.Pc('<span id="ps-script"/>');
var b=this.va.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.hg=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.kg=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.dg&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Fe(),a.stream=c.apply(null,a),b.Ge())}function c(c,g,k){function l(a){a=k.Re(a);w.write(a);k.He(a)}w=new n(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var r=w.Za.onerror||a;w.Za.onerror=function(a,b,c){k.error({Ig:a+
" - "+b+":"+c});r.apply(w.Za,arguments)};w.write(g,function(){e(m,q);w.Za.onerror=r;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Gg?c[0]:c;var h=[c,d,e];c.Tf={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Qe(h);m.push(h);w||b();return c.Tf},{streams:{},Kg:m,zg:n})}();dc=l.postscribe}})();var G={},J=null,ec=Math.random();G.o="GTM-5QDCDMW";G.rb="241";var fc="www.googletagmanager.com/gtm.js";var gc=fc,hc=null,ic=null,jc=null,kc="//www.googletagmanager.com/a?id="+G.o+"&cv=109",lc={},mc={},nc=function(){var a=J.sequence||0;J.sequence=a+1;return a};var L=function(a,b,c,d){return(2===oc()||d||"http:"!=t.location.protocol?a:b)+c},oc=function(){var a=Qa(),b;if(1===a)a:{var c=gc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=x.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var pc=!1;var M=function(){var a=function(a){return{toString:function(){return a}}};return{Tc:a("convert_case_to"),Uc:a("convert_false_to"),Vc:a("convert_null_to"),Wc:a("convert_true_to"),Xc:a("convert_undefined_to"),oa:a("function"),ue:a("instance_name"),ve:a("live_only"),we:a("malware_disabled"),xe:a("once_per_event"),kd:a("once_per_load"),ld:a("setup_tags"),ye:a("tag_id"),md:a("teardown_tags")}}();var rc=new za,sc={},tc={},xc={set:function(a,b){p(uc(a,b),sc);vc()},get:function(a){return wc(a,2)},reset:function(){rc=new za;sc={};vc()}},wc=function(a,b){return 2!=b?rc.get(a):yc(a)},yc=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Ac(d)},Ac=function(a){for(var b=
sc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Dc=function(a,b){tc.hasOwnProperty(a)||(rc.set(a,b),p(uc(a,b),sc),vc())},uc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},vc=function(a){ta(tc,function(b,c){rc.set(b,c);p(uc(b,void 0),sc);p(uc(b,c),sc);a&&delete tc[b]})};var Ec=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Fc={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Gc={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Ic=function(a){var b=wc("gtm.whitelist");var c=b&&Ea(wa(b),Fc),d=wc("gtm.blacklist")||wc("tagTypeBlacklist")||[];
Hc()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Ea(wa(d),Gc),g={};return function(h){var k=h&&h[M.oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=mc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>pa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>pa(c,l[q])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var r=!1;if(d){var u;if(!(u=0<=pa(e,k)))a:{for(var v=l||[],w=new za,
y=0;y<e.length;y++)w.set(e[y],!0);for(var E=0;E<v.length;E++)if(w.get(v[E])){u=!0;break a}u=!1}r=u}return g[k]=!m||r}},Hc=function(){return Ec.test(t.location&&t.location.hostname)};var Kc=function(a){return function(b,c){if(na(c))a(b,c);else{b instanceof Jc||(b=new Jc(b));var d=b;c&&d.fc.push(c);throw d;}}},Jc=function(a){this.Pf=a;this.fc=[]};ha(Jc,Error);var Lc={df:function(a,b){b[M.Tc]&&"string"===typeof a&&(a=1==b[M.Tc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(M.Vc)&&null===a&&(a=b[M.Vc]);b.hasOwnProperty(M.Xc)&&void 0===a&&(a=b[M.Xc]);b.hasOwnProperty(M.Wc)&&!0===a&&(a=b[M.Wc]);b.hasOwnProperty(M.Uc)&&!1===a&&(a=b[M.Uc]);return a}};var Mc={active:!0,isWhitelisted:function(){return!0}},Nc=function(a){var b=J.zones;!b&&a&&(b=J.zones=a());return b};var Oc=!1,Pc=0,Qc=[];function Rc(a){if(!Oc){var b=x.createEventObject,c="complete"==x.readyState,d="interactive"==x.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Oc=!0;for(var e=0;e<Qc.length;e++)A(Qc[e])}Qc.push=function(){for(var a=0;a<arguments.length;a++)A(arguments[a]);return 0}}}function Sc(){if(!Oc&&140>Pc){Pc++;try{x.documentElement.doScroll("left"),Rc()}catch(a){t.setTimeout(Sc,50)}}}var Tc=function(a){Oc?a():Qc.push(a)};var Uc=function(){function a(a){return!na(a)||0>a?0:a}if(!J._li&&t.performance&&t.performance.timing){var b=t.performance.timing.navigationStart,c=na(xc.get("gtm.start"))?xc.get("gtm.start"):0;J._li={cst:a(c-b),cbt:a(ic-b)}}};var Yc=!1,Zc=function(){return t.GoogleAnalyticsObject&&t[t.GoogleAnalyticsObject]},$c=!1;var ad=function(a){t.GoogleAnalyticsObject||(t.GoogleAnalyticsObject=a||"ga");var b=t.GoogleAnalyticsObject;if(!t[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);t[b]=c}Uc();return t[b]},bd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Zc();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var dd=function(){},cd=function(){return t.GoogleAnalyticsObject||"ga"},ed=!1;var ld=function(a){};
function kd(a,b){a.containerId=G.o;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};
var md=function(){return"&tc="+Nb.filter(function(a){return a}).length},vd=function(){nd&&(t.clearTimeout(nd),nd=void 0);void 0===od||pd[od]&&!qd||(rd[od]||sd.Kf()||0>=td--?rd[od]=!0:(sd.bg(),Sa(ud()),pd[od]=!0,qd=""))},ud=function(){var a=od;return void 0===a?"":[wd,pd[a]?"":"&es=1",xd[a],md(),qd,"&z=0"].join("")},yd=function(){return[kc,"&v=3&t=t","&pid="+ra(),"&rv="+G.rb].join("")},zd="0.005000">Math.random(),wd=yd(),Ad=function(){wd=yd()},pd={},qd="",od=void 0,xd={},rd={},nd=
void 0,sd=function(a,b){var c=0,d=0;return{Kf:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},bg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),td=1E3,Bd=function(a,b){if(zd&&!rd[a]&&od!==a){vd();od=a;qd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";xd[a]="&e="+c+"&eid="+a;nd||(nd=t.setTimeout(vd,500))}},Cd=function(a,b,c){if(zd&&!rd[a]&&b){a!==od&&(vd(),od=a);var d=c+String(b[M.oa]||"").replace(/_/g,"");qd=qd?qd+"."+d:"&tr="+d;nd||(nd=t.setTimeout(vd,500));2022<=ud().length&&
vd()}};function Dd(a,b,c,d,e,g){var h=Nb[a],k=Ed(a,b,c,d,e,g);if(!k)return null;var l=Vb(h[M.ld],g.Z,[],la);if(l&&l.length){var m=l[0];k=Dd(m.index,b,k,1===m.ud?e:k,e,g)}return k}
function Ed(a,b,c,d,e,g){function h(){if(k[M.we])d();else{var b=Wb(k,g.Z,[],Kc(function(a){ld(a)})),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;Cd(g.id,Nb[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;Cd(g.id,Nb[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;Cd(g.id,k,"1");var h=!1,
l=function(a,b){if(!h){a instanceof Jc||(a=new Jc(a));var c=a;b&&c.fc.push(b);throw c;}ld(a);Cd(g.id,k,"7");e||(e=!0,d())};try{Ub(b,l)}catch(I){try{h=!0,l(I)}catch(W){}}}}var k=
Nb[a];if(g.Z(k))return null;var l=Vb(k[M.md],g.Z,[],la);if(l&&l.length){var m=l[0],n=Dd(m.index,b,c,d,e,g);if(!n)return null;c=n;d=2===m.ud?e:n}if(k[M.kd]||k[M.xe]){var q=k[M.kd]?Ob:b,r=c,u=d;if(!q[a]){h=Ba(h);var v=Fd(a,q,h);c=v.T;d=v.xa}return function(){q[a](r,u)}}return h}function Fd(a,b,c){var d=[],e=[];b[a]=Gd(d,e,c);return{T:function(){b[a]=Hd;for(var c=0;c<d.length;c++)d[c]()},xa:function(){b[a]=Id;for(var c=0;c<e.length;c++)e[c]()}}}
function Gd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hd(a){a()}function Id(a,b){b()};function Jd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ba(function(){b++;d&&b>=c&&a()})},Ne:function(){d=!0;b>=c&&a()}}}var Md=function(a){for(var b=Jd(a.callback),c=[],d=[],e=0;e<Nb.length;e++)if(a.Va[e]){var g=Nb[e];var h=b.add();try{var k=Dd(e,c,h,h,h,a);k?d.push({Ud:e,b:Xb(g),qf:k}):(Kd(e,a),h())}catch(m){h()}}b.Ne();d.sort(Ld);for(var l=0;l<d.length;l++)d[l].qf();return 0<d.length};
function Ld(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Ud,k=b.Ud;g=h>k?1:h<k?-1:0}return g}function Kd(a,b){if(!zd)return;var c=function(a){var d=b.Z(Nb[a])?"3":"4",g=Vb(Nb[a][M.ld],b.Z,[],la);g&&g.length&&c(g[0].index);Cd(b.id,Nb[a],d);var h=Vb(Nb[a][M.md],b.Z,[],la);h&&h.length&&c(h[0].index)};c(a);}
var Nd=!1,Od=function(a,b,c,d){if("gtm.js"==b){if(Nd)return!1;Nd=!0}Bd(a,b);var e=Ic(c),g={id:a,name:b,callback:d||la,Z:e,Va:[]};g.Va=bc(e,Kc(function(a){ld(a)}));var h=Md(g);"gtm.js"!==b&&"gtm.sync"!==b||dd();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Nb[l];if(m&&!k[m[M.oa]])return!0}return!1};var N={Mb:"event_callback",Ob:"event_timeout"};var Qd={};var Rd=/[A-Z]+/,Sd=/\s/,Td=function(a){if(f(a)&&(a=xa(a),!Sd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Rd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],Y:d}}}}},Vd=function(a){for(var b={},c=0;c<a.length;++c){var d=Td(a[c]);d&&(b[d.id]=d)}Ud(b);var e=[];ta(b,function(a,b){e.push(b)});return e};
function Ud(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.Y[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Wd=null,Xd={},Yd={},Zd,$d=function(a,b){var c={event:a};b&&(c.eventModel=p(b),b[N.Mb]&&(c.eventCallback=b[N.Mb]),b[N.Ob]&&(c.eventTimeout=b[N.Ob]));return c};
var ee={config:function(a){},event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ia(a[2]))return;
c=a[2]}var d=$d(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Qd[b]||(Qd[b]=[]);Qd[b].push(c)}},set:function(a){var b;2==a.length&&Ia(a[1])?b=p(a[1]):3==a.length&&f(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=p(b),b.event="gtag.set",b._clear=!0,b}},fe={policy:!0};var ge=function(){return!1};var le=function(a){this.pg=a};le.prototype.wf=function(){return this.pg};var me=function(a){return!a||"object"!==Ga(a)||Ia(a)?!1:"getUntrustedUpdateValue"in a};le.prototype.getUntrustedUpdateValue=le.prototype.wf;var ne=!1,oe=[];function pe(){if(!ne){ne=!0;for(var a=0;a<oe.length;a++)A(oe[a])}}var qe=function(a){ne?A(a):oe.push(a)};var re=[],se=!1;function te(a){var b=a.eventCallback,c=Ba(function(){ma(b)&&A(function(){b(G.o)})}),d=a.eventTimeout;d&&t.setTimeout(c,Number(d));return c}
var ue=function(a){return t["dataLayer"].push(a)},we=function(a){var b=a._clear;ta(a,function(a,c){"_clear"!==a&&(b&&Dc(a,void 0),Dc(a,c))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=nc(),a["gtm.uniqueEventId"]=d,Dc("gtm.uniqueEventId",d));jc=c;var e=ve(a);jc=null;if(!hc){hc=a["gtm.start"];}return e};
function ve(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=J.zones;d=e?e.checkState(G.o,c):Mc;if(!d.active)return!1;var g=te(a);return Od(c,b,d.isWhitelisted,g)?!0:!1}
var xe=function(){for(var a=!1;!se&&0<re.length;){se=!0;delete sc.eventModel;vc();var b=re.shift();if(null!=b){var c=me(b);if(c){var d=b;b=me(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=wc(h,1);if(oa(k)||Ia(k))k=p(k);tc[h]=k}}try{if(ma(b))try{b.call(xc)}catch(w){}else if(oa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),r=wc(m.join("."),2);if(void 0!==r&&null!==r)try{r[n].apply(r,q)}catch(w){}}}else{var u=b;if(u&&("[object Arguments]"==Object.prototype.toString.call(u)||Object.prototype.hasOwnProperty.call(u,"callee"))){a:{if(b.length&&f(b[0])){var v=ee[b[0]];if(v&&(!c||!fe[b[0]])){b=v(b);break a}}b=void 0}if(!b){se=!1;continue}}a=we(b)||a}}finally{c&&vc(!0)}}se=!1}
return!a},ye=function(){var a=xe();try{var b=G.o,c=t["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},ze=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Tc(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});qe(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b;
if(0<J.SANDBOXED_JS_SEMAPHORE){b=[];for(var e=0;e<arguments.length;e++)b[e]=new le(arguments[e])}else b=[].slice.call(arguments,0);c.apply(a,b);for(re.push.apply(re,b);300<this.length;)this.shift();return xe()};re.push.apply(re,a.slice(0));A(ye)};var Be=function(a){return Ae?x.querySelectorAll(a):null},Ce=function(a,b){if(!Ae)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!x.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},De=!1;if(x.querySelectorAll)try{var Ee=x.querySelectorAll(":root");Ee&&1==Ee.length&&Ee[0]==x.documentElement&&(De=!0)}catch(a){}var Ae=De;var Fe;var af={};af.nb=new String("undefined");
var bf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===af.nb?b:a[d]);return c.join("")}};bf.prototype.toString=function(){return this.resolve("undefined")};bf.prototype.valueOf=bf.prototype.toString;af.ze=bf;af.Yb={};af.ff=function(a){return new bf(a)};var cf={};af.cg=function(a,b){var c=nc();cf[c]=[a,b];return c};af.rd=function(a){var b=a?0:1;return function(a){var c=cf[a];if(c&&"function"===typeof c[b])c[b]();cf[a]=void 0}};af.Jf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};af.Uf=function(a){if(a===af.nb)return a;var b=nc();af.Yb[b]=a;return'google_tag_manager["'+G.o+'"].macro('+b+")"};af.Nf=function(a,b,c){a instanceof af.ze&&(a=a.resolve(af.cg(b,c)),b=la);return{kc:a,T:b}};var df=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},ef=function(a){J.hasOwnProperty("autoEventsSettings")||(J.autoEventsSettings={});var b=J.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ff=
function(a,b,c,d){var e=ef(a),g=Aa(e,b,d);e[b]=c(g)},gf=function(a,b,c){var d=ef(a);return Aa(d,b,c)};var hf=function(){for(var a=Ja.userAgent+(x.cookie||"")+(x.referrer||""),b=a.length,c=t.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},lf=function(a,b,c,d){var e=jf(b);return gb(a,e,kf(c),d)},mf=function(a,b,c,d){var e=""+jf(c),g=kf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},jf=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},kf=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var nf=["1"],of={},rf=function(a,b,c){var d=pf(a);if(!of[d]&&!qf(d,b,c)){var e=hf(),g=mf(e,"1",b,c);kb(d,g,c,b,new Date(ya()+7776E6));qf(d,b,c)}};function qf(a,b,c){var d=lf(a,b,c,nf);d&&(of[a]=d);return d}function pf(a){return(a||"_gcl")+"_au"};var sf=function(){for(var a=[],b=x.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Jc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Jc]||(g[a[h].Jc]=[]),g[a[h].Jc].push({timestamp:k[1],tf:k[2]}))}return g};function tf(){for(var a=uf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function vf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var uf,wf,xf=function(a){uf=uf||vf();wf=wf||tf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(uf[l],uf[m],uf[n],uf[q])}return b.join("")},yf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=wf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}uf=uf||vf();wf=wf||
tf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var zf;function Af(a,b){if(!a||b===x.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Bf=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Cf=/(.*?)\*(.*?)\*(.*)/,Df=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ef=/^(?:www\.|m\.|amp\.)+/,Ff=/([^?#]+)(\?[^#]*)?(#.*)?/,Gf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,If=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(xf(String(d))))}var e=b.join("*");return["1",Hf(e),e].join("*")},Hf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=zf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}zf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^zf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Kf=function(){return function(a){var b=D(t.location.href),c=b.search.replace("?",""),d=ab(c,"_gl",!0)||"";a.query=Jf(d)||{};var e=C(b,"fragment").match(Gf);a.fragment=Jf(e&&e[3]||
"")||{}}},Jf=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Cf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Hf(k,n)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=yf(r[u+1]);return q}}}}catch(v){}};
function Lf(a,b,c){function d(a){var b=a,c=Gf.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Ff.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Mf(a,b,c){for(var d={},e={},g=Bf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Af(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Da(d)){var l=If(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,r=0;r<n.length;r++){var u=n[r];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var v=x.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var w=Lf(l,a.action);Za.test(w)&&(a.action=w)}}}else Nf(l,a,!1)}if(!c&&Da(e)){var y=If(e);Nf(y,a,!0)}}function Nf(a,b,c){if(b.href){var d=Lf(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var Of=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Mf(e,e.hostname,!1)}}catch(h){}},Pf=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=C(D(b.action),"host");Mf(b,c,!0)}}catch(d){}},Qf=function(a,b,c,d){var e=Bf();e.init||(z(x,"mousedown",Of),z(x,"keyup",Of),z(x,"submit",Pf),e.init=!0);var g={callback:a,domains:b,
fragment:"fragment"===c,forms:!!d};Bf().decorators.push(g)},Rf=function(){var a=x.location.hostname,b=Df.exec(x.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Ef,"")===e.replace(Ef,"")},Sf=function(a,b){return!1===a?!1:a||b||Rf()};var Tf=/^\w+$/,Uf=/^[\w-]+$/,Vf=/^~?[\w-]+$/,Wf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Xf(a){return a&&"string"==typeof a&&a.match(Tf)?a:"_gcl"}var Zf=function(){var a=D(t.location.href),b=C(a,"query",!1,void 0,"gclid"),c=C(a,"query",!1,void 0,"gclsrc"),d=C(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ab(e,"gclid",void 0);c=c||ab(e,"gclsrc",void 0)}return Yf(b,c,d)};
function Yf(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Uf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function $f(a,b,c){function d(a,b){var c=ag(a,e);c&&kb(c,b,h,g,l,!0)}b=b||{};var e=Xf(b.prefix),g=b.domain||"auto",h=b.path||"/",k=c||ya(),l=new Date(k+7776E6),m=Math.round(k/1E3),n=function(a){return["GCL",m,a].join(".")};a.aw&&(!0===b.Wg?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ag=function(a,b){var c=Wf[a];if(void 0!==c)return b+c},bg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function cg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var dg=function(a,b,c,d,e){if(oa(b)){var g=Xf(e);Qf(function(){for(var b={},c=0;c<a.length;++c){var d=ag(a[c],g);if(d){var e=db(d,x.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},eg=function(a){return a.filter(function(a){return Vf.test(a)})},fg=function(a,b){for(var c=Xf(b&&b.prefix),d={},e=0;e<a.length;e++)Wf[a[e]]&&(d[a[e]]=Wf[a[e]]);ta(d,function(a,d){var e=db(c+d,x.cookie);if(e.length){var g=e[0],h=bg(g),n={};n[a]=[cg(g)];$f(n,b,h)}})};var gg=/^\d+\.fls\.doubleclick\.net$/;function hg(a){var b=D(t.location.href),c=C(b,"host",!1);if(c&&c.match(gg)){var d=C(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ig(a,b){if("aw"==a||"dc"==a){var c=hg("gcl"+a);if(c)return c.split(".")}var d=Xf(b);if("_gcl"==d){var e;e=Zf()[a]||[];if(0<e.length)return e}var g=ag(a,d),h;if(g){var k=[];if(x.cookie){var l=db(g,x.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=cg(l[m]);n&&-1===k.indexOf(n)&&k.push(n)}h=eg(k)}else h=k}else h=k}else h=[];return h}
var jg=function(){var a=hg("gac");if(a)return decodeURIComponent(a);var b=sf(),c=[];ta(b,function(a,b){for(var d=[],e=0;e<b.length;e++)d.push(b[e].tf);d=eg(d);d.length&&c.push(a+":"+d.join(","))});return c.join(";")},kg=function(a,b,c){rf(a,b,c);var d=of[pf(a)],e=Zf().dc||[];if(d&&0<e.length){var g=J.joined_au=J.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk",n=m+="?gclid="+e[l]+"&auiddc="+d;Ja.sendBeacon&&Ja.sendBeacon(n)||Sa(n);k=!0}if(k){var q=
pf(a);if(of[q]){var r=mf(of[q],"1",b,c);kb(q,r,c,b,new Date(ya()+7776E6))}g[h]=!0}}}};var lg;if(3===G.rb.length)lg="g";else{var mg="G";lg=mg}
var ng={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:lg},og=function(a){var b=G.o.split("-"),c=b[0].toUpperCase(),d=ng[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===G.rb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+G.rb+e};
var pg=function(a){return!(void 0===a||null===a||0===(a+"").length)},qg=function(a,b){var c;if(2===b.F)return a("ord",ra(1E11,1E13)),!0;if(3===b.F)return a("ord","1"),a("num",ra(1E11,1E13)),!0;if(4===b.F)return pg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.F)c="1";else if(6===b.F)c=b.Dc;else return!1;pg(c)&&a("qty",c);pg(b.ub)&&a("cost",b.ub);pg(b.transactionId)&&a("ord",b.transactionId);return!0},rg=encodeURIComponent,sg=function(a,b){function c(a,b,c){g.hasOwnProperty(a)||(b+="",e+=";"+a+"="+
(c?b:rg(b)))}var d=a.hc,e=a.protocol;e+=a.Db?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+rg(d)+(";type="+rg(a.jc))+(";cat="+rg(a.Na));var g=a.jf||{};ta(g,function(a,b){e+=";"+rg(a)+"="+rg(b+"")});if(qg(c,a)){pg(a.Nc)&&c("u",a.Nc);pg(a.Lc)&&c("tran",a.Lc);c("gtm",og());!1===a.Ie&&c("npa","1");if(a.bc){var h=ig("dc",a.sa);h&&h.length&&c("gcldc",h.join("."));var k=ig("aw",a.sa);k&&k.length&&c("gclaw",k.join("."));var l=jg();l&&c("gac",l);rf(a.sa,a.ef);var m=of[pf(a.sa)];
m&&c("auiddc",m)}pg(a.zc)&&c("prd",a.zc,!0);ta(a.Oc,function(a,b){c(a,b)});e+=b||"";pg(a.Bb)&&c("~oref",a.Bb);a.Db?Ra(e+"?",a.T):Sa(e+"?",a.T,a.xa)}else A(a.xa)};var vg=!!t.MutationObserver,wg=void 0,xg=function(a){if(!wg){var b=function(){var a=x.body;if(a)if(vg)(new MutationObserver(function(){for(var a=0;a<wg.length;a++)A(wg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;z(a,"DOMNodeInserted",function(){b||(b=!0,A(function(){b=!1;for(var a=0;a<wg.length;a++)A(wg[a])}))})}};wg=[];x.body?b():A(b)}wg.push(a)};
var Fg=function(){var a=x.body,b=x.documentElement||a&&a.parentElement,c,d;if(x.compatMode&&"BackCompat"!==x.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Gg=function(a){var b=Fg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Hg=function(a){if(x.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!t.getComputedStyle)return!0;var c=t.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=t.getComputedStyle(d,null))}return!1};var Ig=[],Jg=!(!t.IntersectionObserver||!t.IntersectionObserverEntry),Kg=function(a,b,c){for(var d=new t.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<Ig.length;g++)if(!Ig[g])return Ig[g]=d,g;return Ig.push(d)-1},Lg=function(a,b,c){function d(b,c){var d={top:0,bottom:0,right:0,left:0,width:0,height:0},e={boundingClientRect:b.getBoundingClientRect(),
intersectionRatio:c,intersectionRect:d,isIntersecting:0<c,rootBounds:d,target:b,time:ya()};A(function(){return a(e)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(a,b){return a-b});return function(){for(var a=0;a<b.length;a++){var h=Gg(b[a]);if(h>e[a])for(;g[a]<c.length-1&&h>=c[g[a]+1];)d(b[a],h),g[a]++;else if(h<e[a])for(;0<=g[a]&&h<=c[g[a]];)d(b[a],h),g[a]--;e[a]=h}}},Mg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Jg){var e=!1;A(function(){e||
Lg(a,b,c)()});return Kg(function(b){e=!0;for(var c={Da:0};c.Da<b.length;c={Da:c.Da},c.Da++)A(function(c){return function(){return a(b[c.Da])}}(c))},b,c)}return t.setInterval(Lg(a,b,c),1E3)},Ng=function(a){Jg?0<=a&&a<Ig.length&&Ig[a]&&(Ig[a].disconnect(),Ig[a]=void 0):t.clearInterval(a)};
var Og=function(a,b,c){function d(){var b=a();g+=e?(ya()-e)*b.playbackRate/1E3:0;e=ya()}var e=0,g=0;return{yb:function(e,k,l){var h=a(),n=h.td,q=void 0!==l?Math.round(l):void 0!==k?Math.round(h.td*k):Math.round(h.hf),r=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),u=x.hidden?!1:.5<=Gg(c);d();var v=df(c,"gtm.video",[b]);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=e;v["gtm.videoUrl"]=h.url;v["gtm.videoTitle"]=h.title;v["gtm.videoDuration"]=Math.round(n);v["gtm.videoCurrentTime"]=
Math.round(q);v["gtm.videoElapsedTime"]=Math.round(g);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=u;ue(v)},eg:function(){e=ya()},Zb:function(){d()}}};var Pg=t.clearTimeout,Qg=t.setTimeout,Q=function(a,b,c){if(ge()){b&&A(b)}else return Pa(a,b,c)},Rg=function(){return new Date},Sg=function(){return t.location.href},Tg=function(a){return C(D(a),"fragment")},R=function(a,b){return wc(a,b||2)},Ug=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return ue(a)},Vg=function(a,b){t[a]=b},T=function(a,b,c){b&&(void 0===t[a]||c&&!t[a])&&(t[a]=b);return t[a]},Wg=
function(a,b,c){return db(a,b,void 0===c?!0:!!c)},Xg=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Zf();$f(e,d);},Yg=function(a,b,c,d){var e=Kf(),g=Bf();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},
k=g.data;k&&(Ca(h,k.query),Ca(h,k.fragment));for(var l=Xf(b),m=0;m<a.length;++m){var n=a[m];if(void 0!==Wf[n]){var q=ag(n,l),r=h[q];if(r){var u=Math.min(bg(r),ya()),v;b:{for(var w=u,y=db(q,x.cookie),E=0;E<y.length;++E)if(bg(y[E])>w){v=!0;break b}v=!1}v||kb(q,r,c,d,new Date(u+7776E6),!0)}}}var B={prefix:b,path:c,domain:d};$f(Yf(h.gclid,h.gclsrc),B);},Zg=function(a,b,c,d,e){dg(a,b,c,d,e);},
$g=function(a,b){if(ge()){b&&A(b)}else Ra(a,b)},ah=function(a){return!!gf(a,"init",!1)},bh=function(a){ef(a).init=!0},ch=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":gc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(a,b){b&&(d+="&"+a+"="+encodeURIComponent(b))});Q(L("https://","http://",d))};

var eh=af.Nf;var fh=new za;function gh(a,b){function c(a){var b=D(a),c=C(b,"protocol"),d=C(b,"host",!0),e=C(b,"port"),g=C(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function hh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&oa(c)){for(var d=0;d<c.length;d++)if(hh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=pa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var u=String(c)+r,v=fh.get(u);v||(v=new RegExp(c,r),fh.set(u,v));q=v.test(b)}catch(w){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return gh(b,c)}return!1};var jh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var kh=encodeURI,U=encodeURIComponent,lh=Sa;var mh=function(a,b){if(!a)return!1;var c=C(D(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var X=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};var Wh=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Xh=function(){this.c=1;this.e=[];this.p=null};function Yh(a){var b=J,c=b.gss=b.gss||{};return c[a]=c[a]||new Xh}var Zh=function(a,b){Yh(a).p=b},$h=function(a){var b=Yh(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(a){for(var b=0;b<a.length;b++)try{var d=a[b];d.d?(d.d=!1,e.push(d)):c(d.n,d.t,d.p)}catch(m){}};g(d);g(e)}};var bi=function(){var a=t.gaGlobal=t.gaGlobal||{};a.hid=a.hid||ra();return a.hid};var qi=window,ri=document,si=function(a){var b=qi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===qi["ga-disable-"+a])return!0;try{var c=qi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=db("AMP_TOKEN",ri.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var zi=function(a,b,c){yi(a);var d=Math.floor(ya()/1E3);Yh(a).e.push(new Wh(b,d,c,void 0));$h(a)},Ai=function(a,b,c){yi(a);var d=Math.floor(ya()/1E3);Yh(a).e.push(new Wh(b,d,c,!0))},yi=function(a){if(1===Yh(a).c){Yh(a).c=2;var b=encodeURIComponent(a);Pa(("http:"!=t.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Ci=function(a,b){},Bi=function(a,b){};var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.b=0})(function(){return"109"})}();
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;sg(a,c)}(function(a){Z.__flc=a;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=X(b.vtp_customVariable||[],"key","value")||{},e={Na:b.vtp_activityTag,bc:c,sa:b.vtp_conversionCookiePrefix||void 0,ub:void 0,F:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,hc:b.vtp_advertiserId,jc:b.vtp_groupTag,xa:b.vtp_gtmOnFailure,T:b.vtp_gtmOnSuccess,Bb:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Dc:void 0,Db:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Lc:b.vtp_transactionVariable,transactionId:void 0,Nc:b.vtp_userVariable,Oc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){Q("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,T("google_attr").build([X(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Uc();Q("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=T("google_trackConversion");if(ma(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=X(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:og()})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.b=0})(function(a){return a.vtp_value})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return jc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=R("gtm.referrer",1)||x.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?C(D(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):cb(D(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=df(b,"gtm.click");Ug(d)}}(function(a){Z.__cl=a;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.b=0})(function(b){if(!ah("cl")){var c=T("document");z(c,"click",a,!0);bh("cl")}A(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.b=0})(function(a){return Wg(a.vtp_name,R("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.fls=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;sg(a,c)}(function(a){Z.__fls=a;Z.__fls.g="fls";Z.__fls.h=!0;Z.__fls.b=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(a){a=a||[];for(var b=[],c=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],d=0;d<a.length;d++)for(var e=0;e<c.length;e++){var g=c[e],h=a[d][g[1]];void 0!==h&&b.push(g[0]+(d+1)+
":"+U(h))}return b.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(R("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),g=0;g<e.length;g++){var h=e[g].split(":");h[1]=h[1]&&U(h[1])||"";e[g]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=X(b.vtp_customVariable||[],
"key","value")||{},m={Na:b.vtp_activityTag,bc:k,sa:b.vtp_conversionCookiePrefix||void 0,ub:b.vtp_revenue,F:"ITEM_SOLD"===b.vtp_countingMethod?6:5,hc:b.vtp_advertiserId,jc:b.vtp_groupTag,xa:b.vtp_gtmOnFailure,T:b.vtp_gtmOnSuccess,Bb:b.vtp_useImageTag?void 0:b.vtp_url,zc:c,protocol:"",Dc:b.vtp_quantity,Db:!b.vtp_useImageTag,Lc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Nc:b.vtp_userVariable,Oc:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){Q("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,T("google_attr").build([X(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.b=0})(function(a){return ra(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:R("gtm.url",1))||Sg();var d=b[a("vtp_component")];if(!d||"URL"==d)return cb(D(String(c)));var e=D(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=oa(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=C(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=C(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=R(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;p(X(l.vtp_fieldsToSet,"fieldName","value"),e);p(X(l.vtp_contentGroup,"index","group"),g);p(X(l.vtp_dimension,"index","dimension"),h);p(X(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=p(l);b=p(b,m)}p(X(b.vtp_fieldsToSet,"fieldName","value"),e);p(X(b.vtp_contentGroup,"index",
"group"),g);p(X(b.vtp_dimension,"index","dimension"),h);p(X(b.vtp_metric,"index","metric"),k);var n=ad(b.vtp_functionName);if(ma(n)){var q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+nc(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];n.apply(window,b)},y=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&w("set",a+c,b[c])},B=function(){
var a=function(a,b,c){if(!Ia(b))return!1;for(var d=Aa(Object(b),c,[]),e=0;d&&e<d.length;e++)w(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=R("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Ia(c))return;c=Object(c);var d=Aa(e,"currencyCode",c.currencyCode);void 0!==d&&w("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){w("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");w("ec:setAction",g[h],k.actionField);break}}},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=v[e]?va(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},W={name:r};I(e,W,!0);n("create",b.vtp_trackingId||
c.trackingId,W);w("set","&gtm",og(!0));b.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(a,c){void 0!==b[c]&&w("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",g);E("dimension",h);E("metric",k);var O={};I(e,O,!1)&&w("set",O);var F;b.vtp_enableLinkId&&w("require","linkid","linkid.js");
w("set","hitCallback",function(){var a=e&&e.hitCallback;ma(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(w("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:y(String,b.vtp_eventLabel||c.label),eventValue:y(ua,b.vtp_eventValue||c.value)};I(F,S,!1);w("send",S);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){w("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");
var K=function(a){return R("transaction"+a,1)},V=K("Id");w("ecommerce:addTransaction",{id:V,affiliation:K("Affiliation"),revenue:K("Total"),shipping:K("Shipping"),tax:K("Tax")});for(var ia=K("Products")||[],H=0;H<ia.length;H++){var P=ia[H];w("ecommerce:addItem",{id:V,sku:P.sku,name:P.name,category:P.category,price:P.price,quantity:P.quantity})}w("ecommerce:send");}else if("TRACK_TIMING"==b.vtp_trackType){
var ja={hitType:"timing",timingCategory:String(b.vtp_timingCategory||c.category),timingVar:String(b.vtp_timingVar||c.name),timingValue:ua(b.vtp_timingValue||c.value),timingLabel:y(String,b.vtp_timingLabel||c.label)};I(F,ja,!1);w("send",ja);}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(w("require","ec","ec.js"),B());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:Ma})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var ba=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:ba})}F?w("send","pageview",F):w("send","pageview");b.vtp_autoLinkDomains&&bd(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var sa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(sa="internal/"+sa);a=!0;Q(L("https:","http:","//www.google-analytics.com/"+sa,e&&e.forceSSL),function(){var a=Zc();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}}else A(b.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();



Z.a.ytl=["google"],function(){function a(){var b=Math.round(1E9*Math.random())+"";return Va(b)?a():b}function b(a,b){if(!a)return!1;for(var c=0;c<r.length;c++)if(0<=a.indexOf("//"+r[c]+"/"+b))return!0;return!1}function c(a){var b=-1!==a.indexOf("?")?"&":"?";if(-1<a.indexOf("origin="))return a+b+"enablejsapi=1";if(!v){var c=T("document");v=c.location.protocol+"//"+c.location.hostname;c.location.port&&(v+=":"+c.location.port)}return a+b+"enablejsapi=1&origin="+encodeURIComponent(v)}function d(a,d){var e=
a.getAttribute("src");if(b(e,"embed/")){if(0<e.indexOf("enablejsapi=1"))return!0;if(d)return a.setAttribute("src",c(e)),!0}return!1}function e(b,c){if(!b.getAttribute("data-gtm-yt-inspected-"+c.Mc)&&(b.setAttribute("data-gtm-yt-inspected-"+c.Mc,"true"),d(b,c.wd))){b.id||(b.id=a());var e=T("YT"),g=e.get(b.id);g||(g=new e.Player(b.id));var k=h(g,c),l={},m;for(m in k)l.Ea=m,k.hasOwnProperty(l.Ea)&&g.addEventListener(l.Ea,function(a){return function(b){return k[a.Ea](b.data)}}(l)),l={Ea:l.Ea}}}function g(a){A(function(){function b(){for(var b=
c.getElementsByTagName("iframe"),d=b.length,g=0;g<d;g++)e(b[g],a)}var c=T("document");b();xg(b)})}function h(a,b){var c,d;function e(){v=Og(function(){return{url:E,title:sa,td:y,hf:a.getCurrentTime(),playbackRate:ea}},b.Mc,a.getIframe());y=0;sa=E="";ea=1;return g}function g(c){switch(c){case u.PLAYING:y=Math.round(a.getDuration());E=a.getVideoUrl();if(a.getVideoData){var d=a.getVideoData();sa=d?d.title:""}ea=a.getPlaybackRate();b.af?v.yb("start"):v.Zb();B=m(b.Xf,b.Wf,a.getDuration());return h(c);
default:return g}}function h(){Na=a.getCurrentTime();sb=Rg().getTime();v.eg();w();return k}function k(c){var d;switch(c){case u.ENDED:return n(c);case u.PAUSED:d="pause";case u.BUFFERING:return d=1<Math.abs((Rg().getTime()-sb)/1E3*ea-(a.getCurrentTime()-Na))?"seek":d||"buffering",a.getCurrentTime()&&(b.$e?v.yb(d):v.Zb()),r(),l;case u.UNSTARTED:return e(c);default:return k}}function l(a){switch(a){case u.ENDED:return n(a);case u.PLAYING:return h(a);case u.UNSTARTED:return e(a);default:return l}}function n(){for(;d;){var a=
c;Pg(d);a()}b.Ze&&v.yb("complete",1);return e(u.UNSTARTED)}function q(){}function r(){d&&(Pg(d),d=0,c=q)}function w(){if(B.length&&0!==ea){var b=-1,e;do{e=B[0];if(e.ca>a.getDuration())return;b=(e.ca-a.getCurrentTime())/ea;if(0>b&&(B.shift(),0===B.length))return}while(0>b);c=function(){d=0;c=q;0<B.length&&B[0].ca===e.ca&&(B.shift(),v.yb("progress",e.Nd,e.Sd));w()};d=Qg(c,1E3*b)}}var v,B=[],y,E,sa,ea,Na,sb,Gb=e(u.UNSTARTED);d=0;c=q;return{onStateChange:function(a){Gb=Gb(a)},onPlaybackRateChange:function(b){Na=
a.getCurrentTime();sb=Rg().getTime();v.Zb();ea=b;r();w()}}}function k(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var g=parseInt(b[e],10);isNaN(g)||100<g||0>g||d.push(g/100)}d.sort(function(a,b){return a-b});return d}function l(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var g=parseInt(b[e],10);isNaN(g)||0>g||d.push(g)}d.sort(function(a,b){return a-b});return d}function m(a,b,c){var d=a.map(function(a){return{ca:a,Sd:a,Nd:void 0}});if(!b.length)return d;var e=b.map(function(a){return{ca:a*
c,Sd:void 0,Nd:a}});if(!d.length)return e;var g=d.concat(e);g.sort(function(a,b){return a.ca-b.ca});return g}function n(a){!y||a.vtp_triggerStartOption?q(a):Tc(function(){q(a)})}function q(a){var c=!!a.vtp_captureStart,e=!!a.vtp_captureComplete,h=!!a.vtp_capturePause,m=k(a.vtp_progressThresholdsPercent+""),n=l(a.vtp_progressThresholdsTimeInSeconds+""),q=!!a.vtp_fixMissingApi;if(c||e||h||m.length||n.length){var r={af:c,Ze:e,$e:h,Wf:m,Xf:n,wd:q,Mc:void 0===a.vtp_uniqueTriggerId?"":a.vtp_uniqueTriggerId},
v=T("YT"),u=function(){g(r)};A(a.vtp_gtmOnSuccess);if(v)v.ready&&v.ready(u);else{var y=T("onYouTubeIframeAPIReady");Vg("onYouTubeIframeAPIReady",function(){y&&y();u()});A(function(){for(var a=T("document"),c=a.getElementsByTagName("script"),e=c.length,g=0;g<e;g++){var h=c[g].getAttribute("src");if(b(h,"iframe_api")||b(h,"player_api"))return}for(var k=a.getElementsByTagName("iframe"),l=k.length,m=0;m<l;m++)if(!w&&d(k[m],r.wd)){Q("https://www.youtube.com/iframe_api");w=!0;break}})}}else A(a.vtp_gtmOnSuccess)}
var r=["www.youtube.com","www.youtube-nocookie.com"],u={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},v,w=!1,y=!1;Z.__ytl=n;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.b=0}();Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.b=0})(function(){return G.o})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(a){Z.__gclidw=a;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.b=100})(function(b){A(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Rf())&&Yg(a,g,h,k));Xg(e,c,d);kg(e,d,c);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Zg(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=R(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Sg()),d;d=oa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!mh(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return C(D(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return R("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=R("gtm.element",1),m=R("event",1),u=Number(Rg());a===l&&b===m&&c>u-250?k=d:(d=k=l?Wa(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var v;a:{var w=String(R("gtm.elementUrl",1)||e.vtp_defaultValue||""),y=D(w);switch(e.vtp_component||"URL"){case "URL":v=w;break a;case "IS_OUTBOUND":v=h(w,e);break a;default:v=C(y,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return v;case "ATTRIBUTE":var E;if(void 0===e.vtp_attribute)E=
g(e);else{var B=R("gtm.element",1);E=Ua(B,e.vtp_attribute)||e.vtp_defaultValue||""}return E;default:return g(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=p(a),c=b;c[M.oa]=null;c[M.ue]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:Sg()}function b(b,c){z(b,"hashchange",function(b){c({source:"hashchange",state:null,da:Tg(a(b))})})}function c(b,c){z(b,"popstate",function(b){c({source:"popstate",state:b.state,da:Tg(a(b))})})}function d(a,b,c){var d=b.history,e=d[a];if(ma(e))try{d[a]=function(b,g,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,da:Tg(Sg())})}}catch(n){}}function e(){var a={source:null,
da:Tg(Sg()),state:T("history").state||null};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.da!=b.da){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.da,"gtm.newUrlFragment":b.da,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};a=b;Ug(e)}}}(function(a){Z.__hl=a;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.b=0})(function(a){var g=T("self");if(!ah("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",
g,k);bh("hl")}A(a.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=T("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){Uc();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:og()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?R(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Q("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(a){Z.__baut=a;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=T(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(a,c){void 0!==b[a]&&(e[c]=b[a])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{Q("//bat.bing.com/bat.js",function(){var a=jh(T("UET"),{ti:b.vtp_tagId,q:d});t[c]=a;a.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){A(b.vtp_gtmOnFailure)}})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.b=0})(function(a){var b=a.vtp_input,c=X(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.b=0})(function(a){A(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=x.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){A(h)}}}var b=function(a,b,c){Tc(function(){var d,e=J;e.postscribe||(e.postscribe=dc);d=e.postscribe;var g={done:b},m=x.createElement("div");m.style.display="none";m.style.visibility="hidden";x.body.appendChild(m);try{d(m,a,g)}catch(n){A(c)}})};var c=function(d){if(x.body){var e=
d.vtp_gtmOnFailure,g=eh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.kc,k=g.T;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(x.body,Xa(h),k,e)()}else Qg(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();


Z.a.lcl=[],function(){function a(){var a=T("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=Ya(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=gf("lcl",g?"nv.mwt":"mwt",0),m;m=g?gf("lcl","nv.ids",[]):gf("lcl","ids",[]);if(m.length){var n=df(e,"gtm.linkClick",m);if(b(c,e,a)&&!g&&l&&e.href){var q=T((e.target||"_self").substring(1)),r=!0;if(Ug(n,function(){r&&q&&(q.location.href=e.href)},l))r=
!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Ug(n,function(){},l||2E3);return!0}}};z(a,"click",e,!1);z(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=cb(D(b.href)),l=cb(D(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?
!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};ff("lcl","mwt",k,0);e||ff("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};ff("lcl","ids",l,[]);e||ff("lcl","nv.ids",l,[]);ah("lcl")||(a(),bh("lcl"));A(b.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(a,b){this.element=a;this.uid=b}function b(){var a=Number(R("gtm.start"))||0;return Rg().getTime()-a}function c(a,c,d,l){function g(){if(!Hg(a.target)){c.has(e.qb)||c.set(e.qb,""+b());c.has(e.Xb)||c.set(e.Xb,""+b());var g=0;c.has(e.sb)&&(g=Number(c.get(e.sb)));g+=100;c.set(e.sb,""+g);if(g>=d){var h=df(a.target,"gtm.elementVisibility",[c.uid]),k=Gg(a.target);h["gtm.visibleRatio"]=Math.round(1E3*k)/10;h["gtm.visibleTime"]=d;h["gtm.visibleFirstTime"]=Number(c.get(e.Xb));
h["gtm.visibleLastTime"]=Number(c.get(e.qb));Ug(h);l()}}}if(!c.has(e.La)&&(0==d&&g(),!c.has(e.qa))){var h=T("self").setInterval(g,100);c.set(e.La,h)}}function d(a){a.has(e.La)&&(T("self").clearInterval(Number(a.get(e.La))),a.remove(e.La))}var e={La:"polling-id-",Xb:"first-on-screen-",qb:"recent-on-screen-",sb:"total-visible-time-",qa:"has-fired-"};a.prototype.has=function(a){return!!this.element.getAttribute("data-gtm-vis-"+a+this.uid)};a.prototype.get=function(a){return this.element.getAttribute("data-gtm-vis-"+
a+this.uid)};a.prototype.set=function(a,b){this.element.setAttribute("data-gtm-vis-"+a+this.uid,b)};a.prototype.remove=function(a){this.element.removeAttribute("data-gtm-vis-"+a+this.uid)};(function(a){Z.__evl=a;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.b=0})(function(b){function g(){var b=!1,c=null;if("CSS"===l){try{c=Be(m)}catch(F){}b=!!c&&w.length!=c.length}else if("ID"===l){var e=Va(m);e&&(c=[e],b=1!=w.length||w[0]!==e)}c||(c=[],b=0<w.length);if(b){for(var g=0;g<w.length;g++)d(new a(w[g],u));w=[];
for(var h=0;h<c.length;h++)w.push(c[h]);0<=y&&Ng(y);0<w.length&&(y=Mg(k,w,[r]))}}function k(b){var h=new a(b.target,u);b.intersectionRatio>=r?h.has(e.qa)||c(b,h,q,"ONCE"===v?function(){for(var b=0;b<w.length;b++){var c=new a(w[b],u);c.set(e.qa,"1");d(c)}Ng(y);if(n&&wg)for(var h=0;h<wg.length;h++)wg[h]===g&&wg.splice(h,1)}:function(){h.set(e.qa,"1");d(h)}):(d(h),"MANY_PER_ELEMENT"===v&&h.has(e.qa)&&(h.remove(e.qa),h.remove(e.sb)),h.remove(e.qb))}var l=b.vtp_selectorType,m;"ID"===l?m=String(b.vtp_elementId):
"CSS"===l&&(m=String(b.vtp_elementSelector));var n=!!b.vtp_useDomChangeListener,q=b.vtp_useOnScreenDuration&&Number(b.vtp_onScreenDuration)||0,r=(Number(b.vtp_onScreenRatio)||50)/100,u=b.vtp_uniqueTriggerId,v=b.vtp_firingFrequency,w=[],y=-1;g();n&&xg(g);A(b.vtp_gtmOnSuccess)})}();

var Di={};Di.macro=function(a){if(af.Yb.hasOwnProperty(a))return af.Yb[a]},Di.onHtmlSuccess=af.rd(!0),Di.onHtmlFailure=af.rd(!1);Di.dataLayer=xc;Di.callback=function(a){lc.hasOwnProperty(a)&&ma(lc[a])&&lc[a]();delete lc[a]};Di.Se=function(){J[G.o]=Di;mc=Z.a;Rb=Rb||af;Sb=Lc};
Di.Ff=function(){J=t.google_tag_manager=t.google_tag_manager||{};if(J[G.o]){var a=J.zones;a&&a.unregisterChild(G.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nb.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},r=0;r<n.length;r++)q[n[r][0]]=
Array.prototype.slice.call(n[r],1);Lb.push(q)}Pb=Z;Qb=hh;Di.Se();ze();Oc=!1;Pc=0;if("interactive"==x.readyState&&!x.createEventObject||"complete"==x.readyState)Rc();else{z(x,"DOMContentLoaded",Rc);z(x,"readystatechange",Rc);if(x.createEventObject&&x.documentElement.doScroll){var u=!0;try{u=!t.frameElement}catch(E){}u&&Sc()}z(t,"load",Rc)}ne=!1;"complete"===x.readyState?pe():z(t,"load",pe);a:{if(!zd)break a;t.setInterval(Ad,864E5);}ic=(new Date).getTime();}};(0,Di.Ff)();

})()
