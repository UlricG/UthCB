import {UthStat} from './uth-stat.enum';

export class CharStat {

    name: string;
    value: number;

    public constructor(_name: string, _value: number) {
        this.name = _name;
        this.value = _value;
    }

    public static initCharStatArray(param: string[]): CharStat[] {
        let result: Array<CharStat>;
        result = new Array<CharStat>();
        for (const pItem in UthStat) {
            if (isNaN(parseInt(pItem, 10))) {
                result.push(new CharStat(pItem, 0));
            }
        }
        return result;
    }
}
