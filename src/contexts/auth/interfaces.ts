//import {ImageOrVideo} from 'react-native-image-crop-picker';
export interface PropsOrganization {
  organization_id: string;
  avatar_url: string;
  name: string;
}
export interface PropsAddress {
  id: string;
  zip_code: string;
  street: string;
  street_number: string;
  district: string;
  city: string;
  state: string;
  complement: string;
  country: string;
}
export interface AnamneseUserProps {
  lastSubmit: string | null;
  totalSubmits: number;
}
export interface UserProps {
  id: string;
  email: string;
  name: string;
  dateOfBirth?: string;
  avatarUrl: string;
  roles: string[];
  hasAcceptedTerms: boolean;
  biologicalSex?: 'M' | 'F';
  anamnese: AnamneseUserProps;
}

export interface CreateUserProps {
  name: string;
  email: string;
}
export interface PropsUpdateProfile {
  name: string;
  biologicalSex: 'M' | 'F';
  dateOfBirth: Date;
}

export interface RefreshDataProps {
  refreshToken: string;
  accessTokenExpirationDate: string;
}
export interface AuthState {
  user: UserProps;
  accessToken: string;
  refreshToken: string;
}

export interface DeviceInfoProps {
  brand: string;
  manufacturer: string;
  modelName: string;
  osName: string;
  osVersion: string;
  code: string;
}

export interface PropsSignInWithEmailPassword {
  email: string;
  password: string;
  device: DeviceInfoProps;
}

export interface PropsAuthorizationGoogleResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export interface CodeEmailValidation {
  email: string;
  pass_validation: string;
}
export interface PropsChangePassword {
  password: string;
  document: string;
}
export interface CreateUserResponse {
  id: string;
  email: string;
  name: string;
  roles: string[];
}

export interface CodeValidationProps {
  code: string;
  email: string;
}
export interface ChangePasswordEmailProps {
  email: string;

  isLogged: boolean;
}
export interface CreatePasswordProps {
  code: string;
  email: string;
  password: string;
  updatePassword?: boolean;
}
export interface AuthContextData {
  data: AuthState;
  loading: boolean;
  loadingAvatar: boolean;
  loadingGoogle: boolean;
  loadingFacebook: boolean;
  loadingApple: boolean;
  loadingStorage: boolean;

  // createUser: (user: CreateUserProps) => Promise<CreateUserResponse | null>;
  // codeValidation: (codeValidationData: CodeValidationProps) => Promise<boolean>;
  // updateProfile: (user: PropsUpdateProfile) => Promise<void>;

  //uploadAvatar: (avatar: ImageOrVideo) => Promise<void>;

  //  createPassword: (payload: CreatePasswordProps) => Promise<void>;
  // acceptTerms: () => Promise<void>;
  //   signInWithEmailPassword: (
  //     credential: PropsSignInWithEmailPassword,
  //   ) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  // signInWithApple: () => Promise<void>;
  // forgotPassword: (payload: ChangePasswordEmailProps) => Promise<boolean>;
  // checkChangeEmail: (email: string) => Promise<boolean>;
  // changeEmailConfirm: (paylod: CodeValidationProps) => Promise<boolean>;
  signOut: () => void;
  //  deleteAccount: (justification: string) => Promise<void>;
  //  updateUserAnamnese: (lastAnamnese: AnamneseUserProps) => Promise<void>;
}
