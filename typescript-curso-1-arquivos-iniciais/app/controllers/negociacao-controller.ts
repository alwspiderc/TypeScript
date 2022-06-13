export class NegociacaoController {
  private inputData;
  private imputQuantidade;
  private inputValor;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.imputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona() {
      console.log(this.inputData);
      console.log(this.imputQuantidade);
      console.log(this.inputValor);
  }
}
