import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationService } from '../service/reservation.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateReservationDto } from '../dto/create-reservation.dto';

@Controller()
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  /**
   * Create reservation by Id
   */
  @Get()
  getHello(): string {
    return this.reservationService.getHello();
  }

  /**
   * Create reservation
   */
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateReservationDto) {
    this.reservationService.create(createCatDto);
  }
}
