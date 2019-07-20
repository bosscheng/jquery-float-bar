(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.floatBar = factory(root.jQuery);
    }
}(this, function ($) {

    //
    var floatBar = function (options) {
        //默认参数
        var _d = {
            contents: null,             //滚动条的内容，可以是DOM字符或者jQuery对象
            align: "right",             //水平方向对齐
            vertical: "middle",         //垂直方向对齐
            zIndex: 7500,                //Z轴值
            css: null,                   //附加样式
            id: null,                    //包裹容器的id，必要时可以设置id用来操作DOM
            ieFixed: true               //IE6及更低版本是否模拟fixed效果
        };

        //检测某些垃圾浏览器版本，并保存至变量
        var _ie = ($.browser.msie) ? parseInt($.browser.version) : false;

        //检测并合并传递的参数
        if (arguments.length < 1 || !(arguments[0] instanceof Object)) {
            return $.error("floatBar: 参数必须为JSON对象");
        }
        //
        $.extend(_d, options);

        //挂载DOM
        var _hideCss = {
            position: "fixed",
            top: "-9999em",
            left: "-9999em"
        };
        if (_ie && _ie <= 6) {
            _hideCss.position = "absolute";
        }
        //
        $('<div class="floatBar"></div>').css(_hideCss).appendTo("body");

        //修正位置
        var _bar = $("body").find(".floatBar:last");

        _bar.append(_d.contents);

        var _bw = _bar.width(),
            _bh = _bar.height(),
            _css = {zIndex: _d.zIndex};
        if (_d.id != null) {
            _bar.attr("id", _d.id);
        }
        switch (_d.align) {
            case 'right':
                _css.left = 'auto';
                _css.right = 0;
                break;
            case 'left':
                _css.right = 'auto';
                _css.left = 0;
                break;
            case 'center':
                _css.right = 'auto';
                _css.left = '50%';
                _css.marginLeft = -_bw / 2;
                break;
        }
        switch (_d.vertical) {
            case 'top':
                _css.top = 0;
                break;
            case 'bottom':
                _css.top = 'auto';
                _css.bottom = 0;
                break;
            case 'middle':
                _css.top = '50%';
                _css.marginTop = -_bh / 2;
                if (_ie && _ie <= 6) {
                    _css.marginTop = 0;
                }
                break;
        }
        _bar.css($.extend(_css, _d.css));
    };


    $.fn.floatBar = function (option) {
        var obj = {
            contents: $(this)
        };
        option = $.extend(option, obj);
        floatBar(option);
    };


    return floatBar;
}));
