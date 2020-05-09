declare module pokedex {

    export interface Ability2 {
        name: string;
        url: string;
    }

    export interface Ability {
        ability: Ability2;
        is_hidden: boolean;
        slot: number;
    }

    export interface Form {
        name: string;
        url: string;
    }

    export interface Version {
        name: string;
        url: string;
    }

    export interface GameIndice {
        game_index: number;
        version: Version;
    }

    export interface Move2 {
        name: string;
        url: string;
    }

    export interface MoveLearnMethod {
        name: string;
        url: string;
    }

    export interface VersionGroup {
        name: string;
        url: string;
    }

    export interface VersionGroupDetail {
        level_learned_at: number;
        move_learn_method: MoveLearnMethod;
        version_group: VersionGroup;
    }

    export interface Move {
        move: Move2;
        version_group_details: VersionGroupDetail[];
    }

    export interface Species {
        name: string;
        url: string;
    }

    export interface Sprites {
        back_default: string;
        back_female?: any;
        back_shiny: string;
        back_shiny_female?: any;
        front_default: string;
        front_female?: any;
        front_shiny: string;
        front_shiny_female?: any;
    }

    export interface Stat2 {
        name: string;
        url: string;
    }

    export interface Stat {
        base_stat: number;
        effort: number;
        stat: Stat2;
    }

    export interface Type2 {
        name: string;
        url: string;
    }

    export interface Type {
        slot: number;
        type: Type2;
    }

    export interface RootObject {
        abilities: Ability[];
        base_experience: number;
        forms: Form[];
        game_indices: GameIndice[];
        height: number;
        held_items: any[];
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: Move[];
        name: string;
        order: number;
        species: Species;
        sprites: Sprites;
        stats: Stat[];
        types: Type[];
        weight: number;
    }

}

let result: pokedex.RootObject;
result.stats[0].stat.name;
