import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
  import { Brand } from '../../entities/Brand';
  import { BrandService } from './brand.service';
  
  @Controller('brand')
  export class BrandController {
    constructor(private brandService: BrandService) {}
  
    @Get()
    findAll() {
      return this.brandService.findAll();
    }
 
  }