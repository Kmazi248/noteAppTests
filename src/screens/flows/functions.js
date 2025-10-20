const { AddNoteScreen, NoteScreen, DiscardPopup, NoteListNav } =
  require('../add-note.screen');
const log = require('../utils/logger');


class EditNoteScreen {
    async skipTutorial() {
        log.step('Skipping tutorial');
        if (await AddNoteScreen.isVisible(AddNoteScreen.SkipBtn, 3000)) {
            await AddNoteScreen.waitAndClick(AddNoteScreen.SkipBtn);
        }
            await AddNoteScreen.waitFor(AddNoteScreen.AddNoteBtn);
    }

    async addAndSaveNote(title, note) {
        log.step(`Adding and saving note with title: ${title}`);
        await AddNoteScreen.openTextNote();
        await NoteScreen.type(NoteScreen.TitleField, title);
        await NoteScreen.type(NoteScreen.NoteField, note);
        await NoteScreen.waitAndClick(NoteScreen.SavenoteBtn);
        log.success('Note "${title}" added and saved');

    }

    async deleteCurrentNote() {
        log.step('Deleting current note');
        await AddNoteScreen.waitAndClick(AddNoteScreen.Titleprvw);
        await NoteScreen.waitAndClick(NoteScreen.NotePadMenu);
        await NoteScreen.waitAndClick(NoteScreen.DiscardBtn);
        await DiscardPopup.confirm();
        await driver.back();    
        log.success('Note deleted');   
    }

    async openTrash(){
        log.step('Opening Trash folder');
        await AddNoteScreen.waitAndClick(AddNoteScreen.NoteListMenu);
        await NoteListNav.waitAndClick(NoteListNav.TrashBtn);
        log.success('Trash folder opened');
    }
}

module.exports = new EditNoteScreen();
