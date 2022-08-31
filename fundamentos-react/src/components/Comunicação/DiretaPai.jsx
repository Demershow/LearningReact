import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{

    return (
        <div>
            <DiretaFilho nome="Marcos" idade={30} culpa={true}></DiretaFilho>
            <DiretaFilho nome="Fernando" idade={17} culpa={false}></DiretaFilho>
        </div>
    )


}