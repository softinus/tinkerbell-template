import { Filter, RoomFloor, RoomCount, ContractType } from '../filter';

/**
 * 월세 한도 (단위 만원)
 */
const rentBudget = 60;

/**
 * 보증금 한도 (단위 만원)
 */
const depositBudget = 1000;

const commonFilter: Omit<Filter, 'bounds' | 'id'> = {
    priceRange: {
        rent: { max: rentBudget * 10000 },
        deposit: { max: depositBudget * 10000 },
        shouldIncludeMaintenance: true,
    },
    buildingTypes: [],
    roomFloors: [RoomFloor.lower, RoomFloor.higher],
    roomCounts: [RoomCount.twoRooms, RoomCount.threeAndMoreRooms],
    contractTypes: [ContractType.rent],
    shouldIncludeHalfUndergrounds: false,
    shouldIncludeLofts: true,
    shouldIncludeRooftops: true,
};

const candidates: Filter[] = [
    {
        id: '야탑',
        ...commonFilter,
        bounds: {
            max: { lat: 37.418483, lng: 127.128718 },
            min: { lat: 37.405393, lng: 127.125072 },
        },
    },
    {
        id: '서현',
        ...commonFilter,
        bounds: {
            max: { lat: 37.389726, lng: 127.120014 },
            min: { lat: 37.383179, lng: 127.127181 },
        },
    },
];

export default candidates;
