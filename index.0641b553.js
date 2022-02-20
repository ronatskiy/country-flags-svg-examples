// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var _countryFlagsSvg = require("country-flags-svg");
function renderIso(label, iso) {
    return `${label}: <strong class="country-box__iso-value">"${iso}"</strong>`;
}
function createCountryBox({ name , flag , iso2 , iso3  }) {
    return `
    <div class="country-box">
      <span class="country-box__country-name">${name}</span>
      <span class="country-box__iso">${renderIso("ISO2", iso2)} ${renderIso("ISO3", iso3)}</span>
      <img class="country-box__country-flag" src="${flag}" alt="Flag for ${name}" />
    </div>
`;
}
document.getElementById("app").innerHTML = `
  <div class="country-list">
      ${_countryFlagsSvg.countries.map(createCountryBox).join("")}    
  </div>
`;

},{"country-flags-svg":"31pdQ"}],"31pdQ":[function(require,module,exports) {
"use strict";
var countries = require("./data/countries");
var flagUrls = require("./data/flagUrlByIso3");
var _require = require("./lib/api"), findFlagUrlByCountryName = _require.findFlagUrlByCountryName, findFlagUrlByNationality = _require.findFlagUrlByNationality, findFlagUrlByIso2Code = _require.findFlagUrlByIso2Code, findFlagUrlByIso3Code = _require.findFlagUrlByIso3Code;
module.exports = {
    countries: countries,
    flagUrls: flagUrls,
    findFlagUrlByCountryName: findFlagUrlByCountryName,
    findFlagUrlByNationality: findFlagUrlByNationality,
    findFlagUrlByIso2Code: findFlagUrlByIso2Code,
    findFlagUrlByIso3Code: findFlagUrlByIso3Code
};

},{"./data/countries":"eaQLw","./data/flagUrlByIso3":"kxywD","./lib/api":"kguPL"}],"eaQLw":[function(require,module,exports) {
"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var flagUrlByIso3 = require("./flagUrlByIso3");
var CountryData = function CountryData1(name, demonym, iso2, iso3) {
    var altSpellings = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    _classCallCheck(this, CountryData1);
    this.name = name;
    this.demonym = demonym;
    this.flag = flagUrlByIso3[iso3];
    this.iso2 = iso2;
    this.iso3 = iso3;
    this.altSpellings = altSpellings;
};
module.exports = [
    new CountryData("Afghanistan", "Afghan", "AF", "AFG"),
    new CountryData("Aland Islands", "Alandic", "AX", "ALA"),
    new CountryData("Albania", "Albanian", "AL", "ALB"),
    new CountryData("Algeria", "Algerian", "DZ", "DZA"),
    new CountryData("American Samoa", "American Samoan", "AS", "ASM"),
    new CountryData("Andorra", "Andorran", "AD", "AND"),
    new CountryData("Angola", "Angolan", "AO", "AGO"),
    new CountryData("Anguilla", "Anguillian", "AI", "AIA"),
    new CountryData("Antigua and Barbuda", "Antiguan Barbudan", "AG", "ATG"),
    new CountryData("Argentina", "Argentinian", "AR", "ARG"),
    new CountryData("Armenia", "Armenian", "AM", "ARM"),
    new CountryData("Aruba", "Arubian", "AW", "ABW"),
    new CountryData("Australia", "Australian", "AU", "AUS"),
    new CountryData("Austria", "Austrian", "AT", "AUT"),
    new CountryData("Azerbaijan", "Azerbaijani", "AZ", "AZE"),
    new CountryData("Bahamas", "Bahamian", "BS", "BHS"),
    new CountryData("Bahrain", "Bahraini", "BH", "BHR"),
    new CountryData("Bangladesh", "Bengali", "BD", "BGD"),
    new CountryData("Barbados", "Barbadian", "BB", "BRB"),
    new CountryData("Belarus", "Belarusian", "BY", "BLR"),
    new CountryData("Belgium", "Belgian", "BE", "BEL"),
    new CountryData("Belize", "Belizean", "BZ", "BLZ"),
    new CountryData("Benin", "Beninese", "BJ", "BEN"),
    new CountryData("Bermuda", "Bermudian", "BM", "BMU"),
    new CountryData("Bhutan", "Bhutanese", "BT", "BTN"),
    new CountryData("Bolivia", "Bolivian", "BO", "BOL"),
    new CountryData("Bonaire, Sint Eustatius and Saba", "Dutch", "BQ", "BES"),
    new CountryData("Bosnia and Herzegovina", "Bosnian", "BA", "BIH"),
    new CountryData("Botswana", "Batswana", "BW", "BWA"),
    new CountryData("Brazil", "Brazilian", "BR", "BRA"),
    new CountryData("British Virgin Islands", "Virgin Islander", "VG", "VGB"),
    new CountryData("Brunei", "Bruneian", "BN", "BRN"),
    new CountryData("Bulgaria", "Bulgarian", "BG", "BGR"),
    new CountryData("Burkina Faso", "Burkinabé", "BF", "BFA"),
    new CountryData("Burundi", "Burundian", "BI", "BDI"),
    new CountryData("Cambodia", "Cambodian", "KH", "KHM"),
    new CountryData("Cameroon", "Cameroonian", "CM", "CMR"),
    new CountryData("Canada", "Canadian", "CA", "CAN"),
    new CountryData("Cape Verde", "Cape Verdean", "CV", "CPV"),
    new CountryData("Cayman Islands", "Caymanian", "KY", "CYM"),
    new CountryData("Central African Republic", "Central African", "CF", "CAF"),
    new CountryData("Chad", "Chadian", "TD", "TCD"),
    new CountryData("Chile", "Chilean", "CL", "CHL"),
    new CountryData("China", "Chinese", "CN", "CHN"),
    new CountryData("Christmas Island", "Christmas Islander", "CX", "CXR"),
    new CountryData("Cocos Islands", "Taiwanese", "CC", "CCK"),
    new CountryData("Colombia", "Colombian", "CO", "COL"),
    new CountryData("Comoros", "Comorian", "KM", "COM"),
    new CountryData("Congo", "Congolese", "CG", "COG"),
    new CountryData("Cook Islands", "Cook Islander", "CK", "COK"),
    new CountryData("Costa Rica", "Costa Rican", "CR", "CRI"),
    new CountryData("Côte d'Ivoire", "Ivorian", "CI", "CIV"),
    new CountryData("Croatia", "Croatian", "HR", "HRV"),
    new CountryData("Cuba", "Cuban", "CU", "CUB"),
    new CountryData("Curaçao", "Dutch", "CW", "CUW"),
    new CountryData("Cyprus", "Cypriot", "CY", "CYP"),
    new CountryData("Czech Republic", "Czech", "CZ", "CZE"),
    new CountryData("Democratic Republic of the Congo", "Congolese", "CD", "COD"),
    new CountryData("Denmark", "Danish", "DK", "DNK"),
    new CountryData("Djibouti", "Djiboutian", "DJ", "DJI"),
    new CountryData("Dominica", "Dominican", "DM", "DMA"),
    new CountryData("Dominican Republic", "Dominican", "DO", "DOM"),
    new CountryData("Ecuador", "Ecuadorian", "EC", "ECU"),
    new CountryData("Egypt", "Egyptian", "EG", "EGY"),
    new CountryData("El Salvador", "Salvadoran", "SV", "SLV"),
    new CountryData("Equatorial Guinea", "Equatoguinean", "GQ", "GNQ"),
    new CountryData("Eritrea", "Eritrean", "ER", "ERI"),
    new CountryData("Estonia", "Estonian", "EE", "EST"),
    new CountryData("Ethiopia", "Ethiopian", "ET", "ETH"),
    new CountryData("Falkland Islands", "Falkland Islander", "FK", "FLK"),
    new CountryData("Faroe Islands", "Faroese", "FO", "FRO"),
    new CountryData("Fiji", "Fijian", "FJ", "FJI"),
    new CountryData("Finland", "Finnish", "FI", "FIN"),
    new CountryData("France", "French", "FR", "FRA"),
    new CountryData("French Guiana", "Guianan", "GF", "GUF"),
    new CountryData("French Polynesia", "French Polynesian", "PF", "PYF"),
    new CountryData("Gabon", "Gabonese", "GA", "GAB"),
    new CountryData("Gambia", "Gambian", "GM", "GMB"),
    new CountryData("Georgia", "Georgian", "GE", "GEO"),
    new CountryData("Germany", "German", "DE", "DEU"),
    new CountryData("Ghana", "Ghanaian", "GH", "GHA"),
    new CountryData("Gibraltar", "Gibraltarian", "GI", "GIB"),
    new CountryData("Greece", "Greek", "GR", "GRC"),
    new CountryData("Greenland", "Greenlander", "GL", "GRL"),
    new CountryData("Grenada", "Grenadian", "GD", "GRD"),
    new CountryData("Guadeloupe", "Guadeloupean", "GP", "GLP"),
    new CountryData("Guam", "Guamanian", "GU", "GUM"),
    new CountryData("Guatemala", "Guatemalan", "GT", "GTM"),
    new CountryData("Guernsey", "Guernseymen", "GG", "GGY"),
    new CountryData("Guinea-Bissau", "Bissau-Guinean", "GW", "GNB"),
    new CountryData("Guinea", "Guinean", "GN", "GIN"),
    new CountryData("Guyana", "Guyanese", "GY", "GUY"),
    new CountryData("Haiti", "Haitian", "HT", "HTI"),
    new CountryData("Holy See", "Papal", "VA", "VAT", [
        "Vatican"
    ]),
    new CountryData("Honduras", "Honduran", "HN", "HND"),
    new CountryData("Hong Kong", "Hong Kongese", "HK", "HKG"),
    new CountryData("Hungary", "Hungarian", "HU", "HUN"),
    new CountryData("Iceland", "Icelander", "IS", "ISL"),
    new CountryData("India", "Indian", "IN", "IND"),
    new CountryData("Indonesia", "Indonesian", "ID", "IDN"),
    new CountryData("Iran", "Iranian", "IR", "IRN"),
    new CountryData("Iraq", "Iraqi", "IQ", "IRQ"),
    new CountryData("Ireland", "Irish", "IE", "IRL"),
    new CountryData("Isle of Man", "Manx", "IM", "IMN"),
    new CountryData("Israel", "Israeli", "IL", "ISR"),
    new CountryData("Italy", "Italian", "IT", "ITA"),
    new CountryData("Jamaica", "Jamaican", "JM", "JAM"),
    new CountryData("Japan", "Japanese", "JP", "JPN"),
    new CountryData("Jersey", "Jerseyman", "JE", "JEY"),
    new CountryData("Jordan", "Jordanian", "JO", "JOR"),
    new CountryData("Kazakhstan", "Kazakhstani", "KZ", "KAZ"),
    new CountryData("Kenya", "Kenyan", "KE", "KEN"),
    new CountryData("Kiribati", "I-Kiribati", "KI", "KIR"),
    new CountryData("Kosovo", "Kosovar", "XK", "XXK"),
    new CountryData("Kuwait", "	Kuwaiti", "KW", "KWT"),
    new CountryData("Kyrgyzstan", "Kyrgyzstani", "KG", "KGZ"),
    new CountryData("Laos", "Lao", "LA", "LAO"),
    new CountryData("Latvia", "Latvian", "LV", "LVA"),
    new CountryData("Lebanon", "Lebanese", "LB", "LBN"),
    new CountryData("Lesotho", "Lesothonian", "LS", "LSO"),
    new CountryData("Liberia", "Liberian", "LR", "LBR"),
    new CountryData("Libya", "Libyan", "LY", "LBY"),
    new CountryData("Liechtenstein", "Liechtensteiner", "LI", "LIE"),
    new CountryData("Lithuania", "Lithuanian", "LT", "LTU"),
    new CountryData("Luxembourg", "Luxembourgish", "LU", "LUX"),
    new CountryData("Macao", "Macau", "MO", "MAC"),
    new CountryData("Madagascar", "Malagasy", "MG", "MDG"),
    new CountryData("Malawi", "Malawian", "MW", "MWI"),
    new CountryData("Malaysia", "Malaysian", "MY", "MYS"),
    new CountryData("Maldives", "Maldivian", "MV", "MDV"),
    new CountryData("Mali", "Malian", "ML", "MLI"),
    new CountryData("Malta", "Maltese", "MT", "MLT"),
    new CountryData("Marshall Islands", "Marshallese", "MH", "MHL"),
    new CountryData("Martinique", "Martinican", "MQ", "MTQ"),
    new CountryData("Mauritania", "Mauritanian", "MR", "MRT"),
    new CountryData("Mauritius", "Mauritian", "MU", "MUS"),
    new CountryData("Mayotte", "Mahoran", "YT", "MYT"),
    new CountryData("Mexico", "Mexican", "MX", "MEX"),
    new CountryData("Micronesia", "Micronesian", "FM", "FSM"),
    new CountryData("Moldova", "Moldovan", "MD", "MDA"),
    new CountryData("Monaco", "Monegasque", "MC", "MCO"),
    new CountryData("Mongolia", "Mongolian", "MN", "MNG"),
    new CountryData("Montenegro", "Montenegrin", "ME", "MNE"),
    new CountryData("Montserrat", "Montserratian", "MS", "MSR"),
    new CountryData("Morocco", "Moroccan", "MA", "MAR"),
    new CountryData("Mozambique", "Mozambican", "MZ", "MOZ"),
    new CountryData("Myanmar", "Myanma", "MM", "MMR"),
    new CountryData("Namibia", "Namibian", "NA", "NAM"),
    new CountryData("Nauru", "Nauruan", "NR", "NRU"),
    new CountryData("Nepal", "Nepalese", "NP", "NPL"),
    new CountryData("Netherlands Antilles", "Netherlands Antillean", "AN", "ANT"),
    new CountryData("Netherlands", "Dutch", "NL", "NLD"),
    new CountryData("New Caledonia", "New Caledonian", "NC", "NCL"),
    new CountryData("New Zealand", "New Zealander", "NZ", "NZL"),
    new CountryData("Nicaragua", "Nicaraguan", "NI", "NIC"),
    new CountryData("Niger", "Nigerien", "NE", "NER"),
    new CountryData("Nigeria", "Nigerian", "NG", "NGA"),
    new CountryData("Niue", "Niuean", "NU", "NIU"),
    new CountryData("Norfolk Island", "Norfolk Islander", "NF", "NFK"),
    new CountryData("North Korea", "North Korea", "KP", "PRK"),
    new CountryData("North Macedonia", "Macedonian", "MK", "MKD"),
    new CountryData("Northern Mariana Islands", "Northern Mariana Islander", "MP", "MNP"),
    new CountryData("Norway", "Norwegian", "NO", "NOR"),
    new CountryData("Oman", "Omani", "OM", "OMN"),
    new CountryData("Pakistan", "Pakistani", "PK", "PAK"),
    new CountryData("Palau", "Palauan", "PW", "PLW"),
    new CountryData("Palestine", "Palestinian", "PS", "PSE"),
    new CountryData("Panama", "Panamanian", "PA", "PAN"),
    new CountryData("Papua New Guinea", "Papua New Guinean", "PG", "PNG"),
    new CountryData("Paraguay", "Paraguayan", "PY", "PRY"),
    new CountryData("Peru", "Peruvian", "PE", "PER"),
    new CountryData("Philippines", "Filipino", "PH", "PHL"),
    new CountryData("Pitcairn", "Pitcairn Islander", "PN", "PCN"),
    new CountryData("Poland", "Polish", "PL", "POL"),
    new CountryData("Portugal", "Portuguese", "PT", "PRT"),
    new CountryData("Puerto Rico", "Puerto Rican", "PR", "PRI"),
    new CountryData("Qatar", "Qatari", "QA", "QAT"),
    new CountryData("Réunion", "Réunionese", "RE", "REU"),
    new CountryData("Romania", "Romanian", "RO", "ROU"),
    new CountryData("Russia", "Russian", "RU", "RUS"),
    new CountryData("Rwanda", "Rwandan", "RW", "RWA"),
    new CountryData("Saint Barthélemy", "Barthélemois", "BL", "BLM"),
    new CountryData("Saint Helena, Ascension and Tristan da Cunha", "Ascensionian", "SH", "SHN", [
        "Saint Helenian",
        "Tristanian"
    ]),
    new CountryData("Saint Kitts and Nevis", "Kittitian", "KN", "KNA", [
        "Nevisian"
    ]),
    new CountryData("Saint Lucia", "Saint Lucian", "LC", "LCA"),
    new CountryData("Saint Martin", "Saint-Martinois", "MF", "MAF"),
    new CountryData("Saint Pierre and Miquelon", "Saint-Pierrais", "PM", "SPM"),
    new CountryData("Saint Vincent and the Grenadines", "Saint Vincentian", "VC", "VCT"),
    new CountryData("Samoa", "Samoan", "WS", "WSM"),
    new CountryData("San Marino", "Sammarinese", "SM", "SMR"),
    new CountryData("Sao Tome and Principe", "São Toméan", "ST", "STP"),
    new CountryData("Saudi Arabia", "Saudi", "SA", "SAU"),
    new CountryData("Senegal", "Senegalese", "SN", "SEN"),
    new CountryData("Serbia", "Serbian", "RS", "SRB"),
    new CountryData("Seychelles", "Seychellois", "SC", "SYC"),
    new CountryData("Sierra Leone", "Sierra Leonean", "SL", "SLE"),
    new CountryData("Singapore", "Singaporean", "SG", "SGP", [
        "SG",
        "Singapura",
        "Republik Singapura"
    ]),
    new CountryData("Sint Maarten", "St. Maartener", "SX", "SXM"),
    new CountryData("Slovakia", "Slovak", "SK", "SVK"),
    new CountryData("Slovenia", "Slovenian", "SI", "SVN"),
    new CountryData("Solomon Islands", "Solomon Islander", "SB", "SLB"),
    new CountryData("Somalia", "Somali", "SO", "SOM"),
    new CountryData("South Africa", "South African", "ZA", "ZAF"),
    new CountryData("South Georgia and the South Sandwich Islands", "South Georgian", "GS", "SGS"),
    new CountryData("South Korea", "South Korean", "KR", "KOR", [
        "Republic of Korea"
    ]),
    new CountryData("South Sudan", "South Sudanese", "SS", "SSD"),
    new CountryData("Spain", "Spanish", "ES", "ESP"),
    new CountryData("Sri Lanka", "Sri Lankan", "LK", "LKA"),
    new CountryData("Sudan", "Sudanese", "SD", "SDN"),
    new CountryData("Suriname", "Surinamese", "SR", "SUR"),
    new CountryData("Svalbard and Jan Mayen", "Svalbard", "SJ", "SJM"),
    new CountryData("Swaziland", "Swazi", "SZ", "SWZ"),
    new CountryData("Sweden", "Swedish", "SE", "SWE"),
    new CountryData("Switzerland", "Swiss", "CH", "CHE"),
    new CountryData("Syria", "Syrian", "SY", "SYR"),
    new CountryData("Taiwan", "Taiwanese", "TW", "TWN"),
    new CountryData("Tajikistan", "Tajik", "TJ", "TJK"),
    new CountryData("Tanzania", "Tanzanian", "TZ", "TZA"),
    new CountryData("Thailand", "Thai", "TH", "THA"),
    new CountryData("Timor-Leste", "Timorese", "TL", "TLS"),
    new CountryData("Togo", "Togolese", "TG", "TGO"),
    new CountryData("Tokelau", "Tokelauan", "TK", "TKL"),
    new CountryData("Tonga", "Tongan", "TO", "TON"),
    new CountryData("Trinidad and Tobago", "Trinidadian and Tobagonian", "TT", "TTO"),
    new CountryData("Tunisia", "Tunisian", "TN", "TUN"),
    new CountryData("Turkey", "Turkish", "TR", "TUR"),
    new CountryData("Turkmenistan", "Turkmenistani", "TM", "TKM"),
    new CountryData("Turks and Caicos Islands", "Turks and Caicos Islander", "TC", "TCA"),
    new CountryData("Tuvalu", "Tuvaluan", "TV", "TUV"),
    new CountryData("Uganda", "Ugandan", "UG", "UGA"),
    new CountryData("Ukraine", "Ukrainian", "UA", "UKR"),
    new CountryData("United Arab Emirates", "Emirati", "AE", "ARE", [
        "AE",
        "UAE"
    ]),
    new CountryData("United Kingdom", "British", "GB", "GBR", [
        "UK"
    ]),
    new CountryData("United States Minor Outlying Islands", "American Islander", "UM", "UMI"),
    new CountryData("United States", "American", "US", "USA", [
        "USA"
    ]),
    new CountryData("Uruguay", "Uruguayan", "UY", "URY"),
    new CountryData("Uzbekistan", "Uzbek", "UZ", "UZB"),
    new CountryData("Vanuatu", "Vanuatuan", "VU", "VUT"),
    new CountryData("Venezuela", "Venezuelan", "VE", "VEN"),
    new CountryData("Vietnam", "Vietnamese", "VN", "VNM", [
        "Viet Nam",
        "Republic of Viet Nam",
        "South Vietnam"
    ]),
    new CountryData("Virgin Islands of the United States", "Virgin Islander", "VI", "VIR"),
    new CountryData("Wallis and Futuna", "Wallisian", "WF", "WLF", [
        "Futunan"
    ]),
    new CountryData("Western Sahara", "Western Saharan", "EH", "ESH"),
    new CountryData("Yemen", "Yemeni", "YE", "YEM"),
    new CountryData("Zambia", "Zambian", "ZM", "ZMB"),
    new CountryData("Zimbabwe", "Zimbabwean", "ZW", "ZWE")
];

},{"./flagUrlByIso3":"kxywD"}],"kxywD":[function(require,module,exports) {
"use strict";
function createUrl(svgUrl) {
    return "https://upload.wikimedia.org/wikipedia/".concat(svgUrl);
}
module.exports = {
    'ABW': createUrl('commons/f/f6/Flag_of_Aruba.svg'),
    'AFG': createUrl('commons/5/5c/Flag_of_the_Taliban.svg'),
    'AGO': createUrl('commons/9/9d/Flag_of_Angola.svg'),
    'AIA': createUrl('commons/b/b4/Flag_of_Anguilla.svg'),
    'ALA': createUrl('commons/5/52/Flag_of_%C3%85land.svg'),
    'ALB': createUrl('commons/3/36/Flag_of_Albania.svg'),
    'AND': createUrl('commons/1/19/Flag_of_Andorra.svg'),
    'ANT': createUrl('commons/e/eb/Flag_of_the_Netherlands_Antilles_(1959%E2%80%931986).svg'),
    'ARE': createUrl('commons/c/cb/Flag_of_the_United_Arab_Emirates.svg'),
    'ARG': createUrl('commons/1/1a/Flag_of_Argentina.svg'),
    'ARM': createUrl('commons/2/2f/Flag_of_Armenia.svg'),
    'ASM': createUrl('commons/8/87/Flag_of_American_Samoa.svg'),
    'ATG': createUrl('commons/8/89/Flag_of_Antigua_and_Barbuda.svg'),
    'AUS': createUrl('commons/8/88/Flag_of_Australia_(converted).svg'),
    'AUT': createUrl('commons/4/41/Flag_of_Austria.svg'),
    'AZE': createUrl('commons/d/dd/Flag_of_Azerbaijan.svg'),
    'BDI': createUrl('commons/5/50/Flag_of_Burundi.svg'),
    'BEL': createUrl('commons/6/65/Flag_of_Belgium.svg'),
    'BEN': createUrl('commons/0/0a/Flag_of_Benin.svg'),
    'BES': createUrl('commons/2/20/Flag_of_the_Netherlands.svg'),
    'BFA': createUrl('commons/3/31/Flag_of_Burkina_Faso.svg'),
    'BGD': createUrl('commons/f/f9/Flag_of_Bangladesh.svg'),
    'BGR': createUrl('commons/9/9a/Flag_of_Bulgaria.svg'),
    'BHR': createUrl('commons/2/2c/Flag_of_Bahrain.svg'),
    'BHS': createUrl('commons/9/93/Flag_of_the_Bahamas.svg'),
    'BIH': createUrl('commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg'),
    'BLM': createUrl('commons/0/03/Saint-Barthelémy_Icône.svg'),
    'BLR': createUrl('commons/8/85/Flag_of_Belarus.svg'),
    'BLZ': createUrl('commons/e/e7/Flag_of_Belize.svg'),
    'BMU': createUrl('commons/b/bf/Flag_of_Bermuda.svg'),
    'BOL': createUrl('commons/5/5b/Bolivia_Flag.svg'),
    'BRA': createUrl('commons/0/05/Flag_of_Brazil.svg'),
    'BRB': createUrl('commons/e/ef/Flag_of_Barbados.svg'),
    'BRN': createUrl('commons/9/9c/Flag_of_Brunei.svg'),
    'BTN': createUrl('commons/9/91/Flag_of_Bhutan.svg'),
    'BWA': createUrl('commons/f/fa/Flag_of_Botswana.svg'),
    'CAF': createUrl('commons/6/6f/Flag_of_the_Central_African_Republic.svg'),
    'CAN': createUrl('commons/d/d9/Flag_of_Canada_(Pantone).svg'),
    'CCK': createUrl('commons/7/74/Flag_of_the_Cocos_(Keeling)_Islands.svg'),
    'CHE': createUrl('commons/f/f3/Flag_of_Switzerland.svg'),
    'CHL': createUrl('commons/7/78/Flag_of_Chile.svg'),
    'CHN': createUrl('commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg'),
    'CIV': createUrl('commons/f/fe/Flag_of_Côte_d%27Ivoire.svg'),
    'CMR': createUrl('commons/4/4f/Flag_of_Cameroon.svg'),
    'COD': createUrl('commons/1/11/Flag_of_the_Democratic_Republic_of_the_Congo_(3-2).svg'),
    'COG': createUrl('commons/9/92/Flag_of_the_Republic_of_the_Congo.svg'),
    'COK': createUrl('commons/3/35/Flag_of_the_Cook_Islands.svg'),
    'COL': createUrl('commons/2/21/Flag_of_Colombia.svg'),
    'COM': createUrl('commons/d/df/Flag_of_the_Comoros_(3-2).svg'),
    'CPV': createUrl('commons/3/38/Flag_of_Cape_Verde.svg'),
    'CRI': createUrl('commons/b/bc/Flag_of_Costa_Rica_(state).svg'),
    'CUB': createUrl('commons/b/bd/Flag_of_Cuba.svg'),
    'CUW': createUrl('commons/b/b1/Flag_of_Curaçao.svg'),
    'CXR': createUrl('commons/6/67/Flag_of_Christmas_Island.svg'),
    'CYM': createUrl('commons/0/0f/Flag_of_the_Cayman_Islands.svg'),
    'CYP': createUrl('commons/d/d4/Flag_of_Cyprus.svg'),
    'CZE': createUrl('commons/c/cb/Flag_of_the_Czech_Republic.svg'),
    'DEU': createUrl('commons/b/ba/Flag_of_Germany.svg'),
    'DJI': createUrl('commons/3/34/Flag_of_Djibouti.svg'),
    'DMA': createUrl('commons/c/c4/Flag_of_Dominica.svg'),
    'DNK': createUrl('commons/9/9c/Flag_of_Denmark.svg'),
    'DOM': createUrl('commons/9/9f/Flag_of_the_Dominican_Republic.svg'),
    'DZA': createUrl('commons/7/77/Flag_of_Algeria.svg'),
    'ECU': createUrl('commons/e/e8/Flag_of_Ecuador.svg'),
    'EGY': createUrl('commons/f/fe/Flag_of_Egypt.svg'),
    'ERI': createUrl('commons/2/29/Flag_of_Eritrea.svg'),
    'ESH': createUrl('commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg'),
    'ESP': createUrl('commons/9/9a/Flag_of_Spain.svg'),
    'EST': createUrl('commons/8/8f/Flag_of_Estonia.svg'),
    'ETH': createUrl('commons/7/71/Flag_of_Ethiopia.svg'),
    'FIN': createUrl('commons/b/bc/Flag_of_Finland.svg'),
    'FJI': createUrl('commons/b/ba/Flag_of_Fiji.svg'),
    'FLK': createUrl('commons/8/83/Flag_of_the_Falkland_Islands.svg'),
    'FRA': createUrl('commons/c/c3/Flag_of_France.svg'),
    'FRO': createUrl('commons/3/3c/Flag_of_the_Faroe_Islands.svg'),
    'FSM': createUrl('commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg'),
    'GAB': createUrl('commons/0/04/Flag_of_Gabon.svg'),
    'GBR': createUrl('commons/a/ae/Flag_of_the_United_Kingdom.svg'),
    'GEO': createUrl('commons/0/0f/Flag_of_Georgia.svg'),
    'GGY': createUrl('commons/f/fa/Flag_of_Guernsey.svg'),
    'GHA': createUrl('commons/1/19/Flag_of_Ghana.svg'),
    'GIB': createUrl('commons/0/02/Flag_of_Gibraltar.svg'),
    'GIN': createUrl('commons/e/ed/Flag_of_Guinea.svg'),
    'GLP': createUrl('commons/9/9f/Flag_of_France_%287x10%29.svg'),
    'GMB': createUrl('commons/7/77/Flag_of_The_Gambia.svg'),
    'GNB': createUrl('commons/0/01/Flag_of_Guinea-Bissau.svg'),
    'GNQ': createUrl('commons/3/31/Flag_of_Equatorial_Guinea.svg'),
    'GRC': createUrl('commons/5/5c/Flag_of_Greece.svg'),
    'GRD': createUrl('commons/b/bc/Flag_of_Grenada.svg'),
    'GRL': createUrl('commons/0/09/Flag_of_Greenland.svg'),
    'GTM': createUrl('commons/e/ec/Flag_of_Guatemala.svg'),
    'GUF': createUrl('commons/e/ed/Flag_of_France_%28Pantone%29.svg'),
    'GUM': createUrl('commons/0/07/Flag_of_Guam.svg'),
    'GUY': createUrl('commons/9/99/Flag_of_Guyana.svg'),
    'HKG': createUrl('commons/5/5b/Flag_of_Hong_Kong.svg'),
    'HND': createUrl('commons/8/82/Flag_of_Honduras.svg'),
    'HRV': createUrl('commons/1/1b/Flag_of_Croatia.svg'),
    'HTI': createUrl('commons/5/56/Flag_of_Haiti.svg'),
    'HUN': createUrl('commons/c/c1/Flag_of_Hungary.svg'),
    'IDN': createUrl('commons/9/9f/Flag_of_Indonesia.svg'),
    'IMN': createUrl('commons/b/bc/Flag_of_the_Isle_of_Man.svg'),
    'IND': createUrl('commons/4/41/Flag_of_India.svg'),
    'IRL': createUrl('commons/c/c0/Republic_of_Ireland_Flag.svg'),
    'IRN': createUrl('commons/c/ca/Flag_of_Iran.svg'),
    'IRQ': createUrl('commons/f/f6/Flag_of_Iraq.svg'),
    'ISL': createUrl('commons/c/ce/Flag_of_Iceland.svg'),
    'ISR': createUrl('commons/d/d4/Flag_of_Israel.svg'),
    'ITA': createUrl('commons/0/03/Flag_of_Italy.svg'),
    'JAM': createUrl('commons/0/0a/Flag_of_Jamaica.svg'),
    'JEY': createUrl('commons/1/1c/Flag_of_Jersey.svg'),
    'JOR': createUrl('commons/c/c0/Flag_of_Jordan.svg'),
    'JPN': createUrl('commons/b/bc/Flag_of_Japan%28bordered%29.svg'),
    'KAZ': createUrl('commons/d/d3/Flag_of_Kazakhstan.svg'),
    'KEN': createUrl('commons/4/49/Flag_of_Kenya.svg'),
    'KGZ': createUrl('commons/c/c7/Flag_of_Kyrgyzstan.svg'),
    'KHM': createUrl('commons/8/83/Flag_of_Cambodia.svg'),
    'KIR': createUrl('commons/d/d3/Flag_of_Kiribati.svg'),
    'KNA': createUrl('commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg'),
    'KOR': createUrl('commons/0/09/Flag_of_South_Korea.svg'),
    'KWT': createUrl('commons/a/aa/Flag_of_Kuwait.svg'),
    'LAO': createUrl('commons/5/56/Flag_of_Laos.svg'),
    'LBN': createUrl('commons/5/59/Flag_of_Lebanon.svg'),
    'LBR': createUrl('commons/b/b8/Flag_of_Liberia.svg'),
    'LBY': createUrl('commons/0/05/Flag_of_Libya.svg'),
    'LCA': createUrl('commons/9/9f/Flag_of_Saint_Lucia.svg'),
    'LIE': createUrl('commons/4/47/Flag_of_Liechtenstein.svg'),
    'LKA': createUrl('commons/1/11/Flag_of_Sri_Lanka.svg'),
    'LSO': createUrl('commons/4/4a/Flag_of_Lesotho.svg'),
    'LTU': createUrl('commons/1/11/Flag_of_Lithuania.svg'),
    'LUX': createUrl('commons/d/da/Flag_of_Luxembourg.svg'),
    'LVA': createUrl('commons/8/84/Flag_of_Latvia.svg'),
    'MAC': createUrl('commons/6/63/Flag_of_Macau.svg'),
    'MAF': createUrl('commons/d/dd/Flag_of_Saint-Martin_%28fictional%29.svg'),
    'MAR': createUrl('commons/2/2c/Flag_of_Morocco.svg'),
    'MCO': createUrl('commons/e/ea/Flag_of_Monaco.svg'),
    'MDA': createUrl('commons/2/27/Flag_of_Moldova.svg'),
    'MDG': createUrl('commons/b/bc/Flag_of_Madagascar.svg'),
    'MDV': createUrl('commons/0/0f/Flag_of_Maldives.svg'),
    'MEX': createUrl('commons/f/fc/Flag_of_Mexico.svg'),
    'MHL': createUrl('commons/2/2e/Flag_of_the_Marshall_Islands.svg'),
    'MKD': createUrl('commons/7/79/Flag_of_North_Macedonia.svg'),
    'MLI': createUrl('commons/9/92/Flag_of_Mali.svg'),
    'MLT': createUrl('commons/7/73/Flag_of_Malta.svg'),
    'MMR': createUrl('commons/8/8c/Flag_of_Myanmar.svg'),
    'MNE': createUrl('commons/6/64/Flag_of_Montenegro.svg'),
    'MNG': createUrl('commons/4/4c/Flag_of_Mongolia.svg'),
    'MNP': createUrl('commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg'),
    'MOZ': createUrl('commons/d/d0/Flag_of_Mozambique.svg'),
    'MRT': createUrl('commons/4/43/Flag_of_Mauritania.svg'),
    'MSR': createUrl('commons/d/d0/Flag_of_Montserrat.svg'),
    'MTQ': createUrl('commons/2/21/Flag_of_the_Territorial_Collectivity_of_Martinique.svg'),
    'MUS': createUrl('commons/7/77/Flag_of_Mauritius.svg'),
    'MWI': createUrl('commons/d/d1/Flag_of_Malawi.svg'),
    'MYS': createUrl('commons/6/66/Flag_of_Malaysia.svg'),
    'MYT': createUrl('commons/c/c3/Flag_of_France.svg'),
    'NAM': createUrl('commons/0/00/Flag_of_Namibia.svg'),
    'NCL': createUrl('commons/6/66/Flag_of_FLNKS.svg'),
    'NER': createUrl('commons/f/f4/Flag_of_Niger.svg'),
    'NFK': createUrl('commons/4/48/Flag_of_Norfolk_Island.svg'),
    'NGA': createUrl('commons/7/79/Flag_of_Nigeria.svg'),
    'NIC': createUrl('commons/1/19/Flag_of_Nicaragua.svg'),
    'NIU': createUrl('commons/0/01/Flag_of_Niue.svg'),
    'NLD': createUrl('commons/2/20/Flag_of_the_Netherlands.svg'),
    'NOR': createUrl('commons/d/d9/Flag_of_Norway.svg'),
    'NPL': createUrl('commons/9/9b/Flag_of_Nepal.svg'),
    'NRU': createUrl('commons/3/30/Flag_of_Nauru.svg'),
    'NZL': createUrl('commons/3/3e/Flag_of_New_Zealand.svg'),
    'OMN': createUrl('commons/d/dd/Flag_of_Oman.svg'),
    'PAK': createUrl('commons/3/32/Flag_of_Pakistan.svg'),
    'PAN': createUrl('commons/a/ab/Flag_of_Panama.svg'),
    'PCN': createUrl('commons/8/88/Flag_of_the_Pitcairn_Islands.svg'),
    'PER': createUrl('commons/c/cf/Flag_of_Peru.svg'),
    'PHL': createUrl('commons/9/99/Flag_of_the_Philippines.svg'),
    'PLW': createUrl('commons/4/48/Flag_of_Palau.svg'),
    'PNG': createUrl('commons/e/e3/Flag_of_Papua_New_Guinea.svg'),
    'POL': createUrl('commons/1/12/Flag_of_Poland.svg'),
    'PRI': createUrl('commons/2/28/Flag_of_Puerto_Rico.svg'),
    'PRK': createUrl('commons/5/51/Flag_of_North_Korea.svg'),
    'PRT': createUrl('commons/5/5c/Flag_of_Portugal.svg'),
    'PRY': createUrl('commons/2/27/Flag_of_Paraguay.svg'),
    'PSE': createUrl('commons/f/f4/Palestine_Flag.svg'),
    'PYF': createUrl('commons/d/db/Flag_of_French_Polynesia.svg'),
    'QAT': createUrl('commons/6/65/Flag_of_Qatar.svg'),
    'REU': createUrl('commons/5/5a/Flag_of_Réunion.svg'),
    'ROU': createUrl('commons/7/73/Flag_of_Romania.svg'),
    'RUS': createUrl('commons/f/f3/Flag_of_Russia.svg'),
    'RWA': createUrl('commons/1/17/Flag_of_Rwanda.svg'),
    'SAU': createUrl('commons/0/0d/Flag_of_Saudi_Arabia.svg'),
    'SDN': createUrl('commons/0/01/Flag_of_Sudan.svg'),
    'SEN': createUrl('commons/f/fd/Flag_of_Senegal.svg'),
    'SGP': createUrl('commons/4/48/Flag_of_Singapore.svg'),
    'SGS': createUrl('commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg'),
    'SHN': createUrl('commons/0/00/Flag_of_Saint_Helena.svg'),
    'SJM': createUrl('commons/d/d9/Flag_of_Norway.svg'),
    'SLB': createUrl('commons/7/74/Flag_of_the_Solomon_Islands.svg'),
    'SLE': createUrl('commons/1/17/Flag_of_Sierra_Leone.svg'),
    'SLV': createUrl('commons/3/34/Flag_of_El_Salvador.svg'),
    'SMR': createUrl('commons/b/b1/Flag_of_San_Marino.svg'),
    'SOM': createUrl('commons/a/a0/Flag_of_Somalia.svg'),
    'SPM': createUrl('commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg'),
    'SRB': createUrl('commons/f/ff/Flag_of_Serbia.svg'),
    'SSD': createUrl('commons/7/7a/Flag_of_South_Sudan.svg'),
    'STP': createUrl('commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg'),
    'SUR': createUrl('commons/6/60/Flag_of_Suriname.svg'),
    'SVK': createUrl('commons/e/e6/Flag_of_Slovakia.svg'),
    'SVN': createUrl('commons/f/f0/Flag_of_Slovenia.svg'),
    'SWE': createUrl('commons/4/4c/Flag_of_Sweden.svg'),
    'SWZ': createUrl('commons/f/fb/Flag_of_Eswatini.svg'),
    'SXM': createUrl('commons/d/d3/Flag_of_Sint_Maarten.svg'),
    'SYC': createUrl('commons/f/fc/Flag_of_Seychelles.svg'),
    'SYR': createUrl('commons/5/53/Flag_of_Syria.svg'),
    'TCA': createUrl('commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg'),
    'TCD': createUrl('commons/4/4b/Flag_of_Chad.svg'),
    'TGO': createUrl('commons/6/68/Flag_of_Togo.svg'),
    'THA': createUrl('commons/a/a9/Flag_of_Thailand.svg'),
    'TJK': createUrl('commons/d/d0/Flag_of_Tajikistan.svg'),
    'TKL': createUrl('commons/8/8e/Flag_of_Tokelau.svg'),
    'TKM': createUrl('commons/1/1b/Flag_of_Turkmenistan.svg'),
    'TLS': createUrl('commons/2/26/Flag_of_East_Timor.svg'),
    'TON': createUrl('commons/9/9a/Flag_of_Tonga.svg'),
    'TTO': createUrl('commons/6/64/Flag_of_Trinidad_and_Tobago.svg'),
    'TUN': createUrl('commons/c/ce/Flag_of_Tunisia.svg'),
    'TUR': createUrl('commons/b/b4/Flag_of_Turkey.svg'),
    'TUV': createUrl('commons/3/38/Flag_of_Tuvalu.svg'),
    'TWN': createUrl('commons/7/72/Flag_of_the_Republic_of_China.svg'),
    'TZA': createUrl('commons/3/38/Flag_of_Tanzania.svg'),
    'UGA': createUrl('commons/4/4e/Flag_of_Uganda.svg'),
    'UKR': createUrl('commons/4/49/Flag_of_Ukraine.svg'),
    'UMI': createUrl('commons/0/05/Flag_of_the_U.S..svg'),
    'URY': createUrl('commons/f/fe/Flag_of_Uruguay.svg'),
    'USA': createUrl('commons/a/a4/Flag_of_the_United_States.svg'),
    'UZB': createUrl('commons/8/84/Flag_of_Uzbekistan.svg'),
    'VAT': createUrl('commons/0/00/Flag_of_the_Vatican_City.svg'),
    'VCT': createUrl('commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg'),
    'VEN': createUrl('commons/7/7b/Flag_of_Venezuela_(state).svg'),
    'VGB': createUrl('commons/4/42/Flag_of_the_British_Virgin_Islands.svg'),
    'VIR': createUrl('commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg'),
    'VNM': createUrl('commons/2/21/Flag_of_Vietnam.svg'),
    'VUT': createUrl('commons/6/6e/Flag_of_Vanuatu_(official).svg'),
    'WLF': createUrl('commons/d/d2/Flag_of_Wallis_and_Futuna.svg'),
    'WSM': createUrl('commons/3/31/Flag_of_Samoa.svg'),
    'XXK': createUrl('commons/1/1f/Flag_of_Kosovo.svg'),
    'YEM': createUrl('commons/8/89/Flag_of_Yemen.svg'),
    'ZAF': createUrl('commons/a/af/Flag_of_South_Africa.svg'),
    'ZMB': createUrl('commons/0/06/Flag_of_Zambia.svg'),
    'ZWE': createUrl('commons/6/6a/Flag_of_Zimbabwe.svg')
};

},{}],"kguPL":[function(require,module,exports) {
"use strict";
var countries = require("../data/countries");
function isEqual(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
function findFlagUrlByPredicate(countries1, predicate) {
    var country = countries1.find(predicate);
    return country ? country.flag : "";
}
module.exports = {
    findFlagUrlByCountryName: function findFlagUrlByCountryName(countryName) {
        return findFlagUrlByPredicate(countries, function(_ref) {
            var name = _ref.name, altSpellings = _ref.altSpellings;
            return isEqual(name, countryName) || altSpellings.some(function(altSpelling) {
                return isEqual(altSpelling, countryName);
            });
        });
    },
    findFlagUrlByNationality: function findFlagUrlByNationality(nationality) {
        return findFlagUrlByPredicate(countries, function(_ref2) {
            var demonym = _ref2.demonym;
            return isEqual(demonym, nationality);
        });
    },
    findFlagUrlByIso2Code: function findFlagUrlByIso2Code(iso2Code) {
        return findFlagUrlByPredicate(countries, function(_ref3) {
            var iso2 = _ref3.iso2;
            return isEqual(iso2, iso2Code);
        });
    },
    findFlagUrlByIso3Code: function findFlagUrlByIso3Code(iso3Code) {
        return findFlagUrlByPredicate(countries, function(_ref4) {
            var iso3 = _ref4.iso3;
            return isEqual(iso3, iso3Code);
        });
    }
};

},{"../data/countries":"eaQLw"}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire582b")

//# sourceMappingURL=index.0641b553.js.map
