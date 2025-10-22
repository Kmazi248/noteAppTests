// screenobjects/android/note.screen.js
const BaseScreen = require('./common/base.screen');

class NoteListScreen extends BaseScreen {
  // Containers
  get noteList() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/note_list');
  }

  // Onboarding / top-level actions
  get skipBtn() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip');
  }
  get addNoteBtn() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/main_btn1');
  }
  get addTxtTypeNote() {
    return $('android=new UiSelector().text("Text")');
  }
  get noteListMenu() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav');
  }

  // Search UI
  get searchIcon() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/main_btn2');
  }
  get searchField() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_search');
  }

  // Search results (scoped to the list)
async getResultTitleElements() {
  const list = this.noteList;                  // no await needed
  // ✅ Make sure noteList is a single element ($), not $$.
  return list.$$(`id=com.socialnmobile.dictapps.notepad.color.note:id/title`);
}



async getResultTexts() {
  const els = await this.getResultTitleElements();  // array
  if (!Array.isArray(els) || els.length === 0) return [];
  return Promise.all(els.map(e => e.getText()));
}

  async waitForResults(min = 1, timeout = 5000) {
    await browser.waitUntil(async () => {
      const els = await this.getResultTitleElements();
      return Array.isArray(els) && els.length >= min;
    }, { timeout, timeoutMsg: `Expected at least ${min} search results` });
  }

  // Flow helpers
  async openTextNote() {
    await this.waitAndClick(this.addNoteBtn);
    await this.waitAndClick(this.addTxtTypeNote);
  }
}

class NoteScreen extends BaseScreen {
  get titleField() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_title');
  }
  get noteField() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_note');
  }
  get editNoteBtn() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_btn');
  }
  get notePadMenu() {
    return $('~More');
  }
  get saveNoteBtn() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/back_btn');
  }
  // Prefer resource-id if available; using text as fallback:
  get deleteBtn() {
    return $('android=new UiSelector().text("Delete")');
  }
}

class DiscardPopup extends BaseScreen {
  get confirmBtn() {
    return $('id=android:id/button1');
  }
  async confirm() {
    await this.waitAndClick(this.confirmBtn);
  }
}

class NoteListNav extends BaseScreen {
  get trashBtn() {
    return $('android=new UiSelector().text("Trash Can")');
  }
}

module.exports = {
  NoteListScreen: new NoteListScreen(),
  NoteScreen:     new NoteScreen(),
  DiscardPopup: new DiscardPopup(),
  NoteListNav: new NoteListNav(),
};
