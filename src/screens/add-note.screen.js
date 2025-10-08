const BaseScreen = require('./common/base.screen');

class AddNoteScreen extends BaseScreen {
    
    get SkipBtn() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip')
    } 

    get AddNoteBtn() {
        return $('id=com.socialnmobile.dictapps.notepad.color.note:id/img_add');
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

class DiscardPopup extends BaseScreen {

     get confirmBtn() {
        return $('id=android:id/button1')
    }

     async confirm()    { await this.waitAndClick(this.confirmBtn); }

}

class NoteListNav extends BaseScreen {


    get TrashBtn() {
        return $('android=new UiSelector().text("Trash Can")')
    }
}
    
module.exports = {
  AddNoteScreen: new AddNoteScreen(),
  NoteScreen: new NoteScreen(),
 DiscardPopup: new DiscardPopup(),
    NoteListNav: new NoteListNav()
 
};