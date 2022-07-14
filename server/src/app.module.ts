import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './resources/user/user.module';
import { ReportModule } from './resources/report/report.module';
import { ChatModule } from './resources/chat/chat.module';
import { ApprovalModule } from './resources/approval/approval.module';

@Module({
  imports: [PrismaModule, UserModule, ReportModule, ChatModule, ApprovalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
