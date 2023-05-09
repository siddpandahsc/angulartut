import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  // rooms : Room = {

  // }
  rooms: Room = {
    availableRooms: 3,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: "Deluxe Room",
      amenities: "AC, Double Bed",
      price: 500,
      photos: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime:new Date('13-Nov-2021'),
      rating:4.5
    },
    {
      roomNumber:2,
      roomType: "Premium Room",
      amenities: "AC, Double Bed, Bathroom",
      price: 1500,
      photos: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime:new Date('18-Nov-2021'),
      rating:3.4
    },
    {
      roomNumber:3,
      roomType: "Private Suite Room",
      amenities: "AC, Double Bed, Bathroom, Toilet",
      price: 1500,
      photos: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime:new Date('18-Nov-2021'),
      rating:2.6222
    },
  ]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
