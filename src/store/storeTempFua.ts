import {create} from 'zustand';

type dataFUATypes = {
  noPengajuan: string;
  unitNo: string;
  contactDate: Date;
  appointmentDate: Date;
  address: string | null;
  status: string;
  remarks: string | null;
};

interface SaveFuaTemporaryStore {
  data: dataFUATypes[];
  addTemporaryFUA: (newFUA: dataFUATypes) => void;
  getTemporaryFUAData: (
    noPengajuan: string,
    unitNo: string,
  ) => dataFUATypes | undefined;
}

export const useFuaStore = create<SaveFuaTemporaryStore>((set, get) => ({
  data: [],

  addTemporaryFUA: (newFUA: dataFUATypes) => {
    set(state => {
      const existingFUA = state.data.findIndex(
        item =>
          item.noPengajuan === newFUA.noPengajuan &&
          item.unitNo === newFUA.unitNo,
      );

      // Kalau udh ada jadinya update
      if (existingFUA > -1) {
        const updatedFUAData = [...state.data];
        updatedFUAData[existingFUA] = newFUA;
        return {data: updatedFUAData};
      } else {
        return {data: [...state.data, newFUA]};
      }
    });
  },

  getTemporaryFUAData: (noPengajuan: string, unitNo: string) => {
    return get().data.find(
      item => item.noPengajuan === noPengajuan && item.unitNo === unitNo,
    );
  },
}));
