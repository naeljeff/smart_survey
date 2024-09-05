export type surveyJobProps = {
  rowid: number;
  noPengajuanSurvey: string;
  nama: string;
  alamat: string;
  noTelp: string;
  email: string;
  catatan: string;
  createdAt: string;
  modifiedAt: string;
  surveyToken: string;
  priority: string;
  source: string;
  requesterFullName: string;
  cabang: string;
  mkgGroup: string;

  unitNo: string;
  merek: string;
  tipe: string;
  model: string;
  jenisAsuransi: string;
  status: string;
  platNomor: string;
  alamatSurvey: string | '';
  statusUser: string | null;
  notesAssign: string | null;
  bodyType: string | null;
  chassisNo: string | null;
  engineNo: string | null;
  year: string | null;
  transmission: string | null;
  fuel: string | null;

  perluasan: string[];
};
