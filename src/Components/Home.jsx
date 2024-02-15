import {useState} from "react"
const Home = ({ item }) => {
    const [ show , setShow] = useState()
    return (
        <div>
            <h1>{item.bolim}-{item.nomi}</h1>
        </div>
    )
}

export default Home