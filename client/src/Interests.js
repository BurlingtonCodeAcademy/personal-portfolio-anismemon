import React from 'react'

// import icons that divide text groups

import bike from './files/noun_Bike_846647.png'
import language from './files/noun_Language_1714004.png'
import cooking from './files/noun_cooking_1884715.png'

function Interests(props) {

    // variables to store content and keep return statement cleaner

    let title = "Thes are some of my interests"
    let para1 = 'Not too long after I moved to Vermont in 2009 I got the bike-building bug. I started noticing young people cruising around town on bikes that looked quite different from the ones I remembered from the last time I’d ridden seriously. After learning about ‘commuters’ and ‘fixed-gear’ bike, I decided I wanted to build my own bike, beginning with an old French frame I picked up at a garage sale for $5. I soon discovered older French bikes have specifications that are incompatible with anyone else’s specs, which was aggravating but turned out to be a great introduction to compatibility and bike-building in general.'
    let para2 = 'Since then, I’ve learned to fully service and repair bikes and to build wheels, which is the part of bike-building that I enjoy the most. It requires discipline, precision and a great deal of patience, but it’s also the one part of bike-building that you can do without the bike!'
    let para3 = ''
    let para4 = 'I\'ll probably say something about language learning and literature. I might shorten the about me stuff and put it here as a reflection on language. Otherwise I\'ll talk about my reading interests.'
    let para5 = 'In this section I will talk about cooking. Maybe about learning to cook in Italy and the importance of good ingredients and making things by hand - a simple plate of home-made pasta with a simple tomato sauce is the best thing in world, if you start with good ingredients and you make everything yourself. It doesn\'t need to be elaborate!'

    // checks language to change content accordingly

    if (props.language === 'FR') {
        title = 'Voici quelques-uns de mes intérêts :'
        para1 = "Depuis plusieurs années je construis mes propres vélos a partir de cadres récupérés pour pas cher n’importe où. J’avoue qu’en rentrant aux USA en 2009 j’ai remarqué ces jeunes cool qui roulaient en ville sur des vélos pas comme ceux – lourds et moches – de mon enfance. Petit à petit, je me suis instruit grâce aux mécaniciens du magasin de référence et des incontournables vidéos sur YouTube et j’ai commencé à faire mes propres expériences, toujours plus compliquées et mieux raisonnées."
        para2 = 'En entamant ce voyage dans l’informatique, je remarque également qu’il y a pas mal di similarités entre la construction des vélos et celles des codes, il y a la même difficulté pour résoudre des petits problèmes en apparence tout à fait anodins, et la même satisfaction après des heures de lutte en trouvant la solution.'
        para3 = 'Mais surtout, quand je rame pendant des heures avec un problème de codage, il suffit de passer au vélo, et vice versa, j’espère …'
        para4 = 'Là je vais écrire quelques mots sur Queneau, l’Oulipo et les machines à produire du sens. Je crois qu’il y a bon lien à tisser entre ses efforts dans l’écriture et le codage, notamment les l’importance des règles et des contraintes.'
        para5 = 'Je vais parler de la cuisine. Peut-être les différences entre la cuisine française et celle italienne. Ou bien de l’importance de la simplicité (ce qui ramène en tout cas à cette même différence).'
    }

    if (props.language === 'IT') {
        title = 'I miei interessi includono ...'
        para1 = "Eh già, la bici. Finita l’epoca in cui i grandi corrieri proveniva dalla classe operaia e per i quali la bicicletta rappresentava un mezzo di trasporto necessario, quando s'intende se la potevano permettere. Passata a un veicolo di divertimento domenicale, la bici è di nuovo diventata un mezzo di trasporto, ma oramai a prezzi di lusso ... e per le classi medie che la adoperano a scopo politico, sociale, economico, ecologico."
        para2 = 'Più che la macchina e dopo la custodia del telefonino, la bici rappresenta la scelta personale che i conoscenti riconoscono, addocchiano o giudacano secondo volatili criteri di stile e utilità.'
        para3 = 'In cima a questa gerarchia sono le bici ‘bespoke’ – costruite pezzo per pezzo partendo da telai fatti su misura, la maggior parte da meccanici professionali e la minoranza da patiti che se le fanno a casa dopo accurati studi su internet. Al colmo poi della costruzione personale sta, per forza, la ruota ingegnata con le proprie mani che dà al costruttore (se non all\'utente) una soddisfazione inimitabile.'
        para4 = 'Qui dirò qualcosa su … ? Non so ancora, forse Queneau, o forse Calvino o sull’apprendistato delle lingue in generale. Il mio percorso.'
        para5 = 'Parlerò sicuramente della tradizione della cucina casalinga in Italia – l’importanza degli ingredienti di base.'
    }

    return (
        <div>

            <div>
                <h1>{title}</h1>
                <div id='mainContent'>
                    <div>
                        <img src={bike} className='icon' alt='bicycle icon' />
                    </div>
                    <p className='textPara'>{para1}</p>
                    <p className='textPara'>{para2}</p>
                    <p className='textPara'>{para3}</p>
                    <div>
                        <img src={language} className='icon' alt='world icon' />
                    </div>
                    <p className='textPara'>{para4}</p>
                    <div>
                        <img src={cooking} className='icon' alt='cooking icon' />
                    </div>
                    <p className='textPara'>{para5}</p>
                </div>
            </div>

        </div>
    )

}


export default Interests
