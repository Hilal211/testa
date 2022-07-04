import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpException,
  UseInterceptors,
} from '@nestjs/common';

import { BusinessRequestService } from './business_request.service';
import { LogService } from '../log/log.service';
import { BusinessRequests } from '../../entities/BusinessRequests';
import { Log } from 'entities/Log';
@Controller('business-request')
export class BusinessRequestController {
  constructor(private businessRequestService: BusinessRequestService,private logService: LogService) { 
  }

  @Get()
  async showAllUsers() {

    const users = await this.businessRequestService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Post()
  async createBusinessRequest(@Body() data: BusinessRequests) {
    const user = await this.businessRequestService.create(data).catch(async (err: Error) => {
      
      // let dataLog = {
      //   loginId:1,
      //   file: 'business_request-createBusinessRequest',
      //   extra: err.stack.toString(),
      //   error: err.message.toString(),
      // }
      // var login_id=1;
    
      const dataLog= {
        loginId: 1,
        file: 'business_request-createBusinessRequest',
        extra: err.stack.toString(),
        error: err.message.toString(),
      };
    
      await this.logService.create(dataLog);

      throw new HttpException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err.message
      }, HttpStatus.BAD_REQUEST);
    })
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data = await this.businessRequestService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  // @Patch(':id')
  // async uppdateUser(@Param('id') id: number, @Body() data: Partial<BusinessRequest>) {
  //   await this.businessRequestService.update(id, data);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'User updated successfully',
  //   };
  // }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.businessRequestService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}