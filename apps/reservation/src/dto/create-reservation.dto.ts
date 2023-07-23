import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString, Matches } from 'class-validator';
import { Status } from '../enums/status';

export class CreateReservationDto {
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
