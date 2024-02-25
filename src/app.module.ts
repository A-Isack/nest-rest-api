import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://asharafIsack:Bassem-4549@atlascluster.h7g4rxq.mongodb.net/nest-rest-api?retryWrites=true&w=majority'),
    ItemsModule,
    UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
