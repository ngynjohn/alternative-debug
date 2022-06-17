import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NODE_ENV } from "../shared/constants/env";

/**
 * passes a next server instance as the arg to forRootAsync
 */
@Module({
  imports: [RenderModule.forRootAsync(
    Next({ dev: NODE_ENV === 'development' }),
    { viewsDir: null }
  )],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
