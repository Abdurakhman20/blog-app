import { Controller, Body, Param, Get, Post, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from '@/tag/dto/create-tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async getAll() {
    return this.tagService.getAll();
  }

  @Post()
  async create(@Body(ValidationPipe) createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagService.delete(id);
  }
}
