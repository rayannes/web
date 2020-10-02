
const express = require ('express')
const app = express()
const cidade = { "Crato":"total de habitantes: 29"  ,"Juazeiro":"total de habitantes: 39" ,"Barbalha":"total de habitantes: 1000000"}


app.get('/cidade',(req, res)=> {//questao 1
	res.json(cidade)
})
app.get('/cadastro',(req, res) =>{//questao 2
	
	res.type('html')
	res.end('<form><textarea name="texto" rows="10" cols="30"></textarea> <button>botão</button></form>')
})

app.listen(3000, () =>{ //porta
})
