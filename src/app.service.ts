import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}

  async checkDatabaseConnection(): Promise<boolean> {
    try {
      await this.connection.query('SELECT 1');
      return true;
    } catch (error) {
      return false;
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
}
