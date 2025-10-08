const { AddNoteScreen, NoteScreen, DiscardPopup, NoteListNav } =
  require('../add-note.screen');


class EditNoteScreen {
    async skipTutorial() {
        await AddNoteScreen.waitAndClick(AddNoteScreen.SkipBtn);
        await AddNoteScreen.waitFor(AddNoteScreen.AddNoteBtn);
    }

    async addAndSaveNote(title, note) {
        await AddNoteScreen.openTextNote();
        await NoteScreen.type(NoteScreen.TitleField, title);
        await NoteScreen.type(NoteScreen.NoteField, note);
        await NoteScreen.waitAndClick(NoteScreen.SavenoteBtn);

    }

    async deleteCurrentNote() {
        await AddNoteScreen.waitAndClick(AddNoteScreen.Titleprvw);
        await NoteScreen.waitAndClick(NoteScreen.NotePadMenu);
        await NoteScreen.waitAndClick(NoteScreen.DiscardBtn);
        await DiscardPopup.confirm();
        await driver.back();       
    }

    async openTrash(){
        await AddNoteScreen.waitAndClick(AddNoteScreen.NoteListMenu);
        await NoteListNav.waitAndClick(NoteListNav.TrashBtn);
    }
}

module.exports = new EditNoteScreen();
