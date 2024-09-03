"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var themed_1 = require("@rneui/themed");
var react_native_paper_1 = require("react-native-paper");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var SurveyJobAssignJobItemSubList_1 = require("./SurveyJobAssignJobItemSubList");
var AssignJobModal_1 = require("../../../../reusableComponent/Modal/AssignJobModal");
var SurveyJobAssignJobItem = function (_a) {
    var item = _a.item, index = _a.index, surveyItem = _a.surveyItem;
    var _b = react_1.useState(false), expanded = _b[0], setExpanded = _b[1];
    var _c = react_1.useState(false), reassignConfirmation = _c[0], setReassignConfirmation = _c[1];
    var handleAssignPress = function () {
        setReassignConfirmation(true);
    };
    var handleConfirm = function (confirmed) {
        setReassignConfirmation(false);
    };
    var testList = [
        {
            rowid: 45,
            noPengajuanSurvey: 'AUTO-14-00007-08-2024',
            nama: 'tip test kesekian',
            alamat: 'Jl Re Martadinata',
            noTelp: '081908482552',
            email: 'tifannymartavia@yahoo.com',
            catatan: 'test aja sih ',
            createdAt: '2024-08-15 09:37:39',
            modifiedAt: '2024-08-30 09:56:24',
            surveyToken: 'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
            priority: 'high',
            alamatSurvey: 'Jl Re Martadinata',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'Testing',
            cabang: '14',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'KIA',
            tipe: 'NEW CERES/K2700 II',
            model: '2.7 MT',
            jenisAsuransi: 'comprehensive',
            status: 'schedule',
            platNomor: 'BE 333 da',
            perluasan: ['TJH PIHAK III']
        },
        {
            rowid: 46,
            noPengajuanSurvey: 'AUTO-14-00007-08-2024',
            nama: 'tip test kesekian',
            alamat: 'Jl Re Martadinata',
            noTelp: '081908482552',
            email: 'tifannymartavia@yahoo.com',
            catatan: 'test aja sih ',
            createdAt: '2024-08-15 09:37:39',
            modifiedAt: '2024-08-30 09:56:24',
            surveyToken: 'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
            priority: 'high',
            alamatSurvey: 'Jl Re Martadinata',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'Testing',
            cabang: '14',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'KIA',
            tipe: 'NEW CERES/K2700 II',
            model: '2.7 MT',
            jenisAsuransi: 'comprehensive',
            status: 'schedule',
            platNomor: 'BE 333 da',
            perluasan: ['TJH PIHAK III']
        },
        {
            rowid: 47,
            noPengajuanSurvey: 'AUTO-14-00007-08-2024',
            nama: 'tip test kesekian',
            alamat: 'Jl Re Martadinata',
            noTelp: '081908482552',
            email: 'tifannymartavia@yahoo.com',
            catatan: 'test aja sih ',
            createdAt: '2024-08-15 09:37:39',
            modifiedAt: '2024-08-30 09:56:24',
            surveyToken: 'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
            priority: 'high',
            alamatSurvey: 'Jl Re Martadinata',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'Testing',
            cabang: '14',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'KIA',
            tipe: 'NEW CERES/K2700 II',
            model: '2.7 MT',
            jenisAsuransi: 'comprehensive',
            status: 'schedule',
            platNomor: 'BE 333 da',
            perluasan: ['TJH PIHAK III']
        },
        {
            rowid: 48,
            noPengajuanSurvey: 'AUTO-14-00007-08-2024',
            nama: 'tip test kesekian',
            alamat: 'Jl Re Martadinata',
            noTelp: '081908482552',
            email: 'tifannymartavia@yahoo.com',
            catatan: 'test aja sih ',
            createdAt: '2024-08-15 09:37:39',
            modifiedAt: '2024-08-30 09:56:24',
            surveyToken: 'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
            priority: 'high',
            alamatSurvey: 'Jl Re Martadinata',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'Testing',
            cabang: '14',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'KIA',
            tipe: 'NEW CERES/K2700 II',
            model: '2.7 MT',
            jenisAsuransi: 'comprehensive',
            status: 'schedule',
            platNomor: 'BE 333 da',
            perluasan: ['TJH PIHAK III']
        },
        {
            rowid: 49,
            noPengajuanSurvey: 'AUTO-14-00007-08-2024',
            nama: 'tip test kesekian',
            alamat: 'Jl Re Martadinata',
            noTelp: '081908482552',
            email: 'tifannymartavia@yahoo.com',
            catatan: 'test aja sih ',
            createdAt: '2024-08-15 09:37:39',
            modifiedAt: '2024-08-30 09:56:24',
            surveyToken: 'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
            priority: 'high',
            alamatSurvey: 'Jl Re Martadinata',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'Testing',
            cabang: '14',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'KIA',
            tipe: 'NEW CERES/K2700 II',
            model: '2.7 MT',
            jenisAsuransi: 'comprehensive',
            status: 'schedule',
            platNomor: 'BE 333 da',
            perluasan: ['TJH PIHAK III']
        },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(themed_1.ListItem.Accordion, { content: react_1["default"].createElement(themed_1.ListItem.Content, { className: "bg-[#fff]" },
                react_1["default"].createElement(react_native_1.View, { className: "w-screen flex-row justify-between items-center py-6 pr-10 pl-6 border-b border-black bg-[#fff]" },
                    react_1["default"].createElement(react_native_1.Text, { className: "flex-[0.3] text-[16px] text-black font-semibold" }, item.nama),
                    react_1["default"].createElement(react_native_1.View, { className: "flex-[0.7] flex-row justify-end items-center" },
                        react_1["default"].createElement(react_native_1.View, { className: "flex flex-row space-x-2" },
                            react_1["default"].createElement(react_native_paper_1.Surface, { className: "justify-center items-center border bg-white border-black rounded px-2 py-0.5", elevation: 2 },
                                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log("Pressed: " + item.nama); } },
                                    react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black tracking-tighter" }, "My Position"))),
                            react_1["default"].createElement(react_native_paper_1.Surface, { className: "justify-center items-center border bg-white border-black rounded px-2 py-0.5", elevation: 2 },
                                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleAssignPress },
                                    react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black tracking-tighter" }, "Assign")))),
                        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.3] flex items-center justify-center ml-2" },
                            react_1["default"].createElement(Ionicons_1["default"], { name: "mail", size: 24, color: "black" }),
                            react_1["default"].createElement(react_native_1.Text, { className: "absolute w-3.5 h-3.5 text-[8px] text-center pt-0.5 bg-red-500 text-white rounded-full top-4 -left-1" }, testList.length))))), isExpanded: expanded, onPress: function () {
                setExpanded(!expanded);
                console.log(item.nama);
            }, containerStyle: {
                backgroundColor: '#f7ebd7',
                padding: 0,
                paddingRight: 10
            } }, testList.map(function (item, index) { return (react_1["default"].createElement(react_native_1.View, { key: index },
            react_1["default"].createElement(themed_1.ListItem, { onPress: function () { return console.log('keluar'); }, containerStyle: {
                    backgroundColor: 'rgba(255, 188, 60, 0.3)',
                    paddingLeft: 0,
                    paddingRight: 0
                } },
                react_1["default"].createElement(themed_1.ListItem.Content, null,
                    react_1["default"].createElement(SurveyJobAssignJobItemSubList_1["default"], { item: item, index: index }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-screen border-b border-black" }))); })),
        reassignConfirmation && (react_1["default"].createElement(AssignJobModal_1["default"], { item: surveyItem, visible: reassignConfirmation, onConfirm: handleConfirm }))));
};
exports["default"] = SurveyJobAssignJobItem;
