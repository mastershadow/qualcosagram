define(['jquery'], 
	function (jQuery) {
    var backdrops = {
        'cracco' : 'http://www.tommasobalestra.com/fotografo/wp-content/uploads/2014/03/CARLO-CRACCO1.jpg',
        'something' : 'http://i.imgur.com/9XgHOea.gif',
        'cat' : 'http://i.imgur.com/DIkQDDM.gif',
        'color' : 'http://i.imgur.com/pIjQD6c.jpg',
        'sure': 'http://i.imgur.com/6XX38ND.gif',
        'vince' : 'http://i.imgur.com/rQYV2IN.jpg',
        'sweat' : 'http://i.imgur.com/WLIv0g0.jpg',
        'rovigo' : 'http://farm6.staticflickr.com/5474/11335507225_f146080993_z.jpg',
        'volo' : 'http://oubliettemagazine.com/wp-content/uploads/fabio_volo.jpg',
        'envy' : 'http://i.imgur.com/J5Spd0d.jpg',
        'magna' : 'http://www.barzellettoggi.it/wp-content/uploads/2010/10/vorace.jpg',
        'mirror' : 'http://i.imgur.com/OyI3Cgo.jpg',
        'selfie' : 'http://i.imgur.com/5jindO3.jpg',
        'complotto' : 'http://www.echeion.it/wp-content/uploads/2013/06/complottismo-e-psicologia.jpeg',
        'silvestro' : 'http://blog.stefanotesi.it/wp-content/uploads/2014/01/silver.jpg',
        'visibilita' : 'http://www.bigthink.it/wp-content/uploads/2010/09/fb-visibility.jpg',
        'vegan' : 'http://i.imgur.com/SdIGDLT.jpg',
        'ombra' : 'http://i.imgur.com/UYuDSGb.gif',
        'renzi' : 'https://pbs.twimg.com/media/BxKucsXCAAADz4V.jpg:large',
        'aran' : 'http://www.adriano.casissa.it/wp-content/uploads/2014/10/salvatore-aranzulla.jpg',
        'figram' : 'http://i.imgur.com/ebzYjZq.jpg',
        'etichetta' : 'http://www.tipografiamapelli.com/dyn_img/catalogo/foto/30_f2_etichette-vino-dett.jpg',
        'steve' : 'http://i.imgur.com/ZOjAI.jpg',
        'kevin' : 'http://i.imgur.com/RaRdh0M.gif',
        'cosplay' : 'http://i.imgur.com/2WlYLZr.gif',
        'depre' : 'http://picsndquotes.com/wp-content/uploads/2015/02/depression-quotes-black-and-white-267.jpg',
        'party' : 'http://th06.deviantart.net/fs70/PRE/i/2013/113/c/2/wallpaper_party_by_swallowinheaven-d62qqhe.jpg'
    };

    var grams = {
        'qualcosagram' : {
            'message' : 'Hai presente Instagram? Uguale ma qualcosa di mai visto.',
            'backdrop' : [ 'something' ]
        },
        'pussygram' : {
            'message' : 'Fotografa la tua micina da ogni punto di vista...',
            'backdrop' : [ 'cat' ]
        },
        'arcamadogram' : {
            'message' : 'Selfie ed espressioni colorite del mignolo contro lo spigolo del letto.',
            'backdrop' : [ 'color' ]
        },
        'startuppagram' : {
            'message' : 'Fai un selfie alla tua startup per attirare montagne di capitale!',
            'backdrop' : [ 'sure' ]
        },
        'exchangegram' : {
            'message' : 'Le idee dei film sono le migliori. Non lo sapevi?',
            'backdrop' : [ 'vince' ]
        },
        'fitgram' : {
            'message' : 'Pronto a mostrare tutte le tue selfie sudate?',
            'backdrop' : [ 'sweat' ]
        },
        'craccogram' : {
            'message' : 'Tutti i selfie di Cracco, il grande chef programmatore.',
            'backdrop' : [ 'cracco' ]
        },
        'cittagram' : {
            'message' : 'Il social network per immagini della tua città, indubbiamente la più bella d\'Italia!',
            'backdrop' : [ 'rovigo' ]
        },
        'quotegram' : {
            'message' : 'Tutto l\'esistenzialismo di Fabio Volo e Ligabue in immagini quadrate.',
            'backdrop' : [ 'volo' ]
        },
        'invidiogram' : {
            'message' : 'Tutto quello che vorresti ma che non potrai mai avere.',
            'backdrop' : [ 'envy' ]
        },
        'magnagram' : {
            'message' : 'I tuoi amici non vedono l\'ora di vedere le tue buonissime portate.',
            'backdrop' : [ 'magna' ]
        },
        'specchiogram' : {
            'message' : 'Dai fatti una foto in bagno anche tu! Allo specchio ovviamente.',
            'backdrop' : [ 'mirror' ]
        },
        'selfiegram' : {
            'message' : 'Perchè il tuo brutto muso non l\'abbiamo ancora visto abbastanza.',
            'backdrop' : [ 'selfie' ]
        },
        'complottogram' : {
            'message' : 'Diffondi con noi citazione false e complottistiche. Uno uguale uno!!!!!',
            'backdrop' : [ 'complotto' ]
        },
        'vendolagram' : {
            'message' : 'Citazioni e supercazzole come se fosse antani a governare la Puglia.',
            'backdrop' : [ 'silvestro' ]
        },
        'pubblicigram' : {
            'message' : 'I selfie mentre lavori gratis in cambio di visibilità.',
            'backdrop' : [ 'visibilita' ]
        },
        'veganogram' : {
            'message' : 'Collezioni di selfie di ortaggi e piantagioni assolutamente BIO',
            'backdrop' : [ 'vegan' ]
        },
        'ombragram' : {
            'message' : 'Fai vedere a Toscani quanto bevi e quanto sei bello alticcio.',
            'backdrop' : [ 'ombra' ]
        },
        'figram' : {
            'message' : 'Un nuovo sito porno era assolutamente necessario.',
            'backdrop' : [ 'figram' ]
        },
        'aranzullagram' : {
            'message' : 'Alta pasticceria e informatica banale in un mistico blend.',
            'backdrop' : [ 'aran' ]
        },
        'vinogram' : {
            'message' : 'Perchè un vino con etichetta deve essere fotografato. Sempre.',
            'backdrop' : [ 'etichetta' ]
        },
        'renzigram' : {
            'message' : 'Shish is the way. Matteo Renzi che fa cose.',
            'backdrop' : [ 'renzi' ]
        },
        'jobsdenoaltrigram' : {
            'message' : 'Sei tu il nuovo Steve Jobs de noaltri? Dimostralo!',
            'backdrop' : [ 'steve' ]
        },
        'vaccinogram' : {
            'message' : 'I tuoi selfie con malattie una volta debellate.',
            'backdrop' : [ 'kevin' ]
        },
        'nerdgram' : {
            'message' : 'Crea confusione nelle masse con selfie incomprensibili ai più.',
            'backdrop' : [ 'cosplay' ]
        },
        'depressogram' : {
            'message' : 'Citazioni per immagini di cose tristissime.',
            'backdrop' : [ 'depre' ]
        },
        'partygram' : {
            'message' : 'Divertiti nel vedere i tuoi amici festeggiare dal telefono mentre sei con loro.',
            'backdrop' : [ 'party' ]
        }
    };


    return {
        grams : grams,
        backdrops : backdrops
    };
});
