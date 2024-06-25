

function Contato() {
    return ( 
        <div className="flex my-20">
        <div className="w-2/4 p-24">
            <div className="w-3/4">
                <h1 className="font-font-sub text-6xl text-white">Dúvidas e suporte, entre em contato:</h1>
            </div>
        </div>
        <div className="h-auto bg-white w-1 "  />
        <form className="w-2/4 flex flex-col justify-center items-center">
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white"  htmlFor="nome">Nome:</label>
                <input placeholder='exemplo' className="w-3/4 rounded-full bg-secondary-jp focus:outline-none p-2" type="text" id="nome"/>
            </div>
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white" htmlFor="email">E-mail:</label>
                <input placeholder="exemplo@gmail.com" className="w-3/4 rounded-full bg-secondary-jp focus:outline-none p-2" type="email" id="email" />
            </div>
            <div className="w-[74%] flex flex-col mb-4">
                <label className="text-2xl text-white mb-4" htmlFor="mensagem">Mensagem :</label>
                <textarea className="rounded-2xl bg-secondary-jp focus:outline-none p-2" id="mensagem" cols="30" rows="10"></textarea>
            </div>
            <input className="rounded-lg py-3 px-24 text-white bg-primary-jp mt-5" type="button" value="Enviar" />
        </form>
        </div>
    );
}

export default Contato;