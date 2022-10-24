import { Module } from "@nestjs/common";
import { DynamooseController } from "./dynamoose.controller";
import { DynamooseService } from "./dynamoose.service";  

@Module({
    controllers: [DynamooseController],
    providers: [DynamooseService]
})

export class MyDynamooseModule {}