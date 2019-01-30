'use strict';

var _require = require('electron'),
    app = _require.app;

var _require2 = require('./host'),
    createRenderer = _require2.createRenderer,
    destroyRenderer = _require2.destroyRenderer,
    eventHandler = _require2.eventHandler;

var FeatureFlags = require('./FeatureFlags');
var Overlay = require('./discord_overlay2.node');

process.on('uncaughtException', function (err) {
  Overlay.logMessage('Overlay host process exception: ' + err.message);
});

global.features = new FeatureFlags();
global.mainAppDirname = __dirname;

if (process.versions.electron && parseInt(process.versions.electron.split('.')[0]) >= 4) {
  global.features.declareSupported('overlay-hidpi');
}

app.disableHardwareAcceleration();

app.commandLine.appendSwitch('force-color-profile', 'srgb');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

app.once('ready', function () {
  Overlay._initializeHostProcess({ createRenderer: createRenderer, destroyRenderer: destroyRenderer });
  Overlay._setEventHandler(eventHandler);
});
