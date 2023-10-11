const main = document.querySelector('main');

const [getSearch, setSearch] = useBill();
const [getTip, setTip] = useTips();
const [getNum, setNum] = usePeople();

function calculation(
  { billAmount, numOfPeople, tips },
  setSearch,
  getSearch,
  setTip,
  getTip,
  setNum,
  getNum
) {
  main.innerHTML = '';
  createNode(
    {
      tag: 'img',
      src: 'images/logo.svg',
      classList: ['logo'],
    },
    document.querySelector('main')
  );

  const calculator = createNode(
    {
      tag: 'div',
      classList: ['calculator'],
    },
    document.querySelector('main')
  );

  const leftSide = createNode(
    {
      tag: 'div',
      classList: ['leftSide'],
    },
    calculator
  );

  createNode(
    {
      tag: 'h4',
      textContent: 'Bill',
      classList: ['h4'],
    },
    leftSide
  );

  const bill = createNode(
    {
      tag: 'div',
      classList: ['amount'],
    },
    leftSide
  );

  createNode(
    {
      tag: 'img',
      src: 'images/icon-dollar.svg',
      classList: ['dollarIcon'],
    },
    bill
  );

  const billInput = createNode(
    {
      tag: 'input',
      type: 'number',
      value: billAmount,
      min: 0,
    },
    bill
  );

  billInput.addEventListener('change', function (e) {
    const value = Math.max(+e.target.value, 0);
    setSearch(value);
    calculation(
      { billAmount: value, numOfPeople, tips },
      setSearch,
      getSearch,
      setTip,
      getTip,
      setNum,
      getNum
    );
  });

  createNode(
    {
      tag: 'h4',
      textContent: 'Select Tip %',
      classList: ['h4'],
    },
    leftSide
  );

  const tip = createNode(
    {
      tag: 'div',
      classList: ['tips'],
    },
    leftSide
  );

  const tipsArray = [5, 10, 15, 25, 50];
  tipsArray.forEach((element, i) => {
    createNode(
      {
        tag: 'input',
        type: 'radio',
        name: 'button',
        value: element,
        id: element,
        checked: element === tips,
      },
      tip
    ).addEventListener('click', function (e) {
      const value = e.target.value;
      setTip(value);
      calculation(
        { billAmount, numOfPeople, tips: value },
        setSearch,
        getSearch,
        setTip,
        getTip,
        setNum,
        getNum
      );
    });
    createNode(
      {
        tag: 'label',
        forInput: element,
        classList: ['tipBtn'],
        textContent: element + '%',
      },
      tip
    );
  });

  const customBtn = createNode(
    {
      tag: 'input',
      type: 'number',
      classList: ['customBtn'],
      placeholder: 'Custom',
      value: [0, ...tipsArray].includes(tips) ? null : tips,
      min: 0,
    },
    tip
  );

  customBtn.addEventListener('change', function (e) {
    const value = Math.max(+e.target.value, 0);
    setTip(value);
    calculation(
      { billAmount, numOfPeople, tips: value },
      setSearch,
      getSearch,
      setTip,
      getTip,
      setNum,
      getNum
    );
  });
  const peopleNumText = createNode(
    {
      tag: 'div',
      classList:
        numOfPeople === 0 ? ['noZero', 'peopleNumText'] : ['peopleNumText'],
    },
    leftSide
  );

  createNode(
    {
      tag: 'h3',
      textContent: 'Number of People',
    },
    peopleNumText
  );

  createNode(
    {
      tag: 'h4',
      textContent: "Can't be zero",
    },
    peopleNumText
  );

  const peopleNum = createNode(
    {
      tag: 'div',
      classList: ['peopleNum'],
    },
    leftSide
  );

  createNode(
    {
      tag: 'img',
      src: 'images/icon-person.svg',
      classList: ['personIcon'],
    },
    peopleNum
  );

  const peopleNumInput = createNode(
    {
      tag: 'input',
      type: 'number',
      classList: ['peopleNumInput'],
      value: numOfPeople,
      min: 0,
    },
    peopleNum
  );

  peopleNumInput.addEventListener('change', function (e) {
    const value = Math.max(+e.target.value, 0);
    setNum(value);
    calculation(
      { billAmount, numOfPeople: value, tips },
      setSearch,
      getSearch,
      setTip,
      getTip,
      setNum,
      getNum
    );
  });

  const rightSide = createNode(
    {
      tag: 'div',
      classList: ['rightSide'],
    },
    calculator
  );

  const tipAmount = createNode(
    {
      tag: 'div',
      classList: ['tipAmount'],
    },
    rightSide
  );

  const tipAmntPerPerson = createNode(
    {
      tag: 'div',
      classList: ['tipAmntPerPerson'],
    },
    tipAmount
  );

  createNode(
    {
      tag: 'h4',
      textContent: 'Tip Amount',
      classList: ['tipAmountText'],
    },
    tipAmntPerPerson
  );

  createNode(
    {
      tag: 'h5',
      textContent: '/person',
    },
    tipAmntPerPerson
  );

  createNode(
    {
      tag: 'h1',
      classList: ['tipAmnt'],
      textContent: Number((billAmount * tips) / 100 / numOfPeople || 0).toFixed(
        2
      ),
    },
    tipAmount
  );

  const totalAmount = createNode(
    {
      tag: 'div',
      classList: ['totalAmount'],
    },
    rightSide
  );

  const totalPerPerson = createNode(
    {
      tag: 'div',
      classList: ['totalPerPerson'],
    },
    totalAmount
  );

  createNode(
    {
      tag: 'h4',
      textContent: 'Total Amount',
      classList: ['tipAmountText'],
    },
    totalPerPerson
  );

  createNode(
    {
      tag: 'h5',
      textContent: '/person',
    },
    totalPerPerson
  );
  console.log(billAmount);
  console.log(tips);
  console.log(numOfPeople);
  createNode(
    {
      tag: 'h1',
      classList: ['tipAmnt'],
      textContent: Number(
        ((billAmount * tips) / 100 + +billAmount) / numOfPeople || 0
      ).toFixed(2),
    },
    totalAmount
  );

  const resetBtn = createNode(
    {
      tag: 'button',
      textContent: 'RESET',
      classList: ['resetBtn'],
    },
    rightSide
  );
  resetBtn.addEventListener('click', function () {
    main.innerHTML = '';
    calculation({}, setSearch, getSearch, setNum, getNum, setTip, getTip);
  });
}

calculation({}, setSearch, getSearch, setNum, getNum, setTip, getTip);
