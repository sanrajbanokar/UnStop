import { Component, OnInit } from '@angular/core';

import { Seat } from '../shared/seat.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public coach: Seat[]= [
    {
      seatNumber: 1,
      isOccupied: false
    }, {
      seatNumber: 2,
      isOccupied: true
    }, {
      seatNumber: 3,
      isOccupied: false
    }, {
      seatNumber: 4,
      isOccupied: false
    }, {
      seatNumber: 5,
      isOccupied: false
    }, {
      seatNumber: 6,
      isOccupied: false
    },
    {
      seatNumber: 7,
      isOccupied: false
    },
    {
      seatNumber: 8,
      isOccupied: false
    }, {
      seatNumber: 9,
      isOccupied: false
    }, {
      seatNumber: 10,
      isOccupied: false
    }, {
      seatNumber: 11,
      isOccupied: false
    }, {
      seatNumber: 12,
      isOccupied: false
    }, {
      seatNumber: 13,
      isOccupied: false
    }, {
      seatNumber: 14,
      isOccupied: false
    }, {
      seatNumber: 15,
      isOccupied: false
    }, {
      seatNumber: 16,
      isOccupied: false
    }, {
      seatNumber: 17,
      isOccupied: false
    }
  ]

  coachDetails = JSON.stringify(this.coach);
  constructor() { }

  ngOnInit() {
  }



}
