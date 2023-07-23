import { Status } from '../enums/status';
import { IsInt, IsString } from 'class-validator';

export class CreateReservationDto {
  /**
   * Reservation date in milliseconds
   */
  @IsInt()
  date: number;
  /**
   * A list of reservation's status
   * @example ['Active,Cancelled,Pending,Finished']
   */
  @IsString()
  status: Status;

  user?: number;
}
