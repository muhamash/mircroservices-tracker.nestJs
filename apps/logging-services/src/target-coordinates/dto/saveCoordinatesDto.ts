import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SaveCoordinatesDto {
  @IsNotEmpty()
  @IsNumber()
  lon: number;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsString()
  target: string;
}
