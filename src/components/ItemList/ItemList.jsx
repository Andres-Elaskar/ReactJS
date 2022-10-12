import { useState } from "react";
import { useEffect } from "react";
import "./itemList.css";
const ItemList = () => {
    const [productos, setProductos] = useState([]);
  //Es una funcion hook que se ejecuta despues del render

  //  setProductos([3, 5]);

    useEffect(() => {
    // declare the data fetching function
    setTimeout(() => {
        fetch("productos.json")
        .then((x) => x.json())
        .then((data) => setProductos(data));
        }, 3000);
    }, []);

    return (
        <div className="containerList">
        {productos.map((pro) => {
        return (
        <div className="containerCard" key={pro.id}>
            <div className="imageCard">
                <img src={pro.image} alt="" />
            </div>
            <div className="detailsCard">
                <h5>{pro.name}</h5>
            </div>
            <div className="buttonVerMas">
                <button>Ver Más</button>
            </div>
            </div>
        );
    })}
    </div>
    );
};

export default ItemList;