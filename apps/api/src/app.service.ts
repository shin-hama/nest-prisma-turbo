import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma-service/prisma.service';

import { TestName } from '@repo/db/dist';

@Injectable()
export class AppService {
  // PrismaServiceをコンストラクタの引数に設定
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return `Hello ${TestName}!`;
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
