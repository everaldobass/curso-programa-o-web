# Introdução
### Aula 01 - O que é CSS e CSS Inline
- CSS é a linguagem que usamos para estilizar um documento HTML.
- CSS significa Cascading Style Sheets
- CSS descreve como os elementos HTML devem ser exibidos na tela, papel ou em outra mídia
- CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web de uma só vez
As folhas de estilo externas são armazenadas em arquivos CSS

- Código CSS Inline
```
<h1 style="font-style: italic;">Sou a tag h1</h1>

```

###  Aula 02 - CSS Interno (incorporado na página)
- Nesta aula do curso de CSS completo vamos aprender como colocar CSS interno ou também conhecido como CSS incorporado na página. Funciona de forma bem simples, colocando uma tag style antes do fechamento do Head. Dessa forma você pode passar propriedades CSS diretamente por um seletor na página.

- Código CSS na mesma página
```
<html>
<head>
  <title>Código CSS - Entendendo a folha de estilos</title>
<style type="text/css">
h1{
  font-style: italic;
}
p{
  color: red;
}
</style>
</head>
<body>

```

### Aula 03 - CSS Externo
- Agora veremos a declaração de CSS mais utilizada, a externa. Basicamente ela se consiste em você colocar todo o código CSS em um arquivo externo .css e no html você apenas linkar/chamar esse arquivo para que o código seja estilizado. Ou seja, você vai chamar o CSS no HTML.

- Código CSS externo
```
<link rel="stylesheet" type="text/css" href="aqui entra o
link do seu arquivo externo">
```

### Aula 04 - Seletores e Classes
- Seletores CSS
Os Seletores definem quais elementos um conjunto de regras CSS se aplica.
- O seletor de id CSS
O seletor id usa o atributo id de um elemento HTML para selecionar um elemento específico.
- O seletor de classe CSS
O seletor de classe seleciona elementos HTML com um atributo de classe específico.

Para selecionar elementos com uma classe específica, escreva um caractere ponto (.), seguido do nome da classe.
- O seletor universal CSS
O seletor universal (*) seleciona todos os elementos HTML na página.
- O seletor de agrupamento CSS
O seletor de agrupamento seleciona todos os elementos HTML com as mesmas definições de estilo.

Veja o seguinte código CSS (os elementos h1, h2 e p têm as mesmas definições de estilo).

### Aula 05 - Propriedade Color
- Cores

### Aula 06 - Propriedade Background
- Background
- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background(propriedade abreviada)

### Aula 07 - Propriedade Border
- dotted- Define uma borda pontilhada
- dashed- Define uma borda tracejada
- solid- Define uma borda sólida
- double- Define uma borda dupla
- groove- Define uma borda ranhurada 3D. - O efeito depende do valor da cor da borda
- ridge- Define uma borda 3D estriada. O - efeito depende do valor da cor da borda
- inset- Define uma borda de inserção 3D. O efeito depende do valor da cor da borda
- outset- Define uma borda inicial 3D. O efeito depende do valor da cor da borda
- none- Não define borda
- hidden- Define uma borda oculta

### Aula 08 - Propriedade Margin
- CSS tem propriedades para especificar a margem para cada lado de um elemento:
- margin-top
- margin-right
- margin-bottom
- margin-left

### Aula 09 - Propriedade Padding e Criando Um Botão Simples
- O preenchimento é usado para criar espaço ao redor do conteúdo de um elemento, dentro de qualquer borda definida.
- padding-top
- padding-right
- padding-bottom
- padding-left

### Aula 10 - Propriedade Width e Height
- width - Largura
- height - Altura
- max-width
- min-width

###  Aula 11 - Propriedade Text
-  A propriedade Text é responsável pelos comportamentos de texto usando CSS. Ela tem várias sub-propriedades que definem os comportamentos de texto.
- text-align
- text-align-last
- direction
- unicode-bidi
- vertical-align

### Aula 12 - Propriedade Font
- Em CSS, usamos a font-familypropriedade para especificar a fonte de um texto.
- Estilo de fonte
- Tamanho da fonte
- Fonte Google
- Fonte Abreviada

### Aula 13 - Estilização de Links
- Links de estilo
Os links podem ser estilizados com qualquer propriedade CSS (por exemplo color, font-family, background, etc.).
- a:link- um link normal e não visitado
- a:visited- um link que o usuário visitou
- a:hover- um link quando o usuário passa o mouse sobre ele
- a:active- um link no momento em que é clicado

### Aula 14 - Propriedade Display
- Display em bloco

### Aula 15 - Propriedade Max-Width
- Layout CSS - largura e largura máxima

### Aula 16 - Propriedade Position
- static
- relative
- fixed
- absolute
- sticky

### Aula 17 - Propriedade Overflow
- visible- Predefinição. O estouro não é cortado. O conteúdo é renderizado fora da caixa do elemento
- hidden- O estouro é cortado e o restante do conteúdo ficará invisível
- scroll- O estouro é cortado e uma barra de rolagem é adicionada para ver o restante do conteúdo
- auto- Semelhante a scroll, mas adiciona barras de rolagem apenas quando necessário

### Aula 18 - Propriedade Float
- A floatpropriedade é usada para posicionar e formatar o conteúdo, por exemplo, deixar uma imagem flutuar à esquerda do texto em um contêiner.
- A floatpropriedade pode ter um dos seguintes valores:
- left- O elemento flutua à esquerda de seu contêiner
- right- O elemento flutua à direita de seu contêiner
- none- O elemento não flutua (será exibido exatamente onde ocorre no texto). Isso é padrão
- inherit- O elemento herda o valor float de seu pai

### Aula 19 - Propriedade Opacity
- https://picsum.photos/

### Aula 20 - Efeito Dropdown

### Aula 21 - Especificidade CSS
- Se houver duas ou mais regras de CSS conflitantes que apontam para o mesmo elemento, o navegador segue algumas regras para determinar qual é mais específico e, portanto, ganha ou é "mais forte".

### Aula 22 - Regra Important
- A regra importante concede uma exceção a ordem de especificidade que vimos na última aula. Determinamos com a regra important que aquela propriedade CSS específica é mais importante e portanto vai ignorar as outras.

### Aula 23 - Efeito Gradiente
- O efeito gradiente é aquele que faz uma transição suave entre uma cor para outra.

### Aula 24 - Propriedades Text Shadow e Box Shadow
-  propriedades o text-shadow e o box-shadow. 

### Aula 25 - Efeitos de Texto
- 
### Aula 26 - Media Queries
- As Media Queries são muito importantes para fazer sites responsivos, ou seja, que se adaptem a todos os tipos de resolução.
###  Aula 27 - Flexbox
- https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

### Criando Site do Zero Com CSS e HTML
- https://www.flaticon.com/br/autores/flat-icons
