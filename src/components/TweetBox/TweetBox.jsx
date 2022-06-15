import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  console.log("User Profile: ", props.userProfile)
  console.log("setTweets: ", props.setTweets)
  console.log("tweetText: ", props.tweetText)
  console.log("setTweetText: ", props.setTweetText)
  console.log("tweets: ", props.tweets)
  console.log("tweets array length: ", props.tweets.length)

  const handleOnTweetTextChange = () => {
    
  }

  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name, 
      handle: props.userProfile.handle,
      id: props.tweets.length, 
      text: "",
      comments: 0,
      retweets: 0,
      likes: 0
    }

    console.log("click!")
    props.tweets.push(newTweet)
    props.setTweets(props.tweets)
    
    
  }

  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton 
          handleOnSubmit = {handleOnSubmit}
        />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({handleOnSubmit}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
