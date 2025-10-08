const { AddNoteScreen, NoteScreen, DiscardPopup, NoteListNav } =
  require('../add-note.screen');


class EditNoteScreen {
    async skipTutorial() {
        await AddNoteScreen.SkipBtn.click();
        //assert we are on the main screen by checking the presence of the add note button
        
        await expect(AddNoteScreen.AddNoteBtn).toBeExisting();
    }

    async addAndSaveNote(title, note) {
        await AddNoteScreen.AddNoteBtn.click();
        await AddNoteScreen.AddTxtTypeNote.click();
        await expect(NoteScreen.TitleField).toBeExisting();

        await NoteScreen.TitleField.addValue(title);
        await NoteScreen.NoteField.addValue(note);

        // save the note - back button
        await NoteScreen.SavenoteBtn.click();
       // await driver.back();
       // await driver.pause(2000);

        //assert the note is added
        await expect(NoteScreen.EditNoteBtn).toBeExisting();
        await NoteScreen.SavenoteBtn.click();
        await expect(AddNoteScreen.Titleprvw).toHaveText('My first note');
    }
}

module.exports = new EditNoteScreen();
