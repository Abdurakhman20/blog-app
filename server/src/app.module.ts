import { Module } from '@nestjs/common';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TagModule],
})
export class AppModule {}
