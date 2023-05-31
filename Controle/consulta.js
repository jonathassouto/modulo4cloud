import ConsultaBD from "../Persistencia/consultadados.js"

export default class consultaCtrl {

    consulta(request, response) {

        const bd = new ConsultaBD();

        bd.consulta()
            .then((dados) => {
                response.status(200).json(dados);

            })
            .catch((err)=>{
                response.status(500).json({
                    status: false,
                    mensage: err.message
                })
            })

    }
}