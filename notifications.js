let notificationsContainer=document.querySelector(".notificationsContainer");
let notificationsCounter=document.querySelector(".notificationsCounter");


/*<div class="notification">
    <section class="block">
        <img src="./images/avatar-mark-webber.webp">
        <section class="text">
            <p><span class="userName">Mark Webber </span><span class="notificationText">reacted to your recent post </span><span class="postName">My first tournament today!</span><span class="statusUnread"></span></p>
            <div class="notificationDate">1m ago</div>
            <div class="message">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game.</div>
        </section>
    </section>
    <img class="picture" src="./images/image-chess.webp">
</div> */

const notificationsList = [];

notificationsList.push({
    profilePicture: "./images/avatar-mark-webber.webp",
    userName: "Mark Webber ",
    notificationText: "reacted to your recent post ",
    postName: "My first tournament today!",
    status: "Unread",
    notificationDate: "1m ago",
    message: "",
    picture: "",
});

notificationsList.push({
    profilePicture: "./images/avatar-angela-gray.webp",
    userName: "Angela Gray ",
    notificationText: "followed you ",
    postName: "",
    status: "Unread",
    notificationDate: "5m ago",
    message: "",
    picture: "",
});

notificationsList.push({
    profilePicture: "./images/avatar-jacob-thompson.webp",
    userName: "Jacob Thompson ",
    notificationText: "has joined your group ",
    postName: "Chess Club",
    status: "Unread",
    notificationDate: "1 days ago",
    message: "",
    picture: "",
});

notificationsList.push({
    profilePicture: "./images/avatar-rizky-hasanuddin.webp",
    userName: "Rizky Hasanuddin ",
    notificationText: "sent you a private message ",
    postName: "",
    status: "Read",
    notificationDate: "5 days ago",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    picture: "",
});

notificationsList.push({
    profilePicture: "./images/avatar-kimberly-smith.webp",
    userName: "Kimberly Smith ",
    notificationText: "commented on your picture ",
    postName: "",
    status: "Read",
    notificationDate: "1 week ago",
    message: "",
    picture: "./images/image-chess.webp",
});

notificationsList.push({
    profilePicture: "./images/avatar-nathan-peterson.webp",
    userName: "Nathan Peterson ",
    notificationText: "reacted to your recent post 5 ",
    postName: "end-game strategies to increase your win rate ",
    status: "Read",
    notificationDate: "2 weeks ago",
    message: "",
    picture: "",
});

notificationsList.push({
    profilePicture: "./images/avatar-anna-kim.webp",
    userName: "Anna Kim ",
    notificationText: "left the group ",
    postName: "Chess Club ",
    status: "Read",
    notificationDate: "2 weeks ago",
    message: "",
    picture: "",
});


function renderNotifications()
{
    let counter=0;

    for (notification of notificationsList) {
        
        notificationCard=document.createElement("div");
        notificationCard.setAttribute("class","notification");

        blockCard=document.createElement("section");
        blockCard.setAttribute("class","block");

        profilePictureCard=document.createElement("img");
        profilePictureCard.setAttribute("src",notification.profilePicture);

        textCard=document.createElement("section");
        textCard.setAttribute("class","text");

        paragraphCard=document.createElement("p");

        userNameCard=document.createElement("span");
        userNameCard.setAttribute("class","userName");
        userNameCard.innerText=notification.userName;

        notificationTextCard=document.createElement("span");
        notificationTextCard.setAttribute("class","notificationText");
        notificationTextCard.innerText=notification.notificationText;

        postNameCard=document.createElement("span");
        postNameCard.setAttribute("class","postName");
        postNameCard.innerText=notification.postName;

        statusCard=document.createElement("span");
        statusCard.setAttribute("class","statusUnread");

        notificationDateCard=document.createElement("div");
        notificationDateCard.setAttribute("class","notificationDate");
        notificationDateCard.innerText=notification.notificationDate;

        messageCard=document.createElement("div");
        messageCard.setAttribute("class","message");
        messageCard.innerText=notification.message;

        pictureCard=document.createElement("img");
        pictureCard.setAttribute("class","picture");
        pictureCard.setAttribute("src",notification.picture);


        notificationsContainer.appendChild(notificationCard);

        notificationCard.appendChild(blockCard);
        notificationCard.appendChild(pictureCard);
        
        blockCard.appendChild(profilePictureCard);
        blockCard.appendChild(textCard);
        

        textCard.appendChild(paragraphCard);
        textCard.appendChild(notificationDateCard);
        textCard.appendChild(messageCard);

        paragraphCard.appendChild(userNameCard);
        paragraphCard.appendChild(notificationTextCard);
        paragraphCard.appendChild(postNameCard);
        paragraphCard.appendChild(statusCard);

        if (notification.status=="Unread") {
            counter++
        }

        if (notification.message=="") {
            messageCard.setAttribute("class","inactive");
        }

        if (notification.picture=="") {
            pictureCard.setAttribute("class","inactive");
        }

        if (notification.status=="Read") {
            notificationCard.setAttribute("class","notificationRead");
            statusCard.setAttribute("class","inactive");
        }

    }

    notificationsCounter.innerText=counter;
}

renderNotifications();

function markAllAssRead() {
    for (notification of notificationsList) {
        if (notification.status=="Unread") {
            notification.status="Read";
        }

    }
    notificationsContainer.innerText="";
    renderNotifications();
}
