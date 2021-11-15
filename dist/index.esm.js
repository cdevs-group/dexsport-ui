import styled, { keyframes, css, ThemeProvider, createGlobalStyle } from 'styled-components';
import { background, border, layout, position, space, flexbox, variant as variant$1, typography } from 'styled-system';
import * as React from 'react';
import React__default, { isValidElement, cloneElement, useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import get from 'lodash/get';
import { transparentize } from 'polished';
import debounce from 'lodash/debounce';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Box = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$C;

var Flex = styled(Box)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$B;

var LoaderSmall = function () {
    return (React__default.createElement(LoaderBlock$1, null,
        React__default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.5818 7.25455C38.7515 3.08485 33.0788 1 25.5636 1H2V49H25.5636C33.0788 49 38.7515 46.9152 42.5818 42.7455C46.4121 38.5273 48.3273 32.6121 48.3273 25C48.3273 17.3394 46.4121 11.4242 42.5818 7.25455ZM35.3338 26.837L16.6011 40.3936L21.0088 28.4319L11.0914 23.6472L29.8242 10.0906L25.4165 22.0523L35.3338 26.837Z", fill: "white" }))));
};
var flip$1 = keyframes(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "], ["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "])));
var LoaderBlock$1 = styled.div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  & svg {\n    max-width: 30px;\n    max-height: 30px;\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  & svg {\n    max-width: 30px;\n    max-height: 30px;\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"])), flip$1);
var templateObject_1$A, templateObject_2$n;

var Icon$h = function (props) {
    return (React__default.createElement("svg", __assign({ width: 42, height: 42, viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("rect", { x: 6, y: 6, width: 30, height: 30, rx: 7, fill: props.fill || "rgb(58,58,64)" }),
        React__default.createElement("g", { filter: "url(#prefix__filter0_dCloseIcon)", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" },
            React__default.createElement("path", { d: "M17.465 17.465l7.07 7.07M24.537 17.465l-7.071 7.07" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "prefix__filter0_dCloseIcon", x: 12.465, y: 14.464, width: 17.073, height: 17.071, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: 2 }),
                React__default.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React__default.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$g = function (props) {
    return (React__default.createElement("svg", { width: "42", height: "38", viewBox: "0 0 42 38", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M17.5352 15.4644L24.6062 22.5354", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default.createElement("path", { d: "M24.6074 15.4644L17.5364 22.5354", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "12.5352", y: "12.4644", width: "17.073", height: "17.0711", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};

var rotate = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  & path {\n    animation: ", " 1.5s ease-in-out infinite;\n    transform-origin: center center;\n  }\n"], ["\n  & path {\n    animation: ", " 1.5s ease-in-out infinite;\n    transform-origin: center center;\n  }\n"])), rotate);
var Svg = styled.svg(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$z, templateObject_2$m, templateObject_3$g;

var Icon$f = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M11 11L19.25 2.75V9.16667V2.75H12.8333", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M8.25 2.75H4.58333C3.57042 2.75 2.75 3.57042 2.75 4.58333V17.4167C2.75 18.4296 3.57042 19.25 4.58333 19.25H17.4167C18.4296 19.25 19.25 18.4296 19.25 17.4167V13.75", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("g", { filter: "url(#filter7837483784)" },
            React__default.createElement("path", { d: "M11.5858 14.6568L5.92893 8.99998M5.92893 8.99998L11.5858 3.34312M5.92893 8.99998H20.0711", stroke: props.fill || "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter7837483784", x: "0.515625", y: "0.34314", width: "24.5563", height: "21.3137", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$d = function (props) {
    return (React__default.createElement(Svg, { width: "18", height: "18", viewBox: "0 0 18 18" },
        React__default.createElement("path", __assign({ d: "M7.58579 14.6571L1.92893 9.00022M1.92893 9.00022L7.58579 3.34337M1.92893 9.00022L16.0711 9.00022", stroke: "url(#paint0_linearzaq)", strokeWidth: "2", strokeLinecap: "round" }, props)),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linearzaq", x1: "4.33309", y1: "13.6671", x2: "12.5355", y2: "5.46469", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$b = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default.createElement("g", { filter: "url(#filter110_d112EyeClose)" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0864 19.5899C12.5892 19.3613 13.1821 19.5837 13.4106 20.0864L13.5125 20.3107C14.8107 23.1666 17.6583 25.0002 20.7955 25.0002H21.205C24.3422 25.0002 27.1898 23.1666 28.488 20.3107L28.5899 20.0864C28.8184 19.5837 29.4113 19.3613 29.914 19.5899C30.4168 19.8184 30.6391 20.4113 30.4106 20.914L30.3087 21.1383C28.686 24.7082 25.1265 27.0002 21.205 27.0002H20.7955C16.874 27.0002 13.3145 24.7082 11.6918 21.1383L11.5899 20.914C11.3613 20.4113 11.5837 19.8184 12.0864 19.5899Z", fill: "white" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter110_d112EyeClose", x: "7.5", y: "17.5", width: "27.0005", height: "15.5002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear112", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$a = function (props) {
    return (React__default.createElement("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default.createElement("g", null,
            React__default.createElement("path", { d: "M15 20L20 25L27 16", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "10", y: "13", width: "22", height: "19.5082", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.604167 0 0 0 0 0.29 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#FFEA2C" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#FFB72C" })))));
};

var Icon$9 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30", color: "none" }, props),
        React__default.createElement("rect", { width: "30", height: "30", rx: "7", fill: props.fill || "white", fillOpacity: "0.15" }),
        React__default.createElement("path", { d: "M13.3102 8.0011C13.4534 8.0011 13.5934 8.04357 13.7125 8.12313C13.8316 8.20269 13.9244 8.31578 13.9792 8.44808C14.034 8.58039 14.0483 8.72598 14.0204 8.86644C13.9925 9.0069 13.9235 9.13591 13.8222 9.23718C13.7209 9.33844 13.5919 9.4074 13.4514 9.43534C13.311 9.46328 13.1654 9.44894 13.0331 9.39414C12.9007 9.33933 12.7876 9.24653 12.7081 9.12745C12.6285 9.00838 12.586 8.86839 12.586 8.72518C12.586 8.53314 12.6623 8.34897 12.7981 8.21318C12.9339 8.07739 13.1181 8.0011 13.3102 8.0011ZM8.24121 13.0696C8.24121 13.2129 8.28368 13.3529 8.36325 13.4719C8.44282 13.591 8.55591 13.6838 8.68823 13.7386C8.82055 13.7934 8.96615 13.8078 9.10662 13.7798C9.24709 13.7519 9.37612 13.6829 9.47739 13.5816C9.57866 13.4804 9.64763 13.3514 9.67557 13.2109C9.70351 13.0705 9.68917 12.9249 9.63436 12.7926C9.57956 12.6602 9.48674 12.5472 9.36766 12.4676C9.24857 12.388 9.10857 12.3456 8.96535 12.3456C8.7733 12.3456 8.58911 12.4219 8.45331 12.5576C8.3175 12.6934 8.24121 12.8776 8.24121 13.0696ZM9.84035 10.3242C9.84035 10.4674 9.88282 10.6074 9.96239 10.7265C10.042 10.8455 10.1551 10.9383 10.2874 10.9931C10.4197 11.0479 10.5653 11.0623 10.7058 11.0343C10.8462 11.0064 10.9753 10.9374 11.0765 10.8362C11.1778 10.7349 11.2468 10.6059 11.2747 10.4654C11.3026 10.325 11.2883 10.1794 11.2335 10.0471C11.1787 9.91478 11.0859 9.8017 10.9668 9.72213C10.8477 9.64257 10.7077 9.60011 10.5645 9.60011C10.3724 9.60011 10.1882 9.67639 10.0524 9.81218C9.91664 9.94797 9.84035 10.1321 9.84035 10.3242Z", fill: "white" }),
        React__default.createElement("g", { filter: "url(#filter5674)" },
            React__default.createElement("path", { d: "M16.6237 9C19.1545 9.75321 21 12.0977 21 14.8731C21 18.2569 18.2569 21 14.8731 21C12.0977 21 9.75321 19.1545 9 16.6237", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter5674", x: "4.09961", y: "6.09973", width: "21.8002", height: "21.8002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$8 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M12.611 2.5H2.1875C1.94578 2.5 1.75 2.31355 1.75 2.08333C1.75 1.85312 1.94578 1.66667 2.1875 1.66667H12.6875C12.9292 1.66667 13.125 1.48021 13.125 1.25C13.125 0.559636 12.5373 0 11.8125 0H1.75C0.783398 0 0 0.746094 0 1.66667V10C0 10.9206 0.783398 11.6667 1.75 11.6667H12.611C13.3771 11.6667 14 11.106 14 10.4167V3.75001C14 3.06068 13.3771 2.5 12.611 2.5ZM11.375 7.91666C10.8918 7.91666 10.5 7.54349 10.5 7.08334C10.5 6.62318 10.8918 6.25 11.375 6.25C11.8581 6.25 12.25 6.62318 12.25 7.08334C12.25 7.54349 11.8581 7.91666 11.375 7.91666Z", fill: "white" })));
};

var Icon$7 = function (props) {
    return (React__default.createElement("svg", __assign({ width: "46", height: "46", viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("rect", { x: "0.5", y: "0.5", width: "45", height: "45", rx: "9.5", fill: props.fill || "#4BE43E", stroke: props.fill || "url(#paint0_linearArrowRight)" }),
        React__default.createElement("g", { filter: props.fill || "url(#filter0_dArrowRight)" },
            React__default.createElement("path", { d: "M24.35 16L32 23.5M32 23.5L24.35 31M32 23.5H15", stroke: props.stroke || "white", strokeWidth: "2" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_dArrowRight", x: "11", y: "15.2859", width: "26.4284", height: "24.4281", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "4" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.195672 0 0 0 0 0.779167 0 0 0 0 0.146094 0 0 0 1 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linearArrowRight", x1: "23", y1: "0", x2: "23", y2: "46", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#8EFF85", stopOpacity: "0" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#A5FF9D" })))));
};

var Icon$6 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "42px", height: "42", viewBox: "0 0 42 42", fill: "#F45555" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: "url(#paint0_linearErrorIcon)" }),
        React__default.createElement("g", { filter: "url(#filter0_dErrorIcon)" },
            React__default.createElement("path", { d: "M17.5352 17.4648L24.6062 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default.createElement("path", { d: "M24.6074 17.4648L17.5364 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_dErrorIcon", x: "12.1211", y: "14.0508", width: "17.9014", height: "17.8995", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linearErrorIcon", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#FF6161" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#F45555" })))));
};

var Icon$5 = function (props) {
    return (React__default.createElement("svg", __assign({ width: "15", height: "12", viewBox: "0 0 15 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M1.375 4.5L5.96875 9.09375L13.625 1.4375", stroke: "url(#paint0_linear_1:648)", "stroke-width": "2.8" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_1:648", x1: "1.375", y1: "5.26559", x2: "13.625", y2: "5.26559", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#3C43DF" }),
                React__default.createElement("stop", { offset: "0.338542", stopColor: "#4932CF" }),
                React__default.createElement("stop", { offset: "1", "stop-color": "#6112B0" })))));
};

var Icon$4 = function (props) {
    return (React__default.createElement("svg", __assign({ width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", __assign({ d: "M1 9H9M9 9V1M9 9L1 1", stroke: "#4BE43E", strokeWidth: "1.8", strokeLinecap: "round" }, props))));
};

var Icon$3 = function (props) {
    return (React__default.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M6.41667 15.5833H4.58333C4.0971 15.5833 3.63079 15.3902 3.28697 15.0464C2.94315 14.7025 2.75 14.2362 2.75 13.75V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H13.75C14.2362 2.75 14.7025 2.94315 15.0464 3.28697C15.3902 3.63079 15.5833 4.0971 15.5833 4.58333V6.41667", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default.createElement("path", { d: "M18.2374 6.41663H7.42991C6.87049 6.41663 6.41699 6.87012 6.41699 7.42954V18.237C6.41699 18.7965 6.87049 19.25 7.42991 19.25H18.2374C18.7968 19.25 19.2503 18.7965 19.2503 18.237V7.42954C19.2503 6.87012 18.7968 6.41663 18.2374 6.41663Z", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$2 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: "url(#paint0_linearCloseRedIcon)" }),
        React__default.createElement("g", { filter: "url(#filter0_dCloseRedIcon)" },
            React__default.createElement("path", { d: "M17.5352 17.4648L24.6062 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default.createElement("path", { d: "M24.6064 17.4648L17.5354 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_dCloseRedIcon", x: "12.1211", y: "14.0508", width: "17.8994", height: "17.8994", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linearCloseRedIcon", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#FF6161" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#F45555" })))));
};

var Icon$1 = function (props) {
    return (React__default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V2ZM0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM11.5 7.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H5.707L7.854 10.646C7.90049 10.6925 7.93736 10.7477 7.96252 10.8084C7.98768 10.8692 8.00063 10.9343 8.00063 11C8.00063 11.0657 7.98768 11.1308 7.96252 11.1916C7.93736 11.2523 7.90049 11.3075 7.854 11.354C7.80751 11.4005 7.75232 11.4374 7.69158 11.4625C7.63084 11.4877 7.56574 11.5006 7.5 11.5006C7.43426 11.5006 7.36916 11.4877 7.30842 11.4625C7.24768 11.4374 7.19249 11.4005 7.146 11.354L4.146 8.354C4.09944 8.30755 4.06249 8.25238 4.03729 8.19163C4.01208 8.13089 3.99911 8.06577 3.99911 8C3.99911 7.93423 4.01208 7.86911 4.03729 7.80837C4.06249 7.74762 4.09944 7.69245 4.146 7.646L7.146 4.646C7.23989 4.55211 7.36722 4.49937 7.5 4.49937C7.63278 4.49937 7.76011 4.55211 7.854 4.646C7.94789 4.73989 8.00063 4.86722 8.00063 5C8.00063 5.13278 7.94789 5.26011 7.854 5.354L5.707 7.5H11.5Z", fill: "white" })));
};

var Icon = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V1Z", fill: "#4F46E5" }),
        React__default.createElement("path", { d: "M12.7 3.80005C12.3 3.40005 11.7 3.50005 11.3 3.90005C10.9 4.30005 11 4.90005 11.4 5.30005C12.4 6.20005 13 7.60005 13 9.00005C13 11.8 10.8 14 8 14C5.2 14 3 11.8 3 9.00005C3 7.60005 3.6 6.20005 4.7 5.30005C5.1 4.90005 5.1 4.30005 4.8 3.90005C4.4 3.50005 3.8 3.50005 3.4 3.80005C1.9 5.10005 1 7.00005 1 9.00005C1 12.9001 4.1 16 8 16C11.9 16 15 12.9001 15 9.00005C15 7.00005 14.2 5.10005 12.7 3.80005Z", fill: "#4F46E5" })));
};

var scales$2 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    GREEN: "green",
    PINK: "pink",
    OPTION: "option",
    YELLOW: "yellow",
    GRAY: "gray",
    WHITE: "white",
    LOAD_COLOR: "load-color",
    VIOLET: "violet",
};

var _a$3, _b;
var scaleVariants = (_a$3 = {},
    _a$3[scales$2.MD] = {
        height: "50px",
        padding: "0 24px",
        fontSize: "15px",
        lineHeight: "20px",
    },
    _a$3[scales$2.SM] = {
        height: "32px",
        padding: "0 16px",
        fontSize: "13px",
        lineHeight: "16px",
        borderRadius: "7px",
    },
    _a$3[scales$2.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$3);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "transparent",
        border: "1px solid #4BE43E",
        boxShadow: "none",
        borderRadius: 10,
        color: "#4BE43E",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants$1.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants$1.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b[variants$1.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants$1.TEXT] = {
        backgroundColor: "transparent",
        color: "green",
        boxShadow: "none",
    },
    _b[variants$1.GREEN] = {
        background: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.PINK] = {
        backgroundColor: "#FF6161",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.OPTION] = {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.YELLOW] = {
        background: " linear-gradient(180deg, #FFB001 -16%, #FFA201 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.GRAY] = {
        background: "linear-gradient(180deg, #8A92B2 0%, #62688F 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.WHITE] = {
        background: "#fff",
        color: "#4BE43E",
        boxShadow: "none",
    },
    _b[variants$1.LOAD_COLOR] = {
        backgroundColor: "transparent",
        color: "green",
        boxShadow: "none",
        opacity: "1",
    },
    _b[variants$1.VIOLET] = {
        background: "linear-gradient(180deg, #3C43DF 0%, #4932CF 32.29%, #6112B0 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme, variant = _a.variant;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.yay-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    var opacity = variant === variants$1.LOAD_COLOR ? 1 : 0.2;
    return "\n    &:disabled,\n    &.yay-button--disabled {\n      box-shadow: none;\n      opacity: " + opacity + ";\n      color: " + theme.colors.white + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$3 = styled.button(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: 0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";\n    background: linear-gradient(180deg, rgba(132, 173, 128, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #ff6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.yay-button--disabled):not(.yay-button--disabled):not(:active) {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: 0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";\n    background: linear-gradient(180deg, rgba(132, 173, 128, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #ff6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.yay-button--disabled):not(.yay-button--disabled):not(:active) {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var variant = _a.variant;
    return variant === "green"
        ? "0px 0px 29px #2CB021"
        : variant === "pink"
            ? "0px 0px 20px rgba(255, 97, 97, 0.38)"
            : "none";
}, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), layout, space, typography);
var templateObject_1$y;

var Button$5 = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon; props.external; var className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, variant = props.variant, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children", "variant"]);
    var isDisabled = isLoading || disabled || props.spinColor || variant === variants$1.LOAD_COLOR;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("yay-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("yay-button--disabled");
    }
    return (React__default.createElement(StyledButton$3, __assign({ "$isLoading": isLoading, variant: variant, className: classNames.join(" "), disabled: isDisabled }, rest),
        React__default.createElement(React__default.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            props.spinColor || variant === variants$1.LOAD_COLOR ? React__default.createElement(LoaderSmall, null) : children,
            props.spin ? React__default.createElement(Icon$9, { spin: true, fill: "rgba(0,0,0,0)" }) : null,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button$5.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$1.PRIMARY,
    scale: scales$2.MD,
    disabled: false,
};

var IconButton = styled(Button$5)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$x;

var sizes = {
    XS: "xs",
    SM: "sm",
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$2;
var style$1 = (_a$2 = {},
    _a$2[sizes.XS] = {
        fontSize: "11px",
        fontSizeLg: "14px",
    },
    _a$2[sizes.SM] = {
        fontSize: "13px",
        fontSizeLg: "16px",
    },
    _a$2[sizes.MD] = {
        fontSize: "15px",
        fontSizeLg: "19px",
    },
    _a$2[sizes.LG] = {
        fontSize: "21px",
        fontSizeLg: "27px",
    },
    _a$2[sizes.XL] = {
        fontSize: "24px",
        fontSizeLg: "30px",
    },
    _a$2);
var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return style$1[size || sizes.MD].fontSize;
}, function (_a) {
    var size = _a.size;
    return style$1[size || sizes.MD].fontSizeLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, getColor$1, getFontSize, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var bold = _a.bold;
    return (bold ? 700 : 400) || 400;
}, space, typography);
Text.defaultProps = {
    color: "white",
    small: false,
};
var templateObject_1$w;

var variants = {
    COLLECTION: "collection",
    SUCCESS: "success",
    WINNING: "winning",
    INFO: "info",
    ERROR: "error",
};

var StyledAlert$1 = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: flex;\n  align-items: baseline;\n  width: fit-content;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 90px 15px 23px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: baseline;\n  width: fit-content;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 90px 15px 23px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.75, theme.colors.black);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, background, space, layout);
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.COLLECTION; }
    switch (variant) {
        case variants.COLLECTION:
            return React__default.createElement(Icon$9, { spin: true });
        case variants.WINNING:
            return React__default.createElement(Icon$h, null);
        case variants.SUCCESS:
            return React__default.createElement(Icon$a, { fill: "#47DA3B" });
        case variants.INFO:
            return React__default.createElement(React__default.Fragment, null);
        case variants.ERROR:
            return React__default.createElement(Icon$6, null);
        default:
            return React__default.createElement(React__default.Fragment, null);
    }
};
var Button$4 = styled.button(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n  }\n"])));
var Row$1 = styled.div(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n"])));
var SetButton = function (_a) {
    var variant = _a.variant, onClick = _a.onClick, icon = _a.icon;
    var Icon = getIcon(variant);
    return (React__default.createElement(Button$4, { disabled: variant !== "winning", onClick: onClick }, icon || Icon));
};
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick, icon = _a.icon, propsWrapper = _a.propsWrapper;
    return (React__default.createElement(StyledAlert$1, __assign({}, propsWrapper),
        React__default.createElement(Row$1, null,
            title && (React__default.createElement(Text, { fontWeight: 600, marginRight: "5px" }, title)),
            React__default.createElement("div", null, children)),
        React__default.createElement(SetButton, { icon: icon, variant: variant, onClick: onClick })));
};
var templateObject_1$v, templateObject_2$l, templateObject_3$f;

var StyledAlert = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  width: 100%;\n  max-width: 367px;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 60px 25px 23px;\n  color: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n  ", "\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  max-width: 367px;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 60px 25px 23px;\n  color: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.75, theme.colors.black);
}, background, space, layout);
var ButtonClose = styled(Button$5)(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  box-shadow: none;\n  &:disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  box-shadow: none;\n  &:disabled {\n    cursor: default;\n  }\n"])));
var AlertBlurCustom = function (_a) {
    var handleClose = _a.handleClose, title = _a.title, children = _a.children, propsWrapper = _a.propsWrapper;
    return (React__default.createElement(StyledAlert, __assign({}, propsWrapper),
        React__default.createElement("div", null,
            React__default.createElement(Flex, { justifyContent: "space-between" },
                React__default.createElement(Text, { fontWeight: 600, mb: "7px" }, title),
                React__default.createElement(ButtonClose, { onClick: handleClose },
                    React__default.createElement(Icon$h, { fill: "none" }))),
            React__default.createElement("div", null, children))));
};
var templateObject_1$u, templateObject_2$k;

var BaseLayoutBlock = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 59px;\n  background: ", ", ", ";\n  ", " {\n    padding-top: 80px;\n  }\n"], ["\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 59px;\n  background: ", ", ", ";\n  ", " {\n    padding-top: 80px;\n  }\n"])), function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat center top / cover";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var BaseLayout = function (_a) {
    var src = _a.src, children = _a.children;
    return React__default.createElement(BaseLayoutBlock, { src: src }, children);
};
var templateObject_1$t;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
function MyTimer(_a) {
    // const days = Math.floor(expiryTimestamp / 86400);
    // const hours = Math.floor(expiryTimestamp / 3600);
    // const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
    // const seconds = expiryTimestamp - hours * 3600 - minutes * 60;
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color; _a.texts;
    // const handleDigit = (value: number) => {
    //   const leftDigit = value >= 10 ? value.toString()[0] : "0";
    //   const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    //   return { leftDigit, rightDigit };
    // };
    // const timeArray = [days, hours, minutes, seconds];
    function getTimeRemaining(expiryTimestamp) {
        var seconds = Math.floor(expiryTimestamp % 60);
        var minutes = Math.floor((expiryTimestamp / 60) % 60);
        var hours = Math.floor((expiryTimestamp / (60 * 60)) % 24);
        var days = Math.floor(expiryTimestamp / (60 * 60 * 24));
        return {
            expiryTimestamp: expiryTimestamp,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }
    var date = getTimeRemaining(expiryTimestamp);
    // const timeTextArray = [texts.days, texts.hours, texts.minutes, texts.seconds];
    return (React__default.createElement(Wrap$4, { color: color },
        date.days > 0 ? date.days + "d :" : "",
        " ",
        date.hours > 0 ? date.hours + "h :" : "",
        " ",
        date.minutes + "m",
        " ",
        ": " + date.seconds + "s"));
}
var TimerSimple = function (_a) {
    var time = _a.time, color = _a.color, texts = _a.texts;
    return (React__default.createElement("div", null,
        React__default.createElement(MyTimer, { expiryTimestamp: time || 0, color: color || "white", texts: texts })));
};
var Wrap$4 = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  height: 32px;\n  color: ", ";\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n"], ["\n  height: 32px;\n  color: ", ";\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n"])), getColor);
var templateObject_1$s;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var StyledLink$1 = styled(Text)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n  & svg {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n  & svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "green",
};
var templateObject_1$r;

var LinkExternal = function (_a) {
    var children = _a.children, icon = _a.icon, props = __rest(_a, ["children", "icon"]);
    return (React__default.createElement(Link, __assign({ external: true }, props),
        children,
        icon || React__default.createElement(Icon$f, { ml: "4px" })));
};

var Loader = function () {
    return (React__default.createElement(LoaderBlock, null,
        React__default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.5818 7.25455C38.7515 3.08485 33.0788 1 25.5636 1H2V49H25.5636C33.0788 49 38.7515 46.9152 42.5818 42.7455C46.4121 38.5273 48.3273 32.6121 48.3273 25C48.3273 17.3394 46.4121 11.4242 42.5818 7.25455ZM35.3338 26.837L16.6011 40.3936L21.0088 28.4319L11.0914 23.6472L29.8242 10.0906L25.4165 22.0523L35.3338 26.837Z", fill: "white" }))));
};
var flip = keyframes(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "], ["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "])));
var LoaderBlock = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  & svg {\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  & svg {\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"])), flip);
var templateObject_1$q, templateObject_2$j;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  from {\n    left: -150px;\n  }\n  to {\n    left: 100%;\n  }\n"], ["\n  from {\n    left: -150px;\n  }\n  to {\n    left: 100%;\n  }\n"])));
var pulse = keyframes(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGrey;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$p, templateObject_2$i, templateObject_3$e, templateObject_4$a, templateObject_5$8;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[scales$1.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[scales$1.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[scales$1.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[scales$1.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading$1 = styled(Text).attrs({ bold: true })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$1.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$1.MD].fontSizeLg;
});
Heading$1.defaultProps = {
    as: tags.H2,
};
var templateObject_1$o;

var scales = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales.MD : _b;
    switch (scale) {
        case scales.SM:
            return "32px";
        case scales.LG:
            return "48px";
        case scales.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  /* height: ", "; */\n  outline: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  width: 100%;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  /* height: ", "; */\n  outline: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  width: 100%;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGrey;
});
Input.defaultProps = {
    scale: scales.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$n;

var breakpointMap = {
    xs: 370,
    sm: 576,
    xmd: 767,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1300,
    xxxl: 1440,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    xmd: "@media screen and (min-width: " + breakpointMap.xmd + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    xxxl: "@media screen and (min-width: " + breakpointMap.xxxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var baseColors = {
    failure: "#ED4B9E",
    primary: "#1FC7D4",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
    dark: "#1F262F",
    white: "#ffffff",
    whiteRgba: "rgba(255,255,255,0.1)",
    black: "#000000",
    grey: "#29303A",
    lightGrey: "#F3F3F3",
    grey2: "#201E1E",
    grey3: "#BCBCBC",
    violet: "#6112B0",
    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.11), 0px 0px 6px rgba(0, 0, 0, 0.11)",
    boxShadow2: "0px 0px 6px rgba(0, 0, 0, 0.11)",
    boxShadow3: "0px 4px 30px rgba(0, 0, 0, 0.2)",
    boxShadow4: "inset 0px 1px 8px rgba(0, 0, 0, 0.19)",
    boxShadow5: "0px 0px 20px rgba(97, 18, 176, 0.35)",
    boxShadow6: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    boxShadow7: " inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
    gradient: "linear-gradient(90deg, #3C43DF 0%, #4932CF 33.85%, #6112B0 100%)",
    gradient2: "linear-gradient(90deg, rgba(60, 67, 223, 0.5) 0%, rgba(73, 50, 207, 0.5) 33.85%, rgba(97, 18, 176, 0.5) 100%);",
    gradient3: "linear-gradient(180deg, #3C43DF 0%, #4932CF 32.29%, #6112B0 100%)",
    purple: "#4932CF",
};
var lightColors = __assign(__assign({}, baseColors), { background: "#ffffff" });
var darkColors = __assign(__assign({}, baseColors), { background: "#1F262F" });

var light$1 = {
    background: lightColors.dark,
};
var dark$1 = {
    background: darkColors.dark,
};

var light = {
    background: lightColors.dark,
};
var dark = {
    background: darkColors.dark,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$1, colors: darkColors, modal: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$1, colors: lightColors, modal: light });

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

var Arrow = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
var StyledTooltip = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$m, templateObject_2$h;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default.createElement(ThemeProvider, { theme: invertTheme }, content),
        React__default.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var ModalContent = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledModal = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"], ["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalHeader = styled.div(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 30px 20px 35px 27px;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 30px 20px 35px 27px;\n"])));
var ModalTitle = styled.div(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"], ["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var Overlay = styled.div(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  pointer-events: none;\n  display: block;\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"], ["\n  pointer-events: none;\n  display: block;\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"])));
var Heading = styled.div(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 21px;\n  line-height: 25px;\n  letter-spacing: 0.5px;\n"], ["\n  font-weight: bold;\n  font-size: 21px;\n  line-height: 25px;\n  letter-spacing: 0.5px;\n"])));
var Image = styled.div(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 17px;\n  left: 50%;\n  transform: translateX(-50%);\n"], ["\n  position: absolute;\n  top: 17px;\n  left: 50%;\n  transform: translateX(-50%);\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, image = _a.image;
    return (React__default.createElement("div", null,
        React__default.createElement(Overlay, null),
        React__default.createElement(StyledModal, null,
            React__default.createElement(ModalContent, null,
                React__default.createElement(ModalHeader, null,
                    React__default.createElement(ModalTitle, null,
                        React__default.createElement(Heading, null, title)),
                    image ? React__default.createElement(Image, null, image) : null,
                    !hideCloseButton && (React__default.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                        React__default.createElement(Icon$h, null)))),
                children))));
};
var templateObject_1$l, templateObject_2$g, templateObject_3$d, templateObject_4$9, templateObject_5$7, templateObject_6$4, templateObject_7$4;

var ModalWrapper = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true); _d[0]; var setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    return (React__default.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default.createElement(ModalWrapper, null, React__default.isValidElement(modalNode) &&
            React__default.cloneElement(modalNode, {
                onDismiss: handleDismiss,
            }))),
        children));
};
var templateObject_1$k;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Metamask = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXSSURBVHgB7VZZbFRVGP7POXeWO1srUAstrWWaEk0UG4pUEE2BpIl1STQuDwSe5cVgYvQByTAmhhAfNDG+KBoN8QEQE0GWssQAxiBJE1GJQCkMBVqxK52FuXPvPcf/3Dt3mJnOhvHN/k1n7pw55/++//uXMwBz9n83cj+bt/Y2tbipsp8DfS16NBaD/8BqJhDpbXuYMNEPQrTioUGvO9X17oHxONyHTUS6QxrQ1Seujvs27R78Tq4ptRz8oK+t0+D8uBCwQH4WAB2ptPoNPr5Y6dy1LZ317jrfSgHmswzI6oQpnvjx6gQZmkqucfZUVWDb+panFRc5iqA+awFZ2CcJLAi6d2/qbjxdfCaRMBtx33OCQDcIQgVSTmQ4HL80CeMp/Xr06PASO44qCrz16iqVxUd2oQNfbpGQHPOxeGbjrZnMxuaQ594hYn9ngg0hnydTBhy4MA4GxwXBv3TApdFKBIIzw+tw79Jc1HkmVwiun/xz0vaSpyVlBOQfpQT+uJ2Eb8+PZcFBZIS5N99PRQKMsC35Uc8yXB+f0eH04HQBM6YQyBgcTl2Zhp9jd5BIbvuvO46NXqyJQOT5xSsxwPVQzZDbwLUZuKvzexxw7dDFCbg0liooMgJiV/Hx8goYZI2lYxWT2VnREgLKIZcGj0LhkUb/bJeCzq+JwHvrWtoxg1Wj54guwTubAqA7CmRJLGv2w6q2EBIUuc5hYHbURMD06DN48Hd8TEEF8C4Ef7zJbhCORWYaIlfflFF4bGHA2uMkhxPSWhMBd6M3LggfxKLJWAtFTSCj6mwOIrgfaK4tcbNuQvYDKNgJ8ljX4gCqVGcRxoOXayIQ/SqWVhXXDZOD23GYD97R4Ifu1iAohBSUiaFn9wq7cazqx4rswnQsbw5NMyE+LcaqWGSfvNK+s05l7wh0IoFlEEEPg1WtdbKlLXCRlcd5VlUGLsWOK5MxQdOEE+mpRdGzPcUYFSfhpu5Fiy2Fs1HJd44JTSYNHEKkgITzrOPIdQjIeSA0uwLwdbQURlkCY5GnmtDfC9YHpwbwHYcbAhCMLOs4b0oSwcEwsA09AhiTk5AiYRNTw8EUZKoUTtk54AnQDYgVLPWd18twpAtIJ01Ixg2Ix004dF2Fr68E4W4CAU0nLSCbH47d9AGKsvy+CAAVr9/zMtvqH3BDsF4B1a/AyWQI+meCcGRchb9Nr92ODlkfg7o6TIeXhW9FunzFfkq6j3+0pgeTdgLVZVDFElgPUhG8sgEvPbiTFhDEQvF4iVULMkMp/IIqdDSVGQkvicbS+edL1oDQyQZUoDJ4tjADqIA1BbEofainz08w7wy0tFzDgnRRUFEFXeNTbdGYVuxmVgrEh704XUQfVAGXbZnC6CcnMxDHGzGVMnEQcStiWaiqSq0C1fFWlMPK7aWNt3esWFLCVaFN7Fjdi0XUn+u7EgcSWHgyQtmiBF/8QSXvxhZW+0n5FYzeNO35ITsHD1/W0qSnYeuZ0bIKzFvoPo1tc0NONSmtoYuCd123AWwVsFswUuy/AooGFmEaCSbiOu43LbUkkZTBl54ZSRwMh8OtUE4BaaOR7vdxqm+zNzjTrvBu1u7KduPgC7isqC0OcjRQbFGPF7j/QRD+ecC9Iaw0H1BfAN78eB/8NnRL+rlxdXg4jLuNkkVIudjPKX0bgdViptmJZ7g8tJ/5my+k27pegtCiDoFAwoO/ARS3/YtEmOCkUZ5xKQoY7CCqg1OU0i8keFkFpI1sf/IXVG6lBUgsvacR+DBOtu+1DO9v3zlwxyKEF8VP/XuWqcz9hqLQXhdTwpQxYPZNZCtH5L2gw1DsJiqmnnvI2/BMR1+f1RFlRzH+lv4cUzkfr/UjgvK9IzfNsys+G9CL9yE5iXIe/zdLMgOH9z2qCb4Zfw/0upnS7nIrkNYyGLkJDQvqh1STvuyAV1RARCIUtkcFISDgX5gkc+6HPctwArlSZOov0JRET31bgqxda8CczVme/QNPgIyILYTO+QAAAABJRU5ErkJggg==";

var TrustWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOuSURBVHgBzZZdbBRVFMfPuTOl23YXipBStfqgaKJUHzDwYHywiYkmxESL3Qc1RnxRi1uqtsboQ60JRpMGV7spiaKxMb5su8VgNMGopAYICQGWB0hIeOgDH2n5XDo7s8zOvYcz27szpZSyZSHhn+zcO/eee373nHtmdgDuVSUydkvX704bLFJYsSURdmWsLon4NS+KINCO2mj084EXcaqS5bcEEQO6/7A3eC58gUjPzJk+QwTJOkHDA+2xqYpAnWmr2VS0smiiEJIawcS1AvEpBr3E0w+EZLjEwGME+NwsPx4B/M3Oxnn+qKfkJRMMh6OWg/HY8QDUmc6tFqZxkI0a4eah5RXh9iVWceu3bzfmEmP2OwDqE3bxOCwkpXpTHUsHhN8XBqyfF4J4lQEHuLNZRuRDQx3R3uSm5ZeRQ0ptbPhpUkafFAJe4PldbG3NC0Kx3m/MElQKl2FaYlAg7AcPTp2FukMjcXRutlmek9z86//6+vaY59asazVqzQfR8+6TgD9w6iKE5AYgRFHwk1+Cgvw/1R4bhUWqv7/N4yarf7A5nUuBYUQEcVb87fuXq860XV5gglkHd0BomDV+qxCLAaihITZdNpCgauGOiEp+lOeGEXlFmStPc6gRqFI9u6mh7FsYNSEII0ZQMYSqHqqUYxVWlvtcoHYAMsm1QzOMQpUicJvCO+NCAFqWzfoRKW3WAlUKpRE8k4hwOgDNlCae0aBHoEoZgpaX+0TeZADSIyf0Hu6HKqVQPFH2CjW1Yeq0JnS7qmeMmqAKISn9lqeLK2JLJq4HIR7WvWWudFZDFSKENaUWxIn+NizMAdG+wFCoDrhNfTg6zRAsnTO/6/aWxwNQqj16lP/ETs7sBF57fg+ZcBsqIn6mfZCUxl83gPQOftHdltYL1mBHmgxYhD4Yzb3Jzev6dvf2eN34vKBILJpkWnaGiu81CWs8sbPwKNxC3TupMTFmfceFPQwz4VwBNLfAdUHMUdcu+2Hlyn8Y9Jgecvj8hgvkbt2xccWp2bZ9ROL8iPUumtjHzlfpYalQvT/UvvTHBUG+ev+kZsfJf8+zYVEQXOTLtpydT/76VnM+kclv4GfvK66wp2fZHOEcbfLPe67PBb+CtmTy6/iVkeSzezb0BRMIeIR7r4ZjNMVjn07Kid9G4q3ufL4q+q7j/L+hiL5EXbazlnNaYZst6r/5+RWcXshHxR+QnempZsOo7+GIPvLXcRT/kcSPh+LRLNwNdWfyaxOj+ZfhXtU1k1hmPhDWXrwAAAAASUVORK5CYII=";

var MathWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAATCAYAAAD4f6+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMnSURBVHgB7ZVfSFNRHMfv3eYm1ZCZDSwoCywMoYdWMIJqajrRCPsjJoZJEFgUIkYQvgwrQtiDYb1FKf1Bn+YwnDoxhqzyIYJegsjsr9hDkJDpmrt9TtwrS2/brbfAH/z4nfO9v3N+39/vd865krQi/5nIRh1DoVCuLMvtqDWRSDR5vd6pVP6Dg4PnMeX4d5eWlj6QDIrFqKPJZGrB1IkxQd5hLvzJNxKJrJubm+tQp7tRw4RMRh2pymdtDKHJVL7z8/MxzIw6nZb+QlK2bGBgIM9sNt9h6ITQWYvFkoVNMP+KdkPsYywWO15RUfFW+A8NDTVjmsH7sH6sJx6PP8FeY74d7SgrK7ueKmbKCkGgHLMPLaBljSUlJQHOQ5D5FXSjoihum812JGlJG7oB/MzCwoIJ/1sklAehSnQLeklKIynPEJtFyVBhKBPkUTAYXCVwsB7I7mH4BQ1p/vhECOrFTlKJ1+FweO3s7OzTzMxMcQFywW9LaUS3ZcPDw+foTBGELpLpd6wdEvlUqYtNTXyrysjImCHYG+wavreDj0Wj0U632+3i+0sIh9lqF3iXqAxrc4qLi1/Q1ibGLvZt0bupuhVikxY2ES15TqY+lWQT8yxw0coG2lGn4ifAj4EX+Xw+cT7GCZovyPzKWJZrafNJhp/wk8XTgbWQxEOw+0tj654h2Dey6DKLO5NI3sR8QN9TrVYN51CLKy3epxoNg8ArURl12qbh+ChU7xTaSkK6T8Fiy0ZGRjZBpJ6N/FTlm4ZTgTBYDiQqnU7n9MTEhGy329eTYQB8HN/Tmi+VqcL4CXiDdvh5HFeLvcCvgh9kTT1te6b5870GTIFcz7IKQWYbRtyCbA0LBAJ2gu5luIO+F7pcrh/V1dUxzk2uwNCjv2UnywcwmwlySMyTEqtECyFauMS/AaxWt0JC1B4ryRgVKoDsVjLuW4IfxneK7B5rWG9vb7bD4fCAj4EvPojiPbNarftJ6q7H44mni7lM+G95KHOnZEBGR0ctkLvX39+/04g/5OrUFuqK7qGm5KJtBWRsltIIh9pGlnncvFWSAaFKYm+HtCL/KD8B1wF1hV4sChMAAAAASUVORK5CYII=";

var TokenPocket = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgB7ZRNS0JBFIbfGS8lUbRpEZSClrVq16JltAv31SL6CUW7dv2E+hFqbQOhXUbRok1gECGKFATtxPyotO6cRu3q9ePqTBltfOHe+TpnnnPmnrnAQH0QU7LafAhCiNXGBNncZZ8xIdtnCLrG0exZbxgRQzjr7WTEY9ld8SZ2oCLGrkAfW4jMp51hocwCuHHbyd9IFvGZeIUCCbWsKQ/Bgzj2X9pXOfqq+vGOgVMIGynPH8Ka5IWL7/UHxuy15VBnRGtYjhl6MOq4UQ+D6vwEpgKTejDW1lGUtBfmuDUyGvMj70Dpvr4hYx4Z/WizM0FbLsrY0A6KFKIyrGA1IuXSb1MSkZk5a/DDAumWIWu0hJB9RQ/GVL4ZWcA0suJQH0atHYbuxUIp+VrBaSCnD2Ot0LaBpaLc8gBGeQkR/2ProgFlWf+9Jt4+OE/IqhUg8wn5lziii46VpAHrkAnxC4R951BU72PUvce/gtH300S1stQ4GOgWCGtxEyWtvJVCo2k3XONGlWbe5dZR5IXaQiEODTnDyLyR7+FK13TLTNxDlUtdBvedYJuVMNB/6Qu9r4QNjf96IQAAAABJRU5ErkJggg==";

var WalletConnect = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAARCAYAAAAhUad0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgBlVVNSFRRFD7n3jdTyEDWImjbItu1aNPMm2IySCiKwJAiUCtsFENoahOUjgW1KDMwbd7YHy4isYUhLaUpciaDsl27VrkJKpGI9P2czlN05r15d2Y8cHnvfud733fvuT8PoUrsNahuM9gnAKEDCBIqHgFME8FYoVMbq6aJlZK6YcYBxAOW3AO1BsE3h5yTha7wnIoiVIl4xrxGgO82ZOgGwk4hxGfdsK+rKUGGhplmw76A1BuH4IWQ8jvY8ENosMW2zAYeezMiNJaL45X3STngx7UgUwfEDnRXaa1PNMsmqUJ3KB9An+Y2EjWWdgvSJgGpoagDkSB95ZrqhvWMH22ENBSe11K5frSgWhChPmo/4fG2c6XS+aTsr8iPPaTtfmzfsHVMxY9naZdSyzAP+7EEV8InYA7wzBajGasVagg9Y/Yyn6IVNouHP2Id17PWYtyw024f9xv2DQeo+DHZp2Y6N42rBHiT9bmlW6cDcRlDyjKyWQuTnvJr3SqC94WD5CkFoRzjWbQpDNOlhisS3HfxIH4sa7Wz4XjR0OVTTDi2bObXuSIIYSY+ihrWuQDDoGMELu43ZsMOJBj1EBG/aGHZJApdOB8Ki0YXKBm+xrfG45hh96gMeaN+LTdeXTN91DrPhlkoPZIIuX+/RCJ3FhfWj0xi8He9WRd5xdkDHi2AHLeDpQYO4GAhKVM8qLtcrsvgjdfcjnoGhPDWWpbNHy/iz1X/kojfXtjqbItMMHgIFEGIQ/kLsmetr2ftWzztq6D8gD5Yy1rTbA8uwvqkfZEYpogZoikgJ1GugDdnkrLXj/KP4R7nLpX7wct8p2zhHJXiZRd+rhv/OPV4hFmTPsM7QYZuzCRDKT463mMjYIr+yla/4YoSVIhYxnrOF/npmq40l2/YfbzGvOlgYgnkmU9JNIN4/wGjLRusiMlpqgAAAABJRU5ErkJggg==";

var BinanceWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7ZZNaBNBFMffTGqb7qRN2lpKQbStghdRET1LizVtQbDiZxE8CN4EBUFslRY1ih940bM3D4qiLTbJxo9cPHhQD1qVgqWtB7XUZDehSWlN9jnTsMnutkk2KXjyfwh5k/++3755b2cDUKZmhlkTvoM1UKYolCElyLY5q+FzLCI9LBdeMliR3a2EwjAiNACQ3liE+cqBk1LM0QDbSh0wAggbzL/gU3dD8gjZCX/s5rINFttLKbzKVLqSSoPbAotKHQ54nR+aVRiTaw7U9apqEV/xHotKeU+XQRHwMb/taYu9nUiL9+30nBaDiu3l22KCUgI367zJQ4gV7cvhYuD4tI80S2WDKSX3rJUKaO3exHnxvc4bm1yCA/lmhcer1ZMFcxf60UHxICHwVY9RQ58O1SXg6XSlgE/kuDjg7py/C6VIDUo7lBFnqx4rAU9LLMS+xEPshtHHB+64EnC2ZH38+VZDbCoWki6b8snSqZ9+V2NBaDTI+lSZRTl86tfzqjZ9HcPgMvtcA9yHPOmkET77bG2N0acEXEMZH/tkhZPcnbmOcsQD0LefQERLQ0d9d+KjFUoJXs2t4BTV0l213QvjpkqDzMdz9BuWxubTpKO5Z24WwNhjhA5L3MAB+4zJxh5BJV/rAJNIi4YVJp8S9nh4Jq/Zh5uqHdp6PcqC3NrcaSQwmk3HB8nTlfQZL91yGBYrHNBnHDgxSJ6exG2jr65dVdOpqv25accUID3h8SbfQz4pMrujyNKgaS3IzojTS4/nXrImJSS9UUOScSuX2hAPVG3W44i/fp0adI3z4TwGpUqRXVeWBiTEfosDJZ8vKtfcEr6YLP0wwvk5sOKxTItABwngxUwGaOBH51vF79pt9YlBoqCdy9hIM1JHWBll20XM24Ilg3katzkEJ6nAJ8ZtF5Vaphc0IM40JW2FMhd9O4mec9NZy1UR/tmnIe3UK83dGygpxD2NXckPsBqwUOyFNIgaGSrmswu1DRaKy+yaBnABCkAX06ldTT0LEzbS2f/PVetN9HPz9XxQUaldaElgHU4oDpmh+N3u9q5aoufimeUHzbTxZfJPxF9/l2b8VRvhv2zqL9fsb+jPHrVMAAAAAElFTkSuQmCC";

var SafepackWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBtZW/ixNREMcnm4UQkRgVzs6TQwtttFIQ1Cs8/AEq+BeoIFf5A0QLKxsbESzksPIXgo2FWAgKyt3ZyBWKIBaHB4mih4WiEUzij+z6GX2bzD13N6dyX/jw3sx7M7tvdvIikqM4jgfgDIxDGybgGFTz4gopibYw7INZKMI5f0+r1dpcLpePM/0MNwqFwiM/SQlGYAw+xj1dhJPG/pZMGo3GJoYXZq0OV2EnhGGn05kuFouD0l8j8Bb2VCqVWW9N4w84noVkXmEWv4Ie5S5ch8M2kmPOMFxwJ8x4tlRDFDnjMewisGFKI/PQG1gDT2CdOgL7ljbh34i4NsP7xA5kAbQgSUMzr1LDYWPXvb0bWE/6esr4F7u45V0PLdWMU9Ruty95fdpVs9n0+9SqFkRR9MevSlUqlSLJEL+m3LbQljrNWHG2HuFIxt5r0ivJO+P/DmeN/WFOFK8+ZI4x5h1/m7c3Of5r8RTg/OIWb8u/KXYPmXR5pm1LLZP/U1LnAU1ac8Z6WOptjKS/9GZbybjV2TOa9JYzlph5X7muqcN+OCW9u/mO1kKbvpbSb/qhTmR9KPp7FN9quGx7FAYDLoNP7Nkr5kKYj4IgeMlwHw451w84SL5Xvz4Uk+cMG6VX326sn4w32QHjTB/CkHPri20nz8ScIByaUO/D85Ihkt1kuAfDxv0A1hI/KXkieBXspm5HbU3hqbGndE9afJjm5Kl1Bv0zWyS//zFH3ZLWUUt1Je/NfgJIntVigmdBzQAAAABJRU5ErkJggg==";

var Coin98 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZxSURBVHgBzZh7bBRFGMDncdt79GmxFAocllKBCKhYwCLEpEEMkqCQkCZy2BiqURCEIAaiJfgHITEYBE1EBAJaQCmQkGjAoIjxWSSV4iNIhJZCXxRIW9tre7s74zf7vuvtkWtSYJLNzu48vt9+833ffDsYxSmccwo3CS4PXBgNTmFwqXApGGMlthHHABG4+eCi6M4WARkGQI5iwQyoABo8Dd2uCCgBJyARuUegkCE7ACzYAkN3H8osgsEvKgQIB9PAB1KocD4B5UnQCV/5vqycKeEygvlDCGOKCYabaIG7Vhd3ZNz1Nqse9V57VjGhZxFN3Zc5dntlArkSBrpUZC9pVKn7pvQDzpQyoc/bQjjakBugYxylvm1phR9VuIAx4gZ1+eQLi1UlUgbg+gtxh8u4CYeJqXOrrleQNc5+ZfdTWe/rXXWrn3YBI8SlASly17J+EA5AFAeoHyzTn7WBosKQNU7cmdy1yk2+u30xdaLOLSbRfUMIEsukuQpMjpFd1ypOLTnbBJA2TgcS43RwNT9pME2uJVCXqNmPIYgTbHW0nNpadk20AWq3cYZ1w8H6x5IEO4y7xrgpx9aYCYEJ+QEj6SwE6VHwcipIHM0NINEfY9IOUx8FjXcirswF7YzTYA2NIQAUIZ1bKk4CTEOIWiIxKbmW4h8RGjlre43ZL3zlaNrNhiNbwSpLNTUTel7KmLjo/vHrm40uG9pqy9/kau/byKExbVfEeABgpj05loRKmesFVP2p0HLOIwsJIR0kfcLqUZM2vXL1/LoxoJRHfFkTnmd9XtRcvaQSpOcQT/bm3Cm73r1RU/Y4R+psbToDkLkrDLl6pelJ3FpS9Hd+yZ5j9adehDAS3gzfVMtUZbbS+ddhlJXJIWjugeX6PXtCRUOk5/xSpsrzwbiLmXLzU9ReTzH2HeXMaR6OkJIMmOn6Jhnj+Lp4r8jdzwJAx9DhCyowTdkGnz+upfbDkRINXEGM+Y2PIoib8kGPWQ+oCmdebs7L7Lg2ALDoIAr2lq23pPzCOctsbTqyhSmRBWLX8o1e0ggaymCcFzT+GHqPsb7pnPo3Uk/qKoI8J1qqQzVgYwstLZkxj7lyJfJKbnmZbhds8qVvlxfdl//U7vb643mcyaVg6U2+jOBLWaCRDrm9HMYEVO5pDs6sXOOYaU/7xQ1jetsvH+OGOjXP1h5Y8mDWMjq8Ugk37g7fuDi/YM7na+HFWrNv3XehCsSU2cQjHQjO2rul+cyKGXJv2w5CkZ9Q76HA+Hc2oPDWZSjS9hV3xjzm7pViE0+P1/DnoXmdKN7GTVAbJSlfY+qrJpTlchYpQZjNEJ4v+fOeCeQ+/Ed348lfRSaBiOcC4uocyZexNLdoZ1VL9eJ/QeJQe9PHrTmPflaIktUYdkRye0lxjorkEOZyiDFDgGgWoYX6bin/NQxhjI0gJH1Z6rBZX3Y3nWiQI73ToUcVx/gfmHiovkUl1pi78aP+mQSWMl5NyykuhOewacRUSl1TMGllDrTWsb7OoCc9eBM+pImrXW+EW06v1ITQlGptTsYKELfnHlC40DOBmFRHCc8cWbyuFQLtchj6G5Duy8wtqbp26fgYEJqvyrdWZI8t7/AOmTQH1ukaU/tKMA2sy5u+q6rxzMuLoU8et7IMnjBcuNpY7cG5nXZyZ9sY8QbWjp/3xcdmv6s/vzW6r/PCEZD2oOhDPf5tWY9t2ig81ezTcua1JxX5xn6oZmBH0gk7R2vu1MrCpMDOHTDAorJPvU4oPUs93tMAkwO++hxszplYT1mNPqQB1vgnEHydYLUI+j0R+4HCOQXYsGn7kzN+K4XR9jUjAhlZBmNqEZd7iqz830iBMLZiXxCzSFDUmdlHm8AOFfg2/z+uYIxxBfJEj57sGYJjvJSb+VZUeuTsY2coVvbrGK8yrrrJT7AlkQbbK1GcHB9Z24tzq7G4YtJuK0tx9AO8q0mDSd7UHfEF84Sw9g9JNET//wKRu6XtTQQW12cnlx7egbGnyprQEdfcYd1/TmIBMfW+P3zazv0uXEx4pTjdkVw6oHMHFy3lrHsJGPYUM8q7/mPG/l/2384UTKQaKSVtZ17xJ4eQe5GxcRYWQPdW6SHwNcIzVHTvFCYO8kzj70UJd647VgRDWFQ0MOOwLIzuLpwGZZ4qxjvqvBtnZcKUeuIedTqLcWYmLuEYBA1OERDiUFg27Dyq/A9Wbecx+IcC4wAAAABJRU5ErkJggg==";

var BG$1 = "641b6da0d0d66ace.png";

var AVATAR_HEADER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBrZS7T8JQFMbPrcgrqDAoDhpBXVx8JCxqoo5uxMFFB1JjjLOLI+noppvRRGrCHwBuxkQn46AD6iLxQQmjkoIiUSq93lYgLW1Nm/SXNO39evrdc05PC2AzyGzgx3piQQSYpDpQFGNyRpDqQJjx7NOcKcN2AxLp1wnjEEZs10GM0RiaNDCCAxEz3Yc0Kxu+b7C8RQNDY6qRpx1mEn6H0Z3iYFa1rva8wX/0P02B88ubcRiZXa7sgBVGrxdTY+fLeQps4jlymhYR7OoaCu6qRhv2xeRDyYA3qtICZCZ1SxZcn6p1wDkB071H8vVL5bilzxCtk/IDX8tA6ftO1v4MEaYBozi5CknZlYMFlSFfu4V7noGaWFLpN8Ut8DmG5PuoMdKtweY3E6HH2ZOLXOQsJLjUJTtJFlImqiqIuXID8sXQqyN11qGsP7mNOJJpSPngeCAOQfccVH7y0M7V65pGM5zDJlLjs+U9jd7nmdeNV71lAfCSgMSwdJBlRtKk3unxoLOJJkM6DFJT5MYkc7hEyodCNQ1WsG2wmxj2UBRRmqLIb8kkIqqbjrXEL3z0l3NyyGp+AAAAAElFTkSuQmCC";

var DEX_TOKEN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhLSURBVHgBnVdNbFxXFT73b34cO0zaGqkIqWMMtEDbJMqCJgsaLyLRgpAtWLBASrIrrVDdBRJlk4lAKqpUxRF77CIhBAtiEAsQUp1IQS00gbQIki6qmSRNk4YST+zY4/fuH9+598Xkxy5R3+jovnnz3jvf+c53zrkj6B6P2cluK4yOTMagnvQUd5gtsu2FaPmaILVF9uUW0fNSn1Ej4cR9o435qSnRv5f3iv93w0uTl9sNMtNayf3aUEsZQQJOBVbCSnVBobJYlxRwLdSIopZz3vjDLxxs9j4WgNnOYuvK6XDIKJquS0VaR5ggyc41YYUTnEcAiQ12XgGpAQTuC7jH8yrFzIFJfXjbto0Z2RBA56uIeqi2IJ1o15UkA2MASsGxoQSAWYgAwSwkAEZWAGAMCvc4APAS34XoFVFNvHhQ9O70Je+88MOnr+7wpBZ8IduKFG7gDyKP+eZ0DhMxpu8C10XIqwwx38ffQ35GpediWwu/cOQX5Y6PBDC993LbF+EYXLaT2yjY1bojYoMT8jE5JVc592x8HaurfmMwCUj+DiDtspTHXpqN7Q0BdLuxFSksCCHbIt6MXOaXeX7h/5zwefTZeYTDuO48gyIG4fNK6+AYSGzXhF2YPRZbdwF4ef+FQ4gWzjlyJBsUUuU8Vg6TufwydhRtTE6MyHRHF/I1i/MSwEo4L/m+ii08X5aifekDe4huFeGBJ7ostm5T16kJeTe0poaUVIeADMLU4B86JAkvQjOfWYQEoTXul/TY1+pUWkH/+LOlAj8HFqSmJMagsnk8nwyPWejHL4exzovNns44bAevAlSOHncFmfIdkT/IoDIkSMUktAQA10bHNX35QJPuh1zf+5enUHjy8BIDmICnxBg8MKERwaT3yEpLSkyz7ERnutvqvhkWG8TRwxQYEIr7S+ozBmgVcqEQPUghAWVpYH346Qbt+g5aVDNX8omfDeifbwzwkEZ5KjjOPSIxoCsGRLWmLPq+cMWYvvpumAyhQslvAkwQnc4jnIcEQGRGvKehByTtOtigh5+qryt55Vqk7l9Xya5YEjbrgzgNFsZy4nQwAwDPTPDLoKtWY8hM6hur5V5ua4ka1p2ImW4AYbbhP4FgSJ/8nKJ9Px6mkQdvbx9Xzlr68FIfQRhS0IJwMndI6CWqSg9gMGWW383xIGrrw5Na1eV2y4ql6ge+IWEUmQHWAdZHv1WjJ77bIF2/u3m+9dtlWl0apN+iNyRRDWQCzwMwEHL0nIp1efE7AxUrfoe2zrc9UHpRVZ7IUacUIGe6qejrnTq192ja7HjgIVTNmw1yBZ7nBJtcLXkWcHpjoj5U1Z2CBQO67tvaGd8SXqX8eJQcRm0WSeA10tZPi490zsdXnvsEbZ8aoVO/XKW3/zAgi9r3sKB8ip6YCU6tzFUQUmMJVA5cSz32pWc7AVeV0lA6ph7YSGuSRKCVDy2d+72loWFJo59Xm4JojAj6zJ4afXFfk0Ip6Oo7LjGSOmVlwVUNyiItJcBZR+rxR5+bRsQNBcdSY/xImU2IBCAGS8v9JTr72jU6+7sBDQ83aNsYWrXaHMj4bkPdkwUtXnSpTSfjDmorMJadY+RJ35cFuV6AYILGRYNGUkMaatWKPDrOJYRU0Cp1L56nuR/8hX4+9cGmTDC7x1+5QRdOrVIYoAevweGAjaoVfmBxzZH0rqeB+K3BIGAE4wdME48m5JAS56uRG2PqaIFVii7iXElbHtxYE0vvefrN9/5D3bcXifu0EDXueJRGTlW5XGNQF/RlIQ1/RpthcXzFhv0ekwJZw/3IPwPgzQf3W8Ht2WCS1UkFj1wN0+PfHLnL+ZnZAf3xlfN0rb+I52qYH02seNbhHTyphEilF5PMbbLatnBC95f9PBrGkUCy5ZkBQHXIvuZKEHlLwgBkbKbSHL1vKz3yVG3dcbEU6fiPrtPJX71Dq24J99XSGI+oKKGy2oXKzvMsBwBEHzEmH3pk67ycn9vZR52+GjWcK3CgLFmsFquDLhz7amiSDUTVHKLP7lkf5fT+aUdzU5fotV//jQbxOjFcjQ+vigebz7sk5DNZdA7iK5HOEkK0cwfnxvopmdKoGSB+PgSfopdowzzCOX0qYVZpd6RB7Rf2meT8DQyfP/30XVpauZyqph4bWMFUYAaYsfwMd7WY+mqmPmCTwJKGAg/ze9b76jeeOTWD0nue8RvM0BqsDurraK01j++oX4VxOz4+jC4b6dzJ81SuXsfwQeNzPAMMaThXvga9oLHxdAMUHnRJXVAyuMWKuhPu6JF/75m+DUDnSLd17sLi322BDSToYxAGU6RemYYjteZJDNYorg5QRiUABTIWgC3SAzMAizyCepkrB3lnxy66bAwguN6zp3fvHBvL2/T1sdZ5Yay/FosJTK1ekCgThMbmIJaS1vBoQaXEKm3qDzxuhUHkpk7aAAD+tcjUxFjwvBG0WWwB+Q5FZbanQjFx0/ltAPiYn9ndw/CZwsDopbkgXKLNMghRpDUBUCFtOARAMJDkNe2/Oc8QGhyj0+McbAE4G1TVazRp6if9id6tPjf8YzI5/XrblGZBxdhWQGNQyygM0BwS7bqEFQK6UMlMAfVj+EjohDeFaXOKzUuAeYhANUXPLpcTnTuc38XArUy8/P3xndgbHEWTJm5SyTAxeV+YdzkinXvJxqmCIWpOWUhq51rHLBD26Kd2De3cyPmmDNx6fPuZ19vKyY6JYr8EAxoDhaM1YCCta1jXuELQtmEC7Egb+7EMryKNM50rGzu+ZwA3D66SpYvXJstFv7dBYntYwT+cG6FlAKjpqR+XYq+p5Bmj4onl99fmO72Je/p7/l8UQ8MvZkMJ6gAAAABJRU5ErkJggg==";

var AVATAR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKMSURBVHgBxZfPbxJBFMe/S4CWFlusBz1IXfTSk2A8mZhQ7yZtevWgR0/av8D+CZXEe1v/AIOJF6MxkngXYoxR07JKD+XQQmwLygLje7sLXSJlZ3ALn+Sx7OzsfN+8+bFvNEgihIjRZZksTZYi08lizuMqmUGWJ8uRZTVNq8IPSFgne0pWEWps8LsYFu4x2br4f9ad6Cn3uij8oyhko0EVU8JfcbcTqVH3vJ8TultTc4nzOH2EPbvPEoPsRmeVBFwP1kYgDkdjrXNjRcAJSxFD0i5V0Pq+By0SRvDWNdnXEhQFo+PAJl3uy7wlag20dytofttDi6y9e2CVdQhciGLibkrGkQw5sKo5Y18ZJNgslKiXB5YoC8og4QjPgUQQ9vZ6Kua7L/jzKg9V2vtHqG99QGQqhGByvl8Va2tnBxahgDlZgxmude+bk3WYE7V/6oUaEcyU5xGYiw5qLs0OJKHAzs03+Hr7pVTdlddvEYjPDaqS4mWoQwGOgJtw4PRtPvLwDjzQ2QGlD4U73Cy+HN/G9diTbln64gurTJJY0KtGiGYxrwCz8NPqfX12v/us0a5i+/A5yr9z3bKdwy1MB69AFl6GvAQ9o5D/9Bifo896yuJTSz1DwA6Vaifz416i5dVslYfAgAT1S7967hdmHiFE4kdNo2uXp5egiMFDUICdYg1kYXYVV889gEm9zJVXcNz8gfPhJKKucJfrOSiSZwfeQ2IbZjHmmHrKcKjd4R6SHA9BFva2OA6y1q+wk85Rs8HavnyOh8T6HFsJCf+hSwajI+Nojj8l60GMISnt58T40vIzjERRqB7ThH0082N5chtqR7M+0dgUalQcYd2rfQ2SiJPj+SLsLEqHD8fzvx9Ti+LkrQ9uAAAAAElFTkSuQmCC";

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["Coin98"] = "coin98";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Coin98",
        icon: Coin98,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Trust Wallet",
        icon: TrustWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: MathWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Token Pocket",
        icon: TokenPocket,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Wallet Connect",
        icon: WalletConnect,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: BinanceWallet,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: SafepackWallet,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var Wrap$3 = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  text-align: center;\n  padding: 0 14px;\n  min-width: 303px;\n  ", " {\n    padding: 0 20px 0 27px;\n  }\n"], ["\n  text-align: center;\n  padding: 0 14px;\n  min-width: 303px;\n  ", " {\n    padding: 0 20px 0 27px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Button$3 = styled.button(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.75, theme.colors.black);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow7;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ImgWrap = styled.div(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.95, theme.colors.white);
});
var ConnectModal = function (_a) {
    var texts = _a.texts, login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default.createElement(Modal, { title: texts.title, onDismiss: onDismiss }, connectors === null || connectors === void 0 ? void 0 : connectors.map(function (entry, index) { return (React__default.createElement(Wrap$3, { key: index },
        React__default.createElement(Button$3, { onClick: function () {
                login(entry.connectorId);
                window.localStorage.setItem(connectorLocalStorageKey, entry.connectorId);
                onDismiss();
            } },
            React__default.createElement(Text, { fontWeight: 500, color: "#fff", mr: "16px", fontSize: "15px" }, entry.title),
            React__default.createElement(ImgWrap, null,
                React__default.createElement("img", { src: entry.icon }))))); })));
};
var templateObject_1$j, templateObject_2$f, templateObject_3$c;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Tooltip$1 = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var left = _a.left;
    return left || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, textCopied = _a.textCopied, children = _a.children, icon = _a.icon, left = _a.left, props = __rest(_a, ["toCopy", "textCopied", "children", "icon", "left"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        icon || React__default.createElement(Icon$c, { width: "20px", color: "#47DA3B", ml: "4px" }),
        React__default.createElement(Tooltip$1, { isTooltipDisplayed: isTooltipDisplayed, left: left }, textCopied)));
};
var templateObject_1$i, templateObject_2$e;

var AccountModal = function (_a) {
    var texts = _a.texts, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default.createElement(Modal, { title: texts.title, onDismiss: onDismiss },
        React__default.createElement(ModalWrap, null,
            React__default.createElement(Text, { bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } },
                React__default.createElement(AccountWrap, { as: "div" },
                    React__default.createElement(AccountText, { fontWeight: 500, color: "text" }, account))),
            React__default.createElement(Flex, { mb: "32px" },
                React__default.createElement(LinkExternal, { color: "#47DA3B", small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, texts.view),
                React__default.createElement(CopyText, { color: "#47DA3B" },
                    React__default.createElement(CopyToClipboard, { toCopy: account, textCopied: texts.copied }, texts.copy))),
            React__default.createElement(Flex, { justifyContent: "center" },
                React__default.createElement(Button$5, { mt: "60px", scale: "md", width: "100%", variant: "green", onClick: function () {
                        logout();
                        window.localStorage.removeItem(connectorLocalStorageKey);
                        onDismiss();
                    } }, texts.button)))));
};
var ModalWrap = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  padding: 0 20px 20px;\n"], ["\n  padding: 0 20px 20px;\n"])));
var AccountWrap = styled(Button$3)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  padding: 17px 15px;\n  width: 100%;\n  ", " {\n    padding: 17px 20px;\n  }\n"], ["\n  padding: 17px 15px;\n  width: 100%;\n  ", " {\n    padding: 17px 20px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var CopyText = styled(Text)(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var AccountText = styled(Text)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  font-size: 10px;\n  ", " {\n    font-size: 11px;\n  }\n"], ["\n  font-size: 10px;\n  ", " {\n    font-size: 11px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$h, templateObject_2$d, templateObject_3$b, templateObject_4$8;

var useWalletModal = function (login, logout, textsAccount, textsConnect, account) {
    var pageModal = function () {
        return React__default.createElement(AccountModal, { texts: textsAccount, account: account || "", logout: logout });
    };
    var onPresentConnectModal = useModal(React__default.createElement(ConnectModal, { texts: textsConnect, login: login }))[0];
    var onPresentAccountModal = useModal(pageModal())[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var ellipsis = function (value, count) {
    if (count === void 0) { count = 4; }
    if (value && value.length && value.length > 10) {
        return value.substr(0, count) + " ... " + value.substr(value.length - count, value.length);
    }
    return value;
};

var DropdownMenu = function (_a) {
    var linkExternalWalletModal = _a.linkExternalWalletModal, account = _a.account, isOpen = _a.isOpen, handleAddToken = _a.handleAddToken, logout = _a.logout, balance = _a.balance, texts = _a.texts;
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default.createElement(Wrapper$3, { open: isOpen },
        React__default.createElement(ConnectLine, null,
            React__default.createElement(TitleStyle, null, texts.connected),
            React__default.createElement(ContentLine, null,
                React__default.createElement("img", { src: AVATAR, alt: "avatar" }),
                ellipsis(account, 5),
                React__default.createElement(Buttons, null,
                    React__default.createElement(ActionButton, { as: "a", href: linkExternalWalletModal, target: "_blank" },
                        React__default.createElement(Icon$f, null)),
                    React__default.createElement(ActionButton, { onClick: function () {
                            if (navigator.clipboard) {
                                navigator.clipboard.writeText(account);
                                setIsTooltipDisplayed(true);
                                setTimeout(function () {
                                    setIsTooltipDisplayed(false);
                                }, 1000);
                            }
                        } },
                        React__default.createElement(Icon$3, null))),
                React__default.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, texts.copied))),
        React__default.createElement(BalanceLine, null,
            React__default.createElement(TitleStyle, null, texts.balance),
            React__default.createElement(ContentLine, null,
                React__default.createElement("img", { src: DEX_TOKEN, alt: "token" }),
                balance || 0,
                React__default.createElement(Buttons, null,
                    React__default.createElement(AddTokenButton, { onClick: handleAddToken }, texts.addToken)))),
        React__default.createElement(DisconnectLine, null,
            React__default.createElement(DisconnectButton, { onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                } },
                React__default.createElement(Icon, null),
                texts.disconnect))));
};
var Wrapper$3 = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: absolute;\n  min-width: 264px;\n  top: 0;\n  right: -25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  color: ", ";\n\n  &:after {\n    position: absolute;\n    content: \"\";\n    display: none;\n    height: 35px;\n    width: 35px;\n    background: ", ";\n    transform: rotate(45deg);\n    top: -8px;\n    right: 33px;\n  }\n  ", " {\n    min-width: 350px;\n    right: 30px;\n    top: ", ";\n    &:after {\n      display: block;\n    }\n  }\n"], ["\n  position: absolute;\n  min-width: 264px;\n  top: 0;\n  right: -25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  color: ", ";\n\n  &:after {\n    position: absolute;\n    content: \"\";\n    display: none;\n    height: 35px;\n    width: 35px;\n    background: ", ";\n    transform: rotate(45deg);\n    top: -8px;\n    right: 33px;\n  }\n  ", " {\n    min-width: 350px;\n    right: 30px;\n    top: ", ";\n    &:after {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow6;
}, function (_a) {
    var open = _a.open;
    return (open ? 1 : 0);
}, function (_a) {
    var open = _a.open;
    return (open ? "all" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var open = _a.open;
    return (open ? "calc(100% + 17px)" : "calc(100% + 40px)");
});
var ConnectLine = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  padding: 23px 20px 0;\n  ", " {\n    padding: 23px 36px 0;\n  }\n"], ["\n  padding: 23px 20px 0;\n  ", " {\n    padding: 23px 36px 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var BalanceLine = styled(ConnectLine)(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  padding-bottom: 20px;\n  position: relative;\n\n  &:after {\n    width: 100%;\n    height: 1px;\n    display: block;\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    opacity: 0.1;\n  }\n"], ["\n  padding-bottom: 20px;\n  position: relative;\n\n  &:after {\n    width: 100%;\n    height: 1px;\n    display: block;\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    opacity: 0.1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var DisconnectLine = styled(ConnectLine)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  padding-bottom: 24px;\n  text-align: center;\n\n  ", " {\n    text-align: left;\n  }\n"], ["\n  padding-bottom: 24px;\n  text-align: center;\n\n  ", " {\n    text-align: left;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var TitleStyle = styled(Text)(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  margin-bottom: 23px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: left;\n  opacity: 0.8;\n"], ["\n  margin-bottom: 23px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: left;\n  opacity: 0.8;\n"])));
var ContentLine = styled(Flex)(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 16px;\n  position: relative;\n  align-items: center;\n  font-weight: bold;\n  & img {\n    margin-right: 10px;\n    width: 28px;\n    height: 28px;\n  }\n  ", " {\n    font-size: 16px;\n    line-height: 19px;\n    & img {\n      margin-right: 10px;\n      width: 32px;\n      height: 32px;\n    }\n  }\n"], ["\n  font-size: 14px;\n  line-height: 16px;\n  position: relative;\n  align-items: center;\n  font-weight: bold;\n  & img {\n    margin-right: 10px;\n    width: 28px;\n    height: 28px;\n  }\n  ", " {\n    font-size: 16px;\n    line-height: 19px;\n    & img {\n      margin-right: 10px;\n      width: 32px;\n      height: 32px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var DisconnectButton = styled(Button$5)(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 500;\n  text-align: center;\n  color: ", ";\n  box-shadow: ", ";\n\n  & svg {\n    margin-right: 8px;\n  }\n"], ["\n  background: ", ";\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 500;\n  text-align: center;\n  color: ", ";\n  box-shadow: ", ";\n\n  & svg {\n    margin-right: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.purple;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
});
var Buttons = styled(Flex)(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n  max-width: 66px;\n  width: 100%;\n  margin-left: auto;\n  justify-content: space-between;\n  align-items: center;\n  ", " {\n    max-width: 86px;\n  }\n"], ["\n  max-width: 66px;\n  width: 100%;\n  margin-left: auto;\n  justify-content: space-between;\n  align-items: center;\n  ", " {\n    max-width: 86px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var AddTokenButton = styled.button(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n  width: 100%;\n  height: 38px;\n  padding: 12px 5px;\n  border-radius: 12px;\n  background: ", ";\n  font-weight: 500;\n\n  color: ", ";\n\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 10px;\n  line-height: 12px;\n  ", " {\n    font-size: 12px;\n    line-height: 14px;\n  }\n"], ["\n  width: 100%;\n  height: 38px;\n  padding: 12px 5px;\n  border-radius: 12px;\n  background: ", ";\n  font-weight: 500;\n\n  color: ", ";\n\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 10px;\n  line-height: 12px;\n  ", " {\n    font-size: 12px;\n    line-height: 14px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ActionButton = styled.button(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n  padding: 10px;\n\n  border-radius: 8px;\n  background: ", ";\n  cursor: pointer;\n  & svg {\n    width: 16px;\n    height: 16px;\n  }\n  ", " {\n    max-width: 38px;\n    max-height: 38px;\n    border-radius: 12px;\n    & svg {\n      width: 22px;\n      height: 22px;\n    }\n  }\n"], ["\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n  padding: 10px;\n\n  border-radius: 8px;\n  background: ", ";\n  cursor: pointer;\n  & svg {\n    width: 16px;\n    height: 16px;\n  }\n  ", " {\n    max-width: 38px;\n    max-height: 38px;\n    border-radius: 12px;\n    & svg {\n      width: 22px;\n      height: 22px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Tooltip = styled.div(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var left = _a.left;
    return left || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
});
var templateObject_1$g, templateObject_2$c, templateObject_3$a, templateObject_4$7, templateObject_5$6, templateObject_6$3, templateObject_7$3, templateObject_8$3, templateObject_9$3, templateObject_10$2, templateObject_11$2;

var Account = function (_a) {
    var text = _a.text, account = _a.account, login = _a.login, logout = _a.logout, textsAccount = _a.textsAccount, textsConnect = _a.textsConnect, handleAddToken = _a.handleAddToken, linkExternalWalletModal = _a.linkExternalWalletModal, textDropdown = _a.textDropdown, balance = _a.balance;
    var onPresentConnectModal = useWalletModal(login, logout, textsAccount, textsConnect, account).onPresentConnectModal;
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var refSelect = useRef(null);
    var handleOpenDropdown = function () {
        setOpen(!isOpen);
    };
    var handleClickOutside = useCallback(function (e) {
        if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
            setOpen(false);
        }
    }, [setOpen]);
    useEffect(function () {
        if (document && refSelect && refSelect.current) {
            document.addEventListener("mousedown", handleClickOutside, false);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside, false);
        };
    }, [refSelect, handleClickOutside]);
    return (React__default.createElement(React__default.Fragment, null, account ? (React__default.createElement(WrapperAccountBlock, { ref: refSelect },
        React__default.createElement(AccountBlock, { as: "button", onClick: handleOpenDropdown },
            ellipsis(account, 5),
            React__default.createElement(BalanceBlock, null,
                React__default.createElement(Icon$8, null),
                React__default.createElement(BalanceText, null, (balance || 0) + " DESU")),
            React__default.createElement(Avatar, null,
                React__default.createElement("img", { src: AVATAR_HEADER }))),
        React__default.createElement(DropdownMenu, { linkExternalWalletModal: linkExternalWalletModal, logout: logout, account: account, handleAddToken: handleAddToken, balance: balance, isOpen: isOpen, texts: textDropdown }))) : (React__default.createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentConnectModal();
        }, className: "notAuth" },
        React__default.createElement(Avatar, { className: "notAuth" }, text)))));
};
var AccountBlock = styled(Text)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: end;\n  justify-content: center;\n  font-weight: normal;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  &.notAuth {\n    align-items: center;\n    flex-direction: row;\n    background: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n  min-height: 40px;\n  min-width: 220px;\n  font-size: 15px;\n  line-height: 19px;\n  padding: 0 36px 0 10px;\n  border-radius: 12px;\n  order: 0;\n  ", " {\n    margin-right: 34px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: end;\n  justify-content: center;\n  font-weight: normal;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  &.notAuth {\n    align-items: center;\n    flex-direction: row;\n    background: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n  min-height: 40px;\n  min-width: 220px;\n  font-size: 15px;\n  line-height: 19px;\n  padding: 0 36px 0 10px;\n  border-radius: 12px;\n  order: 0;\n  ", " {\n    margin-right: 34px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.purple;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Avatar = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: -8px;\n  background: ", ";\n  top: 50%;\n  transform: translateY(-50%);\n\n  & img {\n    width: 20px;\n    height: 20px;\n  }\n\n  &.notAuth {\n    width: calc(100% - 4px);\n    right: 0;\n  }\n\n  ", " {\n    right: -10px;\n\n    & img {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"], ["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: -8px;\n  background: ", ";\n  top: 50%;\n  transform: translateY(-50%);\n\n  & img {\n    width: 20px;\n    height: 20px;\n  }\n\n  &.notAuth {\n    width: calc(100% - 4px);\n    right: 0;\n  }\n\n  ", " {\n    right: -10px;\n\n    & img {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var BalanceBlock = styled(Flex)(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  align-items: center;\n  margin-top: 1px;\n  justify-content: flex-end;\n  width: 100%;\n"], ["\n  align-items: center;\n  margin-top: 1px;\n  justify-content: flex-end;\n  width: 100%;\n"])));
var BalanceText = styled(Text)(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  margin-left: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n"], ["\n  margin-left: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n"])));
var WrapperAccountBlock = styled.div(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n"], ["\n  position: relative;\n  z-index: 2;\n"])));
var templateObject_1$f, templateObject_2$b, templateObject_3$9, templateObject_4$6, templateObject_5$5;

var MenuLink = function (_a) {
    var name = _a.name, url = _a.url, size = _a.size, onClick = _a.onClick;
    var isHttpLink = url === null || url === void 0 ? void 0 : url.startsWith("http");
    var Item = function () { return React__default.createElement(LinkItem, { size: size }, name); };
    return (React__default.createElement(React__default.Fragment, null,
        isHttpLink && (React__default.createElement("a", { href: url, target: "_blank" },
            React__default.createElement(Item, null))),
        !isHttpLink && (React__default.createElement(StyledLink, { exact: true, onClick: onClick, to: url },
            React__default.createElement(Item, null)))));
};
var StyledLink = styled(NavLink)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject([""], [""])));
var LinkItem = styled(Text)(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  color: ", ";\n  margin: 37px 0 0;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    background: hsla(0, 0%, 100%, 0.1);\n  }\n  ", " {\n    margin: 0;\n    padding: 30px 25px;\n  }\n"], ["\n  position: relative;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  color: ", ";\n  margin: 37px 0 0;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    background: hsla(0, 0%, 100%, 0.1);\n  }\n  ", " {\n    margin: 0;\n    padding: 30px 25px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGrey;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$e, templateObject_2$a;

var Burger = function (_a) {
    var onClick = _a.onClick;
    return (React__default.createElement(BurgerWrap, { onClick: onClick },
        React__default.createElement(BurgerLine, null)));
};
var BurgerWrap = styled.button(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: block;\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  height: 20px;\n  cursor: pointer;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  height: 20px;\n  cursor: pointer;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var BurgerLine = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  height: 2px;\n  width: 19px;\n  background: ", ";\n  position: relative;\n  &:after,\n  &:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    background: ", ";\n    width: 100%;\n    height: 100%;\n  }\n  &:after {\n    top: 8px;\n  }\n  &:before {\n    bottom: 8px;\n  }\n"], ["\n  height: 2px;\n  width: 19px;\n  background: ", ";\n  position: relative;\n  &:after,\n  &:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    background: ", ";\n    width: 100%;\n    height: 100%;\n  }\n  &:after {\n    top: 8px;\n  }\n  &:before {\n    bottom: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var templateObject_1$d, templateObject_2$9;

var DropdownLayout = function (_a) {
    var children = _a.children, open = _a.open, setOpen = _a.setOpen, icon = _a.icon;
    var refSelect = useRef(null);
    var handleClickOutside = useCallback(function (e) {
        if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
            setOpen(false);
        }
    }, [setOpen]);
    useEffect(function () {
        if (document && refSelect && refSelect.current) {
            document.addEventListener("mouseup", handleClickOutside, false);
        }
        return function () {
            document.removeEventListener("mouseup", handleClickOutside, false);
        };
    }, [refSelect, handleClickOutside]);
    var handleClickOpen = function () {
        setOpen(!open);
    };
    return (React__default.createElement(Block$1, { ref: refSelect },
        React__default.createElement(Button$2, { onClick: handleClickOpen }, icon),
        React__default.createElement(Dropdown, { className: open ? "open" : "" }, children)));
};
var Block$1 = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Button$2 = styled.button(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n"])));
var Dropdown = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: -1;\n  opacity: 0;\n  overflow-y: auto;\n  pointer-events: none;\n  max-height: 260px;\n  &.open {\n    transition: 0.3s;\n    z-index: 10;\n    opacity: 1;\n    margin-top: 4px;\n    pointer-events: all;\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: -1;\n  opacity: 0;\n  overflow-y: auto;\n  pointer-events: none;\n  max-height: 260px;\n  &.open {\n    transition: 0.3s;\n    z-index: 10;\n    opacity: 1;\n    margin-top: 4px;\n    pointer-events: all;\n  }\n"])));
var templateObject_1$c, templateObject_2$8, templateObject_3$8;

var Languages = function (_a) {
    var currentLang = _a.currentLang, setLang = _a.setLang, langs = _a.langs;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var handleSelect = function (lang) {
        setLang(lang);
        setOpen(false);
    };
    return (React__default.createElement(Wrap$2, null,
        React__default.createElement(DropdownLayout, { open: open, setOpen: setOpen, icon: React__default.createElement(Button$1, { open: open },
                React__default.createElement(ButtonText, null, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) },
            React__default.createElement(SelectList, null, langs.map(function (lang) {
                var _a;
                return (React__default.createElement(Select, { onClick: function () { return handleSelect(lang); }, key: lang.code }, (_a = lang.code) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
            })))));
};
var Wrap$2 = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  min-width: 40px;\n"], ["\n  min-width: 40px;\n"])));
var SelectList = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  padding: 12px 0;\n  background: ", ";\n  box-shadow: ", ";\n  border: none;\n  border-radius: 8px;\n"], ["\n  padding: 12px 0;\n  background: ", ";\n  box-shadow: ", ";\n  border: none;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
});
var Select = styled.button(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  width: 100%;\n  outline: none;\n  margin-bottom: 7px;\n  background: none;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  font-weight: normal;\n  letter-spacing: 0.08em;\n  color: ", ";\n  cursor: pointer;\n  border: none;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  width: 100%;\n  outline: none;\n  margin-bottom: 7px;\n  background: none;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  font-weight: normal;\n  letter-spacing: 0.08em;\n  color: ", ";\n  cursor: pointer;\n  border: none;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var Button$1 = styled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  padding: 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  width: 100%;\n"], ["\n  padding: 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ButtonText = styled(Text)(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  padding: 13px 6px;\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  pointer-events: none;\n  color: ", ";\n  font-weight: bold;\n  line-height: 14px;\n"], ["\n  padding: 13px 6px;\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  pointer-events: none;\n  color: ", ";\n  font-weight: bold;\n  line-height: 14px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.purple;
});
var templateObject_1$b, templateObject_2$7, templateObject_3$7, templateObject_4$5, templateObject_5$4;

var Disclaimer = function (_a) {
    var text = _a.text;
    var _b = useState(true), open = _b[0], setOpen = _b[1];
    return (React__default.createElement(Block, { open: open },
        React__default.createElement(StyledText$1, null, text),
        React__default.createElement(Button, { onClick: function () { return setOpen(false); } },
            React__default.createElement(Icon$g, { role: "button" }))));
};
var Block = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  width: 100%;\n  padding: ", ";\n  background-color: ", ";\n  z-index: 1;\n  overflow: hidden;\n  max-height: ", ";\n  ", " {\n    padding: ", ";\n  }\n  & svg {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    flex-shrink: 0;\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  width: 100%;\n  padding: ", ";\n  background-color: ", ";\n  z-index: 1;\n  overflow: hidden;\n  max-height: ", ";\n  ", " {\n    padding: ", ";\n  }\n  & svg {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    flex-shrink: 0;\n    cursor: pointer;\n  }\n"])), function (_a) {
    var open = _a.open;
    return (!open ? 0 : "13px 46px 13px 23px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var open = _a.open;
    return (!open ? 0 : 100);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var open = _a.open;
    return (!open ? 0 : "13px 46px");
});
var StyledText$1 = styled(Text)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  max-width: 1200px;\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: left;\n  & br {\n    display: block;\n  }\n  ", " {\n    text-align: center;\n    font-size: 15px;\n    color: #fff;\n    font-weight: 500;\n    line-height: 1.5;\n    & br {\n      display: none;\n    }\n  }\n"], ["\n  max-width: 1200px;\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: left;\n  & br {\n    display: block;\n  }\n  ", " {\n    text-align: center;\n    font-size: 15px;\n    color: #fff;\n    font-weight: 500;\n    line-height: 1.5;\n    & br {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Button = styled.button(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  padding: 0;\n"], ["\n  background: none;\n  border: none;\n  padding: 0;\n"])));
var templateObject_1$a, templateObject_2$6, templateObject_3$6;

function Logo(props) {
    return (React.createElement("svg", { width: "120", height: "15", viewBox: "0 0 120 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M15.71 13.88V0.207153H27.0626V3.74966H20.5369V5.44841H25.7989V8.7216H20.5369V10.3375H27.3112V13.88H15.71Z", fill: "white" }),
        React.createElement("path", { d: "M43.4486 13.88H37.6273L35.8249 10.3375L34.1676 13.88H28.7192L33.2561 7.06429L28.8849 0.207153H34.5819L36.1771 3.62536L37.793 0.207153H43.055L38.7045 6.93999L43.4486 13.88Z", fill: "white" }),
        React.createElement("path", { d: "M51.3231 0C53.9058 0 56.005 0.649114 57.6209 1.94734L55.6736 5.05481C55.0244 4.59905 54.3408 4.23306 53.6226 3.95684C52.9183 3.68062 52.1518 3.54251 51.3231 3.54251C50.7845 3.54251 50.4047 3.60466 50.1837 3.72896C49.9765 3.83944 49.873 3.99136 49.873 4.18472C49.873 4.35045 49.9973 4.47475 50.2459 4.55761C50.5083 4.64048 50.8328 4.73025 51.2195 4.82693L53.1047 5.26197C54.4996 5.57962 55.5493 6.0492 56.2536 6.67069C56.9718 7.29218 57.3309 8.15537 57.3309 9.26024C57.3309 10.3651 57.0616 11.2766 56.5229 11.9948C55.9843 12.6992 55.2523 13.224 54.327 13.5693C53.4155 13.9145 52.3797 14.0872 51.2195 14.0872C50.3494 14.0872 49.4794 14.0112 48.6093 13.8593C47.7392 13.6936 46.9312 13.4588 46.1854 13.1549C45.4396 12.8373 44.7974 12.4575 44.2588 12.0155L46.1647 8.84591C46.5652 9.16356 47.0486 9.4536 47.6149 9.716C48.1811 9.9646 48.7681 10.1649 49.3758 10.3168C49.9835 10.4687 50.5497 10.5447 51.0745 10.5447C51.5717 10.5447 51.9101 10.4894 52.0896 10.3789C52.283 10.2546 52.3797 10.1027 52.3797 9.92317C52.3797 9.72981 52.2968 9.5848 52.1311 9.48812C51.9791 9.39145 51.696 9.29477 51.2817 9.19809L49.21 8.74233C48.4781 8.5766 47.7806 8.35562 47.1177 8.07941C46.4548 7.80319 45.9161 7.40267 45.5018 6.87785C45.0875 6.33923 44.8803 5.61415 44.8803 4.70263C44.8803 3.76348 45.1289 2.94173 45.6261 2.23737C46.1371 1.53302 46.8691 0.987482 47.822 0.600776C48.7888 0.200259 49.9558 0 51.3231 0Z", fill: "white" }),
        React.createElement("path", { d: "M67.0559 0.207153C68.9066 0.207153 70.3222 0.621482 71.3028 1.45014C72.2972 2.2788 72.7944 3.47344 72.7944 5.03408C72.7944 6.58091 72.2972 7.77555 71.3028 8.61802C70.3222 9.44668 68.9066 9.86101 67.0559 9.86101H64.6321V13.88H59.8052V0.207153H67.0559ZM66.2687 6.4428C66.7935 6.4428 67.2079 6.33231 67.5117 6.11133C67.8155 5.87655 67.9675 5.51746 67.9675 5.03408C67.9675 4.5507 67.8155 4.19852 67.5117 3.97754C67.2079 3.74276 66.7935 3.62536 66.2687 3.62536H64.6321V6.4428H66.2687Z", fill: "white" }),
        React.createElement("path", { d: "M81.9934 0C84.1755 0 85.8743 0.614587 87.0897 1.84376C88.3188 3.07294 88.9334 4.80621 88.9334 7.04358C88.9334 9.28096 88.3188 11.0142 87.0897 12.2434C85.8743 13.4726 84.1755 14.0872 81.9934 14.0872C80.5571 14.0872 79.3141 13.811 78.2645 13.2585C77.2286 12.7061 76.4276 11.905 75.8614 10.8554C75.3089 9.80577 75.0327 8.53517 75.0327 7.04358C75.0327 5.552 75.3089 4.28139 75.8614 3.23176C76.4276 2.18213 77.2286 1.38109 78.2645 0.828656C79.3141 0.276219 80.5571 0 81.9934 0ZM81.9934 3.62537C81.2891 3.62537 80.7712 3.90159 80.4397 4.45403C80.122 4.99266 79.9632 5.85584 79.9632 7.04358C79.9632 8.23133 80.122 9.10142 80.4397 9.65385C80.7712 10.1925 81.2891 10.4618 81.9934 10.4618C82.6978 10.4618 83.2088 10.1925 83.5264 9.65385C83.8441 9.10142 84.0029 8.23133 84.0029 7.04358C84.0029 5.85584 83.8441 4.99266 83.5264 4.45403C83.2088 3.90159 82.6978 3.62537 81.9934 3.62537Z", fill: "white" }),
        React.createElement("path", { d: "M99.0127 0.207153C100.794 0.207153 102.161 0.60767 103.114 1.40871C104.067 2.19593 104.544 3.24556 104.544 4.5576C104.544 6.61543 103.687 7.97581 101.975 8.63874L105.31 13.88H100.069L97.6454 9.3431H96.3195V13.88H91.5962V0.207153H99.0127ZM98.184 6.17348C98.695 6.17348 99.0748 6.08371 99.3234 5.90417C99.5858 5.71082 99.717 5.37935 99.717 4.90978C99.717 4.45402 99.5858 4.12946 99.3234 3.93611C99.0748 3.74276 98.695 3.64608 98.184 3.64608H96.3195V6.17348H98.184Z", fill: "white" }),
        React.createElement("path", { d: "M120 0.207153V3.74966H115.732V13.88H110.905V3.74966H106.617V0.207153H120Z", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.5598 1.98864C10.4687 0.800902 8.85282 0.207031 6.71212 0.207031H0V13.8799H6.71212C8.85282 13.8799 10.4687 13.286 11.5598 12.0983C12.6508 10.8967 13.1964 9.21177 13.1964 7.04345C13.1964 4.86132 12.6508 3.17639 11.5598 1.98864ZM9.49484 7.42882L4.15879 11.2904L5.41433 7.88313L2.58936 6.52021L7.92541 2.65859L6.66987 6.0659L9.49484 7.42882Z", fill: "white" })));
}

var Header = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, links = _a.links, textConnect = _a.textConnect, textsAccount = _a.textsAccount, textsConnect = _a.textsConnect, linkLogo = _a.linkLogo, balance = _a.balance, handleAddToken = _a.handleAddToken, disclaimer = _a.disclaimer, disclaimerText = _a.disclaimerText, linkExternalWalletModal = _a.linkExternalWalletModal, textDropdown = _a.textDropdown;
    var _b = useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var refSelect = useRef(null);
    var handleClickOutside = useCallback(function (e) {
        if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
            setOpenMenu(false);
        }
    }, [setOpenMenu]);
    useEffect(function () {
        if (document && refSelect && refSelect.current) {
            document.addEventListener("mousedown", handleClickOutside, false);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside, false);
        };
    }, [refSelect, handleClickOutside]);
    var handleLink = function () {
        setOpenMenu(false);
    };
    var AccountBlock = function () { return (React__default.createElement(Account, { text: textConnect || "Connect", account: account, login: login, logout: logout, textsAccount: textsAccount, textsConnect: textsConnect, balance: balance, handleAddToken: handleAddToken, linkExternalWalletModal: linkExternalWalletModal, textDropdown: textDropdown })); };
    return (React__default.createElement(HeaderWrap, { ref: refSelect },
        disclaimer ? React__default.createElement(Disclaimer, { text: disclaimerText || "" }) : null,
        React__default.createElement(Content, null,
            React__default.createElement(Line, null,
                React__default.createElement(LogoWrap, { href: linkLogo },
                    React__default.createElement(Logo, null)),
                React__default.createElement(Nav, { className: openMenu ? "open" : "" },
                    React__default.createElement(AccountMob, null,
                        React__default.createElement(AccountBlock, null),
                        React__default.createElement(CloseButton, { onClick: function () { return setOpenMenu(!openMenu); } },
                            React__default.createElement(CloseLine, null))),
                    links.map(function (item, i) { return (React__default.createElement(MenuLink, { key: i, size: "md", name: item.name, url: item.url, onClick: handleLink })); }),
                    React__default.createElement(LanguageBlockMob, null,
                        React__default.createElement(Languages, { currentLang: currentLang, setLang: setLang, langs: langs }))),
                React__default.createElement(RightContent, null,
                    React__default.createElement(AccountDesk, null,
                        React__default.createElement(AccountBlock, null)),
                    React__default.createElement(LanguageBlockDesk, null,
                        React__default.createElement(Languages, { currentLang: currentLang, setLang: setLang, langs: langs })),
                    React__default.createElement(Burger, { onClick: function () { return setOpenMenu(!openMenu); } }))))));
};
var HeaderWrap = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  & svg {\n    flex-shrink: 0;\n  }\n"], ["\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  & svg {\n    flex-shrink: 0;\n  }\n"])));
var Content = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: ", ";\n"], ["\n  background: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow3;
});
var Line = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  padding: 15px 15px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  ", " {\n    padding: 0 15px;\n  }\n"], ["\n  padding: 15px 15px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  ", " {\n    padding: 0 15px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var AccountDesk = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var AccountMob = styled.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  display: block;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Nav = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  position: fixed;\n  min-height: 100vh;\n  height: 100vh;\n  right: -100%;\n  width: 100vw;\n  padding: 20px 30px 20px;\n  top: 45px;\n  transition: 0.3s ease-in-out;\n  background: rgba(38, 38, 45, 0.7);\n  backdrop-filter: blur(25px);\n  z-index: 1;\n  &.open {\n    right: 0%;\n    pointer-events: all;\n  }\n  ", " {\n    flex-direction: row;\n    position: relative;\n    background: transparent;\n    padding: 0;\n    height: auto;\n    min-height: 0;\n    left: 0;\n    top: 0;\n    z-index: 3;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  position: fixed;\n  min-height: 100vh;\n  height: 100vh;\n  right: -100%;\n  width: 100vw;\n  padding: 20px 30px 20px;\n  top: 45px;\n  transition: 0.3s ease-in-out;\n  background: rgba(38, 38, 45, 0.7);\n  backdrop-filter: blur(25px);\n  z-index: 1;\n  &.open {\n    right: 0%;\n    pointer-events: all;\n  }\n  ", " {\n    flex-direction: row;\n    position: relative;\n    background: transparent;\n    padding: 0;\n    height: auto;\n    min-height: 0;\n    left: 0;\n    top: 0;\n    z-index: 3;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var RightContent = styled.div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n"])));
var LanguageBlockMob = styled.div(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  margin-top: 37px;\n  ", " {\n    display: none;\n  }\n"], ["\n  margin-top: 37px;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var LanguageBlockDesk = styled.div(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-left: 11px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-left: 11px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var LogoWrap = styled.a(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  // & img {\n  //   width: 79px;\n  //   height: 34px;\n  // }\n  // & svg {\n  //   width: 133px;\n  //   ", " {\n  //     width: 153px;\n  //   }\n  // }\n  ", " {\n    padding-right: 80px;\n    & img {\n      width: auto;\n      height: auto;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  // & img {\n  //   width: 79px;\n  //   height: 34px;\n  // }\n  // & svg {\n  //   width: 133px;\n  //   ", " {\n  //     width: 153px;\n  //   }\n  // }\n  ", " {\n    padding-right: 80px;\n    & img {\n      width: auto;\n      height: auto;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var CloseButton = styled.button(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  height: 50px;\n  width: 50px;\n  top: 15px;\n  right: -10px;\n  position: absolute;\n  border: none;\n  background: none;\n  outline: none;\n"], ["\n  height: 50px;\n  width: 50px;\n  top: 15px;\n  right: -10px;\n  position: absolute;\n  border: none;\n  background: none;\n  outline: none;\n"])));
var CloseLine = styled.div(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  width: 20px;\n  height: 2px;\n  transform: rotate(45deg);\n  position: relative;\n  background: ", ";\n  &:after {\n    display: block;\n    position: absolute;\n    content: \"\";\n    width: 20px;\n    height: 2px;\n    transform: rotate(-90deg);\n    background: ", ";\n  }\n"], ["\n  width: 20px;\n  height: 2px;\n  transform: rotate(45deg);\n  position: relative;\n  background: ", ";\n  &:after {\n    display: block;\n    position: absolute;\n    content: \"\";\n    width: 20px;\n    height: 2px;\n    transform: rotate(-90deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var templateObject_1$9, templateObject_2$5, templateObject_3$5, templateObject_4$4, templateObject_5$3, templateObject_6$2, templateObject_7$2, templateObject_8$2, templateObject_9$2, templateObject_10$1, templateObject_11$1, templateObject_12$1;

var types = {
    COLLECTION: "collection",
    SUCCESS: "success",
    WINNING: "winning",
    INFO: "info",
    ERROR: "error",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.COLLECTION] = variants.COLLECTION,
    _a[types.SUCCESS] = variants.SUCCESS,
    _a[types.WINNING] = variants.WINNING,
    _a[types.INFO] = variants.INFO,
    _a[types.ERROR] = variants.ERROR,
    _a);
var StyledToast = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 600px;\n  }\n"], ["\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 600px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, propsWrapperAlert = _a.propsWrapperAlert, props = __rest(_a, ["toast", "onRemove", "style", "ttl", "propsWrapperAlert"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, icon = toast.icon;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default.createElement(Alert, { title: title, icon: icon, variant: alertTypeMap[type], onClick: handleRemove, propsWrapper: propsWrapperAlert }, description))));
};
var templateObject_1$8;

var StyledToastContainer = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n  ", "\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n  ", "\n"])), space);
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b; _a.stackSpacing; var propsWrapper = _a.propsWrapper, propsWrapperAlert = _a.propsWrapperAlert;
    return (React__default.createElement(StyledToastContainer, __assign({}, propsWrapper),
        React__default.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            // const zIndex = (ZINDEX - index).toString();
            // const top = TOP_POSITION + index * stackSpacing;
            return (React__default.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, 
                // style={{ top: `${top}px`, zIndex }}
                style: { position: "static" }, propsWrapperAlert: propsWrapperAlert }));
        }))));
};
var templateObject_1$7;

var CardIndicator = function (_a) {
    var data = _a.data, canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards, id = _a.id;
    return (React__default.createElement("div", { style: { position: "relative" } },
        React__default.createElement(Card$2, { id: id },
            React__default.createElement(TextTop$1, null, data.text),
            React__default.createElement(TextBottom, null, data.value)),
        " ",
        React__default.createElement(Claimed$1, { canClaim: canClaim, disabledTopCards: !!disabledTopCards, id: id })));
};
var Card$2 = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  overflow: hidden;\n  height: 100%;\n"], ["\n  position: relative;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  overflow: hidden;\n  height: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var TextTop$1 = styled(Text)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"], ["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient;
});
var TextBottom = styled(Text)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  padding: 10px 24px 20px;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n"], ["\n  padding: 10px 24px 20px;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n"])));
var Claimed$1 = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.grey);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? 1 : 0);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "auto" : "none");
}, function (_a) {
    var id = _a.id;
    return "-moz-element(#" + id + ")";
});
var templateObject_1$6, templateObject_2$4, templateObject_3$4, templateObject_4$3;

var CardTimer = function (_a) {
    var data = _a.data, canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    var progress = 100 - (data.timeSecond * 100) / data.totalSeconds;
    var Progress = function () { return (React__default.createElement(ProgressTrack$1, null,
        React__default.createElement(ProgressBar$1, { progress: progress }))); };
    return (React__default.createElement("div", { style: { position: "relative" } },
        React__default.createElement(Wrapper$2, { canClaim: canClaim, disabledTopCards: !!disabledTopCards, id: "CardTimer" },
            React__default.createElement(Inner, { className: "card-inner" },
                React__default.createElement(CardFront, { canClaim: canClaim, disabledTopCards: !!disabledTopCards },
                    React__default.createElement(TextTop, null, data.textBack),
                    React__default.createElement(BlockBottom, null,
                        React__default.createElement(Text, { fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "400" }, data.textStage),
                        React__default.createElement(Progress, null))),
                React__default.createElement(CardBack, { canClaim: canClaim, disabledTopCards: !!disabledTopCards },
                    React__default.createElement(TextTop, null, data.textFront),
                    React__default.createElement(BlockBottom, null,
                        React__default.createElement(TimerSimple, { time: data.timeSecond, texts: data.textsTime }),
                        React__default.createElement(Progress, null))))),
        React__default.createElement(Claimed, { canClaim: canClaim, disabledTopCards: !!disabledTopCards })));
};
var CardFront = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  transition: 0;\n  overflow: hidden;\n  backface-visibility: ", ";\n"], ["\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  transition: 0;\n  overflow: hidden;\n  backface-visibility: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "" : "hidden");
});
var CardBack = styled(CardFront)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  transform: rotateY(180deg) translateX(50%);\n"], ["\n  transform: rotateY(180deg) translateX(50%);\n"])));
var Wrapper$2 = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  position: relative;\n  perspective: 1000px;\n  min-height: 97px;\n  width: 100%;\n  border-radius: 20px;\n  &:hover {\n    & .card-inner {\n      transform: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  perspective: 1000px;\n  min-height: 97px;\n  width: 100%;\n  border-radius: 20px;\n  &:hover {\n    & .card-inner {\n      transform: ", ";\n    }\n  }\n"])), function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "none" : "rotateY(180deg)");
});
var Inner = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n"])));
var TextTop = styled(Text)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"], ["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient;
});
var BlockBottom = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  padding: 10px 24px;\n"], ["\n  padding: 10px 24px;\n"])));
var ProgressTrack$1 = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  height: 2px;\n  width: 100%;\n  margin-top: 8px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 6px;\n"], ["\n  height: 2px;\n  width: 100%;\n  margin-top: 8px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.9, theme.colors.grey2);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
});
var ProgressBar$1 = styled.div(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  height: 100%;\n  width: ", ";\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: inherit;\n"], ["\n  height: 100%;\n  width: ", ";\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: inherit;\n"])), function (_a) {
    var progress = _a.progress;
    return progress + "%";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient;
});
var Claimed = styled.div(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? 1 : 0);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "auto" : "none");
}, "-moz-element(#CardTimer)");
var templateObject_1$5, templateObject_2$3, templateObject_3$3, templateObject_4$2, templateObject_5$2, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9$1;

var ClaimTokens = function (_a) {
    var data = _a.data, texts = _a.texts, handleClaimTokens = _a.handleClaimTokens, disabledButton = _a.disabledButton, isLoading = _a.isLoading, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    var _b = useState(0), widthProgress = _b[0], setWidthProgress = _b[1];
    var numberConverter = function (string) { return +string.replace(/[^\d.]/g, ""); };
    useEffect(function () {
        setWidthProgress((numberConverter(data.totalRaised) * 100) / numberConverter(data.total));
    }, [data.totalRaised, data.total]);
    return (React__default.createElement(Wrap$1, { style: { position: "relative" } },
        React__default.createElement(Card$1, { disabledCard: disabledCardClaimTokens, id: "ClaimTokens" },
            React__default.createElement(Row, null,
                React__default.createElement(StyledTitle$1, null, texts.title),
                React__default.createElement(StyledButton$2, { variant: "violet", onClick: handleClaimTokens, disabled: disabledButton, spin: isLoading }, texts.button)),
            React__default.createElement(ProgressWrap, null,
                React__default.createElement(ProgressTrack, null,
                    React__default.createElement(ProgressBar, { widthProgress: widthProgress || 0 },
                        React__default.createElement(ProgressThumb, null,
                            React__default.createElement(Icon$5, null)),
                        React__default.createElement(TextHoverBlock, { widthProgress: widthProgress || 0 },
                            React__default.createElement(StyledText, null, texts.totalRaised),
                            React__default.createElement(StyledText, { color: "grey3" }, data.totalRaised))))),
            React__default.createElement(Texts, null,
                React__default.createElement(TextBlock, null,
                    React__default.createElement(StyledText, null,
                        texts.total,
                        " ",
                        data.total),
                    data.left && (React__default.createElement(StyledText, { color: "grey3" },
                        texts.left,
                        " ",
                        data.left))))),
        React__default.createElement(Blur$1, { disabledCard: disabledCardClaimTokens })));
};
var Wrap$1 = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", " {\n    grid-column: 1/4;\n  }\n"], ["\n  ", " {\n    grid-column: 1/4;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Blur$1 = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? 1 : 0);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? "auto" : "none");
}, "-moz-element(#ClaimTokens)");
var Card$1 = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n  padding: 35px 25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  min-height: 250px;\n"], ["\n  position: relative;\n  padding: 35px 25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  min-height: 250px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var StyledTitle$1 = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 22px;\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: bold;\n  ", " {\n    width: auto;\n    margin-bottom: 0px;\n    font-size: 24px;\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 22px;\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: bold;\n  ", " {\n    width: auto;\n    margin-bottom: 0px;\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Row = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  ", " {\n    flex-wrap: nowrap;\n    margin-bottom: 47px;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  ", " {\n    flex-wrap: nowrap;\n    margin-bottom: 47px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrap = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 7px 9px;\n  margin-bottom: 10px;\n  box-shadow: ", ";\n  border-radius: 10px;\n  background: ", ";\n"], ["\n  padding: 7px 9px;\n  margin-bottom: 10px;\n  box-shadow: ", ";\n  border-radius: 10px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.65, theme.colors.grey2);
});
var ProgressTrack = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  height: 16px;\n  background: ", ";\n  border-radius: 6px;\n"], ["\n  width: 100%;\n  height: 16px;\n  background: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient2;
});
var ProgressBar = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n  width: ", ";\n  height: inherit;\n  background: ", ";\n  border-radius: 6px;\n  transition: 0.3s;\n  box-shadow: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n  width: ", ";\n  height: inherit;\n  background: ", ";\n  border-radius: 6px;\n  transition: 0.3s;\n  box-shadow: ", ";\n"])), function (_a) {
    var widthProgress = _a.widthProgress;
    return (widthProgress <= 2 ? "flex-start" : "flex-end");
}, function (_a) {
    var widthProgress = _a.widthProgress;
    return widthProgress + "%" || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow5;
});
var ProgressThumb = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 25px;\n  height: 25px;\n  background: ", ";\n  border-radius: 50%;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 44px;\n    height: 44px;\n    background: ", ";\n    border-radius: 50%;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 25px;\n  height: 25px;\n  background: ", ";\n  border-radius: 50%;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 44px;\n    height: 44px;\n    background: ", ";\n    border-radius: 50%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.9, theme.colors.violet);
});
var Texts = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n"])));
var TextBlock = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  padding: 0 10px;\n"], ["\n  padding: 0 10px;\n"])));
var TextHoverBlock = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  top: 30px;\n  right: ", ";\n  min-width: 130px;\n  padding: 3px 3px;\n  background: ", ";\n  border-radius: 10px;\n  transition: 0.3s;\n  opacity: 0;\n  text-align: ", ";\n  ", ":hover & {\n    transition: 0.3s;\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 30px;\n  right: ", ";\n  min-width: 130px;\n  padding: 3px 3px;\n  background: ", ";\n  border-radius: 10px;\n  transition: 0.3s;\n  opacity: 0;\n  text-align: ", ";\n  ", ":hover & {\n    transition: 0.3s;\n    opacity: 1;\n  }\n"])), function (_a) {
    var widthProgress = _a.widthProgress;
    return (widthProgress >= 50 ? 0 : "-130px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var widthProgress = _a.widthProgress;
    return (widthProgress >= 50 ? "right" : "left");
}, ProgressBar);
var StyledText = styled(Text)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 10px;\n  line-height: 19px;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n  font-weight: 400;\n"], ["\n  font-size: 10px;\n  line-height: 19px;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n  font-weight: 400;\n"])));
var StyledButton$2 = styled(Button$5)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 100%;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-left: 43px;\n  }\n  &:disabled {\n    opacity: 1;\n    background: ", ";\n  }\n"], ["\n  width: 100%;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-left: 43px;\n  }\n  &:disabled {\n    opacity: 1;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.85, theme.colors.white);
});
var templateObject_1$4, templateObject_2$2, templateObject_3$2, templateObject_4$1, templateObject_5$1, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;

var BG = "39970d524fe99c4a.png";

var Platform = function (_a) {
    var link = _a.link, texts = _a.texts, images = _a.images;
    return (React__default.createElement("div", { style: { position: "relative" } },
        React__default.createElement(Card, { id: "TakeGift", src: images || BG },
            React__default.createElement(StyledTitle, null, texts.title),
            React__default.createElement(StyledButton$1, { variant: "violet", as: "a", href: link, target: "_blank" }, texts.button))));
};
var Card = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  padding: 37px 24px;\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: 20px;\n  height: 100%;\n  min-height: 250px;\n  & img {\n    display: block;\n    margin: 0 auto 6px;\n  }\n"], ["\n  position: relative;\n  display: block;\n  padding: 37px 24px;\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: 20px;\n  height: 100%;\n  min-height: 250px;\n  & img {\n    display: block;\n    margin: 0 auto 6px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat left center /cover";
});
var StyledTitle = styled(Text)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin-bottom: 33px;\n  text-align: center;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 700;\n  ", " {\n    font-size: 24px;\n  }\n"], ["\n  margin-bottom: 33px;\n  text-align: center;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 700;\n  ", " {\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledButton$1 = styled(Button$5)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"], ["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient3;
});
var templateObject_1$3, templateObject_2$1, templateObject_3$1;

var TokenOnPoolz = function (_a) {
    var images = _a.images, texts = _a.texts, linkClaimTokens = _a.linkClaimTokens, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    return (React__default.createElement(Wrap, { style: { position: "relative" } },
        React__default.createElement(Wrapper$1, { id: "TokenOnPoolz", src: images || BG },
            React__default.createElement(CardStyle, null,
                React__default.createElement(StyledTitle$1, { size: "xl" }, texts.title),
                React__default.createElement(Text, { margin: "42px 0" }, texts.description),
                React__default.createElement(StyledButton, { as: "a", margin: "0 auto", minWidth: "204px", variant: "violet", href: linkClaimTokens || "#" }, texts.button))),
        React__default.createElement(Blur, { disabledCard: disabledCardClaimTokens })));
};
var Wrap = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  ", " {\n    grid-column: 1/4;\n  }\n"], ["\n  ", " {\n    grid-column: 1/4;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Blur = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? 1 : 0);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? "auto" : "none");
}, "-moz-element(#TokenOnPoolz)");
var CardStyle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  padding: 20px 50px 21px;\n  height: 100%;\n"], ["\n  text-align: center;\n  padding: 20px 50px 21px;\n  height: 100%;\n"])));
var Wrapper$1 = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  box-shadow: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 20px;\n  min-height: 250px;\n"], ["\n  position: relative;\n  box-shadow: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 20px;\n  min-height: 250px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat left center /cover";
});
var StyledButton = styled(Button$5)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"], ["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient3;
});
var templateObject_1$2, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var VestingWidget = function (_a) {
    var dataClaimTokens = _a.dataClaimTokens, textsClaimTokens = _a.textsClaimTokens, handleClaimTokens = _a.handleClaimTokens, dataCardsIndicators = _a.dataCardsIndicators, textsPlatform = _a.textsPlatform, linkPlatform = _a.linkPlatform, imagesBg = _a.imagesBg, dataTimer = _a.dataTimer, canClaim = _a.canClaim, textsPoolz = _a.textsPoolz, linkClaimTokens = _a.linkClaimTokens, disabledButtonClaimTokens = _a.disabledButtonClaimTokens, isLoadingButtonClaimTokens = _a.isLoadingButtonClaimTokens, disabledTopCards = _a.disabledTopCards, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    return (React__default.createElement(Wrapper, null,
        React__default.createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[0], id: "CardIndicator-1" }),
        React__default.createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[1], id: "CardIndicator-2" }),
        React__default.createElement(CardTimer, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataTimer }),
        React__default.createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[2], id: "CardIndicator-3" }),
        !canClaim ? (React__default.createElement(TokenOnPoolz, { texts: textsPoolz, images: imagesBg, linkClaimTokens: linkClaimTokens, disabledCardClaimTokens: disabledCardClaimTokens })) : (React__default.createElement(ClaimTokens, { data: dataClaimTokens, texts: textsClaimTokens, handleClaimTokens: handleClaimTokens, disabledButton: disabledButtonClaimTokens, isLoading: isLoadingButtonClaimTokens, disabledCardClaimTokens: disabledCardClaimTokens })),
        React__default.createElement(Platform, { texts: textsPlatform, link: linkPlatform, images: imagesBg })));
};
var Wrapper = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px 20px;\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px 20px;\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n    background-color: #1F262F;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n    background-color: #1F262F;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"])), BG$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.violet;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.violet;
});
var templateObject_1;

export { Alert, AlertBlurCustom, Icon$1 as ArrowBorder, Icon$4 as ArrowDownRightIcon, Icon$e as ArrowLeft, Icon$7 as ArrowRight, BaseLayout, Box, Button$5 as Button, Icon$9 as CercleIcon, Icon$5 as CheckIcon, Icon$h as CloseIcon, Icon$g as CloseIcon2, Icon$2 as CloseRed, Icon$a as CompleteIcon, ConnectorNames, Icon$c as CopyIcon, Icon$3 as CopyIcon2, Icon as DisconnectIcon, Icon$6 as ErrorIcon, Icon$b as EyeClose, Flex, Icon$d as GreenArrow, Header, Heading$1 as Heading, IconButton, Input, Link, LinkExternal, Loader, LoaderSmall, Modal, ModalProvider, Icon$f as OpenNewIcon, ResetCSS, Skeleton, Svg, Text, TimerSimple, ToastContainer, VestingWidget, Icon$8 as WalletIcon, variants as alertVariants, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTooltip, useWalletModal };
