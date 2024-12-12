const navigationConfig = [
  {
    id: "Dashboard",
    title: "Dashboard",
    icon: "Home",
    type: "item",
    navLink: "/dashboard",
  },
  {
    id: "Network",
    title: "Network",
    icon: "GiNetworkBars",
    type: "collapse",
    navLink: "/Network/Users",
    children: [
      {
        id: "Users  ( with commissions)",
        title: "Users  ( with commissions)",
        icon: "Users",
        type: "item",
        navLink: "/Network/Users",
        permissions: ["admin", "editor"]
      },
      {
        id: "Affiliate Groups",
        title: "Affiliate Groups",
        icon: "GiMeepleGroup",
        type: "item",
        navLink: "/Network/Groups",
        permissions: ["admin", "editor"]
      },
      {
        id: "Deleted Users",
        title: "Deleted Users",
        icon: "AiFillDelete",
        type: "item",
        navLink: "/Network/DeletedUsers",
        permissions: ["admin", "editor"]
      },
    ]
  },
  {
    id: "Players",
    title: "Players",
    icon: "GiTabletopPlayers",
    type: "collapse",
    navLink: "/player/activePlayer",
    children: [
      {
        id: "Active Player",
        title: "Active Player",
        icon: "BackwardTime",
        type: "item",
        navLink: "/player/activePlayer",
        permissions: ["admin", "editor"]
      },
      {
        id: "Added Player",
        title: "Added Player",
        icon: "UserPlus",
        type: "item",
        navLink: "/player/addedPlayer",
        permissions: ["admin", "editor"]
      },
      {
        id: "Blocked Player",
        title: "Blocked Player",
        icon: "StoneBlock",
        type: "item",
        navLink: "/player/blockedPlayer",
        permissions: ["admin", "editor"]
      },
      {
        id: "Transfred Player",
        title: "Transfred Player",
        icon: "BiTransfer",
        type: "item",
        navLink: "/player/transfredPlayer",
        permissions: ["admin", "editor"]
      },
    ]
  },
  {
    id: "Tools",
    title: "Tools",
    icon: "BsTools",
    type: "collapse",
    navLink: "/Toolbox/linkCreator",
    children: [
      {
        id: "Link Creator",
        title: "Link Creator",
        icon: "BiLink",
        type: "item",
        navLink: "/Toolbox/linkCreator",
        permissions: ["admin", "editor"]
      },
      {
        id: "Marketting Sources",
        title: "Marketting Sources",
        icon: "Bookmarklet",
        type: "item",
        navLink: "/Toolbox/MarkettingSources",
        permissions: ["admin", "editor"]
      },
      {
        id: "Landing Pages",
        title: "Landing Pages",
        icon: "PirateGrave",
        type: "item",
        navLink: "/Toolbox/LandingPages",
        permissions: ["admin", "editor"]
      },
      {
        id: "Media Library",
        title: "Media Library",
        icon: "Medallist",
        type: "item",
        navLink: "/Toolbox/MediaLibrary/Media-Library",
        permissions: ["admin", "editor"]
      },
      {
        id: "Social Share",
        title: "Social Share",
        icon: "SharpedTeethSkull",
        type: "item",
        navLink: "/Toolbox/Socialshare",
        permissions: ["admin", "editor"]
      },
      {
        id: "Data Feed",
        title: "Data Feed",
        icon: "SharpedTeethSkull",
        type: "item",
        navLink: "/Toolbox/DataFeed/json",
        permissions: ["admin", "editor"]
      },
    ]
  },
  {
    id: "Withdawals",
    title: "Withdawals",
    icon: "GiPayMoney",
    type: "collapse",
    navLink: "/Withdawals/SubUserRequest",
    children: [
      {
        id: "Sub User Request",
        title: "Sub User Request",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Withdawals/SubUserRequest",
        permissions: ["admin", "editor"]
      },
    ]
  },
  {
    id: "Reports",
    title: "Reports",
    icon: "GiPayMoney",
    type: "collapse",
    navLink: "/Reports/Products",
    children: [
      {
        id: "Products",
        title: "Products",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/Products",
        permissions: ["admin", "editor"]
      },
      {
        id: "Marketing",
        title: "Marketing",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/Marketing-Sources",
        permissions: ["admin", "editor"]
      },
      {
        id: "Wallet",
        title: "Wallet",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/Wallet",
        permissions: ["admin", "editor"]
      },
      {
        id: "SubUsers",
        title: "SubUsers",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/SubUsers",
        permissions: ["admin", "editor"]
      },
      {
        id: "Referral",
        title: "Referral",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/Referral",
        permissions: ["admin", "editor"]
      },
      {
        id: "Monthly",
        title: "Monthly",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/Monthly",
        permissions: ["admin", "editor"]
      },
      {
        id: "RevenueBreakdown",
        title: "RevenueBreakdown",
        icon: "DiGitPullRequest",
        type: "item",
        navLink: "/Reports/RevenueBreakdown",
        permissions: ["admin", "editor"]
      },
    ]
  },
  {
    id: "Filters",
    title: "Filters",
    icon: "Search",
    type: "item",
    navLink: "/Filters",
  },
  {
    id: "Newsletter",
    title: "Newsletter",
    icon: "GiAcousticMegaphone",
    type: "item",
    navLink: "/Newsletter",
  },
  {
    id: "Configrations",
    title: "Configrations",
    type: "item",
    icon: "FcDataConfiguration",
    navLink: "/Configrations/Products",
  },
]

export default navigationConfig