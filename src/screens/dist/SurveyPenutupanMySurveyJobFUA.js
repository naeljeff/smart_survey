"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var MySurveyAppointment_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyAppointment");
var MySurveyPersonalContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyPersonalContact");
var MySurveyCoorporateContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyCoorporateContact");
var MySurveyFUA_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUA");
var MySurveyFUAButtons_1 = require("../components/layoutComponent/SurveyPenutupan/atoms/MySurvey/MySurveyFUA/MySurveyFUAButtons");
var storeTempFua_1 = require("../store/storeTempFua");
var SurveyPenutupanMySurveyJobFUA = function (_a) {
    var route = _a.route;
    var _b = react_1.useState({
        contactDate: undefined,
        appointmentDate: undefined,
        address: '',
        status: '',
        remarks: ''
    }), tempFua = _b[0], setTempFua = _b[1];
    var item = route.params.item;
    var navigation = native_1.useNavigation();
    // Access Temporary FUA
    var _c = storeTempFua_1.useFuaStore(), addTemporaryFUA = _c.addTemporaryFUA, getTemporaryFUAData = _c.getTemporaryFUAData;
    native_1.useFocusEffect(react_1.useCallback(function () {
        var currentFuaData = getTemporaryFUAData(item.noPengajuanSurvey, item.unitNo);
        if (currentFuaData) {
            setTempFua({
                contactDate: currentFuaData.contactDate || new Date(),
                appointmentDate: currentFuaData.appointmentDate || new Date(),
                address: currentFuaData.address || '',
                status: currentFuaData.status || '',
                remarks: currentFuaData.remarks || ''
            });
        }
    }, [item.noPengajuanSurvey, item.unitNo, getTemporaryFUAData]));
    var handleSaveTemporaryFUA = function () {
        var _a, _b;
        var newFuaData = {
            noPengajuan: item.noPengajuanSurvey,
            unitNo: item.unitNo,
            contactDate: (_a = tempFua.contactDate) !== null && _a !== void 0 ? _a : new Date(),
            appointmentDate: (_b = tempFua.appointmentDate) !== null && _b !== void 0 ? _b : new Date(),
            address: tempFua.address,
            status: tempFua.status,
            remarks: tempFua.remarks
        };
        addTemporaryFUA(newFuaData);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#FFF]" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'FUA', onPress: function () { return navigation.goBack(); } }),
        react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true },
            react_1["default"].createElement(MySurveyAppointment_1["default"], { item: item }),
            react_1["default"].createElement(MySurveyPersonalContact_1["default"], { item: item }),
            react_1["default"].createElement(MySurveyCoorporateContact_1["default"], null),
            react_1["default"].createElement(MySurveyFUA_1["default"], { tempFua: tempFua, setTempFua: setTempFua }),
            react_1["default"].createElement(MySurveyFUAButtons_1["default"], { item: item, onSaveFua: handleSaveTemporaryFUA }))));
};
exports["default"] = SurveyPenutupanMySurveyJobFUA;
