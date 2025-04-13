
function simularDiagnostico() {
  const texto = document.getElementById('inputTexto').value;
  const idioma = document.getElementById('idioma').value;
  const estilo = document.getElementById('estilo').value;

  let score = texto.length % 100 / 100;
  let interpretacao = score > 0.6 ? "🧠 Mente Harmonizada" : "🌪 Entropic Storm";
  let assinatura = score > 0.6 ? "🜃 Sphinx" : "🜏 Void";
  let estado = score > 0.6 ? "🔍 Leitura Atenta" : "🌀 Exploração Livre";

  document.getElementById('interpretacao').innerText = `💭 Interpretação (${idioma}): ${interpretacao}`;
  document.getElementById('assinatura').innerText = `🔮 Assinatura Mítica: ${assinatura}`;
  document.getElementById('estado').innerText = `🧭 Estado Sugerido: ${estado}`;

  desenharGrafico(score);
}

function desenharGrafico(v) {
  const ctx = document.getElementById('graficoRadar').getContext('2d');
  if (window.grafico) window.grafico.destroy();
  window.grafico = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['S', 'L', 'E', 'C', 'M', 'A'],
      datasets: [{
        label: 'Índice de Coerência',
        data: [v, v-0.1, v-0.2, v-0.05, v, v-0.15],
        backgroundColor: 'rgba(100, 149, 237, 0.3)',
        borderColor: 'cornflowerblue',
        borderWidth: 2
      }]
    },
    options: {
      scales: { r: { min: 0, max: 1 } },
      plugins: { legend: { display: false } }
    }
  });
}
