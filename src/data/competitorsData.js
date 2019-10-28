export default [{
    id: 1,
    group: "overcast",
    title: "Home",
    img: "/overcast_home.png",
    description: [
      "Overcast first screen features an unusual navigation bar on the top of the screen with icons-only buttons. These are quite generic, like a plus symbol, or the logo of the app itself, which result in being difficult to undestand what action are they performning.",
      "The app manages users playlists, but it's not clear where are these shown. Also the button to add a new playlist is present twice: in the top bar and as a list item.",
      "This home screen doesn't really seem tailored for the personal content of the user."]
  },
  {
    id: 2,
    group: "overcast",
    title: "Search",
    img: "/overcast_search.png",
    description: [
      "The search results screen shows the podcasts which match the searched phrase in their title or description.",
      "The results are separated bewtween users saved podcasts and the ones who are available in the feeds.",
      "Because of this mixed use, selecting on item in the results produced different behaviours, which is not helpful from a usability point of view."]
  },
  {
    id: 3,
    group: "overcast",
    title: "Detail",
    img: "/overcast_detail.png",
    description: [
      "The datail info of a podcast show contains the list of all episodes and a 'subscribe' button.",
      "When the show has already been listened, some more filters are displayed.",
      "There is quite a small amount of info which don't help the user in understanding if the specicf podcast is valuable or not.",
    ]
  },
  {
    id: 4,
    group: "overcast",
    title: "Playing",
    img: "/overcast_playing.png",
    description: [
      "When we start playing an episode, the app shows this playback dashboard screen which features several different controls to adjust the playback speed, its volume and a sleep timer.",
      "The choice of functionalities seems to privilege a rapid consumption rather than a deep one.",
      "Also in this screen an unusual interaction design has been applied: there are two side panels in what seems more like a slideshow of pictures. Because of this strange interaction, the developer needed to place extra buttons at the bottom to replicate the functionality.",
      "There is also a 'favourite' button, that sets the episode as a favourite one, but it seems to be completely ignored in the rest of the app."]
  },
  {
    id: 5,
    group: "overcast",
    title: "Downloaded",
    img: "/overcast_downloaded.png",
    description: [
      "Downloaded episodes are displayed in a list, with no filters, grouping or sorting.",
      "Even if the info on how much of the episode has been consumed is shown, it seems to lack contrast, and even worse it hides the total duration of the show.",
    ]
  },
  {
    id: 6,
    group: "apple podcasts",
    title: "Library",
    img: "/apple_home.png",
    description: [
      "Apple's podcast app has a standard bottom tabs bar where we can find the 'Library' section, that offers a good separation between users personal content and all the rest.",
      "This section keeps track of all the podcasts that the user has ever listened, offering a grouping by show, episode and downloaded content.",
      "It's interesting to see that an area of the screen is dedicated to shows which have recently been updated."]
  },
  {
    id: 7,
    group: "apple podcasts",
    title: "Search",
    img: "/apple_search.png",
    description: [
      "Apple Podcasts search page clearly separate the results bewteen users content and all the rest.",
      "The interaction with the search bar happens in two steps: it first opens a keyword research, and then follows with the search result.",
      "The results are displayed using large icons, which puts the marketing effort of publisher at test, while leaving in a secondary position other aspects like users rating and 'freshness' of content."]
  },
  {
    id: 8,
    group: "apple podcasts",
    title: "Detail",
    img: "/apple_detail.png",
    description: [
      "The detail page of a podcast has a clear favourite call to action: the subscribe button. This is understandable because Apple searching algorithm is also based on the number of subscribers.",
      "The designer also chose to hide into an 'more options' menu other actions which seem less important: unsubscribe, settings, remove from library, play next and share.",
      "Some space is dedicated to 'social-proof': number of ratings and average score are displayed. Together with the period of activity of the show and its category they will help the user having a first assessment of the podcast."
    ]
  },
  {
    id: 9,
    group: "apple podcasts",
    title: "Playing",
    img: "/apple_playing.png",
    description: [
      "The playing screen is entirely dedicated to the podcast cover. Worth to notice that the user interface is exactley the same as the Music app of any iOS device.",
      "Controls for speed of playback, skip and rewind are displayed, in a clean and simple way, which result  familiar for the general user."]
  },
  {
    id: 10,
    group: "apple podcasts",
    title: "Downloaded",
    img: "/apple_downloaded.png",
    description: [
      "From the library screen we can navigate to the page where all downloaded episodes are displayed.",
      "The app offers only a sort by title or date to organize this content, and quite surprisingly the affordance of the list is not intuitive: selecting a row starts the playback, while a 'details' link is shown to navigate to the correspondent page."
    ]
  }
];