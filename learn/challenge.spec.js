describe('Android Element Test', async () => {
    it ('should return the correct country name', async () => {
        const viewButton = await $('~Views');
        const autoComp = await $('~Auto Complete');
        const screenTop = await $('~1. Screen Top');
        //resource id
        const textField = await $('id=io.appium.android.apis:id/edit');

        //access the auto complete text field
        await viewButton.click();
        await autoComp.click();
        await screenTop.click();
        await textField.addValue('Canda');

        //assert the value
        await expect(textField).toHaveText('Canda');
    } )
})