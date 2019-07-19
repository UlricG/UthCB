import {UthRealm} from './uth-realm.enum';

export enum UthRace {
    // Albion races
    Avalonian,
    Briton,
    Highlander,
    Inconnu,
    Saracen,
    // Hibernian races
    Celt,
    Firbolg,
    Elf,
    Lurikeen,
    Sylvan,
    // Midgard Races
    Dwarf,
    Kobold,
    Frostalf,
    Norseman,
    Troll,
    Valkyn
}

export namespace UthRace {
    export function realm(race: UthRace) {
        switch (race) {
            case UthRace.Avalonian:
            case UthRace.Briton:
            case UthRace.Highlander:
            case UthRace.Inconnu:
            case UthRace.Saracen:
                return UthRealm.Albion;
            case UthRace.Celt:
            case UthRace.Firbolg:
            case UthRace.Elf:
            case UthRace.Lurikeen:
            case UthRace.Sylvan:
                return UthRealm.Hibernia;
            case UthRace.Dwarf:
            case UthRace.Kobold:
            case UthRace.Frostalf:
            case UthRace.Norseman:
            case UthRace.Troll:
            case UthRace.Valkyn:
                return UthRealm.Midgard;
        }
        return null;
    }
}
