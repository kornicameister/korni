
export enum DataLoadingStage {
  LOADING,
  DONE,
  ERROR,
  NONE
}

export const KORNI_VERSION: string = process.env.REACT_APP_VERSION || 'Unknown';
