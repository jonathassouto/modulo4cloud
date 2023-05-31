

export default class livenessCtrl {

    servLife(request, response) {
        try {
            response.status(200).json({
                status: true,
                mensage: 'O servidor está ativo'
            })

        }
        catch{
            response.status(500).json({
                status: true,
                mensage: 'O servidor não está ativo'
            })
        }

    }





}