"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PermissionsPage = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var react_native_vision_camera_1 = require("react-native-vision-camera");
var Constants_1 = require("./Constants");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var BANNER_IMAGE = require('./img/11.png');
function PermissionsPage(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var _b = react_1.useState('not-determined'), cameraPermissionStatus = _b[0], setCameraPermissionStatus = _b[1];
    var _c = react_1.useState('not-determined'), microphonePermissionStatus = _c[0], setMicrophonePermissionStatus = _c[1];
    var requestMicrophonePermission = react_1.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var permission;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Requesting microphone permission...');
                    return [4 /*yield*/, react_native_vision_camera_1.Camera.requestMicrophonePermission()];
                case 1:
                    permission = _a.sent();
                    console.log("Microphone permission status: " + permission);
                    if (!(permission === 'denied')) return [3 /*break*/, 3];
                    return [4 /*yield*/, react_native_1.Linking.openSettings()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    setMicrophonePermissionStatus(permission);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var requestCameraPermission = react_1.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var permission;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Requesting camera permission...');
                    return [4 /*yield*/, react_native_vision_camera_1.Camera.requestCameraPermission()];
                case 1:
                    permission = _a.sent();
                    console.log("Camera permission status: " + permission);
                    if (!(permission === 'denied')) return [3 /*break*/, 3];
                    return [4 /*yield*/, react_native_1.Linking.openSettings()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    setCameraPermissionStatus(permission);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    react_1.useEffect(function () {
        if (cameraPermissionStatus === 'granted' && microphonePermissionStatus === 'granted')
            navigation.replace('CameraPage');
    }, [cameraPermissionStatus, microphonePermissionStatus, navigation]);
    return (react_1["default"].createElement(react_native_2.View, { style: styles.container },
        react_1["default"].createElement(react_native_2.Image, { source: BANNER_IMAGE, style: styles.banner }),
        react_1["default"].createElement(react_native_2.Text, { style: styles.welcome },
            "Welcome to",
            '\n',
            "Vision Camera."),
        react_1["default"].createElement(react_native_2.View, { style: styles.permissionsContainer },
            cameraPermissionStatus !== 'granted' && (react_1["default"].createElement(react_native_2.Text, { style: styles.permissionText },
                "Vision Camera needs ",
                react_1["default"].createElement(react_native_2.Text, { style: styles.bold }, "Camera permission"),
                ".",
                ' ',
                react_1["default"].createElement(react_native_2.Text, { style: styles.hyperlink, onPress: requestCameraPermission }, "Grant"))),
            microphonePermissionStatus !== 'granted' && (react_1["default"].createElement(react_native_2.Text, { style: styles.permissionText },
                "Vision Camera needs ",
                react_1["default"].createElement(react_native_2.Text, { style: styles.bold }, "Microphone permission"),
                ".",
                ' ',
                react_1["default"].createElement(react_native_2.Text, { style: styles.hyperlink, onPress: requestMicrophonePermission }, "Grant"))))));
}
exports.PermissionsPage = PermissionsPage;
var styles = react_native_2.StyleSheet.create({
    welcome: {
        fontSize: 38,
        fontWeight: 'bold',
        maxWidth: '80%'
    },
    banner: {
        position: 'absolute',
        opacity: 0.4,
        bottom: 0,
        left: 0
    },
    container: __assign({ flex: 1, backgroundColor: 'white' }, Constants_1.SAFE_AREA_PADDING),
    permissionsContainer: {
        marginTop: Constants_1.CONTENT_SPACING * 2
    },
    permissionText: {
        fontSize: 17
    },
    hyperlink: {
        color: '#007aff',
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    }
});
