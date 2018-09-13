const getTweet = document.querySelector("#form");

function submitHandler(event) {
  event.preventDefault();
  const grabText = document.querySelector(".textTweet");
  const content = grabText.value;
  if (content.length <= 280) {
    const ourEl = document.createElement("p");
    ourEl.className = "tweet";

    const ourValNode = document.createTextNode(content);
    ourEl.appendChild(ourValNode);

    const parentDiv = document.querySelector(".timeLine");

    const divChildren = parentDiv.childElementCount;

    if (divChildren > 0) {
      const ourRef = document.querySelector(".tweet");
      ourRef.parentNode.insertBefore(ourEl, ourRef);
    } else {
      parentDiv.appendChild(ourEl);
    }
  } else {
    alert("Your tweet is too long!");
  }
}

function changeHandler(event) {
  const tweetLength = event.target.value.length;
  const amount = document.querySelector(".counter");
  amount.textContent = tweetLength;

  if (tweetLength > 280) {
    document.querySelector(".charCount").style.backgroundColor = "red";
  } else {
    document.querySelector(".charCount").style.backgroundColor = "skyblue";
  }
}

getTweet.addEventListener("submit", submitHandler);

getTweet.addEventListener("input", changeHandler);
