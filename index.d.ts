declare module "react-native-matomo-sdk" {
  namespace MatomoSDK {
    export function initialize(apiUrl: string, siteId: number): Promise<void>;
    export function trackView(route: string[]): Promise<void>;
    export function trackEvent(
      category: string,
      action: string,
      name?: string,
      value?: number
    ): Promise<void>;

    export function setUserId(userId: string | null): Promise<void>;

    export function setCustomDimension(
      id: number,
      value: string | null
    ): Promise<void>;
  }

  export default MatomoSDK;
}
