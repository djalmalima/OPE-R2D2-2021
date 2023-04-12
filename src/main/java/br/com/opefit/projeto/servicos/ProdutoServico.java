package br.com.opefit.projeto.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.opefit.projeto.entidades.Produto;
import br.com.opefit.projeto.repositorios.ProdutoRepositorio;

@Service
public class ProdutoServico {

	@Autowired
	private ProdutoRepositorio produtoRepositorio;

	public List<Produto> findAll() {
		return produtoRepositorio.findAll();
	}

	public Produto findById(Long id) {
		Optional<Produto> obj = produtoRepositorio.findById(id);
		return obj.get();
	}

	public Produto insert(Produto usuario) {
		return produtoRepositorio.save(usuario);
	}

	public void delete(Long id) {
		Produto obj = findById(id);
		produtoRepositorio.delete(obj);
	}
	
	public Produto inventario(Long id, Integer quantidade) {
		Produto prod = produtoRepositorio.getOne(id);
		prod.setQuantidade(quantidade);			
		produtoRepositorio.save(prod);		
		return prod;		
	}

	public Produto updateProduto(Long id, Produto produto) {
		Produto user = produtoRepositorio.getOne(id);

		user.setNome(produto.getNome());
		user.setCor(produto.getCor());
		user.setTamanho(produto.getTamanho());
		user.setMarca(produto.getMarca());
		user.setCategoria(produto.getCategoria());
		user.setDescricao(produto.getDescricao());
		user.setImagem(produto.getImagem());		
		
	
		return produtoRepositorio.save(user);
	}

}
