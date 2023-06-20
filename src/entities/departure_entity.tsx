export default class DepartureEntity {
    partida_id: number;
    placar: string
    campeonato: {
        campeonato_id: Number;
        nome: string;
        slug: string;
    };
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