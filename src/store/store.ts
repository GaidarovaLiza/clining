import { Dayjs } from 'dayjs';
import { create } from 'zustand';

interface RoomCountState {
  roomCount: number;
  bathRoomCount: number;
  maintenancePrice: number;
  setRoomCount: (count: number) => void;
  setBathRoomCount: (count: number) => void;
  calculateMaintenancePrice: () => void;
}

interface CalendarState {
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
}

export const useCalendarStore = create<CalendarState>((set, get) => ({
  selectedDate: null,
  setSelectedDate: date => set({ selectedDate: date }),
}));

export const useRoomCountStore = create<RoomCountState>((set, get) => ({
  roomCount: 1,
  setRoomCount: count => set({ roomCount: count }),
  bathRoomCount: 1,
  maintenancePrice: 0,
  setBathRoomCount: count => set({ bathRoomCount: count }),
  calculateMaintenancePrice: () => {
    const { roomCount, bathRoomCount } = get();
    let price = 0;
    switch (roomCount) {
      case 1:
        price = 85;
        break;
      case 2:
        price = 100;
        break;
      case 3:
        price = 150;
        break;
      case 4:
        price = 200;
    }

    price += (bathRoomCount - 1) * 30;

    set({ maintenancePrice: price });
  },
}));
