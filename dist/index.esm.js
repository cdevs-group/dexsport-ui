import styled, { keyframes, css, ThemeProvider, createGlobalStyle } from 'styled-components';
import { background, border, layout, position, space, flexbox, variant as variant$1, typography } from 'styled-system';
import React, { isValidElement, cloneElement, Children, useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
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

var Box = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$E;

var Flex = styled(Box)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$D;

var LoaderSmall = function () {
    return (React.createElement(LoaderBlock$1, null,
        React.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.5818 7.25455C38.7515 3.08485 33.0788 1 25.5636 1H2V49H25.5636C33.0788 49 38.7515 46.9152 42.5818 42.7455C46.4121 38.5273 48.3273 32.6121 48.3273 25C48.3273 17.3394 46.4121 11.4242 42.5818 7.25455ZM35.3338 26.837L16.6011 40.3936L21.0088 28.4319L11.0914 23.6472L29.8242 10.0906L25.4165 22.0523L35.3338 26.837Z", fill: "white" }))));
};
var flip$1 = keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "], ["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "])));
var LoaderBlock$1 = styled.div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  & svg {\n    max-width: 30px;\n    max-height: 30px;\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  & svg {\n    max-width: 30px;\n    max-height: 30px;\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"])), flip$1);
var templateObject_1$C, templateObject_2$n;

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};

var rotate = keyframes(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
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
var templateObject_1$B, templateObject_2$m, templateObject_3$g;

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React.createElement("g", { filter: props.fill || "url(#filter0_dAddIcon)" },
            React.createElement("path", { d: "M21 16V26", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement("path", { d: "M26 21L16 21", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dAddIcon", x: "11", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        " "));
};

var Icon$X = function (props) {
    return (React.createElement("svg", __assign({ width: 42, height: 42, viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { x: 6, y: 6, width: 30, height: 30, rx: 7, fill: props.fill || "rgb(58,58,64)" }),
        React.createElement("g", { filter: "url(#prefix__filter0_dCloseIcon)", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" },
            React.createElement("path", { d: "M17.465 17.465l7.07 7.07M24.537 17.465l-7.071 7.07" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "prefix__filter0_dCloseIcon", x: 12.465, y: 14.464, width: 17.073, height: 17.071, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$W = function (props) {
    return (React.createElement("svg", { width: "42", height: "38", viewBox: "0 0 42 38", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { filter: "url(#filter0_d)" },
            React.createElement("path", { d: "M17.5352 15.4644L24.6062 22.5354", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement("path", { d: "M24.6074 15.4644L17.5364 22.5354", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "12.5352", y: "12.4644", width: "17.073", height: "17.0711", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$V = function () {
    return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M4.46484 4.46484L11.5359 11.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("path", { d: "M11.5371 4.46484L4.46604 11.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11 11L19.25 2.75V9.16667V2.75H12.8333", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.25 2.75H4.58333C3.57042 2.75 2.75 3.57042 2.75 4.58333V17.4167C2.75 18.4296 3.57042 19.25 4.58333 19.25H17.4167C18.4296 19.25 19.25 18.4296 19.25 17.4167V13.75", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { filter: "url(#filter7837483784)" },
            React.createElement("path", { d: "M11.5858 14.6568L5.92893 8.99998M5.92893 8.99998L11.5858 3.34312M5.92893 8.99998H20.0711", stroke: props.fill || "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter7837483784", x: "0.515625", y: "0.34314", width: "24.5563", height: "21.3137", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ width: "29", height: "29", viewBox: "0 0 29 29" }, props),
        React.createElement("rect", { width: "28.0333", height: "29", rx: "7", fill: props.fill || "url(#paint7447834)" }),
        React.createElement("path", { d: "M14.1042 6.76672L8.94336 11.6768L10.8579 13.4983L14.1042 10.4097L17.3506 13.4983L19.2651 11.6768L14.1042 6.76672Z", fill: "white" }),
        React.createElement("path", { d: "M14.1028 23.3718L19.2637 18.4617L17.3492 16.6402L14.1028 19.7289L10.8564 16.6402L8.94192 18.4617L14.1028 23.3718Z", fill: "white" }),
        React.createElement("rect", { x: "12.1797", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 12.1797 15.0173)", fill: "white" }),
        React.createElement("rect", { x: "18.5605", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 18.5605 15.0173)", fill: "white" }),
        React.createElement("rect", { x: "5.80078", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 5.80078 15.0173)", fill: "white" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint7447834", x1: "14.0167", y1: "-6.76667", x2: "14.0167", y2: "34.3167", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FFC700" }),
                React.createElement("stop", { offset: "1", stopColor: "#FF8A00" })))));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ width: "50", height: "50", viewBox: "0 0 50 50" }, props),
        React.createElement("rect", { width: "50", height: "50", rx: "12", fill: props.fill || "white", fillOpacity: "0.15" }),
        React.createElement("mask", { id: "path-2-inside-1", fill: "white" },
            React.createElement("rect", { x: "14", y: "24", width: "6", height: "12", rx: "1" })),
        React.createElement("rect", { x: "14", y: "24", width: "6", height: "12", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-2-inside-1)" }),
        React.createElement("mask", { id: "path-3-inside-2", fill: "white" },
            React.createElement("rect", { x: "22", y: "14", width: "6", height: "22", rx: "1" })),
        React.createElement("rect", { x: "22", y: "14", width: "6", height: "22", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-3-inside-2)" }),
        React.createElement("mask", { id: "path-4-inside-3", fill: "white" },
            React.createElement("rect", { x: "30", y: "19", width: "6", height: "17", rx: "1" })),
        React.createElement("rect", { x: "30", y: "19", width: "6", height: "17", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-4-inside-3)" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ width: "50", height: "50", viewBox: "0 0 50 50" }, props),
        React.createElement("rect", { width: "50", height: "50", rx: "12", fill: props.fill || "white", fillOpacity: "0.15" }),
        React.createElement("g", { filter: "url(#fil44444)" },
            React.createElement("path", { d: "M16 25.5C16 30.7467 20.2533 35 25.5 35C30.7467 35 35 30.7467 35 25.5C35 20.2533 30.7467 16 25.5 16C23.4503 16 21.5521 16.6492 20 17.7531", stroke: "#F3F3F3", fill: "none", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("g", { filter: "url(#filter1_d)" },
            React.createElement("path", { d: "M23 27.5L25 24.5H29", stroke: "#F3F3F3", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "fil44444", x: "3", y: "4", width: "37", height: "37", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter1_d", x: "10", y: "12.5", width: "24.0001", height: "21.0001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, { width: "18", height: "18", viewBox: "0 0 18 18" },
        React.createElement("path", __assign({ d: "M7.58579 14.6571L1.92893 9.00022M1.92893 9.00022L7.58579 3.34337M1.92893 9.00022L16.0711 9.00022", stroke: "url(#paint0_linearzaq)", strokeWidth: "2", strokeLinecap: "round" }, props)),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linearzaq", x1: "4.33309", y1: "13.6671", x2: "12.5355", y2: "5.46469", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React.createElement("g", { filter: "url(#filter0_d111SearchIcon)" },
            React.createElement("circle", { fill: props.fill || "rgba(0,0,0,0)", cx: "20.5", cy: "20.5", r: "4.6", stroke: props.color || "white", strokeWidth: "1.8" }),
            React.createElement("path", { d: "M24 24L26 26", stroke: props.color || "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d111SearchIcon", x: "11", y: "13", width: "19.8996", height: "19.9001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear111", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, props),
        React.createElement("path", { opacity: "0.78", fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 5.5C9.2 7.54345 7.54345 9.2 5.5 9.2C3.45655 9.2 1.8 7.54345 1.8 5.5C1.8 3.45655 3.45655 1.8 5.5 1.8C7.54345 1.8 9.2 3.45655 9.2 5.5ZM8.70057 9.97336C7.79896 10.6196 6.69391 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.69391 10.6196 7.79896 9.97336 8.70057L11.6364 10.3636C11.9879 10.7151 11.9879 11.2849 11.6364 11.6364C11.2849 11.9879 10.7151 11.9879 10.3636 11.6364L8.70057 9.97336Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M16 18H27", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("g", { filter: "url(#filter1_d)" },
            React.createElement("path", { d: "M18 22L25 22", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("g", { filter: "url(#filter2_d)" },
            React.createElement("path", { d: "M19 26H24", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "11.0996", y: "15.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter1_d", x: "13.0996", y: "19.1001", width: "16.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter2_d", x: "14.0996", y: "23.1001", width: "14.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { fill: props.fill || "#4BE43E", x: "6", y: "6", width: "30", height: "30", rx: "7" }),
        React.createElement("g", { filter: "url(#filter0_d)" },
            React.createElement("mask", { id: "path-2-inside-1234", fill: "white" },
                React.createElement("rect", { x: "15", y: "15", width: "6", height: "6", rx: "1" })),
            React.createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "15", y: "15", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-2-inside-1234)" })),
        React.createElement("g", { filter: "url(#filter12121_d)" },
            React.createElement("mask", { id: "path-3-inside-23562", fill: "white" },
                React.createElement("rect", { x: "22", y: "15", width: "6", height: "6", rx: "1" })),
            React.createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "22", y: "15", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-3-inside-23562)" })),
        React.createElement("g", { filter: "url(#filter2_d)" },
            React.createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "22.8", y: "22.8", width: "4.4", height: "4.4", rx: "2.2", stroke: "white", strokeWidth: "1.6" })),
        React.createElement("g", { filter: "url(#filter333_d)" },
            React.createElement("mask", { id: "path-5-inside-32", fill: "white" },
                React.createElement("rect", { x: "15", y: "22", width: "6", height: "6", rx: "1" })),
            React.createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "15", y: "22", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-5-inside-32)" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "11", y: "13", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter12121_d", x: "18", y: "13", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter2_d", x: "18", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter333_d", x: "11", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React.createElement("g", { filter: props.fill || "url(#filter0_dEyeOpen)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.1163 23.9792C23.3638 23.7881 22 22.3033 22 20.5C22 18.6969 23.3634 17.2123 25.1155 17.0209C23.9439 16.3642 22.6032 16 21.205 16L20.7955 16C17.7282 16 14.9377 17.7528 13.6016 20.5002C14.9377 23.2476 17.7282 25.0005 20.7955 25.0005H21.205C22.6035 25.0005 23.9445 24.6361 25.1163 23.9792ZM11.5899 20.0862C11.5288 20.2206 11.4999 20.3615 11.5 20.5001C11.4999 20.6388 11.5287 20.7798 11.5899 20.9143L11.6918 21.1385C13.3145 24.7085 16.874 27.0005 20.7955 27.0005H21.205C25.1265 27.0005 28.686 24.7085 30.3087 21.1385L30.4106 20.9143C30.4717 20.7798 30.5006 20.6389 30.5005 20.5002C30.5006 20.3616 30.4717 20.2207 30.4106 20.0862L30.3087 19.862C28.686 16.292 25.1265 14 21.205 14H20.7955C16.874 14 13.3145 16.292 11.6918 19.862L11.5899 20.0862Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dEyeOpen", x: "7.5", y: "12", width: "27.0005", height: "21.0005", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$I = function (props) {
    return (React.createElement("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("rect", { width: "30", height: "30", rx: "7", fill: "white", fillOpacity: "0.15" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.1163 17.9792C17.3638 17.7881 16 16.3033 16 14.5C16 12.6969 17.3634 11.2123 19.1155 11.0209C17.9439 10.3642 16.6032 10 15.205 10L14.7955 10C11.7282 10 8.93771 11.7528 7.60158 14.5002C8.93771 17.2476 11.7282 19.0005 14.7955 19.0005H15.205C16.6035 19.0005 17.9445 18.6361 19.1163 17.9792ZM5.58988 14.0862C5.52878 14.2206 5.49991 14.3615 5.5 14.5001C5.49986 14.6388 5.52873 14.7798 5.58988 14.9143L5.6918 15.1385C7.3145 18.7085 10.874 21.0005 14.7955 21.0005H15.205C19.1265 21.0005 22.686 18.7085 24.3087 15.1385L24.4106 14.9143C24.4717 14.7798 24.5006 14.6389 24.5005 14.5002C24.5006 14.3616 24.4717 14.2207 24.4106 14.0862L24.3087 13.862C22.686 10.292 19.1265 8 15.205 8H14.7955C10.874 8 7.3145 10.292 5.6918 13.862L5.58988 14.0862Z", fill: "white" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React.createElement("g", { filter: "url(#filter110_d112EyeClose)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0864 19.5899C12.5892 19.3613 13.1821 19.5837 13.4106 20.0864L13.5125 20.3107C14.8107 23.1666 17.6583 25.0002 20.7955 25.0002H21.205C24.3422 25.0002 27.1898 23.1666 28.488 20.3107L28.5899 20.0864C28.8184 19.5837 29.4113 19.3613 29.914 19.5899C30.4168 19.8184 30.6391 20.4113 30.4106 20.914L30.3087 21.1383C28.686 24.7082 25.1265 27.0002 21.205 27.0002H20.7955C16.874 27.0002 13.3145 24.7082 11.6918 21.1383L11.5899 20.914C11.3613 20.4113 11.5837 19.8184 12.0864 19.5899Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter110_d112EyeClose", x: "7.5", y: "17.5", width: "27.0005", height: "15.5002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear112", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30", color: "none" }, props),
        React.createElement("rect", { width: "30", height: "30", rx: "7", fill: "white", fillOpacity: "0.15" }),
        React.createElement("path", { d: "M6 12.4706L7.00285 13.5324C11.3437 18.1286 18.6563 18.1286 22.9971 13.5324L24 12.4706", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("path", { d: "M8.64683 15.647L7.05859 17.2353", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("path", { d: "M21.8825 15.647L23.4707 17.2353", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("path", { d: "M15 16.9999L15 19.9999", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React.createElement("g", { filter: "url(#filter0_dArrowIcon)" },
            React.createElement("path", { d: "M19 16H27M27 16V24M27 16L17 26", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dArrowIcon", x: "12", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        " "));
};

var Icon$E = function (props) {
    return (React.createElement("svg", __assign({ width: "7", height: "10", viewBox: "0 0 7 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1 9L5 5L1 1", stroke: "#A3A3A3", strokeWidth: "1.8" })));
};

var Icon$D = function (props) {
    return (React.createElement("svg", __assign({ width: "29", height: "82", viewBox: "0 0 20 82", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M3.33975 75.2265L12.9199 81.6133C13.809 82.206 15 81.5686 15 80.5V2.33333C15 0.823494 13.391 -0.141886 12.0588 0.568627L4.76471 4.45882C1.83193 6.02297 0 9.07619 0 12.4V68.9861C0 71.4938 1.25326 73.8355 3.33975 75.2265Z", fill: props.fill || "#2E2E35" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42  42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React.createElement("g", { filter: "url(#filter0_d65345)" },
            React.createElement("path", { fill: props.fill || "rgba(0,0,0,0)", d: "M26.3958 17.9206L26.3959 17.9204C26.5706 17.7463 26.6685 17.5097 26.6679 17.2631L26.3958 17.9206ZM26.3958 17.9206L18.7389 25.5774M26.3958 17.9206L18.7389 25.5774M18.7389 25.5774L16.7621 26.2376L17.42 24.2638L25.0797 16.6071C25.0797 16.6071 25.0797 16.6071 25.0797 16.607C25.4436 16.244 26.0329 16.2446 26.396 16.6084C26.5694 16.7822 26.6672 17.0175 26.6679 17.263L18.7389 25.5774ZM15.5906 28.0001C15.6541 28 15.7171 27.9898 15.7774 27.9699L15.0304 27.2224C14.9273 27.532 15.0947 27.8667 15.4043 27.9698C15.4644 27.9898 15.5273 28 15.5906 28.0001ZM25.7382 14.85C25.0978 14.8482 24.4834 15.1028 24.032 15.5571C24.0319 15.5571 24.0319 15.5572 24.0318 15.5573L16.2486 23.3398L16.2482 23.3402C16.1674 23.4216 16.1065 23.5206 16.07 23.6293L16.07 23.6295L14.8881 27.175L14.8881 27.175C14.7588 27.5632 14.9687 27.9828 15.357 28.1121L25.7382 14.85Z", stroke: "white", strokeWidth: "0.3" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d65345", x: "10.7002", y: "12.7", width: "21.6001", height: "21.6001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React.createElement("g", { filter: "url(#filter134231)" },
            React.createElement("path", { d: "M16 17H27", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("g", { filter: "url(#filter1_d)" },
            React.createElement("path", { d: "M16 21L27 21", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("g", { filter: "url(#filter56543)" },
            React.createElement("path", { d: "M16 25L27 25", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter134231", x: "11.0996", y: "14.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter1_d", x: "11.0996", y: "18.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter56543", x: "11.0996", y: "22.1001", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$A = function (props) {
    return (React.createElement("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M15 20L20 25L27 16", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "10", y: "13", width: "22", height: "19.5082", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.604167 0 0 0 0 0.29 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FFEA2C" }),
                React.createElement("stop", { offset: "1", stopColor: "#FFB72C" })))));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30", color: "none" }, props),
        React.createElement("rect", { width: "30", height: "30", rx: "7", fill: props.fill || "white", fillOpacity: "0.15" }),
        React.createElement("path", { d: "M13.3102 8.0011C13.4534 8.0011 13.5934 8.04357 13.7125 8.12313C13.8316 8.20269 13.9244 8.31578 13.9792 8.44808C14.034 8.58039 14.0483 8.72598 14.0204 8.86644C13.9925 9.0069 13.9235 9.13591 13.8222 9.23718C13.7209 9.33844 13.5919 9.4074 13.4514 9.43534C13.311 9.46328 13.1654 9.44894 13.0331 9.39414C12.9007 9.33933 12.7876 9.24653 12.7081 9.12745C12.6285 9.00838 12.586 8.86839 12.586 8.72518C12.586 8.53314 12.6623 8.34897 12.7981 8.21318C12.9339 8.07739 13.1181 8.0011 13.3102 8.0011ZM8.24121 13.0696C8.24121 13.2129 8.28368 13.3529 8.36325 13.4719C8.44282 13.591 8.55591 13.6838 8.68823 13.7386C8.82055 13.7934 8.96615 13.8078 9.10662 13.7798C9.24709 13.7519 9.37612 13.6829 9.47739 13.5816C9.57866 13.4804 9.64763 13.3514 9.67557 13.2109C9.70351 13.0705 9.68917 12.9249 9.63436 12.7926C9.57956 12.6602 9.48674 12.5472 9.36766 12.4676C9.24857 12.388 9.10857 12.3456 8.96535 12.3456C8.7733 12.3456 8.58911 12.4219 8.45331 12.5576C8.3175 12.6934 8.24121 12.8776 8.24121 13.0696ZM9.84035 10.3242C9.84035 10.4674 9.88282 10.6074 9.96239 10.7265C10.042 10.8455 10.1551 10.9383 10.2874 10.9931C10.4197 11.0479 10.5653 11.0623 10.7058 11.0343C10.8462 11.0064 10.9753 10.9374 11.0765 10.8362C11.1778 10.7349 11.2468 10.6059 11.2747 10.4654C11.3026 10.325 11.2883 10.1794 11.2335 10.0471C11.1787 9.91478 11.0859 9.8017 10.9668 9.72213C10.8477 9.64257 10.7077 9.60011 10.5645 9.60011C10.3724 9.60011 10.1882 9.67639 10.0524 9.81218C9.91664 9.94797 9.84035 10.1321 9.84035 10.3242Z", fill: "white" }),
        React.createElement("g", { filter: "url(#filter5674)" },
            React.createElement("path", { d: "M16.6237 9C19.1545 9.75321 21 12.0977 21 14.8731C21 18.2569 18.2569 21 14.8731 21C12.0977 21 9.75321 19.1545 9 16.6237", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter5674", x: "4.09961", y: "6.09973", width: "21.8002", height: "21.8002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$y = function (props) {
    return (React.createElement("svg", { viewBox: "0 0 26 24", width: "26", height: "24", fill: "none" },
        React.createElement("g", { filter: "url(#filter989823)" },
            React.createElement("path", { d: "M13 15.5L15 12.5H19", stroke: props.stroke || "#F3F3F3", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("circle", { cx: "15.5", cy: "13.5", r: "9.5", stroke: props.stroke || "#F3F3F3", strokeWidth: "2" }),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter989823", x: "0", y: "0.5", width: "24.0001", height: "21.0001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$x = function (props) {
    return (React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M8 13.1683V7.83167C8 7.0405 8.87525 6.56266 9.54076 6.99049L13.6915 9.65882C14.3038 10.0525 14.3038 10.9475 13.6915 11.3412L9.54076 14.0095C8.87525 14.4373 8 13.9595 8 13.1683Z", fill: props.fill || "#4BE43E" }),
        React.createElement("circle", { cx: "10.5", cy: "10.5", r: "9.5", stroke: props.stroke || "#4BE43E", strokeWidth: "2" })));
};

var Icon$w = function (props) {
    return (React.createElement("svg", { width: "55", height: "55", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "27.5", cy: "27.5", r: "25", fill: props.fill || "#1C1C22", stroke: props.fill || "#26262D", strokeWidth: "5" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M32.7284 28.4855L27.0715 34.1424M27.0715 34.1424L21.4147 28.4855M27.0715 34.1424V20.0002", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "14.5859", y: "16.5859", width: "24.9706", height: "24.9706", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$v = function (props) {
    return (React.createElement("svg", { width: "19", height: "22", viewBox: "0 0 19 19", fill: "#fff", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { filter: "url(#filter0_d12ArrowCardDown)" },
            React.createElement("path", { d: "M14.1601 9.77351L9.64417 14.2894M9.64417 14.2894L5.12825 9.77351M9.64417 14.2894L9.64417 2.99964", stroke: props.color, strokeWidth: "1.5", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d12ArrowCardDown", x: "0.378906", y: "0.25", width: "18.5318", height: "21.1004", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "13.3698", y1: "12.3702", x2: "6.82172", y2: "5.82208", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$u = function (props) {
    return (React.createElement("svg", __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "36", y: "36", width: "30", height: "30", rx: "7", transform: "rotate(180 36 36)", fill: "white", fillOpacity: "0.15" }),
        React.createElement("path", { d: "M22 25L18 21L22 17", stroke: "white", strokeWidth: "2" })));
};

var Icon$t = function (props) {
    return (React.createElement("svg", __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "36", y: "36", width: "30", height: "30", rx: "7", transform: "rotate(180 36 36)", fill: "white", fillOpacity: "0.15" }),
        React.createElement("path", { d: "M20 25L16 21L20 17", stroke: "white", strokeWidth: "2" }),
        React.createElement("path", { d: "M26 25L22 21L26 17", stroke: "white", strokeWidth: "2" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.611 2.5H2.1875C1.94578 2.5 1.75 2.31355 1.75 2.08333C1.75 1.85312 1.94578 1.66667 2.1875 1.66667H12.6875C12.9292 1.66667 13.125 1.48021 13.125 1.25C13.125 0.559636 12.5373 0 11.8125 0H1.75C0.783398 0 0 0.746094 0 1.66667V10C0 10.9206 0.783398 11.6667 1.75 11.6667H12.611C13.3771 11.6667 14 11.106 14 10.4167V3.75001C14 3.06068 13.3771 2.5 12.611 2.5ZM11.375 7.91666C10.8918 7.91666 10.5 7.54349 10.5 7.08334C10.5 6.62318 10.8918 6.25 11.375 6.25C11.8581 6.25 12.25 6.62318 12.25 7.08334C12.25 7.54349 11.8581 7.91666 11.375 7.91666Z", fill: "white" })));
};

var Icon$r = function (props) {
    return (React.createElement("svg", __assign({ width: "46", height: "46", viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { x: "0.5", y: "0.5", width: "45", height: "45", rx: "9.5", fill: props.fill || "#4BE43E", stroke: props.fill || "url(#paint0_linearArrowRight)" }),
        React.createElement("g", { filter: props.fill || "url(#filter0_dArrowRight)" },
            React.createElement("path", { d: "M24.35 16L32 23.5M32 23.5L24.35 31M32 23.5H15", stroke: props.stroke || "white", strokeWidth: "2" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dArrowRight", x: "11", y: "15.2859", width: "26.4284", height: "24.4281", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "4" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.195672 0 0 0 0 0.779167 0 0 0 0 0.146094 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linearArrowRight", x1: "23", y1: "0", x2: "23", y2: "46", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#8EFF85", stopOpacity: "0" }),
                React.createElement("stop", { offset: "1", stopColor: "#A5FF9D" })))));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React.createElement("g", { filter: props.fill || "url(#filter0_dArrowTopRight)" },
            React.createElement("path", { d: "M19 16H27M27 16V24M27 16L17 26", stroke: props.stroke || "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dArrowTopRight", x: "12", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        " "));
};

var Icon$p = function (props) {
    return (React.createElement("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "white", fillOpacity: "0.15" }),
        React.createElement("g", { filter: "url(#filter00)" },
            React.createElement("rect", { x: "14", y: "14", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React.createElement("g", { filter: "url(#filter11)" },
            React.createElement("rect", { x: "22", y: "14", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React.createElement("g", { filter: "url(#filter22)" },
            React.createElement("rect", { x: "14", y: "22", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React.createElement("g", { filter: "url(#filter3_d)" },
            React.createElement("rect", { x: "22", y: "22", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter00", x: "10", y: "12", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter11", x: "18", y: "12", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter22", x: "10", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter3_d", x: "18", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$o = function (props) {
    return (React.createElement("svg", __assign({ width: "10", height: "7", viewBox: "0 0 10 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1 1L5 5L9 1", stroke: props.stroke || "#fff", strokeWidth: "1.8" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ width: "88", height: "78", viewBox: "0 0 88 78", fill: "none" }, props),
        React.createElement("g", { filter: "url(#filter0_dplaying)" },
            React.createElement("path", { d: "M65 61.2967L37.473 72.3874L37.1864 72.5032C33.866 73.8751 30.0576 72.3087 28.6802 69.0002L12.4995 30.1851C11.1205 26.8781 12.6948 23.0851 16.0152 21.7132L40.7207 11.4975C44.0426 10.1241 47.8511 11.692 49.2285 14.9974L51.1854 19.1762L62.676 43.7046L65 61.2967Z", fill: "#C0C0C0" })),
        React.createElement("path", { d: "M65 60.9621L37.6792 72L36.5966 71.6745C33.1811 70.6455 31.2465 67.0471 32.2769 63.6345L44.3733 23.5899C45.2899 20.5552 48.2425 18.6907 51.2889 19.0424L62.6934 43.4539L65 60.9621Z", fill: "black", fillOpacity: "0.12" }),
        React.createElement("path", { d: "M87.7203 32.0767L75.4893 72.38C74.4475 75.8129 70.8027 77.7574 67.3492 76.7217L45.913 70.2932L41.6478 69.0134C38.1929 67.9779 36.2382 64.3564 37.2801 60.9218L49.5111 20.62C50.5529 17.1871 54.1961 15.2426 57.6496 16.2783L83.3524 23.9866C83.5872 24.0577 83.8158 24.1397 84.0366 24.2354C87.0578 25.5154 88.6906 28.8772 87.7203 32.0767Z", fill: "white" }),
        React.createElement("g", { filter: "url(#filter1_iplaying)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M72.6292 43.2513L65.1785 46.802L69.8907 53.9568C67.3913 56.2529 63.7967 57.2413 60.2886 56.2579C54.8978 54.7468 51.7527 49.1517 53.2638 43.7609C54.775 38.3701 60.3701 35.225 65.7609 36.7362C69.1093 37.6748 71.5913 40.1891 72.6292 43.2513Z", fill: "#EFEFEF" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dplaying", x: "0", y: "0", width: "69", height: "78", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter1_iplaying", x: "50.5273", y: "34", width: "23.5377", height: "26.5859", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })))));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", height: "42", viewBox: "0 0 42 42", fill: "#F45555" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: "url(#paint0_linearErrorIcon)" }),
        React.createElement("g", { filter: "url(#filter0_dErrorIcon)" },
            React.createElement("path", { d: "M17.5352 17.4648L24.6062 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement("path", { d: "M24.6074 17.4648L17.5364 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dErrorIcon", x: "12.1211", y: "14.0508", width: "17.9014", height: "17.8995", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linearErrorIcon", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FF6161" }),
                React.createElement("stop", { offset: "1", stopColor: "#F45555" })))));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30" }, props),
        React.createElement("rect", { width: "30", height: "30", rx: "7", fill: "white", fillOpacity: "0.15" }),
        React.createElement("path", { d: "M9.74707 7.00047H13.2111C13.4011 7.00053 13.584 7.07271 13.7229 7.20244C13.8617 7.33217 13.9461 7.50977 13.9591 7.69935C13.972 7.88893 13.9126 8.07636 13.7926 8.22377C13.6727 8.37117 13.5013 8.46757 13.3131 8.49347L13.2111 8.50047H9.74707C9.17694 8.5004 8.62805 8.71676 8.21132 9.10584C7.79458 9.49491 7.54109 10.0277 7.50207 10.5965L7.49707 10.7505V20.2505C7.497 20.8206 7.71337 21.3695 8.10244 21.7862C8.49151 22.203 9.02428 22.4564 9.59307 22.4955L9.74707 22.5005H19.2471C19.8172 22.5005 20.3661 22.2842 20.7828 21.8951C21.1996 21.506 21.453 20.9733 21.4921 20.4045L21.4971 20.2505V19.7525C21.4954 19.5612 21.5669 19.3765 21.6969 19.2362C21.8269 19.0959 22.0056 19.0105 22.1965 18.9976C22.3873 18.9847 22.5759 19.0452 22.7236 19.1668C22.8713 19.2883 22.967 19.4617 22.9911 19.6515L22.9971 19.7525V20.2505C22.9972 21.2105 22.6291 22.1339 21.9686 22.8307C21.3082 23.5274 20.4057 23.9443 19.4471 23.9955L19.2471 24.0005H9.74707C8.78707 24.0006 7.8636 23.6325 7.16688 22.972C6.47017 22.3116 6.05327 21.4091 6.00207 20.4505L5.99707 20.2505V10.7505C5.99698 9.79047 6.36507 8.867 7.02551 8.17028C7.68595 7.47356 8.58844 7.05667 9.54707 7.00547L9.74707 7.00047H13.2111H9.74707ZM17.5001 9.52047V6.75047C17.5 6.61251 17.538 6.47721 17.6098 6.35943C17.6816 6.24166 17.7846 6.14599 17.9073 6.08293C18.03 6.01987 18.1677 5.99188 18.3053 6.00203C18.4428 6.01218 18.575 6.06009 18.6871 6.14047L18.7691 6.20947L24.7631 11.9595C25.0431 12.2275 25.0691 12.6595 24.8401 12.9565L24.7631 13.0415L18.7691 18.7935C18.6696 18.889 18.5457 18.9553 18.411 18.9851C18.2763 19.0148 18.136 19.0068 18.0055 18.9619C17.8751 18.917 17.7595 18.8371 17.6716 18.7308C17.5836 18.6245 17.5267 18.496 17.5071 18.3595L17.5001 18.2525V15.5275L17.1561 15.5575C14.7561 15.8075 12.4561 16.8875 10.2421 18.8175C9.72207 19.2705 8.91907 18.8425 9.00507 18.1595C9.66907 12.8395 12.4511 9.90747 17.2001 9.53947L17.5001 9.51947V6.75047V9.52047ZM19.0001 8.50947V10.2505C19.0001 10.4494 18.9211 10.6401 18.7804 10.7808C18.6397 10.9214 18.449 11.0005 18.2501 11.0005C14.3761 11.0005 11.9761 12.6765 10.9381 16.1575L10.8591 16.4365L11.2111 16.1995C13.4501 14.7375 15.7981 14.0005 18.2511 14.0005C18.4323 14.0005 18.6074 14.0661 18.744 14.1852C18.8806 14.3044 18.9694 14.4689 18.9941 14.6485L19.0011 14.7505V16.4935L23.1601 12.5005L19.0001 8.50947Z", fill: "white" })));
};

var Icon$j = function (props) {
    return (React.createElement("svg", __assign({ width: "15", height: "12", viewBox: "0 0 15 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1.375 4.5L5.96875 9.09375L13.625 1.4375", stroke: "url(#paint0_linear_1:648)", "stroke-width": "2.8" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_1:648", x1: "1.375", y1: "5.26559", x2: "13.625", y2: "5.26559", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#3C43DF" }),
                React.createElement("stop", { offset: "0.338542", stopColor: "#4932CF" }),
                React.createElement("stop", { offset: "1", "stop-color": "#6112B0" })))));
};

var Icon$i = function (props) {
    return (React.createElement("svg", __assign({ width: "18", height: "15", viewBox: "0 0 18 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M6.75342 9.4124L6.46872 13.3997C6.87605 13.3997 7.05247 13.2255 7.26403 13.0163L9.17377 11.199L13.1309 14.0845C13.8567 14.4873 14.368 14.2752 14.5638 13.4197L17.1613 1.3006L17.162 1.29989C17.3922 0.231647 16.774 -0.186082 16.0669 0.0759806L0.79902 5.89634C-0.242982 6.29907 -0.227205 6.87746 0.621887 7.13952L4.52527 8.34844L13.5921 2.69946C14.0188 2.41812 14.4067 2.57378 14.0876 2.85513L6.75342 9.4124Z", fill: "#F9F8F8" })));
};

var Icon$h = function (props) {
    return (React.createElement("svg", __assign({ width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M16.6627 5.94446C16.627 5.13488 16.4961 4.5783 16.3085 4.09602C16.115 3.58408 15.8173 3.12575 15.4273 2.74473C15.0462 2.35779 14.5847 2.05712 14.0786 1.86667C13.5935 1.67913 13.0397 1.54821 12.2299 1.51251C11.4142 1.4738 11.1552 1.46484 9.08611 1.46484C7.01706 1.46484 6.75808 1.4738 5.94532 1.50949C5.13558 1.54519 4.57889 1.67622 4.09663 1.86365C3.58449 2.05712 3.12607 2.35477 2.74498 2.74473C2.35796 3.12575 2.05735 3.58711 1.86675 4.09311C1.67917 4.5783 1.54822 5.13186 1.51252 5.94144C1.4738 6.75707 1.46484 7.016 1.46484 9.08466C1.46484 11.1533 1.4738 11.4123 1.5095 12.2249C1.5452 13.0344 1.67626 13.591 1.86384 14.0733C2.05735 14.5852 2.35796 15.0436 2.74498 15.4246C3.12607 15.8115 3.58751 16.1122 4.09361 16.3027C4.57889 16.4902 5.13256 16.6211 5.94241 16.6568C6.75505 16.6926 7.01415 16.7015 9.08321 16.7015C11.1523 16.7015 11.4112 16.6926 12.224 16.6568C13.0337 16.6211 13.5904 16.4902 14.0727 16.3027C15.0969 15.9068 15.9066 15.0972 16.3026 14.0733C16.49 13.5881 16.6211 13.0344 16.6568 12.2249C16.6925 11.4123 16.7015 11.1533 16.7015 9.08466C16.7015 7.016 16.6984 6.75707 16.6627 5.94446ZM15.2904 12.1653C15.2576 12.9095 15.1326 13.3113 15.0284 13.5792C14.7723 14.2429 14.2454 14.7698 13.5815 15.0258C13.3135 15.13 12.9087 15.255 12.1674 15.2876C11.3636 15.3234 11.1225 15.3323 9.08914 15.3323C7.05578 15.3323 6.81169 15.3234 6.01079 15.2876C5.26652 15.255 4.86462 15.13 4.59669 15.0258C4.2663 14.9037 3.96557 14.7102 3.72148 14.4572C3.46843 14.2102 3.27492 13.9125 3.15281 13.5822C3.04862 13.3143 2.9236 12.9095 2.89092 12.1684C2.85511 11.3647 2.84627 11.1236 2.84627 9.09059C2.84627 7.05762 2.85511 6.81358 2.89092 6.01295C2.9236 5.26882 3.04862 4.867 3.15281 4.59911C3.27492 4.26868 3.46843 3.96812 3.7245 3.72395C3.9715 3.47095 4.26921 3.27748 4.59971 3.15551C4.86765 3.05134 5.27257 2.92635 6.01381 2.89356C6.81762 2.85786 7.05881 2.84891 9.09205 2.84891C11.1284 2.84891 11.3695 2.85786 12.1704 2.89356C12.9147 2.92635 13.3166 3.05134 13.5845 3.15551C13.9149 3.27748 14.2156 3.47095 14.4597 3.72395C14.7128 3.97103 14.9063 4.26868 15.0284 4.59911C15.1326 4.867 15.2576 5.27173 15.2904 6.01295C15.3261 6.8166 15.335 7.05762 15.335 9.09059C15.335 11.1236 15.3261 11.3617 15.2904 12.1653Z", fill: "#F9F8F8" }),
        React.createElement("path", { d: "M9.0831 5.24023C6.96155 5.24023 5.24023 6.96144 5.24023 9.0831C5.24023 11.2048 6.96155 12.926 9.0831 12.926C11.2048 12.926 12.926 11.2048 12.926 9.0831C12.926 6.96144 11.2048 5.24023 9.0831 5.24023ZM9.0831 11.5759C7.70675 11.5759 6.59033 10.4596 6.59033 9.0831C6.59033 7.70663 7.70675 6.59033 9.0831 6.59033C10.4596 6.59033 11.5759 7.70663 11.5759 9.0831C11.5759 10.4596 10.4596 11.5759 9.0831 11.5759Z", fill: "#F9F8F8" }),
        React.createElement("path", { d: "M14.0048 5.03855C14.0048 5.52255 13.6124 5.91499 13.1283 5.91499C12.6444 5.91499 12.252 5.52255 12.252 5.03855C12.252 4.55444 12.6444 4.16211 13.1283 4.16211C13.6124 4.16211 14.0048 4.55444 14.0048 5.03855Z", fill: "#F9F8F8" })));
};

var Icon$g = function (props) {
    return (React.createElement("svg", __assign({ width: "22", height: "23", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M16.5 5.18025C15.9378 5.42578 15.3423 5.58678 14.733 5.658C15.3726 5.28243 15.8535 4.68683 16.086 3.9825C15.48 4.33525 14.8191 4.5837 14.1307 4.7175C13.8409 4.41391 13.4923 4.17254 13.1061 4.00813C12.7199 3.84373 12.3042 3.75972 11.8845 3.76125C10.185 3.76125 8.80725 5.11875 8.80725 6.79125C8.80725 7.02825 8.83425 7.26 8.88675 7.48125C7.66768 7.42327 6.47409 7.11181 5.38213 6.56673C4.29016 6.02165 3.32382 5.25494 2.54475 4.3155C2.27162 4.7763 2.12806 5.30234 2.12925 5.838C2.12925 6.89025 2.67225 7.818 3.49725 8.36025C3.00936 8.3445 2.53202 8.21424 2.10375 7.98V8.0175C2.10375 9.486 3.165 10.7108 4.57125 10.9898C4.30696 11.0599 4.03469 11.0954 3.76125 11.0955C3.5625 11.0955 3.36975 11.0768 3.1815 11.0393C3.38256 11.6452 3.76733 12.1735 4.28236 12.5508C4.7974 12.928 5.41713 13.1355 6.0555 13.1445C4.96055 13.9879 3.61636 14.4435 2.23425 14.4398C1.98525 14.4398 1.74075 14.4248 1.5 14.3978C2.91094 15.2908 4.54694 15.7637 6.21675 15.7613C11.877 15.7613 14.9715 11.1435 14.9715 7.13925L14.961 6.747C15.5646 6.32225 16.0861 5.79139 16.5 5.18025Z", fill: "white" })));
};

var Icon$f = function (props) {
    return (React.createElement("svg", __assign({ width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", __assign({ d: "M1 9H9M9 9V1M9 9L1 1", stroke: "#4BE43E", strokeWidth: "1.8", strokeLinecap: "round" }, props))));
};

var Icon$e = function (props) {
    return (React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M6.41667 15.5833H4.58333C4.0971 15.5833 3.63079 15.3902 3.28697 15.0464C2.94315 14.7025 2.75 14.2362 2.75 13.75V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H13.75C14.2362 2.75 14.7025 2.94315 15.0464 3.28697C15.3902 3.63079 15.5833 4.0971 15.5833 4.58333V6.41667", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M18.2374 6.41663H7.42991C6.87049 6.41663 6.41699 6.87012 6.41699 7.42954V18.237C6.41699 18.7965 6.87049 19.25 7.42991 19.25H18.2374C18.7968 19.25 19.2503 18.7965 19.2503 18.237V7.42954C19.2503 6.87012 18.7968 6.41663 18.2374 6.41663Z", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ width: "29", height: "34", viewBox: "0 0 29 34" }, props),
        React.createElement("path", { d: "M14.2619 31.264C22.1385 31.264 28.5238 24.8788 28.5238 17.0021C28.5238 9.1255 22.1385 2.74023 14.2619 2.74023C6.38527 2.74023 0 9.1255 0 17.0021C0 24.8788 6.38527 31.264 14.2619 31.264Z", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.60636 23.4634H9.95204C10.5458 23.4634 10.8427 23.4634 11.1101 23.3839C11.4012 23.2973 11.6675 23.1428 11.8871 22.9332C12.0888 22.7407 12.2361 22.4831 12.5305 21.9679L16.9109 14.3049C17.2011 13.7972 17.3463 13.5432 17.41 13.2755C17.4792 12.984 17.4791 12.6804 17.4096 12.3889C17.3457 12.1212 17.2003 11.8675 16.9097 11.3601V11.36H16.9096L15.2202 8.41028C14.8205 7.71237 14.6206 7.36341 14.3668 7.23379C14.0926 7.09372 13.7676 7.09396 13.4936 7.23443C13.24 7.36443 13.0406 7.71367 12.6419 8.41216L5.31668 21.2451L5.31654 21.2454H5.31653C4.92364 21.9337 4.72719 22.2778 4.74308 22.5601C4.76026 22.8652 4.92219 23.1437 5.17891 23.3097C5.41645 23.4634 5.81309 23.4634 6.60636 23.4634ZM18.0094 23.4632H21.8884C22.69 23.4632 23.0909 23.4632 23.3292 23.308C23.5868 23.1404 23.7481 22.8594 23.7631 22.5526C23.7769 22.2688 23.5747 21.923 23.1703 21.2314L21.2276 17.9095L21.2275 17.9093C20.8289 17.2276 20.6295 16.8867 20.3775 16.7593C20.1052 16.6216 19.7834 16.6218 19.5112 16.7599C19.2594 16.8877 19.0605 17.229 18.6628 17.9113L16.7265 21.2333C16.3236 21.9244 16.1222 22.27 16.1363 22.5536C16.1515 22.8602 16.313 23.1408 16.5705 23.3082C16.8087 23.4632 17.209 23.4632 18.0094 23.4632Z", fill: "#181B1D" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ width: "47", height: "26", viewBox: "0 0 37 26" }, props),
        React.createElement("g", { filter: "url(#filter0_d11122211)" },
            React.createElement("path", { d: "M16.7284 9.65805L11.0715 4.0012M11.0715 4.0012L5.41466 9.65805M11.0715 4.0012V18.1433", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("g", { filter: "url(#filter1_d9090909090)" },
            React.createElement("path", { d: "M20.4142 12.4884L26.0711 18.1453M26.0711 18.1453L31.7279 12.4884M26.0711 18.1453V4.00315", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d11122211", x: "0.414062", y: "0.587891", width: "21.3137", height: "24.5563", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "filter1_d9090909090", x: "15.4141", y: "1.00391", width: "21.3137", height: "24.5563", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$b = function (props) {
    return (React.createElement("svg", __assign({ width: "22px", viewBox: "0 0 22 22" }, props),
        React.createElement("path", { d: "M12.4703 5.25911C12.1859 5.55367 11.7248 5.55367 11.4404 5.25911C11.156 4.96454 11.156 4.48695 11.4404 4.19238L12.4835 3.11212C14.1188 1.41836 16.7702 1.41836 18.4056 3.11212C20.0409 4.80588 20.0409 7.552 18.4056 9.24577L14.2859 13.5127C12.6505 15.2064 9.99905 15.2064 8.3637 13.5127C8.07929 13.2181 8.07929 12.7405 8.3637 12.4459C8.6481 12.1513 9.10919 12.1513 9.3936 12.4459C10.4601 13.5505 12.1893 13.5505 13.2559 12.4459L17.3757 8.17901C18.4422 7.07441 18.4422 5.28346 17.3757 4.17884C16.3091 3.07422 14.5799 3.07422 13.5134 4.17884L12.4703 5.25911Z", fill: "white" }),
        React.createElement("path", { d: "M9.20078 16.6489C9.48519 16.3543 9.94635 16.3543 10.2308 16.6489C10.5152 16.9434 10.5152 17.421 10.2308 17.7156L9.18773 18.7958C7.55236 20.4896 4.90093 20.4896 3.26558 18.7958C1.63022 17.1021 1.63022 14.3559 3.26558 12.6622L7.38533 8.39534C9.02068 6.70155 11.6721 6.70156 13.3075 8.39534C13.5919 8.6899 13.5919 9.16746 13.3075 9.46202C13.0231 9.75659 12.5619 9.75659 12.2775 9.46202C11.211 8.35739 9.48177 8.35739 8.41523 9.46202L4.29551 13.7289C3.22898 14.8336 3.22898 16.6245 4.29551 17.7292C5.36205 18.8337 7.09125 18.8337 8.15775 17.7292L9.20078 16.6489Z", fill: "white" })));
};

var Icon$a = function (props) {
    return (React.createElement("svg", __assign({ width: "29", height: "29", viewBox: "0 0 29 29", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { width: "29", height: "29", rx: "7", fill: "url(#paint0_linearYAYIcon)" }),
        React.createElement("rect", { width: "29", height: "28", fill: "url(#pattern0)" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { href: "#image0", transform: "translate(-0.448276 -0.0467986) scale(0.00167169)" })),
            React.createElement("linearGradient", { id: "paint0_linearYAYIcon", x1: "14.5", y1: "-4.64", x2: "14.5", y2: "29", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#4CEE3E" }),
                React.createElement("stop", { offset: "1", stopColor: "#3FBF35" })),
            React.createElement("image", { id: "image0", width: "1052", height: "611", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBwAAAJjCAYAAACvPwIrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADtNSURBVHgB7d3NbyR3mif2JyL5qtILOa2WWi2NxZp9AxaY6ZK9njUMeMQCjDXGF1Uv4NPCEAXsxRdX9R9gq8on36TGHnxZQNLdWKlPs4eFRc1hYM9ioepdYHbHGLuo7Re11C0V643MJJkZGz8mKVGsKlaSzMiMyPx8gEQkySypKhlJ5u8bz/P8IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA4csCAKDhtre3V/I8v9Tr9ZZardaPoiiWyttKEbFy8JCVE/74ZrplWbZZ/pnNyLKNbq/3WVHeLz93s9vtbj799NM3AwA4FYEDANAoZRCw1G63L83k+eu9orhUfmq1vC1FtTbLN003I89vlv//T8pg4+bi4uJGAACPJXAAAGovhQzb29trZcjwRhGRQoaqA4YnStUP5eFmt9f7oAwf1gMA+A6BAwBQSweVDFdaWfZm0a9iqLONMoBYFz4AwLcEDgBAraSgYW9n52qvKK5FDSoZzmCj/LvfKI/r2i4AmGYCBwCgFg4GP75dJg5rMRkOqx5uCB4AmEYCBwBgrI5UNFyPCZVn2fW9frvFRgDAlBA4AABjs9vpvN3g1onT2m+1KEOH9wMApoDAAQAYue3t7dVWnr9T9Le1nDY3y+Dhx6odAJh0eQAAjEhqn9hpt9/Js+zjKQ0bkkvlv/9Wqu4IAJhgKhwAgJFIQyFbef7hFAcNj5LaLC6rdgBgEqlwAAAqt7ez82Z5Vf9TYcND0s4cn7bb7WsBABNG4AAAVCq1DnR7vfdjOgZDnl5RLGUR72ixAGDSaKkAACqR5jXs7uykwZBrwUCyLLs5Ozd3uTxuBgA0nMABABi6g7BhmgdDnoe5DgBMBIEDADBUaThk2oWivLsSnJXQAYDGEzgAAEMjbBgqoQMAjSZwAACGIrVR7HQ6n4awYZiEDgA0ll0qAIChSDMbQtgwbPsVIynMCQBoGIEDAHBuO+32OwZEVmblIMwBgEYROAAA57Lb6bxdRFwLKpPCnBTqBAA0iBkOAMCZdTqdK+Vq+MNgJMpg5ycLCwvvBgA0gMABADgTO1KMx+7e3mtPP/30zQCAmtNSAQCcSZ7nb4ewYeRmZ2Y+NEQSgCYQOAAAp7a9vb0WRbEWjMNKmpsRAFBzWioAgFPRSlEPvaK4vLi4uB4AUFMqHACAU9FKUQ9l6POe1goA6kzgAAAMTCtFray0223bkQJQW1oqAICBpKvpO53Op6G6oT6ybLPX6722uLi4EQBQMyocAICB7O3sXA1hQ72UIVAry94LAKghFQ4AwBMdDIq8FdSSAZIA1JEKBwDgiQ4GRVJTrSzz/QGgdgQOAMCJtre3Vw2KrLciYnV/oCcA1IiWCgDgRJ12O7VSrAR1tzG/sHAxAKAmVDgAAI91cNV8JWiCFVUOANSJCgcA4LFUNzSOKgcAakOFAwDwSKobGkmVAwC1ocIBAHgk1Q2NpcoBgFpQ4QAAPER1Q6Ot7O8sAgBjpsIBAHiI6oZmK9/grc8tLFwOABgjFQ4AwHeobmi+ImJVlQMA4yZwAAC+I8+yt4PGy7LsSgDAGAkcAIBvqG6YHGXg8GZRFEsBAGMicAAAvtEqF6nBZCjDhk6nsxYAMCYCBwBg3/b29krq/Q8mRvlG740AgDEROAAA+/I8N7thwqQASVsFAOMicAAA9qsboigMGZxA7Xb7WgDAGAgcAIBktby5Ej6B8jy/GgAwBgIHAMBWmJOsKJa2t7dXAwBGTOAAAFPuYDG6EkysVp7bfQSAkRM4AMCUU3I/+YqIK4ZHAjBqAgcAmGKGRU6JMmzodDprAQAjJHAAgClmK8zpUb7peyMAYIQEDgAwpYrbt5fKK9+rwVQoIla1VQAwSgIHAJhS7YWF1EqxEkyNdrt9LQBgRLIAAKZSp92+FQKHaXNzfmHhtQCAEVDhAABTyFaYU+vSwfceAConcACAKWQrzOmVZZldSQAYCS0VADBl0laYeZbdCqZTlm3Oz88vBwBUTIUDAEwZW2FOuaJY0lYBwCgIHABgitgKk0RbBQCjIHAAgCliK0ySMnB4syiKpQCACgkcAGCK5FmmnYL9top2u30pAKBCAgcAmBKdBw9UN/CNVp6/GQBQIYEDAEyJrNWyFSbfKCKuaKsAoEoCBwCYAmkrzHKBuRpwqN9WYXgkAJUROADAFLAVJo/SyjJtFQBURuAAABMuVTeUV7NdyeYhRZZd0lYBQFUEDgAw+VbLm0UlDyvDhk6nsxYAUAGBAwBMOFthcpLyzeAbAQAVEDgAwATb3t5eC1thcoI0TFRbBQBVEDgAwAQzFJBBaKsAoAoCBwCYULbCZFDaKgCogsABACaUrTAZVAqmyoBqNQBgiAQOADCBDrbCXAsY3GoAwBAJHABgAs3kudkNnEqe51cDAIZI4AAAE6inuoHTKoolbRUADJPAAQAmjK0wOassy64EAAxJFgDAROm027dC4MBZZNnm3NzcxTJ42AwAOCcVDgAwQQ5K4lcCzqIoltrttioHAIZC4AAAEyQ3LJJzamWZcwiAodBSAQATIm2FmWfZrYBzmpufX9ZWAcB5qXAAgAmR5/nbAUPQbrevBQCck8ABACZFUawGDEEry14PADgngQMATABbYTJMRcTqwQBSADgzgQMATIA8y7RTMGyrAQDnYGgkADRc58GDK9FqfRgwTFm2OT8/vxwAcEYqHACg4bJW62rAsBXFkrYKAM5D4AAADZa2wiyUvlORVp6/GQBwRgIHAGgwW2FSpTLMulIUxVIAwBkIHACgoVJ1QxTFWkBVyrCh3W5fCQA4A4EDADTXakDFWlmmrQKAM7FLBQA0VKfdvlUeVgIqNjc/v5xl2WYAwCmocACABtre3l4LYQMj0m63rwUAnJLAAQAaSJk7o1Seb68HAJySlgoAaJidnZ1LRa/3acAI9Yri8uLi4noAwIBUOABAwxRFcTVgxLIss1sFAKeiwgEAGiRthZln2a2AUcuyzfn5+eUAgAGpcACABmllmeoGxqMolsrAazUAYEACBwBokCJCWTtj08pzw0oBGJjAAQAawlaYjFsKvIqiWAoAGIDAAQAaIs+ytwPGqQwbOp3OWgDAAAQOANAAB73zKwFjVr55fCMAYAACBwBogFzvPDVRRKxqqwBgEAIHAKi5tBVmFMVaQE202+1rAQBPIHAAgJrL89zsBmqllWWvBwA8gcABAGqsuH17KYpiNaBGUlvFwVwRAHgsgQMA1Fh7YeFKGBZJDWVZdiUA4ARZAAC11Wm3b4XAgTrKss35+fnlAIDHUOEAADXVefBAdQP1VRRL2ioAOInAAQBqKmu1rgbUWJ5lzlEAHktLBQDUUNoKs1zM3QqosyzbnJubu5iVxwCAY1Q4AEAN2QqTRiiKpU6nsxYA8AgCBwComVTdUC7k1gIaoHwz+UYAwCMIHACgflYDGqIoz9eiKJYCAI4ROABAzeRZpp2CRmm329cCAI4ROABAjWxvb6+FrTBpmDIk01YBwEMEDgBQI60sezOgeS6VYdlqAMARAgcAqImdnZ1LhfkNNFSWZVcCAI4QOABATRRFcTWgoTLVOQAckwUAMHZpK8w8y24FNFivKC4vLi6uBwCECgcAqIVWlqluoPFy5zEARwgcAKAGigj97xXLsuz98nneCKqTZatFUSwFAITAAQDGzlaYo9Ht9T6IXu9nQXXKsKHT6awFAITAAQDGLs+yt4OqbaTZAkWWfRRUqnxz+UYAQAgcAGCstre3V0N1Q+V6RXEjHQ8GGm4GlUlbu2qrACAROADAGOV5bivB0Vg/vFOk1goq1W63rwUAU0/gAABjkrbCjKJYCyqVhkUuLi5uHH6sraJ6eZYJ0gAQOADAuOR5bnbDCHSPVTRoqxiJlYN2IQCmmMABAMbgoLphNajaxkHA8B3aKqqXZZmtXgGmnMABAMZjNQyLrNzhsMjjtFVUL9NWATD1sgAARq7Tbt8KgUPlysDh4tH5DUeV34Pb5cFuChUqn//Lj6owAWA6qHAAgBHb3t5eC2FD5Y4PizxOW0X1WllmTgnAFBM4AMCItZSaj0T3CYGCtorqlc/xpaIoVJEATCmBAwCMUBoWWfTnN1CtjSeV8tutYgTKsKHT6awFAFNJ4AAAI2QrzNF43LDIRzzuZ0GlyjebbwQAU0ngAAAjcrAV5lowCusDPu79oFKpokdbBcB0EjgAwIhkWXYlqNyThkUetdBu3wxtFZVrt9vXAoCpI3AAgBHJIq4GleueYveJbHl5U1tF9XKDUgGmksABAEbAVpgj88RhkY/wflC1lfI1sBoATBWBAwCMQHmFV3XDCAw6LPIobRWjoaUIYPoIHACgYgdXdi8Fo7Aep5TaKrKIm0GlysDhTcMjAaaLwAEAKpbnuf71ETjNsMjjukUx8NwHzqgMG9rttuANYIoIHACgQrbCHJ3TDIs8bqHd/ii0VVSulWVvBwBTQ+AAABXK89wCazTOMizyG9oqRqPIskvaKgCmh8ABAKpUFKsxRL0ii71uHjt7eXR2W9HeefiWPr9bfj09rigfPw3OMizyOG0VI1CGDZ1OZy0AmArT8S4EAMYgbYWZZ9l7cUYpLNjtZtHt9sODXhFnChCyrIhW3r/NtHrRahWRl5+bJGXgcPGs8xsOFbdvL+0sLt6OCZTOm3T+dHvlMd2KFEbFwS2LdDYcPSfyPH3cK4/pXIn9cycb0jlT/ufW5xYWLgcAE0/gAAAV6bTbt8rDymn+TFoQHlYnpFtVUvAwO9O/NT18SMMi5+bn34oh2Gm3Py6fjdVouMOwaq/bKm/9kOG89kOr8ryZScHVOc+b8vu1Un7fPgsAJtpMAABDd7AV5sogj02Lw9QicRg0jMJhoLHd6YcPc+UCcm62G010nmGRx+31ej9r5flqNFDV51EKw7q9VuykD46cN2cJH9rtdgqIrgcAE02FAwBUoNPpfFiuAK+c9Ji0QOzs9mcx1GHWQiqfn5vplsFDo6oeNuYXFi7GkDSxrSJVMLR3ZkYWVj1KCqv2w4cyhBjQUL9vANSTwAEAhixthZln2a3Hfb1uQcNx+cGsh4W5bu2Dh15RvLW4uPh+DFFT2irqEDQcl86dhRQ+DFAtU37vLp9nZxEA6s8uFQAwZCdthZlChrtbs/sLxbruIJH6/XfS3/PBXGx1ZvZ3xqix9Riy1FYRNZbaJu5vz5a3uVqFDUk6d9I5c3drLrq9k/9uWZZdCQAmmgoHABiig+qGT8u7S0c/nxbtW+16XY0+jXTFum4VD8McFnlUXdsqUtCQgqphDIAclRPPmyzbnJubu1h+HzcDgImkwgEAhms1joUNqarh3tZsY8OGpI4VD8McFnlUtry8mVVQOXFWKWhIFQNb7dlGhQ1JOm9SNUY6PqQoltrt9qUAYGKpcACAITq6FWZqmWjvtPYDh7NqlRlFVt5mZ/q/tLPH/ObulReQu93+cW8vKleDiodKhw5ubW1da+X5OzEmh3M+dvZajQsZHiedM4vlOZMdOWdSsDO3sHA5AJhIAgcAGJLt7e21PMveS/dTFcCD8spu9xSLxRQsLMyl7QbLgGH2IGw442/qvW4/gNjd7d/f2Y1KjCt4qGJY5FHjaquoeqBoOsdaBwFWXv7n81b/eHietVrp75BmMRz+ffr3023/nOqdL9BKQyWfXtz9zvkyNz+/rK0CYDIJHABgSA53N0hhQyojH+TK9Nxsf/E3P98PGqqSFo4pdOjspBaP8uOBdy8czKiDhzJwuFgGDhtRoVHuVlFV0JAChrmZg/NsdnjnWDqXUqCVzqfThlkpdLiwsFcGH/2TsHyOf7KwsPBuADBxBA4AMASHW2EOEjakReBTZcAwn6oZZmIs2p3+bdiVD4fbaaZjVYpe72cLTz1V+Q4Ho2irqCJoSOfXYnluzc0dtOKM4N3efpC1fysG/nc8Nb+3H1RpqwCYXAIHABiCTqfzXq8XayeFDal8/cJCxML8aBaBg0gl8g+2+uHDMFUZPOx1uz++cOHCR1GxwxApKlBF0JCqGBYX+sdxnV+pkiYFD/e3I3rdJz/+MHSYm59fybLsswBgoggcAOCc0sK0jBNuPS5sSEHD04v9oKGuqgwe5mZ6+4vKIal0WORxw26rqCpoeGqxf6yTVD2ztf3kKpoUOszM7N1YXFy8HgBMFNtiAsA5dYvsyqPChlTafqFcCH7vuXqHDUkaJPjs0+XfdXm4f9e0FWjaSjNt67ize/4BAr2iqGQrzMfpFsUnMQSHO5bc3ZotjzNDCRtSwLD0bP9Wt7AhOfr3y0/41u9vtdprXQ0AJo4KBwA4p6++7t3a62UrRz+XFlvPPN1fyDfRYcXDzm4x1G0Z08DAhVRCf8aKh1EMizzqvG0VVVQ0pNkfh60TTZKqZx7XapFaQGbzvcvLy7PrAcDEEDgAwDl88VXxdhRx/fDj/aqGhX6J+yRIwUO7XS68dwbryR/UWYKHUQ2LPO4sbRVVBA2p8uTCU80NsZITW3ey2NjK47WLy7bIBJgUWioA4Iw+/7xYORo2pB0nfu+5yQkbkrS4TYvc5WcjnrlQnFgafxqpauJoq8Ugi/JuUbwfY3Catoq9bv/fdefB3NBaJ1LQkFpdnm1wxcyhw9addHvoXCpi5elevB0ATAwVDgBwRl98VdxKi6R0Py0Kn7lQn90nqnRSafxZpYqHw50t8qx41ENGOizyqO3t7dU8yz5+3NdTqJCChlTNkGZWDMPh1paLi80PGR4nVTvcvvvwebQX8eOXn88q34UEgOoJHADgDI62UqQKgAsTVNUwqCqCh6RVhg/zs92Ymel9Ez70imKsuxi02+1b5ZumlaOfSyHD7l4rdvbyobVNpKDhqfl+lcw0hFfJvQdFbLe/84/d3GrFRa0VAM2npQIATuloK8W0hg1Jqup4fukx5fHn0D1st3gwF2n3j1Q58KA9ezPGqCiKD1KosFuGC9sHLRP3t+eGNqPhcEeT9Hymc2pawobkmQvZ8dfQ0oVuvBMANJ4KBwA4pS9/V7xXXndfm+aw4VGqqnj4RhYbZdBzsyjik/L5v/nS97P1qFAKlnqzcWm2iNezVqz2enEphmwaKxoeJw2TfLD97ce9Ii5X/T0GoFoCBwA4hbQIzWfjlrDh8SoPHo7K4mYZQmyUi9OfHwQSG90iNlvd2HzppWzjpD9661axtLAQS91WLLXyuJQVsVSu/18t/zuX0q0MNpaiIoKGRzsaOpRPy/oLz2eXA4DG8isOAE4hVTc89VSsCRuebGe3iK3trDzGWJUL+s0i4tt5AMV3ZzGM9O8iaHiio6GDKgeAZvOrDgAGlKobFi/EreeeCU4hBQ5b2zH24GGcBA2nczhIUpUDQLMZGgkAA5p7Kt5OAxI5nbnZiKVnI35vqdgfNDlNpnkY5HmkQZKzM/uVKauf/7ZYDQAaya89ABjA7dvFynPPxaflgrGyvv5p0e31y+bTrIdJpaLh/NJ5cvtuRNFV5QDQVH4FAsAAiqK4Vh5s1TdEh8FDZ7d8fnsxEVI1R6rimLZKjqqkNpzNMnTYasXyxeVsMwBoFC0VADCYq8FQtcp3IalF5XtL/ePMTDTSfjXDQr9tJN2EDcOTApz03D61F9cCgMZR4QAAT1AUxVp5eC+o3F63iHY7i/buiLbVPKMUMsy2IuZTNcOctokqFUXE13di8/nlbDkAaBS/HgHgCcrA4ePysBqM1F4ZOOyWwUNnpx47XKSQIYUL6ap7ugkZRid9/8vQwRaZAA3jVyUAnKAMG1bKw61grNJV7t29fgCxf+xWP/chtXjMzvSPKWBoaUQdqzv3Y33pGcMjAZpE4AAAJygDh9RKsRbUzmEI0e0e3Hr9z6X7KYt4UiCRAoRUtZCOebqV74ry1kHI0ApqJn1/f3HX8EiAJhE4AMBjqG6YHGmxmgIFbRDNtrMTN+bns+sBQCMoDgSAx1sNJsJ+NYOwofFmZ+0WA9AkAgcAeLy3A6iNMjRa6nSKKwFAIwgcAOARimJ/UbMSQK3MzalyAGgKgQMAPNqbAdTR6vZusRoA1J7AAQCOORgWqWwbamrG6xOgEQQOAPAwsxugxmZm4s0yGFwKAGpN4AAAD1sNoM6WOp1YCwBqTeAAAEeUV03XwrBIqL35+XgjAKg1O1IDwBFl4HArBA7QCO29uLw4m60HALU0EwDAvjJsWI1JCBuKzXIl9kHE3s2I7kZ5eWEpYm61vCRcXhDOVwImxcHwyPUAoJZUOADAgTJweK88rEWTpaDhwbWI3uajv/7U9YgLZmIyMdKJfjHLss0AoHbMcACA+GYrzLVosgc3Iu6tPT5sSLaul495K5hSnfLc2NyI+OJm/37zpZ0q1gKAWtJSAQB9V6PJdtf7YcIg2u/3WytUOkyPz9Yj/vxG/3jUq6sR/+idiBcvRYOl4ZHvBgC1o6UCAGIChkV+fbE/r2FQaa7D9271j0y2FDT8+fWTH/Mn5df/pNEB1OUsMzwSoG60VAAw9Rq/FWb35unChiQNluz8LJhwg4QN+4+73n9sc10JAGpH4AAAEW9Gk+18EmeSdrFgct3ZGCxsOJQee7zlojneLIND5ToANSNwAGCqlYuU1Ly+Gk3WO+Pwv8Jg/4n2yRkqFn7+QTSU4ZEANSRwAGDaNXtYZNLbiDNJgyOZXP/vR3FqZ/kz9fFGAFArAgcAptZEbIWZnHZ+A5Ovvdm/neXPNddq+ZpeDQBqQ+AAwDRbjWnWWgkm1MLUjjMwPBKgRgQOAEyzRu8D+I3urTiT1qvBBFs6w/f3xUvRcIZHAtSIwAGAqdT4rTC/407AQ/7orTi1HzQ+cDA8EqBGBA4ATKtmb4V5KA2MzM54QdfQyMn2x1dP11rx3ErEfzMRRT+GRwLUhMABgKlzMCxyNSbBzvrZh0aa4TDZUtjwj94Z/PH/XfnYpZWYAIZHAtSEwAGAaTQZsxtSdcPWjTgzu1tMvj9ai/gfPuxXLzxOCib+x48j/u5EzVs0PBKgBrIAgClyUN3wafR7vWuj2EvbGH4Q2d5H3wYB+VK/XSJVImSH9w8GAe79PKLzfhk6nGMbw6euR1yYjOyFJ9jciPiP6xE//yDizkb/cymEePX1iD++Nom7WqQXxsUsyxq9zydA0wkcAJgqB8Mi34sa2fvig9j9j9dicWUMa6ML75bBw9WACfSTMnB4NwAYG4EDAFOlDBzSHpIrURO7n90ob9dj5vci5l6M8ZhdjZi59G0FRTrmxyorGJ/t7Yivv+4fX345YnExGMh6GThcDgDGRuAAwNQ4GCT3cdRE0d6I7b+8uH9/9vny9v2opxQ+zKxGLLwZMa81fmT+5m8i/uzP+sejUujw+usR//AfBk90uQwd1gOAsRA4ADA1ysDhw6jRMLmdv34r9r54f/9+rQOHoxbWIp5+R9VD1f7Fv4j45JOTH5NCh3/8j4MTfVQGDj8OAMZC4ADAVDgYFnkramT7L5b7wyJLM89FzP0wmiG1YCzVplBk8qSqhn/5Lwd7rNDhSQyPBBijmQCA6VCr7RhSO8Vh2JB075ef65VXApqwYfXuesTWTw2brEKa1TBo2JCkKog/+qOIv/23oypf7vTiF+29+GW7Gw+6xf7nlmezeGV+Jv7gqZm40Kr19atUinOtvF0PAEauCW9rAGAYVqPGim7E3lfRHFvXgwqk6oZR/JkB/bt7u/GvvmrHXz/Y+yZsSG7vFvHv7ve/9ssyjKi5NwKAsRA4sO+9//rjSwEwoQ62wlyJOpl5eAbC7u8iulvRDMVmmZDcDIbs+IDIQfzqV1GFFDakUOEkKYT489s78eVON2rs0sHAWABGTODAvrf+4rJ3jcAkq1U7RZKVgUP+3OpDn9/5ZbmO/zqaYe/nwZB9fYZv/uG2mUN0WMEwqBQ67BRF1Jj+H4AxEDgAMNEOrmyuRA3NvvpwDpJaK3a+KNeQ5YXuvTtp1kN5G3zdN1rZc0FNLC7GMP2bu51TPX6nV8StrVpXOayWPwtsrQIwYgIHACbdm1FTraXVmHnx0X+9FDLs/LoMHm71w4etf18e/7r/cfuziM4v+8FECiXGJrd+G7qXX45T+73fG2rgkMKDNCjytH5R71kOh8MjARghgQMAE+tgK8y1qLG5v/d+zLw82Doo7WKRKh56WxHde/3WixRKdH4do5ev9LfHZLj+8A/j1Ia8Q8VW92ytEQ+6tW6pSLRVAIyYwAGASdaIBcbc33on5v7ue5EvrcZZdO9E7P42RutC7cZiTIbV1dNVK6Tqhj/90xim2bzW21yex5LhkQCjNbG/UQCgXFzciprOb3icYm8zivbG/jHS/XTrfHZw3Nj/Wu/+w3N+86ciFl6N0Vh4M+KZ94OKpJ0q/tk/G+yx//Sfnq0q4gSppeL//GI7TuuFuTz+2+8tRM2tZ1l2OQAYCYEDABPpYCvM92IC7f3m/dj9/3/SDyUO5PNlDvAHUb3FqxFPvxtULG11+c//+eN3n0iVDf/knwy9neLQv/qqfeo5Dv/V0lz8weJMNMByGTpsBgCVEzgAMJHKwOHj8rAaE6r7u4+i81c//ubjM1c4pFkMC2sRvY3ySSvXYL3N/rF78HGSLUXMX+lXNpjbMFp/+ZcR//bf9oOHtP1lGir5d/5OxB//8dB3pjjqy51uGToMvlPFhVa2X92Qjg1wowwcrgcAlRM4ADBxyrDhUnn4NCbc9l8sf1PlMPNMxNwrcToz5dO09HE/UIBj/s3dnfjrB4PtPPEny3PxykIjqhuSzTJwWA4AKmdoJACTaCqm0WcLK99+MBunk6oVlj8VNvBY/8Wzc/GHz5x8YqUBk6mVokFhQ2J4JMCIqHAAYKIcbIV5K6ZA+/9ZiV7ns/37s8+Xt+8P+AcNfeQUNnd78R8e7MUvOt3Y7fW3vkytE7+/0Iq/d2G2KW0UxxkeCTACAgcAJsokD4s8buvPv/01PvdSxMygxQqpsiG1U8Ap7Rb9wGE2m4i3kIZHAlRMSwUAk+btmAJHd6hIslYMrrUSTI/2b3ux+Vd7+7d0/zxS0DAhYUNyLQCoVKMa7gDgJAfVDSsxDY4FDnGawMHchqnwm0868cs/a8f9je8Ofnz61Va88t8vxg9en48pl2a9XA8AKqPCAYBJ8mZMiaKz8d2Pd2Iwqhumwn/4P+7v346HDcn9z7r7X/ubDx7ElDM8EqBiAgcAJsLBsMjVmFK9zqCPVN0w6f7mg6396oYnSdUPQofpaMECGBeBAwCTYqoWDsX2xnc+7t4pPzdIe34ucJhk/TaK7YEfn0KHNNthiq2WYaUXBUBFBA4ANN7BguFKTJPZ5e98WHQjdr8c4M9pqZhog1Q2PPxn2jHlDI8EqIjAAYBJkMKGqbpKmV/40UOf27tdhg6/fcIfbNkOc5Kl+Qyn9bt/PegAkIl1NQCohMABgEkwdX3Y2cJK5M+tPvT53d9F7Pw6oth9zB+cfyOYTGnLy70Hp9/2cm+riClneCRARQQOADTawUJhJabQ7KuPzln27kRs/01E55f9ioe9r8sQ4ovy2FnTUjHBZp7KgjMzPBKgAgIHAJpuarbCPK61tPrY0CHp3juoeCjDhu7WSrSet6aaZDMXslj4/unf2j29MhPsD4/UbwQwZAIHABrrYCvMtZhis69ej9m/9U5kM48fYZGXwcTCf/7pfhsGk+0Hr8/Hab3ypwvBvukaPAswAmrvAGisMnB4L6Y8cDhUtDeiu7kee19+sH8/BRBpxkPre2/sV0IwHfYeFPF//8+bA89yWPh+Ky79r8+eqTJiAm2Wt4tZlm0GAEMhcACgscrA4VZM6fwGeJzNv9qNm//b3Sc+buZCHpf+l2fj6ZVW8I0fl4HDRwHAUIizAWikMmxYC2EDPGTp78/GP/jfl/arFx5nv7JB2PAotsgEGCIVDgA0kuoGeLLffNKJ3/3rnf2tL9Pt6Vdn4vn/cjae/wdzwWO9lmXZzQDg3AQOADTOwVaYHwfAkN2P+OkzWXYtADg3LRUANNHUboUJVOvp8udLGWouBQDnJnAAoFFshQlULIUNawHAuQkcAGiaKwFQrTcCgHMzwwGARjEsEhiRy1mWrQcAZ6bCAYDGsBUmMEKqqQDOSYUDAI1RBg5pZ4rVAKjeZnm7mGXZZgBwJiocAGiEg2GRqwEwGoZHApyTwAGApng7AEbL8EiAc9BSAUDtHVQ33AqA0TM8EuCMVDgA0ASrATAehkcCnJEKBwBqz1aYwBgZHglwRiocAKi1MmxIVxdXAmA8DI8EOCOBAwB1dzUAxsvwSIAz0FIBQG0ZFgnUiOGRAKekwgGAOrMVJlAXhkcCnJIKBwBqqSiK1Df9aZjfANSD4ZEApzQTAFBPhkXykF4vYncvBVIRe+lYfq7b7X8+fe5RsvLySp5/e8zL48xM//5Mq/95GMDSbq+3Vh7fDQAG4lcsALVkK0xSgLCzWwYM5W2v2w8YekUMXQodWuVtbrYfRMy6HMPjrWdZdjkAGIjAAYDaKcOG1fLwcTB1Uriws3dw3I2xSBUQs2X4MD/XP7ZMvOJAr0zBvvzqweWXvv/MegDwRDJ8AOrozWBqpOqFzk7EdruIXm/810JSFUX6+6RbkiofFuaFD6QwKounF2dTu9d6APBEKhwAqBVbYU6PnXJBv9UeXyXDWaTgYXFB28U0e7C1u/nbLx9cvHhx2fBIgCeQ0wNQN7bCnGBpLsOD7YjffR2xea9ZYUPS7kTcvhPx9Wb/PtNnYb61NLeQXwsAnkjgAEDdrAYT5zBo+Op2ukJczfDHUUptIHfv9/89gofp0mrlMdPK3wgAnkjgAEBtFEWxFnammDhpAGSqCJiEoOG4bu/b4CHdZzrMzrYu/eLz26sBwIkEDgDUydVgYqQF+ObdiNt3J38xnv59KXRI4YPgYfK1Wlm0spafVwBPIHAAoBYOtsK8FEyE7XYZNGw2b0bDeaX2is072iwm3cxMK41eX7116/ZSAPBYAgcA6sJWmBMgzWpIVQ33Hkxe+8SgDtss0q2Y0udg0s3PlYFDEYZHAjyBwAGAsTvYCnMtaLQ0SPHrKaxqeJxU5ZCeDy0WkyfL+zvLZ1kmKAU4gcABgLHb3e1dCRrtsJXA4vq70vORQofOTjBB8izb362itGJ4JMDjCRwAGLu8ZVhkk6XdJ1L7wLS2UDxJaqu4c6+/LSiTIz+ocmhlrbcDgEcSOAAwVr+7vb3WyvOVoJFS2GAhPRjP1WTJsm/uGh4J8BgCBwDGan5GD3RTWUCfnudscpRB6Tf3DY8EeDSBAwBj8/nnt1dmZ1urQeNYOJ+d527yZHmmLQzgEQQOAIxP3np7fz97GsWC+fw8h82XH30XXcSS4ZEADxM4ADAWqbohz/O1VisLmiPttmChPBwpdNjuBA2VZd/92WV4JMDDBA4AjEU3WquzM34NNUna4vHe/WCI7j+I2NsLJoPhkQDHeKcHwFjkWbw9I3BojLS14+YdW18O2+GWmYXndSIYHgnwXd7pATByv/rV3SvlYWVu1vyGpkhtFKnCgeFLz+sdlSON0+0+nBIZHgnwXTMBACOWt+Jqeqt+vAeaetpuR2yNc25DFhtFERvl2bJRLs7v5OnjLDbLqyabvSI200Na5bHb7d/fNxMrh3fLxy+Va/qlKGKl/O8stfJ4tTz/lsrTbyV9LmpgZ6d8jsvn+amFoMkOhkf+/kvL6wGAwAGA0UrDIsvF3mq632optKu7dPU9DTcciTJIKBds62Uo8PMyDNjo7cbNl17KNuJsNgZ94JdfFpeKPFbK8OJSGU78qPx7XBpHEJGe5/m58nXhZdEIxWP6YA6GR64HAOHSEgAj9fkXd98r36evpfsvvfhMUF9pPfX1ZjWtFGWgsFku6m92i/ik/HC9fT9uXryYbUZNfP55sZLPxqXy376a5/Gj7CAkq9pcGTgseVk0wle3t2Jnp/vIr3W2u8sXLy7X5nwGGBcVDgCMTJrgXi5iV4NGGPrchiw2ut34WRk2fNS+V6+A4biDyop0+yh9fOtWsfTUM7Ha68WVvBWvV1UBkVordvbK4ME7tNp71AyHQwfDI68HwJTz6wyAkZldaO0Pi0z3tVPU27DmNmQR66mKoVXERy+8kN2MhjoIRz46uMXnvy1Wy9BhrYrw4d69iO8tBzXXPSGNy7Ls9QBASwUAo/Pr39y9FUcChxeevxDUT1pH3d48+xaYqV2i/G/8tLy7/tL3s/WYcIfhQ6sVb6ShlDEEF54qb4tBTfXKb/QXX568tYi2CgAVDgCMyC8+v7caUawEtZbmNmzeOVvYcFDNcOOl5yc/ZDjqIFRJt/j8yyJVPVwtA4hLcQ6puiTtWGEjl3ra231yr9H8Yr5WHt4NgCmmnhWAkZjJizeD2jvt3IbDaoZy/fXaC89nl6ehouEkL72Qvf/i97LXysDmcq8XH8QZpeDn3oOgpnb3uk9+UM+8GgC5OQCV298KM2vdOv55u1TUS5rbMOgi9zBoaN+Pd+s8/HHc0m4X0YrreR5nCtyWnjNAso7u3mvHg63dkx9UvkZ++OKzpnEAU02FAwCV60ZrNai1VNXwYOvJj0tBQ3n1/saDu3Hxpe9n14UNJ0u7Xbz0QrbW242LZ6l4GOR7wujt7g1QBlTE0q9vb78aAFNM4ABA5fIsu/qoz5+0rRyjM8jcBkHD+Zw1eNgtL6JvtYOa2dsbrO+o1969HABTTOAAQKVSO0W5pH3kAL2iOMWwACqT2iieMLfho+5OvCZoOL+jwUNxMGjySVKVQyGbq41U3dAbdKpqUZxreChA0wkcAKjUSe0UO7sCh3FLcxvancd8MYubafjhi89nP04L5WBo0vP5g+ezNFjyrfJ53jjpsSlsuK+1ojZ2dwcYGHkgP9gGGGBaCRwAqFSexRuP+9re3uBv3Bm+VNXwqCGRh+0TabeFad91omppV4u5PF4rM4WfnvS4FAzt7QU10Omc4hvRCjMcgKkmcACgao8tKTbDYXwO5zYcl0WsH7ZPBCOxvJxt/uD57Fpqszip2uGeKoda2Nk9TVCarQTAFBM4AFCZ/vyGx5cU7+yocBiX43MbUlVDGUL85IXns8vaJ8YjPe8vfi+7mKpLHvX1NECysxOMUfqZNfD8hqSIpQCYYgIHACrT67VOHJjWK1e4qhxG76G5Demqejcu/+D72bvB2KXqkjQ741HVDvcfGCA5Tlvt3TgtW2MC00zgAEB18idPaO/saEwfpeNzG9LsgK278doLL2Q3g9pIszN6O3H5+E4W6ftnm8zxUZUFcDoCBwCqtPKkB3gDPzpH5zYctlCk2QG2uqynb3ayONZisbX9xG1MqUD6WdX1xAOcisABgMrkWfbEUuJTTXznXL6Z26CFolH2Wyx68VZW5kXp4xQc3b0fjNhZ2imSbrt9MQCmlMABgMoUkT1xYFqa46DKoXrfzG3I4mYq1ddC0Sxp+8zubrx2ONchDZDUjTRaZ/05lXVDBREwtQQOAFQmi2KgCe1b22e7cshgjsxt+GjrbtiFoqHS9y2FRYehw717BkiOSvoZddZ2ivzCwu0AmFICBwAqUwwwwyFJbRWFlVMl0hopzW1IwyFffD77sXkNzZZCh7l8v9LhpgGSo3P/gf1IAc5C4ADA2KW2ClUO1XiwVYYO3biRhkMGE2F5Odt88XvZa+XdDwyQrN55h0X+cHnxswCYUgIHAGphW+AwdClsaLfjxovfz64HE+fF57O1Mqv74Og2pwzfvQedOLPM/AZgugkcAKiF3b2e4ZFDlC7IloGDsGHCpdBhZyc+MECyGuln0vl+LhUbATDFBA4AVCaL/nC7QZ3rSiLfSGHDnfvChmmRQof7W/FBMHTn/pnUDe0UwFQTOABQG+e/mkjS3Ysb33tO2DBNyu/3WrcrdBimNFfmvD+PiixsPwtMNYEDAFXaiFPavGvs/nns7cVP5+eFDdOo1Yo0GNQCd0iGsjNFnvl+AFNN4ABAZXpFcepy4jQN/t59rRVnUT5rN2dn7UYxrbJsf8vTy3GGoI/vSq0U3SFs/1HsdjcCYIoJHACo0kacwdbWbvlmvwgGV16L3ZzvLzaZYkKH80tBw/37Q6huyGLzlVeWVTgAU03gAEBlisg24gx6RRGbd7eDwXTKsOH/ivjJwWKTKVeeBxvl4cfBmQytratbfBIAU07gAEBlWtFdjzNKw9oebA3hKuMU+OuIG3+aZe8HHChDh3Rl/SfBqaRWimENru1l2UcBMOUEDgBU5qWXljdSWXGc0d17ndjbO38f9ST79xE3f5Rl7wYck/XPi58GAxlaK8WB3XMErgCTQuAAQLWKWI9z+Hpz2zyHx/iiDBs+UTrPya6HnSueKIUNX90eYhtXVty8mAJXgCkncACgYufrY04LgdubW8F3pSGR5fLorf8pO9ucDKbDwVyPFEqZ73GC2/vB5vCqqXq9TGUJQAgcAKhYVvTO3ce8u9cb3iC3CfH/lWHDxX6fPpzoYIjkjeCR7t5r7/+MGSbtFAB9AgcAKpXmOGRD2KJve3t3f6AbkeZa3Pj7BtJxCmmeQ1GEc+aY9DPlwdZuDFWv+Jl2CoA+gQMAlesVxQcxBGmg27SHDuW/f2N2tnU94JQ++2zzrftbO1orDqSfJcMcEnmom/UMcQU4IHAAoHI77eG9AU8LhFQCPY3u3OtsfnVv+3LAGVy8uLx5d3PrLZVC1YUNEcXG77+0vB4A7BM4AFC5tNApD+sxJKkEOg15K4rp2L0i/Tu/ur0VW1udG0q1OY+XX17+qFxor6eZKNPy+jkuBZbVhA2pmiszKwPgiCwAYAR+8fnt1VbW+jiGqNXK43vLT5XHyf11drhd316v9/7LLz77VsA5ff757ZUib33ayvOlSX/9HJUCls077Wh39qIaxcYPf/DcxQDgGyocABiJfplxMdRdFdJi/HdfPYit7SEPfauJrfZu/O7rrfLf2d3Y6XVdOWUo0iDXXre4cfj6ebBVzdX+Okn/1t9+tVVh2KC6AeBRVDgAMDK//PzuWp7Fe1GBxcXZeObC/ERcrU1XYu/d/3Z6frfoXtYXzrD9+jd3Pi3fCl5K9yfp9XNcClTuP9iJXq/KFhLVDQCPosIBgJF55aVn348hznI4Km2buT/noOHVDukKbLoSexg2lOHDDWEDVegWvZ8c3j98/UxStUO/HWkr7t7rVBw2RHSKnmGuAI+gwgGAkapilsNxTbxamxZHaZDfzk73yGddNaVav/zNnXfzyK4e/VyajfL0hbl4qnwdNVGqELpfBidbZWhXddCQlP+Pn77yw+euBQAPETgAMHK//s3dFDisRsWaEDykoOHeg539K8zHdYruRbtSUKVbt24vzS/mqbVi5fjX5uZa+6+fdGyKVOGU2ifS62o0io3Odu+1g514ADhG4ADAyB1OyY8ilmIE6hg8pEqGNBRy+7EtIMVPfviD594NqNiTqo5mZ/J46qn6VjyMuqLhKKEgwMkEDgCMxS9/fedanmfvxAilK7WLC7PlbSaybPS/AtPCKF2BTXMavts6cexxWdgCk5Ea5PWYWi0Oqx7qEN6l11C7U4Z27b2RBw1Jmq/y8kvPXQ8AHkvgAMDY/PqLux9GEVdiDBbmZ2I+3eZmKl08pZChXS6IUjXD3l5vgIVRsZEG0Llqyqid5vWYqh7S6ycFeDMzo5lBnl5Lu7u9sYYM38jiox+++OyPA4ATCRwAGJuT+sdHKS2eZmZbMXdwO+sCKi2Iut20KOrG7l66+to9dS+5LTAZl7O+HlPlQ3oNpeqH2ZnyNpsPpYLoMGDov5b2BgzsRsHcBoBBCRwAGKtRz3MYVFpEpcqHvFw4ZXkWrfzhX5ndg8VPChVS0HDeQXVKtBm3/ddjln983hAwBRDpdbN/LF9DM63+x/kjgojD181eeh2Vr6mivO3u9UY4+PE0VCABnIbAAYCx+9Wvbl/JWq0PY4oJG6iLuoaA4ydsADit0TTdAcAJXn55+aNer/hJTKkybPhA2EBdvFQuqHtZ93J5WUrLwKGs2OzlvR8LGwBOR+AAQC288sPn3k1X+WPKHIQNawE18soLyzezXve1dFU/pl5RBjC9y+k5CQBORUsFALXyq8/vXM+y7O2YAsIG6m5YMx2aSxsFwHmocACgVlJrQa/ovjXp5dy9XvFTYQN1l9orsnLBXS68p+7qflH+m4UNAOejwgGAWprsK6vFT374g+feDWiQX/7mzrt5ZFdjCqRA8JUfPnctADgXFQ4A1NK3V1ZjPSZGsdEtupeFDTTRKz947lqviLcmeq5DGg5Z/huFDQDDocIBgNqbiLkOWXzU2eq+dfHissn/NFq/+qj1Xnl3NSbLeqcoX6NaKACGRuAAQCMctFh8WP7quhRNUl4x3dvL3vrPXn72o4AJ8svP767lWfF249ueytdoFHFD5RHA8AkcAGiUxixyykVM0Yuf7rR776pqYFKlILAXeapAejMaKG3F6zUKUB2BAwCNVOfgocji/Z1e94bSbKZF04IHr1GA0RA4ANBotQkeVDTAkeAhXq9dGOg1CjByAgcAJsIvPr+9mke+luXxRnn5cilGZ728XvqzznbvfYsY6Lt16/bS7ELrSp5FqnhYjfFa9xoFGA+BAwAT51e/un0l8vxKJVdZ04C5yNajKD6xgIEnS1UP3Witjjh8WBcyAIyfwAGAibZf4t2LS2UAcSnLsx+VQcFK+dtvZbAqiGIjsuxmr1t8FlnvZrTi5isvLN8M4ExS5cPMQlzKivxKnl6PWXHp3BVJ+7tMlK/TXvHzIut9tNeOm0IGgHoQOAAwtW6VYUQ6zkTsH/ciNva/0I5NCxYYjW9CiPJ1mEW+UhSxlLWy5x712KJb3Mmy2Cyit5ECwN1u+Vo1+BEAAABG473Vj0c5xwQAAAAAAAAAAAAAAAAAAACg0cxqAAAAAAAAAADq6b3VD1U1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQmfdWP14KAAAAgPMSMgAwyfIAAAAAAAAAAAAAAAAAAAAAAACAmntv9UPDIQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoKb+E+7XNLTn9vTCAAAAAElFTkSuQmCC" }))));
};

var Icon$9 = function (props) {
    return (React.createElement("svg", { width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M16.0005 17.0096V10.9996C16.0005 10.4496 15.5505 9.99956 15.0005 9.99956C14.4505 9.99956 14.0005 10.4496 14.0005 10.9996V17.0096H12.2105C11.7605 17.0096 11.5405 17.5496 11.8605 17.8596L14.6505 20.6396C14.8505 20.8296 15.1605 20.8296 15.3605 20.6396L18.1505 17.8596C18.4705 17.5496 18.2405 17.0096 17.8005 17.0096H16.0005ZM8.65052 3.34956L5.86052 6.13956C5.54052 6.44956 5.76052 6.98956 6.21052 6.98956H8.00052V12.9996C8.00052 13.5496 8.45052 13.9996 9.00052 13.9996C9.55052 13.9996 10.0005 13.5496 10.0005 12.9996V6.98956H11.7905C12.2405 6.98956 12.4605 6.44956 12.1405 6.13956L9.35052 3.34956C9.25693 3.25818 9.13132 3.20703 9.00052 3.20703C8.86972 3.20703 8.74411 3.25818 8.65052 3.34956Z", fill: "white" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z", fill: "#4BE43E" }),
        React.createElement("path", { d: "M6.25 7.72H11.25V9.22H6.25V7.72ZM13 15.75H18V17.25H13V15.75ZM13 13.25H18V14.75H13V13.25ZM8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18ZM14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z", fill: "#4BE43E" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: "url(#paint0_linearCloseRedIcon)" }),
        React.createElement("g", { filter: "url(#filter0_dCloseRedIcon)" },
            React.createElement("path", { d: "M17.5352 17.4648L24.6062 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement("path", { d: "M24.6064 17.4648L17.5354 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_dCloseRedIcon", x: "12.1211", y: "14.0508", width: "17.8994", height: "17.8994", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "2" }),
                React.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linearCloseRedIcon", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FF6161" }),
                React.createElement("stop", { offset: "1", stopColor: "#F45555" })))));
};

var Icon$2 = function (props) {
    return (React.createElement("svg", __assign({ width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { opacity: "0.5" },
            React.createElement("path", __assign({ d: "M20 8.93C19.96 4.54 16.4 1 12 1C7.6 1 4.04 4.54 4 8.93V14.93C4 19.35 7.58 22.93 12 22.93C16.42 22.93 20 19.35 20 14.93V8.93ZM18 8.93H13V3.09C15.81 3.56 17.96 5.99 18 8.93ZM11 3.09V8.93H6C6.01881 7.52547 6.52939 6.17198 7.44292 5.10497C8.35646 4.03796 9.61514 3.32496 11 3.09ZM18 14.93C18 18.24 15.31 20.93 12 20.93C8.69 20.93 6 18.24 6 14.93V10.93H18V14.93Z", fill: "white" }, props)))));
};

var Icon$1 = function (props) {
    return (React.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V2ZM0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM11.5 7.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H5.707L7.854 10.646C7.90049 10.6925 7.93736 10.7477 7.96252 10.8084C7.98768 10.8692 8.00063 10.9343 8.00063 11C8.00063 11.0657 7.98768 11.1308 7.96252 11.1916C7.93736 11.2523 7.90049 11.3075 7.854 11.354C7.80751 11.4005 7.75232 11.4374 7.69158 11.4625C7.63084 11.4877 7.56574 11.5006 7.5 11.5006C7.43426 11.5006 7.36916 11.4877 7.30842 11.4625C7.24768 11.4374 7.19249 11.4005 7.146 11.354L4.146 8.354C4.09944 8.30755 4.06249 8.25238 4.03729 8.19163C4.01208 8.13089 3.99911 8.06577 3.99911 8C3.99911 7.93423 4.01208 7.86911 4.03729 7.80837C4.06249 7.74762 4.09944 7.69245 4.146 7.646L7.146 4.646C7.23989 4.55211 7.36722 4.49937 7.5 4.49937C7.63278 4.49937 7.76011 4.55211 7.854 4.646C7.94789 4.73989 8.00063 4.86722 8.00063 5C8.00063 5.13278 7.94789 5.26011 7.854 5.354L5.707 7.5H11.5Z", fill: "white" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V1Z", fill: "#4F46E5" }),
        React.createElement("path", { d: "M12.7 3.80005C12.3 3.40005 11.7 3.50005 11.3 3.90005C10.9 4.30005 11 4.90005 11.4 5.30005C12.4 6.20005 13 7.60005 13 9.00005C13 11.8 10.8 14 8 14C5.2 14 3 11.8 3 9.00005C3 7.60005 3.6 6.20005 4.7 5.30005C5.1 4.90005 5.1 4.30005 4.8 3.90005C4.4 3.50005 3.8 3.50005 3.4 3.80005C1.9 5.10005 1 7.00005 1 9.00005C1 12.9001 4.1 16 8 16C11.9 16 15 12.9001 15 9.00005C15 7.00005 14.2 5.10005 12.7 3.80005Z", fill: "#4F46E5" })));
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
var StyledButton$3 = styled.button(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: 0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";\n    background: linear-gradient(180deg, rgba(132, 173, 128, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #ff6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.yay-button--disabled):not(.yay-button--disabled):not(:active) {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: 0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";\n    background: linear-gradient(180deg, rgba(132, 173, 128, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #ff6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.yay-button--disabled):not(.yay-button--disabled):not(:active) {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, function (_a) {
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
var templateObject_1$A;

var Button$6 = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon; props.external; var className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, variant = props.variant, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children", "variant"]);
    var isDisabled = isLoading || disabled || props.spinColor || variant === variants$1.LOAD_COLOR;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("yay-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("yay-button--disabled");
    }
    return (React.createElement(StyledButton$3, __assign({ "$isLoading": isLoading, variant: variant, className: classNames.join(" "), disabled: isDisabled }, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            props.spinColor || variant === variants$1.LOAD_COLOR ? React.createElement(LoaderSmall, null) : children,
            props.spin ? React.createElement(Icon$z, { spin: true, fill: "rgba(0,0,0,0)" }) : null,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button$6.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$1.PRIMARY,
    scale: scales$2.MD,
    disabled: false,
};

var IconButton = styled(Button$6)(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$z;

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
var Text = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), function (_a) {
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
var templateObject_1$y;

var variants = {
    COLLECTION: "collection",
    SUCCESS: "success",
    WINNING: "winning",
    INFO: "info",
    ERROR: "error",
};

var StyledAlert$1 = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: flex;\n  align-items: baseline;\n  width: fit-content;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 90px 15px 23px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: baseline;\n  width: fit-content;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 90px 15px 23px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
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
            return React.createElement(Icon$z, { spin: true });
        case variants.WINNING:
            return React.createElement(Icon$X, null);
        case variants.SUCCESS:
            return React.createElement(Icon$A, { fill: "#47DA3B" });
        case variants.INFO:
            return React.createElement(React.Fragment, null);
        case variants.ERROR:
            return React.createElement(Icon$l, null);
        default:
            return React.createElement(React.Fragment, null);
    }
};
var Button$5 = styled.button(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n  }\n"])));
var Row$1 = styled.div(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n"])));
var SetButton = function (_a) {
    var variant = _a.variant, onClick = _a.onClick, icon = _a.icon;
    var Icon = getIcon(variant);
    return (React.createElement(Button$5, { disabled: variant !== "winning", onClick: onClick }, icon || Icon));
};
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick, icon = _a.icon, propsWrapper = _a.propsWrapper;
    return (React.createElement(StyledAlert$1, __assign({}, propsWrapper),
        React.createElement(Row$1, null,
            title && (React.createElement(Text, { fontWeight: 600, marginRight: "5px" }, title)),
            React.createElement("div", null, children)),
        React.createElement(SetButton, { icon: icon, variant: variant, onClick: onClick })));
};
var templateObject_1$x, templateObject_2$l, templateObject_3$f;

var StyledAlert = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  width: 100%;\n  max-width: 367px;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 60px 25px 23px;\n  color: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n  ", "\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  max-width: 367px;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 60px 25px 23px;\n  color: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.75, theme.colors.black);
}, background, space, layout);
var ButtonClose = styled(Button$6)(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  box-shadow: none;\n  &:disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  box-shadow: none;\n  &:disabled {\n    cursor: default;\n  }\n"])));
var AlertBlurCustom = function (_a) {
    var handleClose = _a.handleClose, title = _a.title, children = _a.children, propsWrapper = _a.propsWrapper;
    return (React.createElement(StyledAlert, __assign({}, propsWrapper),
        React.createElement("div", null,
            React.createElement(Flex, { justifyContent: "space-between" },
                React.createElement(Text, { fontWeight: 600, mb: "7px" }, title),
                React.createElement(ButtonClose, { onClick: handleClose },
                    React.createElement(Icon$X, { fill: "none" }))),
            React.createElement("div", null, children))));
};
var templateObject_1$w, templateObject_2$k;

var BaseLayoutBlock = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 59px;\n  background: ", ", ", ";\n  ", " {\n    padding-top: 80px;\n  }\n"], ["\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 59px;\n  background: ", ", ", ";\n  ", " {\n    padding-top: 80px;\n  }\n"])), function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat center top / cover";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var BaseLayout = function (_a) {
    var src = _a.src, children = _a.children;
    return React.createElement(BaseLayoutBlock, { src: src }, children);
};
var templateObject_1$v;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
function MyTimer(_a) {
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color, texts = _a.texts;
    var days = Math.floor(expiryTimestamp / 86400);
    var hours = Math.floor(expiryTimestamp / 3600);
    var minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
    var seconds = expiryTimestamp - hours * 3600 - minutes * 60;
    var handleDigit = function (value) {
        var leftDigit = value >= 10 ? value.toString()[0] : "0";
        var rightDigit = value >= 10 ? value.toString()[1] : value.toString();
        return { leftDigit: leftDigit, rightDigit: rightDigit };
    };
    var timeArray = [days, hours, minutes, seconds];
    var timeTextArray = [texts.days, texts.hours, texts.minutes, texts.seconds];
    return (React.createElement(Wrap$5, { color: color }, timeArray.map(function (item, i) { return (React.createElement(React.Fragment, { key: "item-" + i },
        handleDigit(item).leftDigit,
        handleDigit(item).rightDigit,
        timeTextArray[i],
        " ")); })));
}
var TimerSimple = function (_a) {
    var time = _a.time, color = _a.color, texts = _a.texts;
    return (React.createElement("div", null,
        React.createElement(MyTimer, { expiryTimestamp: time || 0, color: color || "white", texts: texts })));
};
var Wrap$5 = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  height: 32px;\n  color: ", ";\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n"], ["\n  height: 32px;\n  color: ", ";\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n"])), getColor);
var templateObject_1$u;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var StyledLink$1 = styled(Text)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n  & svg {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n  & svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "green",
};
var templateObject_1$t;

var LinkExternal = function (_a) {
    var children = _a.children, icon = _a.icon, props = __rest(_a, ["children", "icon"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        icon || React.createElement(Icon$U, { ml: "4px" })));
};

var Loader = function () {
    return (React.createElement(LoaderBlock, null,
        React.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.5818 7.25455C38.7515 3.08485 33.0788 1 25.5636 1H2V49H25.5636C33.0788 49 38.7515 46.9152 42.5818 42.7455C46.4121 38.5273 48.3273 32.6121 48.3273 25C48.3273 17.3394 46.4121 11.4242 42.5818 7.25455ZM35.3338 26.837L16.6011 40.3936L21.0088 28.4319L11.0914 23.6472L29.8242 10.0906L25.4165 22.0523L35.3338 26.837Z", fill: "white" }))));
};
var flip = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "], ["\n    0%   { transform: rotateY(0deg); }\n    50%   { transform: rotateY(180deg); }\n    100% { transform: rotateY(0deg); }\n  "])));
var LoaderBlock = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  & svg {\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  & svg {\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    animation: ", " 3s linear infinite;\n  }\n"])), flip);
var templateObject_1$s, templateObject_2$j;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    left: -150px;\n  }\n  to {\n    left: 100%;\n  }\n"], ["\n  from {\n    left: -150px;\n  }\n  to {\n    left: 100%;\n  }\n"])));
var pulse = keyframes(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGrey;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$r, templateObject_2$i, templateObject_3$e, templateObject_4$c, templateObject_5$9;

var getBackgroundColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var StyledButtonMenu = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 9px;\n  display: ", ";\n  width: ", ";\n  box-shadow: ", ";\n  font-weight: 400;\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 9px;\n  display: ", ";\n  width: ", ";\n  box-shadow: ", ";\n  font-weight: 400;\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n  ", "\n  ", "\n"])), getBackgroundColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, color = _a.color;
    if (disabled) {
        return "\n        opacity: 0.5;\n        & > button:disabled {\n          background-color: transparent;\n          color: " + (color ? theme.colors[color] : theme.colors.text) + ";\n        }\n    ";
    }
    return "";
}, space);
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$2.MD : _c, color = _a.color, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, props = __rest(_a, ["activeIndex", "scale", "color", "onItemClick", "disabled", "children", "fullWidth"]);
    return (React.createElement(StyledButtonMenu, __assign({ disabled: disabled, color: color, fullWidth: fullWidth }, props), Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            color: color,
            disabled: disabled,
        });
    })));
};
var templateObject_1$q;

var InactiveButton = styled(Button$6)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  background: transparent;\n  opacity: 0.7;\n  &:hover:not(:disabled):not(:active) {\n    background: transparent;\n  }\n"], ["\n  background: transparent;\n  opacity: 0.7;\n  &:hover:not(:disabled):not(:active) {\n    background: transparent;\n  }\n"])));
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$1.OPTION : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: variant }, props));
    }
    return React.createElement(Button$6, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$p;

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
    var tooltip = (React.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React.createElement(ThemeProvider, { theme: invertTheme }, content),
        React.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var ModalContent = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledModal = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"], ["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
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
var ModalHeader = styled.div(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  &.welcome {\n    padding-bottom: 0;\n  }\n  ", " {\n    padding: ", ";\n    &.welcome {\n      padding-bottom: 0;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  &.welcome {\n    padding-bottom: 0;\n  }\n  ", " {\n    padding: ", ";\n    &.welcome {\n      padding-bottom: 0;\n    }\n  }\n"])), function (_a) {
    var paddingTopHeader = _a.paddingTopHeader;
    return " " + (paddingTopHeader || "20px") + " 14px 24px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var paddingTopHeader = _a.paddingTopHeader;
    return " " + (paddingTopHeader || "27px") + " 20px 40px 27px";
});
var ModalTitle = styled.div(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"], ["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var Overlay = styled.div(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  pointer-events: none;\n  display: block;\n  background: ", ";\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"], ["\n  pointer-events: none;\n  display: block;\n  background: ", ";\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGrey;
});
var Heading = styled.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  &.welcome {\n    font-weight: 500;\n    font-size: 21px;\n    letter-spacing: 0.5px;\n  }\n"], ["\n  &.welcome {\n    font-weight: 500;\n    font-size: 21px;\n    letter-spacing: 0.5px;\n  }\n"])));
var Image = styled.div(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 17px;\n  left: 50%;\n  transform: translateX(-50%);\n"], ["\n  position: absolute;\n  top: 17px;\n  left: 50%;\n  transform: translateX(-50%);\n"])));
var Modal = function (_a) {
    var welcome = _a.welcome, title = _a.title, onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, image = _a.image, paddingTopHeader = _a.paddingTopHeader;
    return (React.createElement("div", null,
        React.createElement(Overlay, null),
        React.createElement(StyledModal, null,
            React.createElement(ModalContent, null,
                React.createElement(ModalHeader, { className: welcome ? "welcome" : "", paddingTopHeader: paddingTopHeader },
                    React.createElement(ModalTitle, null,
                        React.createElement(Heading, { className: welcome ? "welcome" : "" }, title)),
                    image ? React.createElement(Image, null, image) : null,
                    !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                        React.createElement(Icon$X, null)))),
                children))));
};
var templateObject_1$l, templateObject_2$g, templateObject_3$d, templateObject_4$b, templateObject_5$8, templateObject_6$3, templateObject_7$3;

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
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null, React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
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

var Metamask = "data:image/png;base64,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";

var TrustWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOuSURBVHgBzZZdbBRVFMfPuTOl23YXipBStfqgaKJUHzDwYHywiYkmxESL3Qc1RnxRi1uqtsboQ60JRpMGV7spiaKxMb5su8VgNMGopAYICQGWB0hIeOgDH2n5XDo7s8zOvYcz27szpZSyZSHhn+zcO/eee373nHtmdgDuVSUydkvX704bLFJYsSURdmWsLon4NS+KINCO2mj084EXcaqS5bcEEQO6/7A3eC58gUjPzJk+QwTJOkHDA+2xqYpAnWmr2VS0smiiEJIawcS1AvEpBr3E0w+EZLjEwGME+NwsPx4B/M3Oxnn+qKfkJRMMh6OWg/HY8QDUmc6tFqZxkI0a4eah5RXh9iVWceu3bzfmEmP2OwDqE3bxOCwkpXpTHUsHhN8XBqyfF4J4lQEHuLNZRuRDQx3R3uSm5ZeRQ0ptbPhpUkafFAJe4PldbG3NC0Kx3m/MElQKl2FaYlAg7AcPTp2FukMjcXRutlmek9z86//6+vaY59asazVqzQfR8+6TgD9w6iKE5AYgRFHwk1+Cgvw/1R4bhUWqv7/N4yarf7A5nUuBYUQEcVb87fuXq860XV5gglkHd0BomDV+qxCLAaihITZdNpCgauGOiEp+lOeGEXlFmStPc6gRqFI9u6mh7FsYNSEII0ZQMYSqHqqUYxVWlvtcoHYAMsm1QzOMQpUicJvCO+NCAFqWzfoRKW3WAlUKpRE8k4hwOgDNlCae0aBHoEoZgpaX+0TeZADSIyf0Hu6HKqVQPFH2CjW1Yeq0JnS7qmeMmqAKISn9lqeLK2JLJq4HIR7WvWWudFZDFSKENaUWxIn+NizMAdG+wFCoDrhNfTg6zRAsnTO/6/aWxwNQqj16lP/ETs7sBF57fg+ZcBsqIn6mfZCUxl83gPQOftHdltYL1mBHmgxYhD4Yzb3Jzev6dvf2eN34vKBILJpkWnaGiu81CWs8sbPwKNxC3TupMTFmfceFPQwz4VwBNLfAdUHMUdcu+2Hlyn8Y9Jgecvj8hgvkbt2xccWp2bZ9ROL8iPUumtjHzlfpYalQvT/UvvTHBUG+ev+kZsfJf8+zYVEQXOTLtpydT/76VnM+kclv4GfvK66wp2fZHOEcbfLPe67PBb+CtmTy6/iVkeSzezb0BRMIeIR7r4ZjNMVjn07Kid9G4q3ufL4q+q7j/L+hiL5EXbazlnNaYZst6r/5+RWcXshHxR+QnempZsOo7+GIPvLXcRT/kcSPh+LRLNwNdWfyaxOj+ZfhXtU1k1hmPhDWXrwAAAAASUVORK5CYII=";

var MathWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAATCAYAAAD4f6+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMnSURBVHgB7ZVfSFNRHMfv3eYm1ZCZDSwoCywMoYdWMIJqajrRCPsjJoZJEFgUIkYQvgwrQtiDYb1FKf1Bn+YwnDoxhqzyIYJegsjsr9hDkJDpmrt9TtwrS2/brbfAH/z4nfO9v3N+39/vd865krQi/5nIRh1DoVCuLMvtqDWRSDR5vd6pVP6Dg4PnMeX4d5eWlj6QDIrFqKPJZGrB1IkxQd5hLvzJNxKJrJubm+tQp7tRw4RMRh2pymdtDKHJVL7z8/MxzIw6nZb+QlK2bGBgIM9sNt9h6ITQWYvFkoVNMP+KdkPsYywWO15RUfFW+A8NDTVjmsH7sH6sJx6PP8FeY74d7SgrK7ueKmbKCkGgHLMPLaBljSUlJQHOQ5D5FXSjoihum812JGlJG7oB/MzCwoIJ/1sklAehSnQLeklKIynPEJtFyVBhKBPkUTAYXCVwsB7I7mH4BQ1p/vhECOrFTlKJ1+FweO3s7OzTzMxMcQFywW9LaUS3ZcPDw+foTBGELpLpd6wdEvlUqYtNTXyrysjImCHYG+wavreDj0Wj0U632+3i+0sIh9lqF3iXqAxrc4qLi1/Q1ibGLvZt0bupuhVikxY2ES15TqY+lWQT8yxw0coG2lGn4ifAj4EX+Xw+cT7GCZovyPzKWJZrafNJhp/wk8XTgbWQxEOw+0tj654h2Dey6DKLO5NI3sR8QN9TrVYN51CLKy3epxoNg8ArURl12qbh+ChU7xTaSkK6T8Fiy0ZGRjZBpJ6N/FTlm4ZTgTBYDiQqnU7n9MTEhGy329eTYQB8HN/Tmi+VqcL4CXiDdvh5HFeLvcCvgh9kTT1te6b5870GTIFcz7IKQWYbRtyCbA0LBAJ2gu5luIO+F7pcrh/V1dUxzk2uwNCjv2UnywcwmwlySMyTEqtECyFauMS/AaxWt0JC1B4ryRgVKoDsVjLuW4IfxneK7B5rWG9vb7bD4fCAj4EvPojiPbNarftJ6q7H44mni7lM+G95KHOnZEBGR0ctkLvX39+/04g/5OrUFuqK7qGm5KJtBWRsltIIh9pGlnncvFWSAaFKYm+HtCL/KD8B1wF1hV4sChMAAAAASUVORK5CYII=";

var TokenPocket = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgB7ZRNS0JBFIbfGS8lUbRpEZSClrVq16JltAv31SL6CUW7dv2E+hFqbQOhXUbRok1gECGKFATtxPyotO6cRu3q9ePqTBltfOHe+TpnnnPmnrnAQH0QU7LafAhCiNXGBNncZZ8xIdtnCLrG0exZbxgRQzjr7WTEY9ld8SZ2oCLGrkAfW4jMp51hocwCuHHbyd9IFvGZeIUCCbWsKQ/Bgzj2X9pXOfqq+vGOgVMIGynPH8Ka5IWL7/UHxuy15VBnRGtYjhl6MOq4UQ+D6vwEpgKTejDW1lGUtBfmuDUyGvMj70Dpvr4hYx4Z/WizM0FbLsrY0A6KFKIyrGA1IuXSb1MSkZk5a/DDAumWIWu0hJB9RQ/GVL4ZWcA0suJQH0atHYbuxUIp+VrBaSCnD2Ot0LaBpaLc8gBGeQkR/2ProgFlWf+9Jt4+OE/IqhUg8wn5lziii46VpAHrkAnxC4R951BU72PUvce/gtH300S1stQ4GOgWCGtxEyWtvJVCo2k3XONGlWbe5dZR5IXaQiEODTnDyLyR7+FK13TLTNxDlUtdBvedYJuVMNB/6Qu9r4QNjf96IQAAAABJRU5ErkJggg==";

var WalletConnect = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAARCAYAAAAhUad0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgBlVVNSFRRFD7n3jdTyEDWImjbItu1aNPMm2IySCiKwJAiUCtsFENoahOUjgW1KDMwbd7YHy4isYUhLaUpciaDsl27VrkJKpGI9P2czlN05r15d2Y8cHnvfud733fvuT8PoUrsNahuM9gnAKEDCBIqHgFME8FYoVMbq6aJlZK6YcYBxAOW3AO1BsE3h5yTha7wnIoiVIl4xrxGgO82ZOgGwk4hxGfdsK+rKUGGhplmw76A1BuH4IWQ8jvY8ENosMW2zAYeezMiNJaL45X3STngx7UgUwfEDnRXaa1PNMsmqUJ3KB9An+Y2EjWWdgvSJgGpoagDkSB95ZrqhvWMH22ENBSe11K5frSgWhChPmo/4fG2c6XS+aTsr8iPPaTtfmzfsHVMxY9naZdSyzAP+7EEV8InYA7wzBajGasVagg9Y/Yyn6IVNouHP2Id17PWYtyw024f9xv2DQeo+DHZp2Y6N42rBHiT9bmlW6cDcRlDyjKyWQuTnvJr3SqC94WD5CkFoRzjWbQpDNOlhisS3HfxIH4sa7Wz4XjR0OVTTDi2bObXuSIIYSY+ihrWuQDDoGMELu43ZsMOJBj1EBG/aGHZJApdOB8Ki0YXKBm+xrfG45hh96gMeaN+LTdeXTN91DrPhlkoPZIIuX+/RCJ3FhfWj0xi8He9WRd5xdkDHi2AHLeDpQYO4GAhKVM8qLtcrsvgjdfcjnoGhPDWWpbNHy/iz1X/kojfXtjqbItMMHgIFEGIQ/kLsmetr2ftWzztq6D8gD5Yy1rTbA8uwvqkfZEYpogZoikgJ1GugDdnkrLXj/KP4R7nLpX7wct8p2zhHJXiZRd+rhv/OPV4hFmTPsM7QYZuzCRDKT463mMjYIr+yla/4YoSVIhYxnrOF/npmq40l2/YfbzGvOlgYgnkmU9JNIN4/wGjLRusiMlpqgAAAABJRU5ErkJggg==";

var BinanceWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7ZZNaBNBFMffTGqb7qRN2lpKQbStghdRET1LizVtQbDiZxE8CN4EBUFslRY1ih940bM3D4qiLTbJxo9cPHhQD1qVgqWtB7XUZDehSWlN9jnTsMnutkk2KXjyfwh5k/++3755b2cDUKZmhlkTvoM1UKYolCElyLY5q+FzLCI9LBdeMliR3a2EwjAiNACQ3liE+cqBk1LM0QDbSh0wAggbzL/gU3dD8gjZCX/s5rINFttLKbzKVLqSSoPbAotKHQ54nR+aVRiTaw7U9apqEV/xHotKeU+XQRHwMb/taYu9nUiL9+30nBaDiu3l22KCUgI367zJQ4gV7cvhYuD4tI80S2WDKSX3rJUKaO3exHnxvc4bm1yCA/lmhcer1ZMFcxf60UHxICHwVY9RQ58O1SXg6XSlgE/kuDjg7py/C6VIDUo7lBFnqx4rAU9LLMS+xEPshtHHB+64EnC2ZH38+VZDbCoWki6b8snSqZ9+V2NBaDTI+lSZRTl86tfzqjZ9HcPgMvtcA9yHPOmkET77bG2N0acEXEMZH/tkhZPcnbmOcsQD0LefQERLQ0d9d+KjFUoJXs2t4BTV0l213QvjpkqDzMdz9BuWxubTpKO5Z24WwNhjhA5L3MAB+4zJxh5BJV/rAJNIi4YVJp8S9nh4Jq/Zh5uqHdp6PcqC3NrcaSQwmk3HB8nTlfQZL91yGBYrHNBnHDgxSJ6exG2jr65dVdOpqv25accUID3h8SbfQz4pMrujyNKgaS3IzojTS4/nXrImJSS9UUOScSuX2hAPVG3W44i/fp0adI3z4TwGpUqRXVeWBiTEfosDJZ8vKtfcEr6YLP0wwvk5sOKxTItABwngxUwGaOBH51vF79pt9YlBoqCdy9hIM1JHWBll20XM24Ilg3katzkEJ6nAJ8ZtF5Vaphc0IM40JW2FMhd9O4mec9NZy1UR/tmnIe3UK83dGygpxD2NXckPsBqwUOyFNIgaGSrmswu1DRaKy+yaBnABCkAX06ldTT0LEzbS2f/PVetN9HPz9XxQUaldaElgHU4oDpmh+N3u9q5aoufimeUHzbTxZfJPxF9/l2b8VRvhv2zqL9fsb+jPHrVMAAAAAElFTkSuQmCC";

var SafepackWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBtZW/ixNREMcnm4UQkRgVzs6TQwtttFIQ1Cs8/AEq+BeoIFf5A0QLKxsbESzksPIXgo2FWAgKyt3ZyBWKIBaHB4mih4WiEUzij+z6GX2bzD13N6dyX/jw3sx7M7tvdvIikqM4jgfgDIxDGybgGFTz4gopibYw7INZKMI5f0+r1dpcLpePM/0MNwqFwiM/SQlGYAw+xj1dhJPG/pZMGo3GJoYXZq0OV2EnhGGn05kuFouD0l8j8Bb2VCqVWW9N4w84noVkXmEWv4Ie5S5ch8M2kmPOMFxwJ8x4tlRDFDnjMewisGFKI/PQG1gDT2CdOgL7ljbh34i4NsP7xA5kAbQgSUMzr1LDYWPXvb0bWE/6esr4F7u45V0PLdWMU9Ruty95fdpVs9n0+9SqFkRR9MevSlUqlSLJEL+m3LbQljrNWHG2HuFIxt5r0ivJO+P/DmeN/WFOFK8+ZI4x5h1/m7c3Of5r8RTg/OIWb8u/KXYPmXR5pm1LLZP/U1LnAU1ac8Z6WOptjKS/9GZbybjV2TOa9JYzlph5X7muqcN+OCW9u/mO1kKbvpbSb/qhTmR9KPp7FN9quGx7FAYDLoNP7Nkr5kKYj4IgeMlwHw451w84SL5Xvz4Uk+cMG6VX326sn4w32QHjTB/CkHPri20nz8ScIByaUO/D85Ihkt1kuAfDxv0A1hI/KXkieBXspm5HbU3hqbGndE9afJjm5Kl1Bv0zWyS//zFH3ZLWUUt1Je/NfgJIntVigmdBzQAAAABJRU5ErkJggg==";

var Coin98 = "data:image/png;base64,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";

var BG$1 = "641b6da0d0d66ace.png";

var AVATAR_HEADER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBrZS7T8JQFMbPrcgrqDAoDhpBXVx8JCxqoo5uxMFFB1JjjLOLI+noppvRRGrCHwBuxkQn46AD6iLxQQmjkoIiUSq93lYgLW1Nm/SXNO39evrdc05PC2AzyGzgx3piQQSYpDpQFGNyRpDqQJjx7NOcKcN2AxLp1wnjEEZs10GM0RiaNDCCAxEz3Yc0Kxu+b7C8RQNDY6qRpx1mEn6H0Z3iYFa1rva8wX/0P02B88ubcRiZXa7sgBVGrxdTY+fLeQps4jlymhYR7OoaCu6qRhv2xeRDyYA3qtICZCZ1SxZcn6p1wDkB071H8vVL5bilzxCtk/IDX8tA6ftO1v4MEaYBozi5CknZlYMFlSFfu4V7noGaWFLpN8Ut8DmG5PuoMdKtweY3E6HH2ZOLXOQsJLjUJTtJFlImqiqIuXID8sXQqyN11qGsP7mNOJJpSPngeCAOQfccVH7y0M7V65pGM5zDJlLjs+U9jd7nmdeNV71lAfCSgMSwdJBlRtKk3unxoLOJJkM6DFJT5MYkc7hEyodCNQ1WsG2wmxj2UBRRmqLIb8kkIqqbjrXEL3z0l3NyyGp+AAAAAElFTkSuQmCC";

var LOGO_HEADER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAPCAYAAAAvQwurAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPpSURBVHgB3VnrUdtAEF6Y/I9TQUQFmAoQFQQqsFIBpgKbCnAqkKgAqECiAjsV6FKBTQWbXesEp9Xe6QTOMJNvZkfy7fP2XqvzESKWEMaO6Ono6KiQDNKd0uMOIkE2LqxeTo9EsA3xf1r+JT2ufXzHf0qPGVHq2ON4DdGG6J50qnfE+0T0SLrGJ+DxvbG+2e+jR2cBYezzTVS5/iN11UBjURMlMuAR+hihl1p+rfCk7xxHxo0j4yXMlHxNIn3fKboZxqPGZkK+R/cVQwO8VZxOPjrAVvdBEeE2rSMrobvAccjeOcCMVPguRujmHxhgBud/8pEB/gJ+8BbzDN0tLSGaEy0DesbSEHi7TYkmTtslKFu34m8OfRREf4hOiaaOnUI7XoT9ysbh6rkxMd/dliWYv7OyLnhQOseEAs5x7fHPbRnRytqvhG4qfrPMptPimTVzyys1vqOrrYglRIL94DAyoZN4YuZkJo5cZuNPBuLNB2yXDl9bvXOHv1T4KxGTt38e/tKTu2CsLeQKNkQXfLhjk5hUsc1nUBIoQM6VoIy2iqhtRbI/PH4Y2urbKXI80/cDRfYMNDP9uS3qDohTpa0Q77IQ4v5pO46Gr3BoOKNfY/dQT+yMqpWZMrUysWdaGfDPfraKTo2isHJ0SoxDx4Yn3jU2K2+Fel9zJVevUGLrxeDwtBW6tX5r1JEE8iZRQkRAOXaTwit2LWQOPcC1orPFcOdKjEONb4VKbLwupvBvBziE1UDeJHp5PlZ0M7CFDzYJrqA5/F0Y8MNYHZd+B+SX0C9sAJxtV4KPB7v9Mv0CWVh0kUA//ljckB/XtpEC2P2qSBQb2pES6zt2a/dCG+ANd4qC5YuGNfTPHU5uKGiuGi8EqYFiU2DMArZ4xc0VvaldGVwLzInO6P0bNAOuDfYE/GgvRlpifZ40J1wjCNlnRT9z41X4ocnHKIhulfYJHADaZ9I9Je8B+iV/iwrCuCT97x7ebVuc2dkuCxJOBre7nVuQrLxVerByOfEWVq/dJbTEGPDjUd6QBVBAf0LeUQy8CF5An6z3EAYXgwXZOIfuBGn7PTRBwsBxqHG4aAkhdXS1Tw62t1Ta147eNY5DPRBvPjJfJcYj5qIjC8Q2VLsMyh9DPAzRVeh+Nhaob83GXgi0H/UueEte2vcniLtIASt36E+lKxjedhkV0Q1Ewva9Es3qETUGvEWbARnuDJ89hXL27iA+2XtgU5TMFL39OcQ+SIbf5Z8NM2ov7AQ7wWY3yODt5krGzBNhJWLW4n2BEbD2zpxJmgr77Z8chaKu+Xfj46NCrsK231rdYwK2/i9g8zmXwCfgM30P4S83eGfgQKBg7wAAAABJRU5ErkJggg==";

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

var HelpLink = styled(Link)(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: block;\n  align-self: center;\n  margin: 0 auto;\n  padding: 24px 0 26px 0;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 15px;\n"], ["\n  display: block;\n  align-self: center;\n  margin: 0 auto;\n  padding: 24px 0 26px 0;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 15px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.linkColor;
});
var Wrap$4 = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  text-align: center;\n  padding: 0 14px;\n  min-width: 303px;\n  ", " {\n    padding: 0 20px 0 27px;\n  }\n"], ["\n  text-align: center;\n  padding: 0 14px;\n  min-width: 303px;\n  ", " {\n    padding: 0 20px 0 27px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Button$4 = styled.button(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ImgWrap = styled.div(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.95, theme.colors.white);
});
var ConnectModal = function (_a) {
    var texts = _a.texts, login = _a.login, hrefLearnHow = _a.hrefLearnHow, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: texts.title, onDismiss: onDismiss }, connectors === null || connectors === void 0 ? void 0 :
        connectors.map(function (entry, index) { return (React.createElement(Wrap$4, { key: index },
            React.createElement(Button$4, { onClick: function () {
                    login(entry.connectorId);
                    window.localStorage.setItem(connectorLocalStorageKey, entry.connectorId);
                    onDismiss();
                } },
                React.createElement(Text, { fontWeight: 500, color: "text", mr: "16px", fontSize: "15px" }, entry.title),
                React.createElement(ImgWrap, null,
                    React.createElement("img", { src: entry.icon }))))); }),
        React.createElement(HelpLink, { href: hrefLearnHow, external: true }, texts.link)));
};
var templateObject_1$j, templateObject_2$f, templateObject_3$c, templateObject_4$a;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Tooltip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
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
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        icon || React.createElement(Icon$O, { width: "20px", color: "#47DA3B", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed, left: left }, textCopied)));
};
var templateObject_1$i, templateObject_2$e;

var AccountModal = function (_a) {
    var texts = _a.texts, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: texts.title, onDismiss: onDismiss },
        React.createElement(ModalWrap, null,
            React.createElement(Text, { bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } },
                React.createElement(AccountWrap, { as: "div" },
                    React.createElement(AccountText, { fontWeight: 500, color: "text" }, account))),
            React.createElement(Flex, { mb: "32px" },
                React.createElement(LinkExternal, { color: "#47DA3B", small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, texts.view),
                React.createElement(CopyText, { color: "#47DA3B" },
                    React.createElement(CopyToClipboard, { toCopy: account, textCopied: texts.copied }, texts.copy))),
            React.createElement(Flex, { justifyContent: "center" },
                React.createElement(Button$6, { mt: "60px", scale: "md", width: "100%", variant: "green", onClick: function () {
                        logout();
                        window.localStorage.removeItem(connectorLocalStorageKey);
                        onDismiss();
                    } }, texts.button)))));
};
var ModalWrap = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  padding: 0 20px 20px;\n"], ["\n  padding: 0 20px 20px;\n"])));
var AccountWrap = styled(Button$4)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  padding: 17px 15px;\n  width: 100%;\n  ", " {\n    padding: 17px 20px;\n  }\n"], ["\n  padding: 17px 15px;\n  width: 100%;\n  ", " {\n    padding: 17px 20px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var CopyText = styled(Text)(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var AccountText = styled(Text)(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  font-size: 10px;\n  ", " {\n    font-size: 11px;\n  }\n"], ["\n  font-size: 10px;\n  ", " {\n    font-size: 11px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$h, templateObject_2$d, templateObject_3$b, templateObject_4$9;

var useWalletModal = function (login, logout, textsAccount, textsConnect, account, hrefLearnHow, vesting, yayBalance, dataTransactions, handleClaimed, handleAddToken, marginContent, minHeight, buttonLogoutType, linkExternalWalletModal) {
    var pageModal = function () {
        return React.createElement(AccountModal, { texts: textsAccount, account: account || "", logout: logout });
    };
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { texts: textsConnect, login: login, hrefLearnHow: hrefLearnHow }))[0];
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

var Account = function (_a) {
    var text = _a.text, account = _a.account, login = _a.login, logout = _a.logout, textsAccount = _a.textsAccount, textsConnect = _a.textsConnect, hrefLearnHow = _a.hrefLearnHow; _a.vesting; var yayBalance = _a.yayBalance; _a.dataTransactions; _a.handleClaimed; _a.bridge; _a.textsBridge; _a.transactionsList; _a.handleAddToken; _a.marginContent; _a.minHeight; _a.buttonLogoutType; _a.linkExternalWalletModal;
    var _b = useWalletModal(login, logout, textsAccount, textsConnect, account, hrefLearnHow), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    return (React.createElement(React.Fragment, null, account ? (React.createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentAccountModal();
        } },
        ellipsis(account),
        React.createElement(BalanceBlock, null,
            React.createElement(Icon$s, null),
            React.createElement(BalanceText, null, (yayBalance || 0) + " DESU")),
        React.createElement(Avatar, null,
            React.createElement("img", { src: AVATAR_HEADER })))) : (React.createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentConnectModal();
        }, className: "notAuth" },
        React.createElement(Avatar, { className: "notAuth" }, text)))));
};
var AccountBlock = styled(Text)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: end;\n  justify-content: center;\n  font-weight: normal;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  &.notAuth {\n    align-items: center;\n    flex-direction: row;\n    background: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n  min-height: 40px;\n  min-width: 166px;\n  font-size: 15px;\n  line-height: 19px;\n  padding: 0 36px 0 20px;\n  border-radius: 12px;\n  order: 0;\n  ", " {\n    margin-right: 34px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: end;\n  justify-content: center;\n  font-weight: normal;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  &.notAuth {\n    align-items: center;\n    flex-direction: row;\n    background: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n  min-height: 40px;\n  min-width: 166px;\n  font-size: 15px;\n  line-height: 19px;\n  padding: 0 36px 0 20px;\n  border-radius: 12px;\n  order: 0;\n  ", " {\n    margin-right: 34px;\n  }\n"])), function (_a) {
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
var Avatar = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: -8px;\n  background: ", ";\n  top: 50%;\n  transform: translateY(-50%);\n\n  & img {\n    width: 20px;\n    height: 20px;\n  }\n\n  &.notAuth {\n    width: calc(100% - 4px);\n    right: 0;\n  }\n\n  ", " {\n    right: -10px;\n\n    & img {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"], ["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: -8px;\n  background: ", ";\n  top: 50%;\n  transform: translateY(-50%);\n\n  & img {\n    width: 20px;\n    height: 20px;\n  }\n\n  &.notAuth {\n    width: calc(100% - 4px);\n    right: 0;\n  }\n\n  ", " {\n    right: -10px;\n\n    & img {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var BalanceBlock = styled(Flex)(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  align-items: center;\n  margin-top: 1px;\n  justify-content: space-between;\n  width: 100%;\n"], ["\n  align-items: center;\n  margin-top: 1px;\n  justify-content: space-between;\n  width: 100%;\n"])));
var BalanceText = styled(Text)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  margin-left: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n"], ["\n  margin-left: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n"])));
styled.div(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n"], ["\n  position: relative;\n  z-index: 2;\n"])));
var templateObject_1$g, templateObject_2$c, templateObject_3$a, templateObject_4$8, templateObject_5$7;

var MenuLink = function (_a) {
    var name = _a.name, url = _a.url, size = _a.size, onClick = _a.onClick;
    var isHttpLink = url === null || url === void 0 ? void 0 : url.startsWith("http");
    var Link = isHttpLink ? "a" : StyledLink;
    var props = isHttpLink ? { href: url } : { to: url };
    return (React.createElement(Link, __assign({}, props, { exact: true, onClick: onClick }),
        React.createElement(LinkItem, { size: size }, name)));
};
var StyledLink = styled(NavLink)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject([""], [""])));
var LinkItem = styled(Text)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  position: relative;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  color: ", ";\n  margin: 37px 0 0;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    background: hsla(0, 0%, 100%, 0.1);\n  }\n  ", " {\n    margin: 0;\n    padding: 30px 25px;\n    &::after {\n      display: block;\n      bottom: -30px;\n      width: 0;\n      height: 2px;\n      content: \"\";\n      position: absolute;\n      background: #4be43e;\n      transition: all.3s;\n      opacity: 0;\n    }\n    ", ".active & {\n      &::after {\n        width: 100%;\n        opacity: 1;\n      }\n    }\n  }\n"], ["\n  position: relative;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  color: ", ";\n  margin: 37px 0 0;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    background: hsla(0, 0%, 100%, 0.1);\n  }\n  ", " {\n    margin: 0;\n    padding: 30px 25px;\n    &::after {\n      display: block;\n      bottom: -30px;\n      width: 0;\n      height: 2px;\n      content: \"\";\n      position: absolute;\n      background: #4be43e;\n      transition: all.3s;\n      opacity: 0;\n    }\n    ", ".active & {\n      &::after {\n        width: 100%;\n        opacity: 1;\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGrey;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, StyledLink);
var templateObject_1$f, templateObject_2$b;

var Burger = function (_a) {
    _a.open; var onClick = _a.onClick;
    return (React.createElement(BurgerWrap, { onClick: onClick },
        React.createElement(BurgerLine, null)));
};
var BurgerWrap = styled.button(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: block;\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var BurgerLine = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  height: 2px;\n  width: 19px;\n  background: ", ";\n  position: relative;\n  &:after,\n  &:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    background: ", ";\n    width: 100%;\n    height: 100%;\n  }\n  &:after {\n    top: 8px;\n  }\n  &:before {\n    bottom: 8px;\n  }\n"], ["\n  height: 2px;\n  width: 19px;\n  background: ", ";\n  position: relative;\n  &:after,\n  &:before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    background: ", ";\n    width: 100%;\n    height: 100%;\n  }\n  &:after {\n    top: 8px;\n  }\n  &:before {\n    bottom: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var templateObject_1$e, templateObject_2$a;

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
    return (React.createElement(Block$1, { ref: refSelect },
        React.createElement(Button$3, { onClick: handleClickOpen }, icon),
        React.createElement(Dropdown, { className: open ? "open" : "" }, children)));
};
var Block$1 = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Button$3 = styled.button(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n"])));
var Dropdown = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: -1;\n  opacity: 0;\n  overflow-y: auto;\n  pointer-events: none;\n  max-height: 260px;\n  &.open {\n    transition: 0.3s;\n    z-index: 10;\n    opacity: 1;\n    margin-top: 4px;\n    pointer-events: all;\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: -1;\n  opacity: 0;\n  overflow-y: auto;\n  pointer-events: none;\n  max-height: 260px;\n  &.open {\n    transition: 0.3s;\n    z-index: 10;\n    opacity: 1;\n    margin-top: 4px;\n    pointer-events: all;\n  }\n"])));
var templateObject_1$d, templateObject_2$9, templateObject_3$9;

var Languages = function (_a) {
    var currentLang = _a.currentLang, setLang = _a.setLang, langs = _a.langs;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var handleSelect = function (lang) {
        setLang(lang);
        setOpen(false);
    };
    return (React.createElement(Wrap$3, null,
        React.createElement(DropdownLayout, { open: open, setOpen: setOpen, icon: React.createElement(Button$2, { open: open },
                React.createElement(ButtonText, null, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) },
            React.createElement(SelectList, null, langs.map(function (lang) {
                var _a;
                return (React.createElement(Select, { onClick: function () { return handleSelect(lang); }, key: lang.code }, (_a = lang.code) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
            })))));
};
var Wrap$3 = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  min-width: 40px;\n"], ["\n  min-width: 40px;\n"])));
var SelectList = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  padding: 12px 0;\n  background: ", ";\n  box-shadow: ", ";\n  border: none;\n  border-radius: 8px;\n"], ["\n  padding: 12px 0;\n  background: ", ";\n  box-shadow: ", ";\n  border: none;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
});
var Select = styled.button(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  width: 100%;\n  outline: none;\n  margin-bottom: 7px;\n  background: none;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  font-weight: normal;\n  letter-spacing: 0.08em;\n  color: ", ";\n  cursor: pointer;\n  border: none;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  width: 100%;\n  outline: none;\n  margin-bottom: 7px;\n  background: none;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  font-weight: normal;\n  letter-spacing: 0.08em;\n  color: ", ";\n  cursor: pointer;\n  border: none;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var Button$2 = styled.div(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  padding: 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  width: 100%;\n"], ["\n  padding: 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ButtonText = styled(Text)(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  padding: 13px 6px;\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  pointer-events: none;\n  color: ", ";\n  font-weight: bold;\n  line-height: 14px;\n"], ["\n  padding: 13px 6px;\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  pointer-events: none;\n  color: ", ";\n  font-weight: bold;\n  line-height: 14px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.purple;
});
var templateObject_1$c, templateObject_2$8, templateObject_3$8, templateObject_4$7, templateObject_5$6;

var Disclaimer = function (_a) {
    var text = _a.text;
    var _b = useState(true), open = _b[0], setOpen = _b[1];
    return (React.createElement(Block, { open: open },
        React.createElement(StyledText$1, null, text),
        React.createElement(Button$1, { onClick: function () { return setOpen(false); } },
            React.createElement(Icon$W, { role: "button" }))));
};
var Block = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  width: 100%;\n  padding: ", ";\n  background-color: ", ";\n  z-index: 1;\n  overflow: hidden;\n  max-height: ", ";\n  ", " {\n    padding: ", ";\n  }\n  & svg {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    flex-shrink: 0;\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  width: 100%;\n  padding: ", ";\n  background-color: ", ";\n  z-index: 1;\n  overflow: hidden;\n  max-height: ", ";\n  ", " {\n    padding: ", ";\n  }\n  & svg {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    flex-shrink: 0;\n    cursor: pointer;\n  }\n"])), function (_a) {
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
var StyledText$1 = styled(Text)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  max-width: 1200px;\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: left;\n  & br {\n    display: block;\n  }\n  ", " {\n    text-align: center;\n    font-size: 15px;\n    color: #fff;\n    font-weight: 500;\n    line-height: 1.5;\n    & br {\n      display: none;\n    }\n  }\n"], ["\n  max-width: 1200px;\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: left;\n  & br {\n    display: block;\n  }\n  ", " {\n    text-align: center;\n    font-size: 15px;\n    color: #fff;\n    font-weight: 500;\n    line-height: 1.5;\n    & br {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Button$1 = styled.button(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  padding: 0;\n"], ["\n  background: none;\n  border: none;\n  padding: 0;\n"])));
var templateObject_1$b, templateObject_2$7, templateObject_3$7;

var Header = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout; _a.isDark; _a.toggleTheme; var langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, links = _a.links, textConnect = _a.textConnect, textsAccount = _a.textsAccount, textsConnect = _a.textsConnect, hrefLearnHow = _a.hrefLearnHow, linkLogo = _a.linkLogo; _a.handleToggleNetwork; _a.linkTextNetwork; _a.linkHrefNetwork; _a.titleNetwork; _a.valuesNetworks; _a.listNetwork; var vesting = _a.vesting, yayBalance = _a.yayBalance, dataTransactions = _a.dataTransactions, handleClaimed = _a.handleClaimed, bridge = _a.bridge, textsBridge = _a.textsBridge, transactionsList = _a.transactionsList, handleAddToken = _a.handleAddToken, disclaimer = _a.disclaimer, disclaimerText = _a.disclaimerText, marginContent = _a.marginContent, minHeight = _a.minHeight, buttonLogoutType = _a.buttonLogoutType, linkExternalWalletModal = _a.linkExternalWalletModal;
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
    return (React.createElement(HeaderWrap, { ref: refSelect },
        disclaimer ? React.createElement(Disclaimer, { text: disclaimerText || "" }) : null,
        React.createElement(Content, null,
            React.createElement(Line, null,
                React.createElement(LogoWrap, { href: linkLogo },
                    React.createElement("img", { src: LOGO_HEADER, alt: "" })),
                React.createElement(Nav, { className: openMenu ? "open" : "" },
                    React.createElement(AccountMob, null,
                        React.createElement(Account, { text: textConnect || "Connect", account: account, login: login, logout: logout, textsAccount: textsAccount, textsConnect: textsConnect, hrefLearnHow: hrefLearnHow, vesting: vesting, bridge: bridge, yayBalance: yayBalance, dataTransactions: dataTransactions, handleClaimed: handleClaimed, textsBridge: textsBridge, transactionsList: transactionsList, handleAddToken: handleAddToken, marginContent: marginContent, minHeight: minHeight, buttonLogoutType: buttonLogoutType, linkExternalWalletModal: linkExternalWalletModal }),
                        React.createElement(CloseButton, { onClick: function () { return setOpenMenu(!openMenu); } },
                            React.createElement(CloseLine, null))),
                    links.map(function (item, i) { return (React.createElement(MenuLink, { key: i, size: "md", name: item.name, url: item.url, onClick: handleLink })); }),
                    React.createElement(LanguageBlockMob, null,
                        React.createElement(Languages, { currentLang: currentLang, setLang: setLang, langs: langs }))),
                React.createElement(RightContent, null,
                    React.createElement(AccountDesk, null,
                        React.createElement(Account, { text: textConnect || "Connect", account: account, login: login, logout: logout, textsAccount: textsAccount, textsConnect: textsConnect, hrefLearnHow: hrefLearnHow, vesting: vesting, bridge: bridge, yayBalance: yayBalance, dataTransactions: dataTransactions, handleClaimed: handleClaimed, textsBridge: textsBridge, transactionsList: transactionsList, handleAddToken: handleAddToken, marginContent: marginContent, minHeight: minHeight, buttonLogoutType: buttonLogoutType, linkExternalWalletModal: linkExternalWalletModal })),
                    React.createElement(LanguageBlockDesk, null,
                        React.createElement(Languages, { currentLang: currentLang, setLang: setLang, langs: langs })),
                    React.createElement(Burger, { open: openMenu, onClick: function () { return setOpenMenu(!openMenu); } }))))));
};
var HeaderWrap = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  & svg {\n    flex-shrink: 0;\n  }\n"], ["\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  & svg {\n    flex-shrink: 0;\n  }\n"])));
var Content = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: ", ";\n"], ["\n  background: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow3;
});
var Line = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  padding: 15px 15px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  ", " {\n    padding: 0 15px;\n  }\n"], ["\n  padding: 15px 15px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  ", " {\n    padding: 0 15px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var AccountDesk = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var AccountMob = styled.div(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  display: block;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Nav = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  position: fixed;\n  min-height: 100vh;\n  height: 100vh;\n  right: -100%;\n  width: 100vw;\n  padding: 20px 30px 20px;\n  top: 40px;\n  transition: 0.3s ease-in-out;\n  background: rgba(38, 38, 45, 0.7);\n  backdrop-filter: blur(25px);\n  z-index: 1;\n  &.open {\n    right: 0%;\n    pointer-events: all;\n  }\n  //background-color: ", ";\n  ", " {\n    flex-direction: row;\n    position: relative;\n    background: transparent;\n    padding: 0;\n    height: auto;\n    min-height: 0;\n    left: 0;\n    top: 0;\n    z-index: 3;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  position: fixed;\n  min-height: 100vh;\n  height: 100vh;\n  right: -100%;\n  width: 100vw;\n  padding: 20px 30px 20px;\n  top: 40px;\n  transition: 0.3s ease-in-out;\n  background: rgba(38, 38, 45, 0.7);\n  backdrop-filter: blur(25px);\n  z-index: 1;\n  &.open {\n    right: 0%;\n    pointer-events: all;\n  }\n  //background-color: ", ";\n  ", " {\n    flex-direction: row;\n    position: relative;\n    background: transparent;\n    padding: 0;\n    height: auto;\n    min-height: 0;\n    left: 0;\n    top: 0;\n    z-index: 3;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var RightContent = styled.div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
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
var templateObject_1$a, templateObject_2$6, templateObject_3$6, templateObject_4$6, templateObject_5$5, templateObject_6$2, templateObject_7$2, templateObject_8$2, templateObject_9$2, templateObject_10$1, templateObject_11$1, templateObject_12$1;

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
var StyledToast = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 600px;\n  }\n"], ["\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 600px;\n  }\n"])), function (_a) {
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
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, icon: icon, variant: alertTypeMap[type], onClick: handleRemove, propsWrapper: propsWrapperAlert }, description))));
};
var templateObject_1$9;

var StyledToastContainer = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n  ", "\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n  ", "\n"])), space);
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b; _a.stackSpacing; var propsWrapper = _a.propsWrapper, propsWrapperAlert = _a.propsWrapperAlert;
    return (React.createElement(StyledToastContainer, __assign({}, propsWrapper),
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            // const zIndex = (ZINDEX - index).toString();
            // const top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, 
                // style={{ top: `${top}px`, zIndex }}
                style: { position: "static" }, propsWrapperAlert: propsWrapperAlert }));
        }))));
};
var templateObject_1$8;

var CardIndicator = function (_a) {
    var data = _a.data, canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards, id = _a.id;
    return (React.createElement("div", { style: { position: "relative" } },
        React.createElement(Card$2, { id: id },
            React.createElement(TextTop$1, null, data.text),
            React.createElement(TextBottom, null, data.value)),
        " ",
        React.createElement(Claimed$2, { canClaim: canClaim, disabledTopCards: !!disabledTopCards, id: id })));
};
var Card$2 = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  overflow: hidden;\n  height: 100%;\n"], ["\n  position: relative;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  overflow: hidden;\n  height: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var TextTop$1 = styled(Text)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"], ["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient;
});
var TextBottom = styled(Text)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  padding: 10px 24px 20px;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n"], ["\n  padding: 10px 24px 20px;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n"])));
var Claimed$2 = styled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
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
var templateObject_1$7, templateObject_2$5, templateObject_3$5, templateObject_4$5;

var CardTimer = function (_a) {
    var data = _a.data, canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    var progress = 100 - (data.timeSecond * 100) / data.totalSeconds;
    var Progress = function () { return (React.createElement(ProgressTrack$1, null,
        React.createElement(ProgressBar$1, { progress: progress }))); };
    return (React.createElement("div", { style: { position: "relative" } },
        React.createElement(Wrapper$2, { canClaim: canClaim, disabledTopCards: !!disabledTopCards, id: "CardTimer" },
            React.createElement(Inner, { className: "card-inner" },
                React.createElement(CardFront, { canClaim: canClaim, disabledTopCards: !!disabledTopCards },
                    React.createElement(TextTop, null, data.textBack),
                    React.createElement(BlockBottom, null,
                        React.createElement(Text, { fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "400" }, data.textStage),
                        React.createElement(Progress, null))),
                React.createElement(CardBack, { canClaim: canClaim, disabledTopCards: !!disabledTopCards },
                    React.createElement(TextTop, null, data.textFront),
                    React.createElement(BlockBottom, null,
                        React.createElement(TimerSimple, { time: data.timeSecond, texts: data.textsTime }),
                        React.createElement(Progress, null))))),
        React.createElement(Claimed$1, { canClaim: canClaim, disabledTopCards: !!disabledTopCards })));
};
var CardFront = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  transition: 0;\n  overflow: hidden;\n  backface-visibility: ", ";\n"], ["\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  transition: 0;\n  overflow: hidden;\n  backface-visibility: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "" : "hidden");
});
var CardBack = styled(CardFront)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  transform: rotateY(180deg) translateX(50%);\n"], ["\n  transform: rotateY(180deg) translateX(50%);\n"])));
var Wrapper$2 = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  position: relative;\n  perspective: 1000px;\n  min-height: 97px;\n  width: 100%;\n  border-radius: 20px;\n  &:hover {\n    & .card-inner {\n      transform: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  perspective: 1000px;\n  min-height: 97px;\n  width: 100%;\n  border-radius: 20px;\n  &:hover {\n    & .card-inner {\n      transform: ", ";\n    }\n  }\n"])), function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "none" : "rotateY(180deg)");
});
var Inner = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n"])));
var TextTop = styled(Text)(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"], ["\n  padding: 6px 24px;\n  background: ", ";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.02em;\n"])), function (_a) {
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
var Claimed$1 = styled.div(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? 1 : 0);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "auto" : "none");
}, "-moz-element(#CardTimer)");
var templateObject_1$6, templateObject_2$4, templateObject_3$4, templateObject_4$4, templateObject_5$4, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9$1;

var ClaimTokens = function (_a) {
    var data = _a.data, texts = _a.texts, handleClaimTokens = _a.handleClaimTokens, disabledButton = _a.disabledButton, isLoading = _a.isLoading, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    var _b = useState(0), widthProgress = _b[0], setWidthProgress = _b[1];
    var numberConverter = function (string) { return +string.replace(/[^\d.]/g, ""); };
    useEffect(function () {
        setWidthProgress((numberConverter(data.totalRaised) * 100) / numberConverter(data.total));
    }, [data.totalRaised, data.total]);
    return (React.createElement(Wrap$2, { style: { position: "relative" } },
        React.createElement(Card$1, { disabledCard: disabledCardClaimTokens, id: "ClaimTokens" },
            React.createElement(Row, null,
                React.createElement(StyledTitle$1, null, texts.title),
                React.createElement(StyledButton$2, { variant: "violet", onClick: handleClaimTokens, disabled: disabledButton, spin: isLoading }, texts.button)),
            React.createElement(ProgressWrap, null,
                React.createElement(ProgressTrack, null,
                    React.createElement(ProgressBar, { widthProgress: widthProgress || 0 },
                        React.createElement(ProgressThumb, null,
                            React.createElement(Icon$j, null)),
                        React.createElement(TextHoverBlock, { widthProgress: widthProgress || 0 },
                            React.createElement(StyledText, null, texts.totalRaised),
                            React.createElement(StyledText, { color: "grey3" }, data.totalRaised))))),
            React.createElement(Texts, null,
                React.createElement(TextBlock, null,
                    React.createElement(StyledText, null,
                        texts.total,
                        " ",
                        data.total),
                    data.left && (React.createElement(StyledText, { color: "grey3" },
                        texts.left,
                        " ",
                        data.left))))),
        React.createElement(Blur$1, { disabledCard: disabledCardClaimTokens })));
};
var Wrap$2 = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", " {\n    grid-column: 1/4;\n  }\n"], ["\n  ", " {\n    grid-column: 1/4;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Blur$1 = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? 1 : 0);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? "auto" : "none");
}, "-moz-element(#ClaimTokens)");
var Card$1 = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  position: relative;\n  padding: 35px 25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  min-height: 250px;\n"], ["\n  position: relative;\n  padding: 35px 25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  min-height: 250px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var StyledTitle$1 = styled(Text)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 22px;\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: bold;\n  ", " {\n    width: auto;\n    margin-bottom: 0px;\n    font-size: 24px;\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 22px;\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: bold;\n  ", " {\n    width: auto;\n    margin-bottom: 0px;\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Row = styled.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  ", " {\n    flex-wrap: nowrap;\n    margin-bottom: 47px;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  ", " {\n    flex-wrap: nowrap;\n    margin-bottom: 47px;\n  }\n"])), function (_a) {
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
var StyledButton$2 = styled(Button$6)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 100%;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-left: 43px;\n  }\n  &:disabled {\n    opacity: 1;\n    background: ", ";\n  }\n"], ["\n  width: 100%;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-left: 43px;\n  }\n  &:disabled {\n    opacity: 1;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.85, theme.colors.white);
});
var templateObject_1$5, templateObject_2$3, templateObject_3$3, templateObject_4$3, templateObject_5$3, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;

var BG = "39970d524fe99c4a.png";

var TakeGift = function (_a) {
    var handleTakeGift = _a.handleTakeGift, texts = _a.texts, claimedGift = _a.claimedGift, images = _a.images, giftLoader = _a.giftLoader;
    return (React.createElement("div", { style: { position: "relative" } },
        React.createElement(Card, { id: "TakeGift", src: images || BG },
            React.createElement(StyledTitle, null, texts.title),
            React.createElement(StyledButton$1, { variant: "violet", onClick: handleTakeGift }, texts.button)),
        React.createElement(BlurWrapper, { claimedGift: claimedGift, giftLoader: giftLoader }),
        React.createElement(Claimed, { giftLoader: giftLoader },
            React.createElement(Loader, null)),
        React.createElement(Claimed, { claimedGift: claimedGift },
            React.createElement(Text, { fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em", textAlign: "center" }, texts.claimed))));
};
var Card = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  padding: 37px 24px;\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: 20px;\n  height: 100%;\n  min-height: 250px;\n  & img {\n    display: block;\n    margin: 0 auto 6px;\n  }\n"], ["\n  position: relative;\n  display: block;\n  padding: 37px 24px;\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: 20px;\n  height: 100%;\n  min-height: 250px;\n  & img {\n    display: block;\n    margin: 0 auto 6px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat left center /cover";
});
var StyledTitle = styled(Text)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  margin-bottom: 33px;\n  text-align: center;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 700;\n  ", " {\n    font-size: 24px;\n  }\n"], ["\n  margin-bottom: 33px;\n  text-align: center;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 700;\n  ", " {\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledButton$1 = styled(Button$6)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  width: 100%;\n  font-weight: 400;\n"], ["\n  width: 100%;\n  font-weight: 400;\n"])));
var Claimed = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 2;\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? 1 : 0);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? "auto" : "none");
});
var BlurWrapper = styled.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(6px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(6px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? 1 : 0);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? "auto" : "none");
}, "-moz-element(#TakeGift)");
var templateObject_1$4, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2;

var TokenOnPoolz = function (_a) {
    var images = _a.images, texts = _a.texts, linkClaimTokens = _a.linkClaimTokens, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    return (React.createElement(Wrap$1, { style: { position: "relative" } },
        React.createElement(Wrapper$1, { id: "TokenOnPoolz", src: images || BG },
            React.createElement(CardStyle, null,
                React.createElement(StyledTitle$1, { size: "xl" }, texts.title),
                React.createElement(Text, { margin: "42px 0" }, texts.description),
                React.createElement(StyledButton, { as: "a", margin: "0 auto", minWidth: "204px", variant: "violet", href: linkClaimTokens || "#" }, texts.button))),
        React.createElement(Blur, { disabledCard: disabledCardClaimTokens })));
};
var Wrap$1 = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  ", " {\n    grid-column: 1/4;\n  }\n"], ["\n  ", " {\n    grid-column: 1/4;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Blur = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.5, theme.colors.dark);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? 1 : 0);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? "auto" : "none");
}, "-moz-element(#TokenOnPoolz)");
var CardStyle = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  text-align: center;\n  padding: 20px 50px 21px;\n  height: 100%;\n"], ["\n  text-align: center;\n  padding: 20px 50px 21px;\n  height: 100%;\n"])));
var Wrapper$1 = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: relative;\n  box-shadow: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 20px;\n  min-height: 250px;\n"], ["\n  position: relative;\n  box-shadow: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 20px;\n  min-height: 250px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat left center /cover";
});
var StyledButton = styled(Button$6)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"], ["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient3;
});
var templateObject_1$3, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1;

var VestingWidget = function (_a) {
    var dataClaimTokens = _a.dataClaimTokens, textsClaimTokens = _a.textsClaimTokens, handleClaimTokens = _a.handleClaimTokens, dataCardsIndicators = _a.dataCardsIndicators, textsTakeGift = _a.textsTakeGift, handleTakeGift = _a.handleTakeGift, claimedGift = _a.claimedGift, imagesBg = _a.imagesBg, dataTimer = _a.dataTimer, canClaim = _a.canClaim, textsPoolz = _a.textsPoolz, linkClaimTokens = _a.linkClaimTokens, disabledButtonClaimTokens = _a.disabledButtonClaimTokens, isLoadingButtonClaimTokens = _a.isLoadingButtonClaimTokens, disabledTopCards = _a.disabledTopCards, disabledCardClaimTokens = _a.disabledCardClaimTokens, giftLoader = _a.giftLoader;
    return (React.createElement(Wrapper, null,
        React.createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[0], id: "CardIndicator-1" }),
        React.createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[1], id: "CardIndicator-2" }),
        React.createElement(CardTimer, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataTimer }),
        React.createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[2], id: "CardIndicator-3" }),
        !canClaim ? (React.createElement(TokenOnPoolz, { texts: textsPoolz, images: imagesBg, linkClaimTokens: linkClaimTokens, disabledCardClaimTokens: disabledCardClaimTokens })) : (React.createElement(ClaimTokens, { data: dataClaimTokens, texts: textsClaimTokens, handleClaimTokens: handleClaimTokens, disabledButton: disabledButtonClaimTokens, isLoading: isLoadingButtonClaimTokens, disabledCardClaimTokens: disabledCardClaimTokens })),
        React.createElement(TakeGift, { giftLoader: giftLoader, texts: textsTakeGift, handleTakeGift: handleTakeGift, claimedGift: claimedGift, images: imagesBg })));
};
var Wrapper = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px 20px;\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px 20px;\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$2;

var ModalPlatform = function (_a) {
    var onDismiss = _a.onDismiss, title = _a.title, platforms = _a.platforms, linkAbout = _a.linkAbout;
    return (React.createElement(Modal, { title: title, welcome: true, paddingTopHeader: "20px", onDismiss: onDismiss },
        React.createElement(Wrap, null,
            (platforms === null || platforms === void 0 ? void 0 : platforms.length) > 1 && (React.createElement(Buttons, null, platforms === null || platforms === void 0 ? void 0 : platforms.map(function (el, i) { return (React.createElement(React.Fragment, { key: i },
                React.createElement(Button, { target: "_blank", as: "a", href: el.link },
                    React.createElement(TextStyled, null, el.name),
                    React.createElement("img", { src: el.icon, alt: "" })))); }))),
            (platforms === null || platforms === void 0 ? void 0 : platforms.length) === 1 && (React.createElement(ButtonOne, null, platforms === null || platforms === void 0 ? void 0 : platforms.map(function (el, i) { return (React.createElement(React.Fragment, { key: i },
                React.createElement(Button, { target: "_blank", as: "a", href: el.link },
                    React.createElement(TextStyled, null, el.name),
                    React.createElement("img", { src: el.icon, alt: "" })))); }))),
            linkAbout ? (React.createElement(Link, { href: linkAbout, style: { margin: "0 auto" } }, linkAbout)) : null)));
};
var Wrap = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  padding: 0 20px 26px;\n"], ["\n  padding: 0 20px 26px;\n"])));
var Button = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 12px;\n  background: ", ";\n  cursor: pointer;\n  border: none;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 12px;\n  background: ", ";\n  cursor: pointer;\n  border: none;\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.85, theme.colors.grey);
});
var Buttons = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px;\n  margin: 40px 0;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px;\n  margin: 40px 0;\n"])));
var TextStyled = styled(Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-align: center;\n"], ["\n  flex-grow: 1;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-align: center;\n"])));
var ButtonOne = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  max-width: 167px;\n  margin: 40px auto;\n"], ["\n  max-width: 167px;\n  margin: 40px auto;\n"])));
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n    background-color: #1F262F;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n    background-color: #1F262F;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"])), BG$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.violet;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.violet;
});
var templateObject_1;

export { Icon$Y as AddIcon, Alert, AlertBlurCustom, Icon$w as ArrowBigDownIcon, Icon$1 as ArrowBorder, Icon$v as ArrowCardDown, Icon$t as ArrowDouble, Icon$o as ArrowDownIcon, Icon$f as ArrowDownRightIcon, Icon$F as ArrowIcon, Icon$T as ArrowLeft, Icon$E as ArrowPanel, Icon$r as ArrowRight, Icon$u as ArrowSingl, Icon$q as ArrowTopRight, Icon$d as AvalancheIcon, BaseLayout, Icon$S as BnbIcon, Box, Icon$D as BtnPanel, Button$6 as Button, ButtonMenu, ButtonMenuItem, Icon$8 as CalculateIcon, Icon$z as CercleIcon, Icon$R as ChartIcon, Icon$j as CheckIcon, Icon$b as ClipIcon, Icon$X as CloseIcon, Icon$W as CloseIcon2, Icon$3 as CloseRed, Icon$V as CloseSimpleIcon, Icon$A as CompleteIcon, Icon$4 as ComunityIcon, ConnectorNames, Icon$2 as ControllerMouse, Icon$O as CopyIcon, Icon$e as CopyIcon2, Icon as DisconnectIcon, Icon$l as ErrorIcon, Icon$H as EyeClose, Icon$G as EyeCloseIcon, Icon$J as EyeOpen, Icon$I as EyeOpenIcon, Flex, Icon$P as GreenArrow, Header, Heading$1 as Heading, Icon$n as HelpIcon, Icon$Q as HistoryIcon, IconButton, Input, Icon$h as InstagramIcon, Link, LinkExternal, Loader, LoaderSmall, Icon$p as MenuIcon, Icon$6 as MinusIcon, Modal, ModalPlatform, ModalProvider, Icon$U as OpenNewIcon, Icon$C as PenIcon, Icon$x as PlayIcon, Icon$m as PlayingCardsIcon, Icon$7 as PlusIcon, ResetCSS, Icon$c as ReverseArrowsIcon, Icon$N as SearchIcon, Icon$M as SearchIcon2, Icon$k as ShareIcon, Skeleton, Icon$K as SquaresIcon, Icon$L as StrikeIcon, Icon$B as StrikesWideIcon, Svg, Icon$9 as SwapVertIcon, Icon$i as TelegramIcon, Text, TimerSimple, ToastContainer, Icon$g as TwitterIcon, Icon$5 as VerifideIcon, VestingWidget, Icon$s as WalletIcon, Icon$y as WatchIcon, Icon$a as YAYIcon, variants as alertVariants, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTooltip, useWalletModal };
