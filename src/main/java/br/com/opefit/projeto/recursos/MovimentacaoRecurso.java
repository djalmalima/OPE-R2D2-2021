package br.com.opefit.projeto.recursos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.opefit.projeto.entidades.Movimentacao;
import br.com.opefit.projeto.servicos.MovimentacaoServico;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/movimentacao")
public class MovimentacaoRecurso {	
	
	@Autowired
	private MovimentacaoServico movimentacaoServico;
			
	
	@GetMapping
	public ResponseEntity<List<Movimentacao>> findAll(){						
		List<Movimentacao> list = movimentacaoServico.findAll();	
		
		return ResponseEntity.ok().body(list);
	}
	
	
	
	@GetMapping(value = "produto/{id}")
	public ResponseEntity<List<Movimentacao>> findMovProdutobyId(@PathVariable Long id) {
		
		List<Movimentacao> list1 = movimentacaoServico.findMovProdutobyId(id);
		
		return ResponseEntity.ok().body(list1);
	}
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Movimentacao> findById(@PathVariable Long id) {
		Movimentacao obj = movimentacaoServico.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<Movimentacao> insert(@RequestBody Movimentacao obj) {
		obj = movimentacaoServico.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}	
	

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		movimentacaoServico.delete(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value="/{id}")
	public ResponseEntity<Movimentacao> update(@PathVariable Long id, @RequestBody Movimentacao obj) {
		obj = movimentacaoServico.updateMovimentacao(id, obj);
		return ResponseEntity.ok().body(obj);
	}
	
	


}
