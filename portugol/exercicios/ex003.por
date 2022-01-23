programa
{
	
	funcao inicio()
	{
		inteiro menu1,contador = 0,contador2 = 0
		escreva("Quer cadastrar clientes: Sim = 1; Nao = 2;")
		leia(menu1)
		
		
		se(menu1==1) {
			inteiro menu2
			escreva("Quer cadastrar um unico cliente digite 1; Se quer cadastrar varios digite 2;")
			leia(menu2)
			
			se(menu2==1) {
			cadeia nome[3],cidade[3],tel[3]
			
			faca{
			escreva("Escreva o nome do cliente:")
			leia(nome[contador])
			escreva("Qual cidade ele mora:")
			leia(cidade[contador])
			escreva("Qual o telefone de contato:")
			leia(tel[contador])
			contador ++		
			}enquanto(contador<=0)

			cadeia dados[][]={{nome[0],cidade[0],tel[0]},{nome[1],cidade[1],tel[1]},{nome[2],cidade[2],tel[2]}}
			
			faca{
				escreva(dados[contador2][0] + ", mora em " + dados[contador2][1] + " e seu telefone de contato é: " + dados[contador2][2] + ";" + "\n")
				contador2 ++
			}enquanto(contador2<=0)
			}
			se(menu2==2) {
			cadeia nome[3],cidade[3],tel[3]
			
			faca{
			escreva("Escreva o nome do cliente:")
			leia(nome[contador])
			escreva("Qual cidade ele mora:")
			leia(cidade[contador])
			escreva("Qual o telefone de contato:")
			leia(tel[contador])
			contador ++		
			}enquanto(contador<=2)

			cadeia dados[][]={{nome[0],cidade[0],tel[0]},{nome[1],cidade[1],tel[1]},{nome[2],cidade[2],tel[2]}}
			
			faca{
				escreva(dados[contador2][0] + ", mora em " + dados[contador2][1] + " e seu telefone de contato é: " + dados[contador2][2] + ";" + "\n")
				contador2 ++
			}enquanto(contador2<=2)
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1460; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */