import { Body, Controller, Post } from "@nestjs/common";
import { DynamooseService } from "./dynamoose.service";

@Controller('dynamoose')
export class DynamooseController{
    constructor(
        private readonly dynamooseService: DynamooseService
    ){}
    @Post('item')
    async createItem(@Body() createItemDto: any){
        return this.dynamooseService.createItem(createItemDto)
    }
}