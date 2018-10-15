import axios from 'axios';

export function photosListAll(){
    const json=axios.get(`https://jsonplaceholder.typicode.com/photos/?_limit=20`)
        .then(response=>response.data)
        
    return{
        type:'GET_PHOTOS_ALL',
        payload: json
    }

}