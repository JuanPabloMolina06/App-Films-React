import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
    e.preventDefault();
        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return
        }
                
        const templateParams = {
            from_name: name,
            from_message: message,
            from_email: email
        }

        emailjs.send("service_kgmbx9l", "template_t8u7i4n", templateParams, "CENZh8drkinV7Yh3z")
        .then((response)=> {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (error)=>{
            console.log("ERRO", error)
        })
    }
    return ( 
        <div className="flex my-20">
            <div className="w-2/4 p-24">
                <div className="w-3/4">
                    <h1 className="font-font-sub text-6xl text-white">Dúvidas e suporte, entre em contato:</h1>
                </div>
            </div>
            <div className="h-auto bg-white w-1"></div>
            <form onSubmit={sendEmail} className="w-2/4 flex flex-col justify-center items-center">
                <div className="w-4/5 flex justify-around mb-4">
                    <label className="text-2xl text-white"  htmlFor="nome">Nome:</label>
                    <input placeholder='exemplo' className="w-3/4 rounded-full bg-secondary-jp focus:outline-none p-2" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className="w-4/5 flex justify-around mb-4">
                    <label className="text-2xl text-white" htmlFor="email">E-mail:</label>
                    <input placeholder="exemplo@gmail.com" className="w-3/4 rounded-full bg-secondary-jp focus:outline-none p-2" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="w-[74%] flex flex-col mb-4">
                    <label className="text-2xl text-white mb-4" htmlFor="mensagem">Mensagem :</label>
                    <textarea className="rounded-2xl bg-secondary-jp focus:outline-none p-2" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                </div>
                <button className="rounded-lg py-3 px-24 text-white bg-primary-jp mt-5" type="submit" value="Enviar">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;