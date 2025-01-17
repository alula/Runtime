export const Regexes = {
  htmlScripts: /(?:<script\ssrc="\/assets\/([0-9a-f]{20}).js")/g,
  htmlStylesheets: /(?:href="\/assets\/([.0-9a-f]{22}).css")/g,
  htmlImages: /(?:url\(\/assets\/([a-f0-9]{32}\.(?:png|svg|jpe?g|woff))\))/g,
  wpLoaderModules: /({(?:[\de]+:"[0-9a-f]{20}",?\n?)+})(?:\[\w\]\+"\.js")/,
  resourceNames:
    /(?:\+"([a-f0-9]{32}\.(?:png|svg|jpe?g|ico|mp[34]|web[pm]|woff))")/g,
  buildInfo: /(Build Number: (\d{4,6}), Version Hash: [a-f0-9]{40})/,
};

// A variety of strings in the Webpack Vendor file that are currently unique to it.
export const WebpackVendorChecks = [
  "fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
  "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL'",
  "Failed to setup Krisp module",
];

// A variety of keys in the stylesheet mapping script...
export const MainStylesheetChecks = [
  'createAccountTemplateHeader:"',
  'paymentRow:"',
  'visible:"',
  'minWidthLarge:"',
  'uploadIcon:"',
  'channelNameContainer:"',
  'searchBar:"',
  'emptyStateSubtext:"',
];

export const AppMainChecks = [
  "Release Channel:",
  "Build Number:",
  "Version Hash:",
];

export const WebpackChunkChecks = [
  "this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]",
];
