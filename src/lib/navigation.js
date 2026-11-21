export const NAVBAR_CONFIG={
  "/":{brandLabel:"GAMES",desktopLinks:[{label:"Home",href:"/"},{label:"Games",href:"/games/"},{label:"About",href:"/about/"}],desktopAction:{label:"Explore games",href:"/games/"},mobileGroups:[{title:"Frokyte Games",items:[{label:"Home",href:"/"},{label:"Games",href:"/games/"},{label:"About",href:"/about/"}]}],mobileAction:{label:"Explore games",href:"/games/"}},
  "/games":{brandLabel:"GAMES",desktopLinks:[{label:"Home",href:"/"},{label:"Games",href:"/games/"},{label:"About",href:"/about/"}],desktopAction:{label:"About Frokyte",href:"/about/"},mobileGroups:[{title:"Explore",items:[{label:"Home",href:"/"},{label:"Games",href:"/games/"},{label:"About",href:"/about/"}]}],mobileAction:{label:"About Frokyte",href:"/about/"}},
  "/about":{brandLabel:"ABOUT",desktopLinks:[{label:"Home",href:"/"},{label:"Games",href:"/games/"},{label:"About",href:"/about/"}],desktopAction:{label:"Explore games",href:"/games/"},mobileGroups:[{title:"Explore",items:[{label:"Home",href:"/"},{label:"Games",href:"/games/"},{label:"About",href:"/about/"}]}],mobileAction:{label:"Explore games",href:"/games/"}}
};
export const DEFAULT_NAVBAR=NAVBAR_CONFIG["/"];
