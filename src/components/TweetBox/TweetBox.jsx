import * as React from "react"
import { useState } from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  console.log("User Profile: ", props.userProfile)
  console.log("setTweets: ", props.setTweets)
  console.log("tweetText: ", props.tweetText)
  console.log("setTweetText: ", props.setTweetText)
  console.log("tweets: ", props.tweets)
  console.log("tweets array length: ", props.tweets.length)

  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)

  }

  const [tweetToggle, setTweetToggle] = useState(true)

  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name, 
      handle: props.userProfile.handle,
      id: props.tweets.length, 
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    }

    props.tweets.push(newTweet)
    props.setTweets(props.tweets)
    props.setTweetText("")
    
    
  }

  return (
    <div className="tweet-box">
      <TweetInput 
        value = {props.tweetText}
        handleOnChange = {handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount 
          text = {props.tweetText}
          setTweetToggle = {setTweetToggle}
        />
        <TweetSubmitButton 
          handleOnSubmit = {handleOnSubmit}
          tweetToggle = {tweetToggle}
          
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
    if(props.text.length > 0 && props.text.length < 141) {
      props.setTweetToggle(false)
      return <span className="tweet-length">{140 - props.text.length}</span>
    } else if(props.text.length >= 141){
      props.setTweetToggle(true)
      return <span className="tweet-length red">{140 - props.text.length}</span>
    } else {
      props.setTweetToggle(true)
      return <span className="tweet-length"></span>
    }
  
}

export function TweetSubmitButton({handleOnSubmit, tweetToggle}) {
  console.log(tweetToggle)
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={tweetToggle}>Tweet</button>
    </div>
  )
}
