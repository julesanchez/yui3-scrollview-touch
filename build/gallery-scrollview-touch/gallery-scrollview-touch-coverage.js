if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-scrollview-touch/gallery-scrollview-touch.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-scrollview-touch/gallery-scrollview-touch.js",
    code: []
};
_yuitest_coverage["build/gallery-scrollview-touch/gallery-scrollview-touch.js"].code=["YUI.add('gallery-scrollview-touch', function (Y, NAME) {","","/**"," *"," * YUI Module to use CSS scrollviews for supported touch devices."," *"," * Copyright Julien Sanchez 2013."," *"," * Full code on github : https://github.com/julesanchez"," *"," * Code licensed under the BSD License:"," * http://developer.yahoo.net/yui/license.txt"," *"," */","	","	var TOUCH_ACTION_VENDOR_PREFIX = \"\",","		hasIt = \"\",","		VENDORS = ['-webkit-', '-moz-', '-o-', '-ms-'];","","	Y.Array.each(VENDORS, function(val) {","		var property = val + 'touch-action';","		if (property in Y.config.doc.body.style) {","			TOUCH_ACTION_VENDOR_PREFIX = val;","		}","	});","","	function hasOverflowScrolling()","	{","		if (hasIt === \"\")","		{","			hasIt = false;","			if (TOUCH_ACTION_VENDOR_PREFIX !== \"\")","			{","				hasIt = true;","			}","			else if (parseInt(Y.UA.chrome, 10) > 18 || parseInt(Y.UA.android, 10) > 3)","			{","				// Latest versions of chrome & webkit having the feature but returning false.","				// See http://stackoverflow.com/questions/15906508/chrome-browser-for-android-no-longer-supports-webkit-overflow-scrolling-is-the","				hasIt = true;","			}","			else","			{","				var div = document.createElement('div'),","					body = document.getElementsByTagName('body')[0],","					prefixes = ['webkit', 'moz', 'o', 'ms'],","					prefix,","					i,","					computedStyle;","				","				body.appendChild(div);","","				for (i = 0; i < prefixes.length; i++) {","					prefix = prefixes[i];","					div.style[prefix + 'OverflowScrolling'] = 'touch';","				}","				","				div.style.overflowScrolling = 'touch';","				computedStyle = window.getComputedStyle(div);","				","				hasIt = !!computedStyle.overflowScrolling;","				","				for (i = 0; i < prefixes.length; i++) {","					prefix = prefixes[i];","					if (!!computedStyle[prefix + 'OverflowScrolling']) {","					hasIt = true;","					break;","					}","				}","				","				div.parentNode.removeChild(div);","			}","		}","		","		return hasIt;","	}","","	Y.ScrollViewTouch = function (config)","	{","","		var node = Y.one(config.srcNode),","			styles = node.getAttribute(\"style\"),","			sv;","","		if (hasOverflowScrolling())","		{","			sv = {isNative: true, scrollbox: node};","			if (config.axis === 'X')","			{","				// we use setAttibute() instead of setStyles to avoid browser repainting","				styles +=  \"width:\" + config.width + \"px;overflow-x:scroll;overflow-y:hidden;z-index:0;\";","				if (Y.UA.webkit)","				{","					styles += \"-webkit-overflow-scrolling: touch;-webkit-transform:translate3d(0,0,0)\";","				}","				if (TOUCH_ACTION_VENDOR_PREFIX !== \"\")","				{","					styles += TOUCH_ACTION_VENDOR_PREFIX + \"touch-action: pan-x;\";","				}","				node.setAttribute(\"style\",styles);","","			}","			else if (config.axis === 'Y')","			{","				styles +=  \"height:\" + config.height + \"px;overflow-y:scroll;overflow-x:hidden;z-index:0;\";","				if (Y.UA.webkit)","				{","					styles += \"-webkit-overflow-scrolling: touch;-webkit-transform:translate3d(0,0,0)\";","				}","				if (TOUCH_ACTION_VENDOR_PREFIX !== \"\")","				{","					styles += TOUCH_ACTION_VENDOR_PREFIX + \"touch-action: pan-y;\";","				}","				node.setAttribute(\"style\",styles);","			}","			else","			{","			}","		}","		else","		{","			// if device has no touch scrolls, we fallback with YUI3 classical scrollview","			sv =  new Y.ScrollView({","				srcNode: node,","				height: config.height,","				width: config.width,","				deceleration: config.deceleration,","				bounce: config.bounce,","				axis: config.axis,","				flick: config.flick,","				drag: config.drag,","				snapduration: config.snapduration,","				snapEasing: config.snapEasing,","				easing: config.easing,","				bounceRange: config.bounceRange,","				frameduration: config.frameDuration","			});","			sv.render();","		}","		return sv;","	}","","","}, '0.0.1', {\"requires\": [\"base\", \"yui-base\", \"node\", \"scrollview-base\", \"event-touch\"], \"skinnable\": false});"];
_yuitest_coverage["build/gallery-scrollview-touch/gallery-scrollview-touch.js"].lines = {"1":0,"16":0,"20":0,"21":0,"22":0,"23":0,"27":0,"29":0,"31":0,"32":0,"34":0,"36":0,"40":0,"44":0,"51":0,"53":0,"54":0,"55":0,"58":0,"59":0,"61":0,"63":0,"64":0,"65":0,"66":0,"67":0,"71":0,"75":0,"78":0,"81":0,"85":0,"87":0,"88":0,"91":0,"92":0,"94":0,"96":0,"98":0,"100":0,"103":0,"105":0,"106":0,"108":0,"110":0,"112":0,"114":0,"123":0,"138":0,"140":0};
_yuitest_coverage["build/gallery-scrollview-touch/gallery-scrollview-touch.js"].functions = {"(anonymous 2):20":0,"hasOverflowScrolling:27":0,"ScrollViewTouch:78":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-scrollview-touch/gallery-scrollview-touch.js"].coveredLines = 49;
_yuitest_coverage["build/gallery-scrollview-touch/gallery-scrollview-touch.js"].coveredFunctions = 4;
_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 1);
YUI.add('gallery-scrollview-touch', function (Y, NAME) {

/**
 *
 * YUI Module to use CSS scrollviews for supported touch devices.
 *
 * Copyright Julien Sanchez 2013.
 *
 * Full code on github : https://github.com/julesanchez
 *
 * Code licensed under the BSD License:
 * http://developer.yahoo.net/yui/license.txt
 *
 */
	
	_yuitest_coverfunc("build/gallery-scrollview-touch/gallery-scrollview-touch.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 16);
var TOUCH_ACTION_VENDOR_PREFIX = "",
		hasIt = "",
		VENDORS = ['-webkit-', '-moz-', '-o-', '-ms-'];

	_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 20);
Y.Array.each(VENDORS, function(val) {
		_yuitest_coverfunc("build/gallery-scrollview-touch/gallery-scrollview-touch.js", "(anonymous 2)", 20);
_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 21);
var property = val + 'touch-action';
		_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 22);
if (property in Y.config.doc.body.style) {
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 23);
TOUCH_ACTION_VENDOR_PREFIX = val;
		}
	});

	_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 27);
function hasOverflowScrolling()
	{
		_yuitest_coverfunc("build/gallery-scrollview-touch/gallery-scrollview-touch.js", "hasOverflowScrolling", 27);
_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 29);
if (hasIt === "")
		{
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 31);
hasIt = false;
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 32);
if (TOUCH_ACTION_VENDOR_PREFIX !== "")
			{
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 34);
hasIt = true;
			}
			else {_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 36);
if (parseInt(Y.UA.chrome, 10) > 18 || parseInt(Y.UA.android, 10) > 3)
			{
				// Latest versions of chrome & webkit having the feature but returning false.
				// See http://stackoverflow.com/questions/15906508/chrome-browser-for-android-no-longer-supports-webkit-overflow-scrolling-is-the
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 40);
hasIt = true;
			}
			else
			{
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 44);
var div = document.createElement('div'),
					body = document.getElementsByTagName('body')[0],
					prefixes = ['webkit', 'moz', 'o', 'ms'],
					prefix,
					i,
					computedStyle;
				
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 51);
body.appendChild(div);

				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 53);
for (i = 0; i < prefixes.length; i++) {
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 54);
prefix = prefixes[i];
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 55);
div.style[prefix + 'OverflowScrolling'] = 'touch';
				}
				
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 58);
div.style.overflowScrolling = 'touch';
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 59);
computedStyle = window.getComputedStyle(div);
				
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 61);
hasIt = !!computedStyle.overflowScrolling;
				
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 63);
for (i = 0; i < prefixes.length; i++) {
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 64);
prefix = prefixes[i];
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 65);
if (!!computedStyle[prefix + 'OverflowScrolling']) {
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 66);
hasIt = true;
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 67);
break;
					}
				}
				
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 71);
div.parentNode.removeChild(div);
			}}
		}
		
		_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 75);
return hasIt;
	}

	_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 78);
Y.ScrollViewTouch = function (config)
	{

		_yuitest_coverfunc("build/gallery-scrollview-touch/gallery-scrollview-touch.js", "ScrollViewTouch", 78);
_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 81);
var node = Y.one(config.srcNode),
			styles = node.getAttribute("style"),
			sv;

		_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 85);
if (hasOverflowScrolling())
		{
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 87);
sv = {isNative: true, scrollbox: node};
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 88);
if (config.axis === 'X')
			{
				// we use setAttibute() instead of setStyles to avoid browser repainting
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 91);
styles +=  "width:" + config.width + "px;overflow-x:scroll;overflow-y:hidden;z-index:0;";
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 92);
if (Y.UA.webkit)
				{
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 94);
styles += "-webkit-overflow-scrolling: touch;-webkit-transform:translate3d(0,0,0)";
				}
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 96);
if (TOUCH_ACTION_VENDOR_PREFIX !== "")
				{
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 98);
styles += TOUCH_ACTION_VENDOR_PREFIX + "touch-action: pan-x;";
				}
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 100);
node.setAttribute("style",styles);

			}
			else {_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 103);
if (config.axis === 'Y')
			{
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 105);
styles +=  "height:" + config.height + "px;overflow-y:scroll;overflow-x:hidden;z-index:0;";
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 106);
if (Y.UA.webkit)
				{
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 108);
styles += "-webkit-overflow-scrolling: touch;-webkit-transform:translate3d(0,0,0)";
				}
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 110);
if (TOUCH_ACTION_VENDOR_PREFIX !== "")
				{
					_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 112);
styles += TOUCH_ACTION_VENDOR_PREFIX + "touch-action: pan-y;";
				}
				_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 114);
node.setAttribute("style",styles);
			}
			else
			{
			}}
		}
		else
		{
			// if device has no touch scrolls, we fallback with YUI3 classical scrollview
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 123);
sv =  new Y.ScrollView({
				srcNode: node,
				height: config.height,
				width: config.width,
				deceleration: config.deceleration,
				bounce: config.bounce,
				axis: config.axis,
				flick: config.flick,
				drag: config.drag,
				snapduration: config.snapduration,
				snapEasing: config.snapEasing,
				easing: config.easing,
				bounceRange: config.bounceRange,
				frameduration: config.frameDuration
			});
			_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 138);
sv.render();
		}
		_yuitest_coverline("build/gallery-scrollview-touch/gallery-scrollview-touch.js", 140);
return sv;
	}


}, '0.0.1', {"requires": ["base", "yui-base", "node", "scrollview-base", "event-touch"], "skinnable": false});
