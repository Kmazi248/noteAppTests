const { NoteListScreen, NoteScreen } =
  require('../../../src/screens/add-note.screen');

const EditNoteScreen =
  require('../../../src/screens/flows/functions');

const data =
  require('../../../src/screens/data/notes.data');

describe('Notes - Search / Filter', () => {
    it('filter notes by title(cases-insensitive) and verify results', async () => {
        await EditNoteScreen.skipTutorial();
        const runId = Date.now();               // one timestamp for this test run
        const makeTitle = (t) => `${t} ${runId}`;
        const titles = ['Alpha', 'ALPHA test', 'alpha extra'].map(makeTitle);

        for (const t of titles) {

           
            await NoteListScreen.openTextNote();
            await (await NoteScreen.titleField).setValue(t);
            await (await NoteScreen.noteField).setValue('Body');
            await (await NoteScreen.saveNoteBtn).click();
            await driver.back();
        }


        // click search
        await NoteListScreen.waitAndClick(NoteListScreen.searchIcon);

        // type query
        await NoteListScreen.clearAndType(NoteListScreen.searchField, 'alpha'); 

        await NoteListScreen.waitForResults(1);
        const texts = await NoteListScreen.getResultTexts();
        expect(texts.length).toBeGreaterThan(0);
        texts.forEach(t => expect(t.toLowerCase()).toContain('alpha'));




    })

    
})

