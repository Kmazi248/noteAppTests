const { AddNoteScreen, DeleteNotePopup , NoteListScreen, NoteScreen } =
  require('../../../src/screens/add-note.screen');

const Trash = require('../../../src/screens/trash.screen');
const { scrollToTop, androidScrollToText } = require('../../../src/screens/utils/gestures');


const EditNoteScreen =
  require('../../../src/screens/flows/functions');

const data = require('../../../src/screens/data/notes.data');
const { back } = require('appium-uiautomator2-driver/build/lib/commands/navigation');
             

describe('Notes', () => {
    it('@smoke add a new note, save changes & verify, then delete and verify in Trash', async () => {

      const title = data.uniqueTitle();
      const note = data.sampleBody;

        //await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote(title, note);
       // await driver.back();

        // verify on list
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);
        //delete note
        await EditNoteScreen.deleteCurrentNote();
        await DeleteNotePopup.confirm();
        //verify note is deleted from list
        await expect(AddNoteScreen.Titleprvw).not.toBeExisting();
        // verify note is in trash
        await EditNoteScreen.openTrash();
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);

    })


    it('@smoke cancel deletion', async () => {

      const title = data.uniqueTitle();
      const note = data.sampleBody;

      //await EditNoteScreen.skipTutorial();
      await EditNoteScreen.addAndSaveNote(title, note);
      //await driver.back();

      await EditNoteScreen.deleteCurrentNote();
      await DeleteNotePopup.cancel();
      driver.back();
      await expect(NoteListScreen.byTitle(title)).toBeExisting();

      
      

      await EditNoteScreen.openTrash();
      await Trash.waitForVisible();                       // ensures we’re on the trash screen
      await expect(Trash.byTitle(title)).toBeExisting(); //false positive - Change later 



    });
})

describe('@smoke Edit Note function ', () => {
    it(' add a new note, edit and persist ', async () => {

      const title = data.uniqueTitle();
      const note = data.sampleBody;

       // await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote(title, note);
        //await driver.back();

        // verify on list
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);
        
      //await NoteListScreen.waitAndClick(NoteListScreen.byTitle(title));
        const newTitle = `${title} - edited`;
        const newNote = `${note}\nThis is an added line.`;
        
        
        await EditNoteScreen.editAndSaveNote(newTitle, newNote);
        //await driver.back();
       
        await expect(AddNoteScreen.Titleprvw).toHaveText(newTitle);
    })
})

describe('Note scroll functionality ', () => {})
  it('@smoke  add a new note with long body, verify scroll ', async () => {

    const title = data.uniqueTitle();
      const note = data.longNote;
      const line = 'The last line!';

        //await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote(title, note);
       // await driver.back();
       // await driver.back();


        // verify on list
        await expect(AddNoteScreen.Titleprvw).toHaveText(title);

        await AddNoteScreen.waitAndClick(AddNoteScreen.Titleprvw);
        // scroll to bottom to verify full note is present
        await androidScrollToText(line);
        await driver.pause(1000);
        await androidScrollToText(title)
        await expect(NoteScreen.TitleField).toBeExisting();
        
        


        
    
  })