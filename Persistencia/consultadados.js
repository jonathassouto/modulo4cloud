import conectar from "./conexaoBD.js";


export default class ConsultaBD{

    async consulta(){
        const conexao = await conectar();
        const sql = 'SELECT * FROM CAMPEOES';
        let [result] = await conexao.query(sql);

        console.log(result);
        
        return result;


    }


};