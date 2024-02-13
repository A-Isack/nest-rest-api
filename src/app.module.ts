import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller';
// import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://asharafIsack:Bassem-4549@atlascluster.h7g4rxq.mongodb.net/nest-rest-api?retryWrites=true&w=majority'),
  ItemsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
