# Site Potine — Cozinha Canadense

Protótipo visual do site institucional da Potine, feito em HTML + CSS puro (sem framework, sem necessidade de instalar nada). Basta abrir o `index.html` no navegador.

Desenvolvido por **Na Lima** ([@nathdelima](https://instagram.com/nathdelima)).

---

## Estrutura de pastas

```
potine-site/
├── index.html          Conteúdo e estrutura do site (HTML)
├── css/
│   └── styles.css      Todo o visual: cores, fontes, espaçamentos, layout
├── js/
│   └── script.js       Rolagem suave ao clicar no menu
├── images/
│   ├── logo-potine.jpg          Logo oficial (usada no hero e no rodapé)
│   ├── ilustracao-potine.png    Ilustração da seção "Anatomia da Potine"
│   ├── avaliacao-shaiala.png    Prints reais de avaliações do iFood
│   ├── avaliacao-ycaro.png
│   ├── avaliacao-bruno.png
│   └── avaliacao-pedro.png
└── README.md            Este arquivo
```

Cada arquivo tem comentários no início (e ao longo do código) indicando o que
é cada parte. No HTML, cada seção do site tem um comentário tipo:

```html
<!-- ============ CARDÁPIO DE SABORES ============ -->
```

pra facilitar encontrar rapidamente o trecho que você quer editar.

---

## Como fazer ajustes comuns

**Trocar um texto:** abra o `index.html` em qualquer editor (Notepad,
VS Code, etc.), use Ctrl+F pra achar o texto e troque direto.

**Trocar uma cor:** as cores do site inteiro estão centralizadas no topo do
`css/styles.css`, dentro de `:root`. Por exemplo, `--red` é o vermelho
principal da marca — mudar esse valor muda a cor em todos os lugares que
usam vermelho de uma vez.

**Trocar uma foto:** substitua o arquivo dentro de `images/` mantendo o
mesmo nome (por exemplo, substitua `images/ilustracao-potine.png` por outra
imagem com esse mesmo nome de arquivo), ou adicione uma nova imagem na
pasta e atualize o caminho correspondente no `index.html`.

**Publicar o site:** qualquer serviço de hospedagem que aceite arquivos
estáticos (Hostinger, Netlify, Vercel, GitHub Pages etc.) funciona — é só
subir a pasta `potine-site` inteira, mantendo essa mesma estrutura de
pastas.

---

## Observação técnica

O site usa fontes do Google Fonts (Big Shoulders Display, Karla, Space
Mono), carregadas via internet no `<head>` do `index.html`. Isso significa
que é necessário estar conectado à internet para as fontes carregarem
corretamente — sem conexão, o navegador usa uma fonte padrão como
alternativa, mas o layout continua funcionando normalmente.
