// Create an object that models the data of your favorite email application.

let emailData = {
    name: 'gmail',
    mailboxes: [
             'inbox',
             'starred', 
             'important', 
             'sent', 
             'drafts', 
             'spam', 
             'trash'
    ],
    inbox: [
        {sender: 'bob@email.com', title: 'Hi, this is Bob', message: 'Hello, this is Bob and I am writing you an email.'},
        {sender: 'lifeofbrian@email.com', title: 'Lorem Ipsum', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ultrices enim. Morbi a odio vitae libero aliquet condimentum quis sed enim.'}
    ],
    drafts: [{recipient: 'you@email.com', title: 'Dinosaurs', message: 'I also like dinosaurs'}],
    sent: [{recipient: 'you@email.com', title: 'Turtles', message: 'I like turtles.'}],
    contacts: [
            {name: 'Bob', lastMessage: "This is an email"},
            {name: 'Fred', lastMessage: "Today, we are going to rock it!"},
            {name: 'Jane', lastMessage: "It is going to rain on Thursday"},
            {name: 'Bill', lastMessage: "The quick brown fox jumped over the lazy dog"}
    ],
}
let mailboxes =(emailData.mailboxes);
let emails = (emailData.emails);
let inbox = (emailData.inbox);
let drafts = (emailData.drafts);
let sent = (emailData.sent);

// Get a list of mailbox names
console.log(mailboxes.toString());

// Get a list of emails
console.log(inbox);

// Get the text of the second email in the visible list
console.log(inbox[1]);

// Mark an email as sent
sent.push(drafts.pop);

// Add a draft email to the drafts mailbox
drafts.push({recipient: 'you@email.com', title: 'Fish', message: 'I also like fish'});
