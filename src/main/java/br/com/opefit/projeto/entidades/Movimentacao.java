package br.com.opefit.projeto.entidades;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="tb_movimentacao")
public class Movimentacao  implements Serializable{	
	
	
	private static final long serialVersionUID = 1L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	
	private Long fornecedorId;
	private Long produtoId;
	private Date dataMovimentacao;	
	private String movimentacaoTipo;	
	private Integer quantidade;
	
			
	public Movimentacao() {		
	}	
	

	public Movimentacao(Long id, Long fornecedorId, Long produtoId, String movimentacaoTipo,
			Integer quantidade) {
		this.id = id;
		this.fornecedorId = fornecedorId;
		this.produtoId = produtoId;
		this.dataMovimentacao = new Date();
		this.movimentacaoTipo = movimentacaoTipo;
		this.quantidade = quantidade;
	}
	

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Long getFornecedorId() {
		return fornecedorId;
	}


	public void setFornecedorId(Long fornecedorId) {
		this.fornecedorId = fornecedorId;
	}


	public Long getProdutoId() {
		return produtoId;
	}


	public void setProdutoId(Long produtoId) {
		this.produtoId = produtoId;
	}


	public Date getDataMovimentacao() {
		return dataMovimentacao;
	}


	public void setDataMovimentacao(Date dataMovimentacao) {
		this.dataMovimentacao = dataMovimentacao;
	}


	public String getMovimentacaoTipo() {
		return movimentacaoTipo;
	}


	public void setMovimentacaoTipo(String movimentacaoTipo) {
		this.movimentacaoTipo = movimentacaoTipo;
	}


	public Integer getQuantidade() {
		return quantidade;
	}


	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Movimentacao other = (Movimentacao) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}


	
	
	
		

}
