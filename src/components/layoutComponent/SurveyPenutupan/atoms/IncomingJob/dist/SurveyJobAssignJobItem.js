"use strict";
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
var themed_1 = require("@rneui/themed");
var react_native_paper_1 = require("react-native-paper");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_simple_toast_1 = require("react-native-simple-toast");
var SurveyJobAssignJobItemSubList_1 = require("./SurveyJobAssignJobItemSubList");
var AssignJobModal_1 = require("../../../../reusableComponent/Modal/AssignJobModal");
var patchReassignSurvey_1 = require("../../../../../services/api/surveyPenutupan/patchReassignSurvey");
var SurveyJobAssignJobItem = function (_a) {
    var item = _a.item, index = _a.index, surveyItem = _a.surveyItem;
    var _b = react_1.useState(false), expanded = _b[0], setExpanded = _b[1];
    var _c = react_1.useState(''), userNotes = _c[0], setUserNotes = _c[1];
    var _d = react_1.useState(false), reassignConfirmation = _d[0], setReassignConfirmation = _d[1];
    var handleAssignPress = function () {
        setReassignConfirmation(true);
    };
    var handleConfirm = function (confirmed) { return __awaiter(void 0, void 0, void 0, function () {
        var noPengajuan, unitNo, fullName, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirmed) return [3 /*break*/, 4];
                    noPengajuan = surveyItem.noPengajuanSurvey;
                    unitNo = surveyItem.unitNo;
                    fullName = item.nama.toUpperCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, patchReassignSurvey_1.patchReassignSurvey(noPengajuan, unitNo, fullName, userNotes)];
                case 2:
                    res = _a.sent();
                    if (res.status === '01') {
                        react_native_simple_toast_1["default"].show('Survey Has Been Updated!', react_native_simple_toast_1["default"].SHORT);
                    }
                    else if (res.status === '02') {
                        react_native_simple_toast_1["default"].show('Update Survey Failed!', react_native_simple_toast_1["default"].SHORT);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error occured during survey assignment: " + error_1);
                    throw new Error();
                case 4:
                    setReassignConfirmation(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var testList = [
        {
            rowid: 45,
            noPengajuanSurvey: 'AUTO-01-00002-09-2024',
            nama: 'diah putri',
            alamat: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            noTelp: '089999999',
            email: 'diahputri@gmail.com',
            catatan: 'ini input diahputri kedua',
            createdAt: '2024-09-09 08:57:00',
            modifiedAt: '2024-09-09 08:57:00',
            surveyToken: 'TOKEN_e2YoshCkcnCHfs7-7uVykDo6c2VLVjgxQXhQUkZsSE5KdVNjZmlxOEhucDNWWFBwbG05RG1obTZlZ3h3eUdkZWIzL3Ava3E0RGQ1YTE0Y09GUA',
            priority: 'high',
            alamatSurvey: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'DIAH PUTRI KUSUMA WARDANI',
            cabang: '01',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'CHERY',
            tipe: 'OMODA 5',
            model: '1.5 COMFORT Z',
            jenisAsuransi: 'totalLossOnly',
            status: 'new',
            platNomor: 'B 1111 qwe',
            warna: 'biru tua',
            perluasan: ['KECELAKAAN DIRI PENGEMUDI', 'BENGKEL RESMI']
        },
        {
            rowid: 46,
            noPengajuanSurvey: 'AUTO-01-00002-09-2024',
            nama: 'diah putri',
            alamat: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            noTelp: '089999999',
            email: 'diahputri@gmail.com',
            catatan: 'ini input diahputri kedua',
            createdAt: '2024-09-09 08:57:00',
            modifiedAt: '2024-09-09 08:57:00',
            surveyToken: 'TOKEN_e2YoshCkcnCHfs7-7uVykDo6c2VLVjgxQXhQUkZsSE5KdVNjZmlxOEhucDNWWFBwbG05RG1obTZlZ3h3eUdkZWIzL3Ava3E0RGQ1YTE0Y09GUA',
            priority: 'high',
            alamatSurvey: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'DIAH PUTRI KUSUMA WARDANI',
            cabang: '01',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'CHERY',
            tipe: 'OMODA 5',
            model: '1.5 COMFORT Z',
            jenisAsuransi: 'totalLossOnly',
            status: 'new',
            platNomor: 'B 1111 qwe',
            warna: 'biru tua',
            perluasan: ['KECELAKAAN DIRI PENGEMUDI', 'BENGKEL RESMI']
        },
        {
            rowid: 47,
            noPengajuanSurvey: 'AUTO-01-00002-09-2024',
            nama: 'diah putri',
            alamat: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            noTelp: '089999999',
            email: 'diahputri@gmail.com',
            catatan: 'ini input diahputri kedua',
            createdAt: '2024-09-09 08:57:00',
            modifiedAt: '2024-09-09 08:57:00',
            surveyToken: 'TOKEN_e2YoshCkcnCHfs7-7uVykDo6c2VLVjgxQXhQUkZsSE5KdVNjZmlxOEhucDNWWFBwbG05RG1obTZlZ3h3eUdkZWIzL3Ava3E0RGQ1YTE0Y09GUA',
            priority: 'high',
            alamatSurvey: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'DIAH PUTRI KUSUMA WARDANI',
            cabang: '01',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'CHERY',
            tipe: 'OMODA 5',
            model: '1.5 COMFORT Z',
            jenisAsuransi: 'totalLossOnly',
            status: 'new',
            platNomor: 'B 1111 qwe',
            warna: 'biru tua',
            perluasan: ['KECELAKAAN DIRI PENGEMUDI', 'BENGKEL RESMI']
        },
        {
            rowid: 48,
            noPengajuanSurvey: 'AUTO-01-00002-09-2024',
            nama: 'diah putri',
            alamat: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            noTelp: '089999999',
            email: 'diahputri@gmail.com',
            catatan: 'ini input diahputri kedua',
            createdAt: '2024-09-09 08:57:00',
            modifiedAt: '2024-09-09 08:57:00',
            surveyToken: 'TOKEN_e2YoshCkcnCHfs7-7uVykDo6c2VLVjgxQXhQUkZsSE5KdVNjZmlxOEhucDNWWFBwbG05RG1obTZlZ3h3eUdkZWIzL3Ava3E0RGQ1YTE0Y09GUA',
            priority: 'high',
            alamatSurvey: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'DIAH PUTRI KUSUMA WARDANI',
            cabang: '01',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'CHERY',
            tipe: 'OMODA 5',
            model: '1.5 COMFORT Z',
            jenisAsuransi: 'totalLossOnly',
            status: 'new',
            platNomor: 'B 1111 qwe',
            warna: 'biru tua',
            perluasan: ['KECELAKAAN DIRI PENGEMUDI', 'BENGKEL RESMI']
        },
        {
            rowid: 49,
            noPengajuanSurvey: 'AUTO-01-00002-09-2024',
            nama: 'diah putri',
            alamat: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            noTelp: '089999999',
            email: 'diahputri@gmail.com',
            catatan: 'ini input diahputri kedua',
            createdAt: '2024-09-09 08:57:00',
            modifiedAt: '2024-09-09 08:57:00',
            surveyToken: 'TOKEN_e2YoshCkcnCHfs7-7uVykDo6c2VLVjgxQXhQUkZsSE5KdVNjZmlxOEhucDNWWFBwbG05RG1obTZlZ3h3eUdkZWIzL3Ava3E0RGQ1YTE0Y09GUA',
            priority: 'high',
            alamatSurvey: 'Wisma Bsg, Jl. Abdul Muis No.40 Lantai 2-3, RT.1/RW.8, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160',
            statusUser: null,
            source: 'RM_SUR_LOGIN',
            requesterFullName: 'DIAH PUTRI KUSUMA WARDANI',
            cabang: '01',
            mkgGroup: 'MKGROUP7',
            unitNo: '0001',
            merek: 'CHERY',
            tipe: 'OMODA 5',
            model: '1.5 COMFORT Z',
            jenisAsuransi: 'totalLossOnly',
            status: 'new',
            platNomor: 'B 1111 qwe',
            warna: 'biru tua',
            perluasan: ['KECELAKAAN DIRI PENGEMUDI', 'BENGKEL RESMI']
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
        reassignConfirmation && (react_1["default"].createElement(AssignJobModal_1["default"], { item: surveyItem, visible: reassignConfirmation, setUserNotes: setUserNotes, onConfirm: handleConfirm }))));
};
exports["default"] = SurveyJobAssignJobItem;
