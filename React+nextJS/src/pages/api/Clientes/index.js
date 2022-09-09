export default function cliente (req, res) {

    if(req.method === "GET"){

        resFromCorrectMethod(req, res)
    } else {
        res.status(405).send()
        
    }

    function resFromCorrectMethod(){
        res.status(200).json({
            ID:'12',
            nome:'maria doida',
            idade: 33,
            email: 'Demersontorres520@gmail.com'
        })

    }

}