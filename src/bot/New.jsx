import React, { useState } from 'react'

const New = () => {
    const [sendimage, setsendimage] = useState("")
    
    let text = "Junatildi"
    const bot = {
        TOKEN: "7189851748:AAHUkasQUab0GQtTet27Kv-mZGVdJg70RkY",
        chatID: "6079824118",
    }
    const sendForBot = () => {
        fetch(`https://api.telegram.org/telegram_bot_id${bot.TOKEN}/sendPhoto?chat_id=${bot.chatID}&photo=${sendimage}&caption=salom`)
        .then(succ => {
                console.log(succ);
            }, err => {
                console.log(err);
            })
    }
    const handImageGet = (e)=>{
        setsendimage(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div>
            <input type="file" onChange={handImageGet} />
            <button onClick={sendForBot}>Send</button>
            <img src={sendimage} alt="" />
        </div>
    )
}

export default New