# Mini-Twitter

This project is a small scale Twitter clone that I created as part of the Constructor Labs syllabus. The purpose of this project was to experiment with implementing JavaScript into html in order to create dynamic and interactive web applications.

## How To

In order to use this application, you can type your 'Tweet' in the top bar of the page and press submit. When this happen, any Tweets that you send will appear in the timeline below in order from most recent down to the oldest.

## Tasks

In order to complete this task, I had to solve the following problems:

- [ ] Create an HTML page called `index.html` containinga `form` with a `textarea` and submit `button` to write 'Tweets'. Add a `div` underneath which will contain our tweets timeline. The HTML should import `index.js` from `src` folder.
- [ ] Use preventDefault to prevent the `form` from being submitted.
- [ ] When we detect a `submit`, take the Tweet from the text area and place it at the top of the timeline underneath.

## Implementation

My priority with this project wasn't to create beautiful CSS, but to create functionality that allowed for a dynamic and interactive user experience.

I was able to create clean code which utilised callback functions in order to keep the `index.js` file concise and readable.

As well as this, I was able to implement a couple of features to extend the experience. This includes:

- [ ] Providing a character count to inform the user when they are over the length of a tweet.
- [ ] Adding an alert that prevents the user from tweeting something that is too long.

## Improvements

Even though I am very pleased with the work that I did here, there are a number of things I would like to add in order to enhance the experience of the application.

- [ ] Add a delete icon to each tweet. On click, it should remove the corresponding tweet from the timeline.
- [ ] Using a regex to capture any Twitter handles beginning with @ and wrapping an anchor around it which could link to a user's Twitter page.
