import { CreateTagDto } from '@/tag/dto/create-tag.dto';
import { PrismaService } from '@/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.tag.findMany();
  }

  async create(tagData: CreateTagDto) {
    return this.prisma.tag.create({ data: tagData });
  }

  async delete(id: number) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });

    if (!tag) {
      throw new NotFoundException('There is no tag with this id!');
    }

    return this.prisma.tag.delete({ where: { id } });
  }
}
