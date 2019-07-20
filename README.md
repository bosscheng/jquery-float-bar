# 简介
jquery 悬浮插件，支持DOM 区域悬浮在页面中，不随着滚动轴滚动而滚动

## 特点

1. 定位时相对于悬浮条中心，水平方向支持“left/center/right”，垂直方向支持“top/middle/bottom”，可以形成9种常规组合；
2. 可以通过在参数中附加 css，可以实现更随心的定位；
3. 注意：悬浮条子节点如果需要绑定事件，需要使用 jQuery 的 on 的委托方法


## 参数


`ES6`
```
import floatBar from 'float-bar';

floatBar({
    contents: $('.test')
    zIndex: 10000,
    align: "left",
    vertical: "middle",
    css: {
        "margin-left": "-570px"
    }
})


```


`jquery plugin`
```
 $('.test').floatBar({
    zIndex: 10000,
    align: "left",
    vertical: "middle",
    css: {
        "margin-left": "-570px"
    }
})
```


### 参数列表

|名称	|类型	|默认值	|描述
|:------|:------|:------|:------
|contents	|Object, String	|null	| 必填参数（ES6调用的时候必要，jquery插件调用不需要），需要悬浮显示的对象或内容，可以为：jQuery选择器匹配的对象，如：$("#id")，$(".class").html()；HTML字符串，如“\<div\>...\</div\>”；
|align	|String	|"right"	|可选参数，水平对齐的方向。可使用以下值：“left”, “center”, “right”
|vertical	|String	|"middle"	|可选参数，垂直对齐的方向。可使用以下值：“top”, “middle”, “bottom”
|css	|JSON	|null	|可选参数，附加的自定义CSS。主要用于细微设置悬浮条，例如：可以使用 “margin” 等属性调整悬浮条的位置如果垂直对齐使用了 “bottom” 且 “margin-bottom” 为负值，IE6下则会出现BUG
|zIndex	|Number	|999	|可选参数，需要赋给给该浮动对象包裹容器的 z-index 值，某些情况下需要设置此值以防止被页面内容遮挡。
|id	|String	|null	|可选参数，需要赋给给该浮动对象包裹容器的 id，方便进行其他操作。该 id 不需要使用“#”开始。
|ieFixed	|Boolean	|true	|可选参数，悬浮条是否需要在 IE6 下模拟fixed效果，一般无需额外设置。

