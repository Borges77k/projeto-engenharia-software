
# Regras de Negócio — Conecta60+

## 1. Introdução

Este documento apresenta as regras que orientam o funcionamento das principais funcionalidades do Conecta60+.

As regras garantem que os cadastros e as operações sejam realizados de maneira simples e organizada.

## 2. Regras Gerais

| Código | Regra |
|---|---|
| RN01 | O sistema deve permitir que o usuário utilize as funcionalidades de compromissos, lembretes e contatos. |
| RN02 | Os dados cadastrados devem ser armazenados no localStorage do navegador. |
| RN03 | Os registros devem permanecer disponíveis após a navegação entre as telas, enquanto os dados locais não forem apagados. |
| RN04 | A exclusão de um registro deve remover somente o item selecionado. |

## 3. Regras de Compromissos

| Código | Regra |
|---|---|
| RC01 | Para cadastrar um compromisso, o usuário deve informar seu nome, data e horário. |
| RC02 | O compromisso deve aparecer na lista após o cadastro. |
| RC03 | O usuário pode excluir um compromisso cadastrado. |
| RC04 | Antes da exclusão, o sistema deve solicitar confirmação do usuário. |

## 4. Regras de Lembretes

| Código | Regra |
|---|---|
| RL01 | Para cadastrar um lembrete, o usuário deve informar nome, data e horário. |
| RL02 | O lembrete deve aparecer na lista após o cadastro. |
| RL03 | O usuário pode excluir um lembrete cadastrado. |
| RL04 | Antes da exclusão, o sistema deve solicitar confirmação do usuário. |
| RL05 | Os lembretes funcionam como registros de informações e não enviam notificações automáticas. |

## 5. Regras de Contatos

| Código | Regra |
|---|---|
| RCT01 | Para cadastrar um contato, o usuário deve informar nome e telefone. |
| RCT02 | O contato deve aparecer na lista após o cadastro. |
| RCT03 | O usuário pode excluir um contato cadastrado. |
| RCT04 | Antes da exclusão, o sistema deve solicitar confirmação do usuário. |
| RCT05 | O telefone cadastrado deve permitir iniciar uma ligação por meio do recurso disponível no dispositivo. |

## 6. Considerações Finais

As regras descritas neste documento correspondem às funcionalidades previstas para o MVP do Conecta60+.

O sistema tem como objetivo oferecer uma experiência simples e acessível, facilitando a organização de compromissos, lembretes e contatos importantes.
