
export interface ExpenseType {
    ID: string;
    Amount: number;
    Type: string;
    Concept: string;
    Project: string;
    Owner: string;
    Currency: string;
    Date: Date;
    State: State;
    Resolution: string;
    Inspector: string;
}

type State = "PENDING" | "APPROVED" | "REJECTED";

const assets: ExpenseType[] = [
        {
            ID: 'aaa9f4bc-0fa1-454f-ba1f-fa313a4198f8',
            Amount: 100,
            Concept: "Material for Helheim",
            Type: "Material",
            Project: "Helheim",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 7, 20, 15,0,0),
            State: "APPROVED",
            Resolution: "Lorem ipsum dolor sit amet. Vel accusantium rerum aut voluptas consequatur eum dicta internos qui voluptas maiores ea pariatur laborum aut quasi consequatur. Cum enim pariatur eum voluptas beatae aut iste porro ut nemo accusamus et perferendis fugit et provident rerum. Aut ratione harum ad ullam optio qui rerum nihil et dolore voluptatibus. Ea perspiciatis omnis aut atque quia sed dicta voluptates ut necessitatibus perspiciatis et animi amet cum galisum molestias. Id debitis officia qui voluptas voluptate sed cumque vitae sit voluptatibus accusantium est quaerat officiis aut dolore sint aut consequatur porro.",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: 'dda875a3-6f47-4dcc-81fb-10563370a437',
            Amount: 200,
            Concept: "Material for Helheim",
            Type: "Material",
            Project: "Helheim",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 7, 10, 15,0,0),
            State: "PENDING",
            Resolution: null,
            Inspector: null,
        },
        {
            ID: '15501c28-d518-4696-839e-091f65ffeea8',
            Amount: 300,
            Concept: "Equipment for Helheim",
            Type: "Equipment",
            Project: "Helheim",
            Owner: JSON.stringify({
                    email: "secondUser@gmail.com",
                    roleType: "user",
                    firstName: "Second",
                    wallet: "r48a5f6b-1975-4d66-b085-c6fc910ee6aa",
                    lastName: "User"
                }),
            Currency: "USD",
            Date: new Date(2022, 7, 8, 15,0,0),
            State: "APPROVED",
            Resolution: "Lorem ipsum dolor sit amet. Vel accusantium rerum aut voluptas consequatur eum dicta internos qui voluptas maiores ea pariatur laborum aut quasi consequatur. Cum enim pariatur eum voluptas beatae aut iste porro ut nemo accusamus et perferendis fugit et provident rerum. Aut ratione harum ad ullam optio qui rerum nihil et dolore voluptatibus. Ea perspiciatis omnis aut atque quia sed dicta voluptates ut necessitatibus perspiciatis et animi amet cum galisum molestias. Id debitis officia qui voluptas voluptate sed cumque vitae sit voluptatibus accusantium est quaerat officiis aut dolore sint aut consequatur porro.",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: 'cd9aebf0-8efd-40ca-9097-d31294ea339e',
            Amount: 400,
            Concept: "Material for Niflheim",
            Type: "Equipment",
            Project: "Niflheim",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 6, 27, 15,0,0),
            State: "REJECTED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: '1ab592a8-75b3-4ae8-a7a0-bff7f8944348',
            Amount: 500,
            Concept: "Material for Niflheim",
            Type: "Material",
            Project: "Niflheim",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 6, 20, 15,0,0),
            State: "APPROVED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: 'dec4ad95-fa7e-44cb-b4da-3265858817a4',
            Amount: 600,
            Concept: "Equipment for Niflheim",
            Type: "Equipment",
            Project: "Niflheim",
            Owner: JSON.stringify({
                    email: "secondUser@gmail.com",
                    roleType: "user",
                    firstName: "Second",
                    wallet: "r48a5f6b-1975-4d66-b085-c6fc910ee6aa",
                    lastName: "User"
                }),
            Currency: "USD",
            Date: new Date(2022, 6, 3, 15,0,0),
            State: "REJECTED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
        email: "managerTest@gmail.com",
        password: "managerTest",
        roleType: "manager",
        firstName: "Manager",
        lastName: "Test",
        wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
    }),
        },
        {
            ID: 'bffd138d-c96d-4ab3-a4d6-09b6024f7aac',
            Amount: 700,
            Concept: "Material for Asgard",
            Type: "Material",
            Project: "Asgard",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 29, 15,0,0),
            State: "PENDING",
            Resolution: null,
            Inspector: null,
        },
        {
            ID: 'cee61d5a-36e1-408b-8ba7-10af32d64b32',
            Amount: 800,
            Concept: "Material for Asgard",
            Type: "Material",
            Project: "Asgard",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 27, 15,0,0),
            State: "REJECTED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: '07ea0d55-6775-4561-b8cd-21e56c3807c3',
            Amount: 900,
            Concept: "Equipment for Asgard",
            Type: "Equipment",
            Project: "Asgard",
            Owner: JSON.stringify({
                    email: "secondUser@gmail.com",
                    roleType: "user",
                    firstName: "Second",
                    wallet: "r48a5f6b-1975-4d66-b085-c6fc910ee6aa",
                    lastName: "User"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 20, 15,0,0),
            State: "APPROVED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: '4e2cb045-9541-4808-b8aa-9d4dd00f738a',
            Amount: 1000,
            Concept: "Material for Midgard",
            Type: "Material",
            Project: "Midgard",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 14, 15,0,0),
            State: "REJECTED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: 'f0e10219-27c1-42e0-9417-69dc2f3a4878',
            Amount: 1100,
            Concept: "Material for Midgard",
            Type: "Material",
            Project: "Midgard",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 3, 15,0,0),
            State: "APPROVED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: 'b4b2351f-61e4-43fb-ad24-af3a2ffd9eb2',
            Amount: 1200,
            Concept: "Equipment for Midgard",
            Type: "Equipment",
            Project: "Midgard",
            Owner: JSON.stringify({
                    email: "secondUser@gmail.com",
                    roleType: "user",
                    firstName: "Second",
                    wallet: "r48a5f6b-1975-4d66-b085-c6fc910ee6aa",
                    lastName: "User"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 2, 15,0,0),
            State: "APPROVED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
        {
            ID: 'cj52551f-61e4-a3fb-adc4-af3a2ff45at4',
            Amount: 1300,
            Concept: "Material for Vanaheim",
            Type: "Material",
            Project: "Vanaheim",
            Owner: JSON.stringify({
                    email: "userTest@gmail.com",
                    roleType: "user",
                    firstName: "User",
                    lastName: "Test",
                    wallet: "as8a5f6b-1975-4d66-b085-c6fc910ee6df"
                }),
            Currency: "USD",
            Date: new Date(2022, 5, 1, 15,0,0),
            State: "APPROVED",
            Resolution: "Example test for resolution",
            Inspector: JSON.stringify({
                    email: "managerTest@gmail.com",
                    roleType: "manager",
                    firstName: "Manager",
                    lastName: "Test",
                    wallet: "a4355f6b-1975-4d66-b085-c6fc910ee6ss"
                }),
        },
    ];

export const ASSETS_LIST = assets;
export const ASSETS_LIST_ID = assets.map(asset => asset.ID);