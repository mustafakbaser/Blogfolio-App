interface Window {
  gtag?: (...args: any[]) => void;
  adsbygoogle?: { pauseAdRequests: number }[];
  ['ga-disable-G-XXXXXXXXXX']?: boolean;
}