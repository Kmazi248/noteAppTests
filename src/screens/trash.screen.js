class TrashScreen {
  // Confirm the list id in Inspector. Your screenshot shows `note_list`.
  get list() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/note_list');
  }

  // Match the exact title inside the Trash list.
  // Use ListView or RecyclerView depending on your build.
  byTitle(title) {
    return $(`//*[(@class="android.widget.ListView" or @class="androidx.recyclerview.widget.RecyclerView")
                  and @resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]
               //android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"
                                       and @text="${title}"]`);
  }

  async waitForVisible(timeout = 5000) {
    await this.list.waitForDisplayed({ timeout });
  }
}

module.exports = new TrashScreen();  // <-- IMPORTANT
