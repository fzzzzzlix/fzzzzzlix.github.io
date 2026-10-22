#!/bin/sh
# Browser for the design-taste-frontend skill (CHROME_PATH in .claude/settings.json).
# Cloud sessions run as root with Playwright's Chromium, which needs --no-sandbox;
# elsewhere this falls through to the installed Chrome or Chromium.
for b in /opt/pw-browsers/chromium \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  /usr/bin/google-chrome /usr/bin/google-chrome-stable /usr/bin/chromium /usr/bin/chromium-browser; do
  if [ -x "$b" ]; then
    if [ "$(id -u)" = 0 ]; then exec "$b" --no-sandbox "$@"; fi
    exec "$b" "$@"
  fi
done
echo "skill-chrome.sh: no Chrome or Chromium found" >&2
exit 1
