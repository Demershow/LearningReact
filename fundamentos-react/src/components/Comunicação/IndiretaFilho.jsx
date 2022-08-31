import React from "react";


export default props =>{

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicark('joão', 45, true)
                }
            }>Fornecer infos</button>
        </div>
    )


}