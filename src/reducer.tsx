import { StoreInterface, NEW_LICENSE } from "./interfaces";
import { License } from "./models/licence";
export type ACTIONTYPE = { type: string; datakey: string; payload?: any };

interface ACTIONMAP {
  data: () => StoreInterface;
  state: () => StoreInterface;
  businessInfo: () => StoreInterface;
  currentLicense: () => StoreInterface;
  addLicense: () => StoreInterface;
  clearLicenseForm: () => StoreInterface;
  deleteLicense: () => StoreInterface;
  editLicense: () => StoreInterface;
  saveLicense: () => StoreInterface;
  switchSurveyToggle: () => StoreInterface;
  checkFilling: () => StoreInterface;
  fillingInterrupted: () => StoreInterface;
  checkToggles: () => StoreInterface;
  modalToggle: () => StoreInterface;
  prepareObject: () => StoreInterface;
}

export const stateReducer = (store: StoreInterface, action: ACTIONTYPE) => {
  const { type, datakey, payload } = action;

  const actionMap: ACTIONMAP = {
    data: () => ({ ...store, data: { ...store.data, [datakey]: payload } }),
    businessInfo: () => ({
      ...store,
      businessInfo: { ...store.businessInfo, [datakey]: payload },
    }),
    state: () => ({ ...store, state: { ...store.state, [datakey]: payload } }),
    currentLicense: () => ({
      ...store,
      currentLicense: { ...store.currentLicense, [datakey]: payload },
    }),
    addLicense: () => {
      const userLicense: License = new License(store.currentLicense);
      const updatedStoreofLicenses = [...store.licenses, userLicense];

      return { ...store, [datakey]: updatedStoreofLicenses };
    },
    clearLicenseForm: () => {
      const keys: string[] = Object.keys(store.currentLicense);
      const copy: NEW_LICENSE = Object.assign({}, store.currentLicense);
      keys.forEach((key) => (copy[key as keyof NEW_LICENSE] = ""));
      return { ...store, currentLicense: copy };
    },
    deleteLicense: () => {
      const filteredLicenses = store.licenses.filter(
        (license) => license.id !== payload
      );
      return { ...store, licenses: filteredLicenses };
    },
    editLicense: () => {
      const { id, ...rest } = payload as License;
      const updatedStore = {
        ...store,
        state: {
          ...store.state,
          [datakey]: "editing",
          currentEditingLicenseId: id,
        },
        currentLicense: rest,
      };

      return updatedStore;
    },
    saveLicense: () => {
      const { currentEditingLicenseId } = store.state;

      const updatedLicenses = store.licenses.map((license) => {
        if (license.getId() === currentEditingLicenseId) {
          license.update(payload);
        }
        return license;
      });
      return { ...store, licenses: updatedLicenses };
    },
    switchSurveyToggle: () => ({
      ...store,
      survey: { ...store.survey, [datakey]: payload },
    }),
    checkFilling: () => {
      const isAllFieldsFilled = payload.every(
        // @ts-ignore
        (key: string) => store[datakey][key].length > 0
      )
        ? "approved"
        : "filling";

      return {
        ...store,
        state: {
          ...store.state,
          fillState: { ...store.state.fillState, [datakey]: isAllFieldsFilled },
        },
      };
    },
    checkToggles: () => {
      const isToggleSwiped = payload.some((value: boolean) => value === true)
        ? "approved"
        : "filling";
      return {
        ...store,
        state: {
          ...store.state,
          fillState: { ...store.state.fillState, [datakey]: isToggleSwiped },
        },
      };
    },
    fillingInterrupted: () => {
      return {
        ...store,
        state: {
          ...store.state,
          fillState: { ...store.state.fillState, [datakey]: "invalid" },
        },
      };
    },
    modalToggle: () => {
      return { ...store, state: { ...store.state, [datakey]: payload } };
    },
    prepareObject: () => {
      const result = {
        Common: store.data,
        business: store.businessInfo,
        licenses: store.state.hasLicense ? store.licenses : "no licenses",
        survey: store.survey,
      };

      return { ...store, result };
    },
  };

  return actionMap[type as keyof ACTIONMAP]();
};
