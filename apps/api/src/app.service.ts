import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma-service/prisma.service';

@Injectable()
export class AppService {
  // PrismaServiceをコンストラクタの引数に設定
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
