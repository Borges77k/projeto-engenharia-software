
# Diagrama de Arquitetura — Conecta60+

O Conecta60+ é uma aplicação web desenvolvida com React e JavaScript. Os dados são armazenados no próprio navegador por meio do localStorage, sem a necessidade de um banco de dados ou servidor próprio.

## Representação da arquitetura

```mermaid
flowchart TD
    U["Pessoa usuária (60+)"]
    B["Navegador"]

    subgraph APP["Aplicação Conecta60+"]
        R["React"]
        C["Componentes e funcionalidades"]
        S["Estado e funções do App.jsx"]
        CSS["CSS: aparência e acessibilidade"]
    end

    LS[("localStorage do navegador")]
    D["Compromissos, lembretes e contatos"]

    U --> B
    B --> R
    R --> C
    C --> S
    R --> CSS
    S <--> LS
    LS --- D
```
