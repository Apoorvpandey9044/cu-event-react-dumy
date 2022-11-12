var mod_pagespeed_tAqhTksdv2 =
  '!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\\-/)&&(a=String(a).replace(/\\-/g,"/")),new Date(a);throw new Error("Couldn\'t cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\\]\\\\(){}|-])/g,"\\\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;g>f;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&10>m&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\\s)/gi,"").split(/\\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var f=[],g=[],h={precision:100,elapse:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\\/\\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&0>b?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\\%s/gi,e))}else new j(this,b[0],b[1])})}});';
var mod_pagespeed_wGP_Aws4lH =
  '/**\n * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:\n * {@link http://kottenator.github.io/jquery-circle-progress/}\n *\n * @author Rostyslav Bryzgunov <kottenator@gmail.com>\n * @version 1.2.2\n * @licence MIT\n * @preserve\n */\n!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error(\'Calling "widget" method on not initialized instance is forbidden\');return r.canvas}if("value"==e){if(!r)throw Error(\'Calling "value" method on not initialized instance is forbidden\');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});';
var mod_pagespeed_k8lg9k1kSV =
  '!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function e(t,e){return t.toFixed(e.decimals)}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,this.dataOptions(),i),this.init()};o.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:e,onUpdate:null,onComplete:null},o.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},o.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},e=Object.keys(t);for(var o in e){var i=e[o];"undefined"==typeof t[i]&&delete t[i]}return t},o.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},o.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},o.prototype.restart=function(){this.stop(),this.init(),this.start()},o.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},o.prototype.stop=function(){this.interval&&clearInterval(this.interval)},o.prototype.toggle=function(){this.interval?this.stop():this.start()},t.fn.countTo=function(e){return this.each(function(){var i=t(this),n=i.data("countTo"),s=!n||"object"==typeof e,r="object"==typeof e?e:{},a="string"==typeof e?e:"start";s&&(n&&n.stop(),i.data("countTo",n=new o(this,r))),n[a].call(n)})}});';
var mod_pagespeed_OxG_FhlEHt =
  "\r\n(function($) {\r\n    // 'use strict';\r\n\r\n    // Main Navigation\r\n    $( '.hamburger-menu' ).on( 'click', function() {\r\n        $(this).toggleClass('open');\r\n        $('.site-navigation').toggleClass('show');\r\n    });\r\n\r\n    // Hero Slider\r\n    var mySwiper = new Swiper('.hero-slider', {\r\n        slidesPerView: 1,\r\n        spaceBetween: 0,\r\n        loop: true,\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            clickable: true,\r\n            renderBullet: function (index, className) {\r\n                return '<span class=\"' + className + '\">' + (index + 1) + '</span>';\r\n            }\r\n        },\r\n        navigation: {\r\n            nextEl: '.swiper-button-next',\r\n            prevEl: '.swiper-button-prev'\r\n        }\r\n    });\r\n\r\n    var current_slide = mySwiper.activeIndex;\r\n    var countdown_date = $('.swiper-slide').eq(current_slide).data(\"date\");\r\n\r\n    $('.countdown').countdown(countdown_date, function(event) {\r\n        $('.dday').html(event.strftime('%-D'));\r\n        $('.dhour').html(event.strftime('%-H'));\r\n        $('.dmin').html(event.strftime('%-M'));\r\n        $('.dsec').html(event.strftime('%-S'));\r\n    });\r\n\r\n    mySwiper.on('slideChange', function (slider) {\r\n        var current_slide = mySwiper.activeIndex;\r\n        var countdown_date = $('.swiper-slide').eq(current_slide).data(\"date\");\r\n\r\n        $('.countdown').countdown(countdown_date, function(event) {\r\n            $('.dday').html(event.strftime('%-D'));\r\n            $('.dhour').html(event.strftime('%-H'));\r\n            $('.dmin').html(event.strftime('%-M'));\r\n            $('.dsec').html(event.strftime('%-S'));\r\n        });\r\n    });\r\n\r\n    // Events Slider\r\n    var swiper = new Swiper('.homepage-regional-events-slider', {\r\n        slidesPerView: 6,\r\n        spaceBetween: 30,\r\n        loop: true,\r\n        breakpoints: {\r\n            // when window width is <= 320px\r\n            576: {\r\n                slidesPerView: 2,\r\n            },\r\n            768: {\r\n                slidesPerView: 3\r\n            },\r\n            992: {\r\n                slidesPerView: 4\r\n            },\r\n            1200: {\r\n                slidesPerView: 5\r\n            }\r\n        },\r\n        navigation: {\r\n            nextEl: '.swiper-button-next',\r\n            prevEl: '.swiper-button-prev'\r\n        }\r\n    });\r\n\r\n    // Load more events\r\n    var $container      = $('.events-list');\r\n    var $item           = $('.single-event');\r\n\r\n    $item.slice(0, 6).addClass('visible');\r\n\r\n    $('.load-more-btn a').on('click', function (e) {\r\n        e.preventDefault();\r\n\r\n        $('.single-event:hidden').slice(0, 6).addClass('visible');\r\n        $container.masonry('layout');\r\n    });\r\n\r\n    // Events Page\r\n    $container.masonry({\r\n        itemSelector: '.single-event'\r\n    });\r\n\r\n    // Buy Tickets Form\r\n    $(\".increase-ticket\").click(function() {\r\n        var $n = $(this)\r\n            .parent(\".number-of-ticket\")\r\n            .parent(\".flex\")\r\n            .parent(\".ticket-row\")\r\n            .find(\".ticket-count\");\r\n        $n.val(Number($n.val())+1 );\r\n    });\r\n\r\n    $(\".decrease-ticket\").click(function() {\r\n        var $n = $(this)\r\n            .parent(\".number-of-ticket\")\r\n            .parent(\".flex\")\r\n            .parent(\".ticket-row\")\r\n            .find(\".ticket-count\");\r\n        var amount = Number($n.val());\r\n        if (amount > 0) {\r\n            $n.val(amount-1);\r\n        }\r\n    });\r\n\r\n    $(\".clear-ticket-count\").on( 'click', function() {\r\n        var $count = $('.ticket-count');\r\n        $count.val('1');\r\n    });\r\n\r\n    // Tabs\r\n    $(function() {\r\n        $('.tab-content:first-child').show();\r\n\r\n        $('.tab-nav').bind('click', function(e) {\r\n            $this = $(this);\r\n            $tabs = $this.parent().parent().next();\r\n            $target = $($this.data(\"target\"));\r\n            $this.siblings().removeClass('active');\r\n            $target.siblings().css(\"display\", \"none\");\r\n            $this.addClass('active');\r\n            $target.fadeIn(\"slow\");\r\n        });\r\n\r\n        $('.tab-nav:first-child').trigger('click');\r\n    });\r\n\r\n    // Accordion & Toggle\r\n    $('.accordion-wrap.type-accordion').collapsible({\r\n        accordion: true,\r\n        contentOpen: 0,\r\n        arrowRclass: 'arrow-r',\r\n        arrowDclass: 'arrow-d'\r\n    });\r\n\r\n    $('.accordion-wrap .entry-title').on('click', function() {\r\n        $('.accordion-wrap .entry-title').removeClass('active');\r\n        $(this).addClass('active');\r\n    });\r\n\r\n    // Circular Progress Bar\r\n    $('#festivals').circleProgress({\r\n        startAngle: -Math.PI / 4 * 2,\r\n        value: 0.75,\r\n        size: 124,\r\n        fill: {\r\n            gradient: [\"#581687\", \"#ab00ff\"]\r\n        }\r\n    }).on('circle-animation-progress', function(event, progress) {\r\n        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');\r\n    });\r\n\r\n    $('#concerts').circleProgress({\r\n        startAngle: -Math.PI / 4 * 2,\r\n        value: 0.83,\r\n        size: 124,\r\n        fill: {\r\n            gradient: [\"#581687\", \"#ab00ff\"]\r\n        }\r\n    }).on('circle-animation-progress', function(event, progress) {\r\n        $(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');\r\n    });\r\n\r\n    $('#conference').circleProgress({\r\n        startAngle: -Math.PI / 4 * 2,\r\n        value: 0.25,\r\n        size: 124,\r\n        fill: {\r\n            gradient: [\"#581687\", \"#ab00ff\"]\r\n        }\r\n    }).on('circle-animation-progress', function(event, progress) {\r\n        $(this).find('strong').html(Math.round(25 * progress) + '<i>%</i>');\r\n    });\r\n\r\n    $('#new_artists').circleProgress({\r\n        startAngle: -Math.PI / 4 * 2,\r\n        value: 0.82,\r\n        size: 124,\r\n        fill: {\r\n            gradient: [\"#581687\", \"#ab00ff\"]\r\n        }\r\n    }).on('circle-animation-progress', function(event, progress) {\r\n        $(this).find('strong').html(Math.round(82 * progress) + '<i>%</i>');\r\n    });\r\n\r\n    // Counter\r\n    $(\".start-counter\").each(function () {\r\n        var counter = $(this);\r\n\r\n        counter.countTo({\r\n            formatter: function (value, options) {\r\n                return value.toFixed(options.decimals).replace(/\\B(?=(?:\\d{3})+(?!\\d))/g, ',');\r\n            }\r\n        });\r\n    });\r\n\r\n    // Back to Top\r\n    if ( $( '.back-to-top' ).length) {\r\n        var scrollTrigger = 500, // px\r\n            backToTop = function () {\r\n                var scrollTop = $(window).scrollTop();\r\n                if (scrollTop > scrollTrigger) {\r\n                    $('.back-to-top').addClass('show');\r\n                } else {\r\n                    $('.back-to-top').removeClass('show');\r\n                }\r\n            };\r\n        backToTop();\r\n        $(window).on('scroll', function () {\r\n            backToTop();\r\n        });\r\n        $('.back-to-top').on('click', function (e) {\r\n            e.preventDefault();\r\n            $('html,body').animate({\r\n                scrollTop: 0\r\n            }, 800);\r\n        });\r\n    }\r\n\r\n})(jQuery);";