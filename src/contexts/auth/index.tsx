import * as AppleAuthentication from 'expo-apple-authentication';

import * as AuthSession from 'expo-auth-session';
import {ResponseType} from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {config} from '@/config';

import {
  // AnamneseUserProps,
  AuthContextData,
  AuthState,
  // ChangePasswordEmailProps,
  //  CodeValidationProps,
  //  CreatePasswordProps,
  //  CreateUserProps,
  PropsAuthorizationGoogleResponse,
  //  PropsSignInWithEmailPassword,
  //  PropsUpdateProfile,
} from './interfaces';
import {ChildrenData} from '@/@types/common';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({children}: ChildrenData) => {
  // const {addToast} = useToast();
  //  const {triggerError} = useErrorHandling();
  // const {deviceInfo} = useDeviceInfo();

  const [data, setData] = useState<AuthState>({} as AuthState);

  const [loading, setLoading] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const [loadingApple, setLoadingApple] = useState(false);

  const [loadingStorage, setLoadingStorage] = useState(true);

  const [, response, promptAsync] = Facebook.useAuthRequest({
    clientId: config.facebook.clientId,
    responseType: ResponseType.Token,
  });

  const settingData = useCallback(async (dataUser: AuthState) => {
    // await settingStorage(dataUser);

    //  api.defaults.headers.common.Authorization = `Bearer ${dataUser.accessToken}`;

    setData(dataUser);
  }, []);

  useEffect(() => {
    async function loginFacebook(access_token: string): Promise<void> {
      try {
        setLoadingFacebook(true);

        console.log('facebook token', access_token);

        // const responseFacebook = await api.post('/sessions/facebook', {
        //   facebookAccessToken: access_token,
        //   device: deviceInfo,
        // });

        // await settingData(responseFacebook.data);
        // if (!responseFacebook.data.user.hasAcceptedTerms) {
        //   addToast({
        //     title: 'Estamos quase lá',
        //     message:
        //       'Agora so precisamos que leia e aceite os temos de uso e privacidade!',
        //     type: 'success',
        //   });
        // }
      } catch (err) {
        console.log('erro login face');
        //  triggerError(err);
      } finally {
        setLoadingFacebook(false);
      }
    }

    if (response?.type === 'success') {
      console.log('faceeeeee', response);
      //  const {access_token} = response.params;

      //  loginFacebook(access_token);
    }
  }, [response]);

  const signOut = useCallback(async () => {
    //  await removeStorage();
    setData({} as AuthState);
  }, []);

  //   const deleteAccount = useCallback(
  //     async (justification: string) => {
  //       try {
  //         setLoading(true);

  //         //  await api.delete('/users', {data: {justification}});

  //         signOut();
  //         // addToast({
  //         //   title: 'Sentimos muito!',
  //         //   message:
  //         //     'Sua conta foi deletada, mas caso deseje, poderá criá-la novamente',
  //         //   type: 'success',
  //         // });
  //       } catch (err) {
  //         //  triggerError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [signOut],
  //   );

  //   const refreshAccessToken = useCallback(async () => {
  //     try {
  //       const {refreshToken} = data;
  //       const responseRefreshToken = await api.post('/sessions/refresh', {
  //         refreshToken: refreshToken,
  //         device: deviceInfo,
  //       });

  //       api.defaults.headers.common.Authorization = `Bearer ${responseRefreshToken.data.accessToken}`;

  //       await settingData(responseRefreshToken.data);
  //     } catch (err) {
  //       signOut();
  //     }
  //   }, [data, deviceInfo, settingData, signOut]);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      // const dataStorage = await getStorage();
      //  if (dataStorage) {
      //   const dataParse = JSON.parse(dataStorage);
      //  api.defaults.headers.common.Authorization = `Bearer ${dataParse.accessToken}`;
      //    await settingData(dataParse);
      //    }
      //   setLoadingStorage(false);
    }
    loadStorageData();
  }, []);

  const signInWithFacebook = useCallback(async () => {
    await promptAsync();
  }, [promptAsync]);

  const signInWithGoogle = useCallback(async () => {
    console.log('aquiii', config.google.clientId);
    try {
      setLoadingGoogle(true);

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
        config.google.clientId
      }&redirect_uri=${config.google.redirectUri}&response_type=${
        config.google.responseType
      }&scope=${encodeURI(config.google.scope)}`;

      const {type, params} = (await AuthSession.startAsync({
        authUrl,
      })) as PropsAuthorizationGoogleResponse;

      if (type === 'success') {
        const {access_token} = params;

        console.log('token google', access_token);

        // const responseGoogle = await api.post('/sessions/google', {
        //   googleAccessToken: access_token,
        //   device: deviceInfo,
        // });

        // await settingData(responseGoogle.data);
        // if (!responseGoogle.data.user.hasAcceptedTerms) {
        //   addToast({
        //     title: 'Estamos quase lá',
        //     message:
        //       'Agora so precisamos que leia e aceite os temos de uso e privacidade!',
        //     type: 'success',
        //   });
        // }
      }
      if (type === 'cancel') {
        setLoadingGoogle(false);
      }
    } catch (err) {
      console.log('caiu no erro', err);
      // triggerError(err);
    } finally {
      setLoadingGoogle(false);
    }
  }, []);

  //   const signInWithApple = useCallback(async () => {
  //     try {
  //       setLoadingApple(true);
  //       const credential = await AppleAuthentication.signInAsync({
  //         requestedScopes: [
  //           AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
  //           AppleAuthentication.AppleAuthenticationScope.EMAIL,
  //         ],
  //       });

  //       console.log('credential apple', credential);

  //       //   const responseApple = await api.post('/sessions/apple', {
  //       //     appleAccessToken: credential.identityToken,
  //       //     name: `${credential.fullName!.familyName!} ${credential.fullName!
  //       //       .givenName!}`,
  //       //     device: deviceInfo,
  //       //   });

  //       //   await settingData(responseApple.data);
  //       //   if (!responseApple.data.user.hasAcceptedTerms) {
  //       //     addToast({
  //       //       title: 'Estamos quase lá',
  //       //       message:
  //       //         'Agora so precisamos que leia e aceite os temos de uso e privacidade!',
  //       //       type: 'success',
  //       //     });
  //       //   }

  //       setLoadingApple(false);
  //     } catch (err) {
  //       //  triggerError(err);
  //     } finally {
  //       setLoadingApple(false);
  //     }
  //   }, []);

  //   const signInWithEmailPassword = useCallback(
  //     async (credential: PropsSignInWithEmailPassword) => {
  //       try {
  //         setLoading(true);

  //         const responseLogin = await api.post('/sessions', credential);

  //         await settingData(responseLogin.data);
  //       } catch (err) {
  //         triggerError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [settingData, triggerError],
  //   );

  //   const createUser = useCallback(
  //     async (user: CreateUserProps) => {
  //       try {
  //         setLoading(true);
  //         const responseUser = await api.post('/users', user);

  //         return responseUser.data;
  //       } catch (err) {
  //         triggerError(err);

  //         return null;
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [triggerError],
  //   );

  //   const codeValidation = useCallback(
  //     async (validationCode: CodeValidationProps) => {
  //       try {
  //         setLoading(true);
  //         await api.post('/verification-codes/confirm', validationCode);

  //         return true;
  //       } catch (err) {
  //         triggerError(err);
  //         return false;
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [triggerError],
  //   );

  //   const createPassword = useCallback(
  //     async ({
  //       code,
  //       email,
  //       password,
  //       updatePassword = false,
  //     }: CreatePasswordProps) => {
  //       try {
  //         setLoading(true);

  //         const responseData = await api.post(
  //           '/sessions/set-password-and-sign-in',
  //           {code, email, password},
  //         );

  //         await settingData(responseData.data);

  //         addToast({
  //           title: updatePassword ? 'Tudo certo' : 'Parabéns',
  //           message: updatePassword
  //             ? 'Dados atualizados com sucesso.'
  //             : 'Seja bem vindo(a)',
  //           type: 'success',
  //         });
  //       } catch (err) {
  //         triggerError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [addToast, settingData, triggerError],
  //   );

  //   const changeEmailConfirm = useCallback(
  //     async ({code, email}: CodeValidationProps) => {
  //       try {
  //         setLoading(true);

  //         const responseData = await api.post(
  //           '/verification-codes/change-email/confirm',
  //           {
  //             code,
  //             email,
  //             device: deviceInfo,
  //           },
  //         );

  //         const updateData = {
  //           ...data,
  //           user: responseData.data,
  //         };
  //         await settingData(updateData);

  //         addToast({
  //           title: 'Tudo certo',
  //           message: 'E-mail atualizado com sucesso.',
  //           type: 'success',
  //         });
  //         return true;
  //       } catch (err) {
  //         triggerError(err);
  //         return false;
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [addToast, data, deviceInfo, settingData, triggerError],
  //   );

  //   const updateProfile = useCallback(
  //     async (userUpdate: PropsUpdateProfile) => {
  //       try {
  //         setLoading(true);
  //         const {user} = data;

  //         const responseUpdateProfile = await api.patch(
  //           `/profile/${user.id}`,
  //           userUpdate,
  //         );

  //         const upData = {
  //           ...data,
  //           user: {
  //             ...data.user,
  //             ...responseUpdateProfile.data,
  //           },
  //         };

  //         await settingData(upData);

  //         addToast({
  //           title: 'Tudo certo',
  //           message: 'Perfil atualizado com sucesso',
  //           type: 'success',
  //         });
  //       } catch (err) {
  //         triggerError(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [data, settingData, addToast, triggerError],
  //   );

  //   const updateUserAnamnese = useCallback(
  //     async (lastAnamnese: AnamneseUserProps) => {
  //       const upData = {
  //         ...data,
  //         user: {
  //           ...data.user,
  //           anamnese: lastAnamnese,
  //         },
  //       };

  //       await settingData(upData);
  //     },
  //     [data, settingData],
  //   );

  //   const uploadAvatar = useCallback(
  //     async (avatar: ImageOrVideo) => {
  //       try {
  //         setLoadingAvatar(true);
  //         const dataForm = new FormData();

  //         const configHeader = {
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //             accept: 'application/json',
  //           },
  //         };
  //         dataForm.append('image', {
  //           name: avatar.path,
  //           type: avatar.mime,
  //           uri: avatar.path,
  //         });

  //         const responseUpload = await api.post('images', dataForm, configHeader);

  //         const {user} = data;

  //         const responseUpadateUrlAvatar = await api.patch(
  //           `/profile/${user.id}`,
  //           {
  //             avatarUrl: responseUpload.data.url,
  //           },
  //         );

  //         const upData = {
  //           ...data,
  //           user: {
  //             ...data.user,
  //             avatarUrl: responseUpadateUrlAvatar.data.avatarUrl,
  //           },
  //         };

  //         await settingData(upData);

  //         setLoadingAvatar(false);
  //       } catch (err) {
  //         triggerError(err);
  //       } finally {
  //         setLoadingAvatar(false);
  //       }
  //     },
  //     [data, settingData, triggerError],
  //   );

  //   const acceptTerms = useCallback(async () => {
  //     try {
  //       setLoading(true);
  //       const {user} = data;

  //       await api.patch(`/profile/${user.id}`, {hasAcceptedTerms: true});

  //       const upData = {
  //         ...data,
  //         user: {
  //           ...data.user,
  //           hasAcceptedTerms: true,
  //         },
  //       };

  //       await settingData(upData);

  //       addToast({
  //         title: 'Parabéns',
  //         message: 'Seja bem vindo(a)',
  //         type: 'success',
  //       });
  //     } catch (err) {
  //       triggerError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, [data, settingData, addToast, triggerError]);

  //   const forgotPassword = useCallback(
  //     async ({email, isLogged}: ChangePasswordEmailProps) => {
  //       try {
  //         const url = isLogged
  //           ? 'verification-codes/change-password'
  //           : 'verification-codes';

  //         setLoading(true);
  //         await api.post(url, {email});
  //         setLoading(false);
  //         return true;
  //       } catch (err) {
  //         triggerError(err);
  //         return false;
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [triggerError],
  //   );
  //   const checkChangeEmail = useCallback(
  //     async (email: string) => {
  //       try {
  //         setLoading(true);
  //         await api.post('/verification-codes/change-email', {email});
  //         setLoading(false);
  //         return true;
  //       } catch (err) {
  //         triggerError(err);
  //         return false;
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     [triggerError],
  //   );

  return (
    <AuthContext.Provider
      value={{
        data,
        loading,
        loadingAvatar,
        loadingGoogle,
        loadingFacebook,
        loadingApple,
        loadingStorage,
        //  uploadAvatar,
        //  acceptTerms,
        //   signInWithEmailPassword,
        signInWithGoogle,
        signInWithFacebook,
        // signInWithApple,
        signOut,
        //  deleteAccount,
        //  createUser,
        //  codeValidation,
        //  createPassword,
        //  forgotPassword,
        //  updateProfile,
        //  checkChangeEmail,
        //  changeEmailConfirm,
        //   updateUserAnamnese,
      }}>
      {/* <GlobalApiInterceptors signOut={signOut} onRefresh={refreshAccessToken} /> */}
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export {AuthProvider, useAuth};
