import React from 'react'

import WalkList from '../components/WalkList'

const DUMMY_DATA = [
    {
        id: 'w1',
        title: 'Lakeview Cemetery',
        description: 'A beautiful cemetery to walk around. Rockefeller family is buried here!',
        imageUrl: 'http://ianadamsphotography.com/news/wp-content/uploads/2015/11/Schofield-Mausoleum-Edit.jpg',
        address: '12316 Euclid Avenue, Cleveland, Ohio 44106',
        location: {
            lat: 41.511623,
            lng: -81.6015392
        },
        creator: 'u1'
    },
    {
        id: 'w2',
        title: 'Lakeview Cemetery',
        description: 'A beautiful cemetery to walk around. Rockefeller family is buried here!',
        imageUrl: 'http://ianadamsphotography.com/news/wp-content/uploads/2015/11/Schofield-Mausoleum-Edit.jpg',
        address: '12316 Euclid Avenue, Cleveland, Ohio 44106',
        location: {
            lat: 41.511623,
            lng: -81.6015392
        },
        creator: 'u2'
    }
]

const UserWalks = () => {


    return <WalkList items={DUMMY_DATA} />
}

export default UserWalks