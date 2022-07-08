var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'bTwIg8RIj0g', //최초 재생할 Youtube 영상
    playerVars: {
      autoplay: true,   //자동 재생 여부
      loop: true,       //반복 재생 여부
      playlist: 'bTwIg8RIj0g'   //반복 재생할 Youtube 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute()   //음소거
      }
    }
  });
}