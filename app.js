// Importa os módulos necessários
const express = require('express');
const mysql = require('mysql2/promise');

// Configuração do servidor e banco de dados
const app = express();
const port = 3000;
app.use(express.json())

// Conexão com o banco de dados
const db = mysql.createPool({
    host: 'localhost',
    user: 'luis', // Altere conforme necessário
    password: 'luis',
    database: 'projeto'
});

// Rota para obter todas as categorias
app.get('/categorias', async (requestAnimationFrame, res) =>{
    try {
        const[rows] =
        await db.query('SELECT * FROM categorias ORDER BY ordem');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para obter uma categoria por ID
app.get('/categorias/:id', async (req ,res) => {
    try {
        const sql = 'SELECT * FROM categorias WHERE id = ?';
        const [rows] = await db.query(sql, [req.params.id]);
        if(rows.length === 0) {
            return res.status(404).
                    json({error: 'Categoria não encontrada'});
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
})

// Rota para obter uma categoria por ID
app.post('/categorias_inserir', async (req ,res) => {
    try {
        const {ordem,titulo} = req.body;
        const sql = 'INSERT INTO categorias (ordem,titulo) VALUES (?,?)';
        const [result] = await db.query(sql, [ordem,titulo]);
        res.json({ id: result.InsertId,ordem,titulo});
                    json({error: 'Categoria não encontrada'});
        }catch (error) {
        res.status(500).json({ error:error.message });
    }
})

// Rota para atualizar uma categoria
app.post('/categorias_inserir/:id', async (req ,res) => {
    try {
        const {ordem,titulo} = req.body;
        const sql = 'UPDATE categorias SET ordem = ?, titulo = ? WHERE id = ?';
        const [result] = await db.query(sql, [ordem,titulo,req.params.id]);
        if (result.affectedRows === 0)  {
            return res.status(404).jsom({ error: 'Categoria não encontrada'})
        }
        res.json({ id: req.params.id, ordem, titulo});          
    } catch (error){
        res.status(500).json({ error: error.message})
    }
});

// Rota para eliminar uma categoria
app.delete('/categoria/:id', async (req ,res) => {
    try {
        const sql = 'DELETE FROM categorias WHERE id = ?';
        const [result] = await db.query(sql, [req.params.id]);
        if (result.affectedRows === 0)  {
            return res.status(404).jsom({ error: 'Categoria não encontrada'})
        }
        res.json({ message:'Categoria eliminada com sucesso' });          
    } catch (error){
        res.status(500).json({ error: error.message})
    }
});

// Inicia o servidor
app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});