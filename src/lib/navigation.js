export const NAVBAR_CONFIG = {
  "/": {
    brandLabel: "CREATIVE STUDIO",
    desktopLinks: [
      { label: "Studio", href: "#studio" },
      { label: "Our work", href: "#work" },
      { label: "What we do", href: "#values" },
      { label: "Contact", href: "#contact" }
    ],
    desktopAction: { label: "Get in touch", href: "#contact" },
    mobileGroups: [
      {
        title: "Explore",
        items: [
          { label: "Studio", href: "#studio" },
          { label: "Our work", href: "#work" },
          { label: "What we do", href: "#values" },
          { label: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Projects",
        items: [
          { label: "FADE Engine", href: "https://frokyte.github.io/fadeengine/" },
          { label: "RebaseJS", href: "https://rebase.js.org/", external: true }
        ]
      }
    ],
    mobileAction: { label: "Get in touch", href: "#contact" }
  },
  "/fadeengine": {
    brandLabel: "FADE ENGINE",
    desktopLinks: [
      { label: "Overview", href: "#overview" },
      { label: "Features", href: "#features" },
      { label: "Waitlist", href: "#waitlist" },
      { label: "Studio", href: "https://frokyte.github.io/#studio" }
    ],
    desktopAction: { label: "Join Waitlist", href: "#waitlist" },
    mobileGroups: [
      {
        title: "FADE Engine",
        items: [
          { label: "Overview", href: "#overview" },
          { label: "Features", href: "#features" },
          { label: "Waitlist", href: "#waitlist" }
        ]
      },
      {
        title: "Frokyte",
        items: [
          { label: "Frokyte Studio", href: "https://frokyte.github.io/#studio" },
          { label: "RebaseJS", href: "https://rebase.js.org/", external: true }
        ]
      }
    ],
    mobileAction: { label: "Join Waitlist", href: "#waitlist" }
  }
};

export const DEFAULT_NAVBAR = {
  brandLabel: "FROKYTE",
  desktopLinks: [],
  desktopAction: null,
  mobileGroups: [
    {
      title: "Navigation",
      items: [{ label: "Frokyte Studio", href: "https://frokyte.github.io/" }]
    }
  ],
  mobileAction: null
};
