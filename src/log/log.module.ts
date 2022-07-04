import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessRequests } from '../../entities/BusinessRequests';
import { LogService } from './log.service';
@Module({
    imports: [TypeOrmModule.forFeature([BusinessRequests])],
    providers: [LogService],
    exports: [LogService]
})
export class LogModule {}
