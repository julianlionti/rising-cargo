import { Status } from '../enums/status';
import { IsDate, IsString, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ReservationDto {
  /**
   * Reservation date in milliseconds
   */
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsString()
  @ApiProperty({
    description: "A list of reservation's status",
    example: 'Active',
  })
  @Matches(
    `^${Object.values(Status)
      .filter((v) => typeof v !== 'number')
      .join('|')}$`,
    'i',
  )
  status: Status;

  user?: number;
}
