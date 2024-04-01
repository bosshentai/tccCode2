import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import * as schema from './db/_index';
// import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // DrizzlePostgresModule.register({
    //   tag: 'Dev',
    //   postgres: { url: process.env.DATABASE_URL },
    //   config: { schema: { ...schema } },
    // }),
    DrizzleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
