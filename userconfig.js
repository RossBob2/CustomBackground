let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Detroit",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "hhttps://mail.google.com/mail/u/1/#inbox",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Mine",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "TTTVR",
              url: "https://soundcloud.com/the-pug-master-634940023/sets/to-the-top-vr",
              icon: "brand-soundcloud",
              icon_color: "#a6e3a1",
            },
            {
              name: "Thing",
              url: "https://europixhd.site/",
              icon: "player-play",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "Flight",
          links: [
            {
              name: "ForeFlight",
              url: "https://plan.foreflight.com/map",
              icon: "plane",
              icon_color: "#a6e3a1",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: "#fab387",
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: "#f38ba8",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "School",
          links: [
            {
              name: "уп",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: "#a6e3a1",
            },
            {
              name: "mil.in.ua",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: "#fab387",
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: "#f38ba8",
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: "#89b4fa",
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: "#cba6f7",
            },
          ],
        },
      ],
    },
    {
      name: "Flight",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Weather",
          links: [
            {
              name: "WXBrief",
              url: "https://www.1800wxbrief.com/Website/#!/",
              icon: "notebook",
              icon_color: "#a6e3a1",
            },
            {
              name: "cloud",
              url: "https://www.anyawos.com/KOZW",
              icon: "cloud",
              icon_color: "#fab387",
            },
            {
              name: "AVGov",
              url: "https://aviationweather.gov/gfa/#obs",
              icon: "bolt",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "Maps",
          links: [
            {
              name: "Foreflight",
              url: "https://plan.foreflight.com/map",
              icon: "map",
              icon_color: "#a6e3a1",
            },
            {
              name: "SkyVector",
              url: "https://skyvector.com/",
              icon: "plane-inflight",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "Tools",
          links: [
            {
              name: "E6B",
              url: "https://e6bx.com/e6b/",
              icon: "calculator",
              icon_color: "#a6e3a1",
            },
            {
              name: "TAS",
              url: "https://e6bx.com/tas/",
              icon: "wind",
              icon_color: "#fab387",
            },
            {
              name: "POH",
              url: "https://encoreflight.com/wp-content/uploads/2017/06/Pilot-Operating-Handbook-Diamond-DA20.pdf",
              icon: "file-text",
              icon_color: "#f38ba8",
            },
          ],
        },
      ],
    },
    {
      name: "School",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "ERAU",
          links: [
            {
              name: "ERNIE",
              url: "https://ernie.erau.edu/",
              icon: "category",
              icon_color: "#a6e3a1",
            },
            {
              name: "Mail",
              url: "https://outlook.office.com/mail/",
              icon: "mail",
              icon_color: "#fab387",
            },
            {
              name: "TODO",
              url: "https://eracsprd.ps.erau.edu/",
              icon: "checkbox",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "GG",
              url: "https://ggapp.io/pivoshenko",
              icon: "device-gamepad",
              icon_color: "#a6e3a1", 
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: "#fab387",
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#f38ba8",
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: "#a6e3a1",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: "#f38ba8",
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
