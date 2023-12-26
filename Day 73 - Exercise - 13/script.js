function createCard (title, thumbnail, channelName, views, monthsOld, duration) {

    // body
    document.body.display = "flex";
    document.body.justifyContent = "center";

    // container
    document.querySelector(".container").style.width = "57vw";
    document.querySelector(".container").style.margin = "auto";
    document.querySelector(".container").style.backgroundColor = "#0f0f0f";
    document.querySelector(".container").style.color = "white";
    document.querySelector(".container").style.borderRadius = "15px 0px 0px 15px";
    document.querySelector(".container").style.display = "flex";
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";


    // creating card left div
    let cardDiv1 = document.createElement("div");
    cardDiv1.setAttribute("class", "left-div");
    document.querySelector(".container").append(cardDiv1);
    document.querySelector(".left-div").style.width = "13.5vw";
    document.querySelector(".left-div").style.display = "flex";

    // creating card right div
    let cardDiv2 = document.createElement("div");
    cardDiv2.setAttribute("class", "right-div");
    document.querySelector(".container").append(cardDiv2);
    document.querySelector(".right-div").style.display = "flex";
    document.querySelector(".right-div").style.flexDirection = "column";
    
    // creating card right div up
    let cardDiv3 = document.createElement("div");
    cardDiv3.setAttribute("class", "right-div-up");
    document.querySelector(".right-div").append(cardDiv3);
    // document.querySelector(".right-div-up").style.margin = "0px";
    
    // creating card right div down
    let cardDiv4 = document.createElement("div");
    cardDiv4.setAttribute("class", "right-div-down");
    document.querySelector(".right-div").append(cardDiv4);
    document.querySelector(".right-div").style.display = "flex";
    document.querySelector(".right-div").style.display = "flex";
    document.querySelector(".right-div-down").style.display = "flex";
    document.querySelector(".right-div-down").style.gap = "5px";
    document.querySelector(".right-div-down").style.fontSize = "11px";
    document.querySelector(".right-div-down").style.color = "#aaaaaa";
    document.querySelector(".right-div-down").style.alignItems = "center";
    
    // ----------------------------------------------------------------------
    
    // card image-thumbnail
    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img");
    cardImg.setAttribute("src", thumbnail);
    document.querySelector(".left-div").appendChild(cardImg);
    document.querySelector(".card-img").style.zIndex = "0";
    document.querySelector(".card-img").style.borderRadius = "15px";
    // document.querySelector(".card-img").style.width = "200px";
    
    // duraction
    const cardDuration = document.createElement("div");
    cardDuration.setAttribute("class", "duration");
    cardDuration.innerHTML = duration;
    document.querySelector(".left-div").append(cardDuration);
    document.querySelector(".duration").style.backgroundColor = "black";
    document.querySelector(".duration").style.borderRadius = "4px";
    document.querySelector(".duration").style.height = "17px";
    document.querySelector(".duration").style.fontSize = "14px";
    document.querySelector(".duration").style.zIndex = "2";
    document.querySelector(".duration").style.position = "relative";
    document.querySelector(".duration").style.top = "87px";
    document.querySelector(".duration").style.right = "47px";
    document.querySelector(".duration").style.padding = "1px 4px";
    
    
    // ----------------------------------------------------------------------
    
    // card video Title
    const videoTitle = document.createElement("h3");
    videoTitle.setAttribute("class", "video-title");
    videoTitle.innerHTML = title;
    document.querySelector(".right-div-up").append(videoTitle);
    document.querySelector(".video-title").style.fontSize = "16px";
    document.querySelector(".video-title").style.margin = "8px 0px 0px";
    document.querySelector(".video-title").style.fontWeight = "500";

// ----------------------------------------------------------------------

    // card channelName
    const cName = document.createElement("p");
    cName.setAttribute("class", "channel-name");
    cName.innerHTML = channelName;
    document.querySelector(".right-div-down").append(cName);

    // adding •
    const dot = document.createElement("span");
    dot.setAttribute("class", "dot");
    dot.innerHTML = "•";
    document.querySelector(".right-div-down").append(dot);

    // card views
    const videoViews = document.createElement("p");
    videoViews.setAttribute("class", "video-views");
    
    if (views > 1000 && views <= 1000000) {
        let temp = views / 1000;
        views = temp + "K views";
    }
    else if (views > 1000001 && views <= 10000000) {
        let temp = views / 1000000;
        views = temp + "M views";
    }
    else {
        views = views + " views";
    }

    videoViews.innerHTML = views;
    document.querySelector(".right-div-down").append(videoViews);

    // adding •
    const dot2 = document.createElement("span");
    dot2.setAttribute("class", "dot");
    dot2.innerHTML = "•";
    document.querySelector(".right-div-down").append(dot2);


    // card channelName
    const videoMonths = document.createElement("p");
    videoMonths.setAttribute("class", "video-months");
    videoMonths.innerHTML = monthsOld + " months old";
    document.querySelector(".right-div-down").append(videoMonths);
}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "./e13.jpg", "CodeWithHarry", 807000, 3, "31:20")
// •