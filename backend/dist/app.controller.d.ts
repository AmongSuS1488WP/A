import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): {}[];
    create(updateLine: any): number;
    update(id: string, updateLine: any): number;
    remove(id: string): number;
    login(): number;
}
