Développeur de formation et passionné par le travail du bois, j’aborde chaque projet avec une approche structurée mêlant conception, expérimentation et réalisation.

Mes créations couvrent des domaines variés — mobilier, objets du quotidien, agencement ou projets mêlant bois et technologie. Cette diversité me permet d’explorer différentes techniques tout en cherchant des solutions adaptées à chaque usage.

Je porte une attention particulière à la phase de conception et de préparation, ainsi qu’à la réutilisation de matériaux lorsque cela est possible : chutes de bois, éléments récupérés ou matériaux issus du réemploi. Cette approche permet de limiter le gaspillage tout en donnant une seconde vie à des ressources souvent négligées.

Ce book présente une sélection de projets personnels, conçus et réalisés dans une démarche d’apprentissage continu et de recherche de solutions simples, fonctionnelles et durables.

<ul>
  <li>
    <a href="/">Accueil</a>
  </li>
{%- for post in collections.post reversed -%}
  <li {% if page.url == post.url %} aria-current="page"{% endif %}>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul>
