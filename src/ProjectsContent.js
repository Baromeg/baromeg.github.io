// Images
import kyh from "./img/kyhfrontpage.png"
import heroes from "./img/heroes.png"
import frogger from "./img/frogger.png"
import greenworld from "./img/greenworld.png"
import webpack from "./img/webpack.png"
import heroku from "./img/heroku.png"

export const ProjectsContent = () => {
  return [
    {
      name: "Know your Heritage",
      mainImg: kyh,
      secondaryImg: kyh,
      url: "/myprojects/know-your-heritage",
      website: "https://knowyourheritage.herokuapp.com/",
      github: "https://github.com/Baromeg/project-4",
      description: [
        "The application showcases the wonders of the UNESCO’s World Heritage List to promote its awareness.",
        "Using Python I computed the data from several API’s requests (UNESCO list + Google Places & Photos) and built the componentry for the UI.",
        "The app has email verification using SendGrid, a map feature using Mapbox and an image carousel using ImageGallery.",
      ],
      tools: [
        {
          tool: "webpack",
          toolImg: webpack,
        },
        {
          tool: "heroku",
          toolImg: heroku,
        },
      ],
    },
    {
      name: "GreenWorld",
      mainImg: greenworld,
      secondaryImg: greenworld,
      url: "/myprojects/greenworld",
      website: "https://greenworld-p3.herokuapp.com/",
      github: "https://github.com/Baromeg/project-3",
      description: [
        "The application helps the user make greener decisions by discovering sustainable business and communities locally.",
        "I built the 'Single location' page and enriched the UX with the map tile using MapBox, the comments and ratings using React-Ratings, the photo upload feature using Cloudinary.",
        "It handles async requests (Yelp, Mapbox) with error handling triggers and geolocation for best UX.",
      ],
      tools: [
        {
          tool: "webpack",
          toolImg: webpack,
        },
        {
          tool: "heroku",
          toolImg: heroku,
        },
      ],
    },
    {
      name: "Heroes",
      mainImg: heroes,
      secondaryImg: heroes,
      url: "/myprojects/heroes",
      website: "https://baromeg.github.io/project-2",
      github: "https://github.com/Baromeg/project-2",
      description: [
        "The application features all-time comic heroes.",
        "Pair programming throughout the project fetching several API’s (SuperHero & ComicVine) to link each hero with its first comic appearance as well as the entire UI.",
        "I enhanced the UX by implementing the image carousel on the home page using react-carousel library.",
      ],
      tools: [
        {
          tool: "webpack",
          toolImg: webpack,
        },
        {
          tool: "heroku",
          toolImg: heroku,
        },
      ],
    },
    {
      name: "The Frogger",
      mainImg: frogger,
      secondaryImg: frogger,
      url: "/myprojects/frogger",
      website: "https://baromeg.github.io/project-1",
      github: "https://github.com/Baromeg/project-1",
      description: [
        "It was my first independently made application. It is a grid-based game where I implemented the concepts learned on CSS, JavaScript, logical thinking and problem-solving.",
        "The game handles moving obstacles and tracks the player's scoring.",
      ],
      tools: [
        {
          tool: "webpack",
          toolImg: webpack,
        },
        {
          tool: "heroku",
          toolImg: heroku,
        },
      ],
    },
  ]
}
