function Jogo() {
  const [historico, setHistorico] = useState([Array(9).fill(null)]);
  const [movimentoAtual, setMovimentoAtual] = useState(0);
  const xEhProximo = movimentoAtual % 2 === 0;
  const quadradosAtuais = historico[movimentoAtual];

  function aoJogar(proximosQuadrados) {
      const novoHistorico = [...historico.slice(0, movimentoAtual + 1), proximosQuadrados];
      setHistorico(novoHistorico);
      setMovimentoAtual(novoHistorico.length - 1);
  }

  function pularPara(movimento) {
      setMovimentoAtual(movimento);
  }

  return (
      <div className="jogo">
          <Tabuleiro xEhProximo={xEhProximo} quadrados={quadradosAtuais} aoJogar={aoJogar} />
          <div className="jogo-info">
              <ListGroup as="ol" numbered>
                  {historico.map((_, movimento) => (
                      <ListGroup.Item as="li" key={movimento}>
                          <Button variant="link" onClick={() => pularPara(movimento)}>
                              {movimento ? `Ir para jogada #${movimento}` : 'Ir para o início do jogo'}
                          </Button>
                      </ListGroup.Item>
                  ))}
              </ListGroup>
          </div>
      </div>
  );

  
}
export default Tabuleiro;

