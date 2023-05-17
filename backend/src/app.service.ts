import { Injectable } from '@nestjs/common';
const notdb = [{}];

@Injectable()
export class AppService {
  findAll() {
    return notdb;
  }

  create(updateLine) {
    notdb.push(updateLine);
    return 200;
  }

  update(id, updateLine) {
    notdb[id] = updateLine;
    return 200;
  }

  remove(id) {
    notdb.splice(id, 1);
    return 200;
  }

  login() {
    return 200;
  }
}
