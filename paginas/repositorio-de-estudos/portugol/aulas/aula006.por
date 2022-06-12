programa
{
	
	funcao inicio()
	{
		inteiro nome=0,preco=1,paginas=2
		cadeia livro[3][3]
		
		escreva("Entre com os nomes, preços e números de paginas de três livros:\n")
		para(inteiro contador = 0; contador <= 2; contador ++) {
			leia(livro[contador][nome], livro[contador][preco], livro[contador][paginas])
		}
		escreva("Esses foram os livros cadastrados\n")
		para(inteiro contador=0;contador<=2;contador ++){
			escreva(livro[contador][nome]," ",livro[contador][preco]," ",livro[contador][paginas],"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 364; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */