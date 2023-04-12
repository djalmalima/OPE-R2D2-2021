package br.com.opefit.projeto.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.entidades.Fornecedor;
import br.com.opefit.projeto.entidades.Produto;
import br.com.opefit.projeto.entidades.Usuario;
import br.com.opefit.projeto.repositorios.DepartamentoRepositorio;
import br.com.opefit.projeto.repositorios.FornecedorRepositorio;
import br.com.opefit.projeto.repositorios.ProdutoRepositorio;
import br.com.opefit.projeto.repositorios.UsuarioRepositorio;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {
	
	@Autowired
	private FornecedorRepositorio fornecedorRepositorio;
	
	
	@Autowired
	private DepartamentoRepositorio departamentoRepositorio;
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	@Autowired
	private ProdutoRepositorio produtoRepositorio;
	
	@Override
	public void run(String... args) throws Exception {
		
		
		
		
		Departamento d1 = new Departamento(null, "Fiscal");
		Departamento d2 = new Departamento(null, "Financeiro");
		Departamento d3 = new Departamento(null, "Compras");
		Departamento d4 = new Departamento(null, "Recursos Humanos");
		
		departamentoRepositorio.saveAll(Arrays.asList(d1,d2,d3,d4));
		
		Usuario u1 = new Usuario(null,true,"Diego","Assistente Fiscal", "878798778", d1);
		Usuario u2 = new Usuario(null,true,"Camila","Assistente Financeiro", "54574878", d2);
		Usuario u3 = new Usuario(null,true,"Meg","Assistente Financeiro", "12312321", d2);
		Usuario u4 = new Usuario(null,true,"Thos","Assistente Compras", "456456456", d3);
		
		usuarioRepositorio.saveAll(Arrays.asList(u1,u2,u3,u4));
		
		Produto p1 = new Produto(null,"Camisa DBZ", "Vermelho", "M", "DBZ", "Animes", "Camisa do Goku SSJ 3", null);
		Produto p2 = new Produto(null,"Camisa Naruto", "Branco", "P", "Naruto", "Animes", "Camisa do Madara Uchila", null);
		Produto p3 = new Produto(null,"Camisa DBZ", "Branco", "G", "DBZ", "Animes", "Camisa do Vegeta SSJ 3", null);
		Produto p4 = new Produto(null,"Camisa DBZ", "Vermelho", "M", "DBZ", "Animes", "Camisa do Majin Boo ",null);
		Produto p5 = new Produto(null,"Camisa DBZ", "Branco", "M", "DBZ", "Animes", "Camisa do Cell",null);
		
		produtoRepositorio.saveAll(Arrays.asList(p1,p2,p3,p4,p5));
		
		Fornecedor f1 = new Fornecedor(null, true, "Anime Industria", "CNPJ", "123123123000110", "1199998888" ,"anime@gmail.com");
		Fornecedor f2 = new Fornecedor(null, true, "Geek Industria", "CNPJ", "456456456000180", "1177776666" ,"geek@gmail.com");
		Fornecedor f3 = new Fornecedor(null, true, "Fan Industria", "CNPJ", "678678678000198", "1166665555" ,"fan@gmail.com");
		
		fornecedorRepositorio.saveAll(Arrays.asList(f1,f2,f3));
		
		
		
		
		
		
		
		
		
		
		
	}	
	
	
	

}
