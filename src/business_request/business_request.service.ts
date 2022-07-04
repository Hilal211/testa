import { Injectable, HttpStatus } from '@nestjs/common';
import { BusinessRequestdto } from './business_request.dto';
import { BusinessRequests } from '../../entities/BusinessRequests';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessRequestService {
  constructor(
    @InjectRepository(BusinessRequests)
    private test: Repository<BusinessRequests>,
  ) { }

  async showAll() {
    return await this.test.find();
  }

  async create(data: BusinessRequests) {
    // let a = [1, 2, 3]
    // let b = a[5]['j'];
    const user = this.test.create(data);
    await this.test.save(data);
    return user;
  }

  // async findByEmail(email: string): Promise<BusinessRequestdto> {
  //   return await this.test.findOne({
  //     where: {
  //       email: email,
  //     },
  //   });
  // }

  async read(id: number) {
    return await this.test.findOne({ where: { id: id } });
  }

  //   async update(id: number, data: Partial<BusinessRequestdto>) {
  //     await this.test.update({ id }, data);
  //     return await this.test.findOne({ id });
  //   }

  async destroy(id: number) {
    await this.test.delete({ id });
    return { deleted: true };
  }
}
