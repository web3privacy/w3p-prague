import { r as require$$1, e as commonjsGlobal, s as sha3Exports, h as getAugmentedNamespace, l as base64Js, m as ieee754, E as EventEmitter } from "./_page-229a63fb.js";
import { p as payloadId$1, s as splitOnFirst, a as strictUriEncode, d as decodeUriComponent, c as cjs$3, I as IJsonRpcConnection, f as formatJsonRpcError, J as JsonRpcProvider, H as HttpConnection } from "./index-c1472ac1.js";
import { d as dijkstraExports } from "./dijkstra-cb1f074b.js";
var cjs$2 = {};
var cjs$1 = {};
Object.defineProperty(cjs$1, "__esModule", { value: true });
var getLocalStorage_1 = cjs$1.getLocalStorage = getLocalStorageOrThrow_1 = cjs$1.getLocalStorageOrThrow = getCrypto_1 = cjs$1.getCrypto = getCryptoOrThrow_1 = cjs$1.getCryptoOrThrow = getLocation_1 = cjs$1.getLocation = getLocationOrThrow_1 = cjs$1.getLocationOrThrow = getNavigator_1 = cjs$1.getNavigator = getNavigatorOrThrow_1 = cjs$1.getNavigatorOrThrow = getDocument_1 = cjs$1.getDocument = getDocumentOrThrow_1 = cjs$1.getDocumentOrThrow = getFromWindowOrThrow_1 = cjs$1.getFromWindowOrThrow = getFromWindow_1 = cjs$1.getFromWindow = void 0;
function getFromWindow$1(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
var getFromWindow_1 = cjs$1.getFromWindow = getFromWindow$1;
function getFromWindowOrThrow$1(name) {
  const res = getFromWindow$1(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
var getFromWindowOrThrow_1 = cjs$1.getFromWindowOrThrow = getFromWindowOrThrow$1;
function getDocumentOrThrow$1() {
  return getFromWindowOrThrow$1("document");
}
var getDocumentOrThrow_1 = cjs$1.getDocumentOrThrow = getDocumentOrThrow$1;
function getDocument$1() {
  return getFromWindow$1("document");
}
var getDocument_1 = cjs$1.getDocument = getDocument$1;
function getNavigatorOrThrow$1() {
  return getFromWindowOrThrow$1("navigator");
}
var getNavigatorOrThrow_1 = cjs$1.getNavigatorOrThrow = getNavigatorOrThrow$1;
function getNavigator$1() {
  return getFromWindow$1("navigator");
}
var getNavigator_1 = cjs$1.getNavigator = getNavigator$1;
function getLocationOrThrow$1() {
  return getFromWindowOrThrow$1("location");
}
var getLocationOrThrow_1 = cjs$1.getLocationOrThrow = getLocationOrThrow$1;
function getLocation$1() {
  return getFromWindow$1("location");
}
var getLocation_1 = cjs$1.getLocation = getLocation$1;
function getCryptoOrThrow$1() {
  return getFromWindowOrThrow$1("crypto");
}
var getCryptoOrThrow_1 = cjs$1.getCryptoOrThrow = getCryptoOrThrow$1;
function getCrypto$1() {
  return getFromWindow$1("crypto");
}
var getCrypto_1 = cjs$1.getCrypto = getCrypto$1;
function getLocalStorageOrThrow$1() {
  return getFromWindowOrThrow$1("localStorage");
}
var getLocalStorageOrThrow_1 = cjs$1.getLocalStorageOrThrow = getLocalStorageOrThrow$1;
function getLocalStorage$1() {
  return getFromWindow$1("localStorage");
}
getLocalStorage_1 = cjs$1.getLocalStorage = getLocalStorage$1;
Object.defineProperty(cjs$2, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$2.getWindowMetadata = void 0;
const window_getters_1 = cjs$1;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e2) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i2 = 0; i2 < links.length; i2++) {
      const link = links[i2];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i2 = 0; i2 < metaTags.length; i2++) {
      const tag = metaTags[i2];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
getWindowMetadata_1 = cjs$2.getWindowMetadata = getWindowMetadata;
var __spreadArrays = globalThis && globalThis.__spreadArrays || function() {
  for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
};
var BrowserInfo = (
  /** @class */
  function() {
    function BrowserInfo2(name, version2, os) {
      this.name = name;
      this.version = version2;
      this.os = os;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  function() {
    function NodeInfo2(version2) {
      this.version = version2;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  function() {
    function SearchBotDeviceInfo2(name, version2, os, bot) {
      this.name = name;
      this.version = version2;
      this.os = os;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FBAV\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser2 = _a[0], regex2 = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex2.exec(ua);
    return !!uaMatch && [browser2, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
    }
  } else {
    versionParts = [];
  }
  var version2 = versionParts.join(".");
  var os = detectOS$1(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version2, os, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version2, os);
}
function detectOS$1(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii], os = _a[0], regex2 = _a[1];
    var match = regex2.exec(ua);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode2 = typeof process !== "undefined" && process.version;
  return isNode2 ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}
function detectEnv(userAgent) {
  return detect(userAgent);
}
function detectOS() {
  const env = detectEnv();
  return env && env.os ? env.os : void 0;
}
function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}
function isNode$1() {
  const env = detectEnv();
  const result = env && env.name ? env.name.toLowerCase() === "node" : false;
  return result;
}
function isBrowser() {
  const result = !isNode$1() && !!getNavigator();
  return result;
}
const getFromWindow = getFromWindow_1;
const getFromWindowOrThrow = getFromWindowOrThrow_1;
const getDocumentOrThrow = getDocumentOrThrow_1;
const getDocument = getDocument_1;
const getNavigatorOrThrow = getNavigatorOrThrow_1;
const getNavigator = getNavigator_1;
const getLocationOrThrow = getLocationOrThrow_1;
const getLocation = getLocation_1;
const getCryptoOrThrow = getCryptoOrThrow_1;
const getCrypto = getCrypto_1;
const getLocalStorageOrThrow = getLocalStorageOrThrow_1;
const getLocalStorage = getLocalStorage_1;
function getClientMeta() {
  return getWindowMetadata_1();
}
function safeJsonParse$1(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify$1(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}
const safeJsonParse = safeJsonParse$1;
const safeJsonStringify = safeJsonStringify$1;
function setLocal(key, data) {
  const raw = safeJsonStringify(data);
  const local = getLocalStorage();
  if (local) {
    local.setItem(key, raw);
  }
}
function getLocal(key) {
  let data = null;
  let raw = null;
  const local = getLocalStorage();
  if (local) {
    raw = local.getItem(key);
  }
  data = raw ? safeJsonParse(raw) : raw;
  return data;
}
function removeLocal(key) {
  const local = getLocalStorage();
  if (local) {
    local.removeItem(key);
  }
}
const mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
function formatIOSMobile(uri, entry) {
  const encodedUri = encodeURIComponent(uri);
  return entry.universalLink ? `${entry.universalLink}/wc?uri=${encodedUri}` : entry.deepLink ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}` : "";
}
function saveMobileLinkInfo(data) {
  const focusUri = data.href.split("?")[0];
  setLocal(mobileLinkChoiceKey, Object.assign(Object.assign({}, data), { href: focusUri }));
}
function getMobileRegistryEntry(registry, name) {
  return registry.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
function getMobileLinkRegistry(registry, whitelist) {
  let links = registry;
  if (whitelist) {
    links = whitelist.map((name) => getMobileRegistryEntry(registry, name)).filter(Boolean);
  }
  return links;
}
const API_URL = "https://registry.walletconnect.com";
function getWalletRegistryUrl() {
  return API_URL + "/api/v2/wallets";
}
function getDappRegistryUrl() {
  return API_URL + "/api/v2/dapps";
}
function formatMobileRegistryEntry(entry, platform = "mobile") {
  var _a;
  return {
    name: entry.name || "",
    shortName: entry.metadata.shortName || "",
    color: entry.metadata.colors.primary || "",
    logo: (_a = entry.image_url.sm) !== null && _a !== void 0 ? _a : "",
    universalLink: entry[platform].universal || "",
    deepLink: entry[platform].native || ""
  };
}
function formatMobileRegistry(registry, platform = "mobile") {
  return Object.values(registry).filter((entry) => !!entry[platform].universal || !!entry[platform].native).map((entry) => formatMobileRegistryEntry(entry, platform));
}
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  detectEnv,
  detectOS,
  formatIOSMobile,
  formatMobileRegistry,
  formatMobileRegistryEntry,
  getClientMeta,
  getCrypto,
  getCryptoOrThrow,
  getDappRegistryUrl,
  getDocument,
  getDocumentOrThrow,
  getFromWindow,
  getFromWindowOrThrow,
  getLocal,
  getLocalStorage,
  getLocalStorageOrThrow,
  getLocation,
  getLocationOrThrow,
  getMobileLinkRegistry,
  getMobileRegistryEntry,
  getNavigator,
  getNavigatorOrThrow,
  getWalletRegistryUrl,
  isAndroid,
  isBrowser,
  isIOS,
  isMobile,
  isNode: isNode$1,
  mobileLinkChoiceKey,
  removeLocal,
  safeJsonParse,
  safeJsonStringify,
  saveMobileLinkInfo,
  setLocal
}, Symbol.toStringTag, { value: "Module" }));
const reservedEvents = [
  "session_request",
  "session_update",
  "exchange_key",
  "connect",
  "disconnect",
  "display_uri",
  "modal_closed",
  "transport_open",
  "transport_close",
  "transport_error"
];
const signingMethods = [
  "eth_sendTransaction",
  "eth_signTransaction",
  "eth_sign",
  "eth_signTypedData",
  "eth_signTypedData_v1",
  "eth_signTypedData_v2",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
];
const infuraNetworks = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan"
};
var bnExports = {};
var bn = {
  get exports() {
    return bnExports;
  },
  set exports(v2) {
    bnExports = v2;
  }
};
(function(module) {
  (function(module2, exports) {
    function assert(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN2(number, base, endian) {
      if (BN2.isBN(number)) {
        return number;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number !== null) {
        if (base === "le" || base === "be") {
          endian = base;
          base = 10;
        }
        this._init(number || 0, base || 10, endian || "be");
      }
    }
    if (typeof module2 === "object") {
      module2.exports = BN2;
    } else {
      exports.BN = BN2;
    }
    BN2.BN = BN2;
    BN2.wordSize = 26;
    var Buffer2;
    try {
      Buffer2 = require$$1.Buffer;
    } catch (e2) {
    }
    BN2.isBN = function isBN(num) {
      if (num instanceof BN2) {
        return true;
      }
      return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
    };
    BN2.max = function max(left, right) {
      if (left.cmp(right) > 0)
        return left;
      return right;
    };
    BN2.min = function min(left, right) {
      if (left.cmp(right) < 0)
        return left;
      return right;
    };
    BN2.prototype._init = function init(number, base, endian) {
      if (typeof number === "number") {
        return this._initNumber(number, base, endian);
      }
      if (typeof number === "object") {
        return this._initArray(number, base, endian);
      }
      if (base === "hex") {
        base = 16;
      }
      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, "");
      var start = 0;
      if (number[0] === "-") {
        start++;
      }
      if (base === 16) {
        this._parseHex(number, start);
      } else {
        this._parseBase(number, base, start);
      }
      if (number[0] === "-") {
        this.negative = 1;
      }
      this.strip();
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base, endian);
    };
    BN2.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }
      if (number < 67108864) {
        this.words = [number & 67108863];
        this.length = 1;
      } else if (number < 4503599627370496) {
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863
        ];
        this.length = 2;
      } else {
        assert(number < 9007199254740992);
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863,
          1
        ];
        this.length = 3;
      }
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base, endian);
    };
    BN2.prototype._initArray = function _initArray(number, base, endian) {
      assert(typeof number.length === "number");
      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);
      for (var i2 = 0; i2 < this.length; i2++) {
        this.words[i2] = 0;
      }
      var j2, w2;
      var off = 0;
      if (endian === "be") {
        for (i2 = number.length - 1, j2 = 0; i2 >= 0; i2 -= 3) {
          w2 = number[i2] | number[i2 - 1] << 8 | number[i2 - 2] << 16;
          this.words[j2] |= w2 << off & 67108863;
          this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j2++;
          }
        }
      } else if (endian === "le") {
        for (i2 = 0, j2 = 0; i2 < number.length; i2 += 3) {
          w2 = number[i2] | number[i2 + 1] << 8 | number[i2 + 2] << 16;
          this.words[j2] |= w2 << off & 67108863;
          this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j2++;
          }
        }
      }
      return this.strip();
    };
    function parseHex(str, start, end) {
      var r2 = 0;
      var len = Math.min(str.length, end);
      for (var i2 = start; i2 < len; i2++) {
        var c2 = str.charCodeAt(i2) - 48;
        r2 <<= 4;
        if (c2 >= 49 && c2 <= 54) {
          r2 |= c2 - 49 + 10;
        } else if (c2 >= 17 && c2 <= 22) {
          r2 |= c2 - 17 + 10;
        } else {
          r2 |= c2 & 15;
        }
      }
      return r2;
    }
    BN2.prototype._parseHex = function _parseHex(number, start) {
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);
      for (var i2 = 0; i2 < this.length; i2++) {
        this.words[i2] = 0;
      }
      var j2, w2;
      var off = 0;
      for (i2 = number.length - 6, j2 = 0; i2 >= start; i2 -= 6) {
        w2 = parseHex(number, i2, i2 + 6);
        this.words[j2] |= w2 << off & 67108863;
        this.words[j2 + 1] |= w2 >>> 26 - off & 4194303;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j2++;
        }
      }
      if (i2 + 6 !== start) {
        w2 = parseHex(number, start, i2 + 6);
        this.words[j2] |= w2 << off & 67108863;
        this.words[j2 + 1] |= w2 >>> 26 - off & 4194303;
      }
      this.strip();
    };
    function parseBase(str, start, end, mul2) {
      var r2 = 0;
      var len = Math.min(str.length, end);
      for (var i2 = start; i2 < len; i2++) {
        var c2 = str.charCodeAt(i2) - 48;
        r2 *= mul2;
        if (c2 >= 49) {
          r2 += c2 - 49 + 10;
        } else if (c2 >= 17) {
          r2 += c2 - 17 + 10;
        } else {
          r2 += c2;
        }
      }
      return r2;
    }
    BN2.prototype._parseBase = function _parseBase(number, base, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
        limbLen++;
      }
      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;
      for (var i2 = start; i2 < end; i2 += limbLen) {
        word = parseBase(number, i2, i2 + limbLen, base);
        this.imuln(limbPow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i2, number.length, base);
        for (i2 = 0; i2 < mod; i2++) {
          pow *= base;
        }
        this.imuln(pow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
    };
    BN2.prototype.copy = function copy3(dest) {
      dest.words = new Array(this.length);
      for (var i2 = 0; i2 < this.length; i2++) {
        dest.words[i2] = this.words[i2];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    BN2.prototype.clone = function clone() {
      var r2 = new BN2(null);
      this.copy(r2);
      return r2;
    };
    BN2.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN2.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN2.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    BN2.prototype.inspect = function inspect() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var zeros = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ];
    var groupSizes = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
    var groupBases = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    BN2.prototype.toString = function toString2(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;
      if (base === 16 || base === "hex") {
        out = "";
        var off = 0;
        var carry = 0;
        for (var i2 = 0; i2 < this.length; i2++) {
          var w2 = this.words[i2];
          var word = ((w2 << off | carry) & 16777215).toString(16);
          carry = w2 >>> 24 - off & 16777215;
          if (carry !== 0 || i2 !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
          off += 2;
          if (off >= 26) {
            off -= 26;
            i2--;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      if (base === (base | 0) && base >= 2 && base <= 36) {
        var groupSize = groupSizes[base];
        var groupBase = groupBases[base];
        out = "";
        var c2 = this.clone();
        c2.negative = 0;
        while (!c2.isZero()) {
          var r2 = c2.modn(groupBase).toString(base);
          c2 = c2.idivn(groupBase);
          if (!c2.isZero()) {
            out = zeros[groupSize - r2.length] + r2 + out;
          } else {
            out = r2 + out;
          }
        }
        if (this.isZero()) {
          out = "0" + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      assert(false, "Base should be between 2 and 36");
    };
    BN2.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 67108864;
      } else if (this.length === 3 && this.words[2] === 1) {
        ret += 4503599627370496 + this.words[1] * 67108864;
      } else if (this.length > 2) {
        assert(false, "Number can only safely store up to 53 bits");
      }
      return this.negative !== 0 ? -ret : ret;
    };
    BN2.prototype.toJSON = function toJSON() {
      return this.toString(16);
    };
    BN2.prototype.toBuffer = function toBuffer(endian, length) {
      assert(typeof Buffer2 !== "undefined");
      return this.toArrayLike(Buffer2, endian, length);
    };
    BN2.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };
    BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength2 = this.byteLength();
      var reqLength = length || Math.max(1, byteLength2);
      assert(byteLength2 <= reqLength, "byte array longer than desired length");
      assert(reqLength > 0, "Requested array length <= 0");
      this.strip();
      var littleEndian = endian === "le";
      var res = new ArrayType(reqLength);
      var b2, i2;
      var q2 = this.clone();
      if (!littleEndian) {
        for (i2 = 0; i2 < reqLength - byteLength2; i2++) {
          res[i2] = 0;
        }
        for (i2 = 0; !q2.isZero(); i2++) {
          b2 = q2.andln(255);
          q2.iushrn(8);
          res[reqLength - i2 - 1] = b2;
        }
      } else {
        for (i2 = 0; !q2.isZero(); i2++) {
          b2 = q2.andln(255);
          q2.iushrn(8);
          res[i2] = b2;
        }
        for (; i2 < reqLength; i2++) {
          res[i2] = 0;
        }
      }
      return res;
    };
    if (Math.clz32) {
      BN2.prototype._countBits = function _countBits(w2) {
        return 32 - Math.clz32(w2);
      };
    } else {
      BN2.prototype._countBits = function _countBits(w2) {
        var t2 = w2;
        var r2 = 0;
        if (t2 >= 4096) {
          r2 += 13;
          t2 >>>= 13;
        }
        if (t2 >= 64) {
          r2 += 7;
          t2 >>>= 7;
        }
        if (t2 >= 8) {
          r2 += 4;
          t2 >>>= 4;
        }
        if (t2 >= 2) {
          r2 += 2;
          t2 >>>= 2;
        }
        return r2 + t2;
      };
    }
    BN2.prototype._zeroBits = function _zeroBits(w2) {
      if (w2 === 0)
        return 26;
      var t2 = w2;
      var r2 = 0;
      if ((t2 & 8191) === 0) {
        r2 += 13;
        t2 >>>= 13;
      }
      if ((t2 & 127) === 0) {
        r2 += 7;
        t2 >>>= 7;
      }
      if ((t2 & 15) === 0) {
        r2 += 4;
        t2 >>>= 4;
      }
      if ((t2 & 3) === 0) {
        r2 += 2;
        t2 >>>= 2;
      }
      if ((t2 & 1) === 0) {
        r2++;
      }
      return r2;
    };
    BN2.prototype.bitLength = function bitLength() {
      var w2 = this.words[this.length - 1];
      var hi = this._countBits(w2);
      return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
      var w2 = new Array(num.bitLength());
      for (var bit = 0; bit < w2.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w2[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }
      return w2;
    }
    BN2.prototype.zeroBits = function zeroBits() {
      if (this.isZero())
        return 0;
      var r2 = 0;
      for (var i2 = 0; i2 < this.length; i2++) {
        var b2 = this._zeroBits(this.words[i2]);
        r2 += b2;
        if (b2 !== 26)
          break;
      }
      return r2;
    };
    BN2.prototype.byteLength = function byteLength2() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN2.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN2.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN2.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN2.prototype.neg = function neg() {
      return this.clone().ineg();
    };
    BN2.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN2.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i2 = 0; i2 < num.length; i2++) {
        this.words[i2] = this.words[i2] | num.words[i2];
      }
      return this.strip();
    };
    BN2.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN2.prototype.or = function or(num) {
      if (this.length > num.length)
        return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN2.prototype.uor = function uor(num) {
      if (this.length > num.length)
        return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN2.prototype.iuand = function iuand(num) {
      var b2;
      if (this.length > num.length) {
        b2 = num;
      } else {
        b2 = this;
      }
      for (var i2 = 0; i2 < b2.length; i2++) {
        this.words[i2] = this.words[i2] & num.words[i2];
      }
      this.length = b2.length;
      return this.strip();
    };
    BN2.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN2.prototype.and = function and(num) {
      if (this.length > num.length)
        return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN2.prototype.uand = function uand(num) {
      if (this.length > num.length)
        return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN2.prototype.iuxor = function iuxor(num) {
      var a2;
      var b2;
      if (this.length > num.length) {
        a2 = this;
        b2 = num;
      } else {
        a2 = num;
        b2 = this;
      }
      for (var i2 = 0; i2 < b2.length; i2++) {
        this.words[i2] = a2.words[i2] ^ b2.words[i2];
      }
      if (this !== a2) {
        for (; i2 < a2.length; i2++) {
          this.words[i2] = a2.words[i2];
        }
      }
      this.length = a2.length;
      return this.strip();
    };
    BN2.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN2.prototype.xor = function xor(num) {
      if (this.length > num.length)
        return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN2.prototype.uxor = function uxor(num) {
      if (this.length > num.length)
        return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN2.prototype.inotn = function inotn(width) {
      assert(typeof width === "number" && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i2 = 0; i2 < bytesNeeded; i2++) {
        this.words[i2] = ~this.words[i2] & 67108863;
      }
      if (bitsLeft > 0) {
        this.words[i2] = ~this.words[i2] & 67108863 >> 26 - bitsLeft;
      }
      return this.strip();
    };
    BN2.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN2.prototype.setn = function setn(bit, val) {
      assert(typeof bit === "number" && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this.strip();
    };
    BN2.prototype.iadd = function iadd(num) {
      var r2;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r2 = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r2 = this.isub(num);
        num.negative = 1;
        return r2._normSign();
      }
      var a2, b2;
      if (this.length > num.length) {
        a2 = this;
        b2 = num;
      } else {
        a2 = num;
        b2 = this;
      }
      var carry = 0;
      for (var i2 = 0; i2 < b2.length; i2++) {
        r2 = (a2.words[i2] | 0) + (b2.words[i2] | 0) + carry;
        this.words[i2] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      for (; carry !== 0 && i2 < a2.length; i2++) {
        r2 = (a2.words[i2] | 0) + carry;
        this.words[i2] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      this.length = a2.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a2 !== this) {
        for (; i2 < a2.length; i2++) {
          this.words[i2] = a2.words[i2];
        }
      }
      return this;
    };
    BN2.prototype.add = function add(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length)
        return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN2.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r2 = this.iadd(num);
        num.negative = 1;
        return r2._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a2, b2;
      if (cmp > 0) {
        a2 = this;
        b2 = num;
      } else {
        a2 = num;
        b2 = this;
      }
      var carry = 0;
      for (var i2 = 0; i2 < b2.length; i2++) {
        r2 = (a2.words[i2] | 0) - (b2.words[i2] | 0) + carry;
        carry = r2 >> 26;
        this.words[i2] = r2 & 67108863;
      }
      for (; carry !== 0 && i2 < a2.length; i2++) {
        r2 = (a2.words[i2] | 0) + carry;
        carry = r2 >> 26;
        this.words[i2] = r2 & 67108863;
      }
      if (carry === 0 && i2 < a2.length && a2 !== this) {
        for (; i2 < a2.length; i2++) {
          this.words[i2] = a2.words[i2];
        }
      }
      this.length = Math.max(this.length, i2);
      if (a2 !== this) {
        this.negative = 1;
      }
      return this.strip();
    };
    BN2.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = self.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0;
      var a2 = self.words[0] | 0;
      var b2 = num.words[0] | 0;
      var r2 = a2 * b2;
      var lo = r2 & 67108863;
      var carry = r2 / 67108864 | 0;
      out.words[0] = lo;
      for (var k2 = 1; k2 < len; k2++) {
        var ncarry = carry >>> 26;
        var rword = carry & 67108863;
        var maxJ = Math.min(k2, num.length - 1);
        for (var j2 = Math.max(0, k2 - self.length + 1); j2 <= maxJ; j2++) {
          var i2 = k2 - j2 | 0;
          a2 = self.words[i2] | 0;
          b2 = num.words[j2] | 0;
          r2 = a2 * b2 + rword;
          ncarry += r2 / 67108864 | 0;
          rword = r2 & 67108863;
        }
        out.words[k2] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k2] = carry | 0;
      } else {
        out.length--;
      }
      return out.strip();
    }
    var comb10MulTo = function comb10MulTo2(self, num, out) {
      var a2 = self.words;
      var b2 = num.words;
      var o2 = out.words;
      var c2 = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a2[0] | 0;
      var al0 = a0 & 8191;
      var ah0 = a0 >>> 13;
      var a1 = a2[1] | 0;
      var al1 = a1 & 8191;
      var ah1 = a1 >>> 13;
      var a22 = a2[2] | 0;
      var al2 = a22 & 8191;
      var ah2 = a22 >>> 13;
      var a3 = a2[3] | 0;
      var al3 = a3 & 8191;
      var ah3 = a3 >>> 13;
      var a4 = a2[4] | 0;
      var al4 = a4 & 8191;
      var ah4 = a4 >>> 13;
      var a5 = a2[5] | 0;
      var al5 = a5 & 8191;
      var ah5 = a5 >>> 13;
      var a6 = a2[6] | 0;
      var al6 = a6 & 8191;
      var ah6 = a6 >>> 13;
      var a7 = a2[7] | 0;
      var al7 = a7 & 8191;
      var ah7 = a7 >>> 13;
      var a8 = a2[8] | 0;
      var al8 = a8 & 8191;
      var ah8 = a8 >>> 13;
      var a9 = a2[9] | 0;
      var al9 = a9 & 8191;
      var ah9 = a9 >>> 13;
      var b0 = b2[0] | 0;
      var bl0 = b0 & 8191;
      var bh0 = b0 >>> 13;
      var b1 = b2[1] | 0;
      var bl1 = b1 & 8191;
      var bh1 = b1 >>> 13;
      var b22 = b2[2] | 0;
      var bl2 = b22 & 8191;
      var bh2 = b22 >>> 13;
      var b3 = b2[3] | 0;
      var bl3 = b3 & 8191;
      var bh3 = b3 >>> 13;
      var b4 = b2[4] | 0;
      var bl4 = b4 & 8191;
      var bh4 = b4 >>> 13;
      var b5 = b2[5] | 0;
      var bl5 = b5 & 8191;
      var bh5 = b5 >>> 13;
      var b6 = b2[6] | 0;
      var bl6 = b6 & 8191;
      var bh6 = b6 >>> 13;
      var b7 = b2[7] | 0;
      var bl7 = b7 & 8191;
      var bh7 = b7 >>> 13;
      var b8 = b2[8] | 0;
      var bl8 = b8 & 8191;
      var bh8 = b8 >>> 13;
      var b9 = b2[9] | 0;
      var bl9 = b9 & 8191;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 67108863;
      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 67108863;
      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 67108863;
      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 67108863;
      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 67108863;
      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 67108863;
      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 67108863;
      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 67108863;
      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 67108863;
      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 67108863;
      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 67108863;
      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 67108863;
      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 67108863;
      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 67108863;
      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 67108863;
      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 67108863;
      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 67108863;
      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 67108863;
      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
      c2 = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 67108863;
      o2[0] = w0;
      o2[1] = w1;
      o2[2] = w2;
      o2[3] = w3;
      o2[4] = w4;
      o2[5] = w5;
      o2[6] = w6;
      o2[7] = w7;
      o2[8] = w8;
      o2[9] = w9;
      o2[10] = w10;
      o2[11] = w11;
      o2[12] = w12;
      o2[13] = w13;
      o2[14] = w14;
      o2[15] = w15;
      o2[16] = w16;
      o2[17] = w17;
      o2[18] = w18;
      if (c2 !== 0) {
        o2[19] = c2;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k2 = 0; k2 < out.length - 1; k2++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 67108863;
        var maxJ = Math.min(k2, num.length - 1);
        for (var j2 = Math.max(0, k2 - self.length + 1); j2 <= maxJ; j2++) {
          var i2 = k2 - j2;
          var a2 = self.words[i2] | 0;
          var b2 = num.words[j2] | 0;
          var r2 = a2 * b2;
          var lo = r2 & 67108863;
          ncarry = ncarry + (r2 / 67108864 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 67108863;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 67108863;
        }
        out.words[k2] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k2] = carry;
      } else {
        out.length--;
      }
      return out.strip();
    }
    function jumboMulTo(self, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self, num, out);
    }
    BN2.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    function FFTM(x2, y2) {
      this.x = x2;
      this.y = y2;
    }
    FFTM.prototype.makeRBT = function makeRBT(N2) {
      var t2 = new Array(N2);
      var l2 = BN2.prototype._countBits(N2) - 1;
      for (var i2 = 0; i2 < N2; i2++) {
        t2[i2] = this.revBin(i2, l2, N2);
      }
      return t2;
    };
    FFTM.prototype.revBin = function revBin(x2, l2, N2) {
      if (x2 === 0 || x2 === N2 - 1)
        return x2;
      var rb = 0;
      for (var i2 = 0; i2 < l2; i2++) {
        rb |= (x2 & 1) << l2 - i2 - 1;
        x2 >>= 1;
      }
      return rb;
    };
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N2) {
      for (var i2 = 0; i2 < N2; i2++) {
        rtws[i2] = rws[rbt[i2]];
        itws[i2] = iws[rbt[i2]];
      }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N2, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N2);
      for (var s2 = 1; s2 < N2; s2 <<= 1) {
        var l2 = s2 << 1;
        var rtwdf = Math.cos(2 * Math.PI / l2);
        var itwdf = Math.sin(2 * Math.PI / l2);
        for (var p2 = 0; p2 < N2; p2 += l2) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;
          for (var j2 = 0; j2 < s2; j2++) {
            var re = rtws[p2 + j2];
            var ie = itws[p2 + j2];
            var ro = rtws[p2 + j2 + s2];
            var io = itws[p2 + j2 + s2];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p2 + j2] = re + ro;
            itws[p2 + j2] = ie + io;
            rtws[p2 + j2 + s2] = re - ro;
            itws[p2 + j2 + s2] = ie - io;
            if (j2 !== l2) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n2, m2) {
      var N2 = Math.max(m2, n2) | 1;
      var odd = N2 & 1;
      var i2 = 0;
      for (N2 = N2 / 2 | 0; N2; N2 = N2 >>> 1) {
        i2++;
      }
      return 1 << i2 + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N2) {
      if (N2 <= 1)
        return;
      for (var i2 = 0; i2 < N2 / 2; i2++) {
        var t2 = rws[i2];
        rws[i2] = rws[N2 - i2 - 1];
        rws[N2 - i2 - 1] = t2;
        t2 = iws[i2];
        iws[i2] = -iws[N2 - i2 - 1];
        iws[N2 - i2 - 1] = -t2;
      }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N2) {
      var carry = 0;
      for (var i2 = 0; i2 < N2 / 2; i2++) {
        var w2 = Math.round(ws[2 * i2 + 1] / N2) * 8192 + Math.round(ws[2 * i2] / N2) + carry;
        ws[i2] = w2 & 67108863;
        if (w2 < 67108864) {
          carry = 0;
        } else {
          carry = w2 / 67108864 | 0;
        }
      }
      return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N2) {
      var carry = 0;
      for (var i2 = 0; i2 < len; i2++) {
        carry = carry + (ws[i2] | 0);
        rws[2 * i2] = carry & 8191;
        carry = carry >>> 13;
        rws[2 * i2 + 1] = carry & 8191;
        carry = carry >>> 13;
      }
      for (i2 = 2 * len; i2 < N2; ++i2) {
        rws[i2] = 0;
      }
      assert(carry === 0);
      assert((carry & ~8191) === 0);
    };
    FFTM.prototype.stub = function stub(N2) {
      var ph = new Array(N2);
      for (var i2 = 0; i2 < N2; i2++) {
        ph[i2] = 0;
      }
      return ph;
    };
    FFTM.prototype.mulp = function mulp(x2, y2, out) {
      var N2 = 2 * this.guessLen13b(x2.length, y2.length);
      var rbt = this.makeRBT(N2);
      var _2 = this.stub(N2);
      var rws = new Array(N2);
      var rwst = new Array(N2);
      var iwst = new Array(N2);
      var nrws = new Array(N2);
      var nrwst = new Array(N2);
      var niwst = new Array(N2);
      var rmws = out.words;
      rmws.length = N2;
      this.convert13b(x2.words, x2.length, rws, N2);
      this.convert13b(y2.words, y2.length, nrws, N2);
      this.transform(rws, _2, rwst, iwst, N2, rbt);
      this.transform(nrws, _2, nrwst, niwst, N2, rbt);
      for (var i2 = 0; i2 < N2; i2++) {
        var rx = rwst[i2] * nrwst[i2] - iwst[i2] * niwst[i2];
        iwst[i2] = rwst[i2] * niwst[i2] + iwst[i2] * nrwst[i2];
        rwst[i2] = rx;
      }
      this.conjugate(rwst, iwst, N2);
      this.transform(rwst, iwst, rmws, _2, N2, rbt);
      this.conjugate(rmws, _2, N2);
      this.normalize13b(rmws, N2);
      out.negative = x2.negative ^ y2.negative;
      out.length = x2.length + y2.length;
      return out.strip();
    };
    BN2.prototype.mul = function mul2(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN2.prototype.mulf = function mulf(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN2.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN2.prototype.imuln = function imuln(num) {
      assert(typeof num === "number");
      assert(num < 67108864);
      var carry = 0;
      for (var i2 = 0; i2 < this.length; i2++) {
        var w2 = (this.words[i2] | 0) * num;
        var lo = (w2 & 67108863) + (carry & 67108863);
        carry >>= 26;
        carry += w2 / 67108864 | 0;
        carry += lo >>> 26;
        this.words[i2] = lo & 67108863;
      }
      if (carry !== 0) {
        this.words[i2] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN2.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN2.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN2.prototype.pow = function pow(num) {
      var w2 = toBitArray(num);
      if (w2.length === 0)
        return new BN2(1);
      var res = this;
      for (var i2 = 0; i2 < w2.length; i2++, res = res.sqr()) {
        if (w2[i2] !== 0)
          break;
      }
      if (++i2 < w2.length) {
        for (var q2 = res.sqr(); i2 < w2.length; i2++, q2 = q2.sqr()) {
          if (w2[i2] === 0)
            continue;
          res = res.mul(q2);
        }
      }
      return res;
    };
    BN2.prototype.iushln = function iushln(bits) {
      assert(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
      var i2;
      if (r2 !== 0) {
        var carry = 0;
        for (i2 = 0; i2 < this.length; i2++) {
          var newCarry = this.words[i2] & carryMask;
          var c2 = (this.words[i2] | 0) - newCarry << r2;
          this.words[i2] = c2 | carry;
          carry = newCarry >>> 26 - r2;
        }
        if (carry) {
          this.words[i2] = carry;
          this.length++;
        }
      }
      if (s2 !== 0) {
        for (i2 = this.length - 1; i2 >= 0; i2--) {
          this.words[i2 + s2] = this.words[i2];
        }
        for (i2 = 0; i2 < s2; i2++) {
          this.words[i2] = 0;
        }
        this.length += s2;
      }
      return this.strip();
    };
    BN2.prototype.ishln = function ishln(bits) {
      assert(this.negative === 0);
      return this.iushln(bits);
    };
    BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === "number" && bits >= 0);
      var h2;
      if (hint) {
        h2 = (hint - hint % 26) / 26;
      } else {
        h2 = 0;
      }
      var r2 = bits % 26;
      var s2 = Math.min((bits - r2) / 26, this.length);
      var mask = 67108863 ^ 67108863 >>> r2 << r2;
      var maskedWords = extended;
      h2 -= s2;
      h2 = Math.max(0, h2);
      if (maskedWords) {
        for (var i2 = 0; i2 < s2; i2++) {
          maskedWords.words[i2] = this.words[i2];
        }
        maskedWords.length = s2;
      }
      if (s2 === 0)
        ;
      else if (this.length > s2) {
        this.length -= s2;
        for (i2 = 0; i2 < this.length; i2++) {
          this.words[i2] = this.words[i2 + s2];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i2 = this.length - 1; i2 >= 0 && (carry !== 0 || i2 >= h2); i2--) {
        var word = this.words[i2] | 0;
        this.words[i2] = carry << 26 - r2 | word >>> r2;
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    };
    BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN2.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN2.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN2.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN2.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN2.prototype.testn = function testn(bit) {
      assert(typeof bit === "number" && bit >= 0);
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q2 = 1 << r2;
      if (this.length <= s2)
        return false;
      var w2 = this.words[s2];
      return !!(w2 & q2);
    };
    BN2.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      assert(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= s2) {
        return this;
      }
      if (r2 !== 0) {
        s2++;
      }
      this.length = Math.min(s2, this.length);
      if (r2 !== 0) {
        var mask = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= mask;
      }
      return this.strip();
    };
    BN2.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN2.prototype.iaddn = function iaddn(num) {
      assert(typeof num === "number");
      assert(num < 67108864);
      if (num < 0)
        return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN2.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i2 = 0; i2 < this.length && this.words[i2] >= 67108864; i2++) {
        this.words[i2] -= 67108864;
        if (i2 === this.length - 1) {
          this.words[i2 + 1] = 1;
        } else {
          this.words[i2 + 1]++;
        }
      }
      this.length = Math.max(this.length, i2 + 1);
      return this;
    };
    BN2.prototype.isubn = function isubn(num) {
      assert(typeof num === "number");
      assert(num < 67108864);
      if (num < 0)
        return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i2 = 0; i2 < this.length && this.words[i2] < 0; i2++) {
          this.words[i2] += 67108864;
          this.words[i2 + 1] -= 1;
        }
      }
      return this.strip();
    };
    BN2.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN2.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN2.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN2.prototype.abs = function abs() {
      return this.clone().iabs();
    };
    BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul2, shift) {
      var len = num.length + shift;
      var i2;
      this._expand(len);
      var w2;
      var carry = 0;
      for (i2 = 0; i2 < num.length; i2++) {
        w2 = (this.words[i2 + shift] | 0) + carry;
        var right = (num.words[i2] | 0) * mul2;
        w2 -= right & 67108863;
        carry = (w2 >> 26) - (right / 67108864 | 0);
        this.words[i2 + shift] = w2 & 67108863;
      }
      for (; i2 < this.length - shift; i2++) {
        w2 = (this.words[i2 + shift] | 0) + carry;
        carry = w2 >> 26;
        this.words[i2 + shift] = w2 & 67108863;
      }
      if (carry === 0)
        return this.strip();
      assert(carry === -1);
      carry = 0;
      for (i2 = 0; i2 < this.length; i2++) {
        w2 = -(this.words[i2] | 0) + carry;
        carry = w2 >> 26;
        this.words[i2] = w2 & 67108863;
      }
      this.negative = 1;
      return this.strip();
    };
    BN2.prototype._wordDiv = function _wordDiv(num, mode2) {
      var shift = this.length - num.length;
      var a2 = this.clone();
      var b2 = num;
      var bhi = b2.words[b2.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b2 = b2.ushln(shift);
        a2.iushln(shift);
        bhi = b2.words[b2.length - 1] | 0;
      }
      var m2 = a2.length - b2.length;
      var q2;
      if (mode2 !== "mod") {
        q2 = new BN2(null);
        q2.length = m2 + 1;
        q2.words = new Array(q2.length);
        for (var i2 = 0; i2 < q2.length; i2++) {
          q2.words[i2] = 0;
        }
      }
      var diff = a2.clone()._ishlnsubmul(b2, 1, m2);
      if (diff.negative === 0) {
        a2 = diff;
        if (q2) {
          q2.words[m2] = 1;
        }
      }
      for (var j2 = m2 - 1; j2 >= 0; j2--) {
        var qj = (a2.words[b2.length + j2] | 0) * 67108864 + (a2.words[b2.length + j2 - 1] | 0);
        qj = Math.min(qj / bhi | 0, 67108863);
        a2._ishlnsubmul(b2, qj, j2);
        while (a2.negative !== 0) {
          qj--;
          a2.negative = 0;
          a2._ishlnsubmul(b2, 1, j2);
          if (!a2.isZero()) {
            a2.negative ^= 1;
          }
        }
        if (q2) {
          q2.words[j2] = qj;
        }
      }
      if (q2) {
        q2.strip();
      }
      a2.strip();
      if (mode2 !== "div" && shift !== 0) {
        a2.iushrn(shift);
      }
      return {
        div: q2 || null,
        mod: a2
      };
    };
    BN2.prototype.divmod = function divmod(num, mode2, positive) {
      assert(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN2(0),
          mod: new BN2(0)
        };
      }
      var div, mod, res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode2);
        if (mode2 !== "mod") {
          div = res.div.neg();
        }
        if (mode2 !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }
        return {
          div,
          mod
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode2);
        if (mode2 !== "mod") {
          div = res.div.neg();
        }
        return {
          div,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode2);
        if (mode2 !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }
        return {
          div: res.div,
          mod
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN2(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode2 === "div") {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode2 === "mod") {
          return {
            div: null,
            mod: new BN2(this.modn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN2(this.modn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode2);
    };
    BN2.prototype.div = function div(num) {
      return this.divmod(num, "div", false).div;
    };
    BN2.prototype.mod = function mod(num) {
      return this.divmod(num, "mod", false).mod;
    };
    BN2.prototype.umod = function umod(num) {
      return this.divmod(num, "mod", true).mod;
    };
    BN2.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero())
        return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0)
        return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN2.prototype.modn = function modn(num) {
      assert(num <= 67108863);
      var p2 = (1 << 26) % num;
      var acc = 0;
      for (var i2 = this.length - 1; i2 >= 0; i2--) {
        acc = (p2 * acc + (this.words[i2] | 0)) % num;
      }
      return acc;
    };
    BN2.prototype.idivn = function idivn(num) {
      assert(num <= 67108863);
      var carry = 0;
      for (var i2 = this.length - 1; i2 >= 0; i2--) {
        var w2 = (this.words[i2] | 0) + carry * 67108864;
        this.words[i2] = w2 / num | 0;
        carry = w2 % num;
      }
      return this.strip();
    };
    BN2.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN2.prototype.egcd = function egcd(p2) {
      assert(p2.negative === 0);
      assert(!p2.isZero());
      var x2 = this;
      var y2 = p2.clone();
      if (x2.negative !== 0) {
        x2 = x2.umod(p2);
      } else {
        x2 = x2.clone();
      }
      var A2 = new BN2(1);
      var B2 = new BN2(0);
      var C2 = new BN2(0);
      var D2 = new BN2(1);
      var g2 = 0;
      while (x2.isEven() && y2.isEven()) {
        x2.iushrn(1);
        y2.iushrn(1);
        ++g2;
      }
      var yp = y2.clone();
      var xp = x2.clone();
      while (!x2.isZero()) {
        for (var i2 = 0, im = 1; (x2.words[0] & im) === 0 && i2 < 26; ++i2, im <<= 1)
          ;
        if (i2 > 0) {
          x2.iushrn(i2);
          while (i2-- > 0) {
            if (A2.isOdd() || B2.isOdd()) {
              A2.iadd(yp);
              B2.isub(xp);
            }
            A2.iushrn(1);
            B2.iushrn(1);
          }
        }
        for (var j2 = 0, jm = 1; (y2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1)
          ;
        if (j2 > 0) {
          y2.iushrn(j2);
          while (j2-- > 0) {
            if (C2.isOdd() || D2.isOdd()) {
              C2.iadd(yp);
              D2.isub(xp);
            }
            C2.iushrn(1);
            D2.iushrn(1);
          }
        }
        if (x2.cmp(y2) >= 0) {
          x2.isub(y2);
          A2.isub(C2);
          B2.isub(D2);
        } else {
          y2.isub(x2);
          C2.isub(A2);
          D2.isub(B2);
        }
      }
      return {
        a: C2,
        b: D2,
        gcd: y2.iushln(g2)
      };
    };
    BN2.prototype._invmp = function _invmp(p2) {
      assert(p2.negative === 0);
      assert(!p2.isZero());
      var a2 = this;
      var b2 = p2.clone();
      if (a2.negative !== 0) {
        a2 = a2.umod(p2);
      } else {
        a2 = a2.clone();
      }
      var x1 = new BN2(1);
      var x2 = new BN2(0);
      var delta = b2.clone();
      while (a2.cmpn(1) > 0 && b2.cmpn(1) > 0) {
        for (var i2 = 0, im = 1; (a2.words[0] & im) === 0 && i2 < 26; ++i2, im <<= 1)
          ;
        if (i2 > 0) {
          a2.iushrn(i2);
          while (i2-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j2 = 0, jm = 1; (b2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1)
          ;
        if (j2 > 0) {
          b2.iushrn(j2);
          while (j2-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a2.cmp(b2) >= 0) {
          a2.isub(b2);
          x1.isub(x2);
        } else {
          b2.isub(a2);
          x2.isub(x1);
        }
      }
      var res;
      if (a2.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p2);
      }
      return res;
    };
    BN2.prototype.gcd = function gcd(num) {
      if (this.isZero())
        return num.abs();
      if (num.isZero())
        return this.abs();
      var a2 = this.clone();
      var b2 = num.clone();
      a2.negative = 0;
      b2.negative = 0;
      for (var shift = 0; a2.isEven() && b2.isEven(); shift++) {
        a2.iushrn(1);
        b2.iushrn(1);
      }
      do {
        while (a2.isEven()) {
          a2.iushrn(1);
        }
        while (b2.isEven()) {
          b2.iushrn(1);
        }
        var r2 = a2.cmp(b2);
        if (r2 < 0) {
          var t2 = a2;
          a2 = b2;
          b2 = t2;
        } else if (r2 === 0 || b2.cmpn(1) === 0) {
          break;
        }
        a2.isub(b2);
      } while (true);
      return b2.iushln(shift);
    };
    BN2.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN2.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN2.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    };
    BN2.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN2.prototype.bincn = function bincn(bit) {
      assert(typeof bit === "number");
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q2 = 1 << r2;
      if (this.length <= s2) {
        this._expand(s2 + 1);
        this.words[s2] |= q2;
        return this;
      }
      var carry = q2;
      for (var i2 = s2; carry !== 0 && i2 < this.length; i2++) {
        var w2 = this.words[i2] | 0;
        w2 += carry;
        carry = w2 >>> 26;
        w2 &= 67108863;
        this.words[i2] = w2;
      }
      if (carry !== 0) {
        this.words[i2] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN2.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative)
        return -1;
      if (this.negative === 0 && negative)
        return 1;
      this.strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert(num <= 67108863, "Number is too big");
        var w2 = this.words[0] | 0;
        res = w2 === num ? 0 : w2 < num ? -1 : 1;
      }
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0)
        return -1;
      if (this.negative === 0 && num.negative !== 0)
        return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length)
        return 1;
      if (this.length < num.length)
        return -1;
      var res = 0;
      for (var i2 = this.length - 1; i2 >= 0; i2--) {
        var a2 = this.words[i2] | 0;
        var b2 = num.words[i2] | 0;
        if (a2 === b2)
          continue;
        if (a2 < b2) {
          res = -1;
        } else if (a2 > b2) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN2.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN2.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };
    BN2.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN2.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN2.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN2.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };
    BN2.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN2.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN2.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN2.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    };
    BN2.red = function red(num) {
      return new Red(num);
    };
    BN2.prototype.toRed = function toRed(ctx) {
      assert(!this.red, "Already a number in reduction context");
      assert(this.negative === 0, "red works only with positives");
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN2.prototype.fromRed = function fromRed() {
      assert(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    };
    BN2.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN2.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, "Already a number in reduction context");
      return this._forceRed(ctx);
    };
    BN2.prototype.redAdd = function redAdd(num) {
      assert(this.red, "redAdd works only with red numbers");
      return this.red.add(this, num);
    };
    BN2.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, num);
    };
    BN2.prototype.redSub = function redSub(num) {
      assert(this.red, "redSub works only with red numbers");
      return this.red.sub(this, num);
    };
    BN2.prototype.redISub = function redISub(num) {
      assert(this.red, "redISub works only with red numbers");
      return this.red.isub(this, num);
    };
    BN2.prototype.redShl = function redShl(num) {
      assert(this.red, "redShl works only with red numbers");
      return this.red.shl(this, num);
    };
    BN2.prototype.redMul = function redMul(num) {
      assert(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN2.prototype.redIMul = function redIMul(num) {
      assert(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN2.prototype.redSqr = function redSqr() {
      assert(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN2.prototype.redISqr = function redISqr() {
      assert(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN2.prototype.redSqrt = function redSqrt() {
      assert(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN2.prototype.redInvm = function redInvm() {
      assert(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN2.prototype.redNeg = function redNeg() {
      assert(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN2.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name, p2) {
      this.name = name;
      this.p = new BN2(p2, 16);
      this.n = this.p.bitLength();
      this.k = new BN2(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN2(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r2 = num;
      var rlen;
      do {
        this.split(r2, this.tmp);
        r2 = this.imulK(r2);
        r2 = r2.iadd(this.tmp);
        rlen = r2.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
      if (cmp === 0) {
        r2.words[0] = 0;
        r2.length = 1;
      } else if (cmp > 0) {
        r2.isub(this.p);
      } else {
        r2.strip();
      }
      return r2;
    };
    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
      var mask = 4194303;
      var outLen = Math.min(input.length, 9);
      for (var i2 = 0; i2 < outLen; i2++) {
        output.words[i2] = input.words[i2];
      }
      output.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output.words[output.length++] = prev & mask;
      for (i2 = 10; i2 < input.length; i2++) {
        var next = input.words[i2] | 0;
        input.words[i2 - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }
      prev >>>= 22;
      input.words[i2 - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo = 0;
      for (var i2 = 0; i2 < num.length; i2++) {
        var w2 = num.words[i2] | 0;
        lo += w2 * 977;
        num.words[i2] = lo & 67108863;
        lo = w2 * 64 + (lo / 67108864 | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    inherits(P224, MPrime);
    function P192() {
      MPrime.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    inherits(P192, MPrime);
    function P25519() {
      MPrime.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i2 = 0; i2 < num.length; i2++) {
        var hi = (num.words[i2] | 0) * 19 + carry;
        var lo = hi & 67108863;
        hi >>>= 26;
        num.words[i2] = lo;
        carry = hi;
      }
      if (carry !== 0) {
        num.words[num.length++] = carry;
      }
      return num;
    };
    BN2._prime = function prime(name) {
      if (primes[name])
        return primes[name];
      var prime2;
      if (name === "k256") {
        prime2 = new K256();
      } else if (name === "p224") {
        prime2 = new P224();
      } else if (name === "p192") {
        prime2 = new P192();
      } else if (name === "p25519") {
        prime2 = new P25519();
      } else {
        throw new Error("Unknown prime " + name);
      }
      primes[name] = prime2;
      return prime2;
    };
    function Red(m2) {
      if (typeof m2 === "string") {
        var prime = BN2._prime(m2);
        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m2.gtn(1), "modulus must be greater than 1");
        this.m = m2;
        this.prime = null;
      }
    }
    Red.prototype._verify1 = function _verify1(a2) {
      assert(a2.negative === 0, "red works only with positives");
      assert(a2.red, "red works only with red numbers");
    };
    Red.prototype._verify2 = function _verify2(a2, b2) {
      assert((a2.negative | b2.negative) === 0, "red works only with positives");
      assert(
        a2.red && a2.red === b2.red,
        "red works only with red numbers"
      );
    };
    Red.prototype.imod = function imod(a2) {
      if (this.prime)
        return this.prime.ireduce(a2)._forceRed(this);
      return a2.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg(a2) {
      if (a2.isZero()) {
        return a2.clone();
      }
      return this.m.sub(a2)._forceRed(this);
    };
    Red.prototype.add = function add(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.add(b2);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.iadd(b2);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res;
    };
    Red.prototype.sub = function sub(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.sub(b2);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a2, b2) {
      this._verify2(a2, b2);
      var res = a2.isub(b2);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res;
    };
    Red.prototype.shl = function shl(a2, num) {
      this._verify1(a2);
      return this.imod(a2.ushln(num));
    };
    Red.prototype.imul = function imul(a2, b2) {
      this._verify2(a2, b2);
      return this.imod(a2.imul(b2));
    };
    Red.prototype.mul = function mul2(a2, b2) {
      this._verify2(a2, b2);
      return this.imod(a2.mul(b2));
    };
    Red.prototype.isqr = function isqr(a2) {
      return this.imul(a2, a2.clone());
    };
    Red.prototype.sqr = function sqr(a2) {
      return this.mul(a2, a2);
    };
    Red.prototype.sqrt = function sqrt(a2) {
      if (a2.isZero())
        return a2.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1);
      if (mod3 === 3) {
        var pow = this.m.add(new BN2(1)).iushrn(2);
        return this.pow(a2, pow);
      }
      var q2 = this.m.subn(1);
      var s2 = 0;
      while (!q2.isZero() && q2.andln(1) === 0) {
        s2++;
        q2.iushrn(1);
      }
      assert(!q2.isZero());
      var one = new BN2(1).toRed(this);
      var nOne = one.redNeg();
      var lpow = this.m.subn(1).iushrn(1);
      var z2 = this.m.bitLength();
      z2 = new BN2(2 * z2 * z2).toRed(this);
      while (this.pow(z2, lpow).cmp(nOne) !== 0) {
        z2.redIAdd(nOne);
      }
      var c2 = this.pow(z2, q2);
      var r2 = this.pow(a2, q2.addn(1).iushrn(1));
      var t2 = this.pow(a2, q2);
      var m2 = s2;
      while (t2.cmp(one) !== 0) {
        var tmp = t2;
        for (var i2 = 0; tmp.cmp(one) !== 0; i2++) {
          tmp = tmp.redSqr();
        }
        assert(i2 < m2);
        var b2 = this.pow(c2, new BN2(1).iushln(m2 - i2 - 1));
        r2 = r2.redMul(b2);
        c2 = b2.redSqr();
        t2 = t2.redMul(c2);
        m2 = i2;
      }
      return r2;
    };
    Red.prototype.invm = function invm(a2) {
      var inv = a2._invmp(this.m);
      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };
    Red.prototype.pow = function pow(a2, num) {
      if (num.isZero())
        return new BN2(1).toRed(this);
      if (num.cmpn(1) === 0)
        return a2.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN2(1).toRed(this);
      wnd[1] = a2;
      for (var i2 = 2; i2 < wnd.length; i2++) {
        wnd[i2] = this.mul(wnd[i2 - 1], a2);
      }
      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;
      if (start === 0) {
        start = 26;
      }
      for (i2 = num.length - 1; i2 >= 0; i2--) {
        var word = num.words[i2];
        for (var j2 = start - 1; j2 >= 0; j2--) {
          var bit = word >> j2 & 1;
          if (res !== wnd[0]) {
            res = this.sqr(res);
          }
          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }
          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i2 !== 0 || j2 !== 0))
            continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }
        start = 26;
      }
      return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
      var r2 = num.umod(this.m);
      return r2 === num ? r2.clone() : r2;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    };
    BN2.mont = function mont(num) {
      return new Mont(num);
    };
    function Mont(m2) {
      Red.call(this, m2);
      this.shift = this.m.bitLength();
      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }
      this.r = new BN2(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
      var r2 = this.imod(num.mul(this.rinv));
      r2.red = null;
      return r2;
    };
    Mont.prototype.imul = function imul(a2, b2) {
      if (a2.isZero() || b2.isZero()) {
        a2.words[0] = 0;
        a2.length = 1;
        return a2;
      }
      var t2 = a2.imul(b2);
      var c2 = t2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u2 = t2.isub(c2).iushrn(this.shift);
      var res = u2;
      if (u2.cmp(this.m) >= 0) {
        res = u2.isub(this.m);
      } else if (u2.cmpn(0) < 0) {
        res = u2.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.mul = function mul2(a2, b2) {
      if (a2.isZero() || b2.isZero())
        return new BN2(0)._forceRed(this);
      var t2 = a2.mul(b2);
      var c2 = t2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u2 = t2.isub(c2).iushrn(this.shift);
      var res = u2;
      if (u2.cmp(this.m) >= 0) {
        res = u2.isub(this.m);
      } else if (u2.cmpn(0) < 0) {
        res = u2.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a2) {
      var res = this.imod(a2._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn);
const BN = bnExports;
var isTypedarray = isTypedArray$1;
isTypedArray$1.strict = isStrictTypedArray;
isTypedArray$1.loose = isLooseTypedArray;
var toString$1 = Object.prototype.toString;
var names = {
  "[object Int8Array]": true,
  "[object Int16Array]": true,
  "[object Int32Array]": true,
  "[object Uint8Array]": true,
  "[object Uint8ClampedArray]": true,
  "[object Uint16Array]": true,
  "[object Uint32Array]": true,
  "[object Float32Array]": true,
  "[object Float64Array]": true
};
function isTypedArray$1(arr) {
  return isStrictTypedArray(arr) || isLooseTypedArray(arr);
}
function isStrictTypedArray(arr) {
  return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
}
function isLooseTypedArray(arr) {
  return names[toString$1.call(arr)];
}
var isTypedArray = isTypedarray.strict;
var typedarrayToBuffer = function typedarrayToBuffer2(arr) {
  if (isTypedArray(arr)) {
    var buf = Buffer.from(arr.buffer);
    if (arr.byteLength !== arr.buffer.byteLength) {
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    }
    return buf;
  } else {
    return Buffer.from(arr);
  }
};
const ENC_HEX = "hex";
const ENC_UTF8 = "utf8";
const STRING_ZERO = "0";
function bufferToArray(buf) {
  return new Uint8Array(buf);
}
function bufferToHex(buf, prefixed = false) {
  const hex = buf.toString(ENC_HEX);
  return prefixed ? addHexPrefix(hex) : hex;
}
function bufferToUtf8(buf) {
  return buf.toString(ENC_UTF8);
}
function arrayToBuffer(arr) {
  return typedarrayToBuffer(arr);
}
function arrayToHex(arr, prefixed = false) {
  return bufferToHex(arrayToBuffer(arr), prefixed);
}
function arrayToUtf8(arr) {
  return bufferToUtf8(arrayToBuffer(arr));
}
function hexToBuffer(hex) {
  return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
function hexToArray(hex) {
  return bufferToArray(hexToBuffer(hex));
}
function utf8ToBuffer(utf8) {
  return Buffer.from(utf8, ENC_UTF8);
}
function utf8ToArray(utf8) {
  return bufferToArray(utf8ToBuffer(utf8));
}
function utf8ToHex(utf8, prefixed = false) {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
function isHexString$1(str, length) {
  if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && str.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}
function concatArrays(...args) {
  let result = [];
  args.forEach((arg) => result = result.concat(Array.from(arg)));
  return new Uint8Array([...result]);
}
function calcByteLength(length, byteSize = 8) {
  const remainder = length % byteSize;
  return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
  return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
function padLeft(str, length, padding = STRING_ZERO) {
  return padString(str, length, true, padding);
}
function removeHexPrefix(hex) {
  return hex.replace(/^0x/, "");
}
function addHexPrefix(hex) {
  return hex.startsWith("0x") ? hex : `0x${hex}`;
}
function sanitizeHex$1(hex) {
  hex = removeHexPrefix(hex);
  hex = sanitizeBytes(hex, 2);
  if (hex) {
    hex = addHexPrefix(hex);
  }
  return hex;
}
function removeHexLeadingZeros$1(hex) {
  const prefixed = hex.startsWith("0x");
  hex = removeHexPrefix(hex);
  hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
  return prefixed ? addHexPrefix(hex) : hex;
}
function padString(str, length, left, padding = STRING_ZERO) {
  const diff = length - str.length;
  let result = str;
  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }
  return result;
}
function convertArrayBufferToBuffer(arrBuf) {
  return arrayToBuffer(new Uint8Array(arrBuf));
}
function convertArrayBufferToHex(arrBuf, noPrefix) {
  return arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
function convertBufferToArrayBuffer(buf) {
  return bufferToArray(buf).buffer;
}
function convertUtf8ToBuffer(utf8) {
  return utf8ToBuffer(utf8);
}
function convertUtf8ToHex(utf8, noPrefix) {
  return utf8ToHex(utf8, !noPrefix);
}
function convertHexToArrayBuffer(hex) {
  return hexToArray(hex).buffer;
}
function convertNumberToHex(num, noPrefix) {
  const hex = removeHexPrefix(sanitizeHex$1(new BN(num).toString(16)));
  return noPrefix ? hex : addHexPrefix(hex);
}
function sanitizeHex(hex) {
  return sanitizeHex$1(hex);
}
function removeHexLeadingZeros(hex) {
  return removeHexLeadingZeros$1(addHexPrefix(hex));
}
const payloadId = payloadId$1;
function uuid() {
  const result = ((a2, b2) => {
    for (b2 = a2 = ""; a2++ < 36; b2 += a2 * 51 & 52 ? (a2 ^ 15 ? 8 ^ Math.random() * (a2 ^ 20 ? 16 : 4) : 4).toString(16) : "-") {
    }
    return b2;
  })();
  return result;
}
function getInfuraRpcUrl(chainId, infuraId) {
  let rpcUrl;
  const network = infuraNetworks[chainId];
  if (network) {
    rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
  }
  return rpcUrl;
}
function getRpcUrl(chainId, rpc) {
  let rpcUrl;
  const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);
  if (rpc.custom && rpc.custom[chainId]) {
    rpcUrl = rpc.custom[chainId];
  } else if (infuraUrl) {
    rpcUrl = infuraUrl;
  }
  return rpcUrl;
}
function isEmptyString(value) {
  return value === "" || typeof value === "string" && value.trim() === "";
}
function isEmptyArray(array) {
  return !(array && array.length);
}
function isHexString(value, length) {
  return isHexString$1(value, length);
}
function isJsonRpcRequest(object) {
  return typeof object.method !== "undefined";
}
function isJsonRpcResponseSuccess(object) {
  return typeof object.result !== "undefined";
}
function isJsonRpcResponseError(object) {
  return typeof object.error !== "undefined";
}
function isInternalEvent(object) {
  return typeof object.event !== "undefined";
}
function isReservedEvent(event) {
  return reservedEvents.includes(event) || event.startsWith("wc_");
}
function isSilentPayload(request) {
  if (request.method.startsWith("wc_")) {
    return true;
  }
  if (signingMethods.includes(request.method)) {
    return false;
  }
  return true;
}
function toChecksumAddress(address) {
  address = removeHexPrefix(address.toLowerCase());
  const hash = removeHexPrefix(sha3Exports.keccak_256(convertUtf8ToBuffer(address)));
  let checksum = "";
  for (let i2 = 0; i2 < address.length; i2++) {
    if (parseInt(hash[i2], 16) > 7) {
      checksum += address[i2].toUpperCase();
    } else {
      checksum += address[i2];
    }
  }
  return addHexPrefix(checksum);
}
const isValidAddress = (address) => {
  if (!address) {
    return false;
  } else if (address.toLowerCase().substring(0, 2) !== "0x") {
    return false;
  } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return address === toChecksumAddress(address);
  }
};
function parsePersonalSign(params) {
  if (!isEmptyArray(params) && !isHexString(params[0])) {
    params[0] = convertUtf8ToHex(params[0]);
  }
  return params;
}
function parseTransactionData(txData) {
  if (typeof txData.type !== "undefined" && txData.type !== "0")
    return txData;
  if (typeof txData.from === "undefined" || !isValidAddress(txData.from)) {
    throw new Error(`Transaction object must include a valid 'from' value.`);
  }
  function parseHexValues(value) {
    let result = value;
    if (typeof value === "number" || typeof value === "string" && !isEmptyString(value)) {
      if (!isHexString(value)) {
        result = convertNumberToHex(value);
      } else if (typeof value === "string") {
        result = sanitizeHex(value);
      }
    }
    if (typeof result === "string") {
      result = removeHexLeadingZeros(result);
    }
    return result;
  }
  const txDataRPC = {
    from: sanitizeHex(txData.from),
    to: typeof txData.to === "undefined" ? void 0 : sanitizeHex(txData.to),
    gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
    gas: typeof txData.gas === "undefined" ? typeof txData.gasLimit === "undefined" ? "" : parseHexValues(txData.gasLimit) : parseHexValues(txData.gas),
    value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
    nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
    data: typeof txData.data === "undefined" ? "" : sanitizeHex(txData.data) || "0x"
  };
  const prunable = ["gasPrice", "gas", "value", "nonce"];
  Object.keys(txDataRPC).forEach((key) => {
    if ((typeof txDataRPC[key] === "undefined" || typeof txDataRPC[key] === "string" && !txDataRPC[key].trim().length) && prunable.includes(key)) {
      delete txDataRPC[key];
    }
  });
  return txDataRPC;
}
function formatRpcError(error) {
  const message = error.message || "Failed or Rejected Request";
  let code = -32e3;
  if (error && !error.code) {
    switch (message) {
      case "Parse error":
        code = -32700;
        break;
      case "Invalid request":
        code = -32600;
        break;
      case "Method not found":
        code = -32601;
        break;
      case "Invalid params":
        code = -32602;
        break;
      case "Internal error":
        code = -32603;
        break;
      default:
        code = -32e3;
        break;
    }
  }
  const result = {
    code,
    message
  };
  if (error.data) {
    result.data = error.data;
  }
  return result;
}
var queryString = {};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index2 = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[", index2, "]"].join("")];
          }
          return [
            ...result,
            [encode2(key, options), "[", encode2(index2, options), "]=", encode2(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[]"].join("")];
          }
          return [...result, [encode2(key, options), "[]=", encode2(value, options)].join("")];
        };
      case "comma":
      case "separator":
        return (key) => (result, value) => {
          if (value === null || value === void 0 || value.length === 0) {
            return result;
          }
          if (result.length === 0) {
            return [[encode2(key, options), "=", encode2(value, options)].join("")];
          }
          return [[result, encode2(value, options)].join(options.arrayFormatSeparator)];
        };
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode2(key, options)];
          }
          return [...result, [encode2(key, options), "=", encode2(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray2 = typeof value === "string" && value.split("").indexOf(options.arrayFormatSeparator) > -1;
          const newValue = isArray2 ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
          accumulator[key] = newValue;
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode2(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a2, b2) => Number(a2) - Number(b2)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash = url.slice(hashStart);
    }
    return hash;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(input, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof input !== "string") {
      return ret;
    }
    input = input.trim().replace(/^[?#&]/, "");
    if (!input) {
      return ret;
    }
    for (const param of input.split("&")) {
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator"].includes(options.arrayFormat) ? value : decode(value, options);
      formatter(decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode2(key, options);
      }
      if (Array.isArray(value)) {
        return value.reduce(formatter(key), []).join("&");
      }
      return encode2(key, options) + "=" + encode2(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  };
  exports.parseUrl = (input, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url, hash] = splitOnFirst$1(input, "#");
    return Object.assign(
      {
        url: url.split("?")[0] || "",
        query: parse(extract(input), options)
      },
      options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {}
    );
  };
  exports.stringifyUrl = (input, options) => {
    options = Object.assign({
      encode: true,
      strict: true
    }, options);
    const url = removeHash(input.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(input.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, input.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash = getHash(input.url);
    if (input.fragmentIdentifier) {
      hash = `#${encode2(input.fragmentIdentifier, options)}`;
    }
    return `${url}${queryString2}${hash}`;
  };
})(queryString);
function getQueryString(url) {
  const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : void 0;
  const queryString2 = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
  return queryString2;
}
function appendToQueryString(queryString2, newQueryParams) {
  let queryParams = parseQueryString(queryString2);
  queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
  queryString2 = formatQueryString(queryParams);
  return queryString2;
}
function parseQueryString(queryString$1) {
  return queryString.parse(queryString$1);
}
function formatQueryString(queryParams) {
  return queryString.stringify(queryParams);
}
function isWalletConnectSession(object) {
  return typeof object.bridge !== "undefined";
}
function parseWalletConnectUri(str) {
  const pathStart = str.indexOf(":");
  const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : void 0;
  const protocol = str.substring(0, pathStart);
  const path = str.substring(pathStart + 1, pathEnd);
  function parseRequiredParams(path2) {
    const separator = "@";
    const values = path2.split(separator);
    const requiredParams2 = {
      handshakeTopic: values[0],
      version: parseInt(values[1], 10)
    };
    return requiredParams2;
  }
  const requiredParams = parseRequiredParams(path);
  const queryString2 = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
  function parseQueryParams(queryString3) {
    const result2 = parseQueryString(queryString3);
    const parameters = {
      key: result2.key || "",
      bridge: result2.bridge || ""
    };
    return parameters;
  }
  const queryParams = parseQueryParams(queryString2);
  const result = Object.assign(Object.assign({ protocol }, requiredParams), queryParams);
  return result;
}
class NetworkMonitor {
  constructor() {
    this._eventEmitters = [];
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
      window.addEventListener("online", () => this.trigger("online"));
      window.addEventListener("offline", () => this.trigger("offline"));
    }
  }
  on(event, callback) {
    this._eventEmitters.push({
      event,
      callback
    });
  }
  trigger(event) {
    let eventEmitters = [];
    if (event) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
    }
    eventEmitters.forEach((eventEmitter) => {
      eventEmitter.callback();
    });
  }
}
const WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : require("ws");
class SocketTransport {
  constructor(opts) {
    this.opts = opts;
    this._queue = [];
    this._events = [];
    this._subscriptions = [];
    this._protocol = opts.protocol;
    this._version = opts.version;
    this._url = "";
    this._netMonitor = null;
    this._socket = null;
    this._nextSocket = null;
    this._subscriptions = opts.subscriptions || [];
    this._netMonitor = opts.netMonitor || new NetworkMonitor();
    if (!opts.url || typeof opts.url !== "string") {
      throw new Error("Missing or invalid WebSocket url");
    }
    this._url = opts.url;
    this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(value) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(value) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(value) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(value) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(value) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(message, topic, silent) {
    if (!topic || typeof topic !== "string") {
      throw new Error("Missing or invalid topic field");
    }
    this._socketSend({
      topic,
      type: "pub",
      payload: message,
      silent: !!silent
    });
  }
  subscribe(topic) {
    this._socketSend({
      topic,
      type: "sub",
      payload: "",
      silent: true
    });
  }
  on(event, callback) {
    this._events.push({ event, callback });
  }
  _socketCreate() {
    if (this._nextSocket) {
      return;
    }
    const url = getWebSocketUrl(this._url, this._protocol, this._version);
    this._nextSocket = new WS(url);
    if (!this._nextSocket) {
      throw new Error("Failed to create socket");
    }
    this._nextSocket.onmessage = (event) => this._socketReceive(event);
    this._nextSocket.onopen = () => this._socketOpen();
    this._nextSocket.onerror = (event) => this._socketError(event);
    this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null;
        this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose();
    this._socket = this._nextSocket;
    this._nextSocket = null;
    this._queueSubscriptions();
    this._pushQueue();
  }
  _socketClose() {
    if (this._socket) {
      this._socket.onclose = () => {
      };
      this._socket.close();
    }
  }
  _socketSend(socketMessage) {
    const message = JSON.stringify(socketMessage);
    if (this._socket && this._socket.readyState === 1) {
      this._socket.send(message);
    } else {
      this._setToQueue(socketMessage);
      this._socketCreate();
    }
  }
  async _socketReceive(event) {
    let socketMessage;
    try {
      socketMessage = JSON.parse(event.data);
    } catch (error) {
      return;
    }
    this._socketSend({
      topic: socketMessage.topic,
      type: "ack",
      payload: "",
      silent: true
    });
    if (this._socket && this._socket.readyState === 1) {
      const events = this._events.filter((event2) => event2.event === "message");
      if (events && events.length) {
        events.forEach((event2) => event2.callback(socketMessage));
      }
    }
  }
  _socketError(e2) {
    const events = this._events.filter((event) => event.event === "error");
    if (events && events.length) {
      events.forEach((event) => event.callback(e2));
    }
  }
  _queueSubscriptions() {
    const subscriptions = this._subscriptions;
    subscriptions.forEach((topic) => this._queue.push({
      topic,
      type: "sub",
      payload: "",
      silent: true
    }));
    this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(socketMessage) {
    this._queue.push(socketMessage);
  }
  _pushQueue() {
    const queue = this._queue;
    queue.forEach((socketMessage) => this._socketSend(socketMessage));
    this._queue = [];
  }
}
function getWebSocketUrl(_url, protocol, version2) {
  var _a, _b;
  const url = _url.startsWith("https") ? _url.replace("https", "wss") : _url.startsWith("http") ? _url.replace("http", "ws") : _url;
  const splitUrl = url.split("?");
  const params = isBrowser() ? {
    protocol,
    version: version2,
    env: "browser",
    host: ((_a = getLocation()) === null || _a === void 0 ? void 0 : _a.host) || ""
  } : {
    protocol,
    version: version2,
    env: ((_b = detectEnv()) === null || _b === void 0 ? void 0 : _b.name) || ""
  };
  const queryString2 = appendToQueryString(getQueryString(splitUrl[1] || ""), params);
  return splitUrl[0] + "?" + queryString2;
}
const ERROR_SESSION_CONNECTED = "Session currently connected";
const ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
const ERROR_SESSION_REJECTED = "Session Rejected";
const ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
const ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
const ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
const ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
const ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
const ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
const ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
const ERROR_INVALID_URI = "URI format is invalid";
const ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
const ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
class EventManager {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(eventEmitter) {
    this._eventEmitters.push(eventEmitter);
  }
  unsubscribe(event) {
    this._eventEmitters = this._eventEmitters.filter((x2) => x2.event !== event);
  }
  trigger(payload) {
    let eventEmitters = [];
    let event;
    if (isJsonRpcRequest(payload)) {
      event = payload.method;
    } else if (isJsonRpcResponseSuccess(payload) || isJsonRpcResponseError(payload)) {
      event = `response:${payload.id}`;
    } else if (isInternalEvent(payload)) {
      event = payload.event;
    } else {
      event = "";
    }
    if (event) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
    }
    if ((!eventEmitters || !eventEmitters.length) && !isReservedEvent(event) && !isInternalEvent(event)) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
    }
    eventEmitters.forEach((eventEmitter) => {
      if (isJsonRpcResponseError(payload)) {
        const error = new Error(payload.error.message);
        eventEmitter.callback(error, null);
      } else {
        eventEmitter.callback(null, payload);
      }
    });
  }
}
class SessionStorage {
  constructor(storageId = "walletconnect") {
    this.storageId = storageId;
  }
  getSession() {
    let session = null;
    const json = getLocal(this.storageId);
    if (json && isWalletConnectSession(json)) {
      session = json;
    }
    return session;
  }
  setSession(session) {
    setLocal(this.storageId, session);
    return session;
  }
  removeSession() {
    removeLocal(this.storageId);
  }
}
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map((char) => `https://${char}.bridge.walletconnect.org`);
function extractHostname(url) {
  let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}
function extractRootDomain(url) {
  return extractHostname(url).split(".").slice(-2).join(".");
}
function randomBridgeIndex() {
  return Math.floor(Math.random() * bridges.length);
}
function selectRandomBridgeUrl() {
  return bridges[randomBridgeIndex()];
}
function shouldSelectRandomly(url) {
  return extractRootDomain(url) === domain;
}
function getBridgeUrl(url) {
  if (shouldSelectRandomly(url)) {
    return selectRandomBridgeUrl();
  }
  return url;
}
class Connector {
  constructor(opts) {
    this.protocol = "wc";
    this.version = 1;
    this._bridge = "";
    this._key = null;
    this._clientId = "";
    this._clientMeta = null;
    this._peerId = "";
    this._peerMeta = null;
    this._handshakeId = 0;
    this._handshakeTopic = "";
    this._connected = false;
    this._accounts = [];
    this._chainId = 0;
    this._networkId = 0;
    this._rpcUrl = "";
    this._eventManager = new EventManager();
    this._clientMeta = getClientMeta() || opts.connectorOpts.clientMeta || null;
    this._cryptoLib = opts.cryptoLib;
    this._sessionStorage = opts.sessionStorage || new SessionStorage(opts.connectorOpts.storageId);
    this._qrcodeModal = opts.connectorOpts.qrcodeModal;
    this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
    this._signingMethods = [...signingMethods, ...opts.connectorOpts.signingMethods || []];
    if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
      throw new Error(ERROR_MISSING_REQUIRED);
    }
    if (opts.connectorOpts.bridge) {
      this.bridge = getBridgeUrl(opts.connectorOpts.bridge);
    }
    if (opts.connectorOpts.uri) {
      this.uri = opts.connectorOpts.uri;
    }
    const session = opts.connectorOpts.session || this._getStorageSession();
    if (session) {
      this.session = session;
    }
    if (this.handshakeId) {
      this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
    }
    this._transport = opts.transport || new SocketTransport({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    });
    this._subscribeToInternalEvents();
    this._initTransport();
    if (opts.connectorOpts.uri) {
      this._subscribeToSessionRequest();
    }
    if (opts.pushServerOpts) {
      this._registerPushServer(opts.pushServerOpts);
    }
  }
  set bridge(value) {
    if (!value) {
      return;
    }
    this._bridge = value;
  }
  get bridge() {
    return this._bridge;
  }
  set key(value) {
    if (!value) {
      return;
    }
    const key = convertHexToArrayBuffer(value);
    this._key = key;
  }
  get key() {
    if (this._key) {
      const key = convertArrayBufferToHex(this._key, true);
      return key;
    }
    return "";
  }
  set clientId(value) {
    if (!value) {
      return;
    }
    this._clientId = value;
  }
  get clientId() {
    let clientId = this._clientId;
    if (!clientId) {
      clientId = this._clientId = uuid();
    }
    return this._clientId;
  }
  set peerId(value) {
    if (!value) {
      return;
    }
    this._peerId = value;
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(value) {
  }
  get clientMeta() {
    let clientMeta = this._clientMeta;
    if (!clientMeta) {
      clientMeta = this._clientMeta = getClientMeta();
    }
    return clientMeta;
  }
  set peerMeta(value) {
    this._peerMeta = value;
  }
  get peerMeta() {
    const peerMeta = this._peerMeta;
    return peerMeta;
  }
  set handshakeTopic(value) {
    if (!value) {
      return;
    }
    this._handshakeTopic = value;
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(value) {
    if (!value) {
      return;
    }
    this._handshakeId = value;
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    const _uri = this._formatUri();
    return _uri;
  }
  set uri(value) {
    if (!value) {
      return;
    }
    const { handshakeTopic, bridge, key } = this._parseUri(value);
    this.handshakeTopic = handshakeTopic;
    this.bridge = bridge;
    this.key = key;
  }
  set chainId(value) {
    this._chainId = value;
  }
  get chainId() {
    const chainId = this._chainId;
    return chainId;
  }
  set networkId(value) {
    this._networkId = value;
  }
  get networkId() {
    const networkId = this._networkId;
    return networkId;
  }
  set accounts(value) {
    this._accounts = value;
  }
  get accounts() {
    const accounts = this._accounts;
    return accounts;
  }
  set rpcUrl(value) {
    this._rpcUrl = value;
  }
  get rpcUrl() {
    const rpcUrl = this._rpcUrl;
    return rpcUrl;
  }
  set connected(value) {
  }
  get connected() {
    return this._connected;
  }
  set pending(value) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(value) {
    if (!value) {
      return;
    }
    this._connected = value.connected;
    this.accounts = value.accounts;
    this.chainId = value.chainId;
    this.bridge = value.bridge;
    this.key = value.key;
    this.clientId = value.clientId;
    this.clientMeta = value.clientMeta;
    this.peerId = value.peerId;
    this.peerMeta = value.peerMeta;
    this.handshakeId = value.handshakeId;
    this.handshakeTopic = value.handshakeTopic;
  }
  on(event, callback) {
    const eventEmitter = {
      event,
      callback
    };
    this._eventManager.subscribe(eventEmitter);
  }
  off(event) {
    this._eventManager.unsubscribe(event);
  }
  async createInstantRequest(instantRequest) {
    this._key = await this._generateKey();
    const request = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(instantRequest)
        }
      ]
    });
    this.handshakeId = request.id;
    this.handshakeTopic = uuid();
    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
    this.on("modal_closed", () => {
      throw new Error(ERROR_QRCODE_MODAL_USER_CLOSED);
    });
    const endInstantRequest = () => {
      this.killSession();
    };
    try {
      const result = await this._sendCallRequest(request);
      if (result) {
        endInstantRequest();
      }
      return result;
    } catch (error) {
      endInstantRequest();
      throw error;
    }
  }
  async connect(opts) {
    if (!this._qrcodeModal) {
      throw new Error(ERROR_QRCODE_MODAL_NOT_PROVIDED);
    }
    if (this.connected) {
      return {
        chainId: this.chainId,
        accounts: this.accounts
      };
    }
    await this.createSession(opts);
    return new Promise(async (resolve, reject) => {
      this.on("modal_closed", () => reject(new Error(ERROR_QRCODE_MODAL_USER_CLOSED)));
      this.on("connect", (error, payload) => {
        if (error) {
          return reject(error);
        }
        resolve(payload.params[0]);
      });
    });
  }
  async createSession(opts) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    if (this.pending) {
      return;
    }
    this._key = await this._generateKey();
    const request = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: opts && opts.chainId ? opts.chainId : null
        }
      ]
    });
    this.handshakeId = request.id;
    this.handshakeTopic = uuid();
    this._sendSessionRequest(request, "Session update rejected", {
      topic: this.handshakeTopic
    });
    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(sessionStatus) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    };
    const response = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: sessionParams
    };
    this._sendResponse(response);
    this._connected = true;
    this._setStorageSession();
    this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(sessionError) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    const message = sessionError && sessionError.message ? sessionError.message : ERROR_SESSION_REJECTED;
    const response = this._formatResponse({
      id: this.handshakeId,
      error: { message }
    });
    this._sendResponse(response);
    this._connected = false;
    this._eventManager.trigger({
      event: "disconnect",
      params: [{ message }]
    });
    this._removeStorageSession();
  }
  updateSession(sessionStatus) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    };
    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });
    this._sendSessionRequest(request, "Session update rejected");
    this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
    this._manageStorageSession();
  }
  async killSession(sessionError) {
    const message = sessionError ? sessionError.message : "Session Disconnected";
    const sessionParams = {
      approved: false,
      chainId: null,
      networkId: null,
      accounts: null
    };
    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });
    await this._sendRequest(request);
    this._handleSessionDisconnect(message);
  }
  async sendTransaction(tx) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const parsedTx = parseTransactionData(tx);
    const request = this._formatRequest({
      method: "eth_sendTransaction",
      params: [parsedTx]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signTransaction(tx) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const parsedTx = parseTransactionData(tx);
    const request = this._formatRequest({
      method: "eth_signTransaction",
      params: [parsedTx]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signMessage(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "eth_sign",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signPersonalMessage(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    params = parsePersonalSign(params);
    const request = this._formatRequest({
      method: "personal_sign",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signTypedData(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "eth_signTypedData",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async updateChain(chainParams) {
    if (!this._connected) {
      throw new Error("Session currently disconnected");
    }
    const request = this._formatRequest({
      method: "wallet_updateChain",
      params: [chainParams]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  unsafeSend(request, options) {
    this._sendRequest(request, options);
    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request, options }]
    });
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(request.id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }
        if (!payload) {
          throw new Error(ERROR_MISSING_JSON_RPC);
        }
        resolve(payload);
      });
    });
  }
  async sendCustomRequest(request, options) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    switch (request.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return convertNumberToHex(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        if (request.params) {
          request.params[0] = parseTransactionData(request.params[0]);
        }
        break;
      case "personal_sign":
        if (request.params) {
          request.params = parsePersonalSign(request.params);
        }
        break;
    }
    const formattedRequest = this._formatRequest(request);
    const result = await this._sendCallRequest(formattedRequest, options);
    return result;
  }
  approveRequest(response) {
    if (isJsonRpcResponseSuccess(response)) {
      const formattedResponse = this._formatResponse(response);
      this._sendResponse(formattedResponse);
    } else {
      throw new Error(ERROR_MISSING_RESULT);
    }
  }
  rejectRequest(response) {
    if (isJsonRpcResponseError(response)) {
      const formattedResponse = this._formatResponse(response);
      this._sendResponse(formattedResponse);
    } else {
      throw new Error(ERROR_MISSING_ERROR);
    }
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(request, options) {
    const callRequest = this._formatRequest(request);
    const encryptionPayload = await this._encrypt(callRequest);
    const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined" ? !options.forcePushNotification : isSilentPayload(callRequest);
    this._transport.send(payload, topic, silent);
  }
  async _sendResponse(response) {
    const encryptionPayload = await this._encrypt(response);
    const topic = this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = true;
    this._transport.send(payload, topic, silent);
  }
  async _sendSessionRequest(request, errorMsg, options) {
    this._sendRequest(request, options);
    this._subscribeToSessionResponse(request.id, errorMsg);
  }
  _sendCallRequest(request, options) {
    this._sendRequest(request, options);
    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request, options }]
    });
    return this._subscribeToCallResponse(request.id);
  }
  _formatRequest(request) {
    if (typeof request.method === "undefined") {
      throw new Error(ERROR_MISSING_METHOD);
    }
    const formattedRequest = {
      id: typeof request.id === "undefined" ? payloadId() : request.id,
      jsonrpc: "2.0",
      method: request.method,
      params: typeof request.params === "undefined" ? [] : request.params
    };
    return formattedRequest;
  }
  _formatResponse(response) {
    if (typeof response.id === "undefined") {
      throw new Error(ERROR_MISSING_ID);
    }
    const baseResponse = { id: response.id, jsonrpc: "2.0" };
    if (isJsonRpcResponseError(response)) {
      const error = formatRpcError(response.error);
      const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), { error });
      return errorResponse;
    } else if (isJsonRpcResponseSuccess(response)) {
      const successResponse = Object.assign(Object.assign({}, baseResponse), response);
      return successResponse;
    }
    throw new Error(ERROR_INVALID_RESPONSE);
  }
  _handleSessionDisconnect(errorMsg) {
    const message = errorMsg || "Session Disconnected";
    if (!this._connected) {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
      removeLocal(mobileLinkChoiceKey);
    }
    if (this._connected) {
      this._connected = false;
    }
    if (this._handshakeId) {
      this._handshakeId = 0;
    }
    if (this._handshakeTopic) {
      this._handshakeTopic = "";
    }
    if (this._peerId) {
      this._peerId = "";
    }
    this._eventManager.trigger({
      event: "disconnect",
      params: [{ message }]
    });
    this._removeStorageSession();
    this.transportClose();
  }
  _handleSessionResponse(errorMsg, sessionParams) {
    if (sessionParams) {
      if (sessionParams.approved) {
        if (!this._connected) {
          this._connected = true;
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }
          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }
          if (sessionParams.peerId && !this.peerId) {
            this.peerId = sessionParams.peerId;
          }
          if (sessionParams.peerMeta && !this.peerMeta) {
            this.peerMeta = sessionParams.peerMeta;
          }
          this._eventManager.trigger({
            event: "connect",
            params: [
              {
                peerId: this.peerId,
                peerMeta: this.peerMeta,
                chainId: this.chainId,
                accounts: this.accounts
              }
            ]
          });
        } else {
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }
          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }
          this._eventManager.trigger({
            event: "session_update",
            params: [
              {
                chainId: this.chainId,
                accounts: this.accounts
              }
            ]
          });
        }
        this._manageStorageSession();
      } else {
        this._handleSessionDisconnect(errorMsg);
      }
    } else {
      this._handleSessionDisconnect(errorMsg);
    }
  }
  async _handleIncomingMessages(socketMessage) {
    const activeTopics = [this.clientId, this.handshakeTopic];
    if (!activeTopics.includes(socketMessage.topic)) {
      return;
    }
    let encryptionPayload;
    try {
      encryptionPayload = JSON.parse(socketMessage.payload);
    } catch (error) {
      return;
    }
    const payload = await this._decrypt(encryptionPayload);
    if (payload) {
      this._eventManager.trigger(payload);
    }
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(id, callback) {
    this.on(`response:${id}`, callback);
  }
  _subscribeToSessionResponse(id, errorMsg) {
    this._subscribeToResponse(id, (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
        return;
      }
      if (isJsonRpcResponseSuccess(payload)) {
        this._handleSessionResponse(errorMsg, payload.result);
      } else if (payload.error && payload.error.message) {
        this._handleSessionResponse(payload.error.message);
      } else {
        this._handleSessionResponse(errorMsg);
      }
    });
  }
  _subscribeToCallResponse(id) {
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }
        if (isJsonRpcResponseSuccess(payload)) {
          resolve(payload.result);
        } else if (payload.error && payload.error.message) {
          reject(payload.error);
        } else {
          reject(new Error(ERROR_INVALID_RESPONSE));
        }
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.open(this.uri, () => {
          this._eventManager.trigger({
            event: "modal_closed",
            params: []
          });
        }, this._qrcodeModalOptions);
      }
    });
    this.on("connect", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
    });
    this.on("call_request_sent", (error, payload) => {
      const { request } = payload.params[0];
      if (isMobile() && this._signingMethods.includes(request.method)) {
        const mobileLinkUrl = getLocal(mobileLinkChoiceKey);
        if (mobileLinkUrl) {
          window.location.href = mobileLinkUrl.href;
        }
      }
    });
    this.on("wc_sessionRequest", (error, payload) => {
      if (error) {
        this._eventManager.trigger({
          event: "error",
          params: [
            {
              code: "SESSION_REQUEST_ERROR",
              message: error.toString()
            }
          ]
        });
      }
      this.handshakeId = payload.id;
      this.peerId = payload.params[0].peerId;
      this.peerMeta = payload.params[0].peerMeta;
      const internalPayload = Object.assign(Object.assign({}, payload), { method: "session_request" });
      this._eventManager.trigger(internalPayload);
    });
    this.on("wc_sessionUpdate", (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
      }
      this._handleSessionResponse("Session disconnected", payload.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (socketMessage) => this._handleIncomingMessages(socketMessage));
    this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] }));
    this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] }));
    this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    }));
    this._transport.open();
  }
  _formatUri() {
    const protocol = this.protocol;
    const handshakeTopic = this.handshakeTopic;
    const version2 = this.version;
    const bridge = encodeURIComponent(this.bridge);
    const key = this.key;
    const uri = `${protocol}:${handshakeTopic}@${version2}?bridge=${bridge}&key=${key}`;
    return uri;
  }
  _parseUri(uri) {
    const result = parseWalletConnectUri(uri);
    if (result.protocol === this.protocol) {
      if (!result.handshakeTopic) {
        throw Error("Invalid or missing handshakeTopic parameter value");
      }
      const handshakeTopic = result.handshakeTopic;
      if (!result.bridge) {
        throw Error("Invalid or missing bridge url parameter value");
      }
      const bridge = decodeURIComponent(result.bridge);
      if (!result.key) {
        throw Error("Invalid or missing key parameter value");
      }
      const key = result.key;
      return { handshakeTopic, bridge, key };
    } else {
      throw new Error(ERROR_INVALID_URI);
    }
  }
  async _generateKey() {
    if (this._cryptoLib) {
      const result = await this._cryptoLib.generateKey();
      return result;
    }
    return null;
  }
  async _encrypt(data) {
    const key = this._key;
    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.encrypt(data, key);
      return result;
    }
    return null;
  }
  async _decrypt(payload) {
    const key = this._key;
    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.decrypt(payload, key);
      return result;
    }
    return null;
  }
  _getStorageSession() {
    let result = null;
    if (this._sessionStorage) {
      result = this._sessionStorage.getSession();
    }
    return result;
  }
  _setStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.setSession(this.session);
    }
  }
  _removeStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.removeSession();
    }
  }
  _manageStorageSession() {
    if (this._connected) {
      this._setStorageSession();
    } else {
      this._removeStorageSession();
    }
  }
  _registerPushServer(pushServerOpts) {
    if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    }
    if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    }
    if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    }
    const pushSubscription = {
      bridge: this.bridge,
      topic: this.clientId,
      type: pushServerOpts.type,
      token: pushServerOpts.token,
      peerName: "",
      language: pushServerOpts.language || ""
    };
    this.on("connect", async (error, payload) => {
      if (error) {
        throw error;
      }
      if (pushServerOpts.peerMeta) {
        const peerName = payload.params[0].peerMeta.name;
        pushSubscription.peerName = peerName;
      }
      try {
        const response = await fetch(`${pushServerOpts.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pushSubscription)
        });
        const json = await response.json();
        if (!json.success) {
          throw Error("Failed to register in Push Server");
        }
      } catch (error2) {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
function randomBytes(length) {
  const browserCrypto = cjs$3.getBrowerCrypto();
  return browserCrypto.getRandomValues(new Uint8Array(length));
}
const LENGTH_256 = 256;
const AES_LENGTH = LENGTH_256;
const HMAC_LENGTH = LENGTH_256;
const AES_BROWSER_ALGO = "AES-CBC";
const HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
const HMAC_BROWSER = "HMAC";
const ENCRYPT_OP = "encrypt";
const DECRYPT_OP = "decrypt";
const SIGN_OP = "sign";
const VERIFY_OP = "verify";
function getAlgo(type) {
  return type === AES_BROWSER_ALGO ? { length: AES_LENGTH, name: AES_BROWSER_ALGO } : {
    hash: { name: HMAC_BROWSER_ALGO },
    name: HMAC_BROWSER
  };
}
function getOps(type) {
  return type === AES_BROWSER_ALGO ? [ENCRYPT_OP, DECRYPT_OP] : [SIGN_OP, VERIFY_OP];
}
async function browserImportKey(buffer2, type = AES_BROWSER_ALGO) {
  return cjs$3.getSubtleCrypto().importKey("raw", buffer2, getAlgo(type), true, getOps(type));
}
async function browserAesEncrypt(iv, key, data) {
  const subtle = cjs$3.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, AES_BROWSER_ALGO);
  const result = await subtle.encrypt({
    iv,
    name: AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}
async function browserAesDecrypt(iv, key, data) {
  const subtle = cjs$3.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, AES_BROWSER_ALGO);
  const result = await subtle.decrypt({
    iv,
    name: AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}
async function browserHmacSha256Sign(key, data) {
  const subtle = cjs$3.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, HMAC_BROWSER);
  const signature = await subtle.sign({
    length: HMAC_LENGTH,
    name: HMAC_BROWSER
  }, cryptoKey, data);
  return new Uint8Array(signature);
}
function aesCbcEncrypt(iv, key, data) {
  return browserAesEncrypt(iv, key, data);
}
function aesCbcDecrypt(iv, key, data) {
  return browserAesDecrypt(iv, key, data);
}
async function hmacSha256Sign(key, msg) {
  const result = await browserHmacSha256Sign(key, msg);
  return result;
}
async function generateKey(length) {
  const _length = (length || 256) / 8;
  const bytes = randomBytes(_length);
  const result = convertBufferToArrayBuffer(arrayToBuffer(bytes));
  return result;
}
async function verifyHmac(payload, key) {
  const cipherText = hexToArray(payload.data);
  const iv = hexToArray(payload.iv);
  const hmac = hexToArray(payload.hmac);
  const hmacHex = arrayToHex(hmac, false);
  const unsigned = concatArrays(cipherText, iv);
  const chmac = await hmacSha256Sign(key, unsigned);
  const chmacHex = arrayToHex(chmac, false);
  if (removeHexPrefix(hmacHex) === removeHexPrefix(chmacHex)) {
    return true;
  }
  return false;
}
async function encrypt(data, key, providedIv) {
  const _key = bufferToArray(convertArrayBufferToBuffer(key));
  const ivArrayBuffer = providedIv || await generateKey(128);
  const iv = bufferToArray(convertArrayBufferToBuffer(ivArrayBuffer));
  const ivHex = arrayToHex(iv, false);
  const contentString = JSON.stringify(data);
  const content = utf8ToArray(contentString);
  const cipherText = await aesCbcEncrypt(iv, _key, content);
  const cipherTextHex = arrayToHex(cipherText, false);
  const unsigned = concatArrays(cipherText, iv);
  const hmac = await hmacSha256Sign(_key, unsigned);
  const hmacHex = arrayToHex(hmac, false);
  return {
    data: cipherTextHex,
    hmac: hmacHex,
    iv: ivHex
  };
}
async function decrypt(payload, key) {
  const _key = bufferToArray(convertArrayBufferToBuffer(key));
  if (!_key) {
    throw new Error("Missing key: required for decryption");
  }
  const verified = await verifyHmac(payload, _key);
  if (!verified) {
    return null;
  }
  const cipherText = hexToArray(payload.data);
  const iv = hexToArray(payload.iv);
  const buffer2 = await aesCbcDecrypt(iv, _key, cipherText);
  const utf8 = arrayToUtf8(buffer2);
  let data;
  try {
    data = JSON.parse(utf8);
  } catch (error) {
    return null;
  }
  return data;
}
const cryptoLib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decrypt,
  encrypt,
  generateKey,
  verifyHmac
}, Symbol.toStringTag, { value: "Module" }));
class WalletConnect extends Connector {
  constructor(connectorOpts, pushServerOpts) {
    super({
      cryptoLib,
      connectorOpts,
      pushServerOpts
    });
  }
}
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(esm);
var browser = {};
var canPromise$1 = function() {
  return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};
var qrcode = {};
var typedarrayBuffer = {};
var toString = {}.toString;
var isarray = Array.isArray || function(arr) {
  return toString.call(arr) == "[object Array]";
};
var isArray$1 = isarray;
function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } };
    return arr.foo() === 42;
  } catch (e2) {
    return false;
  }
}
Buffer$2.TYPED_ARRAY_SUPPORT = typedArraySupport();
var K_MAX_LENGTH = Buffer$2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function Buffer$2(arg, offset, length) {
  if (!Buffer$2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$2)) {
    return new Buffer$2(arg, offset, length);
  }
  if (typeof arg === "number") {
    return allocUnsafe(this, arg);
  }
  return from(this, arg, offset, length);
}
if (Buffer$2.TYPED_ARRAY_SUPPORT) {
  Buffer$2.prototype.__proto__ = Uint8Array.prototype;
  Buffer$2.__proto__ = Uint8Array;
  if (typeof Symbol !== "undefined" && Symbol.species && Buffer$2[Symbol.species] === Buffer$2) {
    Object.defineProperty(Buffer$2, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    });
  }
}
function checked(length) {
  if (length >= K_MAX_LENGTH) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
  }
  return length | 0;
}
function isnan(val) {
  return val !== val;
}
function createBuffer(that, length) {
  var buf;
  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length);
    buf.__proto__ = Buffer$2.prototype;
  } else {
    buf = that;
    if (buf === null) {
      buf = new Buffer$2(length);
    }
    buf.length = length;
  }
  return buf;
}
function allocUnsafe(that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer$2.TYPED_ARRAY_SUPPORT) {
    for (var i2 = 0; i2 < size; ++i2) {
      buf[i2] = 0;
    }
  }
  return buf;
}
function fromString(that, string) {
  var length = byteLength(string) | 0;
  var buf = createBuffer(that, length);
  var actual = buf.write(string);
  if (actual !== length) {
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(that, length);
  for (var i2 = 0; i2 < length; i2 += 1) {
    buf[i2] = array[i2] & 255;
  }
  return buf;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  var buf;
  if (byteOffset === void 0 && length === void 0) {
    buf = new Uint8Array(array);
  } else if (length === void 0) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    buf.__proto__ = Buffer$2.prototype;
  } else {
    buf = fromArrayLike(that, buf);
  }
  return buf;
}
function fromObject(that, obj) {
  if (Buffer$2.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(that, len);
    if (buf.length === 0) {
      return buf;
    }
    obj.copy(buf, 0, 0, len);
    return buf;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i2 = 0; i2 < length; ++i2) {
    codePoint = string.charCodeAt(i2);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i2 + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(
        codePoint >> 6 | 192,
        codePoint & 63 | 128
      );
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(
        codePoint >> 12 | 224,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(
        codePoint >> 18 | 240,
        codePoint >> 12 & 63 | 128,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function byteLength(string) {
  if (Buffer$2.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  return utf8ToBytes(string).length;
}
function blitBuffer(src, dst, offset, length) {
  for (var i2 = 0; i2 < length; ++i2) {
    if (i2 + offset >= dst.length || i2 >= src.length)
      break;
    dst[i2 + offset] = src[i2];
  }
  return i2;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function from(that, value, offset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value);
  }
  return fromObject(that, value);
}
Buffer$2.prototype.write = function write(string, offset, length) {
  if (offset === void 0) {
    length = this.length;
    offset = 0;
  } else if (length === void 0 && typeof offset === "string") {
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
    } else {
      length = void 0;
    }
  }
  var remaining = this.length - offset;
  if (length === void 0 || length > remaining)
    length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  return utf8Write(this, string, offset, length);
};
Buffer$2.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === void 0 ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0)
      end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start)
    end = start;
  var newBuf;
  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer$2.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer$2(sliceLen, void 0);
    for (var i2 = 0; i2 < sliceLen; ++i2) {
      newBuf[i2] = this[i2 + start];
    }
  }
  return newBuf;
};
Buffer$2.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start)
    start = 0;
  if (!end && end !== 0)
    end = this.length;
  if (targetStart >= target.length)
    targetStart = target.length;
  if (!targetStart)
    targetStart = 0;
  if (end > 0 && end < start)
    end = start;
  if (end === start)
    return 0;
  if (target.length === 0 || this.length === 0)
    return 0;
  if (targetStart < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (start < 0 || start >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (end < 0)
    throw new RangeError("sourceEnd out of bounds");
  if (end > this.length)
    end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  var i2;
  if (this === target && start < targetStart && targetStart < end) {
    for (i2 = len - 1; i2 >= 0; --i2) {
      target[i2 + targetStart] = this[i2 + start];
    }
  } else if (len < 1e3 || !Buffer$2.TYPED_ARRAY_SUPPORT) {
    for (i2 = 0; i2 < len; ++i2) {
      target[i2 + targetStart] = this[i2 + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }
  return len;
};
Buffer$2.prototype.fill = function fill(val, start, end) {
  if (typeof val === "string") {
    if (typeof start === "string") {
      start = 0;
      end = this.length;
    } else if (typeof end === "string") {
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
  } else if (typeof val === "number") {
    val = val & 255;
  }
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError("Out of range index");
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === void 0 ? this.length : end >>> 0;
  if (!val)
    val = 0;
  var i2;
  if (typeof val === "number") {
    for (i2 = start; i2 < end; ++i2) {
      this[i2] = val;
    }
  } else {
    var bytes = Buffer$2.isBuffer(val) ? val : new Buffer$2(val);
    var len = bytes.length;
    for (i2 = 0; i2 < end - start; ++i2) {
      this[i2 + start] = bytes[i2 % len];
    }
  }
  return this;
};
Buffer$2.concat = function concat(list, length) {
  if (!isArray$1(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return createBuffer(null, 0);
  }
  var i2;
  if (length === void 0) {
    length = 0;
    for (i2 = 0; i2 < list.length; ++i2) {
      length += list[i2].length;
    }
  }
  var buffer2 = allocUnsafe(null, length);
  var pos = 0;
  for (i2 = 0; i2 < list.length; ++i2) {
    var buf = list[i2];
    if (!Buffer$2.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer2, pos);
    pos += buf.length;
  }
  return buffer2;
};
Buffer$2.byteLength = byteLength;
Buffer$2.prototype._isBuffer = true;
Buffer$2.isBuffer = function isBuffer(b2) {
  return !!(b2 != null && b2._isBuffer);
};
typedarrayBuffer.alloc = function(size) {
  var buffer2 = new Buffer$2(size);
  buffer2.fill(0);
  return buffer2;
};
typedarrayBuffer.from = function(data) {
  return new Buffer$2(data);
};
var utils$1 = {};
var toSJISFunction;
var CODEWORDS_COUNT = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
utils$1.getSymbolSize = function getSymbolSize(version2) {
  if (!version2)
    throw new Error('"version" cannot be null or undefined');
  if (version2 < 1 || version2 > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return version2 * 4 + 17;
};
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
  return CODEWORDS_COUNT[version2];
};
utils$1.getBCHDigit = function(data) {
  var digit = 0;
  while (data !== 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
};
utils$1.setToSJISFunction = function setToSJISFunction(f2) {
  if (typeof f2 !== "function") {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f2;
};
utils$1.isKanjiModeEnabled = function() {
  return typeof toSJISFunction !== "undefined";
};
utils$1.toSJIS = function toSJIS(kanji2) {
  return toSJISFunction(kanji2);
};
var errorCorrectionLevel = {};
(function(exports) {
  exports.L = { bit: 1 };
  exports.M = { bit: 0 };
  exports.Q = { bit: 3 };
  exports.H = { bit: 2 };
  function fromString2(string) {
    if (typeof string !== "string") {
      throw new Error("Param is not a string");
    }
    var lcStr = string.toLowerCase();
    switch (lcStr) {
      case "l":
      case "low":
        return exports.L;
      case "m":
      case "medium":
        return exports.M;
      case "q":
      case "quartile":
        return exports.Q;
      case "h":
      case "high":
        return exports.H;
      default:
        throw new Error("Unknown EC Level: " + string);
    }
  }
  exports.isValid = function isValid2(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
  };
  exports.from = function from2(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString2(value);
    } catch (e2) {
      return defaultValue;
    }
  };
})(errorCorrectionLevel);
function BitBuffer$1() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer$1.prototype = {
  get: function(index2) {
    var bufIndex = Math.floor(index2 / 8);
    return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) === 1;
  },
  put: function(num, length) {
    for (var i2 = 0; i2 < length; i2++) {
      this.putBit((num >>> length - i2 - 1 & 1) === 1);
    }
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
};
var bitBuffer = BitBuffer$1;
var BufferUtil$4 = typedarrayBuffer;
function BitMatrix$1(size) {
  if (!size || size < 1) {
    throw new Error("BitMatrix size must be defined and greater than 0");
  }
  this.size = size;
  this.data = BufferUtil$4.alloc(size * size);
  this.reservedBit = BufferUtil$4.alloc(size * size);
}
BitMatrix$1.prototype.set = function(row, col, value, reserved) {
  var index2 = row * this.size + col;
  this.data[index2] = value;
  if (reserved)
    this.reservedBit[index2] = true;
};
BitMatrix$1.prototype.get = function(row, col) {
  return this.data[row * this.size + col];
};
BitMatrix$1.prototype.xor = function(row, col, value) {
  this.data[row * this.size + col] ^= value;
};
BitMatrix$1.prototype.isReserved = function(row, col) {
  return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix$1;
var alignmentPattern = {};
(function(exports) {
  var getSymbolSize3 = utils$1.getSymbolSize;
  exports.getRowColCoords = function getRowColCoords(version2) {
    if (version2 === 1)
      return [];
    var posCount = Math.floor(version2 / 7) + 2;
    var size = getSymbolSize3(version2);
    var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    var positions = [size - 7];
    for (var i2 = 1; i2 < posCount - 1; i2++) {
      positions[i2] = positions[i2 - 1] - intervals;
    }
    positions.push(6);
    return positions.reverse();
  };
  exports.getPositions = function getPositions2(version2) {
    var coords = [];
    var pos = exports.getRowColCoords(version2);
    var posLength = pos.length;
    for (var i2 = 0; i2 < posLength; i2++) {
      for (var j2 = 0; j2 < posLength; j2++) {
        if (i2 === 0 && j2 === 0 || // top-left
        i2 === 0 && j2 === posLength - 1 || // bottom-left
        i2 === posLength - 1 && j2 === 0) {
          continue;
        }
        coords.push([pos[i2], pos[j2]]);
      }
    }
    return coords;
  };
})(alignmentPattern);
var finderPattern = {};
var getSymbolSize2 = utils$1.getSymbolSize;
var FINDER_PATTERN_SIZE = 7;
finderPattern.getPositions = function getPositions(version2) {
  var size = getSymbolSize2(version2);
  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ];
};
var maskPattern = {};
(function(exports) {
  exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  exports.isValid = function isValid2(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
  };
  exports.from = function from2(value) {
    return exports.isValid(value) ? parseInt(value, 10) : void 0;
  };
  exports.getPenaltyN1 = function getPenaltyN1(data) {
    var size = data.size;
    var points = 0;
    var sameCountCol = 0;
    var sameCountRow = 0;
    var lastCol = null;
    var lastRow = null;
    for (var row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;
      for (var col = 0; col < size; col++) {
        var module = data.get(row, col);
        if (module === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5)
            points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module;
          sameCountCol = 1;
        }
        module = data.get(col, row);
        if (module === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5)
            points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module;
          sameCountRow = 1;
        }
      }
      if (sameCountCol >= 5)
        points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5)
        points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
  };
  exports.getPenaltyN2 = function getPenaltyN2(data) {
    var size = data.size;
    var points = 0;
    for (var row = 0; row < size - 1; row++) {
      for (var col = 0; col < size - 1; col++) {
        var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0)
          points++;
      }
    }
    return points * PenaltyScores.N2;
  };
  exports.getPenaltyN3 = function getPenaltyN3(data) {
    var size = data.size;
    var points = 0;
    var bitsCol = 0;
    var bitsRow = 0;
    for (var row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;
      for (var col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
        if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
          points++;
        bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
        if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
          points++;
      }
    }
    return points * PenaltyScores.N3;
  };
  exports.getPenaltyN4 = function getPenaltyN4(data) {
    var darkCount = 0;
    var modulesCount = data.data.length;
    for (var i2 = 0; i2 < modulesCount; i2++)
      darkCount += data.data[i2];
    var k2 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k2 * PenaltyScores.N4;
  };
  function getMaskAt(maskPattern2, i2, j2) {
    switch (maskPattern2) {
      case exports.Patterns.PATTERN000:
        return (i2 + j2) % 2 === 0;
      case exports.Patterns.PATTERN001:
        return i2 % 2 === 0;
      case exports.Patterns.PATTERN010:
        return j2 % 3 === 0;
      case exports.Patterns.PATTERN011:
        return (i2 + j2) % 3 === 0;
      case exports.Patterns.PATTERN100:
        return (Math.floor(i2 / 2) + Math.floor(j2 / 3)) % 2 === 0;
      case exports.Patterns.PATTERN101:
        return i2 * j2 % 2 + i2 * j2 % 3 === 0;
      case exports.Patterns.PATTERN110:
        return (i2 * j2 % 2 + i2 * j2 % 3) % 2 === 0;
      case exports.Patterns.PATTERN111:
        return (i2 * j2 % 3 + (i2 + j2) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern2);
    }
  }
  exports.applyMask = function applyMask(pattern, data) {
    var size = data.size;
    for (var col = 0; col < size; col++) {
      for (var row = 0; row < size; row++) {
        if (data.isReserved(row, col))
          continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };
  exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    var numPatterns = Object.keys(exports.Patterns).length;
    var bestPattern = 0;
    var lowerPenalty = Infinity;
    for (var p2 = 0; p2 < numPatterns; p2++) {
      setupFormatFunc(p2);
      exports.applyMask(p2, data);
      var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
      exports.applyMask(p2, data);
      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p2;
      }
    }
    return bestPattern;
  };
})(maskPattern);
var errorCorrectionCode = {};
var ECLevel$1 = errorCorrectionLevel;
var EC_BLOCKS_TABLE = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
];
var EC_CODEWORDS_TABLE = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
var polynomial = {};
var galoisField = {};
var BufferUtil$3 = typedarrayBuffer;
var EXP_TABLE = BufferUtil$3.alloc(512);
var LOG_TABLE = BufferUtil$3.alloc(256);
(function initTables() {
  var x2 = 1;
  for (var i2 = 0; i2 < 255; i2++) {
    EXP_TABLE[i2] = x2;
    LOG_TABLE[x2] = i2;
    x2 <<= 1;
    if (x2 & 256) {
      x2 ^= 285;
    }
  }
  for (i2 = 255; i2 < 512; i2++) {
    EXP_TABLE[i2] = EXP_TABLE[i2 - 255];
  }
})();
galoisField.log = function log(n2) {
  if (n2 < 1)
    throw new Error("log(" + n2 + ")");
  return LOG_TABLE[n2];
};
galoisField.exp = function exp(n2) {
  return EXP_TABLE[n2];
};
galoisField.mul = function mul(x2, y2) {
  if (x2 === 0 || y2 === 0)
    return 0;
  return EXP_TABLE[LOG_TABLE[x2] + LOG_TABLE[y2]];
};
(function(exports) {
  var BufferUtil2 = typedarrayBuffer;
  var GF = galoisField;
  exports.mul = function mul2(p1, p2) {
    var coeff = BufferUtil2.alloc(p1.length + p2.length - 1);
    for (var i2 = 0; i2 < p1.length; i2++) {
      for (var j2 = 0; j2 < p2.length; j2++) {
        coeff[i2 + j2] ^= GF.mul(p1[i2], p2[j2]);
      }
    }
    return coeff;
  };
  exports.mod = function mod(divident, divisor) {
    var result = BufferUtil2.from(divident);
    while (result.length - divisor.length >= 0) {
      var coeff = result[0];
      for (var i2 = 0; i2 < divisor.length; i2++) {
        result[i2] ^= GF.mul(divisor[i2], coeff);
      }
      var offset = 0;
      while (offset < result.length && result[offset] === 0)
        offset++;
      result = result.slice(offset);
    }
    return result;
  };
  exports.generateECPolynomial = function generateECPolynomial(degree) {
    var poly = BufferUtil2.from([1]);
    for (var i2 = 0; i2 < degree; i2++) {
      poly = exports.mul(poly, [1, GF.exp(i2)]);
    }
    return poly;
  };
})(polynomial);
var buffer = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(exports) {
  var base64 = base64Js;
  var ieee754$1 = ieee754;
  var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports.Buffer = Buffer2;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  var K_MAX_LENGTH2 = 2147483647;
  exports.kMaxLength = K_MAX_LENGTH2;
  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport2();
  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  }
  function typedArraySupport2() {
    try {
      var arr = new Uint8Array(1);
      var proto = { foo: function() {
        return 42;
      } };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e2) {
      return false;
    }
  }
  Object.defineProperty(Buffer2.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this))
        return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer2.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this))
        return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer2(length) {
    if (length > K_MAX_LENGTH2) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      }
      return allocUnsafe2(arg);
    }
    return from2(arg, encodingOrOffset, length);
  }
  Buffer2.poolSize = 8192;
  function from2(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString2(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
      return fromArrayBuffer2(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
      return fromArrayBuffer2(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    }
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    var b2 = fromObject2(value);
    if (b2)
      return b2;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer2.from(
        value[Symbol.toPrimitive]("string"),
        encodingOrOffset,
        length
      );
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
    );
  }
  Buffer2.from = function(value, encodingOrOffset, length) {
    return from2(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Buffer2, Uint8Array);
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill2, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer2(size);
    }
    if (fill2 !== void 0) {
      return typeof encoding === "string" ? createBuffer2(size).fill(fill2, encoding) : createBuffer2(size).fill(fill2);
    }
    return createBuffer2(size);
  }
  Buffer2.alloc = function(size, fill2, encoding) {
    return alloc(size, fill2, encoding);
  };
  function allocUnsafe2(size) {
    assertSize(size);
    return createBuffer2(size < 0 ? 0 : checked2(size) | 0);
  }
  Buffer2.allocUnsafe = function(size) {
    return allocUnsafe2(size);
  };
  Buffer2.allocUnsafeSlow = function(size) {
    return allocUnsafe2(size);
  };
  function fromString2(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    var length = byteLength2(string, encoding) | 0;
    var buf = createBuffer2(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike2(array) {
    var length = array.length < 0 ? 0 : checked2(array.length) | 0;
    var buf = createBuffer2(length);
    for (var i2 = 0; i2 < length; i2 += 1) {
      buf[i2] = array[i2] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
      var copy3 = new Uint8Array(arrayView);
      return fromArrayBuffer2(copy3.buffer, copy3.byteOffset, copy3.byteLength);
    }
    return fromArrayLike2(arrayView);
  }
  function fromArrayBuffer2(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    var buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new Uint8Array(array);
    } else if (length === void 0) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function fromObject2(obj) {
    if (Buffer2.isBuffer(obj)) {
      var len = checked2(obj.length) | 0;
      var buf = createBuffer2(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer2(0);
      }
      return fromArrayLike2(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike2(obj.data);
    }
  }
  function checked2(length) {
    if (length >= K_MAX_LENGTH2) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH2.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer2.alloc(+length);
  }
  Buffer2.isBuffer = function isBuffer2(b2) {
    return b2 != null && b2._isBuffer === true && b2 !== Buffer2.prototype;
  };
  Buffer2.compare = function compare(a2, b2) {
    if (isInstance(a2, Uint8Array))
      a2 = Buffer2.from(a2, a2.offset, a2.byteLength);
    if (isInstance(b2, Uint8Array))
      b2 = Buffer2.from(b2, b2.offset, b2.byteLength);
    if (!Buffer2.isBuffer(a2) || !Buffer2.isBuffer(b2)) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    }
    if (a2 === b2)
      return 0;
    var x2 = a2.length;
    var y2 = b2.length;
    for (var i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
      if (a2[i2] !== b2[i2]) {
        x2 = a2[i2];
        y2 = b2[i2];
        break;
      }
    }
    if (x2 < y2)
      return -1;
    if (y2 < x2)
      return 1;
    return 0;
  };
  Buffer2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  Buffer2.concat = function concat2(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer2.alloc(0);
    }
    var i2;
    if (length === void 0) {
      length = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        length += list[i2].length;
      }
    }
    var buffer2 = Buffer2.allocUnsafe(length);
    var pos = 0;
    for (i2 = 0; i2 < list.length; ++i2) {
      var buf = list[i2];
      if (isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer2.length) {
          Buffer2.from(buf).copy(buffer2, pos);
        } else {
          Uint8Array.prototype.set.call(
            buffer2,
            buf,
            pos
          );
        }
      } else if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer2, pos);
      }
      pos += buf.length;
    }
    return buffer2;
  };
  function byteLength2(string, encoding) {
    if (Buffer2.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
      );
    }
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes2(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes2(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.byteLength = byteLength2;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding)
      encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.prototype._isBuffer = true;
  function swap(b2, n2, m2) {
    var i2 = b2[n2];
    b2[n2] = b2[m2];
    b2[m2] = i2;
  }
  Buffer2.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (var i2 = 0; i2 < len; i2 += 2) {
      swap(this, i2, i2 + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var i2 = 0; i2 < len; i2 += 4) {
      swap(this, i2, i2 + 3);
      swap(this, i2 + 1, i2 + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var i2 = 0; i2 < len; i2 += 8) {
      swap(this, i2, i2 + 7);
      swap(this, i2 + 1, i2 + 6);
      swap(this, i2 + 2, i2 + 5);
      swap(this, i2 + 3, i2 + 4);
    }
    return this;
  };
  Buffer2.prototype.toString = function toString2() {
    var length = this.length;
    if (length === 0)
      return "";
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
  Buffer2.prototype.equals = function equals(b2) {
    if (!Buffer2.isBuffer(b2))
      throw new TypeError("Argument must be a Buffer");
    if (this === b2)
      return true;
    return Buffer2.compare(this, b2) === 0;
  };
  Buffer2.prototype.inspect = function inspect() {
    var str = "";
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max)
      str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
  }
  Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer2.from(target, target.offset, target.byteLength);
    }
    if (!Buffer2.isBuffer(target)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
      );
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target ? target.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target)
      return 0;
    var x2 = thisEnd - thisStart;
    var y2 = end - start;
    var len = Math.min(x2, y2);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for (var i2 = 0; i2 < len; ++i2) {
      if (thisCopy[i2] !== targetCopy[i2]) {
        x2 = thisCopy[i2];
        y2 = targetCopy[i2];
        break;
      }
    }
    if (x2 < y2)
      return -1;
    if (y2 < x2)
      return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
    if (buffer2.length === 0)
      return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer2.length - 1;
    }
    if (byteOffset < 0)
      byteOffset = buffer2.length + byteOffset;
    if (byteOffset >= buffer2.length) {
      if (dir)
        return -1;
      else
        byteOffset = buffer2.length - 1;
    } else if (byteOffset < 0) {
      if (dir)
        byteOffset = 0;
      else
        return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i3) {
      if (indexSize === 1) {
        return buf[i3];
      } else {
        return buf.readUInt16BE(i3 * indexSize);
      }
    }
    var i2;
    if (dir) {
      var foundIndex = -1;
      for (i2 = byteOffset; i2 < arrLength; i2++) {
        if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i2;
          if (i2 - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i2 -= i2 - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i2 = byteOffset; i2 >= 0; i2--) {
        var found = true;
        for (var j2 = 0; j2 < valLength; j2++) {
          if (read(arr, i2 + j2) !== read(val, j2)) {
            found = false;
            break;
          }
        }
        if (found)
          return i2;
      }
    }
    return -1;
  }
  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i2 = 0; i2 < length; ++i2) {
      var parsed = parseInt(string.substr(i2 * 2, 2), 16);
      if (numberIsNaN(parsed))
        return i2;
      buf[offset + i2] = parsed;
    }
    return i2;
  }
  function utf8Write2(buf, string, offset, length) {
    return blitBuffer2(utf8ToBytes2(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer2(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer2(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer2(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer2.prototype.write = function write4(string, offset, length, encoding) {
    if (offset === void 0) {
      encoding = "utf8";
      length = this.length;
      offset = 0;
    } else if (length === void 0 && typeof offset === "string") {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0)
          encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    }
    var remaining = this.length - offset;
    if (length === void 0 || length > remaining)
      length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding)
      encoding = "utf8";
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
          return utf8Write2(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset, length);
        case "base64":
          return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer2.prototype.toJSON = function toJSON() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i2 = start;
    while (i2 < end) {
      var firstByte = buf[i2];
      var codePoint = null;
      var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i2 + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i2 + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i2 + 1];
            thirdByte = buf[i2 + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i2 + 1];
            thirdByte = buf[i2 + 2];
            fourthByte = buf[i2 + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i2 += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = "";
    var i2 = 0;
    while (i2 < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for (var i2 = start; i2 < end; ++i2) {
      ret += String.fromCharCode(buf[i2] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for (var i2 = start; i2 < end; ++i2) {
      ret += String.fromCharCode(buf[i2]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = "";
    for (var i2 = start; i2 < end; ++i2) {
      out += hexSliceLookupTable[buf[i2]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    for (var i2 = 0; i2 < bytes.length - 1; i2 += 2) {
      res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
    }
    return res;
  }
  Buffer2.prototype.slice = function slice2(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer2.prototype);
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0)
      throw new RangeError("offset is not uint");
    if (offset + ext > length)
      throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength3, this.length);
    var val = this[offset];
    var mul2 = 1;
    var i2 = 0;
    while (++i2 < byteLength3 && (mul2 *= 256)) {
      val += this[offset + i2] * mul2;
    }
    return val;
  };
  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength3, this.length);
    }
    var val = this[offset + --byteLength3];
    var mul2 = 1;
    while (byteLength3 > 0 && (mul2 *= 256)) {
      val += this[offset + --byteLength3] * mul2;
    }
    return val;
  };
  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
  };
  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength3, this.length);
    var val = this[offset];
    var mul2 = 1;
    var i2 = 0;
    while (++i2 < byteLength3 && (mul2 *= 256)) {
      val += this[offset + i2] * mul2;
    }
    mul2 *= 128;
    if (val >= mul2)
      val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength3, this.length);
    var i2 = byteLength3;
    var mul2 = 1;
    var val = this[offset + --i2];
    while (i2 > 0 && (mul2 *= 256)) {
      val += this[offset + --i2] * mul2;
    }
    mul2 *= 128;
    if (val >= mul2)
      val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128))
      return this[offset];
    return (255 - this[offset] + 1) * -1;
  };
  Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754$1.read(this, offset, true, 23, 4);
  };
  Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754$1.read(this, offset, false, 23, 4);
  };
  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754$1.read(this, offset, true, 52, 8);
  };
  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754$1.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer2.isBuffer(buf))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
  }
  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset, byteLength3, maxBytes, 0);
    }
    var mul2 = 1;
    var i2 = 0;
    this[offset] = value & 255;
    while (++i2 < byteLength3 && (mul2 *= 256)) {
      this[offset + i2] = value / mul2 & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset, byteLength3, maxBytes, 0);
    }
    var i2 = byteLength3 - 1;
    var mul2 = 1;
    this[offset + i2] = value & 255;
    while (--i2 >= 0 && (mul2 *= 256)) {
      this[offset + i2] = value / mul2 & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
    }
    var i2 = 0;
    var mul2 = 1;
    var sub = 0;
    this[offset] = value & 255;
    while (++i2 < byteLength3 && (mul2 *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
        sub = 1;
      }
      this[offset + i2] = (value / mul2 >> 0) - sub & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
    }
    var i2 = byteLength3 - 1;
    var mul2 = 1;
    var sub = 0;
    this[offset + i2] = value & 255;
    while (--i2 >= 0 && (mul2 *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
        sub = 1;
      }
      this[offset + i2] = (value / mul2 >> 0) - sub & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 127, -128);
    if (value < 0)
      value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0)
      value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
    if (offset < 0)
      throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer2.prototype.copy = function copy3(target, targetStart, start, end) {
    if (!Buffer2.isBuffer(target))
      throw new TypeError("argument should be a Buffer");
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length)
      throw new RangeError("Index out of range");
    if (end < 0)
      throw new RangeError("sourceEnd out of bounds");
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, end),
        targetStart
      );
    }
    return len;
  };
  Buffer2.prototype.fill = function fill2(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (encoding === "utf8" && code < 128 || encoding === "latin1") {
          val = code;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val)
      val = 0;
    var i2;
    if (typeof val === "number") {
      for (i2 = start; i2 < end; ++i2) {
        this[i2] = val;
      }
    } else {
      var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      var len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i2 = 0; i2 < end - start; ++i2) {
        this[i2 + start] = bytes[i2 % len];
      }
    }
    return this;
  };
  var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2)
      return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes2(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i2 = 0; i2 < length; ++i2) {
      codePoint = string.charCodeAt(i2);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i2 + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0)
          break;
        bytes.push(
          codePoint >> 6 | 192,
          codePoint & 63 | 128
        );
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0)
          break;
        bytes.push(
          codePoint >> 12 | 224,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0)
          break;
        bytes.push(
          codePoint >> 18 | 240,
          codePoint >> 12 & 63 | 128,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i2 = 0; i2 < str.length; ++i2) {
      byteArray.push(str.charCodeAt(i2) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c2, hi, lo;
    var byteArray = [];
    for (var i2 = 0; i2 < str.length; ++i2) {
      if ((units -= 2) < 0)
        break;
      c2 = str.charCodeAt(i2);
      hi = c2 >> 8;
      lo = c2 % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer2(src, dst, offset, length) {
    for (var i2 = 0; i2 < length; ++i2) {
      if (i2 + offset >= dst.length || i2 >= src.length)
        break;
      dst[i2 + offset] = src[i2];
    }
    return i2;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  var hexSliceLookupTable = function() {
    var alphabet = "0123456789abcdef";
    var table = new Array(256);
    for (var i2 = 0; i2 < 16; ++i2) {
      var i16 = i2 * 16;
      for (var j2 = 0; j2 < 16; ++j2) {
        table[i16 + j2] = alphabet[i2] + alphabet[j2];
      }
    }
    return table;
  }();
})(buffer);
var BufferUtil$2 = typedarrayBuffer;
var Polynomial = polynomial;
var Buffer$1 = buffer.Buffer;
function ReedSolomonEncoder$1(degree) {
  this.genPoly = void 0;
  this.degree = degree;
  if (this.degree)
    this.initialize(this.degree);
}
ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
ReedSolomonEncoder$1.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error("Encoder not initialized");
  }
  var pad = BufferUtil$2.alloc(this.degree);
  var paddedData = Buffer$1.concat([data, pad], data.length + this.degree);
  var remainder = Polynomial.mod(paddedData, this.genPoly);
  var start = this.degree - remainder.length;
  if (start > 0) {
    var buff = BufferUtil$2.alloc(this.degree);
    remainder.copy(buff, start);
    return buff;
  }
  return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder$1;
var version = {};
var mode = {};
var versionCheck = {};
versionCheck.isValid = function isValid(version2) {
  return !isNaN(version2) && version2 >= 1 && version2 <= 40;
};
var regex = {};
var numeric = "[0-9]+";
var alphanumeric = "[A-Z $%*+\\-./:]+";
var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, "\\u");
var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
regex.KANJI = new RegExp(kanji, "g");
regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
regex.BYTE = new RegExp(byte, "g");
regex.NUMERIC = new RegExp(numeric, "g");
regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
var TEST_KANJI = new RegExp("^" + kanji + "$");
var TEST_NUMERIC = new RegExp("^" + numeric + "$");
var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
regex.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
regex.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
regex.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};
(function(exports) {
  var VersionCheck = versionCheck;
  var Regex = regex;
  exports.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };
  exports.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };
  exports.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };
  exports.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };
  exports.MIXED = {
    bit: -1
  };
  exports.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
    if (!mode2.ccBits)
      throw new Error("Invalid mode: " + mode2);
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid version: " + version2);
    }
    if (version2 >= 1 && version2 < 10)
      return mode2.ccBits[0];
    else if (version2 < 27)
      return mode2.ccBits[1];
    return mode2.ccBits[2];
  };
  exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr))
      return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr))
      return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr))
      return exports.KANJI;
    else
      return exports.BYTE;
  };
  exports.toString = function toString2(mode2) {
    if (mode2 && mode2.id)
      return mode2.id;
    throw new Error("Invalid mode");
  };
  exports.isValid = function isValid2(mode2) {
    return mode2 && mode2.bit && mode2.ccBits;
  };
  function fromString2(string) {
    if (typeof string !== "string") {
      throw new Error("Param is not a string");
    }
    var lcStr = string.toLowerCase();
    switch (lcStr) {
      case "numeric":
        return exports.NUMERIC;
      case "alphanumeric":
        return exports.ALPHANUMERIC;
      case "kanji":
        return exports.KANJI;
      case "byte":
        return exports.BYTE;
      default:
        throw new Error("Unknown mode: " + string);
    }
  }
  exports.from = function from2(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString2(value);
    } catch (e2) {
      return defaultValue;
    }
  };
})(mode);
(function(exports) {
  var Utils2 = utils$1;
  var ECCode2 = errorCorrectionCode;
  var ECLevel2 = errorCorrectionLevel;
  var Mode2 = mode;
  var VersionCheck = versionCheck;
  var isArray2 = isarray;
  var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  var G18_BCH = Utils2.getBCHDigit(G18);
  function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
    for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  function getReservedBitsCount(mode2, version2) {
    return Mode2.getCharCountIndicator(mode2, version2) + 4;
  }
  function getTotalBitsFromDataArray(segments2, version2) {
    var totalBits = 0;
    segments2.forEach(function(data) {
      var reservedBits = getReservedBitsCount(data.mode, version2);
      totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
  }
  function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
    for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
      var length = getTotalBitsFromDataArray(segments2, currentVersion);
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  exports.from = function from2(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
      return parseInt(value, 10);
    }
    return defaultValue;
  };
  exports.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid QR Code version");
    }
    if (typeof mode2 === "undefined")
      mode2 = Mode2.BYTE;
    var totalCodewords = Utils2.getSymbolTotalCodewords(version2);
    var ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode2 === Mode2.MIXED)
      return dataTotalCodewordsBits;
    var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
    switch (mode2) {
      case Mode2.NUMERIC:
        return Math.floor(usableBits / 10 * 3);
      case Mode2.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);
      case Mode2.KANJI:
        return Math.floor(usableBits / 13);
      case Mode2.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };
  exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel2) {
    var seg;
    var ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
    if (isArray2(data)) {
      if (data.length > 1) {
        return getBestVersionForMixedData(data, ecl);
      }
      if (data.length === 0) {
        return 1;
      }
      seg = data[0];
    } else {
      seg = data;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };
  exports.getEncodedBits = function getEncodedBits2(version2) {
    if (!VersionCheck.isValid(version2) || version2 < 7) {
      throw new Error("Invalid QR Code version");
    }
    var d2 = version2 << 12;
    while (Utils2.getBCHDigit(d2) - G18_BCH >= 0) {
      d2 ^= G18 << Utils2.getBCHDigit(d2) - G18_BCH;
    }
    return version2 << 12 | d2;
  };
})(version);
var formatInfo = {};
var Utils$3 = utils$1;
var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
var G15_BCH = Utils$3.getBCHDigit(G15);
formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
  var data = errorCorrectionLevel2.bit << 3 | mask;
  var d2 = data << 10;
  while (Utils$3.getBCHDigit(d2) - G15_BCH >= 0) {
    d2 ^= G15 << Utils$3.getBCHDigit(d2) - G15_BCH;
  }
  return (data << 10 | d2) ^ G15_MASK;
};
var segments = {};
var Mode$4 = mode;
function NumericData(data) {
  this.mode = Mode$4.NUMERIC;
  this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength2() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write2(bitBuffer2) {
  var i2, group, value;
  for (i2 = 0; i2 + 3 <= this.data.length; i2 += 3) {
    group = this.data.substr(i2, 3);
    value = parseInt(group, 10);
    bitBuffer2.put(value, 10);
  }
  var remainingNum = this.data.length - i2;
  if (remainingNum > 0) {
    group = this.data.substr(i2);
    value = parseInt(group, 10);
    bitBuffer2.put(value, remainingNum * 3 + 1);
  }
};
var numericData = NumericData;
var Mode$3 = mode;
var ALPHA_NUM_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function AlphanumericData(data) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength3(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength2() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength4() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write3(bitBuffer2) {
  var i2;
  for (i2 = 0; i2 + 2 <= this.data.length; i2 += 2) {
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i2]) * 45;
    value += ALPHA_NUM_CHARS.indexOf(this.data[i2 + 1]);
    bitBuffer2.put(value, 11);
  }
  if (this.data.length % 2) {
    bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i2]), 6);
  }
};
var alphanumericData = AlphanumericData;
var BufferUtil$1 = typedarrayBuffer;
var Mode$2 = mode;
function ByteData(data) {
  this.mode = Mode$2.BYTE;
  this.data = BufferUtil$1.from(data);
}
ByteData.getBitsLength = function getBitsLength5(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength3() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength6() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer2) {
  for (var i2 = 0, l2 = this.data.length; i2 < l2; i2++) {
    bitBuffer2.put(this.data[i2], 8);
  }
};
var byteData = ByteData;
var Mode$1 = mode;
var Utils$2 = utils$1;
function KanjiData(data) {
  this.mode = Mode$1.KANJI;
  this.data = data;
}
KanjiData.getBitsLength = function getBitsLength7(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength4() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength8() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer2) {
  var i2;
  for (i2 = 0; i2 < this.data.length; i2++) {
    var value = Utils$2.toSJIS(this.data[i2]);
    if (value >= 33088 && value <= 40956) {
      value -= 33088;
    } else if (value >= 57408 && value <= 60351) {
      value -= 49472;
    } else {
      throw new Error(
        "Invalid SJIS character: " + this.data[i2] + "\nMake sure your charset is UTF-8"
      );
    }
    value = (value >>> 8 & 255) * 192 + (value & 255);
    bitBuffer2.put(value, 13);
  }
};
var kanjiData = KanjiData;
(function(exports) {
  var Mode2 = mode;
  var NumericData2 = numericData;
  var AlphanumericData2 = alphanumericData;
  var ByteData2 = byteData;
  var KanjiData2 = kanjiData;
  var Regex = regex;
  var Utils2 = utils$1;
  var dijkstra = dijkstraExports;
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }
  function getSegments(regex2, mode2, str) {
    var segments2 = [];
    var result;
    while ((result = regex2.exec(str)) !== null) {
      segments2.push({
        data: result[0],
        index: result.index,
        mode: mode2,
        length: result[0].length
      });
    }
    return segments2;
  }
  function getSegmentsFromString(dataStr) {
    var numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
    var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
    var byteSegs;
    var kanjiSegs;
    if (Utils2.isKanjiModeEnabled()) {
      byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
      kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
    } else {
      byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
      kanjiSegs = [];
    }
    var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
      return s1.index - s2.index;
    }).map(function(obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }
  function getSegmentBitsLength(length, mode2) {
    switch (mode2) {
      case Mode2.NUMERIC:
        return NumericData2.getBitsLength(length);
      case Mode2.ALPHANUMERIC:
        return AlphanumericData2.getBitsLength(length);
      case Mode2.KANJI:
        return KanjiData2.getBitsLength(length);
      case Mode2.BYTE:
        return ByteData2.getBitsLength(length);
    }
  }
  function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
      var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
  }
  function buildNodes(segs) {
    var nodes = [];
    for (var i2 = 0; i2 < segs.length; i2++) {
      var seg = segs[i2];
      switch (seg.mode) {
        case Mode2.NUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.ALPHANUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.KANJI:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
          break;
        case Mode2.BYTE:
          nodes.push([
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
      }
    }
    return nodes;
  }
  function buildGraph(nodes, version2) {
    var table = {};
    var graph = { "start": {} };
    var prevNodeIds = ["start"];
    for (var i2 = 0; i2 < nodes.length; i2++) {
      var nodeGroup = nodes[i2];
      var currentNodeIds = [];
      for (var j2 = 0; j2 < nodeGroup.length; j2++) {
        var node = nodeGroup[j2];
        var key = "" + i2 + j2;
        currentNodeIds.push(key);
        table[key] = { node, lastCount: 0 };
        graph[key] = {};
        for (var n2 = 0; n2 < prevNodeIds.length; n2++) {
          var prevNodeId = prevNodeIds[n2];
          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId])
              table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode2.getCharCountIndicator(node.mode, version2);
          }
        }
      }
      prevNodeIds = currentNodeIds;
    }
    for (n2 = 0; n2 < prevNodeIds.length; n2++) {
      graph[prevNodeIds[n2]]["end"] = 0;
    }
    return { map: graph, table };
  }
  function buildSingleSegment(data, modesHint) {
    var mode2;
    var bestMode = Mode2.getBestModeForData(data);
    mode2 = Mode2.from(modesHint, bestMode);
    if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
      throw new Error('"' + data + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
    }
    if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
      mode2 = Mode2.BYTE;
    }
    switch (mode2) {
      case Mode2.NUMERIC:
        return new NumericData2(data);
      case Mode2.ALPHANUMERIC:
        return new AlphanumericData2(data);
      case Mode2.KANJI:
        return new KanjiData2(data);
      case Mode2.BYTE:
        return new ByteData2(data);
    }
  }
  exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
      if (typeof seg === "string") {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }
      return acc;
    }, []);
  };
  exports.fromString = function fromString2(data, version2) {
    var segs = getSegmentsFromString(data, Utils2.isKanjiModeEnabled());
    var nodes = buildNodes(segs);
    var graph = buildGraph(nodes, version2);
    var path = dijkstra.find_path(graph.map, "start", "end");
    var optimizedSegs = [];
    for (var i2 = 1; i2 < path.length - 1; i2++) {
      optimizedSegs.push(graph.table[path[i2]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
  };
  exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(
      getSegmentsFromString(data, Utils2.isKanjiModeEnabled())
    );
  };
})(segments);
var BufferUtil = typedarrayBuffer;
var Utils$1 = utils$1;
var ECLevel = errorCorrectionLevel;
var BitBuffer = bitBuffer;
var BitMatrix = bitMatrix;
var AlignmentPattern = alignmentPattern;
var FinderPattern = finderPattern;
var MaskPattern = maskPattern;
var ECCode = errorCorrectionCode;
var ReedSolomonEncoder = reedSolomonEncoder;
var Version = version;
var FormatInfo = formatInfo;
var Mode = mode;
var Segments = segments;
var isArray = isarray;
function setupFinderPattern(matrix, version2) {
  var size = matrix.size;
  var pos = FinderPattern.getPositions(version2);
  for (var i2 = 0; i2 < pos.length; i2++) {
    var row = pos[i2][0];
    var col = pos[i2][1];
    for (var r2 = -1; r2 <= 7; r2++) {
      if (row + r2 <= -1 || size <= row + r2)
        continue;
      for (var c2 = -1; c2 <= 7; c2++) {
        if (col + c2 <= -1 || size <= col + c2)
          continue;
        if (r2 >= 0 && r2 <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r2 === 0 || r2 === 6) || r2 >= 2 && r2 <= 4 && c2 >= 2 && c2 <= 4) {
          matrix.set(row + r2, col + c2, true, true);
        } else {
          matrix.set(row + r2, col + c2, false, true);
        }
      }
    }
  }
}
function setupTimingPattern(matrix) {
  var size = matrix.size;
  for (var r2 = 8; r2 < size - 8; r2++) {
    var value = r2 % 2 === 0;
    matrix.set(r2, 6, value, true);
    matrix.set(6, r2, value, true);
  }
}
function setupAlignmentPattern(matrix, version2) {
  var pos = AlignmentPattern.getPositions(version2);
  for (var i2 = 0; i2 < pos.length; i2++) {
    var row = pos[i2][0];
    var col = pos[i2][1];
    for (var r2 = -2; r2 <= 2; r2++) {
      for (var c2 = -2; c2 <= 2; c2++) {
        if (r2 === -2 || r2 === 2 || c2 === -2 || c2 === 2 || r2 === 0 && c2 === 0) {
          matrix.set(row + r2, col + c2, true, true);
        } else {
          matrix.set(row + r2, col + c2, false, true);
        }
      }
    }
  }
}
function setupVersionInfo(matrix, version2) {
  var size = matrix.size;
  var bits = Version.getEncodedBits(version2);
  var row, col, mod;
  for (var i2 = 0; i2 < 18; i2++) {
    row = Math.floor(i2 / 3);
    col = i2 % 3 + size - 8 - 3;
    mod = (bits >> i2 & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}
function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
  var size = matrix.size;
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
  var i2, mod;
  for (i2 = 0; i2 < 15; i2++) {
    mod = (bits >> i2 & 1) === 1;
    if (i2 < 6) {
      matrix.set(i2, 8, mod, true);
    } else if (i2 < 8) {
      matrix.set(i2 + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i2, 8, mod, true);
    }
    if (i2 < 8) {
      matrix.set(8, size - i2 - 1, mod, true);
    } else if (i2 < 9) {
      matrix.set(8, 15 - i2 - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i2 - 1, mod, true);
    }
  }
  matrix.set(size - 8, 8, 1, true);
}
function setupData(matrix, data) {
  var size = matrix.size;
  var inc = -1;
  var row = size - 1;
  var bitIndex = 7;
  var byteIndex = 0;
  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6)
      col--;
    while (true) {
      for (var c2 = 0; c2 < 2; c2++) {
        if (!matrix.isReserved(row, col - c2)) {
          var dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c2, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}
function createData(version2, errorCorrectionLevel2, segments2) {
  var buffer2 = new BitBuffer();
  segments2.forEach(function(data) {
    buffer2.put(data.mode.bit, 4);
    buffer2.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
    data.write(buffer2);
  });
  var totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (buffer2.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer2.put(0, 4);
  }
  while (buffer2.getLengthInBits() % 8 !== 0) {
    buffer2.putBit(0);
  }
  var remainingByte = (dataTotalCodewordsBits - buffer2.getLengthInBits()) / 8;
  for (var i2 = 0; i2 < remainingByte; i2++) {
    buffer2.put(i2 % 2 ? 17 : 236, 8);
  }
  return createCodewords(buffer2, version2, errorCorrectionLevel2);
}
function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
  var totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  var dataTotalCodewords = totalCodewords - ecTotalCodewords;
  var ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
  var blocksInGroup2 = totalCodewords % ecTotalBlocks;
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
  var rs = new ReedSolomonEncoder(ecCount);
  var offset = 0;
  var dcData = new Array(ecTotalBlocks);
  var ecData = new Array(ecTotalBlocks);
  var maxDataSize = 0;
  var buffer2 = BufferUtil.from(bitBuffer2.buffer);
  for (var b2 = 0; b2 < ecTotalBlocks; b2++) {
    var dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
    dcData[b2] = buffer2.slice(offset, offset + dataSize);
    ecData[b2] = rs.encode(dcData[b2]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }
  var data = BufferUtil.alloc(totalCodewords);
  var index2 = 0;
  var i2, r2;
  for (i2 = 0; i2 < maxDataSize; i2++) {
    for (r2 = 0; r2 < ecTotalBlocks; r2++) {
      if (i2 < dcData[r2].length) {
        data[index2++] = dcData[r2][i2];
      }
    }
  }
  for (i2 = 0; i2 < ecCount; i2++) {
    for (r2 = 0; r2 < ecTotalBlocks; r2++) {
      data[index2++] = ecData[r2][i2];
    }
  }
  return data;
}
function createSymbol(data, version2, errorCorrectionLevel2, maskPattern2) {
  var segments2;
  if (isArray(data)) {
    segments2 = Segments.fromArray(data);
  } else if (typeof data === "string") {
    var estimatedVersion = version2;
    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data);
      estimatedVersion = Version.getBestVersionForData(
        rawSegments,
        errorCorrectionLevel2
      );
    }
    segments2 = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error("Invalid data");
  }
  var bestVersion = Version.getBestVersionForData(
    segments2,
    errorCorrectionLevel2
  );
  if (!bestVersion) {
    throw new Error("The amount of data is too big to be stored in a QR Code");
  }
  if (!version2) {
    version2 = bestVersion;
  } else if (version2 < bestVersion) {
    throw new Error(
      "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
    );
  }
  var dataBits = createData(version2, errorCorrectionLevel2, segments2);
  var moduleCount = Utils$1.getSymbolSize(version2);
  var modules = new BitMatrix(moduleCount);
  setupFinderPattern(modules, version2);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version2);
  setupFormatInfo(modules, errorCorrectionLevel2, 0);
  if (version2 >= 7) {
    setupVersionInfo(modules, version2);
  }
  setupData(modules, dataBits);
  if (isNaN(maskPattern2)) {
    maskPattern2 = MaskPattern.getBestMask(
      modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
    );
  }
  MaskPattern.applyMask(maskPattern2, modules);
  setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
  return {
    modules,
    version: version2,
    errorCorrectionLevel: errorCorrectionLevel2,
    maskPattern: maskPattern2,
    segments: segments2
  };
}
qrcode.create = function create(data, options) {
  if (typeof data === "undefined" || data === "") {
    throw new Error("No input text");
  }
  var errorCorrectionLevel2 = ECLevel.M;
  var version2;
  var mask;
  if (typeof options !== "undefined") {
    errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version2 = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data, version2, errorCorrectionLevel2, mask);
};
var canvas = {};
var utils = {};
(function(exports) {
  function hex2rgba(hex) {
    if (typeof hex === "number") {
      hex = hex.toString();
    }
    if (typeof hex !== "string") {
      throw new Error("Color should be defined as hex string");
    }
    var hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error("Invalid hex color: " + hex);
    }
    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
        return [c2, c2];
      }));
    }
    if (hexCode.length === 6)
      hexCode.push("F", "F");
    var hexValue = parseInt(hexCode.join(""), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: "#" + hexCode.slice(0, 6).join("")
    };
  }
  exports.getOptions = function getOptions(options) {
    if (!options)
      options = {};
    if (!options.color)
      options.color = {};
    var margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    var width = options.width && options.width >= 21 ? options.width : void 0;
    var scale = options.scale || 4;
    return {
      width,
      scale: width ? 4 : scale,
      margin,
      color: {
        dark: hex2rgba(options.color.dark || "#000000ff"),
        light: hex2rgba(options.color.light || "#ffffffff")
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };
  exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };
  exports.getImageWidth = function getImageWidth(qrSize, opts) {
    var scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };
  exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    var size = qr.modules.size;
    var data = qr.modules.data;
    var scale = exports.getScale(size, opts);
    var symbolSize = Math.floor((size + opts.margin * 2) * scale);
    var scaledMargin = opts.margin * scale;
    var palette = [opts.color.light, opts.color.dark];
    for (var i2 = 0; i2 < symbolSize; i2++) {
      for (var j2 = 0; j2 < symbolSize; j2++) {
        var posDst = (i2 * symbolSize + j2) * 4;
        var pxColor = opts.color.light;
        if (i2 >= scaledMargin && j2 >= scaledMargin && i2 < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
          var iSrc = Math.floor((i2 - scaledMargin) / scale);
          var jSrc = Math.floor((j2 - scaledMargin) / scale);
          pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
})(utils);
(function(exports) {
  var Utils2 = utils;
  function clearCanvas(ctx, canvas2, size) {
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    if (!canvas2.style)
      canvas2.style = {};
    canvas2.height = size;
    canvas2.width = size;
    canvas2.style.height = size + "px";
    canvas2.style.width = size + "px";
  }
  function getCanvasElement() {
    try {
      return document.createElement("canvas");
    } catch (e2) {
      throw new Error("You need to specify a canvas element");
    }
  }
  exports.render = function render2(qrData, canvas2, options) {
    var opts = options;
    var canvasEl = canvas2;
    if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
      opts = canvas2;
      canvas2 = void 0;
    }
    if (!canvas2) {
      canvasEl = getCanvasElement();
    }
    opts = Utils2.getOptions(opts);
    var size = Utils2.getImageWidth(qrData.modules.size, opts);
    var ctx = canvasEl.getContext("2d");
    var image = ctx.createImageData(size, size);
    Utils2.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
  };
  exports.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
    var opts = options;
    if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
      opts = canvas2;
      canvas2 = void 0;
    }
    if (!opts)
      opts = {};
    var canvasEl = exports.render(qrData, canvas2, opts);
    var type = opts.type || "image/png";
    var rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
  };
})(canvas);
var svgTag = {};
var Utils = utils;
function getColorAttrib(color, attrib) {
  var alpha = color.a / 255;
  var str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x2, y2) {
  var str = cmd + x2;
  if (typeof y2 !== "undefined")
    str += " " + y2;
  return str;
}
function qrToPath(data, size, margin) {
  var path = "";
  var moveBy = 0;
  var newRow = false;
  var lineLength = 0;
  for (var i2 = 0; i2 < data.length; i2++) {
    var col = Math.floor(i2 % size);
    var row = Math.floor(i2 / size);
    if (!col && !newRow)
      newRow = true;
    if (data[i2]) {
      lineLength++;
      if (!(i2 > 0 && col > 0 && data[i2 - 1])) {
        path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data[i2 + 1])) {
        path += svgCmd("h", lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
svgTag.render = function render(qrData, options, cb) {
  var opts = Utils.getOptions(options);
  var size = qrData.modules.size;
  var data = qrData.modules.data;
  var qrcodesize = size + opts.margin * 2;
  var bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
  var path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  var viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
  var width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
  var svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
  if (typeof cb === "function") {
    cb(null, svgTag2);
  }
  return svgTag2;
};
var canPromise = canPromise$1;
var QRCode$1 = qrcode;
var CanvasRenderer = canvas;
var SvgRenderer = svgTag;
function renderCanvas(renderFunc, canvas2, text, opts, cb) {
  var args = [].slice.call(arguments, 1);
  var argsNum = args.length;
  var isLastArgCb = typeof args[argsNum - 1] === "function";
  if (!isLastArgCb && !canPromise()) {
    throw new Error("Callback required as last argument");
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error("Too few arguments provided");
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas2;
      canvas2 = opts = void 0;
    } else if (argsNum === 3) {
      if (canvas2.getContext && typeof cb === "undefined") {
        cb = opts;
        opts = void 0;
      } else {
        cb = opts;
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error("Too few arguments provided");
    }
    if (argsNum === 1) {
      text = canvas2;
      canvas2 = opts = void 0;
    } else if (argsNum === 2 && !canvas2.getContext) {
      opts = text;
      text = canvas2;
      canvas2 = void 0;
    }
    return new Promise(function(resolve, reject) {
      try {
        var data2 = QRCode$1.create(text, opts);
        resolve(renderFunc(data2, canvas2, opts));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  try {
    var data = QRCode$1.create(text, opts);
    cb(null, renderFunc(data, canvas2, opts));
  } catch (e2) {
    cb(e2);
  }
}
browser.create = QRCode$1.create;
browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
browser.toString = renderCanvas.bind(null, function(data, _2, opts) {
  return SvgRenderer.render(data, opts);
});
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i2 = 0; i2 < selection.rangeCount; i2++) {
    ranges.push(selection.getRangeAt(i2));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy$1(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.ariaHidden = "true";
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e2) {
      e2.stopPropagation();
      if (options.format) {
        e2.preventDefault();
        if (typeof e2.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e2.clipboardData.clearData();
          e2.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e2.preventDefault();
        options.onCopy(e2.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy$1;
var n, u$1, i$1, t$1, r$1, o$1, f$1, e$1 = {}, c$1 = [], s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function a$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h$1(n2, l2, u2) {
  var i2, t2 = arguments, r2 = {};
  for (i2 in l2)
    "key" !== i2 && "ref" !== i2 && (r2[i2] = l2[i2]);
  if (arguments.length > 3)
    for (u2 = [u2], i2 = 3; i2 < arguments.length; i2++)
      u2.push(t2[i2]);
  if (null != u2 && (r2.children = u2), "function" == typeof n2 && null != n2.defaultProps)
    for (i2 in n2.defaultProps)
      void 0 === r2[i2] && (r2[i2] = n2.defaultProps[i2]);
  return p$1(n2, r2, l2 && l2.key, l2 && l2.ref, null);
}
function p$1(l2, u2, i2, t2, r2) {
  var o2 = { type: l2, props: u2, key: i2, ref: t2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r2 };
  return null == r2 && (o2.__v = o2), n.vnode && n.vnode(o2), o2;
}
function y$1() {
  return {};
}
function d$1(n2) {
  return n2.children;
}
function m$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function w$2(n2, l2) {
  if (null == l2)
    return n2.__ ? w$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? w$2(n2) : null;
}
function k$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$1(n2);
  }
}
function g$1(l2) {
  (!l2.__d && (l2.__d = true) && u$1.push(l2) && !i$1++ || r$1 !== n.debounceRendering) && ((r$1 = n.debounceRendering) || t$1)(_$2);
}
function _$2() {
  for (var n2; i$1 = u$1.length; )
    n2 = u$1.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), u$1 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, r2, o2, f2;
      n3.__d && (o2 = (r2 = (l2 = n3).__v).__e, (f2 = l2.__P) && (u2 = [], (i2 = a$1({}, r2)).__v = i2, t2 = A$2(f2, r2, i2, l2.__n, void 0 !== f2.ownerSVGElement, null, u2, null == o2 ? w$2(r2) : o2), T$2(u2, r2), t2 != o2 && k$1(r2)));
    });
}
function b(n2, l2, u2, i2, t2, r2, o2, f2, s2) {
  var a2, h2, p2, y2, d2, m2, k2, g2 = u2 && u2.__k || c$1, _2 = g2.length;
  if (f2 == e$1 && (f2 = null != r2 ? r2[0] : _2 ? w$2(u2, 0) : null), a2 = 0, l2.__k = x$1(l2.__k, function(u3) {
    if (null != u3) {
      if (u3.__ = l2, u3.__b = l2.__b + 1, null === (p2 = g2[a2]) || p2 && u3.key == p2.key && u3.type === p2.type)
        g2[a2] = void 0;
      else
        for (h2 = 0; h2 < _2; h2++) {
          if ((p2 = g2[h2]) && u3.key == p2.key && u3.type === p2.type) {
            g2[h2] = void 0;
            break;
          }
          p2 = null;
        }
      if (y2 = A$2(n2, u3, p2 = p2 || e$1, i2, t2, r2, o2, f2, s2), (h2 = u3.ref) && p2.ref != h2 && (k2 || (k2 = []), p2.ref && k2.push(p2.ref, null, u3), k2.push(h2, u3.__c || y2, u3)), null != y2) {
        var c2;
        if (null == m2 && (m2 = y2), void 0 !== u3.__d)
          c2 = u3.__d, u3.__d = void 0;
        else if (r2 == p2 || y2 != f2 || null == y2.parentNode) {
          n:
            if (null == f2 || f2.parentNode !== n2)
              n2.appendChild(y2), c2 = null;
            else {
              for (d2 = f2, h2 = 0; (d2 = d2.nextSibling) && h2 < _2; h2 += 2)
                if (d2 == y2)
                  break n;
              n2.insertBefore(y2, f2), c2 = f2;
            }
          "option" == l2.type && (n2.value = "");
        }
        f2 = void 0 !== c2 ? c2 : y2.nextSibling, "function" == typeof l2.type && (l2.__d = f2);
      } else
        f2 && p2.__e == f2 && f2.parentNode != n2 && (f2 = w$2(p2));
    }
    return a2++, u3;
  }), l2.__e = m2, null != r2 && "function" != typeof l2.type)
    for (a2 = r2.length; a2--; )
      null != r2[a2] && v$1(r2[a2]);
  for (a2 = _2; a2--; )
    null != g2[a2] && D$1(g2[a2], g2[a2]);
  if (k2)
    for (a2 = 0; a2 < k2.length; a2++)
      j$1(k2[a2], k2[++a2], k2[++a2]);
}
function x$1(n2, l2, u2) {
  if (null == u2 && (u2 = []), null == n2 || "boolean" == typeof n2)
    l2 && u2.push(l2(null));
  else if (Array.isArray(n2))
    for (var i2 = 0; i2 < n2.length; i2++)
      x$1(n2[i2], l2, u2);
  else
    u2.push(l2 ? l2("string" == typeof n2 || "number" == typeof n2 ? p$1(null, n2, null, null, n2) : null != n2.__e || null != n2.__c ? p$1(n2.type, n2.props, n2.key, null, n2.__v) : n2) : n2);
  return u2;
}
function P$1(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || N$1(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || N$1(n2, r2, l2[r2], u2[r2], i2);
}
function C$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = "number" == typeof u2 && false === s$1.test(l2) ? u2 + "px" : null == u2 ? "" : u2;
}
function N$1(n2, l2, u2, i2, t2) {
  var r2, o2, f2, e2, c2;
  if (t2 ? "className" === l2 && (l2 = "class") : "class" === l2 && (l2 = "className"), "style" === l2)
    if (r2 = n2.style, "string" == typeof u2)
      r2.cssText = u2;
    else {
      if ("string" == typeof i2 && (r2.cssText = "", i2 = null), i2)
        for (e2 in i2)
          u2 && e2 in u2 || C$1(r2, e2, "");
      if (u2)
        for (c2 in u2)
          i2 && u2[c2] === i2[c2] || C$1(r2, c2, u2[c2]);
    }
  else
    "o" === l2[0] && "n" === l2[1] ? (o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), f2 = l2.toLowerCase(), l2 = (f2 in n2 ? f2 : l2).slice(2), u2 ? (i2 || n2.addEventListener(l2, z$1, o2), (n2.l || (n2.l = {}))[l2] = u2) : n2.removeEventListener(l2, z$1, o2)) : "list" !== l2 && "tagName" !== l2 && "form" !== l2 && "type" !== l2 && "size" !== l2 && !t2 && l2 in n2 ? n2[l2] = null == u2 ? "" : u2 : "function" != typeof u2 && "dangerouslySetInnerHTML" !== l2 && (l2 !== (l2 = l2.replace(/^xlink:?/, "")) ? null == u2 || false === u2 ? n2.removeAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase()) : n2.setAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase(), u2) : null == u2 || false === u2 && !/^ar/.test(l2) ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
}
function z$1(l2) {
  this.l[l2.type](n.event ? n.event(l2) : l2);
}
function A$2(l2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, v2, h2, p2, y2, w2, k2, g2, _2, x2, P2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  (s2 = n.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof P2) {
        if (g2 = u2.props, _2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? _2 ? _2.props.value : s2.__ : t2, i2.__c ? k2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new m$1(g2, x2), v2.constructor = P2, v2.render = E$2), _2 && _2.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t2, h2 = v2.__d = true, v2.__h = []), null == v2.__s && (v2.__s = v2.state), null != P2.getDerivedStateFromProps && (v2.__s == v2.state && (v2.__s = a$1({}, v2.__s)), a$1(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), p2 = v2.props, y2 = v2.state, h2)
          null == P2.getDerivedStateFromProps && null != v2.componentWillMount && v2.componentWillMount(), null != v2.componentDidMount && v2.__h.push(v2.componentDidMount);
        else {
          if (null == P2.getDerivedStateFromProps && g2 !== p2 && null != v2.componentWillReceiveProps && v2.componentWillReceiveProps(g2, x2), !v2.__e && null != v2.shouldComponentUpdate && false === v2.shouldComponentUpdate(g2, v2.__s, x2) || u2.__v === i2.__v && !v2.__) {
            for (v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, v2.__h.length && f2.push(v2), s2 = 0; s2 < u2.__k.length; s2++)
              u2.__k[s2] && (u2.__k[s2].__ = u2);
            break n;
          }
          null != v2.componentWillUpdate && v2.componentWillUpdate(g2, v2.__s, x2), null != v2.componentDidUpdate && v2.__h.push(function() {
            v2.componentDidUpdate(p2, y2, w2);
          });
        }
        v2.context = x2, v2.props = g2, v2.state = v2.__s, (s2 = n.__r) && s2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, s2 = v2.render(v2.props, v2.state, v2.context), u2.__k = null != s2 && s2.type == d$1 && null == s2.key ? s2.props.children : Array.isArray(s2) ? s2 : [s2], null != v2.getChildContext && (t2 = a$1(a$1({}, t2), v2.getChildContext())), h2 || null == v2.getSnapshotBeforeUpdate || (w2 = v2.getSnapshotBeforeUpdate(p2, y2)), b(l2, u2, i2, t2, r2, o2, f2, e2, c2), v2.base = u2.__e, v2.__h.length && f2.push(v2), k2 && (v2.__E = v2.__ = null), v2.__e = false;
      } else
        null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = $$1(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = n.diffed) && s2(u2);
  } catch (l3) {
    u2.__v = null, n.__e(l3, u2, i2);
  }
  return u2.__e;
}
function T$2(l2, u2) {
  n.__c && n.__c(u2, l2), l2.some(function(u3) {
    try {
      l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
        n2.call(u3);
      });
    } catch (l3) {
      n.__e(l3, u3.__v);
    }
  });
}
function $$1(n2, l2, u2, i2, t2, r2, o2, f2) {
  var s2, a2, v2, h2, p2, y2 = u2.props, d2 = l2.props;
  if (t2 = "svg" === l2.type || t2, null != r2) {
    for (s2 = 0; s2 < r2.length; s2++)
      if (null != (a2 = r2[s2]) && ((null === l2.type ? 3 === a2.nodeType : a2.localName === l2.type) || n2 == a2)) {
        n2 = a2, r2[s2] = null;
        break;
      }
  }
  if (null == n2) {
    if (null === l2.type)
      return document.createTextNode(d2);
    n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", l2.type) : document.createElement(l2.type, d2.is && { is: d2.is }), r2 = null, f2 = false;
  }
  if (null === l2.type)
    y2 !== d2 && n2.data != d2 && (n2.data = d2);
  else {
    if (null != r2 && (r2 = c$1.slice.call(n2.childNodes)), v2 = (y2 = u2.props || e$1).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !f2) {
      if (y2 === e$1)
        for (y2 = {}, p2 = 0; p2 < n2.attributes.length; p2++)
          y2[n2.attributes[p2].name] = n2.attributes[p2].value;
      (h2 || v2) && (h2 && v2 && h2.__html == v2.__html || (n2.innerHTML = h2 && h2.__html || ""));
    }
    P$1(n2, d2, y2, t2, f2), h2 ? l2.__k = [] : (l2.__k = l2.props.children, b(n2, l2, u2, i2, "foreignObject" !== l2.type && t2, r2, o2, e$1, f2)), f2 || ("value" in d2 && void 0 !== (s2 = d2.value) && s2 !== n2.value && N$1(n2, "value", s2, y2.value, false), "checked" in d2 && void 0 !== (s2 = d2.checked) && s2 !== n2.checked && N$1(n2, "checked", s2, y2.checked, false));
  }
  return n2;
}
function j$1(l2, u2, i2) {
  try {
    "function" == typeof l2 ? l2(u2) : l2.current = u2;
  } catch (l3) {
    n.__e(l3, i2);
  }
}
function D$1(l2, u2, i2) {
  var t2, r2, o2;
  if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || j$1(t2, null, u2)), i2 || "function" == typeof l2.type || (i2 = null != (r2 = l2.__e)), l2.__e = l2.__d = void 0, null != (t2 = l2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (l3) {
        n.__e(l3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = l2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && D$1(t2[o2], u2, i2);
  null != r2 && v$1(r2);
}
function E$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function H$1(l2, u2, i2) {
  var t2, r2, f2;
  n.__ && n.__(l2, u2), r2 = (t2 = i2 === o$1) ? null : i2 && i2.__k || u2.__k, l2 = h$1(d$1, null, [l2]), f2 = [], A$2(u2, (t2 ? u2 : i2 || u2).__k = l2, r2 || e$1, e$1, void 0 !== u2.ownerSVGElement, i2 && !t2 ? [i2] : r2 ? null : c$1.slice.call(u2.childNodes), f2, i2 || e$1, t2), T$2(f2, l2);
}
function I$1(n2, l2) {
  H$1(n2, l2, o$1);
}
function L$1(n2, l2) {
  var u2, i2;
  for (i2 in l2 = a$1(a$1({}, n2.props), l2), arguments.length > 2 && (l2.children = c$1.slice.call(arguments, 2)), u2 = {}, l2)
    "key" !== i2 && "ref" !== i2 && (u2[i2] = l2[i2]);
  return p$1(n2.type, u2, l2.key || n2.key, l2.ref || n2.ref, null);
}
function M$1(n2) {
  var l2 = {}, u2 = { __c: "__cC" + f$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var i2, t2 = this;
    return this.getChildContext || (i2 = [], this.getChildContext = function() {
      return l2[u2.__c] = t2, l2;
    }, this.shouldComponentUpdate = function(n4) {
      t2.props.value !== n4.value && i2.some(function(l3) {
        l3.context = n4.value, g$1(l3);
      });
    }, this.sub = function(n4) {
      i2.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        i2.splice(i2.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Consumer.contextType = u2, u2.Provider.__ = u2, u2;
}
n = { __e: function(n2, l2) {
  for (var u2, i2; l2 = l2.__; )
    if ((u2 = l2.__c) && !u2.__)
      try {
        if (u2.constructor && null != u2.constructor.getDerivedStateFromError && (i2 = true, u2.setState(u2.constructor.getDerivedStateFromError(n2))), null != u2.componentDidCatch && (i2 = true, u2.componentDidCatch(n2)), i2)
          return g$1(u2.__E = u2);
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, m$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n2 && (n2 = n2(u2, this.props)), n2 && a$1(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), g$1(this));
}, m$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), g$1(this));
}, m$1.prototype.render = d$1, u$1 = [], i$1 = 0, t$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o$1 = e$1, f$1 = 0;
var t, u, r, i = 0, o = [], c = n.__r, f = n.diffed, e = n.__c, a = n.unmount;
function v(t2, r2) {
  n.__h && n.__h(u, t2, i || r2), i = 0;
  var o2 = u.__H || (u.__H = { __: [], __h: [] });
  return t2 >= o2.__.length && o2.__.push({}), o2.__[t2];
}
function m(n2) {
  return i = 1, p(E$1, n2);
}
function p(n2, r2, i2) {
  var o2 = v(t++, 2);
  return o2.__c || (o2.__c = u, o2.__ = [i2 ? i2(r2) : E$1(void 0, r2), function(t2) {
    var u2 = n2(o2.__[0], t2);
    o2.__[0] !== u2 && (o2.__[0] = u2, o2.__c.setState({}));
  }]), o2.__;
}
function l(r2, i2) {
  var o2 = v(t++, 3);
  !n.__s && x(o2.__H, i2) && (o2.__ = r2, o2.__H = i2, u.__H.__h.push(o2));
}
function y(r2, i2) {
  var o2 = v(t++, 4);
  !n.__s && x(o2.__H, i2) && (o2.__ = r2, o2.__H = i2, u.__h.push(o2));
}
function d(n2) {
  return i = 5, h(function() {
    return { current: n2 };
  }, []);
}
function s(n2, t2, u2) {
  i = 6, y(function() {
    "function" == typeof n2 ? n2(t2()) : n2 && (n2.current = t2());
  }, null == u2 ? u2 : u2.concat(n2));
}
function h(n2, u2) {
  var r2 = v(t++, 7);
  return x(r2.__H, u2) ? (r2.__H = u2, r2.__h = n2, r2.__ = n2()) : r2.__;
}
function T$1(n2, t2) {
  return i = 8, h(function() {
    return n2;
  }, t2);
}
function w$1(n2) {
  var r2 = u.context[n2.__c], i2 = v(t++, 9);
  return i2.__c = n2, r2 ? (null == i2.__ && (i2.__ = true, r2.sub(u)), r2.props.value) : n2.__;
}
function A$1(t2, u2) {
  n.useDebugValue && n.useDebugValue(u2 ? u2(t2) : t2);
}
function F$1(n2) {
  var r2 = v(t++, 10), i2 = m();
  return r2.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n3) {
    r2.__ && r2.__(n3), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function _$1() {
  o.some(function(t2) {
    if (t2.__P)
      try {
        t2.__H.__h.forEach(g), t2.__H.__h.forEach(q$1), t2.__H.__h = [];
      } catch (u2) {
        return t2.__H.__h = [], n.__e(u2, t2.__v), true;
      }
  }), o = [];
}
function g(n2) {
  n2.t && n2.t();
}
function q$1(n2) {
  var t2 = n2.__();
  "function" == typeof t2 && (n2.t = t2);
}
function x(n2, t2) {
  return !n2 || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function E$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
n.__r = function(n2) {
  c && c(n2), t = 0, (u = n2.__c).__H && (u.__H.__h.forEach(g), u.__H.__h.forEach(q$1), u.__H.__h = []);
}, n.diffed = function(t2) {
  f && f(t2);
  var u2 = t2.__c;
  if (u2) {
    var i2 = u2.__H;
    i2 && i2.__h.length && (1 !== o.push(u2) && r === n.requestAnimationFrame || ((r = n.requestAnimationFrame) || function(n2) {
      var t3, u3 = function() {
        clearTimeout(r2), cancelAnimationFrame(t3), setTimeout(n2);
      }, r2 = setTimeout(u3, 100);
      "undefined" != typeof window && (t3 = requestAnimationFrame(u3));
    })(_$1));
  }
}, n.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(g), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || q$1(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], n.__e(r2, t3.__v);
    }
  }), e && e(t2, u2);
}, n.unmount = function(t2) {
  a && a(t2);
  var u2 = t2.__c;
  if (u2) {
    var r2 = u2.__H;
    if (r2)
      try {
        r2.__.forEach(function(n2) {
          return n2.t && n2.t();
        });
      } catch (t3) {
        n.__e(t3, u2.__v);
      }
  }
};
function E(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function w(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
var C = function(n2) {
  var t2, e2;
  function r2(t3) {
    var e3;
    return (e3 = n2.call(this, t3) || this).isPureReactComponent = true, e3;
  }
  return e2 = n2, (t2 = r2).prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, t2.__proto__ = e2, r2.prototype.shouldComponentUpdate = function(n3, t3) {
    return w(this.props, n3) || w(this.state, t3);
  }, r2;
}(m$1);
function _(n2, t2) {
  function e2(n3) {
    var e3 = this.props.ref, r3 = e3 == n3.ref;
    return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t2 ? !t2(this.props, n3) || !r3 : w(this.props, n3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = e2, h$1(n2, E({}, t3));
  }
  return r2.prototype.isReactComponent = true, r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.t = true, r2;
}
var A = n.__b;
function S(n2) {
  function t2(t3) {
    var e2 = E({}, t3);
    return delete e2.ref, n2(e2, t3.ref);
  }
  return t2.prototype.isReactComponent = t2.t = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
n.__b = function(n2) {
  n2.type && n2.type.t && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), A && A(n2);
};
var k = function(n2, t2) {
  return n2 ? x$1(n2).reduce(function(n3, e2, r2) {
    return n3.concat(t2(e2, r2));
  }, []) : null;
}, R = { map: k, forEach: k, count: function(n2) {
  return n2 ? x$1(n2).length : 0;
}, only: function(n2) {
  if (1 !== (n2 = x$1(n2)).length)
    throw new Error("Children.only() expects only one child.");
  return n2[0];
}, toArray: x$1 }, F = n.__e;
function N(n2) {
  return n2 && ((n2 = E({}, n2)).__c = null, n2.__k = n2.__k && n2.__k.map(N)), n2;
}
function U() {
  this.__u = 0, this.o = null, this.__b = null;
}
function M(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.u && t2.u(n2);
}
function L(n2) {
  var t2, e2, r2;
  function o2(o3) {
    if (t2 || (t2 = n2()).then(function(n3) {
      e2 = n3.default || n3;
    }, function(n3) {
      r2 = n3;
    }), r2)
      throw r2;
    if (!e2)
      throw t2;
    return h$1(e2, o3);
  }
  return o2.displayName = "Lazy", o2.t = true, o2;
}
function O() {
  this.i = null, this.l = null;
}
n.__e = function(n2, t2, e2) {
  if (n2.then) {
    for (var r2, o2 = t2; o2 = o2.__; )
      if ((r2 = o2.__c) && r2.__c)
        return r2.__c(n2, t2.__c);
  }
  F(n2, t2, e2);
}, (U.prototype = new m$1()).__c = function(n2, t2) {
  var e2 = this;
  null == e2.o && (e2.o = []), e2.o.push(t2);
  var r2 = M(e2.__v), o2 = false, u2 = function() {
    o2 || (o2 = true, r2 ? r2(i2) : i2());
  };
  t2.__c = t2.componentWillUnmount, t2.componentWillUnmount = function() {
    u2(), t2.__c && t2.__c();
  };
  var i2 = function() {
    var n3;
    if (!--e2.__u)
      for (e2.__v.__k[0] = e2.state.u, e2.setState({ u: e2.__b = null }); n3 = e2.o.pop(); )
        n3.forceUpdate();
  };
  e2.__u++ || e2.setState({ u: e2.__b = e2.__v.__k[0] }), n2.then(u2, u2);
}, U.prototype.render = function(n2, t2) {
  return this.__b && (this.__v.__k[0] = N(this.__b), this.__b = null), [h$1(m$1, null, t2.u ? null : n2.children), t2.u && n2.fallback];
};
var P = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.l.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size))
    for (e2 = n2.i; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.i = e2 = e2[2];
    }
};
(O.prototype = new m$1()).u = function(n2) {
  var t2 = this, e2 = M(t2.__v), r2 = t2.l.get(n2);
  return r2[0]++, function(o2) {
    var u2 = function() {
      t2.props.revealOrder ? (r2.push(o2), P(t2, n2, r2)) : o2();
    };
    e2 ? e2(u2) : u2();
  };
}, O.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t2 = x$1(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.l.set(t2[e2], this.i = [1, 0, this.i]);
  return n2.children;
}, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
  var n2 = this;
  n2.l.forEach(function(t2, e2) {
    P(n2, e2, t2);
  });
};
var W = function() {
  function n2() {
  }
  var t2 = n2.prototype;
  return t2.getChildContext = function() {
    return this.props.context;
  }, t2.render = function(n3) {
    return n3.children;
  }, n2;
}();
function j(n2) {
  var t2 = this, e2 = n2.container, r2 = h$1(W, { context: t2.context }, n2.vnode);
  return t2.s && t2.s !== e2 && (t2.v.parentNode && t2.s.removeChild(t2.v), D$1(t2.h), t2.p = false), n2.vnode ? t2.p ? (e2.__k = t2.__k, H$1(r2, e2), t2.__k = e2.__k) : (t2.v = document.createTextNode(""), I$1("", e2), e2.appendChild(t2.v), t2.p = true, t2.s = e2, H$1(r2, e2, t2.v), t2.__k = t2.v.__k) : t2.p && (t2.v.parentNode && t2.s.removeChild(t2.v), D$1(t2.h)), t2.h = r2, t2.componentWillUnmount = function() {
    t2.v.parentNode && t2.s.removeChild(t2.v), D$1(t2.h);
  }, null;
}
function z(n2, t2) {
  return h$1(j, { vnode: n2, container: t2 });
}
var D = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
m$1.prototype.isReactComponent = {};
var H = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
function T(n2, t2, e2) {
  if (null == t2.__k)
    for (; t2.firstChild; )
      t2.removeChild(t2.firstChild);
  return H$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function V(n2, t2, e2) {
  return I$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
var Z = n.event;
function I(n2, t2) {
  n2["UNSAFE_" + t2] && !n2[t2] && Object.defineProperty(n2, t2, { configurable: false, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n3) {
    this["UNSAFE_" + t2] = n3;
  } });
}
n.event = function(n2) {
  Z && (n2 = Z(n2)), n2.persist = function() {
  };
  var t2 = false, e2 = false, r2 = n2.stopPropagation;
  n2.stopPropagation = function() {
    r2.call(n2), t2 = true;
  };
  var o2 = n2.preventDefault;
  return n2.preventDefault = function() {
    o2.call(n2), e2 = true;
  }, n2.isPropagationStopped = function() {
    return t2;
  }, n2.isDefaultPrevented = function() {
    return e2;
  }, n2.nativeEvent = n2;
};
var $ = { configurable: true, get: function() {
  return this.class;
} }, q = n.vnode;
n.vnode = function(n2) {
  n2.$$typeof = H;
  var t2 = n2.type, e2 = n2.props;
  if (t2) {
    if (e2.class != e2.className && ($.enumerable = "className" in e2, null != e2.className && (e2.class = e2.className), Object.defineProperty(e2, "className", $)), "function" != typeof t2) {
      var r2, o2, u2;
      for (u2 in e2.defaultValue && void 0 !== e2.value && (e2.value || 0 === e2.value || (e2.value = e2.defaultValue), delete e2.defaultValue), Array.isArray(e2.value) && e2.multiple && "select" === t2 && (x$1(e2.children).forEach(function(n3) {
        -1 != e2.value.indexOf(n3.props.value) && (n3.props.selected = true);
      }), delete e2.value), e2)
        if (r2 = D.test(u2))
          break;
      if (r2)
        for (u2 in o2 = n2.props = {}, e2)
          o2[D.test(u2) ? u2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u2] = e2[u2];
    }
    !function(t3) {
      var e3 = n2.type, r3 = n2.props;
      if (r3 && "string" == typeof e3) {
        var o3 = {};
        for (var u3 in r3)
          /^on(Ani|Tra|Tou)/.test(u3) && (r3[u3.toLowerCase()] = r3[u3], delete r3[u3]), o3[u3.toLowerCase()] = u3;
        if (o3.ondoubleclick && (r3.ondblclick = r3[o3.ondoubleclick], delete r3[o3.ondoubleclick]), o3.onbeforeinput && (r3.onbeforeinput = r3[o3.onbeforeinput], delete r3[o3.onbeforeinput]), o3.onchange && ("textarea" === e3 || "input" === e3.toLowerCase() && !/^fil|che|ra/i.test(r3.type))) {
          var i2 = o3.oninput || "oninput";
          r3[i2] || (r3[i2] = r3[o3.onchange], delete r3[o3.onchange]);
        }
      }
    }(), "function" == typeof t2 && !t2.m && t2.prototype && (I(t2.prototype, "componentWillMount"), I(t2.prototype, "componentWillReceiveProps"), I(t2.prototype, "componentWillUpdate"), t2.m = true);
  }
  q && q(n2);
};
var B = "16.8.0";
function G(n2) {
  return h$1.bind(null, n2);
}
function J(n2) {
  return !!n2 && n2.$$typeof === H;
}
function K(n2) {
  return J(n2) ? L$1.apply(null, arguments) : n2;
}
function Q(n2) {
  return !!n2.__k && (H$1(null, n2), true);
}
function X(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var Y = function(n2, t2) {
  return n2(t2);
};
const compat_module = { useState: m, useReducer: p, useEffect: l, useLayoutEffect: y, useRef: d, useImperativeHandle: s, useMemo: h, useCallback: T$1, useContext: w$1, useDebugValue: A$1, version: "16.8.0", Children: R, render: T, hydrate: T, unmountComponentAtNode: Q, createPortal: z, createElement: h$1, createContext: M$1, createFactory: G, cloneElement: K, createRef: y$1, Fragment: d$1, isValidElement: J, findDOMNode: X, Component: m$1, PureComponent: C, memo: _, forwardRef: S, unstable_batchedUpdates: Y, Suspense: U, SuspenseList: O, lazy: L };
const compat_module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: R,
  Component: m$1,
  Fragment: d$1,
  PureComponent: C,
  Suspense: U,
  SuspenseList: O,
  cloneElement: K,
  createContext: M$1,
  createElement: h$1,
  createFactory: G,
  createPortal: z,
  createRef: y$1,
  default: compat_module,
  findDOMNode: X,
  forwardRef: S,
  hydrate: V,
  isValidElement: J,
  lazy: L,
  memo: _,
  render: T,
  unmountComponentAtNode: Q,
  unstable_batchedUpdates: Y,
  useCallback: T$1,
  useContext: w$1,
  useDebugValue: A$1,
  useEffect: l,
  useErrorBoundary: F$1,
  useImperativeHandle: s,
  useLayoutEffect: y,
  useMemo: h,
  useReducer: p,
  useRef: d,
  useState: m,
  version: B
}, Symbol.toStringTag, { value: "Module" }));
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(compat_module$1);
function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var browserUtils = require$$0;
var QRCode = _interopDefault(browser);
var copy2 = _interopDefault(copyToClipboard);
var React = require$$3;
function open(uri) {
  QRCode.toString(uri, {
    type: "terminal"
  }).then(console.log);
}
var WALLETCONNECT_STYLE_SHEET = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e2) {
    return recover(e2);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E";
var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
var ANIMATION_DURATION = 300;
var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";
function Header(props) {
  return React.createElement("div", {
    className: "walletconnect-modal__header"
  }, React.createElement("img", {
    src: WALLETCONNECT_LOGO_SVG_URL,
    className: "walletconnect-modal__headerLogo"
  }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: props.onClose
  }, React.createElement("div", {
    id: WALLETCONNECT_CLOSE_BUTTON_ID,
    className: "walletconnect-modal__close__icon"
  }, React.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), React.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}
function ConnectButton(props) {
  return React.createElement("a", {
    className: "walletconnect-connect__button",
    href: props.href,
    id: WALLETCONNECT_CONNECT_BUTTON_ID + "-" + props.name,
    onClick: props.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: props.color
    },
    target: "_blank"
  }, props.name);
}
var CARET_SVG_URL = "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";
function WalletButton(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  return React.createElement("a", {
    className: "walletconnect-modal__base__row",
    href,
    onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, name), React.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, React.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: "url('" + logo + "') " + color,
      backgroundSize: "100%"
    }
  }), React.createElement("img", {
    src: CARET_SVG_URL,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}
function WalletIcon(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  var fontSize = window.innerWidth < 768 ? (name.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
  return React.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href,
    onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: "url('" + logo + "') " + color,
      backgroundSize: "100%"
    }
  }), React.createElement("div", {
    style: {
      fontSize
    },
    className: "walletconnect-connect__button__text"
  }, name));
}
var GRID_MIN_COUNT = 5;
var LINKS_PER_PAGE = 12;
function LinkDisplay(props) {
  var android = browserUtils.isAndroid();
  var ref = React.useState("");
  var input = ref[0];
  var setInput = ref[1];
  var ref$1 = React.useState("");
  var filter = ref$1[0];
  var setFilter = ref$1[1];
  var ref$2 = React.useState(1);
  var page = ref$2[0];
  var setPage = ref$2[1];
  var links = filter ? props.links.filter(function(link) {
    return link.name.toLowerCase().includes(filter.toLowerCase());
  }) : props.links;
  var errorMessage = props.errorMessage;
  var grid = filter || links.length > GRID_MIN_COUNT;
  var pages = Math.ceil(links.length / LINKS_PER_PAGE);
  var range = [(page - 1) * LINKS_PER_PAGE + 1, page * LINKS_PER_PAGE];
  var pageLinks = links.length ? links.filter(function(_2, index2) {
    return index2 + 1 >= range[0] && index2 + 1 <= range[1];
  }) : [];
  var hasPaging = !!(!android && pages > 1);
  var filterTimeout = void 0;
  function handleInput(e2) {
    setInput(e2.target.value);
    clearTimeout(filterTimeout);
    if (e2.target.value) {
      filterTimeout = setTimeout(function() {
        setFilter(e2.target.value);
        setPage(1);
      }, 1e3);
    } else {
      setInput("");
      setFilter("");
      setPage(1);
    }
  }
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, android ? props.text.connect_mobile_wallet : props.text.choose_preferred_wallet), !android && React.createElement("input", {
    className: "walletconnect-search__input",
    placeholder: "Search",
    value: input,
    onChange: handleInput
  }), React.createElement("div", {
    className: "walletconnect-connect__buttons__wrapper" + (android ? "__android" : grid && links.length ? "__wrap" : "")
  }, !android ? pageLinks.length ? pageLinks.map(function(entry) {
    var color = entry.color;
    var name = entry.name;
    var shortName = entry.shortName;
    var logo = entry.logo;
    var href = browserUtils.formatIOSMobile(props.uri, entry);
    var handleClickIOS = React.useCallback(function() {
      browserUtils.saveMobileLinkInfo({
        name,
        href
      });
    }, [pageLinks]);
    return !grid ? React.createElement(WalletButton, {
      color,
      href,
      name,
      logo,
      onClick: handleClickIOS
    }) : React.createElement(WalletIcon, {
      color,
      href,
      name: shortName || name,
      logo,
      onClick: handleClickIOS
    });
  }) : React.createElement(React.Fragment, null, React.createElement("p", null, errorMessage.length ? props.errorMessage : !!props.links.length && !links.length ? props.text.no_wallets_found : props.text.loading)) : React.createElement(ConnectButton, {
    name: props.text.connect,
    color: DEFAULT_BUTTON_COLOR,
    href: props.uri,
    onClick: React.useCallback(function() {
      browserUtils.saveMobileLinkInfo({
        name: "Unknown",
        href: props.uri
      });
    }, [])
  })), hasPaging && React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, Array(pages).fill(0).map(function(_2, index2) {
    var pageNumber = index2 + 1;
    var selected = page === pageNumber;
    return React.createElement("a", {
      style: {
        margin: "auto 10px",
        fontWeight: selected ? "bold" : "normal"
      },
      onClick: function() {
        return setPage(pageNumber);
      }
    }, pageNumber);
  })));
}
function Notification(props) {
  var show = !!props.message.trim();
  return React.createElement("div", {
    className: "walletconnect-qrcode__notification" + (show ? " notification__show" : "")
  }, props.message);
}
var formatQRCodeImage = function(data) {
  try {
    var result = "";
    return Promise.resolve(QRCode.toString(data, {
      margin: 0,
      type: "svg"
    })).then(function(dataString) {
      if (typeof dataString === "string") {
        result = dataString.replace("<svg", '<svg class="walletconnect-qrcode__image"');
      }
      return result;
    });
  } catch (e2) {
    return Promise.reject(e2);
  }
};
function QRCodeDisplay(props) {
  var ref = React.useState("");
  var notification = ref[0];
  var setNotification = ref[1];
  var ref$1 = React.useState("");
  var svg = ref$1[0];
  var setSvg = ref$1[1];
  React.useEffect(function() {
    try {
      return Promise.resolve(formatQRCodeImage(props.uri)).then(function(_formatQRCodeImage) {
        setSvg(_formatQRCodeImage);
      });
    } catch (e2) {
      Promise.reject(e2);
    }
  }, []);
  var copyToClipboard2 = function() {
    var success = copy2(props.uri);
    if (success) {
      setNotification(props.text.copied_to_clipboard);
      setInterval(function() {
        return setNotification("");
      }, 1200);
    } else {
      setNotification("Error");
      setInterval(function() {
        return setNotification("");
      }, 1200);
    }
  };
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }), React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, React.createElement("a", {
    onClick: copyToClipboard2
  }, props.text.copy_to_clipboard)), React.createElement(Notification, {
    message: notification
  }));
}
function Modal(props) {
  var android = browserUtils.isAndroid();
  var mobile = browserUtils.isMobile();
  var whitelist = mobile ? props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks ? props.qrcodeModalOptions.mobileLinks : void 0 : props.qrcodeModalOptions && props.qrcodeModalOptions.desktopLinks ? props.qrcodeModalOptions.desktopLinks : void 0;
  var ref = React.useState(false);
  var loading = ref[0];
  var setLoading = ref[1];
  var ref$1 = React.useState(false);
  var fetched = ref$1[0];
  var setFetched = ref$1[1];
  var ref$2 = React.useState(!mobile);
  var displayQRCode = ref$2[0];
  var setDisplayQRCode = ref$2[1];
  var displayProps = {
    mobile,
    text: props.text,
    uri: props.uri,
    qrcodeModalOptions: props.qrcodeModalOptions
  };
  var ref$3 = React.useState("");
  var singleLinkHref = ref$3[0];
  var setSingleLinkHref = ref$3[1];
  var ref$4 = React.useState(false);
  var hasSingleLink = ref$4[0];
  var setHasSingleLink = ref$4[1];
  var ref$5 = React.useState([]);
  var links = ref$5[0];
  var setLinks = ref$5[1];
  var ref$6 = React.useState("");
  var errorMessage = ref$6[0];
  var setErrorMessage = ref$6[1];
  var getLinksIfNeeded = function() {
    if (fetched || loading || whitelist && !whitelist.length || links.length > 0) {
      return;
    }
    React.useEffect(function() {
      var initLinks = function() {
        try {
          if (android) {
            return Promise.resolve();
          }
          setLoading(true);
          var _temp = _catch(function() {
            var url = props.qrcodeModalOptions && props.qrcodeModalOptions.registryUrl ? props.qrcodeModalOptions.registryUrl : browserUtils.getWalletRegistryUrl();
            return Promise.resolve(fetch(url)).then(function(registryResponse) {
              return Promise.resolve(registryResponse.json()).then(function(_registryResponse$jso) {
                var registry = _registryResponse$jso.listings;
                var platform = mobile ? "mobile" : "desktop";
                var _links = browserUtils.getMobileLinkRegistry(browserUtils.formatMobileRegistry(registry, platform), whitelist);
                setLoading(false);
                setFetched(true);
                setErrorMessage(!_links.length ? props.text.no_supported_wallets : "");
                setLinks(_links);
                var hasSingleLink2 = _links.length === 1;
                if (hasSingleLink2) {
                  setSingleLinkHref(browserUtils.formatIOSMobile(props.uri, _links[0]));
                  setDisplayQRCode(true);
                }
                setHasSingleLink(hasSingleLink2);
              });
            });
          }, function(e2) {
            setLoading(false);
            setFetched(true);
            setErrorMessage(props.text.something_went_wrong);
            console.error(e2);
          });
          return Promise.resolve(_temp && _temp.then ? _temp.then(function() {
          }) : void 0);
        } catch (e2) {
          return Promise.reject(e2);
        }
      };
      initLinks();
    });
  };
  getLinksIfNeeded();
  var rightSelected = mobile ? displayQRCode : !displayQRCode;
  return React.createElement("div", {
    id: WALLETCONNECT_MODAL_ID,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, React.createElement("div", {
    className: "walletconnect-modal__base"
  }, React.createElement(Header, {
    onClose: props.onClose
  }), hasSingleLink && displayQRCode ? React.createElement("div", {
    className: "walletconnect-modal__single_wallet"
  }, React.createElement("a", {
    onClick: function() {
      return browserUtils.saveMobileLinkInfo({
        name: links[0].name,
        href: singleLinkHref
      });
    },
    href: singleLinkHref,
    rel: "noopener noreferrer",
    target: "_blank"
  }, props.text.connect_with + " " + (hasSingleLink ? links[0].name : "") + " ›")) : android || loading || !loading && links.length ? React.createElement("div", {
    className: "walletconnect-modal__mobile__toggle" + (rightSelected ? " right__selected" : "")
  }, React.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), mobile ? React.createElement(React.Fragment, null, React.createElement("a", {
    onClick: function() {
      return setDisplayQRCode(false), getLinksIfNeeded();
    }
  }, props.text.mobile), React.createElement("a", {
    onClick: function() {
      return setDisplayQRCode(true);
    }
  }, props.text.qrcode)) : React.createElement(React.Fragment, null, React.createElement("a", {
    onClick: function() {
      return setDisplayQRCode(true);
    }
  }, props.text.qrcode), React.createElement("a", {
    onClick: function() {
      return setDisplayQRCode(false), getLinksIfNeeded();
    }
  }, props.text.desktop))) : null, React.createElement("div", null, displayQRCode || !android && !loading && !links.length ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(LinkDisplay, Object.assign(
    {},
    displayProps,
    {
      links,
      errorMessage
    }
  )))));
}
var de = {
  choose_preferred_wallet: "Wähle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  connect_with: "Verbinden mit Hilfe von",
  loading: "Laden...",
  something_went_wrong: "Etwas ist schief gelaufen",
  no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
  no_wallets_found: "keine Wallet gefunden"
};
var en = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  connect_with: "Connect with",
  loading: "Loading...",
  something_went_wrong: "Something went wrong",
  no_supported_wallets: "There are no supported wallets yet",
  no_wallets_found: "No wallets found"
};
var es = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera móvil",
  scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvil",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Conectar mediante",
  loading: "Cargando...",
  something_went_wrong: "Algo salió mal",
  no_supported_wallets: "Todavía no hay billeteras compatibles",
  no_wallets_found: "No se encontraron billeteras"
};
var fr = {
  choose_preferred_wallet: "Choisissez votre portefeuille préféré",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copié!",
  connect_with: "Connectez-vous à l'aide de",
  loading: "Chargement...",
  something_went_wrong: "Quelque chose a mal tourné",
  no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
  no_wallets_found: "Aucun portefeuille trouvé"
};
var ko = {
  choose_preferred_wallet: "원하는 지갑을 선택하세요",
  connect_mobile_wallet: "모바일 지갑과 연결",
  scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
  connect: "연결",
  qrcode: "QR 코드",
  mobile: "모바일",
  desktop: "데스크탑",
  copy_to_clipboard: "클립보드에 복사",
  copied_to_clipboard: "클립보드에 복사되었습니다!",
  connect_with: "와 연결하다",
  loading: "로드 중...",
  something_went_wrong: "문제가 발생했습니다.",
  no_supported_wallets: "아직 지원되는 지갑이 없습니다",
  no_wallets_found: "지갑을 찾을 수 없습니다"
};
var pt = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se à carteira móvel",
  scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvel",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Ligar por meio de",
  loading: "Carregamento...",
  something_went_wrong: "Algo correu mal",
  no_supported_wallets: "Ainda não há carteiras suportadas",
  no_wallets_found: "Nenhuma carteira encontrada"
};
var zh = {
  choose_preferred_wallet: "选择你的钱包",
  connect_mobile_wallet: "连接至移动端钱包",
  scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
  connect: "连接",
  qrcode: "二维码",
  mobile: "移动",
  desktop: "桌面",
  copy_to_clipboard: "复制到剪贴板",
  copied_to_clipboard: "复制到剪贴板成功！",
  connect_with: "通过以下方式连接",
  loading: "正在加载...",
  something_went_wrong: "出了问题",
  no_supported_wallets: "目前还没有支持的钱包",
  no_wallets_found: "没有找到钱包"
};
var fa = {
  choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
  connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
  scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
  connect: "اتصال",
  qrcode: "کد QR",
  mobile: "سیار",
  desktop: "دسکتاپ",
  copy_to_clipboard: "کپی به کلیپ بورد",
  copied_to_clipboard: "در کلیپ بورد کپی شد!",
  connect_with: "ارتباط با",
  loading: "...بارگذاری",
  something_went_wrong: "مشکلی پیش آمد",
  no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
  no_wallets_found: "هیچ کیف پولی پیدا نشد"
};
var languages = {
  de,
  en,
  es,
  fr,
  ko,
  pt,
  zh,
  fa
};
function injectStyleSheet() {
  var doc = browserUtils.getDocumentOrThrow();
  var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);
  if (prev) {
    doc.head.removeChild(prev);
  }
  var style = doc.createElement("style");
  style.setAttribute("id", WALLETCONNECT_STYLE_ID);
  style.innerText = WALLETCONNECT_STYLE_SHEET;
  doc.head.appendChild(style);
}
function renderWrapper() {
  var doc = browserUtils.getDocumentOrThrow();
  var wrapper = doc.createElement("div");
  wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
  doc.body.appendChild(wrapper);
  return wrapper;
}
function triggerCloseAnimation() {
  var doc = browserUtils.getDocumentOrThrow();
  var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);
  if (modal) {
    modal.className = modal.className.replace("fadeIn", "fadeOut");
    setTimeout(function() {
      var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);
      if (wrapper) {
        doc.body.removeChild(wrapper);
      }
    }, ANIMATION_DURATION);
  }
}
function getWrappedCallback(cb) {
  return function() {
    triggerCloseAnimation();
    if (cb) {
      cb();
    }
  };
}
function getText() {
  var lang = browserUtils.getNavigatorOrThrow().language.split("-")[0] || "en";
  return languages[lang] || languages["en"];
}
function open$1(uri, cb, qrcodeModalOptions) {
  injectStyleSheet();
  var wrapper = renderWrapper();
  React.render(React.createElement(Modal, {
    text: getText(),
    uri,
    onClose: getWrappedCallback(cb),
    qrcodeModalOptions
  }), wrapper);
}
function close$1() {
  triggerCloseAnimation();
}
var isNode = function() {
  return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
};
function open$2(uri, cb, qrcodeModalOptions) {
  console.log(uri);
  if (isNode()) {
    open(uri);
  } else {
    open$1(uri, cb, qrcodeModalOptions);
  }
}
function close$2() {
  if (isNode())
    ;
  else {
    close$1();
  }
}
var index = {
  open: open$2,
  close: close$2
};
var cjs = index;
class SignerConnection extends IJsonRpcConnection {
  constructor(opts) {
    super();
    this.events = new EventEmitter();
    this.accounts = [];
    this.chainId = 1;
    this.pending = false;
    this.bridge = "https://bridge.walletconnect.org";
    this.qrcode = true;
    this.qrcodeModalOptions = void 0;
    this.opts = opts;
    this.chainId = (opts === null || opts === void 0 ? void 0 : opts.chainId) || this.chainId;
    this.wc = this.register(opts);
  }
  get connected() {
    return typeof this.wc !== "undefined" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    this.wc = this.register(this.opts);
    return this.wc;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(chainId) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((resolve, reject) => {
      this.on("error", (err) => {
        reject(err);
      });
      this.on("open", () => {
        resolve();
      });
      this.create(chainId);
    });
  }
  async close() {
    if (typeof this.wc === "undefined")
      return;
    if (this.wc.connected) {
      this.wc.killSession();
    }
    this.onClose();
  }
  async send(payload) {
    this.wc = this.register(this.opts);
    if (!this.connected)
      await this.open();
    this.sendPayload(payload).then((res) => this.events.emit("payload", res)).catch((e2) => this.events.emit("payload", formatJsonRpcError(payload.id, e2.message)));
  }
  register(opts) {
    if (this.wc)
      return this.wc;
    this.opts = opts || this.opts;
    this.bridge = (opts === null || opts === void 0 ? void 0 : opts.connector) ? opts.connector.bridge : (opts === null || opts === void 0 ? void 0 : opts.bridge) || "https://bridge.walletconnect.org";
    this.qrcode = typeof (opts === null || opts === void 0 ? void 0 : opts.qrcode) === "undefined" || opts.qrcode !== false;
    this.chainId = typeof (opts === null || opts === void 0 ? void 0 : opts.chainId) !== "undefined" ? opts.chainId : this.chainId;
    this.qrcodeModalOptions = opts === null || opts === void 0 ? void 0 : opts.qrcodeModalOptions;
    const connectorOpts = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? cjs : void 0,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: opts === null || opts === void 0 ? void 0 : opts.storageId,
      signingMethods: opts === null || opts === void 0 ? void 0 : opts.signingMethods,
      clientMeta: opts === null || opts === void 0 ? void 0 : opts.clientMeta
    };
    this.wc = typeof (opts === null || opts === void 0 ? void 0 : opts.connector) !== "undefined" ? opts.connector : new WalletConnect(connectorOpts);
    if (typeof this.wc === "undefined") {
      throw new Error("Failed to register WalletConnect connector");
    }
    if (this.wc.accounts.length) {
      this.accounts = this.wc.accounts;
    }
    if (this.wc.chainId) {
      this.chainId = this.wc.chainId;
    }
    this.registerConnectorEvents();
    return this.wc;
  }
  onOpen(wc) {
    this.pending = false;
    if (wc) {
      this.wc = wc;
    }
    this.events.emit("open");
  }
  onClose() {
    this.pending = false;
    if (this.wc) {
      this.wc = void 0;
    }
    this.events.emit("close");
  }
  onError(payload, message = "Failed or Rejected Request", code = -32e3, data) {
    const errorPayload = {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      error: { code, message }
    };
    if (typeof data !== "undefined") {
      errorPayload.error.data = data;
    }
    this.events.emit("payload", errorPayload);
    return errorPayload;
  }
  create(chainId) {
    this.wc = this.register(this.opts);
    this.chainId = chainId || this.chainId;
    if (this.connected || this.pending)
      return;
    this.pending = true;
    this.registerConnectorEvents();
    this.wc.createSession({ chainId: this.chainId }).then(() => this.events.emit("created")).catch((e2) => this.events.emit("error", e2));
  }
  registerConnectorEvents() {
    this.wc = this.register(this.opts);
    this.wc.on("connect", (err) => {
      var _a, _b;
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.accounts = ((_a = this.wc) === null || _a === void 0 ? void 0 : _a.accounts) || [];
      this.chainId = ((_b = this.wc) === null || _b === void 0 ? void 0 : _b.chainId) || this.chainId;
      this.onOpen();
    });
    this.wc.on("disconnect", (err) => {
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.onClose();
    });
    this.wc.on("modal_closed", () => {
      this.events.emit("error", new Error("User closed modal"));
    });
    this.wc.on("session_update", (error, payload) => {
      const { accounts, chainId } = payload.params[0];
      if (!this.accounts || accounts && this.accounts !== accounts) {
        this.accounts = accounts;
        this.events.emit("accountsChanged", accounts);
      }
      if (!this.chainId || chainId && this.chainId !== chainId) {
        this.chainId = chainId;
        this.events.emit("chainChanged", chainId);
      }
    });
  }
  async sendPayload(payload) {
    this.wc = this.register(this.opts);
    try {
      const response = await this.wc.unsafeSend(payload);
      return this.sanitizeResponse(response);
    } catch (error) {
      return this.onError(payload, error.message);
    }
  }
  sanitizeResponse(response) {
    return typeof response.error !== "undefined" && typeof response.error.code === "undefined" ? formatJsonRpcError(response.id, response.error.message, response.error.data) : response;
  }
}
class WalletConnectProvider {
  constructor(opts) {
    this.events = new EventEmitter();
    this.rpc = { infuraId: opts === null || opts === void 0 ? void 0 : opts.infuraId, custom: opts === null || opts === void 0 ? void 0 : opts.rpc };
    this.signer = new JsonRpcProvider(new SignerConnection(opts));
    const chainId = this.signer.connection.chainId || (opts === null || opts === void 0 ? void 0 : opts.chainId) || 1;
    this.http = this.setHttpProvider(chainId);
    this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    var _a;
    return ((_a = this.http) === null || _a === void 0 ? void 0 : _a.connection).url || "";
  }
  async request(args) {
    switch (args.method) {
      case "eth_requestAccounts":
        await this.connect();
        return this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
    }
    if (signingMethods.includes(args.method)) {
      return this.signer.request(args);
    }
    if (typeof this.http === "undefined") {
      throw new Error(`Cannot request JSON-RPC method (${args.method}) without provided rpc url`);
    }
    return this.http.request(args);
  }
  sendAsync(args, callback) {
    this.request(args).then((response) => callback(null, response)).catch((error) => callback(error, void 0));
  }
  async enable() {
    const accounts = await this.request({ method: "eth_requestAccounts" });
    return accounts;
  }
  async connect() {
    if (!this.signer.connection.connected) {
      await this.signer.connect();
    }
  }
  async disconnect() {
    if (this.signer.connection.connected) {
      await this.signer.disconnect();
    }
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  get isWalletConnect() {
    return true;
  }
  registerEventListeners() {
    this.signer.connection.on("accountsChanged", (accounts) => {
      this.events.emit("accountsChanged", accounts);
    });
    this.signer.connection.on("chainChanged", (chainId) => {
      this.http = this.setHttpProvider(chainId);
      this.events.emit("chainChanged", chainId);
    });
    this.signer.on("disconnect", () => {
      this.events.emit("disconnect");
    });
  }
  setHttpProvider(chainId) {
    const rpcUrl = getRpcUrl(chainId, this.rpc);
    if (typeof rpcUrl === "undefined")
      return void 0;
    const http = new JsonRpcProvider(new HttpConnection(rpcUrl));
    return http;
  }
}
export {
  WalletConnectProvider as default
};
