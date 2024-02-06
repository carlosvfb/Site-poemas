if (!document.createElement('audio').canPlayType) {
    var audioContainer = document.getElementById('audio-container');
    var audio = document.getElementById('audio');
    var audioMessage = document.getElementById('audio-message');
    
    // Oculta o elemento de áudio e mostra a mensagem alternativa
    audioContainer.removeChild(audio);
    audioMessage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "A Luz do Amor",
            content: "Nos confins do universo,<br><br>onde o céu encontra o mar,<br><br>brilha a luz do nosso amor,<br><br>eterna, radiante, sem par.<br><br>Em cada estrela, vejo o reflexo dos teus olhos,<br><br>em cada brisa, sinto o toque da tua mão,<br><br>inspirando-me a voar mais alto,<br><br>em direção à nossa eterna paixão."
        },
        {
            title: "Caminho da Paixão",
            content: "Pelos caminhos sinuosos da vida,<br><br>sigo com fé e devoção,<br><br>guiado pela tua luz radiante,<br><br>na trilha da paixão.<br><br>Encontro nos teus passos o ritmo da esperança,<br><br>e no teu sorriso a melodia da ternura,<br><br>inspirando-me a seguir em frente,<br><br>com a força do nosso amor como minha única armadura."
        },
        {
            title: "O Brilho do Teu Sorriso",
            content: "No brilho do teu sorriso encantador,<br><br>encontro a minha razão de ser,<br><br>a inspiração que alimenta meu ser,<br><br>e a chama que me faz renascer.<br><br>Como o sol que ilumina o dia,<br><br>teu sorriso aquece minha alma,<br><br>inspirando-me a viver intensamente,<br><br>e a amar sem medo, sem hesitação."
        },
        {
            title: "Rumo aos Sonhos",
            content: "Sob o manto estrelado da noite,<br><br>dançamos ao som da lua prateada,<br><br>seguindo o rumo dos nossos sonhos,<br><br>na estrada da vida iluminada.<br><br>Cada passo é uma promessa,<br><br>cada suspiro, uma nova canção,<br><br>inspirando-nos a acreditar,<br><br>que juntos, viveremos nossa própria paixão."
        },
        {
            title: "A Dança do Amor",
            content: "No compasso dos nossos corações,<br><br>dançamos ao ritmo do amor,<br><br>movidos pela doce melodia,<br><br>que ecoa em nosso redor.<br><br>Cada movimento é uma expressão,<br><br>cada olhar, uma história por contar,<br><br>inspirando-nos a viver o presente,<br><br>e a amar sem limites, sem hesitar."
        },
        {
            title: "Estrela Cadente",
            content: "Como uma estrela cadente no céu,<br><br>cruzando o firmamento com graça,<br><br>teu amor ilumina minha vida,<br><br>e preenche meu coração com graça.<br><br>Teus olhos são faróis na escuridão,<br><br>guiando-me para além da tempestade,<br><br>inspirando-me a acreditar em nós,<br><br>e no poder do amor, sem idade."
        },
        {
            title: "O Encanto da Tua Presença",
            content: "No encanto da tua presença celestial,<br><br>encontro refúgio para minha alma,<br><br>a inspiração que acalma minhas angústias,<br><br>e o calor que afasta qualquer calma.<br><br>Teu sorriso é a luz que guia meus passos,<br><br>teu toque, a música que embala meu coração,<br><br>inspirando-me a viver plenamente,<br><br>e a amar com verdadeira devoção."
        },
        {
            title: "Além das Palavras",
            content: "Em teu olhar encontro o paraíso,<br><br>onde o amor encontra morada,<br><br>palavras são meras sombras,<br><br>diante da tua presença abençoada.<br><br>Em cada gesto, enxergo a eternidade,<br><br>cada sorriso, uma nova canção,<br><br>inspirando-nos a viver intensamente,<br><br>e a amar sem medo, sem hesitação."
        },
        {
            title: "O Despertar da Alma",
            content: "Nas águas calmas da alvorada,<br><br>minha alma encontra o repouso,<br><br>inspirada pela tua presença serena,<br><br>renasço em teu doce colo amoroso.<br><br>Cada momento ao teu lado é uma bênção,<br><br>cada carícia, uma melodia de encantar,<br><br>inspirando-me a ser quem realmente sou,<br><br>e a amar-te mais a cada despertar."
        },
        {
            title: "A Magia do Nosso Amor",
            content: "Como um conto de fadas encantado,<br><br>nosso amor é uma história sem igual,<br><br>onde cada capítulo é uma aventura,<br><br>cada página, uma emoção sem igual.<br><br>Em teus braços encontro o meu lar,<br><br>em teus beijos, o doce sabor do amor,<br><br>inspirando-me a ser melhor a cada dia,<br><br>e a compartilhar contigo meu fervor."
        },
        {
            title: "Raios de Esperança",
            content: "No horizonte da vida,<br><br>onde o sol encontra o mar,<br><br>brilha a luz da esperança,<br><br>que nos faz acreditar.<br><br>Teu amor é o farol que nos guia,<br><br>em meio às tempestades da escuridão,<br><br>inspirando-nos a seguir em frente,<br><br>e a lutar por nossa união."
        },
        {
            title: "Nosso Universo Particular",
            content: "Em nosso universo particular,<br><br>somos os guardiões da nossa história,<br><br>inspirados pelo amor que nos une,<br><br>vivemos cada dia com memória.<br><br>Cada momento é uma nova aventura,<br><br>cada sorriso, uma página de encantar,<br><br>inspirando-nos a compartilhar,<br><br>esta jornada."
        }
    ];

    const poema1 = document.querySelector('.poema1');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema1.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Vida em Movimento",
            content: "A vida é como um rio que flui,<br><br>constantemente em movimento,<br><br>levando-nos em uma jornada,<br><br>rumo ao desconhecido.<br><br>Navegamos pelas águas turbulentas,<br><br>e nos banhamos nas correntes calmas,<br><br>inspirando-nos a aproveitar cada momento,<br><br>e a abraçar a aventura da vida."
        },
        {
            title: "Ciclos da Vida",
            content: "Na roda dos ciclos da vida,<br><br>dançamos ao ritmo do tempo,<br><br>crescendo, mudando, florescendo,<br><br>em um eterno movimento.<br><br>Cada estação traz sua magia,<br><br>cada dia, uma nova canção,<br><br>inspirando-nos a celebrar a jornada,<br><br>e a abraçar a beleza da mudança."
        },
        {
            title: "Vida em Harmonia",
            content: "A vida é uma sinfonia,<br><br>onde cada nota tem seu lugar,<br><br>criando harmonia na diversidade,<br><br>e beleza no caos do mundo.<br><br>Cada momento é uma melodia,<br><br>cada encontro, uma nova experiência,<br><br>inspirando-nos a ouvir atentamente,<br><br>e a dançar ao ritmo da vida."
        },
        {
            title: "A Arte de Viver",
            content: "Viver é uma arte,<br><br>uma expressão de nossa alma,<br><br>um quadro em constante evolução,<br><br>cheio de cor, luz e sombra.<br><br>Cada pincelada é uma escolha,<br><br>cada tela, uma história a contar,<br><br>inspirando-nos a criar beleza,<br><br>em cada momento que compartilhamos."
        },
        {
            title: "Vida e Renovação",
            content: "Na teia da vida, encontramos renovação,<br><br>como a primavera após o inverno,<br><br>como a aurora após a noite escura,<br><br>como a esperança após a desilusão.<br><br>Cada novo começo é uma oportunidade,<br><br>cada desafio, uma chance de crescer,<br><br>inspirando-nos a abraçar a mudança,<br><br>e a florescer onde quer que estejamos."
        },
        {
            title: "A Magia da Vida",
            content: "A vida é uma jornada mágica,<br><br>cheia de mistério e maravilha,<br><br>onde cada momento é uma descoberta,<br><br>e cada encontro é uma aventura.<br><br>Como os pássaros que voam livremente,<br><br>e as estrelas que brilham no céu,<br><br>inspirando-nos a explorar, a sonhar,<br><br>e a encontrar a magia em tudo que fazemos."
        },
        {
            title: "Vida e Gratidão",
            content: "Na jornada da vida, encontramos gratidão,<br><br>nas pequenas coisas e nas grandes emoções,<br><br>no nascer do sol e no cair da noite,<br><br>na beleza de cada estação.<br><br>Cada momento é um presente,<br><br>cada pessoa, uma bênção a ser celebrada,<br><br>inspirando-nos a viver com gratidão,<br><br>e a valorizar cada momento que compartilhamos."
        },
        {
            title: "Vida e Transformação",
            content: "A vida é um processo de transformação,<br><br>como a borboleta que emerge do casulo,<br><br>como a semente que se torna árvore,<br><br>como o amor que cresce em nossos corações.<br><br>Cada desafio é uma oportunidade,<br><br>cada dor, uma lição a ser aprendida,<br><br>inspirando-nos a abraçar a mudança,<br><br>e a florescer mesmo nos momentos mais difíceis."
        },
        {
            title: "Vida e Sonhos",
            content: "Na tapeçaria da vida, tecemos nossos sonhos,<br><br>como fios de luz e esperança,<br><br>como estrelas no céu da noite,<br><br>como flores no jardim da alma.<br><br>Cada sonho é uma jornada,<br><br>cada desejo, uma estrela a guiar,<br><br>inspirando-nos a acreditar em nós mesmos,<br><br>e no poder de nossos sonhos para nos conduzir adiante."
        },
        {
            title: "A Aventura da Vida",
            content: "A vida é uma aventura sem fim,<br><br>uma jornada de descoberta e crescimento,<br><br>onde cada passo nos leva adiante,<br><br>e cada escolha molda nosso destino.<br><br>Cada desafio é uma oportunidade,<br><br>cada experiência, uma lição a ser aprendida,<br><br>inspirando-nos a abraçar o desconhecido,<br><br>e a mergulhar de cabeça na aventura da vida."
        },
        {
            title: "Vida e Amor",
            content: "Na dança da vida, o amor é a música,<br><br>a melodia que embala nossos corações,<br><br>e nos guia em nossa jornada,<br><br>com graça, beleza e devoção.<br><br>Cada gesto é uma expressão de amor,<br><br>cada olhar, uma promessa a ser cumprida,<br><br>inspirando-nos a amar mais profundamente,<br><br>e a viver com alegria e paixão."
        },
        {
            title: "Vida e Esperança",
            content: "Na trama da vida, encontramos esperança,<br><br>como a luz que brilha na escuridão,<br><br>como a flor que desabrocha na primavera,<br><br>como o sol que nasce a cada manhã.<br><br>Cada desafio é uma oportunidade,<br><br>cada adversidade, uma lição a ser aprendida,<br><br>inspirando-nos a acreditar em um futuro melhor,<br><br>e a trabalhar para tornar nossos sonhos realidade."
        }
    ];

    const poema2 = document.querySelector('.poema2');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema2.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Alma Livre",
            content: "Minha alma é como um pássaro,<br><br>livre para voar além dos limites,<br><br>além das fronteiras do tempo e do espaço,<br><br>em busca de novos horizontes.<br><br>Nas asas da liberdade,<br><br>dança ao ritmo do vento,<br><br>inspirando-me a seguir seu exemplo,<br><br>e a buscar a verdade em cada momento."
        },
        {
            title: "Alma Serena",
            content: "No silêncio da minha alma,<br><br>encontro a paz que tanto busco,<br><br>um oásis de tranquilidade,<br><br>em meio ao caos do mundo.<br><br>Cada suspiro é uma prece,<br><br>cada momento, uma meditação,<br><br>inspirando-me a viver plenamente,<br><br>e a abraçar a serenidade do meu ser."
        },
        {
            title: "Alma Errante",
            content: "Minha alma é uma viajante,<br><br>caminhando pelas estradas da vida,<br><br>explorando os cantos mais remotos do universo,<br><br>em busca de sua própria essência.<br><br>Cada experiência é uma aventura,<br><br>cada encontro, uma lição a ser aprendida,<br><br>inspirando-me a seguir em frente,<br><br>na jornada da descoberta interior."
        },
        {
            title: "Alma Poética",
            content: "Na cadência das palavras,<br><br>minha alma encontra sua expressão,<br><br>em versos que dançam como folhas ao vento,<br><br>em rimas que ecoam como canção.<br><br>Cada poema é uma viagem,<br><br>cada estrofe, uma paisagem a explorar,<br><br>inspirando-me a mergulhar fundo,<br><br>nas profundezas do meu ser."
        },
        {
            title: "Alma Iluminada",
            content: "A luz da minha alma brilha intensamente,<br><br>como uma estrela no céu da noite,<br><br>iluminando o caminho à frente,<br><br>e dissipando as sombras do medo.<br><br>Cada pensamento é uma centelha,<br><br>cada ação, um raio de esperança,<br><br>inspirando-me a irradiar amor,<br><br>e a ser a luz que guia outros pelo caminho."
        },
        {
            title: "Alma Inquieta",
            content: "Minha alma é uma buscadora eterna,<br><br>inquieta e ávida por descoberta,<br><br>explorando os mistérios do universo,<br><br>e os segredos do coração.<br><br>Cada pergunta é uma jornada,<br><br>cada resposta, uma revelação,<br><br>inspirando-me a seguir em frente,<br><br>na busca pela verdade e pela realização."
        },
        {
            title: "Alma Vibrante",
            content: "A energia da minha alma pulsa forte,<br><br>como as ondas do mar em fúria,<br><br>um turbilhão de emoções e sentimentos,<br><br>que ecoam pela eternidade.<br><br>Cada batida é uma sinfonia,<br><br>cada pulsação, uma dança sem fim,<br><br>inspirando-me a viver plenamente,<br><br>e a abraçar a intensidade do meu ser."
        },
        {
            title: "Alma Vulnerável",
            content: "Minha alma é como uma flor delicada,<br><br>que desabrocha na luz do amanhecer,<br><br>vulnerável e ao mesmo tempo forte,<br><br>em sua beleza efêmera.<br><br>Cada pétala é uma memória,<br><br>cada perfume, uma história a ser contada,<br><br>inspirando-me a valorizar cada momento,<br><br>e a proteger a pureza do meu ser."
        },
        {
            title: "Alma Ressignificada",
            content: "Minha alma é como uma fênix renascida,<br><br>das cinzas do passado,<br><br>fortalecida pela dor e pela superação,<br><br>e pronta para voar mais alto.<br><br>Cada cicatriz é uma lembrança,<br><br>cada ferida, uma lição a ser aprendida,<br><br>inspirando-me a abraçar a jornada,<br><br>e a viver cada dia com coragem e determinação."
        },
        {
            title: "Alma Plena",
            content: "Minha alma transborda de gratidão,<br><br>como um rio que corre livremente,<br><br>levando consigo as bênçãos da vida,<br><br>e os presentes do universo.<br><br>Cada sorriso é uma dádiva,<br><br>cada lágrima, uma prece silenciosa,<br><br>inspirando-me a viver plenamente,<br><br>e a abraçar a beleza da existência."
        },
        {
            title: "Alma Compassiva",
            content: "A essência da minha alma é compaixão,<br><br>uma chama que arde eternamente,<br><br>acendendo os corações daqueles que cruzam meu caminho,<br><br>e iluminando os cantos mais sombrios do mundo.<br><br>Cada gesto é uma benção,<br><br>cada palavra, uma oração em ação,<br><br>inspirando-me a compartilhar amor,<br><br>e a ser a luz que guia outros pelo caminho."
        },
        {
            title: "Alma em Transformação",
            content: "Minha alma é como um rio em constante fluxo,<br><br>seguindo o curso da vida,<br><br>transformando-se com cada experiência,<br><br>e fluindo em direção à sua verdadeira essência.<br><br>Cada curva é uma descoberta,<br><br>cada corredeira, uma lição a ser aprendida,<br><br>inspirando-me a abraçar a mudança,<br><br>e a florescer onde quer que eu vá."
        }
    ];

    const poema3 = document.querySelector('.poema3');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema3.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Amigos para Sempre",
            content: "Amigos para sempre, lado a lado,<br><br>companheiros de jornada, coração a coração,<br><br>unidos pelo laço da amizade,<br><br>em uma aliança que jamais se desfará.<br><br>Cada riso é uma lembrança,<br><br>cada lágrima, um elo mais forte,<br><br>inspirando-nos a valorizar cada momento,<br><br>e a celebrar o dom da amizade."
        },
        {
            title: "Caminhada Amiga",
            content: "Na caminhada da vida, encontramos amigos,<br><br>como estrelas que iluminam nosso caminho,<br><br>como brisas que refrescam nosso espírito,<br><br>como sol que aquece nosso coração.<br><br>Cada passo é uma aventura,<br><br>cada encontro, uma dádiva a ser celebrada,<br><br>inspirando-nos a caminhar juntos,<br><br>na estrada da amizade."
        },
        {
            title: "Laços Inquebráveis",
            content: "Os laços da amizade são inquebráveis,<br><br>como fios entrelaçados que resistem ao tempo,<br><br>como raízes profundas que nutrem nossa alma,<br><br>como abraços que nos envolvem em amor.<br><br>Cada momento é uma bênção,<br><br>cada lembrança, um tesouro a ser guardado,<br><br>inspirando-nos a cultivar os laços da amizade,<br><br>e a honrar os amigos que tornam nossa vida mais rica."
        },
        {
            title: "Amizade Verdadeira",
            content: "Na jornada da vida, encontramos amigos verdadeiros,<br><br>que nos aceitam como somos,<br><br>que nos apoiam em nossos sonhos,<br><br>que caminham ao nosso lado em todas as estações.<br><br>Cada momento é uma dádiva,<br><br>cada experiência, uma oportunidade de crescimento,<br><br>inspirando-nos a valorizar a sinceridade,<br><br>e a cultivar a amizade que enriquece nossa vida."
        },
        {
            title: "O Dom da Amizade",
            content: "A amizade é um dom precioso,<br><br>um tesouro que não tem preço,<br><br>uma bênção que ilumina nosso caminho,<br><br>em meio às sombras da vida.<br><br>Cada sorriso é uma canção,<br><br>cada abraço, uma expressão de amor,<br><br>inspirando-nos a ser amigos verdadeiros,<br><br>e a compartilhar o dom da amizade com o mundo."
        },
        {
            title: "Cumplicidade e Carinho",
            content: "Na dança da vida, os amigos são nossos parceiros,<br><br>dançando ao ritmo do coração,<br><br>com cumplicidade e carinho,<br><br>em uma sinfonia de amizade e emoção.<br><br>Cada gesto é uma harmonia,<br><br>cada olhar, uma canção a ser cantada,<br><br>inspirando-nos a celebrar a amizade,<br><br>e a honrar os laços que nos unem para sempre."
        },
        {
            title: "Amigos do Coração",
            content: "Amigos do coração, unidos pela alma,<br><br>companheiros de risadas e lágrimas,<br><br>apoiando-se mutuamente nas horas difíceis,<br><br>e compartilhando alegrias nos momentos felizes.<br><br>Cada encontro é uma festa,<br><br>cada despedida, um até breve,<br><br>inspirando-nos a valorizar cada amizade,<br><br>e a cultivar os laços que nos unem para sempre."
        },
        {
            title: "Juntos na Jornada",
            content: "Na jornada da vida, caminhamos juntos,<br><br>amigos inseparáveis, coração a coração,<br><br>apoiando-nos uns aos outros,<br><br>em cada passo do caminho.<br><br>Cada desafio é uma oportunidade,<br><br>cada vitória, uma celebração,<br><br>inspirando-nos a continuar a jornada,<br><br>com amor, apoio e amizade verdadeira."
        },
        {
            title: "Amigos para Todas as Horas",
            content: "Amigos para todas as horas, para toda a vida,<br><br>companheiros fiéis, em qualquer situação,<br><br>compartilhando sonhos, alegrias e tristezas,<br><br>e construindo memórias que durarão para sempre.<br><br>Cada momento é uma dádiva,<br><br>cada amizade, um tesouro a ser valorizado,<br><br>inspirando-nos a ser amigos leais,<br><br>e a celebrar a beleza da amizade em nossas vidas."
        },
        {
            title: "Laços de Amizade",
            content: "Os laços de amizade são como elos de ouro,<br><br>que brilham com o calor do amor,<br><br>e resistem ao teste do tempo,<br><br>fortalecidos pela sinceridade e pela confiança.<br><br>Cada sorriso é uma joia,<br><br>cada abraço, um tesouro precioso,<br><br>inspirando-nos a valorizar os laços que nos unem,<br><br>e a honrar a beleza da verdadeira amizade."
        },
        {
            title: "Amigos para Sempre",
            content: "Amigos para sempre, lado a lado,<br><br>companheiros de jornada, coração a coração,<br><br>unidos pelo laço da amizade,<br><br>em uma aliança que jamais se desfará.<br><br>Cada riso é uma lembrança,<br><br>cada lágrima, um elo mais forte,<br><br>inspirando-nos a valorizar cada momento,<br><br>e a celebrar o domda amizade."
        },
        {
        title: "Amigos Verdadeiros",
        content: "Amigos verdadeiros são como estrelas,<br><br>que iluminam nossa vida com seu brilho,<br><br>navegando os mares da existência juntos,<br><br>e enfrentando tempestades lado a lado.<br><br>Cada conversa é uma sinfonia,<br><br>cada silêncio, uma comunhão de almas,<br><br>inspirando-nos a cultivar os laços da amizade,<br><br>e a honrar os amigos que tornam nossa jornada mais significativa."
        },
        {
        title: "Amizade Eterna",
        content: "A amizade é eterna como o horizonte,<br><br>infinita como o universo,<br><br>um laço que transcende o tempo e o espaço,<br><br>e perdura além das vicissitudes da vida.<br><br>Cada riso é uma lembrança,<br><br>cada lágrima, um testemunho de amor,<br><br>inspirando-nos a valorizar cada momento compartilhado,<br><br>e a celebrar a dádiva da amizade eterna."
        },
        {
        title: "Cumplicidade Amiga",
        content: "Na dança da vida, os amigos são nossos parceiros,<br><br>cúmplices de aventuras e desafios,<br><br>compartilhando risadas e lágrimas,<br><br>em um vínculo que se fortalece a cada passo.<br><br>Cada conversa é um bálsamo,<br><br>cada abraço, uma expressão de carinho,<br><br>inspirando-nos a nutrir os laços da amizade,<br><br>e a valorizar os amigos que caminham ao nosso lado."
        },
        {
        title: "Laços Inquebráveis",
        content: "Os laços da amizade são inquebráveis,<br><br>como fios entrelaçados que resistem ao tempo,<br><br>como raízes profundas que nutrem nossa alma,<br><br>como abraços que nos envolvem em amor.<br><br>Cada momento é uma bênção,<br><br>cada lembrança, um tesouro a ser guardado,<br><br>inspirando-nos a cultivar os laços da amizade,<br><br>e a honrar os amigos que tornam nossa vida mais rica."
        },
        {
        title: "Alegria Compartilhada",
        content: "Na jornada da vida, compartilhamos alegrias,<br><br>com os amigos que nos acompanham pelo caminho,<br><br>celebrando cada conquista, cada vitória,<br><br>e enchendo nossos corações de gratidão.<br><br>Cada sorriso é um presente,<br><br>cada abraço, uma expressão de amor,<br><br>inspirando-nos a valorizar a felicidade compartilhada,<br><br>e a cultivar os laços que nos unem para sempre."
        },
        {
        title: "Amigos do Coração",
        content: "Amigos do coração, unidos pela alma,<br><br>companheiros de risadas e lágrimas,<br><br>apoiando-se mutuamente nas horas difíceis,<br><br>e compartilhando alegrias nos momentos felizes.<br><br>Cada encontro é uma festa,<br><br>cada despedida, um até breve,<br><br>inspirando-nos a valorizar cada amizade,<br><br>e a cultivar os laços que nos unem para sempre."
        },
        {
        title: "Caminhos Compartilhados",
        content: "Na estrada da vida, encontramos amigos,<br><br>que caminham ao nosso lado com amor e compaixão,<br><br>compartilhando nossas esperanças e sonhos,<br><br>e enfrentando desafios juntos, de mãos dadas.<br><br>Cada passo é uma jornada,<br><br>cada momento, uma memória preciosa,<br><br>inspirando-nos a nutrir os laços da amizade,<br><br>e a honrar os amigos que iluminam nosso caminho."
        },
        {
        title: "Amizade Verdadeira",
        content: "Na jornada da vida, encontramos amigos verdadeiros,<br><br>que nos aceitam como somos,<br><br>que nos apoiam em nossos sonhos,<br><br>que caminham ao nosso lado em todas as estações.<br><br>Cada momento é uma dádiva,<br><br>cada experiência, uma oportunidade de crescimento,<br><br>inspirando-nos a valorizar a sinceridade,<br><br>e a cultivar a amizade que enriquece nossa vida."
        }
    ];

    const poema4 = document.querySelector('.poema4');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema4.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Voo dos Sonhos",
            content: "Nas asas da imaginação, eu voo,<br><br>em busca dos meus mais profundos sonhos,<br><br>alcançando alturas nunca antes imaginadas,<br><br>e tocando estrelas com as pontas dos dedos.<br><br>Cada batida do coração é uma canção,<br><br>cada suspiro, uma oração silenciosa,<br><br>inspirando-me a voar mais alto,<br><br>e a nunca desistir dos meus sonhos."
        },
        {
            title: "Caminho dos Sonhos",
            content: "Na estrada da vida, eu caminho,<br><br>com passos firmes e o coração cheio de esperança,<br><br>perseguindo meus mais doces sonhos,<br><br>e seguindo a luz que guia o meu caminho.<br><br>Cada curva é uma surpresa,<br><br>cada obstáculo, uma lição a ser aprendida,<br><br>inspirando-me a seguir em frente,<br><br>e a nunca desviar do meu destino."
        },
        {
            title: "Estrelas dos Sonhos",
            content: "No céu da minha mente, brilham estrelas,<br><br>cintilando com a promessa de sonhos realizados,<br><br>guiando-me através da escuridão da noite,<br><br>e iluminando o caminho para um futuro brilhante.<br><br>Cada estrela é uma inspiração,<br><br>cada constelação, um mapa para o sucesso,<br><br>inspirando-me a nunca deixar de sonhar,<br><br>e a seguir as estrelas até o fim do universo."
        },
        {
            title: "Horizonte dos Sonhos",
            content: "No horizonte da minha alma, vislumbro sonhos,<br><br>como montanhas majestosas que se erguem diante de mim,<br><br>desafiando-me a escalá-las com coragem e determinação,<br><br>e a alcançar alturas nunca antes imaginadas.<br><br>Cada pôr do sol é uma promessa,<br><br>cada nascer do sol, uma nova oportunidade,<br><br>inspirando-me a continuar a jornada,<br><br>e a perseguir os meus sonhos com paixão e perseverança."
        },
        {
            title: "Despertar dos Sonhos",
            content: "No despertar da manhã, eu me encontro,<br><br>entre o sono e a realidade, entre o sonho e a vigília,<br><br>mergulhando nas profundezas da minha imaginação,<br><br>e explorando os recantos mais secretos da minha alma.<br><br>Cada suspiro é uma jornada,<br><br>cada batida do coração, uma aventura,<br><br>inspirando-me a abraçar cada sonho,<br><br>e a viver cada momento com gratidão e alegria."
        },
        {
            title: "Sinfonia dos Sonhos",
            content: "Na sinfonia da vida, os sonhos são a música,<br><br>que ecoa através do tempo e do espaço,<br><br>encantando nossos corações e alimentando nossas almas,<br><br>com melodias de esperança e amor.<br><br>Cada nota é uma inspiração,<br><br>cada acorde, uma expressão de beleza,<br><br>inspirando-nos a dançar ao ritmo dos nossos sonhos,<br><br>e a criar uma sinfonia única de vida e paixão."
        },
        {
            title: "Trilha dos Sonhos",
            content: "Na trilha da minha jornada, eu sigo,<br><br>atravessando vales profundos e montanhas íngremes,<br><br>perseguindo os meus sonhos com determinação e coragem,<br><br>e encontrando beleza e inspiração em cada passo do caminho.<br><br>Cada desafio é uma oportunidade,<br><br>cada obstáculo, uma lição a ser aprendida,<br><br>inspirando-me a continuar avançando,<br><br>e a nunca desistir do meu destino."
        },
        {
            title: "Visão dos Sonhos",
            content: "Com os olhos da minha alma, eu vejo,<br><br>um mundo de possibilidades se desdobrando diante de mim,<br><br>onde os sonhos se transformam em realidade,<br><br>e a esperança floresce em cada coração.<br><br>Cada visão é uma promessa,<br><br>cada vislumbre, uma oportunidade de crescimento,<br><br>inspirando-me a acreditar no impossível,<br><br>e a perseguir os meus sonhos com fé e determinação."
        },
        {
            title: "Aurora dos Sonhos",
            content: "Na aurora de um novo dia, eu me levanto,<br><br>com esperança renovada e sonhos resplandecentes,<br><br>abandonando o passado e abraçando o futuro,<br><br>com coragem e confiança no meu coração.<br><br>Cada amanhecer é uma bênção,<br><br>cada raio de sol, uma nova oportunidade,<br><br>inspirando-me a seguir em frente,<br><br>e a conquistar os meus sonhos com bravura e determinação."
        },
        {
            title: "Jardim dos Sonhos",
            content: "No jardim da minha mente, florescem sonhos,<br><br>como rosas desabrochando sob o sol da manhã,<br><br>enchendo o ar com fragrâncias de esperança e alegria,<br><br>e colorindo o mundo com suas vibrantes pétalas.<br><br>Cada flor é uma promessa,<br><br>cada broto, uma nova possibilidade,<br><br>inspirando-me a cultivar os meus sonhos,<br><br>e a regar as sementes da minha imaginação com amor e gratidão."
        },
        {
            title: "Viagem dos Sonhos",
            content: "Na viagem da vida, eu navego,<br><br>em mares agitados e céus tempestuosos,<br><br>perseguindo os meus sonhos com determinação e coragem,<br><br>e encontrando beleza e maravilha em cada jornada.<br><br>Cada tempestade é um teste,<br><br>cada calmaria, uma pausa para reflexão,<br><br>inspirando-me a seguir em frente,<br><br>e a nunca desistir do meu destino."
        },
        {
            title: "Harmonia dos Sonhos",
            content: "Na sinfonia da vida, os sonhos são a melodia,<br><br>que ressoa em nossos corações e almas,<br><br>inspirando-nos a perseguir o impossível,<br><br>e a alcançar alturas antes inimagináveis.<br><br>Cada nota é uma promessa,<br><br>cada acorde, uma expressão de esperança,<br><br>inspirando-nos a dançar ao ritmo dos nossos sonhos,<br><br>e a criar uma sinfonia única de vida e paixão."
        }
    ];

    const poema5 = document.querySelector('.poema5');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema5.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Voo da Liberdade",
            content: "Como um pássaro voando no céu aberto,<br><br>minha alma alça voo em busca da liberdade,<br><br>explorando horizontes vastos e desconhecidos,<br><br>e dançando com as nuvens no vento.<br><br>Cada asa é uma esperança,<br><br>cada plumagem, uma expressão de vida,<br><br>inspirando-me a voar mais alto,<br><br>e a nunca desistir dos meus sonhos de liberdade."
        },
        {
            title: "Caminho da Liberdade",
            content: "Na estrada da vida, eu caminho em direção à liberdade,<br><br>com passos firmes e o coração cheio de esperança,<br><br>percorrendo trilhas desconhecidas e horizontes ilimitados,<br><br>e encontrando beleza e paz em cada esquina.<br><br>Cada passo é uma jornada,<br><br>cada obstáculo, uma lição a ser aprendida,<br><br>inspirando-me a seguir em frente,<br><br>e a nunca desistir do meu direito à liberdade."
        },
        {
            title: "Alma Livre",
            content: "Minha alma é como um pássaro livre,<br><br>voando sem medo em direção ao desconhecido,<br><br>explorando novos horizontes e possibilidades,<br><br>e encontrando alegria na jornada da vida.<br><br>Cada voo é uma aventura,<br><br>cada pouso, uma oportunidade de crescimento,<br><br>inspirando-me a abraçar a liberdade,<br><br>e a viver cada momento com gratidão e coragem."
        },
        {
            title: "Horizontes Livres",
            content: "No horizonte da minha mente, vislumbro a liberdade,<br><br>como vastos oceanos se estendendo até o infinito,<br><br>convidando-me a explorar novas terras e horizontes,<br><br>e a descobrir a beleza escondida no desconhecido.<br><br>Cada onda é uma promessa,<br><br>cada brisa, uma inspiração,<br><br>inspirando-me a navegar em direção à liberdade,<br><br>e a nunca desistir do meu direito de sonhar."
        },
        {
            title: "Aurora da Liberdade",
            content: "Na aurora de um novo dia, encontro a liberdade,<br><br>um horizonte vasto e ilimitado se estendendo diante de mim,<br><br>convidando-me a explorar novas possibilidades e oportunidades,<br><br>e a seguir os meus sonhos com coragem e determinação.<br><br>Cada amanhecer é uma bênção,<br><br>cada raio de sol, uma nova oportunidade,<br><br>inspirando-me a abraçar a liberdade,<br><br>e a viver cada momento com gratidão e alegria."
        },
        {
            title: "Sinfonia da Liberdade",
            content: "Na sinfonia da vida, a liberdade é a música,<br><br>que ressoa em nossos corações e almas,<br><br>inspirando-nos a seguir os nossos próprios ritmos,<br><br>e a dançar ao som da nossa própria melodia.<br><br>Cada nota é uma expressão,<br><br>cada acorde, uma declaração de independência,<br><br>inspirando-nos a abraçar a liberdade,<br><br>e a viver cada momento com autenticidade e paixão."
        },
        {
            title: "Trilha da Liberdade",
            content: "Na trilha da vida, eu sigo em busca da liberdade,<br><br>atravessando vales escuros e montanhas íngremes,<br><br>encontrando beleza e inspiração em cada desafio,<br><br>e descobrindo a força que existe dentro de mim.<br><br>Cada passo é uma conquista,<br><br>cada obstáculo, uma oportunidade de crescimento,<br><br>inspirando-me a continuar avançando,<br><br>e a nunca desistir dos meus sonhos de liberdade."
        },
        {
            title: "Visão da Liberdade",
            content: "Com os olhos da minha alma, vejo a liberdade,<br><br>um mundo vasto e ilimitado de possibilidades,<br><br>onde os sonhos se transformam em realidade,<br><br>e o impossível se torna possível.<br><br>Cada visão é uma promessa,<br><br>cada vislumbre, uma inspiração,<br><br>inspirando-me a acreditar no meu potencial,<br><br>e a perseguir os meus sonhos com coragem e determinação."
        },
        {
            title: "Jornada da Liberdade",
            content: "Na jornada da vida, encontro a liberdade,<br><br>um caminho vasto e iluminado se estendendo diante de mim,<br><br>convidando-me a explorar novos horizontes e possibilidades,<br><br>e a descobrir a magia que reside dentro de mim.<br><br>Cada passo é uma descoberta,<br><br>cada encontro, uma oportunidade de crescimento,<br><br>inspirando-me a seguir em frente,<br><br>e a abraçar a liberdade com todo o meu ser."
        },
        {
            title: "Alvorada da Liberdade",
            content: "Na alvorada de um novo amanhecer, desperto para a liberdade,<br><br>um mundo de possibilidades se abre diante de mim,<br><br>convidando-me a explorar novos horizontes e descobrir novos caminhos,<br><br>e a seguir os meus sonhos com coragem e determinação.<br><br>Cada novo dia é uma dádiva,<br><br>cada nova oportunidade, uma bênção,<br><br>inspirando-me a abraçar a liberdade,<br><br>e a viver cada momento com gratidão e alegria."
        },
        {
            title: "Brilho da Liberdade",
            content: "No brilho da manhã, encontro a liberdade,<br><br>um raio de sol iluminando o caminho diante de mim,<br><br>convidando-me a seguir os meus sonhos com coragem e determinação,<br><br>e a abraçar a jornada da vida com amor e gratidão.<br><br>Cada raio de sol é uma bênção,<br><br>cada novo dia, uma nova oportunidade,<br><br>inspirando-me a abraçar a liberdade,<br><br>e a viver cada momento com alegria e esperança."
        }
    ];

    const poema6 = document.querySelector('.poema6');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema6.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Alvorada da Paz",
            content: "Na alvorada da paz, o mundo desperta em harmonia,<br><br>onde cada raio de sol traz a promessa de um novo começo,<br><br>e cada brisa suave acalma os corações inquietos.<br><br>Cada amanhecer é uma bênção,<br><br>cada sorriso, uma expressão de amor,<br><br>inspirando-nos a buscar a paz interior,<br><br>e a compartilhar a serenidade com o mundo ao nosso redor."
        },
        {
            title: "Tranquilidade Interior",
            content: "Na tranquilidade do nosso ser, encontramos a verdadeira paz,<br><br>um oásis de calma no tumulto da vida diária,<br><br>onde cada respiração nos conecta com o divino,<br><br>e cada momento nos lembra da nossa essência.<br><br>Cada silêncio é uma prece,<br><br>cada batida do coração, uma canção de gratidão,<br><br>inspirando-nos a viver em harmonia com o universo,<br><br>e a compartilhar a paz que encontramos dentro de nós."
        },
        {
            title: "Caminho da Serenidade",
            content: "No caminho da serenidade, encontramos a paz interior,<br><br>um lugar sagrado onde a mente encontra descanso,<br><br>e o coração encontra conforto.<br><br>Cada passo é uma jornada,<br><br>cada pausa, uma oportunidade de reflexão,<br><br>inspirando-nos a abraçar a simplicidade da vida,<br><br>e a encontrar paz em meio ao caos do mundo."
        },
        {
            title: "Sussurros da Alma",
            content: "Nos sussurros da alma, encontramos a voz da paz,<br><br>um eco suave que nos guia para casa,<br><br>onde cada pensamento é uma prece,<br><br>e cada sentimento é uma expressão de amor.<br><br>Cada suspiro é uma lembrança,<br><br>cada momento, uma oportunidade de cura,<br><br>inspirando-nos a escutar a voz do nosso coração,<br><br>e a encontrar paz em cada respiração."
        },
        {
            title: "Jardim da Tranquilidade",
            content: "No jardim da tranquilidade, as flores da paz florescem,<br><br>um espetáculo de cores e fragrâncias que acalma a alma,<br><br>e convida-nos a contemplar a beleza da vida.<br><br>Cada pétala é uma promessa,<br><br>cada perfume, uma lembrança de nosso próprio poder,<br><br>inspirando-nos a abraçar a serenidade do momento presente,<br><br>e a nutrir a paz que cresce dentro de nós."
        },
        {
            title: "Silêncio Dourado",
            content: "No silêncio dourado da manhã, encontramos a paz,<br><br>um momento de quietude que acalma a mente e o coração,<br><br>e nos lembra da beleza simples de estar vivo.<br><br>Cada raio de sol é uma bênção,<br><br>cada som, uma canção da natureza,<br><br>inspirando-nos a apreciar o milagre da vida,<br><br>e a viver cada momento com gratidão e serenidade."
        },
        {
            title: "Coração Tranquilo",
            content: "Com um coração tranquilo, encontramos a verdadeira paz,<br><br>um lugar de aceitação e compaixão,<br><br>onde cada respiração é uma oportunidade de renovar o amor.<br><br>Cada batida do coração é uma lembrança,<br><br>cada momento, uma dádiva,<br><br>inspirando-nos a viver em harmonia com o universo,<br><br>e a compartilhar a paz que encontramos dentro de nós."
        },
        {
            title: "Calmaria da Mente",
            content: "Na calmaria da mente, encontramos a paz interior,<br><br>um refúgio tranquilo onde podemos encontrar descanso,<br><br>e renovar nossas energias para enfrentar os desafios da vida.<br><br>Cada pensamento é uma oportunidade de serenidade,<br><br>cada momento, uma chance de renovação,<br><br>inspirando-nos a cultivar a paz dentro de nós,<br><br>e a irradiar essa paz para o mundo ao nosso redor."
        },
        {
            title: "Respiro Profundo",
            content: "Com um respiro profundo, encontramos a paz,<br><br>um momento de conexão com o divino,<br><br>onde podemos deixar para trás as preocupações do mundo,<br><br>e encontrar tranquilidade no momento presente.<br><br>Cada inspiração é uma bênção,<br><br>cada expiração, uma oportunidade de renovação,<br><br>inspirando-nos a viver com gratidão e serenidade,<br><br>e a compartilhar essa paz com todos ao nosso redor."
        },
        {
            title: "Oração do Coração",
            content: "Na oração do coração, encontramos a paz,<br><br>um lugar de quietude onde podemos nos conectar com o divino,<br><br>e encontrar conforto em tempos de dificuldade.<br><br>Cada prece é uma promessa,<br><br>cada momento de silêncio, uma oportunidade de fé,<br><br>inspirando-nos a confiar no poder do amor,<br><br>e a encontrar paz em meio à tempestade."
        },
        {
            title: "Refúgio da Alma",
            content: "No refúgio da alma, encontramos a paz interior,<br><br>um lugar de serenidade onde podemos encontrar descanso,<br><br>e renovar nossas energias para enfrentar os desafios da vida.<br><br>Cada momento de silêncio é uma prece,<br><br>cada batida do coração, uma lembrança de nosso próprio poder,<br><br>inspirando-nos a viver em harmonia com o universo,<br><br>e a compartilhar a paz que encontramos dentro de nós."
        },
        {
            title: "Harmonia do Ser",
            content: "Na harmonia do ser, encontramos a verdadeira paz,<br><br>um estado de graça onde podemos nos reconectar com o divino,<br><br>e encontrar a tranquilidade em meio ao caos do mundo.<br><br>Cada respiração é uma lembrança,<br><br>cada momento, uma oportunidade de cura,<br><br>inspirando-nos a viver com amor e compaixão,<br><br>e a compartilhar essa paz com todos ao nosso redor."
        }
    ];

    const poema7 = document.querySelector('.poema7');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema7.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Canção da Natureza",
            content: "Nas notas do vento e nas melodias das águas,<br><br>ouço a canção eterna da natureza,<br><br>uma sinfonia de beleza e harmonia,<br><br>que ressoa em cada folha e em cada flor.<br><br>Cada brisa é uma carícia,<br><br>cada chuva, uma renovação,<br><br>inspirando-me a conectar-me com a Terra,<br><br>e a celebrar a magia que existe ao meu redor."
        },
        {
            title: "Paisagem Serena",
            content: "Diante da vastidão da paisagem serena,<br><br>mergulho na beleza da natureza,<br><br>onde montanhas se encontram com o céu,<br><br>e rios fluem em direção ao infinito.<br><br>Cada árvore é uma testemunha,<br><br>cada flor, uma obra-prima da criação,<br><br>inspirando-me a apreciar a simplicidade da vida,<br><br>e a encontrar paz em cada respiração."
        },
        {
            title: "Aurora Verde",
            content: "Na aurora verde da natureza,<br><br>o mundo desperta para um novo dia,<br><br>com a promessa de aventuras sem fim,<br><br>e a magia que só a natureza pode trazer.<br><br>Cada folha é uma história,<br><br>cada raio de sol, uma bênção,<br><br>inspirando-me a celebrar a vida,<br><br>e a honrar a beleza que nos cerca."
        },
        {
            title: "Caminho Silvestre",
            content: "Pelos caminhos silvestres da natureza,<br><br>percorro os segredos do mundo,<br><br>onde cada passo é uma descoberta,<br><br>e cada suspiro, uma conexão com a Terra.<br><br>Cada árvore é um guardião,<br><br>cada riacho, uma fonte de vida,<br><br>inspirando-me a respeitar o poder da natureza,<br><br>e a cuidar do nosso lar com amor e gratidão."
        },
        {
            title: "Alvorecer da Floresta",
            content: "No alvorecer da floresta, encontro paz,<br><br>um oásis de serenidade no coração da natureza,<br><br>onde as árvores sussurram segredos antigos,<br><br>e os pássaros cantam melodias de amor.<br><br>Cada raio de sol é uma bênção,<br><br>cada som, uma sinfonia da vida,<br><br>inspirando-me a apreciar a beleza do mundo,<br><br>e a cuidar da Terra com carinho e devoção."
        },
        {
            title: "Terra Sagrada",
            content: "Sob o manto da Terra sagrada,<br><br>encontro a essência da vida,<br><br>onde montanhas se erguem em reverência ao céu,<br><br>e oceanos fluem em direção ao horizonte distante.<br><br>Cada pedra é uma história,<br><br>cada rio, uma canção ancestral,<br><br>inspirando-me a honrar a sabedoria da natureza,<br><br>e a preservar a magia que nos rodeia."
        },
        {
            title: "Beleza Selvagem",
            content: "Na beleza selvagem da natureza,<br><br>encontro a minha própria essência,<br><br>onde cada folha é uma obra de arte,<br><br>e cada flor, um presente da Terra.<br><br>Cada animal é um espírito livre,<br><br>cada nascer do sol, uma promessa de renovação,<br><br>inspirando-me a celebrar a diversidade da vida,<br><br>e a proteger os tesouros que nos foram confiados."
        },
        {
            title: "Silêncio das Árvores",
            content: "No silêncio das árvores, encontro paz,<br><br>um refúgio tranquilo no coração da natureza,<br><br>onde o vento sussurra segredos antigos,<br><br>e as folhas dançam ao ritmo da vida.<br><br>Cada som é uma história,<br><br>cada momento, uma conexão com o divino,<br><br>inspirando-me a ouvir a voz da Terra,<br><br>e a seguir os seus sábios conselhos."
        },
        {
            title: "Mistério da Floresta",
            content: "No mistério da floresta, encontro magia,<br><br>um mundo de maravilhas além da imaginação,<br><br>onde fadas dançam sob a luz da lua,<br><br>e os espíritos da natureza sussurram segredos antigos.<br><br>Cada sombra é uma história,<br><br>cada raio de sol, uma bênção,<br><br>inspirando-me a explorar os mistérios do mundo,<br><br>e a honrar a sabedoria dos antigos."
        },
        {
            title: "Reverência à Natureza",
            content: "Com reverência à natureza, eu me curvo,<br><br>perante a grandeza do mundo que nos rodeia,<br><br>onde cada planta é um milagre da vida,<br><br>e cada criatura, uma expressão do divino.<br><br>Cada flor é uma prece,<br><br>cada árvore, um templo da natureza,<br><br>inspirando-me a proteger o nosso lar comum,<br><br>e a viver em harmonia com toda a criação."
        },
        {
            title: "Sinfonia Verde",
            content: "Na sinfonia verde da natureza,<br><br>ouço as vozes da Terra cantando em harmonia,<br><br>uma melodia de vida e renovação,<br><br>que ressoa em cada folha e em cada raiz.<br><br>Cada suspiro é uma canção,<br><br>cada chuva, uma dança da fertilidade,<br><br>inspirando-me a celebrar a magia da vida,<br><br>e a preservar a beleza que nos foi confiada."
        }
    ];

    const poema8 = document.querySelector('.poema8');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema8.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Essência da Vida",
            content: "Na essência da vida, descobrimos o mistério do ser,<br><br>um universo infinito de possibilidades e experiências,<br><br>onde cada momento é uma oportunidade de descoberta,<br><br>e cada respiração é uma expressão de existência.<br><br>Cada escolha é uma jornada,<br><br>cada desafio, uma oportunidade de crescimento,<br><br>inspirando-nos a abraçar a totalidade do nosso ser,<br><br>e a viver cada dia com paixão e autenticidade."
        },
        {
            title: "Caminho da Existência",
            content: "No caminho da existência, encontramos a essência do ser,<br><br>um labirinto de emoções e experiências que nos moldam,<br><br>onde cada passo é uma dança entre o passado e o futuro,<br><br>e cada escolha é uma expressão da alma.<br><br>Cada lágrima é uma lembrança,<br><br>cada sorriso, uma luz no caminho,<br><br>inspirando-nos a abraçar a jornada da vida,<br><br>e a celebrar a magia de simplesmente ser."
        },
        {
            title: "Alma Eterna",
            content: "Na profundidade da alma, encontramos a verdadeira essência,<br><br>um reflexo do universo que habita dentro de nós,<br><br>onde cada pensamento é uma estrela brilhante,<br><br>e cada sentimento é uma onda no oceano da existência.<br><br>Cada sonho é uma jornada,<br><br>cada despertar, uma nova possibilidade,<br><br>inspirando-nos a abraçar a grandeza do nosso ser,<br><br>e a explorar os mistérios que nos tornam únicos."
        },
        {
            title: "Dança da Vida",
            content: "Na dança da vida, encontramos a beleza da existência,<br><br>um movimento eterno que nos leva do nascimento à morte,<br><br>onde cada passo é uma expressão de nossa própria jornada,<br><br>e cada respiração é uma celebração do aqui e agora.<br><br>Cada queda é um aprendizado,<br><br>cada levantar, uma prova de resiliência,<br><br>inspirando-nos a honrar cada momento,<br><br>e a dançar com alegria no palco da vida."
        },
        {
            title: "Essência Divina",
            content: "Na essência divina do ser, encontramos a centelha da criação,<br><br>uma luz radiante que ilumina o caminho da alma,<br><br>onde cada pensamento é uma prece,<br><br>e cada ação é uma expressão de amor.<br><br>Cada lágrima é uma purificação,<br><br>cada riso, uma canção da alegria,<br><br>inspirando-nos a honrar o divino que habita em nós,<br><br>e a compartilhar nossa luz com o mundo ao nosso redor."
        },
        {
            title: "Viagem Interior",
            content: "Na viagem interior, encontramos a verdadeira essência do ser,<br><br>um mergulho profundo no oceano da consciência,<br><br>onde cada pensamento é uma onda de conhecimento,<br><br>e cada emoção é uma oportunidade de crescimento.<br><br>Cada silêncio é uma descoberta,<br><br>cada reflexão, uma revelação,<br><br>inspirando-nos a explorar as profundezas da nossa alma,<br><br>e a abraçar a jornada da existência com coragem e aceitação."
        },
        {
            title: "Ciclo da Vida",
            content: "No ciclo da vida, encontramos a beleza da existência,<br><br>um eterno movimento de nascimento e morte,<br><br>onde cada momento é uma página em branco,<br><br>e cada respiração é uma nova oportunidade.<br><br>Cada despedida é um renascimento,<br><br>cada reencontro, uma dádiva do destino,<br><br>inspirando-nos a celebrar a magia da vida,<br><br>e a honrar o ciclo eterno que nos une a todos."
        },
        {
            title: "Jornada da Alma",
            content: "Na jornada da alma, encontramos a verdadeira essência da vida,<br><br>um caminho de descobertas e transformações que nos moldam,<br><br>onde cada desafio é uma oportunidade de crescimento,<br><br>e cada vitória é uma celebração do espírito.<br><br>Cada lágrima é um testemunho da nossa humanidade,<br><br>cada sorriso, uma luz no caminho,<br><br>inspirando-nos a abraçar a jornada com coragem e gratidão,<br><br>e a encontrar significado em cada passo do caminho."
        },
        {
            title: "Alma Viajante",
            content: "Na jornada da alma, somos viajantes em busca de significado,<br><br>explorando os mistérios do universo que habitam dentro de nós,<br><br>onde cada experiência é uma lição,<br><br>e cada encontro é uma oportunidade de conexão.<br><br>Cada escolha é uma encruzilhada,<br><br>cada decisão, uma porta para o desconhecido,<br><br>inspirando-nos a abraçar a aventura da existência,<br><br>e a encontrar beleza na jornada que é a vida."
        },
        {
            title: "Mistérios da Existência",
            content: "Nos mistérios da existência, encontramos a essência do ser,<br><br>um quebra-cabeça infinito de perguntas sem resposta,<br><br>onde cada busca é uma jornada de autodescoberta,<br><br>e cada descoberta é um vislumbre da verdade.<br><br>Cada incerteza é uma oportunidade de crescimento,<br><br>cada revelação, um passo em direção à luz,<br><br>inspirando-nos a explorar os mistérios que nos cercam,<br><br>e a abraçar o desconhecido com coragem e curiosidade."
        },
        {
            title: "Sinfonia do Ser",
            content: "Na sinfonia do ser, encontramos a harmonia da existência,<br><br>uma dança eterna de luz e sombra que nos guia,<br><br>onde cada nota é uma expressão de nossa própria alma,<br><br>e cada pausa é uma oportunidade de reflexão.<br><br>Cada melodia é uma lembrança,<br><br>cada acorde, uma conexão com o divino,<br><br>inspirando-nos a dançar com a música da vida,<br><br>e a celebrar a beleza que é simplesmente ser."
        }
    ];

    const poema9 = document.querySelector('.poema9');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema9.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Ausência Sentida",
            content: "Na ausência sentida, a saudade se faz presente,<br><br>um eco suave que ressoa nos cantos do coração,<br><br>onde cada lembrança é uma ponte para o passado,<br><br>e cada suspiro é uma expressão de amor perdido.<br><br>Cada silêncio é uma recordação,<br><br>cada lágrima, um tributo aos dias que se foram,<br><br>inspirando-nos a honrar os momentos compartilhados,<br><br>e a celebrar a vida daqueles que amamos."
        },
        {
            title: "Melancolia do Tempo",
            content: "Na melancolia do tempo, a saudade se faz presente,<br><br>um sentimento silencioso que permeia nossos dias,<br><br>onde cada cena é uma lembrança do que já foi,<br><br>e cada som é uma eco dos risos que se dissiparam.<br><br>Cada fotografia é uma memória,<br><br>cada verso, um testemunho do amor que perdura,<br><br>inspirando-nos a encontrar consolo nas lembranças,<br><br>e a transformar a saudade em uma celebração da vida."
        },
        {
            title: "Vazio da Ausência",
            content: "No vazio da ausência, a saudade se faz presente,<br><br>um buraco negro que suga a luz da esperança,<br><br>onde cada ausência é uma ferida no coração,<br><br>e cada silêncio é uma lembrança do que poderia ter sido.<br><br>Cada suspiro é uma prece,<br><br>cada lágrima, uma declaração de amor não dito,<br><br>inspirando-nos a valorizar cada momento compartilhado,<br><br>e a honrar a memória daqueles que se foram."
        },
        {
            title: "Lembrança Agridoce",
            content: "Na lembrança agridoce, a saudade se faz presente,<br><br>um paradoxo de emoções que nos consome,<br><br>onde cada lembrança é um presente envenenado,<br><br>e cada sorriso é uma máscara para a dor oculta.<br><br>Cada suspiro é uma confissão,<br><br>cada lágrima, uma expressão da alma,<br><br>inspirando-nos a abraçar a complexidade do amor,<br><br>e a encontrar conforto nas memórias que perduram."
        },
        {
            title: "Silêncio da Solidão",
            content: "No silêncio da solidão, a saudade se faz presente,<br><br>um companheiro silencioso que caminha ao nosso lado,<br><br>onde cada eco é uma lembrança do que foi perdido,<br><br>e cada som é uma recordação dos dias felizes.<br><br>Cada palavra não dita é uma promessa quebrada,<br><br>cada lágrima, uma tentativa de curar uma ferida antiga,<br><br>inspirando-nos a reconhecer a beleza das lembranças,<br><br>e a encontrar consolo na eternidade do amor."
        },
        {
            title: "Mosaico da Saudade",
            content: "No mosaico da saudade, cada lembrança é uma peça,<br><br>um fragmento de tempo congelado no éter da memória,<br><br>onde cada cor é uma emoção, e cada forma é uma história,<br><br>que ecoa através dos corredores do coração.<br><br>Cada sorriso é uma estrela brilhante,<br><br>cada lágrima, uma chuva de sentimentos,<br><br>inspirando-nos a apreciar a beleza da vida,<br><br>e a honrar os momentos que moldaram quem somos."
        },
        {
            title: "Vaga Lembrança",
            content: "Na vaga lembrança, a saudade se faz presente,<br><br>um eco distante que sussurra nos cantos da mente,<br><br>onde cada nuance é uma tela em branco,<br><br>e cada som é uma melodia sem fim.<br><br>Cada sonho é uma viagem no tempo,<br><br>cada despertar, um retorno à realidade,<br><br>inspirando-nos a valorizar os momentos fugazes,<br><br>e a encontrar consolo na efemeridade da vida."
        },
        {
            title: "Espelho da Saudade",
            content: "No espelho da saudade, vemos os reflexos do passado,<br><br>um labirinto de emoções que nos prende,<br><br>onde cada imagem é uma lembrança, e cada reflexo é uma história,<br><br>que ecoa através dos corredores do tempo.<br><br>Cada lágrima é uma nota perdida,<br><br>cada sorriso, uma luz no caminho,<br><br>inspirando-nos a encontrar conforto nas memórias,<br><br>e a celebrar a vida daqueles que amamos."
        },
        {
            title: "Sussurros do Passado",
            content: "Nos sussurros do passado, a saudade se faz presente,<br><br>um eco suave que ressoa nos cantos da mente,<br><br>onde cada palavra é uma lembrança, e cada suspiro é uma história,<br><br>que dança através das sombras do tempo.<br><br>Cada lágrima é uma lembrança viva,<br><br>cada sorriso, uma chama acesa,<br><br>inspirando-nos a abraçar as memórias que nos moldaram,<br><br>e a encontrar consolo na eternidade do amor."
        },
        {
            title: "Ressonância do Coração",
            content: "Na ressonância do coração, a saudade se faz presente,<br><br>um eco suave que dança nos cantos da alma,<br><br>onde cada batida é uma lembrança, e cada suspiro é uma história,<br><br>que ecoa através das estrelas do destino.<br><br>Cada lágrima é uma canção silenciosa,<br><br>cada sorriso, uma estrela cadente,<br><br>inspirando-nos a abraçar as lembranças que nos tornam quem somos,<br><br>e a celebrar a vida daqueles que amamos."
        },
        {
            title: "Eco do Silêncio",
            content: "No eco do silêncio, a saudade se faz presente,<br><br>um murmúrio suave que dança nos cantos da alma,<br><br>onde cada som é uma lembrança, e cada suspiro é uma história,<br><br>que ressoa através dos vales do tempo.<br><br>Cada lágrima é uma estrela cadente,<br><br>cada sorriso, uma lembrança viva,<br><br>inspirando-nos a abraçar as memórias que nos moldaram,<br><br>e a encontrar conforto na eternidade do amor."
        }
    ];

    const poema10 = document.querySelector('.poema10');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema10.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Caminho do Destino",
            content: "No caminho do destino, a viagem se revela,<br><br>uma jornada de descobertas e aventuras sem fim,<br><br>onde cada passo é uma escolha,<br><br>e cada curva, uma promessa de novos horizontes.<br><br>Cada desafio é uma oportunidade,<br><br>cada obstáculo, um convite para crescer,<br><br>inspirando-nos a abraçar a incerteza do amanhã,<br><br>e a celebrar a beleza da jornada."
        },
        {
            title: "Trilhas do Coração",
            content: "Nas trilhas do coração, a viagem se desdobra,<br><br>um labirinto de emoções que nos guia,<br><br>onde cada escolha é uma curva no caminho,<br><br>e cada decisão, uma ponte para o desconhecido.<br><br>Cada tropeço é uma lição,<br><br>cada vitória, uma celebração do espírito,<br><br>inspirando-nos a seguir adiante com coragem,<br><br>e a encontrar a verdadeira essência da vida."
        },
        {
            title: "Horizontes Inexplorados",
            content: "Nos horizontes inexplorados, a viagem se revela,<br><br>um convite para explorar o desconhecido,<br><br>onde cada sonho é uma estrela cadente,<br><br>e cada passo, uma aventura em potencial.<br><br>Cada desafio é uma oportunidade de crescimento,<br><br>cada fracasso, uma lição aprendida,<br><br>inspirando-nos a abraçar a jornada com gratidão,<br><br>e a celebrar a magia de simplesmente ser."
        },
        {
            title: "Caminhos Cruzados",
            content: "Nos caminhos cruzados, a viagem se desdobra,<br><br>um encontro de almas que se entrelaçam,<br><br>onde cada encontro é um presente,<br><br>e cada despedida, uma lição de amor.<br><br>Cada lágrima é uma lembrança,<br><br>cada sorriso, uma promessa de esperança,<br><br>inspirando-nos a valorizar cada momento,<br><br>e a celebrar a beleza da conexão humana."
        },
        {
            title: "Marés da Vida",
            content: "Nas marés da vida, a viagem se revela,<br><br>um oceano de emoções que nos envolve,<br><br>onde cada onda é uma oportunidade,<br><br>e cada maré, uma chance de recomeço.<br><br>Cada tempestade é uma purificação,<br><br>cada calmaria, uma pausa para reflexão,<br><br>inspirando-nos a navegar com coragem,<br><br>e a abraçar a jornada com gratidão."
        },
        {
            title: "Passos do Destino",
            content: "Nos passos do destino, a viagem se desenrola,<br><br>uma dança entre o passado e o futuro,<br><br>onde cada escolha é uma encruzilhada,<br><br>e cada direção, uma nova aventura.<br><br>Cada obstáculo é uma oportunidade de crescimento,<br><br>cada desafio, uma chance de redenção,<br><br>inspirando-nos a seguir adiante com coragem,<br><br>e a abraçar a jornada com confiança no coração."
        },
        {
            title: "Caminho da Alma",
            content: "No caminho da alma, a viagem se desenrola,<br><br>um encontro de jornadas que se entrelaçam,<br><br>onde cada passo é uma lembrança,<br><br>e cada encontro, uma oportunidade de aprendizado.<br><br>Cada desvio é uma oportunidade de descoberta,<br><br>cada curva, uma chance de redenção,<br><br>inspirando-nos a abraçar a totalidade da experiência humana,<br><br>e a celebrar a magia de simplesmente estar vivo."
        },
        {
            title: "Trilhas do Coração",
            content: "Nas trilhas do coração, a viagem se revela,<br><br>um convite para explorar os mistérios do universo,<br><br>onde cada passo é uma descoberta,<br><br>e cada desafio, uma oportunidade de crescimento.<br><br>Cada encontro é uma chance de conexão,<br><br>cada despedida, uma lição de desapego,<br><br>inspirando-nos a abraçar a jornada com coragem,<br><br>e a encontrar a verdadeira essência da vida."
        },
        {
            title: "Caminhos do Destino",
            content: "Nos caminhos do destino, a viagem se revela,<br><br>um labirinto de oportunidades e desafios,<br><br>onde cada escolha é um passo na jornada,<br><br>e cada desvio, uma oportunidade de crescimento.<br><br>Cada encontro é uma lição,<br><br>cada despedida, uma oportunidade de cura,<br><br>inspirando-nos a seguir adiante com gratidão,<br><br>e a abraçar a beleza da experiência humana."
        },
        {
            title: "Passagens do Tempo",
            content: "Nas passagens do tempo, a viagem se desenrola,<br><br>um ciclo infinito de começos e finais,<br><br>onde cada partida é uma chegada,<br><br>e cada despedida, uma nova oportunidade.<br><br>Cada desafio é uma jornada de autodescoberta,<br><br>cada obstáculo, uma lição aprendida,<br><br>inspirando-nos a abraçar a jornada com coragem,<br><br>e a celebrar a magia de simplesmente ser."
        },
        {
            title: "Caminhos da Vida",
            content: "Nos caminhos da vida, a viagem se desenrola,<br><br>um labirinto de possibilidades e escolhas,<br><br>onde cada passo é uma jornada de autodescoberta,<br><br>e cada experiência, uma oportunidade de crescimento.<br><br>Cada obstáculo é uma lição de humildade,<br><br>cada desafio, uma oportunidade de superação,<br><br>inspirando-nos a abraçar a jornada com coragem,<br><br>e a encontrar a verdadeira essência da existência."
        }
    ];

    const poema11 = document.querySelector('.poema11');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema11.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "O despertar da juventude",
            content: "Na aurora da vida, a juventude desperta,<br><br>um novo dia se abre diante de nós,<br><br>cheio de promessas e possibilidades,<br><br>um convite para explorar, sonhar e criar.<br><br>No coração do jovem, há um fogo ardente,<br><br>uma chama que queima com entusiasmo e paixão,<br><br>um desejo de descobrir o mundo e a si mesmo,<br><br>em uma jornada de autodescoberta e crescimento.<br><br>Cada experiência é uma lição,<br><br>cada desafio, uma oportunidade de aprender e crescer,<br><br>enquanto dançamos pela vida com alegria e coragem,<br><br>abraçando cada momento com gratidão e amor.<br><br>Na juventude, encontramos a liberdade de ser quem somos,<br><br>de seguir nossos sonhos e perseguir nossas paixões,<br><br>de criar o nosso próprio caminho e deixar a nossa marca,<br><br>em um mundo que está esperando para ser explorado e descoberto.<br><br>Então levante-se, jovem, e abrace o dia,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "O coração do jovem",
            content: "No coração do jovem, há uma chama ardente,<br><br>um fogo que queima com paixão e energia,<br><br>um desejo de explorar, descobrir e sonhar,<br><br>em um mundo cheio de possibilidades e promessas.<br><br>Nos olhos do jovem, há uma luz brilhante,<br><br>um brilho que ilumina o caminho à frente,<br><br>um vislumbre do futuro, cheio de esperança e possibilidade,<br><br>um convite para seguir em frente com coragem e determinação.<br><br>Cada passo é uma aventura,<br><br>cada escolha, uma oportunidade de crescimento,<br><br>enquanto navegamos pelas águas desconhecidas da vida,<br><br>explorando novos horizontes e descobrindo novos mundos.<br><br>Na juventude, somos livres para sonhar,<br><br>livres para criar, livres para ser quem somos,<br><br>sem limites ou restrições para nos impedir,<br><br>em uma jornada de autodescoberta e autenticidade.<br><br>Então, levante-se, jovem, e siga em frente,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para abraçar tudo o que você tem para oferecer."
        },
        {
            title: "Os sonhos da juventude",
            content: "Na juventude, somos tecelões de sonhos,<br><br>tecendo fios de esperança e imaginação,<br><br>criando tapeçarias de possibilidade e promessa,<br><br>em um mundo cheio de oportunidades e descobertas.<br><br>Nossos sonhos são estrelas cadentes,<br><br>brilhando no céu da nossa imaginação,<br><br>guiando-nos pelo caminho à frente,<br><br>em uma jornada de autodescoberta e aventura.<br><br>Cada sonho é uma promessa,<br><br>cada visão, uma vislumbre do futuro,<br><br>nos chamando para seguir em frente com coragem e determinação,<br><br>e abraçar o desconhecido com fé e esperança.<br><br>Na juventude, somos os arquitetos do amanhã,<br><br>construindo pontes para o futuro,<br><br>com nossos sonhos e nossas aspirações,<br><br>transformando o mundo com nossa visão e nossa paixão.<br><br>Então, levante-se, jovem, e siga seus sonhos,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "A dança da juventude",
            content: "Na dança da juventude, encontramos liberdade,<br><br>liberdade para ser quem somos,<br><br>para seguir nossos sonhos e nossas paixões,<br><br>em um mundo cheio de possibilidades e promessas.<br><br>Cada passo é uma expressão,<br><br>cada movimento, uma declaração de quem somos,<br><br>enquanto dançamos pela vida com alegria e entusiasmo,<br><br>celebrando cada momento como uma dádiva preciosa.<br><br>Nos ritmos da juventude, encontramos alegria,<br><br>uma alegria que ressoa em nossos corações,<br><br>nos impulsionando para a frente com energia e entusiasmo,<br><br>e nos lembrando que cada dia é uma nova aventura.<br><br>Na dança da juventude, encontramos conexão,<br><br>uma conexão com nós mesmos e com os outros,<br><br>um sentido de comunidade e pertencimento,<br><br>que nos sustenta em tempos de desafio e mudança.<br><br>Então, levante-se, jovem, e dance a dança da vida,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "A jornada da juventude",
            content: "Na jornada da juventude, encontramos aventura,<br><br>uma aventura que nos leva além dos limites,<br><br>nos desafia a explorar o desconhecido,<br><br>e nos inspira a perseguir nossos sonhos mais profundos.<br><br>Cada passo é uma descoberta,<br><br>cada escolha, uma oportunidade de crescimento,<br><br>enquanto navegamos pelas águas desconhecidas da vida,<br><br>abraçando o desconhecido com coragem e determinação.<br><br>Nos caminhos da juventude, encontramos sabedoria,<br><br>uma sabedoria que vem da experiência,<br><br>do aprendizado e da reflexão,<br><br>nos guiando pelo caminho à frente com confiança e discernimento.<br><br>Na jornada da juventude, encontramos amor,<br><br>um amor que nos sustenta em tempos de dificuldade,<br><br>nos une em tempos de divisão,<br><br>e nos lembra que não estamos sozinhos.<br><br>Então, levante-se, jovem, e abrace a jornada da vida,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "O chamado da juventude",
            content: "No coração da juventude, há um chamado,<br><br>um chamado para viver com paixão e propósito,<br><br>para seguir nossos sonhos e nossas aspirações,<br><br>e abraçar a vida com coragem e determinação.<br><br>Cada batida do coração é uma promessa,<br><br>cada suspiro, uma expressão de quem somos,<br><br>enquanto navegamos pelas águas da juventude,<br><br>explorando novos horizontes e descobrindo novas possibilidades.<br><br>No chamado da juventude, encontramos inspiração,<br><br>uma inspiração que nos impulsiona para a frente,<br><br>nos desafia a sermos melhores do que éramos ontem,<br><br>e nos lembra que cada dia é uma nova oportunidade.<br><br>Na jornada da juventude, encontramos significado,<br><br>um significado que vem de viver com autenticidade,<br><br>de seguir nossos corações e nossas paixões,<br><br>e de deixar nossa marca no mundo.<br><br>Então, levante-se, jovem, e siga o chamado da vida,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "O pulsar da juventude",
            content: "No pulsar da juventude, encontramos vida,<br><br>uma vida que pulsa com energia e entusiasmo,<br><br>nos impulsionando para a frente com fervor e paixão,<br><br>e nos lembrando que cada dia é uma dádiva preciosa.<br><br>Cada batida do coração é uma celebração,<br><br>cada respiração, uma expressão de gratidão,<br><br>enquanto navegamos pelas águas da juventude,<br><br>explorando novos horizontes e descobrindo novos mundos.<br><br>No pulsar da juventude, encontramos coragem,<br><br>uma coragem que vem de dentro,<br><br>de enfrentar nossos medos e seguir nossos sonhos,<br><br>com fé e confiança no caminho à frente.<br><br>Na jornada da juventude, encontramos esperança,<br><br>uma esperança que brilha como uma estrela no céu noturno,<br><br>nos guiando pelo caminho à frente com determinação e fé,<br><br>e nos lembrando que o amanhã sempre traz possibilidades.<br><br>Então, levante-se, jovem, e siga o pulsar da vida,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "A alma jovem",
            content: "Na alma jovem, encontramos a essência da vida,<br><br>um brilho que irradia com energia e entusiasmo,<br><br>nos impulsionando para a frente com paixão e propósito,<br><br>e nos lembrando que cada dia é uma nova oportunidade.<br><br>Cada pensamento é uma jornada,<br><br>cada sentimento, uma experiência única,<br><br>enquanto exploramos os cantos mais profundos de nossa alma,<br><br>em busca de significado, propósito e conexão.<br><br>No coração da juventude, encontramos inspiração,<br><br>uma inspiração que nos desafia a sermos melhores,<br><br>a sonharmos mais alto e a alcançarmos mais longe,<br><br>em uma jornada de autodescoberta e crescimento.<br><br>Na alma jovem, encontramos coragem,<br><br>uma coragem que nos permite enfrentar nossos medos,<br><br>e abraçar o desconhecido com fé e determinação,<br><br>sabendo que somos mais fortes do que pensamos.<br><br>Então, levante-se, jovem, e abrace a jornada da vida,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        },
        {
            title: "A chama da juventude",
            content: "Na chama da juventude, encontramos esperança,<br><br>uma esperança que brilha com brilho eterno,<br><br>nos guiando pelo caminho à frente com coragem e determinação,<br><br>e nos lembrando que o amanhã sempre traz novas possibilidades.<br><br>Cada chama é uma promessa,<br><br>cada faísca, uma oportunidade de crescimento,<br><br>enquanto dançamos pela vida com alegria e entusiasmo,<br><br>celebrando cada momento como uma dádiva preciosa.<br><br>No coração da juventude, encontramos sonhos,<br><br>sonhos que voam alto e alcançam as estrelas,<br><br>nos inspirando a perseguir nossas paixões e nossos desejos mais profundos,<br><br>em uma jornada de autodescoberta e autenticidade.<br><br>Na chama da juventude, encontramos amor,<br><br>um amor que nos une e nos sustenta,<br><br>nos lembrando que não estamos sozinhos,<br><br>e que juntos, podemos conquistar o mundo.<br><br>Então, levante-se, jovem, e abrace a chama da vida,<br><br>pois o mundo está esperando por você,<br><br>com seus braços abertos e seu coração cheio de possibilidades,<br><br>pronto para receber tudo o que você tem para oferecer."
        }
    ];

    const poema12 = document.querySelector('.poema12');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema12.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Laços de Afeição",
            content: "Nos laços de afeição, encontramos conforto,<br><br>uma suavidade que acalenta o coração,<br><br>um abraço que envolve a alma,<br><br>e nos lembra que não estamos sozinhos.<br><br>Cada gesto é uma expressão,<br><br>cada palavra, um presente precioso,<br><br>enquanto navegamos pela jornada da vida,<br><br>abraçando a afeição com gratidão e amor.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado e da compaixão,<br><br>navegando pelas águas da vida juntos.<br><br>Na afeição, encontramos paz,<br><br>uma paz que transcende as palavras,<br><br>nos envolvendo em um abraço gentil,<br><br>e nos lembrando que somos amados.<br><br>Então, celebremos os laços de afeição,<br><br>pois eles nos sustentam em tempos de dificuldade,<br><br>nos guiam em tempos de incerteza,<br><br>e nos lembram do poder do amor."
        },
        {
            title: "O Poder da Afeição",
            content: "No poder da afeição, encontramos força,<br><br>uma força que nos sustenta em tempos difíceis,<br><br>nos eleva quando estamos caídos,<br><br>e nos dá coragem para seguir em frente.<br><br>Cada abraço é um lembrete,<br><br>cada palavra, um bálsamo para a alma,<br><br>enquanto navegamos pelas águas tumultuadas da vida,<br><br>abraçando a afeição com gratidão e esperança.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>nos lembrando que não estamos sozinhos.<br><br>Na afeição, encontramos amor,<br><br>um amor que transcende as palavras,<br><br>nos envolvendo em seu calor suave,<br><br>e nos lembrando do poder transformador do amor.<br><br>Então, celebremos a afeição em todas as suas formas,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        },
        {
            title: "Os Laços Inquebráveis da Afeição",
            content: "Nos laços inquebráveis da afeição, encontramos segurança,<br><br>uma segurança que vem do compartilhar,<br><br>do cuidado mútuo e do apoio inabalável,<br><br>navegando pelas águas da vida juntos.<br><br>Cada momento é uma lembrança,<br><br>cada sorriso, um raio de sol,<br><br>enquanto tecemos juntos o tecido de nossas vidas,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do amor mútuo,<br><br>da aceitação e do perdão,<br><br>nos lembrando que somos amados e dignos de amor.<br><br>Na afeição, encontramos esperança,<br><br>uma esperança que brilha como uma estrela no céu noturno,<br><br>nos guiando pelo caminho à frente com fé e coragem,<br><br>e nos lembrando que o amor sempre prevalece.<br><br>Então, celebremos os laços inquebráveis da afeição,<br><br>pois eles nos sustentam em tempos de dificuldade,<br><br>nos alegram em tempos de tristeza,<br><br>e nos lembram do poder transformador do amor."
        },
        {
            title: "A Doçura da Afeição",
            content: "Na doçura da afeição, encontramos paz,<br><br>uma paz que transcende as palavras,<br><br>nos envolvendo em seu calor gentil,<br><br>e nos lembrando que somos amados.<br><br>Cada gesto é uma expressão de amor,<br><br>cada toque, uma canção para a alma,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelas tempestades da vida juntos.<br><br>Na afeição, encontramos esperança,<br><br>uma esperança que nos guia pelo caminho à frente,<br><br>nos lembrando que o amor sempre prevalece,<br><br>e que juntos, podemos superar qualquer desafio.<br><br>Então, celebremos a doçura da afeição,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        },
        {
            title: "A Magia da Afeição",
            content: "Na magia da afeição, encontramos beleza,<br><br>uma beleza que ilumina nossas vidas,<br><br>nos envolvendo em seu brilho suave,<br><br>e nos lembrando que somos amados.<br><br>Cada momento é um presente,<br><br>cada sorriso, uma dádiva,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>nos lembrando que não estamos sozinhos.<br><br>Na afeição, encontramos força,<br><br>uma força que nos sustenta em tempos de dificuldade,<br><br>nos impulsiona para a frente com coragem e determinação,<br><br>e nos lembra que somos mais fortes juntos.<br><br>Então, celebremos a magia da afeição,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do poder transformador do amor."
        },
        {
            title: "A Afeição nos Conecta",
            content: "Na afeição, encontramos conexão,<br><br>uma conexão que nos une uns aos outros,<br><br>nos lembrando que somos parte de algo maior,<br><br>e que nossas vidas estão entrelaçadas de maneiras profundas e significativas.<br><br>Cada abraço é uma expressão de amor,<br><br>cada palavra, uma manifestação de cuidado,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>nos lembrando que não estamos sozinhos.<br><br>Na afeição, encontramos esperança,<br><br>uma esperança que nos guia pelo caminho à frente,<br><br>nos lembrando que o amor sempre prevalece,<br><br>e que juntos, podemos superar qualquer desafio.<br><br>Então, celebremos a afeição que nos conecta,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        },
        {
            title: "O Calor da Afeição",
            content: "No calor da afeição, encontramos refúgio,<br><br>um lugar de paz e tranquilidade,<br><br>onde podemos ser nós mesmos,<br><br>e nos sentir verdadeiramente amados e aceitos.<br><br>Cada gesto é uma expressão de amor,<br><br>cada olhar, uma manifestação de cuidado,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>Na afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>nos lembrando que não estamos sozinhos.<br><br>Na afeição, encontramos força,<br><br>uma força que nos sustenta em tempos de dificuldade,<br><br>nos impulsiona para a frente com coragem e determinação,<br><br>e nos lembra que somos mais fortes juntos.<br><br>Então, celebremos o calor da afeição,<br><br>pois ele nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do poder transformador do amor."
        },
        {
            title: "A Beleza da Afeição",
            content: "Na beleza da afeição, encontramos verdade,<br><br>uma verdade que reside nos corações daqueles que amamos,<br><br>nos lembrando que somos dignos de amor,<br><br>e que nossa presença neste mundo é significativa e valiosa.<br><br>Cada momento é uma bênção,<br><br>cada sorriso, uma dádiva,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelas tempestades da vida juntos.<br><br>Na afeição, encontramos esperança,<br><br>uma esperança que nos guia pelo caminho à frente,<br><br>nos lembrando que o amor sempre prevalece,<br><br>e que juntos, podemos superar qualquer desafio.<br><br>Então, celebremos a beleza da afeição,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        },
        {
            title: "A Profundidade da Afeição",
            content: "Na profundidade da afeição, encontramos significado,<br><br>um significado que transcende as palavras,<br><br>nos conectando uns aos outros em um nível mais profundo,<br><br>e nos lembrando que somos parte de algo maior do que nós mesmos.<br><br>Cada abraço é uma comunhão,<br><br>cada palavra, uma expressão de amor,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>nos lembrando que não estamos sozinhos.<br><br>Na afeição, encontramos força,<br><br>uma força que nos sustenta em tempos de dificuldade,<br><br>nos impulsiona para a frente com coragem e determinação,<br><br>e nos lembra que somos mais fortes juntos.<br><br>Então, celebremos a profundidade da afeição,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do poder transformador do amor."
        },
        {
            title: "O Poder da Afeição Verdadeira",
            content: "No poder da afeição verdadeira, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e do apoio inabalável,<br><br>nos lembrando que não estamos sozinhos neste mundo.<br><br>Cada gesto é uma expressão de amor,<br><br>cada abraço, uma manifestação de cuidado,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos paz,<br><br>uma paz que transcende as palavras,<br><br>nos envolvendo em seu calor suave,<br><br>e nos lembrando que somos amados.<br><br>Na afeição, encontramos esperança,<br><br>uma esperança que nos guia pelo caminho à frente,<br><br>nos lembrando que o amor sempre prevalece,<br><br>e que juntos, podemos superar qualquer desafio.<br><br>Então, celebremos o poder da afeição verdadeira,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        },
        {
            title: "A Afeição que nos Define",
            content: "A afeição que nos define é aquela que nos une,<br><br>nos lembrando que somos parte de algo maior,<br><br>e que nossa conexão uns com os outros é sagrada e especial.<br><br>Cada gesto é uma expressão de amor,<br><br>cada palavra, uma manifestação de cuidado,<br><br>enquanto navegamos pelas águas da vida juntos,<br><br>abraçando a afeição com gratidão e alegria.<br><br>No calor da afeição, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelas tempestades da vida juntos.<br><br>Na afeição, encontramos esperança,<br><br>uma esperança que nos guia pelo caminho à frente,<br><br>nos lembrando que o amor sempre prevalece,<br><br>e que juntos, podemos superar qualquer desafio.<br><br>Então, celebremos a afeição que nos define,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        }
    ];

    const poema13 = document.querySelector('.poema13');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema13.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});

document.addEventListener('DOMContentLoaded', function() {
    const poems = [
        {
            title: "Laços de Esperança",
            content: "Nos laços de esperança, encontramos conforto,<br><br>uma suavidade que acalenta o coração,<br><br>um abraço que envolve a alma,<br><br>e nos lembra que não estamos sozinhos.<br><br>Cada gesto é uma expressão,<br><br>cada palavra, um presente precioso,<br><br>enquanto navegamos pela jornada da vida,<br><br>abraçando a esperança com gratidão e amor.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado e da compaixão,<br><br>navegando pelas águas da vida juntos.<br><br>Na esperança, encontramos paz,<br><br>uma paz que transcende as palavras,<br><br>nos envolvendo em um abraço gentil,<br><br>e nos lembrando que somos amados.<br><br>Então, celebremos os laços de esperança,<br><br>pois eles nos sustentam em tempos de dificuldade,<br><br>nos guiam em tempos de incerteza,<br><br>e nos lembram do poder do amor."
        },
        {
            title: "O Poder da Esperança",
            content: "No poder da esperança, encontramos força,<br><br>uma força que nos sustenta em tempos difíceis,<br><br>nos eleva quando estamos caídos,<br><br>e nos dá coragem para seguir em frente.<br><br>Cada abraço é um lembrete,<br><br>cada palavra, um bálsamo para a alma,<br><br>enquanto navegamos pelas águas tumultuadas da vida,<br><br>abraçando a esperança com gratidão e alegria.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>nos lembrando que não estamos sozinhos.<br><br>Na esperança, encontramos amor,<br><br>um amor que transcende as palavras,<br><br>nos envolvendo em seu calor suave,<br><br>e nos lembrando do poder transformador do amor.<br><br>Então, celebremos a esperança em todas as suas formas,<br><br>pois ela nos une em tempos de divisão,<br><br>nos conforta em tempos de tristeza,<br><br>e nos lembra do que realmente importa."
        },
        {
            title: "Os Laços Inquebráveis da Esperança",
            content: "Nos laços inquebráveis da esperança, encontramos segurança,<br><br>uma segurança que vem do compartilhar,<br><br>do cuidado mútuo e do apoio inabalável,<br><br>navegando pelas águas da vida juntos.<br><br>Cada momento é uma lembrança,<br><br>cada sorriso, um raio de sol,<br><br>enquanto tecemos juntos o tecido de nossas vidas,<br><br>abraçando a esperança com gratidão e alegria.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do amor mútuo,<br><br>da aceitação e do perdão,<br><br>nos lembrando que somos amados e dignos de amor.<br><br>Na esperança, encontramos esperança,<br><br>uma esperança que brilha como uma estrela no céu noturno,<br><br>nos guiando pelo caminho à frente com fé e coragem,<br><br>e nos lembrando que o amor sempre prevalece.<br><br>Então, celebremos os laços inquebráveis da esperança,<br><br>pois eles nos sustentam em tempos de dificuldade,<br><br>nos alegram em tempos de tristeza,<br><br>e nos lembram do poder transformador do amor."
        },
        {
            title: "Caminhos da Esperança",
            content: "Nos caminhos da esperança, encontramos luz,<br><br>uma luz que brilha em meio à escuridão,<br><br>nos guiando pelo desconhecido,<br><br>e nos lembrando que há esperança mesmo nos tempos mais sombrios.<br><br>Cada passo é uma jornada,<br><br>cada sorriso, um raio de sol,<br><br>enquanto seguimos adiante na estrada da vida,<br><br>abraçando a esperança com gratidão e coragem.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado e da compaixão,<br><br>navegando pelas tormentas da vida juntos.<br><br>Na esperança, encontramos força,<br><br>uma força que nos sustenta em tempos de dificuldade,<br><br>nos impulsiona para a frente com fé e determinação,<br><br>e nos lembra que o amanhã sempre pode ser melhor."
        },
        {
            title: "A Aurora da Esperança",
            content: "Na aurora da esperança, encontramos renovação,<br><br>uma renovação que vem com cada nascer do sol,<br><br>nos lembrando que cada dia é uma nova oportunidade,<br><br>para encontrar alegria, amor e esperança.<br><br>Cada momento é um presente,<br><br>cada abraço, uma bênção,<br><br>enquanto acolhemos a luz da esperança em nossas vidas,<br><br>abraçando-a com gratidão e otimismo.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelas águas da vida juntos.<br><br>Na esperança, encontramos coragem,<br><br>uma coragem que nos impulsiona além dos nossos limites,<br><br>nos lembrando que somos mais fortes do que pensamos,<br><br>e que cada desafio nos torna mais resilientes."
        },
        {
            title: "A Canção da Esperança",
            content: "Na canção da esperança, encontramos conforto,<br><br>uma melodia que acalenta nossas almas,<br><br>nos lembrando que a vida é cheia de possibilidades,<br><br>e que mesmo nos momentos mais difíceis, há beleza.<br><br>Cada nota é uma expressão de amor,<br><br>cada harmonia, uma bênção,<br><br>enquanto dançamos ao ritmo da esperança,<br><br>abraçando-a com gratidão e serenidade.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelas tempestades da vida juntos.<br><br>Na esperança, encontramos fé,<br><br>uma fé que nos eleva acima das adversidades,<br><br>nos lembrando que cada desafio é uma oportunidade,<br><br>para crescer, aprender e transformar."
        },
        {
            title: "O Renascer da Esperança",
            content: "No renascer da esperança, encontramos coragem,<br><br>uma coragem que vem das cinzas da adversidade,<br><br>nos lembrando que após a escuridão, sempre haverá luz,<br><br>e que cada desafio nos fortalece para enfrentar o amanhã.<br><br>Cada novo dia é uma dádiva,<br><br>cada obstáculo, uma oportunidade de crescimento,<br><br>enquanto caminhamos com determinação e fé,<br><br>abraçando a esperança com gratidão e resiliência.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelas águas turbulentas da vida juntos.<br><br>Na esperança, encontramos renovação,<br><br>uma renovação que nos permite florescer mesmo nos desertos,<br><br>nos lembrando que cada fim é um novo começo,<br><br>e que estamos sempre em constante evolução."
        },
        {
            title: "A Promessa da Esperança",
            content: "Na promessa da esperança, encontramos conforto,<br><br>uma promessa que nos guia através das tempestades,<br><br>nos lembrando que, mesmo nas noites mais escuras,<br><br>o amanhecer sempre chega com uma nova oportunidade.<br><br>Cada estrela no céu é um lembrete,<br><br>cada raio de sol, uma dádiva,<br><br>enquanto navegamos pelo desconhecido da vida,<br><br>abraçando a esperança com gratidão e serenidade.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelos mares agitados da vida juntos.<br><br>Na esperança, encontramos fortaleza,<br><br>uma fortaleza que nos sustenta mesmo nos momentos de fraqueza,<br><br>nos lembrando que somos mais resilientes do que imaginamos,<br><br>e que cada desafio nos molda para nos tornarmos melhores."
        },
        {
            title: "O Abraço da Esperança",
            content: "No abraço da esperança, encontramos consolo,<br><br>um refúgio seguro nas tempestades da vida,<br><br>nos lembrando que não importa quão árdua seja a jornada,<br><br>sempre haverá amor para nos sustentar.<br><br>Cada sorriso é uma luz,<br><br>cada lágrima, uma expressão de humanidade,<br><br>enquanto caminhamos lado a lado pela estrada da vida,<br><br>abraçando a esperança com gratidão e compaixão.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da empatia,<br><br>navegando pelos rios tumultuados da vida juntos.<br><br>Na esperança, encontramos determinação,<br><br>uma determinação que nos impulsiona além dos limites,<br><br>nos lembrando que somos capazes de superar qualquer desafio,<br><br>quando unimos nossas forças e nossos corações."
        },
        {
            title: "A Luz da Esperança",
            content: "Na luz da esperança, encontramos guia,<br><br>um farol que brilha nas noites mais escuras,<br><br>nos mostrando o caminho mesmo quando tudo parece perdido,<br><br>e nos lembrando que o amanhã sempre traz novas possibilidades.<br><br>Cada estrela no céu é um lembrete,<br><br>cada sorriso, uma chama que se acende,<br><br>enquanto navegamos pelas águas incertas da vida,<br><br>abraçando a esperança com gratidão e coragem.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelos mares tempestuosos da vida juntos.<br><br>Na esperança, encontramos renascimento,<br><br>um renascimento que nos permite florescer mesmo nos solos mais áridos,<br><br>nos lembrando que cada novo dia é uma página em branco,<br><br>e que podemos escrever nossa história com otimismo e fé."
        },
        {
            title: "A Canção da Esperança",
            content: "Na canção da esperança, encontramos conforto,<br><br>uma melodia suave que acalenta nossas almas,<br><br>nos lembrando que a vida é uma sinfonia de altos e baixos,<br><br>e que cada nota contribui para a beleza do todo.<br><br>Cada nota é uma expressão de amor,<br><br>cada pausa, uma oportunidade de reflexão,<br><br>enquanto dançamos ao ritmo da vida,<br><br>abraçando a esperança com gratidão e humildade.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelos desertos da vida juntos.<br><br>Na esperança, encontramos resiliência,<br><br>uma resiliência que nos permite encontrar harmonia mesmo na dissonância,<br><br>nos lembrando que cada desafio nos torna mais fortes,<br><br>e que a música da vida continua a tocar, mesmo nas noites mais escuras."
        },
        {
            title: "O Jardim da Esperança",
            content: "No jardim da esperança, encontramos renovação,<br><br>um oásis de cores vivas em meio ao deserto,<br><br>nos lembrando que a vida sempre encontra um caminho,<br><br>e que a beleza floresce mesmo nos lugares mais improváveis.<br><br>Cada flor é um lembrete da vida,<br><br>cada broto, uma promessa de novos começos,<br><br>enquanto cultivamos a esperança com dedicação e fé,<br><br>abraçando a jornada com gratidão e aceitação.<br><br>No calor da esperança, encontramos cura,<br><br>uma cura que vem do compartilhar,<br><br>do cuidado mútuo e da compaixão,<br><br>navegando pelos vales sombrios da vida juntos.<br><br>Na esperança, encontramos crescimento,<br><br>um crescimento que nos permite florescer mesmo nos terrenos mais áridos,<br><br>nos lembrando que cada desafio nos fortalece,<br><br>e que, como as flores no jardim, podemos florescer onde estamos plantados."
        }
    ];

    const poema14 = document.querySelector('.poema14');

    // Função para exibir um poema aleatório
    function displayRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        poema14.innerHTML = `<h2>${randomPoem.title}</h2><p>${randomPoem.content}</p>`;
    }

    // Exiba um poema aleatório quando a página carregar
    displayRandomPoem();
});
