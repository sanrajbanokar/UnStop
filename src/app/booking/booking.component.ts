import { Component, OnInit } from '@angular/core';

import { Seat } from '../shared/seat.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  coach: Seat[]= [
    {
      seatNumber: 1,
      isOccupied: false
    }, {
      seatNumber: 2,
      isOccupied: false
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
    }, {
      seatNumber: 18,
      isOccupied: false
    }, {
      seatNumber: 19,
      isOccupied: false
    }, {
      seatNumber: 20,
      isOccupied: false
    },{
      seatNumber: 21,
      isOccupied: false
    }, {
      seatNumber: 22,
      isOccupied: false
    }, {
      seatNumber: 23,
      isOccupied: false
    }, {
      seatNumber: 24,
      isOccupied: false
    }, {
      seatNumber: 25,
      isOccupied: false
    }, {
      seatNumber: 26,
      isOccupied: false
    }, {
      seatNumber: 27,
      isOccupied: false
    }, {
      seatNumber: 28,
      isOccupied: false
    }, {
      seatNumber: 29,
      isOccupied: false
    }, {
      seatNumber: 30,
      isOccupied: false
    },
    {
      seatNumber: 31,
      isOccupied: false
    },
    // {
    //   seatNumber: 32,
    //   isOccupied: false
    // }, {
    //   seatNumber: 33,
    //   isOccupied: false
    // }, {
    //   seatNumber: 34,
    //   isOccupied: false
    // }, {
    //   seatNumber: 35,
    //   isOccupied: false
    // }, {
    //   seatNumber: 36,
    //   isOccupied: false
    // }, {
    //   seatNumber: 37,
    //   isOccupied: false
    // }, {
    //   seatNumber: 38,
    //   isOccupied: false
    // }, {
    //   seatNumber: 39,
    //   isOccupied: false
    // }, {
    //   seatNumber: 40,
    //   isOccupied: false
    // },
    // {
    //   seatNumber: 41,
    //   isOccupied: false
    // }, {
    //   seatNumber: 42,
    //   isOccupied: false
    // }, {
    //   seatNumber: 43,
    //   isOccupied: false
    // }, {
    //   seatNumber: 44,
    //   isOccupied: false
    // }, {
    //   seatNumber: 45,
    //   isOccupied: false
    // }, {
    //   seatNumber: 46,
    //   isOccupied: false
    // }, {
    //   seatNumber: 47,
    //   isOccupied: false
    // }, {
    //   seatNumber: 48,
    //   isOccupied: false
    // }, {
    //   seatNumber: 49,
    //   isOccupied: false
    // }, {
    //   seatNumber: 50,
    //   isOccupied: false
    // },
    // {
    //   seatNumber: 51,
    //   isOccupied: false
    // }, {
    //   seatNumber: 52,
    //   isOccupied: false
    // }, {
    //   seatNumber: 53,
    //   isOccupied: false
    // }, {
    //   seatNumber: 54,
    //   isOccupied: false
    // }, {
    //   seatNumber: 55,
    //   isOccupied: false
    // }, {
    //   seatNumber: 56,
    //   isOccupied: false
    // },
    // {
    //   seatNumber: 57,
    //   isOccupied: false
    // },
    // {
    //   seatNumber: 58,
    //   isOccupied: false
    // }, {
    //   seatNumber: 59,
    //   isOccupied: false
    // }, {
    //   seatNumber: 60,
    //   isOccupied: false
    // }, {
    //   seatNumber: 61,
    //   isOccupied: false
    // }, {
    //   seatNumber: 62,
    //   isOccupied: false
    // }, {
    //   seatNumber: 63,
    //   isOccupied: false
    // }, {
    //   seatNumber: 64,
    //   isOccupied: false
    // }, {
    //   seatNumber: 65,
    //   isOccupied: false
    // }, {
    //   seatNumber: 66,
    //   isOccupied: false
    // }, {
    //   seatNumber: 67,
    //   isOccupied: false
    // }, {
    //   seatNumber: 68,
    //   isOccupied: false
    // }, {
    //   seatNumber: 69,
    //   isOccupied: false
    // }, {
    //   seatNumber: 70,
    //   isOccupied: false
    // },{
    //   seatNumber: 71,
    //   isOccupied: false
    // }, {
    //   seatNumber: 72,
    //   isOccupied: false
    // }, {
    //   seatNumber: 73,
    //   isOccupied: false
    // }, {
    //   seatNumber: 74,
    //   isOccupied: false
    // }, {
    //   seatNumber: 75,
    //   isOccupied: false
    // }, {
    //   seatNumber: 76,
    //   isOccupied: false
    // }, {
    //   seatNumber: 77,
    //   isOccupied: false
    // }, {
    //   seatNumber: 78,
    //   isOccupied: false
    // }, {
    //   seatNumber: 79,
    //   isOccupied: false
    // }, {
    //   seatNumber: 80,
    //   isOccupied: false
    // },
    
  ]

  userInput: number;
  bookedSeats: number[]= [];

  coachDetails = JSON.stringify(this.coach);
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let position;
    let index = 0;
    let count = 0;
    this.coach.some((element:Seat)=> {
      index++;
      if(index%7 === 0 && count<this.userInput) {
        if(!element.isOccupied && count === this.userInput-1) {
          count++;
          if(count>=this.userInput) {
            return position = index-this.userInput+1;
          }
        }else {
          count = 0;
        }
      }
      else {
        if(!element.isOccupied) {
          count++;
          if(count>=this.userInput) {
            return position = index-this.userInput+1;
          }
        }
      }

    })
    console.log(position);
    
let bookingIndex = 1;
let bookingCounter = this.userInput;
    if(position===undefined) {
      this.coach.forEach((element)=> {
        if (!element.isOccupied && bookingCounter !== 0) {
          this.bookedSeats.push(element.seatNumber)
          element.isOccupied = true;
          bookingCounter--;
          bookingIndex++;
        }else {
          bookingIndex++;
        }
      });
    }else {
      this.coach.forEach((element)=> {
        if(bookingCounter === 0) {
          return this.bookedSeats;
        }else if (!element.isOccupied &&(bookingIndex === position || bookingIndex > position)) {
          this.bookedSeats.push(element.seatNumber)
          element.isOccupied = true;
          bookingCounter--;
          bookingIndex++;
        }else {
          bookingIndex++;
        }
      })
    }
    
    console.log(this.bookedSeats + "Tickets Booked");
  }

}
