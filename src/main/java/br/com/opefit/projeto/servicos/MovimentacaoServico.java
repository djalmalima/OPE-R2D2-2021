package br.com.opefit.projeto.servicos;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.opefit.projeto.entidades.Movimentacao;
import br.com.opefit.projeto.entidades.Produto;
import br.com.opefit.projeto.recursos.ProdutoRecurso;
import br.com.opefit.projeto.repositorios.MovimentacaoRepositorio;

@Service
public class MovimentacaoServico {

	@Autowired
	private MovimentacaoRepositorio movimentacaoRepositorio;
	
	@Autowired
	private ProdutoRecurso produtoRecurso;
	
	@Autowired
	private ProdutoServico produtoServico;
	

	public List<Movimentacao> findAll() {		
		return movimentacaoRepositorio.findAll();
	}

	public Movimentacao findById(Long id) {
		Optional<Movimentacao> obj = movimentacaoRepositorio.findById(id);
		return obj.get();
	}
	
	public List<Movimentacao> findMovProdutobyId(Long id){
		List<Movimentacao> obj = movimentacaoRepositorio.findAll();
		List<Movimentacao> listaFiltrada = new ArrayList<>();
		
		obj.forEach((movimentacao) -> {
			if (movimentacao.getProdutoId() == id) {
				listaFiltrada.add(movimentacao);
			}
		});
		
		return listaFiltrada;		
	}

	
	public Movimentacao insert(Movimentacao movimentacao) {	
		
		Produto prod = this.produtoServico.findById(movimentacao.getProdutoId());
		
		if(movimentacao.getFornecedorId() == 999999) {
			prod.setQuantidade(movimentacao.getQuantidade());
			this.produtoRecurso.update(prod.getId(), prod);
		}	
		else {			
			
			int saldo = prod.getQuantidade();
			prod.setQuantidade(saldo + movimentacao.getQuantidade());		
			this.produtoRecurso.update(prod.getId(), prod);			
		}
		return movimentacaoRepositorio.save(movimentacao);
		
	}	
		
	

	public void delete(Long id) {
		Movimentacao obj = findById(id);
		movimentacaoRepositorio.delete(obj);
	}

	public Movimentacao updateMovimentacao(Long id, Movimentacao movimentacao) {
		Movimentacao user = movimentacaoRepositorio.getOne(id);
		
		user.setQuantidade(movimentacao.getQuantidade());	
	
		return movimentacaoRepositorio.save(user);
	}
	

}
