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
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_paper_1 = require("react-native-paper");
var react_native_device_info_1 = require("react-native-device-info");
var react_native_simple_toast_1 = require("react-native-simple-toast");
var native_1 = require("@react-navigation/native");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var LoginButton_1 = require("../../../reusableComponent/Button/LoginButton");
var storeUser_1 = require("../../../../store/storeUser");
var getUserLoginWithEmail_1 = require("../../../../services/api/user/getUserLoginWithEmail");
var getUserLoginWithUsername_1 = require("../../../../services/api/user/getUserLoginWithUsername");
var jwtToken_1 = require("../../../../utilities/jwtToken");
var getUserRefreshJWT_1 = require("../../../../services/api/user/getUserRefreshJWT");
var auth_1 = require("../../../../utilities/auth");
var LoginForm = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState({
        username: '',
        password: ''
    }), userForm = _b[0], setUserForm = _b[1];
    var _c = react_1.useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = react_1.useState(''), deviceId = _d[0], setDeviceId = _d[1];
    var _e = react_1.useState(''), errorMessage = _e[0], setErrorMessage = _e[1];
    var _f = react_1.useState(false), isEmail = _f[0], setIsEmail = _f[1];
    var _g = react_1.useState(true), isCheckingToken = _g[0], setIsCheckingToken = _g[1];
    react_1.useEffect(function () {
        react_native_device_info_1["default"].getUniqueId().then(function (uniqueId) {
            setDeviceId(uniqueId);
        });
        var checkTokenInStorage = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, jwtToken, refreshToken, newJwtToken, error_1, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 12, , 13]);
                        return [4 /*yield*/, jwtToken_1.getTokens()];
                    case 1:
                        _a = _b.sent(), jwtToken = _a.jwtToken, refreshToken = _a.refreshToken;
                        if (!(jwtToken && !jwtToken_1.isTokenExpired(jwtToken))) return [3 /*break*/, 2];
                        auth_1.handleTokenAuth(jwtToken, navigation);
                        return [3 /*break*/, 11];
                    case 2:
                        if (!refreshToken) return [3 /*break*/, 10];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, , 9]);
                        return [4 /*yield*/, getUserRefreshJWT_1.refreshJwtToken(refreshToken)];
                    case 4:
                        newJwtToken = _b.sent();
                        if (!newJwtToken) return [3 /*break*/, 6];
                        return [4 /*yield*/, async_storage_1["default"].setItem('jwt_token', newJwtToken)];
                    case 5:
                        _b.sent();
                        auth_1.handleTokenAuth(newJwtToken, navigation);
                        return [3 /*break*/, 7];
                    case 6:
                        setIsCheckingToken(false);
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        console.log('Error refreshing token:', error_1);
                        setIsCheckingToken(false);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        setIsCheckingToken(false);
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        error_2 = _b.sent();
                        console.log('Error checking tokens:', error_2);
                        setIsCheckingToken(false);
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        }); };
        checkTokenInStorage();
    }, [navigation]);
    var _h = getUserLoginWithEmail_1.useUserLoginWithEmailAndGenerateJwt(userForm.username, userForm.password, deviceId), refetchEmail = _h.refetch, isLoadingEmail = _h.isLoading;
    var _j = getUserLoginWithUsername_1.useUserLoginWithUsernameAndGenerateJwt(userForm.username, userForm.password, deviceId), refetchUsername = _j.refetch, isLoadingUsername = _j.isLoading;
    var setUserData = storeUser_1.useUserStore(function (state) { return state.setUserData; });
    var extractErrorMessage = function (error) {
        if (typeof error === 'string') {
            return error;
        }
        if (error === null || error === void 0 ? void 0 : error.failureReason) {
            return typeof error.failureReason === 'string'
                ? error.failureReason
                : error.failureReason.toString();
        }
        if (error === null || error === void 0 ? void 0 : error.error) {
            return typeof error.error === 'string'
                ? error.error
                : error.error.toString();
        }
        return 'An unexpected error occurred';
    };
    // Handle form input
    var handleUsernameInput = function (username) {
        setUserForm(__assign(__assign({}, userForm), { username: username }));
        setErrorMessage('');
        if (username.includes('@')) {
            setIsEmail(true);
        }
    };
    var handlePasswordInput = function (password) {
        setUserForm(__assign(__assign({}, userForm), { password: password }));
        setErrorMessage('');
    };
    var handleFormSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_3, errorMessage_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!userForm.username || !userForm.password) {
                        setErrorMessage('Please fill all the fields!');
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    response = void 0;
                    data = void 0;
                    if (!isEmail) return [3 /*break*/, 3];
                    return [4 /*yield*/, refetchEmail()];
                case 2:
                    response = _b.sent();
                    data = response.data;
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, refetchUsername()];
                case 4:
                    response = _b.sent();
                    data = response.data;
                    _b.label = 5;
                case 5:
                    if (((_a = data === null || data === void 0 ? void 0 : data.userValidationData) === null || _a === void 0 ? void 0 : _a.status) === '01') {
                        handleSuccessfulLogin(data === null || data === void 0 ? void 0 : data.userValidationData);
                    }
                    else {
                        handleFailedLogin(response || 'Login failed');
                    }
                    return [3 /*break*/, 7];
                case 6:
                    error_3 = _b.sent();
                    console.log(error_3);
                    errorMessage_1 = extractErrorMessage(error_3);
                    setErrorMessage(errorMessage_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleSuccessfulLogin = function (data) {
        react_native_simple_toast_1["default"].show('Login successful!', react_native_simple_toast_1["default"].LONG);
        if (data.message_response) {
            setUserData({
                token: data.token || '',
                messageResponse: data.message_response,
                source_login: data.source_login || []
            });
        }
        navigation.dispatch(native_1.CommonActions.reset({
            index: 0,
            routes: [{ name: 'main' }]
        }));
    };
    var handleFailedLogin = function (error) {
        var errorMessage = extractErrorMessage(error);
        setErrorMessage(errorMessage);
    };
    if (isCheckingToken) {
        return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 justify-center items-center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#FF7F50" })));
    }
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col justify-center items-center space-y-7 py-10" },
            react_1["default"].createElement(react_native_paper_1.TextInput, { mode: "flat", label: "Username", placeholder: "Enter your username", activeUnderlineColor: "#FF7F50", contentStyle: {
                    color: 'black'
                }, placeholderTextColor: 'gray', style: {
                    backgroundColor: 'white',
                    fontSize: 18
                }, className: "w-full shadow-xl", onChangeText: handleUsernameInput, value: userForm.username }),
            react_1["default"].createElement(react_native_paper_1.TextInput, { mode: "flat", label: "Password", placeholder: "Enter your password", secureTextEntry: !showPassword, activeUnderlineColor: "#FF7F50", contentStyle: {
                    color: 'black'
                }, placeholderTextColor: 'gray', style: {
                    backgroundColor: 'white',
                    fontSize: 18
                }, className: "w-full shadow-xl mb-2", onChangeText: handlePasswordInput, value: userForm.password, right: react_1["default"].createElement(react_native_paper_1.TextInput.Icon, { icon: showPassword ? 'eye-off' : 'eye', size: 22, style: { paddingTop: 17 }, onPress: function () { return setShowPassword(!showPassword); } }) }),
            react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 3, className: "w-full rounded-full" },
                react_1["default"].createElement(LoginButton_1["default"], { isLoading: isEmail ? isLoadingEmail : isLoadingUsername, handleFormSubmit: handleFormSubmit })),
            errorMessage ? (react_1["default"].createElement(react_native_1.Text, { className: "text-red-600 text-sm capitalize" }, errorMessage)) : null)));
};
exports["default"] = LoginForm;
