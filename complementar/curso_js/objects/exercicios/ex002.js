class Carrinho {
  constructor(itens, qtdTotal, valorTotal) {
    this.itens = itens;
    this.qtdTotal = qtdTotal;
    this.valorTotal = valorTotal;
  }

  adicionarItens(item) {
    let cont = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qtd += item.qtd;
        cont = 1;
      }
    }

    if (cont == 0) {
      this.itens.push(item);
    }

    this.qtdTotal += item.qtd;
    this.valorTotal += item.preco * item.qtd;
  }

  removerItens(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        let obj = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        this.qtdTotal -= this.itens[itemCarrinho].qtd;
        this.valorTotal -=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

        this.itens.splice(index, 1);
      }
    }
  }
}

let meuCarrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "Camisa",
      qtd: 01,
      preco: 20,
    },
    {
      id: 02,
      nome: "Calça",
      qtd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

console.log(meuCarrinho);

meuCarrinho.adicionarItens({
  id: 01,
  nome: "Camisa",
  qtd: 2,
  preco: 20,
});

console.log(meuCarrinho);

meuCarrinho.adicionarItens({
  id: 03,
  nome: "Chapéu",
  qtd: 1,
  preco: 30,
});

console.log(meuCarrinho);

meuCarrinho.removerItens({ id: 01 });
meuCarrinho.removerItens({ id: 02 });

console.log(meuCarrinho);
