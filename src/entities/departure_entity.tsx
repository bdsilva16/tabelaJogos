export default class DepartureEntity {
    partida_id: number;
    campeonato: {
        campeonato_id: number;
        nome: string;
        slug: string;
        nome_popular: string;
        fase_atual: {
            fase_id: number;
            nome: string;
            slug: string;
            tipo: string;
            // _link: /v1/campeonatos/10/fases/317
        }
    };
    placar: string
    time_mandante: {
        time_id: number;
        nome_popular: string;
        sigla: string;
        escudo: string;
    };
    time_visitante: {
        time_id: number;
        nome_popular: string;
        sigla: string;
        escudo: String;
    };
    placar_mandante: number;
    placar_visitante: number
} 