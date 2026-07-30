export type Address = {
	city: string;
	phone: string;
	fax?: string;
	address: string;
	hours: {
		Monday: string;
		Tuesday: string;
		Wednesday: string;
		Thursday: string;
		Friday: string;
		Saturday: string;
		Sunday: string;
	};
};

export const addresses: Address[] = [
	{
		city: 'Pensacola, FL',
		phone: '850-479-3489',
		address: '2254 Olive Road Pensacola, FL 32514',
		hours: {
			Monday: '8:30 AM \u2013 3:30 PM',
			Tuesday: 'Closed',
			Wednesday: 'Closed',
			Thursday: '8:30 AM \u2013 3:30 PM',
			Friday: 'Closed',
			Saturday: 'Closed',
			Sunday: 'Closed'
		}
	},
	{
		city: 'Fort Walton Beach, FL',
		phone: '850-864-1688',
		address: '51 Beal Pkwy NE Fort Walton Beach, FL 32548',
		hours: {
			Monday: '8:30 AM \u2013 3:30 PM',
			Tuesday: 'Closed',
			Wednesday: 'Closed',
			Thursday: '8:30 AM \u2013 3:30 PM',
			Friday: 'Closed',
			Saturday: 'Closed',
			Sunday: 'Closed'
		}
	},
	{
		city: 'Mobile, AL',
		phone: '251-341-4507',
		fax: '251-343-6666',
		address: '4353 Midmost Drive Mobile, AL 36609',
		hours: {
			Monday: 'Closed',
			Tuesday: '7:30 AM \u2013 6 PM',
			Wednesday: 'Closed',
			Thursday: 'Closed',
			Friday: '7:30 AM \u2013 6 PM',
			Saturday: 'Closed',
			Sunday: 'Closed'
		}
	},
	{
		city: 'Biloxi, MS',
		phone: '228-385-7794',
		fax: '228-385-3838',
		address: '2318 E. Pass Road Biloxi, MS 39531',
		hours: {
			Monday: '8:30 AM \u2013 3:30 PM',
			Tuesday: 'Closed',
			Wednesday: 'Closed',
			Thursday: '8:30 AM \u2013 3:30 PM',
			Friday: 'Closed',
			Saturday: 'Closed',
			Sunday: 'Closed'
		}
	}
];
