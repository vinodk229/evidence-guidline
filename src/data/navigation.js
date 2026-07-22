export const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    children: [
      {
        title: "About HTAIn",
        path: "/abouthtain",
      },
      {
        title: "Minister of Health & Family Welfare",
        path: '#'
      },
      {
        title: "Minister of State",
        path: "/minister-state",
      },
      {
        title: "Secretary",
        path: "/secretary",
      },
      {
        title: "Additional Secretary",
        path: "/additional-secretary",
      },
      {
        title: "Objectives",
        path: "/objectives",
      },
      {
        title: 'Members',
         children: [
          {
            title: "CEG Scientists",  
            path: "cegscientists",
          },
          {
            title: "TAC",
            path: "/minister/previous",
          },
           {
            title: "HTAIn Secretariat",
            path: "/minister/previous",
          },
        ],
      }
    ],
  },
  {
    title: "Resource Hubs/Centres",
    path: "/resource-hubs",
  },
  {
    title: "What We Do",
    children: [
       {
        title: "Process Manual",
        path: "/process-guidelines-development",
      },
      {
        title: "Stem Cell Therapy Guidelines",
        path: "/stem-cell-therapy-guidelines",
      },
     
      {
        title: "Lung Cancer Treatment & Palliation Guidelines",
        path: "/lung-cancer-treatment-and-palliation-guidelines",
      },
      
    ],
  },
  {
    title: "Events",
    children: [
      {
        title: "Upcoming Events",
        path: "/events/upcoming",
      },
      {
        title: "Past Events",
        path: "/events/past",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];