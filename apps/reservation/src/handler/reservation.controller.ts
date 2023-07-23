import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReservationService } from '../service/reservation.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReservationDto } from '../dto/reservation.dto';
import { FindOneParams } from '@app/shared/common/FindOneParams';

@Controller()
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  /**
   * Get all reservations
   */
  @Get()
  get() {
    return this.reservationService.get();
  }

  /**
   * Get reservation by Id
   */
  @Get(':id')
  getById(@Param() params: FindOneParams) {
    return this.reservationService.getById(params.id);
  }

  /**
   * Create reservation
   * @returns []
   */
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async create(@Body() reservationDto: ReservationDto) {
    this.reservationService.create(reservationDto);
  }
}
