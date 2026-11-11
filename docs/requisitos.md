
# Requisitos do Sistema — Conecta60+

## 1. Introdução

O Conecta60+ é uma plataforma web desenvolvida para promover a inclusão digital e apoiar a autonomia de pessoas com 60 anos ou mais.

O sistema oferece ferramentas simples para organizar compromissos, criar lembretes e cadastrar contatos importantes.

## 2. Requisitos Funcionais

Os requisitos funcionais descrevem as ações que o sistema deve permitir ao usuário.

| Código | Requisito |
|---|---|
| RF01 | Permitir o cadastro de compromissos com nome, data e horário. |
| RF02 | Permitir a visualização dos compromissos cadastrados. |
| RF03 | Permitir a exclusão de compromissos. |
| RF04 | Permitir o cadastro de lembretes com nome, data e horário. |
| RF05 | Permitir a visualização dos lembretes cadastrados. |
| RF06 | Permitir a exclusão de lembretes. |
| RF07 | Permitir o cadastro de contatos com nome e telefone. |
| RF08 | Permitir a visualização dos contatos cadastrados. |
| RF09 | Permitir a exclusão de contatos. |
| RF10 | Permitir que o usuário inicie uma ligação pelo telefone cadastrado, por meio do dispositivo. |
| RF11 | Manter os dados cadastrados armazenados no navegador por meio do localStorage. |

## 3. Requisitos Não Funcionais

Os requisitos não funcionais descrevem características de qualidade e funcionamento do sistema.

| Código | Requisito |
|---|---|
| RNF01 | A interface deve apresentar textos legíveis e de tamanho adequado. |
| RNF02 | O sistema deve possuir botões grandes e de fácil identificação. |
| RNF03 | A interface deve apresentar contraste adequado entre textos e fundo. |
| RNF04 | O sistema deve possuir navegação simples e intuitiva. |
| RNF05 | A aplicação deve ser responsiva, adaptando-se a diferentes tamanhos de tela. |
| RNF06 | Os elementos devem permitir navegação por teclado, com indicação visual de foco. |
| RNF07 | O sistema deve utilizar React, JavaScript, HTML e CSS em seu desenvolvimento. |
| RNF08 | Os dados devem permanecer armazenados no navegador mesmo após o fechamento e a reabertura da página, enquanto os dados locais não forem apagados. |

## 4. Tecnologias Utilizadas

- React
- JavaScript
- HTML
- CSS
- Vite
- localStorage

## 5. Limitações do MVP

- O sistema não possui banco de dados ou servidor próprio.
- Os dados ficam armazenados localmente no navegador.
- Os lembretes não enviam notificações automáticas.
- A realização de ligações depende dos recursos disponíveis no dispositivo.
- O assistente virtual com inteligência artificial não faz parte da versão atual do MVP.

## 6. Público-alvo

Pessoas com 60 anos ou mais que desejam utilizar ferramentas digitais simples para organizar seus compromissos, lembretes e contatos importantes.
