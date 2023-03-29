import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  readonly to: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly subject: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly message: string;
}
