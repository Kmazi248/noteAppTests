describe('test', () => {
    it('skip tutorial', async () => {
         
        await $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip').click();

        //assert we are on the main screen by checking the presence of the add note button
        const addNote = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/img_add');
        await expect(addNote).toBeExisting();

    })

    it('add a new note, save changes & verify note', async () => {
        const addNote = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/empty_text')
        const addtextbtn = await $('android=new UiSelector().text("Text")')
        const titlefield = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_title')
        const noteField = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_note')
        const editnoteIcon = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_btn')
        const titleprvw = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/title')

        addNote.click();
        addtextbtn.click();
        expect(titlefield).toBeExisting();

        await titlefield.addValue('My first note');
        await noteField.addValue('This is my first note\nThis is the second line of my note');

        // save the note - back button
        await driver.back();
       // await driver.back();
       // await driver.pause(2000);

        //assert the note is added
        await expect(editnoteIcon).toBeExisting();
        await driver.back();
        await expect(titleprvw).toHaveText('My first note');

        //delete note
        const notePadMenu = await $('~More')
        const discardbtn = await $('android=new UiSelector().text("Delete")')
        const popUpDlt = await $('id=android:id/button1')
        const noteListMenu = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav')
        const trashBtn = await $('android=new UiSelector().text("Trash Can")')
        

        await titleprvw.click();
        await notePadMenu.click();
        await discardbtn.click();
        await popUpDlt.click();
        await driver.back();
        
    

        //assert note is deleted from note list
        await expect(titleprvw).not.toBeExisting();

        //navigate to trash and assert note is present
        await noteListMenu.click();
        await trashBtn.click();

        // check note is in the trash
        await expect(titleprvw).toHaveText('My first note');





        


    })
})