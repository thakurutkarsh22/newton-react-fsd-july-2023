const hirarchyDataStructure = {
  name: "Amit - CEO",
  hasAnyOneUnderHim: true,
  item: [
    {
      name: "Arun - COO",
      hasAnyOneUnderHim: false,
      item: [],
    },
    {
      name: "Anamika - CTO",
      hasAnyOneUnderHim: true,
      item: [
        {
          name: "Naman - L1",
          hasAnyOneUnderHim: true,
          item: [
            {
              name: "Abhishek - SDE-1",
              hasAnyOneUnderHim: false,
              item: [],
            },
            {
              name: "RAHUL - SDE-3",
              hasAnyOneUnderHim: false,
              item: [],
            },
          ],
        },
        {
          name: "Nitin - L2",
          hasAnyOneUnderHim: true,
          item: [
            {
              name: "Divyanshu - SDE-1",
              hasAnyOneUnderHim: false,
              item: [],
            },
            {
              name: "Shivani - SDE-2",
              hasAnyOneUnderHim: false,
              item: [],
            },
          ],
        },
      ],
    },
    {
      name: "Deepinder - Vp",
      hasAnyOneUnderHim: false,
      item: [],
    },
  ],
};

export default hirarchyDataStructure;
