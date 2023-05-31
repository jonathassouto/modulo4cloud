

export default class readinessCtrl {

    servRead(request, response) {
        try {
            response.status(200).json({
                status: true,
                mensage: 'O servidor está pronto'
            })

        }
        catch{
            response.status(500).json({
                status: true,
                mensage: 'O servidor não está pronto'
            })
        }

    }
}