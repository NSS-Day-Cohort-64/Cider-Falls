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
      name: "John Doe", 
      areaId: 5,
    },
    { id: 2, 
      name: "Alice Smith", 
      areaId: 1,
    },
    { id: 3, 
      name: "Michael Johnson" ,
      areaId: 3,
    },
    { id: 4, 
      name: "Sara Brown" ,
      areaId: 2,
    },
    { id: 5, 
      name: "David Jones" ,
      areaId: 4,
    },
    { id: 6, 
      name: "Emma Miller" ,
      areaId: 6,
    },
    { id: 7, 
      name: "Daniel Davis" ,
      areaId: 3,
    },
    { id: 8, 
      name: "Olivia Garcia", 
      areaId: 1,
    },
    { id: 9, 
      name: "James Rodriguez" ,
      areaId: 2,
    },
    { id: 10, 
      name: "Sophia Wilson", 
      areaId: 4,
    },
    { id: 11, 
      name: "Alexander Martinez" ,
      areaId: 3,
    },
    { id: 12, 
      name: "Isabella Anderson" ,
      areaId: 6,
    },
    { id: 13, 
      name: "William Taylor", 
      areaId: 5,
    },
    { id: 14, 
      name: "Emily Thomas", 
      areaId: 2,
    },
    { id: 15,
      name: "Benjamin Moore" ,
      areaId: 1,
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
    ],
    AreaService: [{
        id: 1,
        AreaId: 1,
        ServiceId: 1,

    }, {
        id: 2,
        AreaId: 1,
        ServiceId: 3,

    }, {
        id: 3,
        AreaId: 1,
        ServiceId: 9,

    }, {
        id: 4,
        AreaId: 1,
        ServiceId: 2,

    }, {
        id: 5,
        AreaId: 2,
        ServiceId: 4,

    }, {
        id: 6,
        AreaId: 2,
        ServiceId: 3,

    }, {
        id: 7,
        AreaId: 2,
        ServiceId: 5,

    }, {
        id: 8,
        AreaId: 3,
        ServiceId: 6,

    }, {
        id: 9,
        AreaId: 3,
        ServiceId: 7,

    }, {
        id: 10,
        AreaId: 3,
        ServiceId: 8,
    }, {
        id: 11,
        AreaId: 4,
        ServiceId: 4,
    }, {
        id: 12,
        AreaId: 4,
        ServiceId: 8,
    }, {
        id: 13,
        AreaId: 5,
        ServiceId: 1,
    }, {
        id: 14,
        AreaId: 5,
        ServiceId: 2,
    }, {
        id: 15,
        AreaId: 5,
        ServiceId: 9,
    }, {
        id: 16,
        AreaId: 6,
        ServiceId: 4,
    }, {
        id: 17,
        AreaId: 6,
        ServiceId: 3,
    }, {
        id: 18,
        AreaId: 6,
        ServiceId: 10,
    }],
}

const getAreas = () => {
    return structuredClone(database.Areas)
}

const getServices = () => {
  return structuredClone(database.Services)
}

const getGuests = () => {
    return structuredClone(database.Guests)
}

const getAreaService = () => {
    return structuredClone(database.AreaService)
}










