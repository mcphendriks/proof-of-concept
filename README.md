> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

#  Campspace Widget.

Deze widget stelt Campspace-hosts in staat om hun Campspace-boekingspagina op hun eigen website te promoten en potentiële gasten aan te trekken om een boeking te maken.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<img width="250" alt="Screenshot 2023-06-22 at 15 08 37" src="https://github.com/mcphendriks/proof-of-concept/assets/106346778/82da1861-a1a4-450e-9d04-3563ed99de5e">

<img width="500" alt="Screenshot 2023-06-22 at 15 08 01" src="https://github.com/mcphendriks/proof-of-concept/assets/106346778/aff9bbe3-eb71-46bc-8f55-57a3c4f5281f">



## Gebruik

User story: 
Als reiziger wil ik een widget op de websites van hosts die hun Campspace boekingspagina laat zien, om potentiële gasten te verleiden en aan te moedigen om de boeking voort te zetten.

Om de widget te gebruiken, voeg je de onderstaande code toe aan de HTML-pagina van de host's. Na het toevoegen van deze code zal de widget de Campspace-boekingspagina van de host tonen en potentiële gasten verleiden om door te gaan met de boeking.

```
 <script src="https://rawgit.com/mcphendriks/campspace-proof-of-concept/main/widget.js"></script>

    <script>
        createWidget();
    </script>
```

## Kenmerken

HTML-structuur:
De HTML-structuur van de widget bevat een section-element met de class "campspace-widget". Binnen dit element is er een button-element met de class "campspace-button" voor de "Book Now" knop. Daarna volgt een article-element met het attribuut "popover" en de id "my-popover-widget".

CSS:
De "campspace-widget article" class wordt gebruikt voor het instellen van de breedte, padding en overflow van het article-element.
De "campspace-widget-images-slider" class wordt gebruikt voor het weergeven van de afbeeldingen in een slider met een animatie.
De "campspace-widget-content-overlay" class wordt gebruikt voor het positioneren van de overlay-elementen zoals het logo, de prijs en de boekingsknop.

JS technieken:

Er wordt gebruik gemaakt van de fetch API om gegevens op te halen van de URL "https://campspace-dummy-data-test-a454ba90df28.herokuapp.com/hosts". Dit lijkt een externe API te zijn die host-gegevens retourneert.
De ontvangen gegevens worden omgezet naar JSON met behulp van response.json().
Er wordt een section-element gemaakt en toegevoegd aan de body van de pagina.
Er wordt gezocht naar de host met id 1 en de bijbehorende afbeeldingen worden opgehaald.
Vervolgens wordt de HTML-structuur van de widget gecreëerd en ingevuld met de verkregen gegevens.
Ten slotte wordt de gecreëerde widget toegevoegd aan de section en aan de body van de pagina.
Het is een combinatie van HTML, CSS en JavaScript die rechtstreeks in de browser wordt uitgevoerd.


## Installatie
1. Clone repository
2. Open een terminalvenster op je computer.
3. Navigeer naar de gewenste locatie waar je het project wilt installeren

## Bronnen

  * [popover](https://mdn.github.io/dom-examples/popover-api/ )
  * [buttons or links](https://codepen.io/sophiekoonin/pen/oNZdebX)
  * [github JavaScript file implementeren in github](https://codepen.io/jonvadillo/pen/BKMdRP)
  * [popover attribute ](https://hidde.blog/popover-semantics/)


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
