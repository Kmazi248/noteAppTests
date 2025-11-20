const { AddNoteScreen, NoteScreen, DeleteNotePopup, NoteListNav } =
  require('../add-note.screen');
const log = require('../utils/logger');
const { scrollToEdge, androidScrollToText } = require('../utils/gestures'); // adjust path



class EditNoteScreen {
      async skipTutorial() {
    // tiny, non-throwing probe
    const visible = await AddNoteScreen.isVisible(AddNoteScreen.SkipBtn, 600);
    if (visible) {
      await AddNoteScreen.waitAndClick(AddNoteScreen.SkipBtn, 1200);
      await driver.pause(150); // settle tiny
    }

    // don't block the run if home control isn't there
    try {
      await $(AddNoteScreen.AddNoteBtn).waitForDisplayed({ timeout: 800 });
    } catch {} // no-op
  }

    async addAndSaveNote(title, note) {
        log.step(`Adding and saving note with title: ${title}`);
        await AddNoteScreen.openTextNote();
        await NoteScreen.type(NoteScreen.TitleField, title);
        await NoteScreen.type(NoteScreen.NoteField, note);
        await driver.pause(2000);
        await driver.back();
        await driver.pause(2000);
        await driver.back();
      

        
        await NoteScreen.waitAndClick(NoteScreen.SavenoteBtn);
        log.success(`Note "${title}" added and saved`);

    }

    async editAndSaveNote(title) {
        log.step(`Editing and saving note with title: ${title}`);
        await AddNoteScreen.waitAndClick(AddNoteScreen.Titleprvw);
        //await AddNoteScreen.openTextNote();
        await NoteScreen.clearValue(NoteScreen.TitleField);
        await NoteScreen.type(NoteScreen.TitleField, title);
       // await NoteScreen.waitAndClick(NoteScreen.NoteField);
        //await NoteScreen.type(NoteScreen.NoteField, note);
        await NoteScreen.waitAndClick(NoteScreen.SavenoteBtn);
        log.success(`Note "${title}" added and saved`);
    }

    async deleteCurrentNote() {
        log.step('Open delete note prompt');
        await AddNoteScreen.waitAndClick(AddNoteScreen.Titleprvw);
        await NoteScreen.waitAndClick(NoteScreen.NotePadMenu);
        await NoteScreen.waitAndClick(NoteScreen.DiscardBtn);
       // await DeleteNotePopup.confirm();
       // await driver.back();    
       // log.success('Note deleted');   
    }

    async openTrash(){
        log.step('Opening Trash folder');
        await AddNoteScreen.waitAndClick(AddNoteScreen.NoteListMenu);
        await NoteListNav.waitAndClick(NoteListNav.TrashBtn);
        log.success('Trash folder opened');
    }
}

module.exports = new EditNoteScreen();
