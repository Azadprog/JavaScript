const Overlay = require('./discord_overlay2.node');

const isElectronRenderer =
  typeof window !== 'undefined' && window != null && window.DiscordNative && window.DiscordNative.isRenderer;
const features = isElectronRenderer ? require('electron').remote.getGlobal('features') : global.features;

let clickZoneCallback;
let interceptInput = false;
let imeExclusiveFullscreenCallback;

function eventHandler(pid, event) {
  if (event.message === 'click_zone_event') {
    if (clickZoneCallback) {
      clickZoneCallback(event.name, event.x, event.y);
    }
  } else if (event.message === 'ime_exclusive_fullscreen') {
    if (imeExclusiveFullscreenCallback) {
      imeExclusiveFullscreenCallback();
    }
  }
}

Overlay._setEventHandler(eventHandler);

if (__OVERLAY__) {
  const {URL} = require('url');
  const url = new URL(window.location);
  const pid = parseInt(url.searchParams.get('pid'));
  Overlay.connectProcess(pid);

  Overlay.rendererStarted = () => {
    Overlay.sendCommand(pid, {message: 'notify_renderer_started'});
  };
}

Overlay.setClickZoneCallback = callback => {
  clickZoneCallback = callback;
};
// NOTE: deprecated. Use `sendCommand` instead.
Overlay.setInputLocked = locked => {
  interceptInput = !locked;
  const payload = {message: 'intercept_input', intercept: interceptInput};
  Overlay.broadcastCommand(payload);
};
Overlay.setImeExclusiveFullscreenCallback = callback => {
  imeExclusiveFullscreenCallback = callback;
};
module.exports = Overlay;
