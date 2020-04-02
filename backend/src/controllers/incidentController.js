const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {title, description, value} = request.body
        
        const ong_id = request.headers.authorization
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        return response.json({id})
    },
    async index(request, response) {
        const {page = 1} = request.query
        const [count] = await connection('incidents').count()
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*',
                    'ongs.name as ongName',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'])
        
        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents)
    },
    async delete(request, response) {
        const param_id = request.params.id
        const ong_id = request.headers.authorization
        const incident = await connection('incidents')
            .where('id', param_id)
            .select('ong_id')
            .first()
        
        if(incident !== undefined && incident.ong_id !== ong_id) {
            return response.status(401).json({error: 'Operation not allowed. '})
        }

        await connection('incidents')
        .where('id', param_id)
        .delete()

        return response.status(204).send()
    }
}