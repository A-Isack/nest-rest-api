import { Injectable } from '@nestjs/common';
import { Iitem } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Iitem[] = [
        {
            id: 324324234,
            name: 'Item 1',
            description: 'item1  desc',
            qty: 45
        },
        {
            id: 345345,
            name: 'Item 2',
            description: 'item2  desc',
            qty: 23
        },
        {
            id: 5758768,
            name: 'Item 3',
            description: 'item3  desc',
            qty: 122
        },
        
    ];

    findAll():Iitem[]{
        return this.items
    }

}
