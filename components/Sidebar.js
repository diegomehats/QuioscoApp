import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria";




const Sidebar = () => {
  const {categorias} = useQuiosco();
  return (
    <>   
    <div className="m-10">
      <Image 
        width={200} 
        height={50} 
        src="/assets/img/logo.svg"  
        alt="Logo" 
        
        />
      </div>

<nav className="mt-8">
        {categorias.map(categoria =>(
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />

        )) }

      </nav>

    </>

  );
};

export default Sidebar