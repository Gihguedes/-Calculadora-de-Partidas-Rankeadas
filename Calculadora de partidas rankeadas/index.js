// Função para calcular o saldo de partidas rankeadas
function calcularSaldo(vitorias, derrotas) {
    // Cálculo do saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';
  
    // Definindo o nível do jogador com base no número de vitórias
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else if (vitorias >= 101) {
      nivel = 'Imortal';
    }
  
    // Exibindo a mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
  }
  
  // Exemplo de uso
  calcularSaldo(45, 10); // Exemplo de entrada com 45 vitórias e 10 derrotas