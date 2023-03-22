import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-protudo',
  templateUrl: './detalhes-protudo.component.html',
  styleUrls: ['./detalhes-protudo.component.css']
})
export class DetalhesProtudoComponent implements OnInit{
  produto: IProduto | undefined;
  quantidade = 1;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService:NotificacaoService,
    private carrinhoService:CarrinhoService
  ){}
  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number (routeParams.get("id"));
      this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adiciondo ao carrinho");
    const produto: IProdutoCarrinho ={
      ...this.produto!,
      quantidade: this.quantidade
    } 
    this.carrinhoService.adicionarAoCarrinho(produto);
    }
}
