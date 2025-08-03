document.addEventListener('DOMContentLoaded', () => {
    // Mapeamento das peças, escolhas e suas respectivas imagens
    const imageMap = {
        tecido: {
            claro: 'https://i.imgur.com/uP4n2Fh.png',
            escuro: 'https://i.imgur.com/j5B6a5z.png'
        },
        forro: {
            claro: 'https://i.imgur.com/5wzS2aM.png',
            escuro: 'https://i.imgur.com/2B2g5Y5.png'
        },
        ziper: {
            claro: 'https://i.imgur.com/hO9a2zX.png',
            escuro: 'https://i.imgur.com/2d1T45g.png'
        },
        vivo: {
            claro: 'https://i.imgur.com/ZkYtL5I.png',
            escuro: 'https://i.imgur.com/8z6uY2E.png'
        },
        cantos: {
            claro: 'https://i.imgur.com/vL96nJz.png',
            escuro: 'https://i.imgur.com/aWJpY17.png'
        },
        cursores: {
            claro: 'https://i.imgur.com/sM9LgE0.png',
            escuro: 'https://i.imgur.com/N5g3z4p.png'
        }
    };

    // Função para inicializar o estado padrão (tudo 'claro')
    function initializeDefaults() {
        // Itera sobre cada grupo de botões
        document.querySelectorAll('.option-group').forEach(group => {
            // Encontra o primeiro botão (o 'claro') e o define como ativo
            const defaultButton = group.querySelector('.choice-btn[data-choice="claro"]');
            if (defaultButton) {
                defaultButton.classList.add('active');
            }
        });
    }

    // Seleciona todos os botões de escolha
    const choiceButtons = document.querySelectorAll('.choice-btn');

    // Adiciona um "ouvinte" de clique para cada botão
    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const part = button.dataset.part; // ex: 'tecido'
            const choice = button.dataset.choice; // ex: 'claro'

            // Atualiza a imagem correspondente
            const imageElement = document.getElementById(`necessaire-${part}`);
            if (imageElement && imageMap[part] && imageMap[part][choice]) {
                imageElement.src = imageMap[part][choice];
            }

            // Atualiza o visual dos botões (destaque ativo)
            // Primeiro, remove 'active' de todos os botões do mesmo grupo
            document.querySelectorAll(`.choice-btn[data-part="${part}"]`).forEach(btn => {
                btn.classList.remove('active');
            });
            // Depois, adiciona 'active' apenas no botão que foi clicado
            button.classList.add('active');
        });
    });

    // Chama a função para definir o estado inicial quando a página carregar
    initializeDefaults();
});
