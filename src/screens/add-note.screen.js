const BaseScreen = require('./common/base.screen');

class AddNoteScreen extends BaseScreen {
    
    get SkipBtn() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip')
    } 

    get AddNoteBtn() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/main_btn1');
    }
    get AddTxtTypeNote() {
        return $('android=new UiSelector().text("Text")')
    }

     get NoteListMenu() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav')
    }

    get Titleprvw() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/title')
    }

    async openTextNote() {
    await this.waitAndClick(this.AddNoteBtn);
    await this.waitAndClick(this.AddTxtTypeNote);
  }

}

class NoteListScreen extends BaseScreen {
    get list() { 
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/note_list'); 
  }

    byTitle(title) {
     return this.list.$(
    `android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/title").text("${title}")`
  );
    }   

    async openSavedNote() {
    await this.waitAndClick(this.title);
    }

}

class TrashScreen {
  get list() { return $('id=com.socialnmobile.dictapps.notepad.color.note:id/note_list'); }
  byTitle(title) {
    return $(`//${'android.widget.ListView'}[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]
              //android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"
                                     and @text="${title}"]`);
  }
  async waitForVisible() { await this.list.waitForDisplayed({ timeout: 5000 }); }
}



class NoteScreen extends BaseScreen {
    get TitleField() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_title')
    }
    get NoteField() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_note')
    }
    get editNoteIcon() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_btn')
    }
    get EditNoteBtn() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_btn')
    }
    get NotePadMenu() {
        return $('~More')
    }
    get DiscardBtn() {
        return $('android=new UiSelector().text("Delete")')
    }       
   // get PopUpDlt() {
     //   return $('id=android:id/button1')
    //}

    get SavenoteBtn() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/back_btn')
    }
   

    get TrashBtn() {
        return $('android=new UiSelector().text("Trash Can")')
    }
}

class DeleteNotePopup extends BaseScreen {

     get confirmBtn() {
        return $('id=android:id/button1')
    }

    get cancelBtn() {
        return $('id=android:id/button2')
    }

    async confirm()    { await this.waitAndClick(this.confirmBtn); }
    async cancel()    { await this.waitAndClick(this.cancelBtn); }
}

class NoteListNav extends BaseScreen {


    get TrashBtn() {
        return $('android=new UiSelector().text("Trash Can")')
    }
}
    
module.exports = {
  AddNoteScreen: new AddNoteScreen(),
  NoteScreen: new NoteScreen(),
 DeleteNotePopup: new DeleteNotePopup(),
    NoteListNav: new NoteListNav(),
    NoteListScreen: new NoteListScreen(),
    exports: new TrashScreen()
 
};