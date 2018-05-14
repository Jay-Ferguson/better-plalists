

import React, { Component } from 'react';
import logo from './logo.svg';
import 'reset-css/reset.css';
import './App.css';
import queryString from 'query-string'; 

let defaultStyle = {
 
  color: '#fff',
  'font-family': 'Helvetica Neue Thin'
};

let counterStyle = {defaultStyle,
  width: "40%",
     display: 'inline-block',
    'margin-bottom' : '10px;',
    'font-size' : '20px',
    'line-height' : '30px', 
    
}

//creates and styles button for search query//

function setup(){
  creatCanvas (500,500);
  background(0);
  let button = createButton ('press');
  botton.mousePress (() => background (random(255)));

}
  



class PlaylistCounter extends Component {
  render () {
     let playlistCounterstyle = { defaultStyle, 
     width: "40%",
     display: 'inline-block',
    'margin-bottom' : '10px;',
    'font-size' : '20px',
    'line-height' : '30px',
    }
    
    function isEven(number) {
     return number % 2
      
    }
      return (
   <div style ={PlaylistCounterStyle}>
   <h2>{this.props.playlists.length}playlist</h2>
   
   </div>
    );
   
  }
}


(class HoursCounter extends Component {
render () {
  let allSongs = this.props.playlists.reduce;((songs,eachPlaylist) => { []
  let totalDuration = this.playlist.setState.serverData;
  return songs.concat (eachPlaylist.songs)
}, [])
  let totalDuration = allSongs.reduce((sum,eachSong) => {
  return sum + eachSong.duration},
  0)
  let totalDurationHours = Math.round(totalDuration/60)
  let isTooLow = totalDurationHours < 40
  let hoursCounterStyle = {counterStyle,
    color: isTooLow ? 'red' : 'white',
    'font-weight': isTooLow = 'bold'
    
    
}

   return (
     <div style={hoursCounterStyle}>
      <h2>{totalDurationHours} hours</h2>
      </div>
   );
  }
}







class Filter extends Component { 
  render() {
    return(
      <div style={defaultStyle}>
      <img/>
      <input type="text" onKeyUp={event =>
         this.props.onTextChange(event.target.value)}
         style = {{...defaultStyle,color: 'black','font-size' : '20px', padding: '10px'}}/>
      </div>
    );
  }
}

class Playlist extends Component {
 
  render() {
   let playlist = this.props.playlist
        return (
          <div style = {{defaultStyle,
             display: 'inline-block',
             width:"25",
            padding:'10px',
            'background-color': isEven(this.props.index) % 2 
            ? '#C0C0C0' : '#808080'
          }}>
          <h2>{}playlist.name</h2>
          <img src ={playlist.imageUrl} style={{width:'60px'}}/>
          
          <ul style = {{'margin-top':'10px', 'font-weight':'bold'}}>
          {playlist.songs.map(song =>
          
        <li style={{'padding-top':'2px'}}>{song.name}</li>
         
            
            )}
          
          </ul>
          </div>
        );
    }
}

  
class App extends Component {
   constructor(){
    super();
    this.state = {
    serverData: {},
    FilterString: '' 
   }
  
   }  
 }
  ComponentDidMount() 
   //returns data from the server to the client//
    
    {
    let parsed = queryString.parsed(window.location.querystring);
    let accessToken = parsed.access_token;
    if (!accessToken)
    return;
  }

    
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer' + accessToken}})
       .then(response => response.json())
       .then(data => this.setState({
         user:{
         
           name:data.display_name
          }
        }))    
   
  
   
   fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {'Authorization': 'Bearer' + accessToken}
    })
    .then((response => response.json())
    .then(data => {
    let playlist = playlistData.items
    data.items.map(playlist => {
    let trackDataPromises = playlistData.items.map(playlist => {
    let responsePromise = fetch(playlist.tracks.href,{
    
    headers: {'Authorization': 'Bearer' + accessToken}
          
        })
        
        let trackDataPromise = responsePromise
        .then(response => response.json())
        return trackdataPromise
    
    })
   //sends data of the playlists to the server to return the user data in the hours counter class//
   let allTrackDataPromises = 
      Promise.all(trackDataPromises)
   let playlistPromise = allTrackDataPromises.then(trackData => {
      trackDatas.forEach(trackData, i);
     
      function trackDataPromise =>
      
      {
       playlists[i].trackDatas = trackDatas.items
      .map(item => items.track)
      .map(trackData => ({
       name: trackData.name,
       duration: trackData.duration_ms / 1000
      }))
    }}
   
   return playists
    
    })
  )

    
   
    return playlisyPromise
    .then(playlist => this.setState ({
    playlists: data.items.map(items => {

        
  return {
      name : items.name,
      imageUrl: item.images[0].url,
      songs:item.trackData.slice(0,3).map(trackData => ({
     
      }))
    
  }
    })
  
  }))  

    
   render();{
   let playlistToRender = 
     this.state.user &&
     this.state.playlists
     this.state.playlists.filter(playlist => {
         playlist.name.toLowercase().includes(
     this.state.filterString.toLowercase())
     let matchesSong = playlist.songs.find (song => song.name().includes(this.state.filterString.toLowerCase()))
     return matchesPlaylist || matchesSong
    
    }) ; []
       
       
      
  
  //sets header to send search query data to server and return desired items to client//
   return (
    <div> className="App" <div/>
    
   {this.state.user ?

    <div>
     <h1 style={{...defaultStyle,
     'font-size': '54px',
     'margin-top':'5px'
     }}>
    
     {this.state.user.name}'s Playlists
     </h1>
     this.state.serverData.user.name}'s Playlists'
 
  
          <PlaylistCounter playlists={playlistToRender}/>
          <HoursCounter playlist={playlistToRender}/>
          <Filter onTextChange={text => {
            this.setState({filterString:text})
          }}/>
         
           {paylistsToRender.map(playlist, i)} => 
             <Playlist playlist = {playlist} index={i} />
             )}
          )}
       <div> : <button onClick={ () => {
         window.location.includes ('localhost')
      ? 'https://localhost:8888/login'
      : 'https://herokuapp/better-playlists-backend-jay.herokuapp.com/login' } 
  }
  /> 


    
 
       style={{padding: '20px','font-size':'50px','margin-top':'20px'}}> Sign in 
       
      
      
      
      
       
       : <button style = {{padding: '20px', 'font-size':'180px'}}> Sign in with Spotify</button>
       
     
     {this.state.serverData.user.playlists.map (playlist =>
      
       playlist.name.toLowercase().includes(
         this.state,FilterString.toLowercase())
       .map(playlists => playlist
      )}

       </div>
       
       <div>
       <Playlist playlist={playlist} />
       )}
       
       </div> : <h1 style={defaultStyle}>Loading...</h1>
      }
     <Playlist/>
     <Playlist/>
     <Playlist/>
     <Playlist/>
    
   )
   
   
 }
 </div>
 
 
  :render () {
    let name = 'Jay'
    let white = '#0000'
    let headerStyle = {color} : white, 'font-size' : '54px'}
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Title</h1>
          <PlaylistCounter playlists={playlistToRender}/>
          {/*<HoursCounter playlist={playlistToRender}/>*/}
          <Filter onTextChange = {text => {
            this.setState({filterString:text})
          }}/>
          <Filter onTextChange={text => {} } />
          {this.state.serverData.user.playlists.map(playlists =>
           <Playlist playlist = {playlist}/>
          )}
          <h1>style={headerStyle}>Hello, {name}</h1>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      

      </div> 
      
      : <button onClick={()=>{
        if (window.location.href.includes('localhost')
        ? 'http://localhost:8888/login' 
        : 'https://better-playlist-backend.herokuapp.com/login'
        )
      }

      }
      style ={{'padding': '20px', 'font-size': '50px','margin-top':'20px'}}> Sign in with spotify </button>
      
      
      
    );
  }
