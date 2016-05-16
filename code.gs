function saveAttachfile(fromAddress){
  var folder = DriveApp.createFolder('AttachmentFilesFrom:'+fromAddress);
  var thread = GmailApp.search('from:'+fromAddress);
  var msgs = GmailApp.getMessagesForThreads(thread);
  for (var i = 0 ; i < msgs.length; i++) {
   for (var j = 0; j < msgs[i].length; j++) {
     var attachments = msgs[i][j].getAttachments();
     for (var k = 0; k < attachments.length; k++) {
       attachments[k].setName(msgs[i][j].getDate() + attachments[k].getName());
       folder.createFile(attachments[k]);
     }
   }
 }
}

function myFunction(){
  saveAttachfile('hoge@gmail.com');
}
