import { Injectable } from '@nestjs/common';
import { ddbClient } from './dbClient';
import { createTable } from './dto/create-table.dto';
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { createItem } from './dto/create-item.dto';
import { ddbDocClient } from './ddbClient';

@Injectable()
export class DynamodbService {
  async createTableService(createTableDto: createTable) {
    const {name} = createTableDto; 
    const params = {
      AttributeDefinitions: [
        {
          AttributeName: "PID", //ATTRIBUTE_NAME_1
          AttributeType: "N", //ATTRIBUTE_TYPE
        },
        {
          AttributeName: "SID", //ATTRIBUTE_NAME_2
          AttributeType: "N", //ATTRIBUTE_TYPE
        },
      ],
      KeySchema: [
        {
          AttributeName: "PID", //ATTRIBUTE_NAME_1
          KeyType: "HASH",
        },
        {
          AttributeName: "SID", //ATTRIBUTE_NAME_2
          KeyType: "RANGE",
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      TableName: name, //TABLE_NAME
      StreamSpecification: {
        StreamEnabled: false,
      },
    };
    try {
      const data = await ddbClient.send(new CreateTableCommand(params));
      return data;
    } catch (err) {
      return err; 
    }
  }

  async createItemService(createItemDto: createItem){
    const params = {
      TableName: "Test",
      Item: {
        primaryKey: 0,
        sortKey: 0,
        name: "Rasikh",
        info: "Khi",
        data: "2022"
      },
    };
    try {
      const data = await ddbDocClient.send(new PutCommand(params));
      return data; 
    } catch (err) {
      return err; 
    }
  }
}
