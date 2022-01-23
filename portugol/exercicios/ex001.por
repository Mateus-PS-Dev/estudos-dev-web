programa
{
	
	funcao inicio()
	{
		real venda1,venda2,venda3,venda4,venda5,venda6,venda7,venda8,venda9,venda10,venda11,venda12,soma,media,media2,percom
		cadeia nome

		escreva("Digite o nome do funcionario:")
		leia(nome)
		escreva("Digite a venda de " + nome + " de janeiro:")
		leia(venda1)
		escreva("Digite a venda de " + nome + " de fevereiro:")
		leia(venda2)
		escreva("Digite a venda de " + nome + " de março:")
		leia(venda3)
		escreva("Digite a venda de " + nome + " de abril:")
		leia(venda4)
		escreva("Digite a venda de " + nome + " de maio:")
		leia(venda5)
		escreva("Digite a venda de " + nome + " de junho:")
		leia(venda6)
		escreva("Digite a venda de " + nome + " de julho:")
		leia(venda7)
		escreva("Digite a venda de " + nome + " de agosto:")
		leia(venda8)
		escreva("Digite a venda de " + nome + " de setembro:")
		leia(venda9)
		escreva("Digite a venda de " + nome + " de outubro:")
		leia(venda10)
		escreva("Digite a venda de " + nome + " de novembro:")
		leia(venda11)
		escreva("Digite a venda de " + nome + " de dezembro:")
		leia(venda12)

		soma = (venda1+venda2+venda3+venda4+venda5+venda6+venda7+venda8+venda9+venda10+venda11+venda12)
		media = soma/12
		media2 = media * 5/100
		percom = soma * 5/100
		
		escreva(nome + ", vendeu uma media de " + media + " ao longo do ano. ")
		escreva("Recebeu uma media mensal de comissão ao longo de 12 meses e de " + media2 + ". A comissão total que " + nome + " recebeu esse ano é de: " + percom)
		escreva("Parabens!" + nome)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1508; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */