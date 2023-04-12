package br.com.opefit.projeto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;


import br.com.opefit.projeto.entidades.Movimentacao;

public interface MovimentacaoRepositorio extends JpaRepository<Movimentacao, Long> {

}
