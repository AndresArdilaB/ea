export interface ImputText {
  placeHolder: string,
  onResult: ((result: Res) => void);
}

export interface Res {
  value: number;
  index: number;
}