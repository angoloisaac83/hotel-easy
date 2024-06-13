export type VendorDataProps = {
    id: number;
    CompanyName: string;
    totalcustomers: number;
    RoomTypes: any;
    totalincome: number;
    activeusers: number;
}
export const VendorData = [
    {
        CompanyName: 'Brass Suites',
        RoomTypes: [
            {
                id: 1,
                price: '₦ 50,000',
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'available',
                roomno: '2',
                bg: 'bg-red-300',
                color: 'text-red-500'
            },
            {
                id: 2,
                price: '₦ 50,000',
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'unavailable',
                roomno: '2',
                bg: 'bg-red-300',
                color: 'text-red-500'
            },
            {
                id: 3,
                price: '₦ 50,000',
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'available',
                roomno: '2',
                bg: 'bg-red-300',
                color: 'text-red-500'
            },
            {
                id: 4,
                price: '₦ 50,000',
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'unavailable',
                roomno: '2',
                bg: 'bg-red-300',
                color: 'text-red-500'
            }
        ],
        id: 1,
        totalcustomers: 2500,
        totalincome: 205,
        activeusers: 5,
        CompanyLocation: '',
        PaymentDetails: '',
        contact: 'hola'
    },
    {
        CompanyName: 'Jobile Suites',
        RoomTypes: [
            {
                id: 1,
                price: 50,
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'available',
                roomno: '2'
            },
            {
                id: 1,
                price: 50,
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'available',
                roomno: '2'
            },
            {
                id: 1,
                price: 50,
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'available',
                roomno: '2'
            },
            {
                id: 1,
                price: 50,
                type: 'executive',
                images: [''],
                reviews: '',
                availability: 'available',
                roomno: '2'
            }
        ],
        id: 2,
        totalcustomers: 2050,
        totalincome: 200,
        activeusers: 8,
        CompanyLocation: '',
        PaymentDetails: '',
        contact: 'hello'
    },
    // Add more vendor objects as needed
];
