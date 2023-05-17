import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  findAll() {
    console.log('GET');
    return this.appService.findAll();
  }

  @Post('create')
  create(@Body() updateLine) {
    console.log(updateLine);
    return this.appService.create(updateLine);
  }

  @Patch('set/:id')
  update(@Param('id') id: string, @Body() updateLine) {
    console.log(updateLine, id);
    return this.appService.update(+id, updateLine);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    console.log('DELETE', id);
    return this.appService.remove(+id);
  }

  @Post('login')
  login() {
    console.log('LOGIN');
    return this.appService.login();
  }
}
