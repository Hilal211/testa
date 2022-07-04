import { Injectable} from '@nestjs/common';
import { Log } from '../../entities/log';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    public log: Repository<Log>,
  ) { }



  async create() {

    // const log = this.log.create(data);
    // await this.log.save(data);
    return "hi"
  }

  
}
