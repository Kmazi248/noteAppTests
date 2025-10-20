const { AddNoteScreen } =
  require('../../../src/screens/add-note.screen');

const EditNoteScreen =
  require('../../../src/screens/flows/functions');

const data = require('../../../src/screens/data/notes.data');
const { back } = require('appium-uiautomator2-driver/build/lib/commands/navigation');
             

describe('Notes', () => {
    it('add a new note, save changes & verify, then delete and verify in Trash', async () => {

      const title = data.uniqueTitle();
      const note = data.sampleBody;

        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote(title, note);
        await driver.back();

        // verify on list
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);
        //delete note
        await EditNoteScreen.deleteCurrentNote();
        //verify note is deleted from list
        await expect(AddNoteScreen.Titleprvw).not.toBeExisting();
        // verify note is in trash
        await EditNoteScreen.openTrash();
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);

    })
})

describe('Notes again @smoke', () => {
    it('add a new note, save changes & verify, then delete @smoke', async () => {

      const title = data.uniqueTitle();
      const note = data.sampleBody;

        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote(title, note);
        await driver.back();

        // verify on list
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);
        //delete note
        await EditNoteScreen.deleteCurrentNote();
        //verify note is deleted from list
        await expect(AddNoteScreen.Titleprvw).not.toBeExisting();
        // verify note is in trash
        await EditNoteScreen.openTrash();
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);
       
    })
})