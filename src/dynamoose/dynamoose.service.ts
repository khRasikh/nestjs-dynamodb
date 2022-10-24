import { Injectable } from "@nestjs/common";


@Injectable()
export class DynamooseService{
    async createItem(createItemDto: any){
        return createItemDto; 
    }
}