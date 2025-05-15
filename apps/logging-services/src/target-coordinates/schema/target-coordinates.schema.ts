import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TargetCoordinateDocuments = HydratedDocument<TargetCoordinates>;

@Schema()
export class TargetCoordinates {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lon: number;

  @Prop({ required: true })
  target: string;

  //   @Prop()
  //   lon: number;
}

export const TargetCoordinateSchema =
  SchemaFactory.createForClass(TargetCoordinates);
