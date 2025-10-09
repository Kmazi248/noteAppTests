describe('Android Element Test', async () => {
    it('should find elements by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');

        

        //click on element
        await appOption.click();

        //assert element is clicked
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find elements by class name', async () => {
        // find elements by class name
        const className = await $('android.widget.TextView');

        console.log(className.getText());

        await expect(className).toHaveText('API Demos');

    
    })

    it('Find elements by xpath', async () => {
     // xpath - (//tagname[@attribute='value'])
     await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

   

    });

    it('Find elements by UIAutomator', async () => {
        // find by text contains

        await $('android=new UiSelector().textContains("Alert")').click();
    })

    it.only('Find multiple elements', async () => {
        const expectedList = [
            "API Demos",
            "Access'ibility",
            "Accessibility", "Animation",
            "App",
            "Content", "Graphics",
            "Media",
            "NFC", "OS",
            "Preference",
            "Text",
            "Views"
        ]
        const actualList = []
        // find multipleelements 
        const textlist = await $$('android.widget.TextView')

        //loop through elements
        for (const element of textlist) {
            actualList.push(await element.getText());
        }

        //assert the list
        await expect(actualList).toContain('App', 'Views');
        await expect(actualList).toEqual(expectedList);
    })
});

