const database = {
    Areas: [{
        id: 1,
        area: 'northwest section',
        attraction: 'Lodge, hotel, and resturaunt'
    },
    {
        id: 2,
        area: 'northern section',
        attraction: 'lost wolf hiking trail',
    },
    {
        id: 3,
        area: 'northeast section',
        attraction: 'chamfort river',
    },
    {
        id: 4,
        area: 'southwest section',
        attraction: 'Gander River',
    },
    {
        id: 5,
        area: 'southern section',
        attraction: 'Campgrounds, park, children play areas',
    },
    {
        id: 6,
        area: 'southeast section',
        attraction: 'pine bluffstrail'
    }
    ],


    Guests: [
    { id: 1, 
      name: "John Doe" 
    },
    { id: 2, 
      name: "Alice Smith" 
    },
    { id: 3, 
      name: "Michael Johnson" 
    },
    { id: 4, 
      name: "Sara Brown" 
    },
    { id: 5, 
      name: "David Jones" 
    },
    { id: 6, 
      name: "Emma Miller" 
    },
    { id: 7, 
      name: "Daniel Davis" 
    },
    { id: 8, 
      name: "Olivia Garcia" 
    },
    { id: 9, 
      name: "James Rodriguez" 
    },
    { id: 10, 
      name: "Sophia Wilson" 
    },
    { id: 11, 
      name: "Alexander Martinez" 
    },
    { id: 12, 
      name: "Isabella Anderson" 
    },
    { id: 13, 
      name: "William Taylor" 
    },
    { id: 14, 
      name: "Emily Thomas" 
    },
    { id: 15,
      name: "Benjamin Moore" 
    },
    ],


    Services: [{
        id: 1,
        service: 'lodging'
    },
    {
        id: 2,
        service: 'parking'
    },
    {
        id: 3,
        service: 'picknicking'
    },
    {
        id: 4,
        service: 'hiking'
    },
    {
        id: 5,
        service: 'rock climbing'
    },
    {
        id: 6,
        service: 'rafting'
    },
    {
        id: 7,
        service: 'canoeing'
    },
    {
        id: 8,
        service: 'fishing'
    },
    {
        id: 9,
        service: 'information'
    },
    {
        id: 10,
        service: 'zip lines'
    }
    ]
}

const getAreas = () => {
    return structuredClone(database.Areas)
}

const getServices = () => {
  return structuredClone(database.Services)
}