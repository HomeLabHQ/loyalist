import { baseApi as api } from './baseApi';
export const addTagTypes = [
  'auth',
  'file-cleanup',
  'file-upload',
  'image-upload',
  'loyalty-cards',
  'stores',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authCreate: build.mutation<AuthCreateApiResponse, AuthCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/`,
          method: 'POST',
          body: queryArg.customTokenObtainPairRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authPasswordForgetCreate: build.mutation<
        AuthPasswordForgetCreateApiResponse,
        AuthPasswordForgetCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/password/forget/`,
          method: 'POST',
          body: queryArg.forgetPasswordRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authPasswordResetCreate: build.mutation<
        AuthPasswordResetCreateApiResponse,
        AuthPasswordResetCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/password/reset/`,
          method: 'POST',
          body: queryArg.resetPasswordRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authPasswordUpdateCreate: build.mutation<
        AuthPasswordUpdateCreateApiResponse,
        AuthPasswordUpdateCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/password/update/`,
          method: 'POST',
          body: queryArg.changePasswordRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authProfileRetrieve: build.query<AuthProfileRetrieveApiResponse, AuthProfileRetrieveApiArg>({
        query: () => ({ url: `/api/auth/profile/` }),
        providesTags: ['auth'],
      }),
      authProfileUpdate: build.mutation<AuthProfileUpdateApiResponse, AuthProfileUpdateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/profile/`,
          method: 'PUT',
          body: queryArg.userRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authProfilePartialUpdate: build.mutation<
        AuthProfilePartialUpdateApiResponse,
        AuthProfilePartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/profile/`,
          method: 'PATCH',
          body: queryArg.patchedUserRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authRefreshCreate: build.mutation<AuthRefreshCreateApiResponse, AuthRefreshCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/refresh/`,
          method: 'POST',
          body: queryArg.tokenRefreshRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authRegisterCreate: build.mutation<AuthRegisterCreateApiResponse, AuthRegisterCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/register/`,
          method: 'POST',
          body: queryArg.signUpRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authRegisterConfirmCreate: build.mutation<
        AuthRegisterConfirmCreateApiResponse,
        AuthRegisterConfirmCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/register/confirm/`,
          method: 'POST',
          body: queryArg.signUpConfirmRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authSocialLoginsRetrieve: build.query<
        AuthSocialLoginsRetrieveApiResponse,
        AuthSocialLoginsRetrieveApiArg
      >({
        query: () => ({ url: `/api/auth/social-logins/` }),
        providesTags: ['auth'],
      }),
      authSocialJwtPairCreate: build.mutation<
        AuthSocialJwtPairCreateApiResponse,
        AuthSocialJwtPairCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/social/jwt-pair/`,
          method: 'POST',
          body: queryArg.oAuth2InputRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      authVerifyCreate: build.mutation<AuthVerifyCreateApiResponse, AuthVerifyCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/verify/`,
          method: 'POST',
          body: queryArg.tokenVerifyRequest,
        }),
        invalidatesTags: ['auth'],
      }),
      fileCleanupCreate: build.mutation<FileCleanupCreateApiResponse, FileCleanupCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/file-cleanup/`,
          method: 'POST',
          body: queryArg.imageUploadRequest,
        }),
        invalidatesTags: ['file-cleanup'],
      }),
      fileUploadCreate: build.mutation<FileUploadCreateApiResponse, FileUploadCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/file-upload/${queryArg.extension}/`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['file-upload'],
      }),
      imageUploadCreate: build.mutation<ImageUploadCreateApiResponse, ImageUploadCreateApiArg>({
        query: (queryArg) => ({ url: `/api/image-upload/`, method: 'POST', body: queryArg.body }),
        invalidatesTags: ['image-upload'],
      }),
      loyaltyCardsList: build.query<LoyaltyCardsListApiResponse, LoyaltyCardsListApiArg>({
        query: (queryArg) => ({
          url: `/api/loyalty-cards/`,
          params: { page: queryArg.page, page_size: queryArg.pageSize },
        }),
        providesTags: ['loyalty-cards'],
      }),
      loyaltyCardsCreate: build.mutation<LoyaltyCardsCreateApiResponse, LoyaltyCardsCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/loyalty-cards/`,
          method: 'POST',
          body: queryArg.loyaltyCardRequest,
        }),
        invalidatesTags: ['loyalty-cards'],
      }),
      loyaltyCardsRetrieve: build.query<
        LoyaltyCardsRetrieveApiResponse,
        LoyaltyCardsRetrieveApiArg
      >({
        query: (queryArg) => ({ url: `/api/loyalty-cards/${queryArg.id}/` }),
        providesTags: ['loyalty-cards'],
      }),
      loyaltyCardsUpdate: build.mutation<LoyaltyCardsUpdateApiResponse, LoyaltyCardsUpdateApiArg>({
        query: (queryArg) => ({
          url: `/api/loyalty-cards/${queryArg.id}/`,
          method: 'PUT',
          body: queryArg.loyaltyCardRequest,
        }),
        invalidatesTags: ['loyalty-cards'],
      }),
      loyaltyCardsPartialUpdate: build.mutation<
        LoyaltyCardsPartialUpdateApiResponse,
        LoyaltyCardsPartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/loyalty-cards/${queryArg.id}/`,
          method: 'PATCH',
          body: queryArg.patchedLoyaltyCardRequest,
        }),
        invalidatesTags: ['loyalty-cards'],
      }),
      loyaltyCardsDestroy: build.mutation<
        LoyaltyCardsDestroyApiResponse,
        LoyaltyCardsDestroyApiArg
      >({
        query: (queryArg) => ({ url: `/api/loyalty-cards/${queryArg.id}/`, method: 'DELETE' }),
        invalidatesTags: ['loyalty-cards'],
      }),
      storesList: build.query<StoresListApiResponse, StoresListApiArg>({
        query: (queryArg) => ({
          url: `/api/stores/`,
          params: { page: queryArg.page, page_size: queryArg.pageSize },
        }),
        providesTags: ['stores'],
      }),
      storesRetrieve: build.query<StoresRetrieveApiResponse, StoresRetrieveApiArg>({
        query: (queryArg) => ({ url: `/api/stores/${queryArg.id}/` }),
        providesTags: ['stores'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as backendApi };
export type AuthCreateApiResponse = /** status 200  */ JwtAuthResponse;
export type AuthCreateApiArg = {
  customTokenObtainPairRequest: CustomTokenObtainPairRequestWrite;
};
export type AuthPasswordForgetCreateApiResponse = /** status 200  */ ForgetPassword;
export type AuthPasswordForgetCreateApiArg = {
  forgetPasswordRequest: ForgetPasswordRequest;
};
export type AuthPasswordResetCreateApiResponse = /** status 200  */ ResetPassword;
export type AuthPasswordResetCreateApiArg = {
  resetPasswordRequest: ResetPasswordRequest;
};
export type AuthPasswordUpdateCreateApiResponse = unknown;
export type AuthPasswordUpdateCreateApiArg = {
  changePasswordRequest: ChangePasswordRequest;
};
export type AuthProfileRetrieveApiResponse = /** status 200  */ UserRead;
export type AuthProfileRetrieveApiArg = void;
export type AuthProfileUpdateApiResponse = /** status 200  */ UserRead;
export type AuthProfileUpdateApiArg = {
  userRequest: UserRequest;
};
export type AuthProfilePartialUpdateApiResponse = /** status 200  */ UserRead;
export type AuthProfilePartialUpdateApiArg = {
  patchedUserRequest: PatchedUserRequest;
};
export type AuthRefreshCreateApiResponse = /** status 200  */ TokenRefreshRead;
export type AuthRefreshCreateApiArg = {
  tokenRefreshRequest: TokenRefreshRequestWrite;
};
export type AuthRegisterCreateApiResponse = /** status 201  */ JwtAuthResponse;
export type AuthRegisterCreateApiArg = {
  signUpRequest: SignUpRequestWrite;
};
export type AuthRegisterConfirmCreateApiResponse = /** status 200  */ JwtAuthResponse;
export type AuthRegisterConfirmCreateApiArg = {
  signUpConfirmRequest: SignUpConfirmRequest;
};
export type AuthSocialLoginsRetrieveApiResponse = /** status 200  */ SocialLinks;
export type AuthSocialLoginsRetrieveApiArg = void;
export type AuthSocialJwtPairCreateApiResponse = /** status 200  */ JwtPairRead;
export type AuthSocialJwtPairCreateApiArg = {
  oAuth2InputRequest: OAuth2InputRequest;
};
export type AuthVerifyCreateApiResponse = unknown;
export type AuthVerifyCreateApiArg = {
  tokenVerifyRequest: TokenVerifyRequestWrite;
};
export type FileCleanupCreateApiResponse = unknown;
export type FileCleanupCreateApiArg = {
  imageUploadRequest: ImageUploadRequest;
};
export type FileUploadCreateApiResponse = /** status 200  */ ImageUploadRead;
export type FileUploadCreateApiArg = {
  extension: string;
  body: Blob;
};
export type ImageUploadCreateApiResponse = /** status 200  */ ImageUploadRead;
export type ImageUploadCreateApiArg = {
  body: Blob;
};
export type LoyaltyCardsListApiResponse = /** status 200  */ PaginatedBaseLoyaltyCardListRead;
export type LoyaltyCardsListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  pageSize?: number;
};
export type LoyaltyCardsCreateApiResponse = /** status 201  */ LoyaltyCardRead;
export type LoyaltyCardsCreateApiArg = {
  loyaltyCardRequest: LoyaltyCardRequest;
};
export type LoyaltyCardsRetrieveApiResponse = /** status 200  */ LoyaltyCardRead;
export type LoyaltyCardsRetrieveApiArg = {
  id: number;
};
export type LoyaltyCardsUpdateApiResponse = /** status 200  */ LoyaltyCardRead;
export type LoyaltyCardsUpdateApiArg = {
  id: number;
  loyaltyCardRequest: LoyaltyCardRequest;
};
export type LoyaltyCardsPartialUpdateApiResponse = /** status 200  */ LoyaltyCardRead;
export type LoyaltyCardsPartialUpdateApiArg = {
  id: number;
  patchedLoyaltyCardRequest: PatchedLoyaltyCardRequest;
};
export type LoyaltyCardsDestroyApiResponse = unknown;
export type LoyaltyCardsDestroyApiArg = {
  id: number;
};
export type StoresListApiResponse = /** status 200  */ PaginatedBaseStoreListRead;
export type StoresListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  pageSize?: number;
};
export type StoresRetrieveApiResponse = /** status 200  */ StoreRead;
export type StoresRetrieveApiArg = {
  /** A unique integer value identifying this Store. */
  id: number;
};
export type JwtAuthResponse = {
  access: string;
  refresh: string;
};
export type CustomTokenObtainPairRequest = {};
export type CustomTokenObtainPairRequestWrite = {
  email: string;
  password: string;
};
export type ForgetPassword = {
  email: string;
};
export type ForgetPasswordRequest = {
  email: string;
};
export type ResetPassword = {
  new_password: string;
  confirmed_password: string;
  token: string;
};
export type ResetPasswordRequest = {
  new_password: string;
  confirmed_password: string;
  token: string;
};
export type ChangePasswordRequest = {
  new_password: string;
  confirmed_password: string;
  old_password: string;
};
export type ImageUpload = {
  name: string;
};
export type ImageUploadRead = {
  name: string;
  url: string;
};
export type User = {
  email: string;
  first_name: string;
  last_name: string;
  avatar?: ImageUpload | null;
  is_notifications_enabled?: boolean;
};
export type UserRead = {
  email: string;
  first_name: string;
  last_name: string;
  avatar?: ImageUploadRead | null;
  is_notifications_enabled?: boolean;
  has_password: boolean;
};
export type ImageUploadRequest = {
  name: string;
};
export type UserRequest = {
  email: string;
  first_name: string;
  last_name: string;
  avatar?: ImageUploadRequest | null;
  is_notifications_enabled?: boolean;
};
export type PatchedUserRequest = {
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: ImageUploadRequest | null;
  is_notifications_enabled?: boolean;
};
export type TokenRefresh = {};
export type TokenRefreshRead = {
  access: string;
};
export type TokenRefreshRequest = {};
export type TokenRefreshRequestWrite = {
  refresh: string;
};
export type SignUpRequest = {
  email: string;
  first_name: string;
  last_name: string;
};
export type SignUpRequestWrite = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};
export type SignUpConfirmRequest = {
  token: string;
};
export type SocialLinks = {
  linkedin_openidconnect?: string;
  google_oauth2?: string;
};
export type JwtPair = {};
export type JwtPairRead = {
  access: string;
  refresh: string;
};
export type OAuth2InputRequest = {
  provider?: string;
  code: string;
  redirect_uri?: string;
};
export type TokenVerifyRequest = {};
export type TokenVerifyRequestWrite = {
  token: string;
};
export type BaseLoyaltyCard = {
  title: string;
};
export type BaseLoyaltyCardRead = {
  id: number;
  title: string;
};
export type PaginatedBaseLoyaltyCardList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BaseLoyaltyCard[];
};
export type PaginatedBaseLoyaltyCardListRead = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BaseLoyaltyCardRead[];
};
export type FormatEnum = 'CODE_128' | 'CODABAR' | 'QR_CODE';
export type LoyaltyCard = {
  title: string;
  description?: string;
  code: string;
  balance?: string;
  format?: FormatEnum;
};
export type LoyaltyCardRead = {
  id: number;
  title: string;
  description?: string;
  code: string;
  balance?: string;
  format?: FormatEnum;
};
export type LoyaltyCardRequest = {
  title: string;
  description?: string;
  code: string;
  balance?: string;
  format?: FormatEnum;
};
export type PatchedLoyaltyCardRequest = {
  title?: string;
  description?: string;
  code?: string;
  balance?: string;
  format?: FormatEnum;
};
export type BaseStore = {
  title: string;
  logo?: string | null;
};
export type BaseStoreRead = {
  id: number;
  title: string;
  logo?: string | null;
};
export type PaginatedBaseStoreList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BaseStore[];
};
export type PaginatedBaseStoreListRead = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BaseStoreRead[];
};
export type Store = {
  title: string;
  logo?: string | null;
  description?: string;
};
export type StoreRead = {
  id: number;
  title: string;
  logo?: string | null;
  description?: string;
};
export const {
  useAuthCreateMutation,
  useAuthPasswordForgetCreateMutation,
  useAuthPasswordResetCreateMutation,
  useAuthPasswordUpdateCreateMutation,
  useAuthProfileRetrieveQuery,
  useAuthProfileUpdateMutation,
  useAuthProfilePartialUpdateMutation,
  useAuthRefreshCreateMutation,
  useAuthRegisterCreateMutation,
  useAuthRegisterConfirmCreateMutation,
  useAuthSocialLoginsRetrieveQuery,
  useAuthSocialJwtPairCreateMutation,
  useAuthVerifyCreateMutation,
  useFileCleanupCreateMutation,
  useFileUploadCreateMutation,
  useImageUploadCreateMutation,
  useLoyaltyCardsListQuery,
  useLoyaltyCardsCreateMutation,
  useLoyaltyCardsRetrieveQuery,
  useLoyaltyCardsUpdateMutation,
  useLoyaltyCardsPartialUpdateMutation,
  useLoyaltyCardsDestroyMutation,
  useStoresListQuery,
  useStoresRetrieveQuery,
} = injectedRtkApi;
