import { LoggerService, Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { DynamodbModule } from './dynamodb/dynamodb.module';
import { MyDynamooseModule } from './dynamoose/dynamoose.module';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [DynamooseModule.forRoot(), DynamodbModule, MyDynamooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
