import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/infrastructure/schemas/user.schema';

export class UpdateUserDto implements Partial<User> {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly first_name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly last_name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly avatar?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly hash?: string;
}

export class AddUserDto implements Partial<User> {
  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The email of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'John',
    description: 'The First name of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The Last name of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @ApiProperty({ example: 'https://reqres.in/img/faces/2-image.jpg', description: 'The URL Avatar of the user', required: false })
  @IsNotEmpty()
  @IsString()
  readonly avatar: string;
}
