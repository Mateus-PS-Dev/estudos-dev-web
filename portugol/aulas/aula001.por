programa
{
	
	funcao inicio()
	{
		real nota1,nota2,nota3,nota4,media
		cadeia aluno

		escreva("Digite o nome do aluno:")
		leia(aluno)
		escreva("Nota 1:")
		leia(nota1)
		escreva("Nota 2:")
		leia(nota2)
		escreva("Nota 3:")
		leia(nota3)
		escreva("Nota 4:")
		leia(nota4)

		media = (nota1+nota2+nota3+nota4)/4
		
		escreva(aluno + " teve a média de: " + media)
		se(media>=7) {
			escreva("\n" + "Parabéns!! Você foi aprovado!")
		}
		
		senao {
			escreva("\n" + "Reprovado! Te aguardo no próximo semestre!")
		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 482; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */