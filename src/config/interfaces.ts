// interface PropsIos {
//   bundleIdentifier: string;
//   buildNumber: string;
// }
// interface PropsAndroid {
//   package: string;
//   versionCode: number;
// }
interface PropsExpo {
  name: string;
  slug: string;

  scheme: string;
  facebookScheme: string;

  version: string;
  assetBundlePatterns: string[];

  // ios: PropsIos;
  //  android: PropsAndroid;
}

interface PropsGoogle {
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope: string;
}
interface PropsFacebook {
  clientId: string;
}

export interface IConfig {
  name: string;
  baseURL: string;
  keyAsyncStorage: string;
  widthCropAvatar: number;
  heightCropAvatar: number;
  google: PropsGoogle;
  facebook: PropsFacebook;
  expo: PropsExpo;
}
