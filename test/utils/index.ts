export class Page {
  open(path: string) {
    return browser.url(path)
  }
}

// @ts-ignore
export function iWaitElement(el, timeout = 1) {
  el.waitForExist({
    timeout: timeout * 1000,
    timeoutMsg: `Элемент ${el.selector} не отображается на странице`,
  });
}

export function setJasmineInterval() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
}