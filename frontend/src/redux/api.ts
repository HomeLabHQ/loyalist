import { baseApi as api } from './baseApi';
export const addTagTypes = ['auth', 'events', 'image-upload'] as const;
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
      authProfileRetrieve: build.query<AuthProfileRetrieveApiResponse, AuthProfileRetrieveApiArg>({
        query: () => ({ url: `/api/auth/profile/` }),
        providesTags: ['auth'],
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
      eventsList: build.query<EventsListApiResponse, EventsListApiArg>({
        query: (queryArg) => ({
          url: `/api/events/`,
          params: { page: queryArg.page, page_size: queryArg.pageSize },
        }),
        providesTags: ['events'],
      }),
      eventsCreate: build.mutation<EventsCreateApiResponse, EventsCreateApiArg>({
        query: (queryArg) => ({ url: `/api/events/`, method: 'POST', body: queryArg.eventRequest }),
        invalidatesTags: ['events'],
      }),
      eventsRetrieve: build.query<EventsRetrieveApiResponse, EventsRetrieveApiArg>({
        query: (queryArg) => ({ url: `/api/events/${queryArg.id}/` }),
        providesTags: ['events'],
      }),
      eventsUpdate: build.mutation<EventsUpdateApiResponse, EventsUpdateApiArg>({
        query: (queryArg) => ({
          url: `/api/events/${queryArg.id}/`,
          method: 'PUT',
          body: queryArg.eventRequest,
        }),
        invalidatesTags: ['events'],
      }),
      eventsPartialUpdate: build.mutation<
        EventsPartialUpdateApiResponse,
        EventsPartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/events/${queryArg.id}/`,
          method: 'PATCH',
          body: queryArg.patchedEventRequest,
        }),
        invalidatesTags: ['events'],
      }),
      eventsDestroy: build.mutation<EventsDestroyApiResponse, EventsDestroyApiArg>({
        query: (queryArg) => ({ url: `/api/events/${queryArg.id}/`, method: 'DELETE' }),
        invalidatesTags: ['events'],
      }),
      imageUploadCreate: build.mutation<ImageUploadCreateApiResponse, ImageUploadCreateApiArg>({
        query: (queryArg) => ({ url: `/api/image-upload/`, method: 'POST', body: queryArg.body }),
        invalidatesTags: ['image-upload'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as backendApi };
export type AuthCreateApiResponse = /** status 200  */ JwtAuthResponse;
export type AuthCreateApiArg = {
  customTokenObtainPairRequest: CustomTokenObtainPairRequestWrite;
};
export type AuthProfileRetrieveApiResponse = /** status 200  */ UserRead;
export type AuthProfileRetrieveApiArg = void;
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
export type EventsListApiResponse = /** status 200  */ PaginatedBaseEventListRead;
export type EventsListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  pageSize?: number;
};
export type EventsCreateApiResponse = /** status 201  */ EventRead;
export type EventsCreateApiArg = {
  eventRequest: EventRequest;
};
export type EventsRetrieveApiResponse = /** status 200  */ EventRead;
export type EventsRetrieveApiArg = {
  /** A unique integer value identifying this events. */
  id: number;
};
export type EventsUpdateApiResponse = /** status 200  */ EventRead;
export type EventsUpdateApiArg = {
  /** A unique integer value identifying this events. */
  id: number;
  eventRequest: EventRequest;
};
export type EventsPartialUpdateApiResponse = /** status 200  */ EventRead;
export type EventsPartialUpdateApiArg = {
  /** A unique integer value identifying this events. */
  id: number;
  patchedEventRequest: PatchedEventRequest;
};
export type EventsDestroyApiResponse = unknown;
export type EventsDestroyApiArg = {
  /** A unique integer value identifying this events. */
  id: number;
};
export type ImageUploadCreateApiResponse = /** status 200  */ ImageUploadRead;
export type ImageUploadCreateApiArg = {
  body: Blob;
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
};
export type ImageUploadRequest = {
  name: string;
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
export type BaseEvent = {
  title: string;
  color?: string;
  is_public?: boolean;
  date: string;
};
export type BaseUser = {
  email: string;
  first_name: string;
  last_name: string;
};
export type BaseEventRead = {
  id: number;
  title: string;
  color?: string;
  is_public?: boolean;
  date: string;
  author: BaseUser;
};
export type PaginatedBaseEventList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BaseEvent[];
};
export type PaginatedBaseEventListRead = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BaseEventRead[];
};
export type Event = {
  title: string;
  color?: string;
  is_public?: boolean;
  date: string;
  description?: string;
};
export type EventRead = {
  id: number;
  title: string;
  color?: string;
  is_public?: boolean;
  date: string;
  author: BaseUser;
  description?: string;
};
export type EventRequest = {
  title: string;
  color?: string;
  is_public?: boolean;
  date: string;
  description?: string;
};
export type PatchedEventRequest = {
  title?: string;
  color?: string;
  is_public?: boolean;
  date?: string;
  description?: string;
};
export const {
  useAuthCreateMutation,
  useAuthProfileRetrieveQuery,
  useAuthProfilePartialUpdateMutation,
  useAuthRefreshCreateMutation,
  useAuthRegisterCreateMutation,
  useAuthRegisterConfirmCreateMutation,
  useAuthSocialLoginsRetrieveQuery,
  useAuthSocialJwtPairCreateMutation,
  useAuthVerifyCreateMutation,
  useEventsListQuery,
  useEventsCreateMutation,
  useEventsRetrieveQuery,
  useEventsUpdateMutation,
  useEventsPartialUpdateMutation,
  useEventsDestroyMutation,
  useImageUploadCreateMutation,
} = injectedRtkApi;
