window.onload = function() {
    mesAtual = new Date(Date.now()).getMonth();

    meses = [
        'janeiro',
        'fevereiro',
        'marco',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];

    aniversarios = [
        [
            { dia: 10, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 01, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 02, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 05, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 06, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 08, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 11, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 25, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 24, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 02, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 14, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 15, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 21, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 29, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 04, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 09, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 15, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 18, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 21, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
        [
            { dia: 10, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 12, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 19, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 21, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
            { dia: 23, nome: "José Armando da Silva", funcao: "Engenheiro Eletricista/Telecomunicações" },
        ],
    ];

    const mes = document.querySelector('#mes');
    mes.innerHTML = meses[mesAtual];

    const aniversarios_sections = document.querySelector('.aniversarios-sections');
        aniversarios_sections.innerHTML = '';
        // alert(meses[mesAtual]);
        // alert(mesAtual);
        // console.log(aniversarios);
        aniversarios[mesAtual].forEach(aniversario => {
            const section = document.createElement('section');

            const numero = document.createElement('p');
            numero.classList.add('section-numero');
            numero.innerText = aniversario.dia;

            section.appendChild(numero);

            const div = document.createElement('div');

            const nome = document.createElement('p');
            nome.classList.add('section-nome');
            nome.innerText = aniversario.nome;

            const cargo = document.createElement('p');
            cargo.classList.add('section-cargo');
            cargo.innerText = aniversario.funcao;

            div.appendChild(nome);
            div.appendChild(cargo);

            section.appendChild(div);

            aniversarios_sections.append(section);
        });
}



function atualizaAniversarios(incremento) {
    // alert(incremento);
    mesAtual += incremento;

    if (mesAtual >= 0 && mesAtual < 12) {

        const aniversarios_sections = document.querySelector('.aniversarios-sections');
        aniversarios_sections.innerHTML = '';
        // alert(meses[mesAtual]);
        // alert(mesAtual);
        // console.log(aniversarios);
        aniversarios[mesAtual].forEach(aniversario => {
            const section = document.createElement('section');

            const numero = document.createElement('p');
            numero.classList.add('section-numero');
            numero.innerText = aniversario.dia;

            section.appendChild(numero);

            const div = document.createElement('div');

            const nome = document.createElement('p');
            nome.classList.add('section-nome');
            nome.innerText = aniversario.nome;

            const cargo = document.createElement('p');
            cargo.classList.add('section-cargo');
            cargo.innerText = aniversario.funcao;

            div.appendChild(nome);
            div.appendChild(cargo);

            section.appendChild(div);

            aniversarios_sections.append(section);

            const mes = document.querySelector('#mes');
            mes.innerHTML = meses[mesAtual];
        });
    }
}
