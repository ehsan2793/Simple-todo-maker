import axios from "axios";


export const  getData = () => {
    return 'http://universities.hipolabs.com/search?country=United+States'
}


export const axiosWihtAuth = () => {
    axios.create({

    headers: {
        autheroku: 'token'

    },
        baseURL:"http://universities.hipolabs.com/search?country=United+States"

    })


}

