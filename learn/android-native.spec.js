
 describe('Android Native App feature test', () => {

    it('Access an Activity directly', async () => {
        //appPackage and appActivity 
        //appened appPackage and appActivity to driver.startActivity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')
        //pause for 3 seconds
        await driver.pause(3000);
        //assert the activity is opened

        //Done using xpath
        await expect ($('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')).toExist();
    })

    it('Working with Dialong boxes', async () => {
        // click on the first dialog button
        const dialog1 = await $('~OK Cancel dialog with a message');
        const dialogMsg = await $('id=android:id/alertTitle')
        
        
        await dialog1.click();
      
        await expect(dialogMsg).toExist();
         //click on ok button
        await driver.acceptAlert();

        //reopen dialog and click on cancel button
        await dialog1.click();
        console.log(dialogMsg.getText());
        await driver.dismissAlert();;

        //assert the dialog box is closed
        await expect(dialogMsg).not.toExist();
    })

    it('vertical scrolling', async () => { 
        await $('~App').click();
        await $('~Activity').click();
        //scroll to the end of the list (not stable if elements move around)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollTextIntoView - more stable if elements move around
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Translucent")').click();
        
    })

    it('horizontal scrolling', async () => {

        //navigate to gallery- directly using startActivity - package name first the appended package name and activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.Gallery1');

        //Horizontal scroll to forward 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(2000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');


    })

    it.only(' challenge - date picker', async () => {
        //access the date widget
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.view.DateWidgets1');
        
        //det current date
        const date = await $('id=io.appium.android.apis:id/dateDisplay');
        const currentDate = await date.getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiSelector().text("10")').click();
        await $('id=android:id/button1').click();
        //assert the date is changed
        await expect(date).not.toHaveText(currentDate);

        //

        //


    })
 })