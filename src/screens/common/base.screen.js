class BaseScreen {
    async waitFor(el, timeout = 8000){
        await el.waitForDisplayed({timeout});
        return el;
    }

    async waitAndClick(el, timeout = 8000){
        await el.waitForDisplayed({timeout});
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

    async isVisible(el, timeout = 8000) {
        try{
            await el.waitForDisplayed({timeout});
            return true;
        } catch{
            return false;
        }
    }
}

module.exports = BaseScreen;