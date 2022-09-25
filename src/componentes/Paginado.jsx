import React from "react";
import { useState, useEffect } from "react"; 
import Cards from "./Cards";
import styles from "../styles/Paginado.module.css"

function Paginado({ data, pageLimit, dataLimit }) {

  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(() => Math.ceil(data.length / dataLimit));
    setCurrentPage(1);
  },[data]);

  
  function goToNextPage() {
    if(currentPage >= pages) return   
    setCurrentPage((page) => page + 1);
  }
 
  function goToPreviousPage() {
    if(currentPage <= 1) return 
    setCurrentPage((page) => page - 1);
  }

 
  function changePage(ev) {
    const pageNumber = Number(ev.target.textContent);
    setCurrentPage(pageNumber);
  }

 
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit; 
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const mostrar = new Array(pageLimit)
      .fill()
      .map((_, idx) => start + idx + 1);

    for (let e of mostrar) {
      if (e === pages) {
        const nuevo = mostrar.slice(0, mostrar.indexOf(e) + 1);
        return nuevo;
      }
    }
    return mostrar;
  };

 
   
  return (
    <div>
      <div className={styles.containerPaginado}>
        
          <button 
            onClick={goToPreviousPage}
            className={styles.numPag}>
            prev
          </button>
       

        {getPaginationGroup().map((item, index) => (
          <button 
            key={index}
            onClick={changePage}
            className={styles.numPag}
           >
            {item}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={styles.numPag}>
          next
        </button>
      </div>
      <div className="containerCards">
        <Cards pokemons={getPaginatedData()} />
      </div>
    </div>
  );
}

export default Paginado;
