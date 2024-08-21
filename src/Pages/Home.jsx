import { useState } from "react";
import  data  from "../../artigos.json";
import { Modal, Button } from "antd";
import { NavLink } from "react-router-dom";

function Home() {

    const [dataModal, setDataModal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const moreDetail = items => {
        setShowModal(true);
        setDataModal(items);
    };
    
    const closeDetail = () => {
        setShowModal(false);
    };

    const[searchInput, setsearchInput] = useState('')
    const[artigos, setartigos] = useState(data)
        
        const handleInputChange = e => {
    
            const searchTerm = e.target.value
            setsearchInput(searchTerm)
            
            const resultados = data.filter ((search) => (
                search.title.toLowerCase().includes(searchTerm.toLowerCase())
            ))
            console.log(resultados)
            
            setartigos(resultados)
        }

    return (
        <>
        <Modal 
            title={dataModal.title}
            open = {showModal}
            footer={<Button  onClick={closeDetail} className="bg-primary-jp text-white hover:bg-none hover:border-primary-jp">Ok</Button>}onCancel={closeDetail}>
            <img src={dataModal.image}/>
            <p className="my-3">{dataModal.text}</p>
        </Modal>
        <form className="flex justify-center relative pt-7">
            <input
                type="search" 
                name="search" 
                id="search" 
                value={searchInput}
                onChange={handleInputChange}
                className="ps-11 pe-3 py-1 w-2/5 rounded-full"
            />
        </form>
        <h2 className="font-font-sub font-black text-5xl text-white flex justify-center my-10">Notícias</h2>
        <div className="grid grid-cols-2">
            {artigos.length > 0 ?
                artigos.map(
                    (filme, index) =>(
                       <div className="card bg-card text-white m-3 flex rounded-2xl h-[95%]" key={index}>
                        <div className=" w-2/4 bg-cover rounded-l-2xl" style={{backgroundImage: `url(${filme.image})`}}></div>
                        <div className="flex flex-col w-2/4">
                            <h1 className="text-2xl text-center my-2 text-titulo-jp"  key={filme.title}>{filme.title}</h1>
                            <div>
                                {
                                    filme.tags.map(tag =>(
                                        <span className="bg-primary-jp text-secondary-jp p-1 m-1 rounded text-xs" key={tag}>{tag}</span>
                                    ))
                                }
                                <div className="mx-3 my-3 text-justify">
                                    {
                                        filme.text.map((text, index) =>(
                                            <p className="text-xs font-font-text" key={index}>{text}</p>
                                        ))
                                    }
                                    <div>
                                    <NavLink onClick={()=> moreDetail(filme)} className="text-lg font-font-sub justify-start text-white">leia mais</NavLink>
                                    </div>
                                </div>
                            </div>    
                        </div>
                       </div> 
                    )
                ):
            <p className="text-white flex items-center justify-center">Notícia não encontrada</p>
            }
        </div>
        </>
    );
}

export default Home;