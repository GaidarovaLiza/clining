import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand';

interface RoomCountState {
  roomCount: number;
  bathRoomCount: number;
  maintenancePrice: number;
  setRoomCount: (count: number) => void;
  setBathRoomCount: (count: number) => void;
  calculateMaintenancePrice: () => void;
  addMaintenancePrice: (price: number) => void;
}

interface CalendarState {
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
}

interface AdditionalItems {
  selectedItem: number;
  setSelectedItem: (price: number) => void;
}

const loadFromLocalStorage = () => {
  const day = dayjs();
  const roomCount = localStorage.getItem('roomCount');
  const bathRoomCount = localStorage.getItem('bathRoomCount');
  const maintenancePrice = localStorage.getItem('maintenancePrice');
  const selectedDate = localStorage.getItem('selectedDate');
  const selectedItem = localStorage.getItem('selectedItem');

  console.log('selectedItem LS', selectedItem);

  if (roomCount && bathRoomCount && maintenancePrice && selectedDate && selectedItem) {
    return {
      roomCount: parseInt(roomCount),
      bathRoomCount: parseInt(bathRoomCount),
      maintenancePrice: parseInt(maintenancePrice),
      selectedDate: day.add(parseInt(selectedDate)),
      selectedItem: parseInt(selectedItem),
    };
  } else {
    return {
      roomCount: 1,
      bathRoomCount: 1,
      maintenancePrice: 0,
      selectedDate: null,
      selectedItem: null,
    };
  }
};

const initialState = loadFromLocalStorage();

export const useAdditionalItemsStore = create<AdditionalItems>((set, get) => ({
  selectedItem: initialState.selectedItem,
  setSelectedItem: price => {
    set({ selectedItem: price });
    localStorage.setItem('selectedItem', price.toString());
  },
}));

export const useCalendarStore = create<CalendarState>((set, get) => ({
  selectedDate: initialState.selectedDate,
  setSelectedDate: date => {
    set({ selectedDate: date });
    localStorage.setItem('selectedDate', date.date().toString());
  },
}));

export const useRoomCountStore = create<RoomCountState>((set, get) => ({
  roomCount: initialState.roomCount,
  setRoomCount: count => {
    set({ roomCount: count });
    localStorage.setItem('roomCount', count.toString());
    get().calculateMaintenancePrice();
  },
  bathRoomCount: initialState.bathRoomCount,
  maintenancePrice: initialState.maintenancePrice,
  setBathRoomCount: count => {
    set({ bathRoomCount: count });
    localStorage.setItem('bathRoomCount', count.toString());
    get().calculateMaintenancePrice();
  },
  addMaintenancePrice: price => {
    set({ maintenancePrice: get().maintenancePrice + price });
    localStorage.setItem('maintenancePrice', (get().maintenancePrice + price).toString());
  },
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
    localStorage.setItem('maintenancePrice', price.toString());
  },
}));
