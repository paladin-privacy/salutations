export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}

export interface Settings {
  noble: boolean;
  gender: Gender;
  name: string | null;
}

export const defaultSettings: Settings = {
  noble: false,
  gender: Gender.OTHER,
  name: null,
};
