import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a user', async () => {
    const userData = {
      email: 'john.doe@example.com',
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    };

    const response = await request(app.getHttpServer()).post('/users').send(userData).expect(201);

    expect(response.body).toEqual(
      expect.objectContaining({
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        avatar: userData.avatar,
      }),
    );

    expect(response.body._id).toBeDefined();
    expect(response.body.__v).toBeDefined();
  });
});
