import mysql from 'mysql2/promise';

export default async function conectar(){
    if(global.conexao){
        console.log('Foi utilizado uma conexão já existente.')

        return global.conexao
    }


    const conexao = mysql.createConnection({
        host:'localhost',
        user: 'root',
        database: 'cloud',
        password: ''
    })

 global.conexao = conexao;

 return conexao



}