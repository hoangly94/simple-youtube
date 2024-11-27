import { ExploreIcon, FavoriteIcon, HomeIcon, MailIcon } from "@repo/ui/icons";

export const userStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};

export const menuItems = [
  {
    id: "home",
    title: "Home",
    icon: HomeIcon,
  },
  {
    id: "explore",
    title: "Explore",
    icon: ExploreIcon,
  },
  {
    id: "favorites",
    title: "Favorites",
    icon: FavoriteIcon,
  },
  {
    id: "Messages",
    title: "Messages",
    icon: MailIcon,
    showNotification: true,
  },
];

export const subscriptionItems = [
  {
    id: 1,
    name: "The Futur",
  },
  {
    id: 2,
    name: "Matthew Encina",
  },
  {
    id: 3,
    name: "Paulo Trajano",
  },
  { id: 4, name: "DAZN" },
  {
    id: 5,
    name: "Nintendo",
  },
  {
    id: "6",
    name: "Cuberto Design",
  },
];

export const categorites = [
  {
    id: 1,
    name: "Games",
    color: "EF5DA8",
  },
  {
    id: 2,
    name: "Sports",
    color: "5D5FEF",
  },
  {
    id: 3,
    name: "Design",
    color: "FFDE89",
  },
  {
    id: 4,
    name: "Tech",
    color: "89F8FF",
  },
  {
    id: 5,
    name: "Movies",
    color: "FF5353",
  },
  {
    id: 6,
    name: "Office",
    color: "89FFA3",
  },
];

export const comments = [
  {
    id: 1,
    user: "John Doe",
    content: "Can’t wait to watch this.",
    likeCount: 1403,
    dislikeCount: 321,
    created: "2024-11-21T12:00:43Z",
  },
  {
    id: 2,
    user: "Andrew Duck",
    content: "Awesome!",
    likeCount: 1211,
    dislikeCount: 2,
    created: "2024-11-21T12:00:43Z",
  },
];

export const videoItem = {
  kind: "youtube#videoListResponse",
  etag: "zbOVKbbmlHIJ20EykykoiefkJzU",
  items: [
    {
      kind: "youtube#video",
      etag: "_HKBV1dIXQD7Hq4J7-c8E4OhJe4",
      id: "_HQwAK8V5G0",
      snippet: {
        publishedAt: "2024-11-21T12:00:43Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title:
          "Screamer From Maya Le Tissier 😳🔥 | Everton 0-2 Man Utd | League Cup",
        description:
          "Take a look at the key moments as Man Utd Women faced Everton Women in the League Cup.\n\n▶️ Subscribe to Manchester United on YouTube at http://bit.ly/ManU_YT\n📲 Download the Man Utd app: http://manutd.co/F4c\n💻 Visit Manchester United: http://www.manutd.com\n🛒 Shop your favourite United attire: https://bit.ly/3s9uTW7\n\n#MUFC",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Manchester United",
        tags: [
          "manchester united",
          "mufc",
          "man utd",
          "manutd",
          "mu",
          "ggmu",
          "old trafford",
          "goals",
          "highlights",
          "raphael varane",
          "jadon sancho",
          "cristiano ronaldo",
          "ronaldo",
          "ronaldo goals",
          "david de gea",
          "de gea",
          "maguire",
          "shaw",
          "fred",
          "mctominay",
          "man utd goals",
          "Elanga",
          "Rashford",
          "Marcus Rashford",
          "Bruno",
          "Bruno Fernandes",
          "Lindelof",
          "Erik ten Hag",
          "Ten Hag",
          "Martinez",
          "Malacia",
          "Eriksen",
          "Casemiro",
          "Antony",
          "MU Highlights",
        ],
        categoryId: "17",
        liveBroadcastContent: "none",
        defaultLanguage: "en-GB",
        localized: {
          title:
            "Screamer From Maya Le Tissier 😳🔥 | Everton 0-2 Man Utd | League Cup",
          description:
            "Take a look at the key moments as Man Utd Women faced Everton Women in the League Cup.\n\n▶️ Subscribe to Manchester United on YouTube at http://bit.ly/ManU_YT\n📲 Download the Man Utd app: http://manutd.co/F4c\n💻 Visit Manchester United: http://www.manutd.com\n🛒 Shop your favourite United attire: https://bit.ly/3s9uTW7\n\n#MUFC",
        },
        defaultAudioLanguage: "en-GB",
      },
      contentDetails: {
        duration: "PT3M46S",
        dimension: "2d",
        definition: "hd",
        caption: "false",
        licensedContent: true,
        contentRating: {},
        projection: "rectangular",
      },
      statistics: {
        viewCount: "35390",
        likeCount: "1433",
        favoriteCount: "0",
        commentCount: "46",
      },
    },
  ],
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1,
  },
};

export const videoList = {
  kind: "youtube#searchListResponse",
  etag: "lm-vfFrXGXe7TE8szQ0w_Z_XoFc",
  nextPageToken: "CDIQAA",
  regionCode: "VN",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 50,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "2FvZWiz5lMzCDHbzc-58XymRMns",
      id: {
        kind: "youtube#channel",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
      },
      snippet: {
        publishedAt: "2017-12-19T13:21:04Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Manchester United",
        description: "The official YouTube channel of Manchester United.",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/v1N6ZLmSuhIzMDiRzu1fdgJP9Yhi1H687cyHOLEJ5OFFNGJzWeC6cxDWXp2bqOKlyiC0oEcIJg=s88-c-k-c0xffffffff-no-rj-mo",
          },
          medium: {
            url: "https://yt3.ggpht.com/v1N6ZLmSuhIzMDiRzu1fdgJP9Yhi1H687cyHOLEJ5OFFNGJzWeC6cxDWXp2bqOKlyiC0oEcIJg=s240-c-k-c0xffffffff-no-rj-mo",
          },
          high: {
            url: "https://yt3.ggpht.com/v1N6ZLmSuhIzMDiRzu1fdgJP9Yhi1H687cyHOLEJ5OFFNGJzWeC6cxDWXp2bqOKlyiC0oEcIJg=s800-c-k-c0xffffffff-no-rj-mo",
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2017-12-19T13:21:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "JcTFFYi2LBez_6I_WoF5eMaBiws",
      id: {
        kind: "youtube#video",
        videoId: "JtW_5wmyoNA",
      },
      snippet: {
        publishedAt: "2024-11-19T15:00:31Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Inside Ruben Amorim&#39;s First Training Session! 🤩",
        description:
          "Get exclusive access into Ruben Amorim's first-ever training session at Carrington since becoming Manchester United's Head ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JtW_5wmyoNA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JtW_5wmyoNA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JtW_5wmyoNA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-19T15:00:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "MuQ26Ue0WDHbn26VIVSHwy3-Nbw",
      id: {
        kind: "youtube#video",
        videoId: "fSe8-119bzo",
      },
      snippet: {
        publishedAt: "2024-11-20T17:00:46Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Showing Love To The Fans 🫶 | What Moves Me: Kobbie Mainoo",
        description:
          "Pre-match music, putting on the United shirt and giving love back to the fans. This is what moves Kobbie ▶️ Subscribe to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/fSe8-119bzo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/fSe8-119bzo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/fSe8-119bzo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T17:00:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "p9SnqW4vEuBJRrcB2_xxQqfCcgs",
      id: {
        kind: "youtube#video",
        videoId: "K_rM4yRqX1I",
      },
      snippet: {
        publishedAt: "2024-11-21T18:00:11Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Casemiro&#39;s Favourite United Goal? 😱",
        description:
          "Casemiro talks us through eight of his best United goals and decides which one is his favourite! ▶️ Subscribe to Manchester ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/K_rM4yRqX1I/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/K_rM4yRqX1I/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/K_rM4yRqX1I/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T18:00:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "7U9SeNCof3D7AXF4o1ksl4hXSvA",
      id: {
        kind: "youtube#video",
        videoId: "_HQwAK8V5G0",
      },
      snippet: {
        publishedAt: "2024-11-21T12:00:43Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title:
          "Screamer From Maya Le Tissier 😳🔥 | Everton 0-2 Man Utd | League Cup",
        description:
          "Take a look at the key moments as Man Utd Women faced Everton Women in the League Cup. ▶️ Subscribe to Manchester ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/_HQwAK8V5G0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T12:00:43Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Z6BQdEflDZj102o2hq8_ONlKmyo",
      id: {
        kind: "youtube#video",
        videoId: "B9sG25PpTjY",
      },
      snippet: {
        publishedAt: "2024-11-21T10:48:31Z",
        channelId: "UCMmVPVb0BwSIOWVeDwlPocQ",
        title: "Amorim STUNNED by this ISSUE! Onana BLOW! Man Utd News",
        description:
          "Man Utd coach Ruben Amorim is apparently stunned by the lack of intensity in the United squad and Andre Onana could be set to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/B9sG25PpTjY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/B9sG25PpTjY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/B9sG25PpTjY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The United Stand",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T10:48:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "sdkdizPgjgdykVRhQKUnyF0QmZk",
      id: {
        kind: "youtube#video",
        videoId: "MoCOY4JBdYc",
      },
      snippet: {
        publishedAt: "2024-11-20T18:02:00Z",
        channelId: "UCHmWvpqSYe5f865lV5B-N-w",
        title:
          "Yes 🔥,  Fernandes joins Ruben Amorim 2nd  Manchester United training today  ...",
        description:
          "Ruben Amorim Manchester United Man United training today Man united News today.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/MoCOY4JBdYc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/MoCOY4JBdYc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/MoCOY4JBdYc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Man United HQ",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T18:02:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FKq92IGp2uRSYG3zqzroLuJwsvQ",
      id: {
        kind: "youtube#video",
        videoId: "EbsVqrP3C4s",
      },
      snippet: {
        publishedAt: "2024-11-21T20:00:13Z",
        channelId: "UCMmVPVb0BwSIOWVeDwlPocQ",
        title:
          "AMORIM&#39;S FIRST GAME! Ipswich vs Manchester United! Goldbridge Preview",
        description:
          "Ruben Amorim makes his debut as Manchester United manager this weekend away to Ipswich! Who do you think will start?",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/EbsVqrP3C4s/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/EbsVqrP3C4s/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/EbsVqrP3C4s/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The United Stand",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T20:00:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FAkbkNK7sk1OqorCg415xHPk78U",
      id: {
        kind: "youtube#video",
        videoId: "2Jfk2limySw",
      },
      snippet: {
        publishedAt: "2024-11-10T22:00:02Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Ruud&#39;s Final Game In Charge! | Man Utd 3-0 Leicester",
        description:
          "Watch the action from Manchester United's 3-0 victory over Leicester City in the Premier League at Old Trafford, in Ruud van ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/2Jfk2limySw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/2Jfk2limySw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/2Jfk2limySw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-10T22:00:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "y62FR038dpgAqD_sIBwqzVQLu6w",
      id: {
        kind: "youtube#video",
        videoId: "uXUYxTE-c4g",
      },
      snippet: {
        publishedAt: "2024-11-08T00:00:36Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Amad Double! 🌟 | Man Utd 2-0 PAOK",
        description:
          "Watch the key moments from Manchester United's 2-0 victory over PAOK in the UEFA Europa League at Old Trafford with goals ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/uXUYxTE-c4g/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/uXUYxTE-c4g/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/uXUYxTE-c4g/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-08T00:00:36Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "HQcTzZPBdG3KE9KntK75-cSLiLU",
      id: {
        kind: "youtube#video",
        videoId: "wqVvo-RIprw",
      },
      snippet: {
        publishedAt: "2024-11-18T17:01:04Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Ruben Amorim First Interview 🗣️🏟️",
        description:
          "Watch Ruben Amorim's first-ever interview as Manchester United's Head Coach. Club Reporter Harry Robinson speaks to Ruben ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/wqVvo-RIprw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/wqVvo-RIprw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/wqVvo-RIprw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-18T17:01:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "HWg2TPOtHKcAVnVL_nLPlG-diRQ",
      id: {
        kind: "youtube#video",
        videoId: "J-kbZ_F7T6A",
      },
      snippet: {
        publishedAt: "2024-11-21T10:54:00Z",
        channelId: "UCEfEaGKGSxy8ZYIV1RWLbCQ",
        title:
          "Fabrizio On Man Utd&#39;s Left Back Focus: Davies, Kerkez &amp; More | Yoro Readied For Ipswich Under Amorim",
        description:
          "Manchester United's focus is on signing a new left-back with Alphonso Davies, Milos Kerkez and more being scouted, Fabrizio ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/J-kbZ_F7T6A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/J-kbZ_F7T6A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/J-kbZ_F7T6A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "UnitedPeoplesTV",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T10:54:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "76U1QfOWErIBT700otP-3wS7H40",
      id: {
        kind: "youtube#video",
        videoId: "oRXc1bwUaME",
      },
      snippet: {
        publishedAt: "2024-11-20T14:30:52Z",
        channelId: "UCMmVPVb0BwSIOWVeDwlPocQ",
        title: "Amorim&#39;s BEST Eleven For Ipswich! Man Utd News",
        description:
          "As the Ipswich match draws closer and players return from international duty, will we get a clearer picture of how Amorim plans to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/oRXc1bwUaME/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/oRXc1bwUaME/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/oRXc1bwUaME/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The United Stand",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T14:30:52Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qGH9uxuukoHLqOGtNds9wvXWvio",
      id: {
        kind: "youtube#video",
        videoId: "LhugJu95Vdw",
      },
      snippet: {
        publishedAt: "2024-11-21T19:00:12Z",
        channelId: "UCk8gzAOGprcGAFMWGzZ2zQw",
        title:
          "‘Give Ruben Amorim time, because he’s the TRUTH!’ Manchester United’s new era begins | ESPN FC",
        description:
          "ESPN's Football Forecast team of Nubaid Haroon, Kweku Afari and Kim Kothari break down the start of a new era at Manchester ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/LhugJu95Vdw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/LhugJu95Vdw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/LhugJu95Vdw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "ESPN UK",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T19:00:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qUellDhKktQz04mBNrVjSPwenEg",
      id: {
        kind: "youtube#video",
        videoId: "S1zuY7X8HmE",
      },
      snippet: {
        publishedAt: "2024-11-03T20:59:24Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "All Square At Old Trafford | Man Utd 1-1 Chelsea",
        description:
          "Watch all the key moments from United's 1-1 draw with Chelsea at Old Trafford. ▶️ Subscribe to Manchester United on YouTube ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/S1zuY7X8HmE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/S1zuY7X8HmE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/S1zuY7X8HmE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-11-03T20:59:24Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "u4sZS9qZfdpwmsgM2Gw4gEdBlb0",
      id: {
        kind: "youtube#video",
        videoId: "uQVe910iAHI",
      },
      snippet: {
        publishedAt: "2024-09-17T23:20:37Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "GOALS GALORE AT OLD TRAFFORD 🤩 | Man Utd 7-0 Barnsley",
        description:
          "Watch the highlights of our 7-0 victory over Barnsley in the Carabao Cup on Tuesday night! Goals under the Old Trafford lights ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/uQVe910iAHI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/uQVe910iAHI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/uQVe910iAHI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-09-17T23:20:37Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "N9XQvpHTbl8alzcg92N92twYiXs",
      id: {
        kind: "youtube#video",
        videoId: "lHADwiOD6k8",
      },
      snippet: {
        publishedAt: "2024-10-24T23:01:00Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "All Square In Istanbul | Fenerbahce 1-1 Man Utd",
        description:
          "Watch all the key moments from United's 1-1 draw in Turkey. ▶️ Subscribe to Manchester United on YouTube at ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/lHADwiOD6k8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/lHADwiOD6k8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/lHADwiOD6k8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-10-24T23:01:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "e9lHLSGO46JpbNM3BUNeUJBLC_Q",
      id: {
        kind: "youtube#video",
        videoId: "_ZYItjCaE4U",
      },
      snippet: {
        publishedAt: "2024-11-21T18:00:18Z",
        channelId: "UCxVoBlRQHWr-GKiAH0zMSCg",
        title:
          "How Ruben Amorim will resurrect Marcus Rashford&#39;s Man United career with subtle position change",
        description:
          "THE FIRST LOOK | Ruben Amorim's introduction to the Man United faithful takes place vs Ipswich at Portman Road on Sunday ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/_ZYItjCaE4U/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/_ZYItjCaE4U/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/_ZYItjCaE4U/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The Sun Sport",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T18:00:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "fu3SUwUBJ87aQMeZxGg5XZ1KjUw",
      id: {
        kind: "youtube#video",
        videoId: "rnQONacu5gM",
      },
      snippet: {
        publishedAt: "2024-11-21T14:16:09Z",
        channelId: "UCnQpt1UxLq00NFULxTDHMww",
        title:
          "A Stunning Maya Le Tissier Strike! ☄️ | Everton v Manchester United | Women&#39;s League Cup 24/25",
        description:
          "Manchester United secured their second win in the Women's League Cup with a solid 2-0 victory over Everton. The Official ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/rnQONacu5gM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/rnQONacu5gM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/rnQONacu5gM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Barclays Women's Super League",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T14:16:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "C5pNfAl8FyZsAH_DyL0QsUrELOI",
      id: {
        kind: "youtube#video",
        videoId: "BvpEAfTN7fk",
      },
      snippet: {
        publishedAt: "2024-10-31T09:00:09Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "FIVE-STAR PERFORMANCE ⭐️ | Man Utd 5-2 Leicester | Highlights",
        description:
          "Five goals, three goal-scorers in Casemiro (2), Garnacho and Bruno Fernandes (2) and name in the hat for the quarter-finals, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/BvpEAfTN7fk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/BvpEAfTN7fk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/BvpEAfTN7fk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-10-31T09:00:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "7tQ5mhaXF-yrw2Dy4a2WuhRR5nM",
      id: {
        kind: "youtube#video",
        videoId: "kaBbza1ZnIs",
      },
      snippet: {
        publishedAt: "2024-11-21T12:11:21Z",
        channelId: "UC7w8GnTF2Sp3wldDMtCCtVw",
        title: "Ruben Amorim Sporting Deal REVEALED! | Man United News",
        description:
          "Amorim has an agreement with Sporting over signing some of his former players in Portugal! Join Jay for the news LIVE Become a ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kaBbza1ZnIs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kaBbza1ZnIs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kaBbza1ZnIs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Stretford Paddock",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T12:11:21Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Ti94RWUQeBILWvEB9cet4Nan-jA",
      id: {
        kind: "youtube#video",
        videoId: "0Z0y3S8xWQM",
      },
      snippet: {
        publishedAt: "2024-10-31T00:21:01Z",
        channelId: "UCCmo_NIuQR5eU4AvBa6sEQQ",
        title:
          "RUUD&#39;S FIRST GAME! | Manchester United v Leicester City extended highlights",
        description:
          "Subscribe to the channel for more of the best Official EFL videos!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0Z0y3S8xWQM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0Z0y3S8xWQM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0Z0y3S8xWQM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "EFL",
        liveBroadcastContent: "none",
        publishTime: "2024-10-31T00:21:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "ka8sAl5-IYl6vNgS87KnoYRyWoI",
      id: {
        kind: "youtube#video",
        videoId: "WmAhTwi1h0g",
      },
      snippet: {
        publishedAt: "2024-11-20T18:05:39Z",
        channelId: "UC4SUUloEcrgjsxbmy_rQQXA",
        title: "AMORIM FIXES MAN UTD🔴",
        description:
          "How did Ruben Amorim get on in his first week at Manchester United? ⚽️ Subscribe to 442oons: http://bit.ly/442oonsSUB ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/WmAhTwi1h0g/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/WmAhTwi1h0g/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/WmAhTwi1h0g/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "442oons",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T18:05:39Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "D10Qgd8ps6KtZU9lw3BseQtV5tA",
      id: {
        kind: "youtube#video",
        videoId: "nIWQJHxvkag",
      },
      snippet: {
        publishedAt: "2024-10-19T21:00:33Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title:
          "Hojlund &amp; Garnacho Complete COMEBACK! | Man Utd 2-1 Brentford",
        description:
          "Shop your favourite United attire: https://bit.ly/3Yv7L5y Alejandro Garnacho and Rasmus Hojlund completed a second-half ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nIWQJHxvkag/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nIWQJHxvkag/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nIWQJHxvkag/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-10-19T21:00:33Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "iBaKMtNCU9wpQaM5vxh3cmCgTa0",
      id: {
        kind: "youtube#video",
        videoId: "OIrGZlxVpsk",
      },
      snippet: {
        publishedAt: "2024-11-20T19:30:04Z",
        channelId: "UCk8gzAOGprcGAFMWGzZ2zQw",
        title:
          "How Will Ruben Amorim’s first 10 games in charge of Manchester United go? | ESPN FC",
        description:
          "Mark Donaldson is joined by Luis Miguel Echegaray, Rob Dawson and Stevie nicol to discuss Ruben Amorim's opening fixtures ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/OIrGZlxVpsk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/OIrGZlxVpsk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/OIrGZlxVpsk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "ESPN UK",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T19:30:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "NbrPseKOZNNtZy6ozBGx1ddlQXQ",
      id: {
        kind: "youtube#video",
        videoId: "OZzaRf92MNo",
      },
      snippet: {
        publishedAt: "2024-11-21T10:21:50Z",
        channelId: "UCkybnKd0n7Mg6fkoU7KvhIA",
        title:
          "Ruben Amorim Teaching Bruno Fernandes New Role after he joined 2nd Man United training under Amorim",
        description:
          "Manchester United's key players are slowly returning from international duty with Bruno Fernandes joining Wednesday's training ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/OZzaRf92MNo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/OZzaRf92MNo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/OZzaRf92MNo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Daily Football News",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T10:21:50Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "IgSJG6yl6E5BGxRkT0ztXOTpWP0",
      id: {
        kind: "youtube#video",
        videoId: "FB5DxpHa2BE",
      },
      snippet: {
        publishedAt: "2024-11-17T17:12:09Z",
        channelId: "UCnQpt1UxLq00NFULxTDHMww",
        title:
          "Full Match: Leicester City v Manchester United | Barclays WSL 2024-25",
        description:
          "Catch all the action as Leicester City face Manchester United in an exciting Barclays WSL clash The Official YouTube channel ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/FB5DxpHa2BE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/FB5DxpHa2BE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/FB5DxpHa2BE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Barclays Women's Super League",
        liveBroadcastContent: "none",
        publishTime: "2024-11-17T17:12:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "X6_yQms1ufGrgGtFxUxLYJeCz8w",
      id: {
        kind: "youtube#video",
        videoId: "5VM9zKyfk9E",
      },
      snippet: {
        publishedAt: "2024-08-16T23:44:11Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title:
          "DEBUT GOAL FOR ZIRKZEE! 🤩 | Man Utd 1-0 Fulham | Premier League",
        description:
          "Joshua Zirkzee's debut goal earned United all three points on the opening day of the Premier League season! ▶️ Subscribe ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/5VM9zKyfk9E/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/5VM9zKyfk9E/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/5VM9zKyfk9E/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-08-16T23:44:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "uYgPjaQqZmzryDNdKacuZISwIMk",
      id: {
        kind: "youtube#video",
        videoId: "zRdGRkdZdXY",
      },
      snippet: {
        publishedAt: "2024-10-31T00:00:46Z",
        channelId: "UCBkRQtxofyXr09mWtgoUUqw",
        title: "Carabao Cup Defeat ❌ | Manchester United 5 Leicester City 2",
        description:
          "The short highlights for our Carabao Cup tie at Old Trafford. SUBSCRIBE now to Leicester City on YouTube. Hit the bell to get ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/zRdGRkdZdXY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/zRdGRkdZdXY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/zRdGRkdZdXY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Leicester City",
        liveBroadcastContent: "none",
        publishTime: "2024-10-31T00:00:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "QUcSDtFUoR9bgLQQLlRj8vdmAG4",
      id: {
        kind: "youtube#video",
        videoId: "GGZLgdI861c",
      },
      snippet: {
        publishedAt: "2024-11-20T13:09:24Z",
        channelId: "UCEfEaGKGSxy8ZYIV1RWLbCQ",
        title:
          "Who Is Godwill Kukonki? Man Utd&#39;s Huge Defensive Prospect For Ruben Amorim",
        description:
          "Ruben Amorim wasted no time involving lots of Manchester United academy players in training with so many senior players being ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/GGZLgdI861c/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/GGZLgdI861c/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/GGZLgdI861c/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "UnitedPeoplesTV",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T13:09:24Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "1Mx4qsBHI8maFMyC7Q7n-BTuJrM",
      id: {
        kind: "youtube#video",
        videoId: "rQqFvztD18g",
      },
      snippet: {
        publishedAt: "2024-10-31T00:01:00Z",
        channelId: "UCCmo_NIuQR5eU4AvBa6sEQQ",
        title: "Manchester United v Leicester City Highlights",
        description:
          "Subscribe to the channel for more of the best Official EFL videos!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/rQqFvztD18g/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/rQqFvztD18g/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/rQqFvztD18g/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "EFL",
        liveBroadcastContent: "none",
        publishTime: "2024-10-31T00:01:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "9e8JOXMFEiS6eBS3Mep0zeXOD4o",
      id: {
        kind: "youtube#video",
        videoId: "YMggBzwcQCc",
      },
      snippet: {
        publishedAt: "2024-11-20T22:50:22Z",
        channelId: "UCMmVPVb0BwSIOWVeDwlPocQ",
        title: "Amorim LEADING Alphonso Davies Race! Man Utd News",
        description:
          "Man Utd coach Ruben Amorim is leading the transfer race for Alphonso Davies. Mark Goldbridge has the latest Man Utd Transfer ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YMggBzwcQCc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/YMggBzwcQCc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/YMggBzwcQCc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The United Stand",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T22:50:22Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "1LFRwCLENvUR2G6RsCBpiWJp454",
      id: {
        kind: "youtube#video",
        videoId: "23ixzYIPgpA",
      },
      snippet: {
        publishedAt: "2024-11-19T12:13:07Z",
        channelId: "UCEfEaGKGSxy8ZYIV1RWLbCQ",
        title:
          "Inside Amorim’s First Man Utd Training Session: 3-4-3 System, Drills &amp; More",
        description:
          "Ruben Amorim touched grass at Carrington on Monday as head coach for the first time. We saw his 3-4-3 formation take shape, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/23ixzYIPgpA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/23ixzYIPgpA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/23ixzYIPgpA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "UnitedPeoplesTV",
        liveBroadcastContent: "none",
        publishTime: "2024-11-19T12:13:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "yu3xosJXflplkkZIAsy9499z_Jw",
      id: {
        kind: "youtube#video",
        videoId: "nmul1P9Wn-A",
      },
      snippet: {
        publishedAt: "2024-11-16T20:37:35Z",
        channelId: "UCkybnKd0n7Mg6fkoU7KvhIA",
        title:
          "BREAKING✅ Ruben Amorim Allow Paul Pogba to Train with Man United players at CARRINGTON",
        description:
          "Paul Pogba Man Utd,pogba training man united,pogba man united training, pogba back in Manchester,pogba training today, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nmul1P9Wn-A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nmul1P9Wn-A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nmul1P9Wn-A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Daily Football News",
        liveBroadcastContent: "none",
        publishTime: "2024-11-16T20:37:35Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "QzusIx9F6hfurxUjK41QrcAZBLs",
      id: {
        kind: "youtube#video",
        videoId: "WAUCLZMLRQo",
      },
      snippet: {
        publishedAt: "2024-11-20T18:43:11Z",
        channelId: "UCC15bXbPxX_Q6pqKxko-ZkA",
        title: "How Man United Will Play Under Rúben Amorim",
        description:
          "Manchester United's first game under Ruben Amorim is mere days away, with the new manager having given a glimpse into his ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/WAUCLZMLRQo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/WAUCLZMLRQo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/WAUCLZMLRQo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FourFourTwo",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T18:43:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "3HEn4GO4IuXX8aDbpd4OZqvAwf8",
      id: {
        kind: "youtube#video",
        videoId: "Jz659yea00s",
      },
      snippet: {
        publishedAt: "2024-11-21T16:22:34Z",
        channelId: "UCHHp0Azq1wzyCh4-8vEYvMw",
        title:
          "Ruben Amorim Teaching Amad Diallo New Role in 2nd Man United training under Amorim",
        description:
          "Ruben Amorim's first game in charge is rapidly approaching, as the Reds face Ipswich Town in the Premier League at Portman ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Jz659yea00s/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Jz659yea00s/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Jz659yea00s/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FOOTBALL THRILLS 😍",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T16:22:34Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "IwzaUx6OgZOHc14ScqDUMHo9hO8",
      id: {
        kind: "youtube#video",
        videoId: "Yur4843c5YY",
      },
      snippet: {
        publishedAt: "2024-11-21T06:54:44Z",
        channelId: "UC5uIPD1cg2LMW5eGS9knl7g",
        title:
          "Amorim training man united | Kobbie Mainoo impressed Amorim and his Teammates in training session",
        description:
          "fabrizio romano #manchester united #manchester united transfer news #manchester united news #fabrizio romano transfers ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Yur4843c5YY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Yur4843c5YY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Yur4843c5YY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MAN UTD DAILY NEWS",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T06:54:44Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "XS8ENqFJnDoLmdH3tK9kPAj8uiE",
      id: {
        kind: "youtube#video",
        videoId: "X-ZGMUQLgyI",
      },
      snippet: {
        publishedAt: "2024-11-21T14:04:56Z",
        channelId: "UCEfEaGKGSxy8ZYIV1RWLbCQ",
        title:
          "RUBEN AMORIM ERA BEGINS! 3-4-3 Time | IPSWICH vs MAN UTD Starting XI",
        description:
          "Manchester United travel to Ipswich on Sunday with Ruben Amorim in charge for the first time There is going to be a lot of change ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/X-ZGMUQLgyI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/X-ZGMUQLgyI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/X-ZGMUQLgyI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "UnitedPeoplesTV",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T14:04:56Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "TDZU2MFjzAF-QOCdcOctXUYhv2I",
      id: {
        kind: "youtube#video",
        videoId: "yWbBoFZdJnw",
      },
      snippet: {
        publishedAt: "2024-09-01T21:00:34Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Man Utd 0-3 Liverpool | Match Recap",
        description:
          "Watch the key moments from Manchester United's game against Liverpool at Old Trafford in the Premier League. ▶️ Subscribe ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/yWbBoFZdJnw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/yWbBoFZdJnw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/yWbBoFZdJnw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-09-01T21:00:34Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FZK8yhoh6gj1HExO-r2PZ-NrZWc",
      id: {
        kind: "youtube#video",
        videoId: "q7dkAM1POPQ",
      },
      snippet: {
        publishedAt: "2024-11-20T09:00:12Z",
        channelId: "UCxGy0M15P67on8CCOpJiZGA",
        title:
          "BREAKING✅Ruben Amorim&#39;s SHOCKING MASTERPLAN in FIRST Man Utd Training",
        description:
          "Manchester United's new manager Ruben Amorim didn't waste a second after officially taking charge. In his very first training ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/q7dkAM1POPQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/q7dkAM1POPQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/q7dkAM1POPQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Red Talk Tv",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T09:00:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "W4vA0TvsIHEcN5rQdRzKmNros5I",
      id: {
        kind: "youtube#video",
        videoId: "wJVzg2NCLqs",
      },
      snippet: {
        publishedAt: "2024-11-22T00:06:20Z",
        channelId: "UCFEdjI6bdng-T1CWlqwSC1g",
        title:
          "ĐƯỢC AMORIM ỦNG HỘ, MAN UTD ĐÃ CÓ LÝ DO ĐỂ MANG ANGEL GOMES VỀ LẠI OLD TRAFFORD",
        description:
          "Trong thế giới bóng đá, không thiếu những câu chuyện cầu thủ trẻ chia tay đội bóng lớn để tìm kiếm cơ hội, rồi tỏa sáng ở nơi ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/wJVzg2NCLqs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/wJVzg2NCLqs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/wJVzg2NCLqs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "BLV Anh Quân Stories",
        liveBroadcastContent: "none",
        publishTime: "2024-11-22T00:06:20Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qbd6lwNeUrD_xbSglV10Gf6opI8",
      id: {
        kind: "youtube#video",
        videoId: "LMEvjPCaYDE",
      },
      snippet: {
        publishedAt: "2024-10-03T23:01:00Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "A Point In Porto | FC Porto 3-3 Man Utd",
        description:
          "All of the key moments from Manchester United's 3-3 draw away to FC Porto in the UEFA Europa League. ▶️ Subscribe to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/LMEvjPCaYDE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/LMEvjPCaYDE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/LMEvjPCaYDE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-10-03T23:01:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "K7NXncuefWqz2CbF3n7JfDiLVFA",
      id: {
        kind: "youtube#video",
        videoId: "B47vbjUXbZ0",
      },
      snippet: {
        publishedAt: "2024-11-19T21:15:13Z",
        channelId: "UCMmVPVb0BwSIOWVeDwlPocQ",
        title: "Amorim&#39;s FIRST Signing Close! Man Utd News",
        description:
          "Man Utd coach Ruben Amorim is close to his first signing with January a possibility. Mark Goldbridge reacts to the latest Man Utd ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/B47vbjUXbZ0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/B47vbjUXbZ0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/B47vbjUXbZ0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The United Stand",
        liveBroadcastContent: "none",
        publishTime: "2024-11-19T21:15:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "dlVvh_ZAwEBCoS6jKTLf8gcKRos",
      id: {
        kind: "youtube#video",
        videoId: "LvM2eXKF1GE",
      },
      snippet: {
        publishedAt: "2024-10-27T22:00:18Z",
        channelId: "UC6yW44UGJJBvYTlfC7CRg2Q",
        title: "Defeat In The Capital | West Ham 2-1 Man Utd",
        description:
          "Watch the key moments as Manchester United face West Ham away at the London Stadium in the Premier League.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/LvM2eXKF1GE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/LvM2eXKF1GE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/LvM2eXKF1GE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Manchester United",
        liveBroadcastContent: "none",
        publishTime: "2024-10-27T22:00:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "5WcHHinCG2fFjhudcD8kUSkBQYo",
      id: {
        kind: "youtube#video",
        videoId: "8ynZXf6DEXc",
      },
      snippet: {
        publishedAt: "2024-11-21T16:00:08Z",
        channelId: "UCoMR9UyiAW2iM2jMZnbfwoQ",
        title: "What club will every Manchester United player retire at? FC 25",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/8ynZXf6DEXc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/8ynZXf6DEXc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/8ynZXf6DEXc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "ASP FC",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T16:00:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FdsZZwgE8stcAl-LGBIGx8okMZ8",
      id: {
        kind: "youtube#video",
        videoId: "dDjIR9MSF4U",
      },
      snippet: {
        publishedAt: "2024-10-20T21:52:40Z",
        channelId: "UCAalMUm3LIf504ItA3rqfug",
        title:
          "Manchester United 2-1 Brentford | Extended Premier League Highlights",
        description:
          "Extended highlights from Old Trafford, where Ethan Pinnock was on target as Brentford fell to a 2-1 defeat to Manchester United in ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dDjIR9MSF4U/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dDjIR9MSF4U/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dDjIR9MSF4U/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Brentford Football Club",
        liveBroadcastContent: "none",
        publishTime: "2024-10-20T21:52:40Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "KVp5ZN6GnQgIfdJ4b2IlXSLG320",
      id: {
        kind: "youtube#video",
        videoId: "6qLmVFhHXNo",
      },
      snippet: {
        publishedAt: "2024-11-03T18:45:06Z",
        channelId: "UC9xeuekJd88ku9LDcmGdUOA",
        title:
          "MAN UNITED - CHELSEA | THAY TƯỚNG ĐỔI VẬN, BRUNO ĐẲNG CẤP, CAICEDO SIÊU PHẨM | NGOẠI HẠNG ANH 24/25",
        description:
          "MAN UNITED - CHELSEA | THAY TƯỚNG ĐỔI VẬN, BRUNO ĐẲNG CẤP, CAICEDO SIÊU PHẨM | NGOẠI HẠNG ANH 24/25 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/6qLmVFhHXNo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/6qLmVFhHXNo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/6qLmVFhHXNo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Kplus Sports",
        liveBroadcastContent: "none",
        publishTime: "2024-11-03T18:45:06Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "3EsTSP8rATbzXTpjUHleb4hPt10",
      id: {
        kind: "youtube#video",
        videoId: "IxIzIjwetdw",
      },
      snippet: {
        publishedAt: "2024-11-20T11:02:31Z",
        channelId: "UCMmVPVb0BwSIOWVeDwlPocQ",
        title: "Amorim STEALS City Target? YORO Fit To START! Man Utd News",
        description:
          "Ruben Amorim wants to sign a Man City target from Sporting as he wants to join Manchester United! Leny Yoro looks set to be fit ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/IxIzIjwetdw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/IxIzIjwetdw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/IxIzIjwetdw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The United Stand",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T11:02:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "3h0nHyA-snUP9ZZbePB2GAJg1a4",
      id: {
        kind: "youtube#video",
        videoId: "6DK5zw4hNGk",
      },
      snippet: {
        publishedAt: "2024-11-21T08:39:07Z",
        channelId: "UCuaRQTP2datF13IbNrtwLDg",
        title: "RUBEN AMORIM&#39;S Secret Weapon That Will Impact MAN UNITED",
        description:
          "RUBEN AMORIM'S Secret! Why he Will Impact MAN UNITED'S Future? In this Live show I'm going deep in the affect the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/6DK5zw4hNGk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/6DK5zw4hNGk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/6DK5zw4hNGk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Forever United TV",
        liveBroadcastContent: "none",
        publishTime: "2024-11-21T08:39:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qPBpCNz09y9Ph2bAaZPfNKrSWSM",
      id: {
        kind: "youtube#video",
        videoId: "Op2Ep70IIM4",
      },
      snippet: {
        publishedAt: "2024-05-28T18:55:06Z",
        channelId: "UCpmUwsy_hKr4cXMqylrgATw",
        title: "IShowSpeed reacts to Man United winning the FA cup 😂🏆",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Op2Ep70IIM4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Op2Ep70IIM4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Op2Ep70IIM4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Just Football",
        liveBroadcastContent: "none",
        publishTime: "2024-05-28T18:55:06Z",
      },
    },
  ],
};
