export type FormColsValue = 4 | 6 | 8 | 10 | 12;

export type FormColsType =
  | FormColsValue
  | {
      value: FormColsValue;
      ocupyAll?: boolean;
    };
