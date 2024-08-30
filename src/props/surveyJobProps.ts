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
  alamatSurvey: string | "";
  statusUser: string | null;

  perluasan: string[];
};
