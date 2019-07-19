import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UthClass} from '../../models/uth-class';
import {UthClassService} from '../../services/uth-class-service';
import {CharData} from '../../models/char-data';
import {CharStat} from '../../models/char-stat';

@Component({
    selector: 'app-builder',
    templateUrl: './builder.page.html',
    styleUrls: ['./builder.page.scss'],
})
export class BuilderPage implements OnInit {

    constructor(private route: ActivatedRoute, private uthClassService: UthClassService) {

    }

    private stats: string[] = ['STR', 'CON', 'DEX', 'QUI', 'INT', 'PIE', 'EMP', 'CHA']
    private charClass: UthClass;

    private charData: CharData;

    public isUseless(stat: string): boolean {
        return this.charClass.usefulStat.indexOf(stat) === -1;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.charClass = this.uthClassService.findByName(params['className']);
            this.charData = new CharData();
            this.charData.stats = CharStat.initCharStatArray(this.stats);
        });


    }

    log(stat: CharStat) {
        console.log(stat);
    }
}
