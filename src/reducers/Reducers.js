import React, {Component} from 'react'

class Reducers extends Component {

    fetchPlayers = () => {
        fetch('http://localhost:3001/api/v1/players')
    }

    fetchComments = () => {
        fetch('http://localhost:3001/api/v1/comments')
    }

}

export default Reducers;