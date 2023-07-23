import { AbstractDocument } from '@app/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '../enums/status';

@Schema({ timestamps: true })
export class Reservation extends AbstractDocument {
  @Prop()
  date: Date;

  @Prop({ type: String, enum: Status })
  status: Status;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
