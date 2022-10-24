import { Body, Controller, Get, Post } from '@nestjs/common';
import { createItem } from './dto/create-item.dto';
import { createTable } from './dto/create-table.dto';
import { DynamodbService } from './dynamodb.service';

@Controller('db')
export class DynamodbController {

  constructor(private readonly dynamodbService: DynamodbService) {}

  @Post('table')
  async createTable(@Body() createTableDto: createTable){
    return this.dynamodbService.createTableService(createTableDto)
  }

  @Post('item')
  async createItem(@Body() createItemDto: createItem){
    return this.dynamodbService.createItemService(createItemDto)
  }
}
