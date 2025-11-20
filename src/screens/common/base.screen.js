class BaseScreen {
    async waitFor(el, timeout = 8000){
        await el.waitForDisplayed({timeout});
        return el;
    }


    async waitAndClick(selOrEl, timeout = 8000){
        const el = typeof selOrEl === 'string' ? await $(selOrEl) : selOrEl;
        await el.waitForDisplayed({ timeout });
        await el.click();
    }

    async type(el, value, timeout = 8000) {
        await el.waitForDisplayed({timeout});
        await el.addValue(value);
    }

    async clearAndType(el, value, timeout = 8000) {
        await el.waitForDisplayed({timeout});
        await el.clearValue();
        await el.setValue(value);
    }

   async isVisible(selOrEl, timeout = 800) {
    const el = typeof selOrEl === 'string' ? await $(selOrEl) : selOrEl;
    try { await el.waitForDisplayed({ timeout }); return true; }
    catch { return false; }
  
    }

    async clearValue(el, timeout = 8000) {
        await el.waitForDisplayed({timeout});
        await el.clearValue();
    }
}

module.exports = BaseScreen;