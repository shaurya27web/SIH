const complaints= {
  drafts: [
    { title: "Amendment to Companies Act", description: "Test draft", startDate: new Date(), endDate: new Date() }
  ],
  comments: [
    { draftIndex: 0, text: "This is a great step forward!" },
    { draftIndex: 0, text: "This will hurt small businesses." }
  ]
};

module.exports= {data:complaints};
