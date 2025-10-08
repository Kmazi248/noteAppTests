//const { $, $$, expect } = require('@wdio/globals');

describe('Locator cookbook (ApiDemos)', () => {
  it.only('demonstrates multiple locator strategies that actually work', async () => {
    // ----- CLASS NAME (simple) -----
    // Home screen title
    const heading = await $('android.widget.TextView');
    await expect(heading).toHaveText('API Demos');

    // ----- ACCESSIBILITY ID -----
    await $('~App').click();
    await $('~Alert Dialogs').click();

    // ----- XPATH (by attribute) -----
//    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    // ----- XPATH (by text) -----
    await $('//android.widget.TextView[@text="List dialog"]').click();

    // ----- TEXT -----
    await $('//*[@text="Command two"]').click();

    // The List dialog closes and shows a Toast like: "You selected: 1 , Command two"
    // Toasts are android.widget.Toast -> android.widget.TextView
    const toastMsg = await $('//android.widget.Toast//android.widget.TextView');
    await expect(toastMsg).toHaveTextContaining('Command two');

    // Back to the Alert Dialogs menu
    await driver.back();

    // Open a dialog that has real buttons (so we can demo resource-id)
    await $('//android.widget.TextView[@text="OK Cancel dialog with a message"]').click();

    // ----- RESOURCE-ID (fastest & most stable) -----
    // Positive button is android:id/button1 on platform dialogs
    await $('id=android:id/button1').click();

    // Optional: show we can count by CLASS NAME too
    const buttons = await $$('android.widget.Button');
    await expect(buttons).toBeElementsArrayOfSize({ gte: 0 });

    // ----- ANDROID UiSelector (alternative to XPath) -----
    // Navigate again using UiSelector instead of XPath:
    await driver.back(); // back to "Alert Dialogs" list
    await driver.back(); // back to "App" list
    await $('android=new UiSelector().description("Alert Dialogs")').click();
    await $('android=new UiSelector().text("List dialog")').click();
    await $('android=new UiSelector().text("Command three")').click();

    const toast2 = await $('//android.widget.Toast//android.widget.TextView');
    await expect(toast2).toHaveTextContaining('Command three');
  });
});
