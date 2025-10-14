
async function waitAndTap(selOrEl, timeout = 8000) {
  const el = typeof selOrEl === 'string' ? await $(selOrEl) : selOrEl;
  await el.waitForDisplayed({ timeout });
  await el.click();
}

async function longPress(selOrEl, ms = 800) {
  const el = typeof selOrEl === 'string' ? await $(selOrEl) : selOrEl;
  await driver.performActions([{
    type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, origin: el, x: 0, y: 0 },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: ms },
      { type: 'pointerUp', button: 0 },
    ],
  }]);
  await driver.releaseActions();
}

async function dragAndDrop(srcSelOrEl, dstSelOrEl) {
  const src = typeof srcSelOrEl === 'string' ? await $(srcSelOrEl) : srcSelOrEl;
  const dst = typeof dstSelOrEl === 'string' ? await $(dstSelOrEl) : dstSelOrEl;
  await driver.performActions([{
    type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, origin: src, x: 0, y: 0 },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 80 },
      { type: 'pointerMove', duration: 500, origin: dst, x: 0, y: 0 },
      { type: 'pointerUp', button: 0 },
    ],
  }]);
  await driver.releaseActions();
}

async function swipe(direction, distance = 0.6, duration = 300) {
  const { width, height } = await driver.getWindowSize();
  const cx = Math.round(width * 0.5), cy = Math.round(height * 0.5);
  const dx = Math.round(width * distance * 0.5), dy = Math.round(height * distance * 0.5);
  const P = {
    left:  { from: { x: cx + dx, y: cy }, to: { x: cx - dx, y: cy } },
    right: { from: { x: cx - dx, y: cy }, to: { x: cx + dx, y: cy } },
    up:    { from: { x: cx, y: cy + dy }, to: { x: cx, y: cy - dy } },
    down:  { from: { x: cx, y: cy - dy }, to: { x: cx, y: cy + dy } },
  }[direction];

  await driver.performActions([{
    type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x: P.from.x, y: P.from.y },
      { type: 'pointerDown', button: 0 },
      { type: 'pointerMove', duration, x: P.to.x, y: P.to.y },
      { type: 'pointerUp', button: 0 },
    ],
  }]);
  await driver.releaseActions();
}

async function androidScrollToText(text) {
  const sel = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`;
  return $(sel);
}

async function doubleTap(selOrEl, gapMs = 80) {
  const el = typeof selOrEl === 'string' ? await $(selOrEl) : selOrEl;
  await el.waitForDisplayed({ timeout: 8000 });
  await el.click();
  await driver.pause(gapMs);
  await el.click();
}

async function zoom(direction = 'in', distance = 100, duration = 300) {
  const { width, height } = await driver.getWindowSize();
  const cx = Math.round(width * 0.5), cy = Math.round(height * 0.5);
  const delta = distance;

  const start1 = { x: cx - delta, y: cy };
  const start2 = { x: cx + delta, y: cy };
  const end1   = direction === 'in' ? { x: cx - 5, y: cy } : { x: cx - Math.round(delta * 1.4), y: cy };
  const end2   = direction === 'in' ? { x: cx + 5, y: cy } : { x: cx + Math.round(delta * 1.4), y: cy };

  await driver.performActions([
    {
      type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: start1.x, y: start1.y },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration, x: end1.x, y: end1.y },
        { type: 'pointerUp', button: 0 },
      ],
    },
    {
      type: 'pointer', id: 'finger2', parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: start2.x, y: start2.y },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration, x: end2.x, y: end2.y },
        { type: 'pointerUp', button: 0 },
      ],
    },
  ]);
  await driver.releaseActions();
}

module.exports = {
  waitAndTap,
  longPress,
  dragAndDrop,
  swipe,
  androidScrollToText,
  doubleTap,
  zoom,
};
