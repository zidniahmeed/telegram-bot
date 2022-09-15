import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramResolver } from './telegram.resolver';

@Module({
  providers: [TelegramService, TelegramResolver]
})
export class TelegramModule {}
