import  data  from "../../artigos.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "antd";

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

    return (
        
        <>

        <Modal 
          title={dataModal.title}
          open  = {showModal}
          footer={
            <Button  onClick={closeDetail} className="bg-primary-jp text-white hover:bg-none hover:border-primary-jp">
              Ok
            </Button>
          }
          onCancel={closeDetail}
        >
            <img src={dataModal.image} />
            <p className="my-3"> {dataModal.text} </p>
        </Modal>
            <h2 className="font-font-sub font-black text-5xl text-white flex justify-center my-10">Notícias</h2>
            <div className="grid grid-cols-2">
            {
                data.map(
                    (filme, index) => (
                        <>
                        <div className="card bg-card text-white m-3 flex rounded-2xl h-[95%]" key={index} >
                            <div className=" w-2/4 bg-cover rounded-l-2xl" style={{backgroundImage: `url(${filme.image})`}}></div>
                            <div className="flex flex-col w-2/4">
                                <h1 className="text-2xl text-center my-2 text-titulo-jp"  key={filme.title}>{filme.title}</h1>
                                <div className="tags flex justify-center" >
                                {
                                    filme.tags.map( tag => (
                                        <span className="bg-primary-jp text-secondary-jp p-1 m-1 rounded text-xs" key={tag}>{tag}</span>
                                    ))
                                }
                                </div>
                                <div className="mx-3 my-3 text-justify" >
                                {
                                    filme.text.map( (text, index )=> (
                                        <p  className=" text-xs font-font-text" key={index}>{text}</p>
                                    ))
                                }
                                </div>
                                <NavLink onClick={()=> moreDetail(filme)}  className="text-sm font-font-sub justify-start mx-3 text-hover-color">leia mais</NavLink>
                            </div>
                            
                        </div>

                        </>
                    )
                    )
                }
            </div>
        </>
    );
}

export default Home;